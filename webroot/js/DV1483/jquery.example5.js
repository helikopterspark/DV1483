(function($) {
    // Shell for your plugin code
    $.fn.example5 = function() {
        function displayPreview() {
            var img = new Image();
            img.src = "../../webroot/img/286608Koenigsee.jpg";
            img.onload = function() {
                $('#example5').append(img);
            }
        }

        $("#slide").click(function() {
            $("#example5 img").slideToggle("slow");
            console.log("Sliding image");
        });

        $("#fade").click(function() {
            $("#example5 img").fadeToggle("slow", "linear");
            console.log("Fading image");
        });

        displayPreview();
    }
})(jQuery);
