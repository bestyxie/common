
/*用户名向左滚动*/
function roling(el){
    if(!el) return;
    el = $(el);
    var clone = el.clone(),
        el_w = el.width(),
        el_margin_right = parseInt(el.css("margin-right")),
        parent = el.parent();
    parent.append(clone);

    function slidetoleft(){
        parent.css({
            left: parseInt(parent.css('left'))-1+'px'
        });

        if(parseInt(parent.css('left'))>-(el_w+el_margin_right)){
            requestAnimationFrame(arguments.callee);
        }
    }
    slidetoleft();
}