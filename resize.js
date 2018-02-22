/**
 * use for wap
 * */



(function() {
   var resize = function() {
     var html = document.documentElement;
     var clientWidth = html.clientWidth;
     var width = clientWidth > 750 ? 750 : clientWidth;
     var fontsize = 100 * (width / 750);
     if (clientWidth != fontsize) {
       html.style.fontSize = fontsize + 'px';
     }
   }
   resize();
   window.addEventListener('resize', resize, false);
})();
