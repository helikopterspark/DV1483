(function($) {
    // Shell for your plugin code
    $.fn.example8 = function() {
        var nInterval;
        function stackImages() {
            var images = $("#big_pic_sl").data('images').split(",");
            var i, img;

            for (i = 0; i < images.length; i++) {
                if (images[i]) {
                    img = new Image();
                    img.src = images[i];
                    $("#big_pic_sl").append(img);
                }
            }
            $("#big_pic_sl img").first().addClass('active');
        }

        function slideImage(fadetime) {
            var active = $("#big_pic_sl img.active");
            var next = active.next().length ? active.next() : $("#big_pic_sl img").first();
            fadetime = fadetime || 1000;

            active.addClass('last-active');
            next.css({opacity: 0.0})
            .addClass('active')
            .fadeTo(fadetime, 1.0, function() {
                active.removeClass('active last-active');
            });
        }

        stackImages();
        nInterval = setInterval(function() {slideImage();}, 5000);

        $("#big_pic_sl img").click(function(event) {
            clearInterval(nInterval);
            slideImage(100);
            nInterval = setInterval(function() {slideImage();}, 5000);
        });
    }
})(jQuery);
