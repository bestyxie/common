;(function (root, factory) {
    if (typeof exports === "object") {
        // CommonJS
        module.exports = exports = factory();
    }
    else if (typeof define === "function" && define.amd) {
        // AMD
        define([], factory);
    }
    else {
        // Global (browser)
        root.MD5 = factory();
    }
})(this, function () {
    function getOffset(el){
        if(!el){
            return false;
        }

        var _x = 0,
            _y = 0;

        while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)){
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;

            el = el.offsetParent;
        }

        return {
            left: _x,
            top: _y
        }
    }

    return getOffset;
})