var clone = require("./clone");

/**
 *
 * */
var jsonp = function (opt){
    if(!opt || typeof opt != 'object' || !opt.url) return;

    var default_opt = {
        url: "",
        data: {},
        success: function (res){},
        fail: function (err) {}
    }

    opt = clone(default_opt, opt);

    var script = document.createElement("script");

    window.jsonpCb = function (res) {
        document.body.removeChild(script);
        delete window.jsonCb;

        opt.success(res);
    }

    script.src = opt.url+"?"+handleData(opt.data)+"&cb=jsonpCb"
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