$(document).ready(function(){
    'use strict';
    $('.clickable').click(function() {
        $(this).addLightbox();
    });
    $('#lightbox-gallery-container').addGallery();

    if ($('#start').length) {
        $(window).scrollTop($('#start').offset().top - 50).scrollLeft($('#start').offset().left);
    }

});
