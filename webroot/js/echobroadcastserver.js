var WebSocketServer = require('websocket').server;
var http = require('http');
var port = 8078;
var broadcastTo = [];

// Set up http-server
var httpServer = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello world\n');
});
// Setup the http-server to listen to a port
httpServer.listen(port, function() {
    console.log((new Date()) + ' HTTP server is listening on port ' + port);
});

// Create an object for the websocket
wsServer = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false
});

// Always check and explicitly allow the origin
function originIsAllowed(origin) {
    if (origin === 'http://dbwebb.se' || origin === 'http://localhost' || origin === 'http://127.0.0.1:8080' || origin === 'http://www.student.bth.se/~carb14/') {
        return true;
    } else {
        return false;
    }
}

/*
* Echo protocol
*
*/

function acceptConnectionAsEcho(request, subprotocol) {
    if (subprotocol === undefined) {
        subprotocol = 'echo-protocol';
    }
    var connection = request.accept(subprotocol, request.origin);
    connection.sendUTF('You are connected to the echo server.');

    // Callback to handle each message from the client
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        } else if (message.type === 'binary') {
            console.log('Received binary message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });

    // Callback when client closes the connection
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

    return true;
}

/**
* Avoid injections
*
*/
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/*
* Broadcast protocol
*
*/
function acceptConnectionAsBroadcast(request) {
    var connection = request.accept('broadcast-protocol', request.origin);
    connection.broadcastId = broadcastTo.push(connection) - 1;
    console.log((new Date()) + ' Broadcast connection accepted from ' + request.origin + ' id = ' + connection.broadcastId);
    broadcastTo[connection.broadcastId].sendUTF('You are connected to the broadcast server.');

    // Callback to handle each message from the client
    connection.on('message', function(message) {
        var clients = 0;
        for (var i = 0; i < broadcastTo.length; i++) {
            if (broadcastTo[i]) {
                clients++;
                broadcastTo[i].sendUTF(htmlEntities(message.utf8Data));
            }
        }
        console.log('Broadcast message to ' + clients + ' clients: ' + message.utf8Data);
    });

    // Callback when client closes the connection
    connection.on('close', function(reasonCode, description) {
        console.log((new Date() + ' Peer ' + connection.remoteAddress + ' disconnected broadcastid = ' + connection.broadcastId + '.'));
        broadcastTo[connection.broadcastId] = null;
    });

    return true;
}



// Create a callback to handle each connection request
wsServer.on('request', function(request) {
    var status = null;
    // Make sure we only accept requests from an allowed origin
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected');
        return;
    }

    // Loop through protocols. Accept by highest order first.
    for (var i = 0; i < request.requestedProtocols.length; i++) {
        if (request.requestedProtocols[i] === 'broadcast-protocol') {
            status = acceptConnectionAsBroadcast(request);
        } else if (request.requestedProtocols[i] === 'echo-protocol') {
            status = acceptConnectionAsEcho(request);
        }
    };

    // Unsupported protocol
    if (!status) {
        acceptConnectionAsEcho(request, null);
    }

});
