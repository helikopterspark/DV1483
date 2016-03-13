(function($) {
    // Shell for your plugin code
    $.fn.example7 = function() {
        function listThumbnails() {
            var images = $("#pic_array").data('images').split(",");
            var i, img;
            for (i = 0; i < images.length; i++) {
                if (images[i]) {
                    img = new Image();
                    img.src = images[i];
                    $("#pic_array").append(img);
                }
            }
            img = new Image();
            $('#big_pic').append(img);
        }

        function displayFirst() {
            $("#pic_array img").first().trigger("click");
        }

        listThumbnails();

        $("#pic_array img").click(function(event) {
            $( "img" ).each(function() {
                $( this ).removeClass( "selected" );
            });
            $(this).addClass('selected');
            $('#big_pic img')
            .attr('src', $(this).attr('src'));
            return false;
        });

        $("#big_pic img").click(function(event) {
            $(this).lightbox();
        });

        displayFirst();
    }

})(jQuery);
