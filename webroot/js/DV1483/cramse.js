window.Cramse = (function(window, document, undefined ) {
    var private, Cramse = {};

    Cramse.getRandom = function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
    * Get the position of an element.
    * http://stackoverflow.com/questions/442404/dynamically-retrieve-html-element-x-y-position-with-javascript
    * @param el the element.
    */
    Cramse.getOffset = function ( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
    //var x = getOffset( document.getElementById('yourElId') ).left;

    // Expose public methods
    return Cramse;

})(window, window.document);
