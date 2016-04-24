$(document).ready(function () {
    'use strict';
    var url = 'ws://127.0.0.1:8079',
    websocket,
    output = $('#messages_list'),
    lines = $('#messages_list_lines'),
    userlist = $('#user_list'),
    nick,
    user_select;

    // Eventhandler to create the websocket connection when someone clicks the button #connect
    $('#connect').on('click', function(event) {
        nick = $('#nick').val();
        console.log((new Date()) + ' Connecting to: ' + url);
        outputLog('Connecting to: ' + url);
        websocket = new WebSocket(url, 'chat-protocol');

        // Eventhandler when the websocket is opened.
        websocket.onopen = function() {
            var msg = JSON.stringify({
                type: 'name',
                name: nick
            });
            console.log((new Date()) + ' The websocket is now open.');
            websocket.send(msg);
            $('#connect').hide();
            $('#close').show();
            $('#nick').prop('disabled', true).hide();
            $('#loggedin').val('Logged in as ' + nick).show();
        }

        websocket.onmessage = function(event) {
            var rec_message = JSON.parse(event.data);
            console.log((new Date()) + ' Server said: ' + rec_message.name + ': ' + rec_message.text);
            outputLog(rec_message.name + ': ' + rec_message.text, rec_message.private_msg);
            updateUserlist(rec_message.user_list, user_select);
        }

        // Eventhandler when the websocket is closed.
        websocket.onclose = function() {
            var empty = [];
            console.log('The websocket is now closed.');
            outputLog('You have left the chat. Websocket closed.');
            updateUserlist(empty);
            $('#connect').show();
            $('#close').hide();
            $('#loggedin').val('').hide();
            $('#nick').prop('disabled', false).show();
        }
    });

    // Send message
    $('#send').on('click', function(event) {
        var message = $('#message').val();
        var private_msg = $('#user_list_lines option:selected').val();
        var username = $('#user_list_lines option:selected').text();
        var msg;
        user_select = private_msg;
        if (!websocket || websocket.readyState === 3) {
            console.log('The websocket is not connected to a server.');
        } else {
            msg = JSON.stringify({
                type: 'message',
                name: nick,
                text: message,
                to_user: private_msg
            });
            if (username) {
                username = ' to ' + username;
            }
            console.log('Sending message: ' + message);
            outputLog('You' + username + ': ' + message, private_msg);
            websocket.send(msg);
        }
    });

    // Close connection to server
    $('#close').on('click', function() {
        websocket.close();
    });

    function outputLog(message, private_msg) {
        var prv = null;
        var now = new Date();
        if (private_msg) {
            prv = 'class="private_msg"';
        }
        $(lines).append('<li '+ prv + '>'+ now.toLocaleTimeString() + ' ' + message + '</li>');
        $(output).scrollTop(output[0].scrollHeight);
    }

    function updateUserlist(listOfUsers, selected_user) {
        var items = 0;
        var selected = null;
        $('#user_list_lines').empty();
        for (var i = 0; i < listOfUsers.length; i++) {
            if (listOfUsers[i] != null) {
                if (parseInt(selected_user) == i) {
                    selected = 'selected';
                }
                $('#user_list_lines').append('<option value="' + i + '" ' + selected + '>' + listOfUsers[i] + '</option>');
                items += 1;
                selected = null;
            }
        }
        items = items < 2 ? 2 : items;
        $('#user_list_lines').attr('size', items);

        $('#user_list_app').on('click', function() {
            $('#user_list_lines').attr('selectedIndex', '-1').children("option:selected").removeAttr("selected");
            user_select = null;
        });
    }
    console.log('Everything is ready.');
});
