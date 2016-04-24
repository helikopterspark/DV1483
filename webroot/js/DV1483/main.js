$(document).ready(function(){
    'use strict';
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    $('.clickable').click(function() {
        $(this).addLightbox();
    });
    $('#lightbox-gallery-container').addGallery();

    if ($('#start').length) {
        $(window).scrollTop($('#start').offset().top - 50).scrollLeft($('#start').offset().left);
    }

    if (sPage === 'shop') {
        $(this).addShop();
    }

    if (sPage === 'checkout') {
        $(this).gotoCheckout();
    }

    if (sPage === 'game') {
        $(this).asteroids();
    }

    if (sPage === 'chat') {
        $.getScript( "../js/chatclient.js", function( data, textStatus, jqxhr ) {
            //console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Loading chatclient.js." );
        });
    }

    if (sPage === 'echobroadcast') {
        $.getScript( "../js/broadcastclient.js", function( data, textStatus, jqxhr ) {
            //console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Loading broadcastclient.js." );
        });
    }

});
