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

});
