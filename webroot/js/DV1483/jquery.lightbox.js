(function($) {

    $.fn.lightbox = function() {

        function positionLightboxImage() {
            var top = ($(window).height() - $('#lightbox_container').height()) / 2;
            var left = ($(window).width() - $('#lightbox_container').width()) / 2;
            $('#lightbox_container')
            .css({
                'position': 'fixed',
                'top': top,
                'left': left,
                'background-color': '#282828',
                'padding': '15px',
                'border-radius': '10px',
                'z-index': 10
            })
            .fadeIn();
        }

        function removeLightbox() {
            $('body').off("mousewheel", false); // enable mousewheel scrolling
            $('#lightbox_overlay, #lightbox_container')
            .fadeOut('fast', function() {
                $(this).remove();
                $('body').css('overflow-y', 'auto'); // show scrollbars!
            });
        }

        $(document).keyup(function(e) {
            if (e.keyCode == 27) removeLightbox();   // esc
        });

        $('body').css({'overflow-y': 'hidden'}); // hide scrollbars!
        $("body").on("mousewheel", false);  // disable mousewheel scrolling

        $('<div id="lightbox_overlay"></div>')
        .css({'top': $(document).scrollTop()})
        .css({'position': 'absolute',
        'left': 0,
        'height': '100%',
        'width': '100%',
        'background': 'black no-repeat scroll center center'
    })


    .css({'opacity': '0'})
    .animate({'opacity': '0.5'}, 'slow')
    .appendTo('body');

    $('<div id="lightbox_container"></div>')
    .hide()
    .appendTo('body');

    $('<img id="lb_image">')
    .attr('src', $(this).attr('src'))
    .css({'max-width': '100%', 'max-height': 'auto'})
    .load(function() {
        positionLightboxImage();
    })
    .click(function() {
        removeLightbox();
    })
    .appendTo('#lightbox_container');

}
})(jQuery);
