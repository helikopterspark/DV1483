$(document).ready(function () {
    'use strict';

    var url = 'ws://nodejs1.student.bth.se:8078',
    websocket,
    form = $('#form1'),
    protocol = 'echo-protocol',
    output = $('#log');

    // Eventhandler to create the websocket connection when someone clicks the button #connect
    $('#connect').on('click', function(event) {

        console.log((new Date()) + ' Connecting to: ' + url);
        outputLog('Connecting to: ' + url);
        websocket = new WebSocket(url, protocol);

        // Eventhandler when the websocket is opened.
        websocket.onopen = function() {
            console.log((new Date()) + ' The websocket is now open.');
            //websocket.send('Thanks for letting me connect to you.');
            outputLog('The websocket is now open.');
        }

        websocket.onmessage = function(event) {
            console.log((new Date()) + ' Server said: ' + event.data);
            outputLog('Server said: ' + event.data);
        }

        // Eventhandler when the websocket is closed.
        websocket.onclose = function() {
            console.log('The websocket is now closed.');
            outputLog('Websocket closed.');
        }
    });

    // Send message
    $('#send').on('click', function(event) {
        var message = $('#message').val();

        if (!websocket || websocket.readyState === 3) {
            console.log('The websocket is not connected to a server.');
            outputLog('Not connected to server.');
        } else {
            console.log('Sending message: ' + message);
            websocket.send(message);
            outputLog('You said: ' + message);
        }
    });

    // Close connection to server
    $('#close').on('click', function() {
        websocket.send('Client intentionally closing connection.')
        websocket.close();
    });

    // event-handler for radio-buttons: protocol.
    $("input[name=protocol]:radio").click(function () {
        if ($(this).prop('checked', true)) {
            protocol = $(this).prop("value");
        }
    });

    // event-handler select-element: server.
    $("#connect_url").change(function () {
        url = $('#connect_url').val();
        switch (url) {
            case '1':
                url = 'ws://nodejs1.student.bth.se:8078';
                break;
            case '2':
                url = 'ws://nodejs2.student.bth.se:8078';
                break;
            case '3':
                url = 'ws://dbwebb.se:1337';
                break;
                /*
            case '4':
                url = 'ws://127.0.0.1:8078';
                break;
            case '5':
                url = 'ws://10.0.1.40:8078';
                break;
                */
            default:
                url = 'ws://nodejs1.student.bth.se:8078';
                break;
        }
    });

    function outputLog(message) {
        var now = new Date();
        $(output).append(now.toLocaleTimeString() + ' ' + message + '<br />').scrollTop(output[0].scrollHeight);
    }

    console.log('Everything is ready.');
});
