(function($) {
    // Shell for your plugin code
    $.fn.example3 = function() {
        if ($('#textfield').val()) {
            console.log($('#textfield').val());
            $('<div class="colorpatch">'+$('#textfield').val()+'</div>').prependTo('#palette')
            .css('background-color', $('#textfield').val())
            .click(function() {
                $(this).remove();
            })
            .show();
        }
    }
})(jQuery);
