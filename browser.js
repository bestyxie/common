/**
 * if (browser.versions.mobile) {//�ж��Ƿ����ƶ��豸�򿪡�browser����������
        var ua = navigator.userAgent.toLowerCase();//��ȡ�ж��õĶ���
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //��΢���д�
        }
        if (ua.math(/mobile mqqbrowser/i) == "mobile mqqbrowser") {
            //��qq�ͻ��˴�
        }
        if (ua.match(/WeiBo/i) == "weibo") {
            //������΢���ͻ��˴�
        }
        if (ua.match(/QQ/i) == "qq") {
             //��QQ�ռ��
        }
        if (browser.versions.ios) {
            //�Ƿ���IOS�������
        }
        if(browser.versions.android){
        //�Ƿ��ڰ�׿�������
        }
    } else {
        //�������PC�������
    }
 *
 * */



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
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {   //�ƶ��ն�������汾��Ϣ
                trident: u.indexOf('Trident') > -1, //IE�ں�
                presto: u.indexOf('Presto') > -1, //opera�ں�
                webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻�uc�����
                iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
                iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
                webApp: u.indexOf('Safari') == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    return browser;
})