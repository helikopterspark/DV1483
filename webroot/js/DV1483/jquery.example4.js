(function($) {
    // Shell for your plugin code
    $.fn.example4 = function() {
        function displayPreview() {
            var img = new Image();
            img.src = "../webroot/img/286608Koenigsee.jpg";
            img.onload = function() {
                $('#preview').append(img);
                $("#preview img").addClass('example');
                $("#preview").css({'margin': '0 auto'});
                showDims();
            }
        }

        function showDims() {
            if ($("#wxh")) {
                $("#wxh").remove();
            }
            $("<label id='wxh'> " + $("#preview img").width() + " x " + $("#preview img").height() + "px</label>").insertAfter("#dims");
        }

        $('#dims').click(function() {
            showDims();
        })

        $("#wplus").click(function() {
            $("#preview img").width($("#preview img").width() + 10);
            showDims();
        });

        $("#wminus").click(function() {
            $("#preview img").width($("#preview img").width() - 10);
            showDims();
        });

        $("#hplus").click(function() {
            $("#preview img").height($("#preview img").height() + 10);
            showDims();
        });

        $("#hminus").click(function() {
            $("#preview img").height($("#preview img").height() - 10);
            showDims();
        });

        displayPreview();
    }
})(jQuery);
