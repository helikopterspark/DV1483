(function($) {
    // Shell for your plugin code
    $.fn.example6 = function() {

        function positionLightboxImage() {
            var top = ($(window).height() - $('#lb_container').height()) / 2;
            var left = ($(window).width() - $('#lb_container').width()) / 2;
            $('#lb_container')
            .css({
                //'top': top + $(document).scrollTop(),
                'top': top,
                'left': left,
                'position': 'fixed',
                'background-color': 'black',
                'padding': '10px',
                'border': '2px solid white',
                'z-index': 10
            })
            .fadeIn();
        }

        function removeLightbox() {
            $('#lb_overlay, #lb_container')
            .fadeOut('fast', function() {
                $(this).remove();
                $('body').css('overflow-y', 'auto'); // show scrollbars!
            });
        }

        $("#small_pic").click(function(event) {
            console.log("Click on pic");

            $('body').css('overflow-y', 'hidden'); // hide scrollbars!

            $('<div id="lb_overlay"></div>')
            .css('top', $(document).scrollTop())
            .css({'opacity': '0'})
            .animate({'opacity': '0.5'}, 'slow')
            .appendTo('body');

            $('<div id="lb_container"></div>')
            .hide()
            .appendTo('body');

            $('<img>')
            .attr('src', $(this).attr('src'))
            .load(function() {
                positionLightboxImage();
            })
            .click(function() {
                removeLightbox();
            })
            .appendTo('#lb_container');

            return false;
        });
    //});

    $(document).keyup(function(e) {
        if (e.keyCode == 27) removeLightbox();   // esc
    });
}
})(jQuery);
