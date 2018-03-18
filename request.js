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
    var request = {};

    request.get = function (url, success, fail){
        if(!url) return throw new Error("requist url is required.");

        var xhr = createXHR();
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    success(xhr.responseText);
                }else {
                    fail(xhr.status);
                }
            }
        }

        xhr.open("get", url, false);
        xhr.send(null);

    }

    request.post = function (url, data, success, fail){
        if(!url) return throw new Error("requist url is required.");

        var xhr = createXHR();
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    success(JSON.parse(xhr.responseText));
                }else {
                    fail(xhr.status);
                }
            }
        }

        xhr.open("post", url, false);
        xhr.send(data);
    }

    function createXHR(){
        if(typeof XMLHttpRequest != "undefined"){
            return new XMLHttpRequest();
        }
        else if(typeof ActiveXObject != "undefined"){
            if(typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"],
                    i, len;
                for(i=0, len=versions.length; i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    }catch (ex){

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else{
            throw new Error("No XHR object available.")
        }
    }

    return request;
})