var clone = require("./clone");

/**
 *
 * */
var jsonp = function (opt){
    if(!opt || typeof opt != 'object' || !opt.url) return;

    var default_opt = {
        url: "",
        data: {},
        method: "get",
        success: function (res){},
        fail: function (err) {}
    }

    opt = clone(default_opt, opt);

    if(opt.method.toLowerCase() == "get"){
        get(opt);
    }
    else {
        post(opt);
    }
}

function get(opt){
    var script = document.createElement("script");

    window.jsonpCb = function (res) {
        document.body.removeChild(script);
        delete window.jsonpCb;

        opt.success(res);
    }

    script.src = opt.url+"?"+handleData(opt.data)+"&cb=jsonpCb"
}

function post(opt){
    var iframe = document.createElement("iframe");
    iframe.name = "iframePost";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    var form = document.createElement("form");
    var node = document.createElement("input");

    iframe.addEventListener("load", function (){
        var res = this.contentDocument.body.innerHTML;

        opt.success(JSON.parse(res));
    });

    form.action = opt.url;
    form.method = "post";
    form.target = iframe.name;
    for(var name in opt.data){
        node.name = name;
        node.value = opt.data[name].toString();
        form.appendChild(node.cloneNode());
    }

    form.style.display = "none";
    document.body.appendChild(form);

    form.submit();

    document.body.removeChild(form)
}

function handleData(data){
    var keys = Object.keys(data);
    var ret = "";

    data.map(function (d, i){
        ret += keys[i]+"="+d;

        ret += (i == keys.length-1 ? "" : "&");
    });

    return ret;
}

module.exports = jsonp;