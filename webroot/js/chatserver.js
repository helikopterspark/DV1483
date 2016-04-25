/**
* Chat server
*
*/

var WebSocketServer = require('websocket').server;
var http = require('http');
var port = 8079;
var broadcastTo = [];
var users = [];

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

// Array.find polyfill
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

// Always check and explicitly allow the origin
function originIsAllowed(origin) {
    if (origin === 'http://dbwebb.se' || origin === 'http://localhost' || origin === 'http://127.0.0.1:8080' || origin === 'http://www.student.bth.se') {
        return true;
    } else {
        return false;
    }
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
    var connection = request.accept('chat-protocol', request.origin);
    //var open_msg = JSON.stringify({type: 'message', text: 'You are connected to the chat server', name: 'Server'});
    connection.broadcastId = broadcastTo.push(connection) - 1;
    console.log((new Date()) + ' Broadcast connection accepted from ' + request.origin + ' id = ' + connection.broadcastId);
    broadcastTo[connection.broadcastId].sendUTF(JSON.stringify({type: 'connectionaccept', connectionId: connection.broadcastId}));

    // Callback to handle each message from the client
    connection.on('message', function(message) {
        var rec_msg = JSON.parse(message.utf8Data);
        var clients = 0;
        var send_msg;
        var oldname;

        // send message
        if (rec_msg.type === 'message' && rec_msg.text) {
            send_msg = JSON.stringify({
                type: 'message',
                name: htmlEntities(connection.name),
                text: htmlEntities(rec_msg.text),
                private_msg: rec_msg.to_user,
                user_list: users
            });
            // private message
            if (rec_msg.to_user) {
                clients++;
                if (rec_msg.to_user != connection.broadcastId) {
                    broadcastTo[rec_msg.to_user].sendUTF(send_msg);
                }
            // public message
            } else {
                for (var i = 0; i < broadcastTo.length; i++) {
                    if (broadcastTo[i] && connection.broadcastId !== i) {
                        clients++;
                        broadcastTo[i].sendUTF(send_msg);
                    }
                }
            }
            console.log('Broadcast message to ' + clients + ' clients: ' + message.utf8Data);
        // login message
        } else if (rec_msg.type === 'name') {
            if (htmlEntities(rec_msg.name).length > 0) {
                if (users.find(function(name) {
                    return name === htmlEntities(rec_msg.name);
                })) {
                    connection.name = htmlEntities(rec_msg.name) + ' (' + connection.broadcastId + ')';
                    broadcastTo[connection.broadcastId].sendUTF(JSON.stringify({type: 'nameappend', nameappend: connection.name}));
                } else {
                    connection.name = htmlEntities(rec_msg.name);
                }
            } else {
                connection.name = 'Guest' + connection.broadcastId;
            }

            users[connection.broadcastId] = htmlEntities(connection.name);

            send_msg = JSON.stringify({
                type: 'message',
                name: htmlEntities(connection.name),
                text: 'has joined the chat',
                user_list: users
            });

            for (var i = 0; i < broadcastTo.length; i++) {
                if (broadcastTo[i]) {
                    clients++;
                    broadcastTo[i].sendUTF(send_msg);
                }
            }
            // change nickname
        } else if (rec_msg.type === 'changename') {
            oldname = connection.name;
            if (users.find(function(name) {
                return name === htmlEntities(rec_msg.newname);
            })) {
                users[connection.broadcastId] = htmlEntities(rec_msg.newname) + ' (' + connection.broadcastId + ')';
                connection.name = htmlEntities(rec_msg.newname) + ' (' + connection.broadcastId + ')';
                broadcastTo[connection.broadcastId].sendUTF(JSON.stringify({type: 'nameappend', nameappend: connection.name}));
            } else {
                users[connection.broadcastId] = htmlEntities(rec_msg.newname);
                connection.name = htmlEntities(rec_msg.newname);
            }
            send_msg = JSON.stringify({
                type: 'message',
                name: oldname,
                text: 'is now known as ' + connection.name,
                user_list: users
            });

            for (var i = 0; i < broadcastTo.length; i++) {
                if (broadcastTo[i]) {
                    clients++;
                    broadcastTo[i].sendUTF(send_msg);
                }
            }
        }
    });

    // Callback when client closes the connection
    connection.on('close', function(reasonCode, description) {
        var send_msg;
        var clients = 0;
        users[connection.broadcastId] = null;
        broadcastTo[connection.broadcastId] = null;
        send_msg = JSON.stringify({
            type: 'message',
            name: connection.name,
            text: ' has left the chat.',
            user_list: users
        });
        console.log((new Date() + ' Peer ' + connection.remoteAddress + ' disconnected broadcastid = ' + connection.broadcastId + '.'));

        for (var i = 0; i < broadcastTo.length; i++) {
            if (broadcastTo[i]) {
                clients++;
                broadcastTo[i].sendUTF(send_msg);
            }
        }
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
        if (request.requestedProtocols[i] === 'chat-protocol') {
            status = acceptConnectionAsBroadcast(request);
        }
    };

    // Unsupported protocol
    if (!status) {
        request.reject();
    }

});
