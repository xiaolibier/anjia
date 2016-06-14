define('core/utils', [
    'jquery'
], function (t) {
    return t.touchEvents = {
        start: t.support.touch ? 'touchstart' : 'mousedown',
        move: t.support.touch ? 'touchmove' : 'mousemove',
        end: t.support.touch ? 'touchend' : 'mouseup'
    },
    t.fn.transitionEnd = function (t) {
        function i(a) {
            if (a.target === this) for (t.call(this, a), e = 0; e < n.length; e++) r.off(n[e], i)
        }
        var e,
        n = [
            'webkitTransitionEnd',
            'transitionend',
            'oTransitionEnd',
            'MSTransitionEnd',
            'msTransitionEnd'
        ],
        r = this;
        if (t) for (e = 0; e < n.length; e++) r.on(n[e], i);
        return this
    },
    t.switchLink = function (t) {
        switch (t.link_type) {
            case 'goods':
                t.link_url = '/goods/' + t.data.goods_id;
                break;
            case 'buy':
                t.link_url = 'javascript:window.openCart(' + t.data.cart_id + ')';
                break;
            case 'feature':
                t.link_url = '/feature/' + t.data.feature_id;
                break;
            case 'tag':
                t.link_url = '/tag/' + t.data.tag_id
        }
        return t
    },
    t.changeLink = function (i) {
        return t.each(i, function (t, e) {
            switch (e.link_type) {
                case 'goods':
                    i[t].link_url = '/goods/' + e.data.goods_id;
                    break;
                case 'buy':
                    i[t].link_url = 'javascript:window.openCart(' + e.data.cart_id + ')';
                    break;
                case 'feature':
                    i[t].link_url = '/feature/' + e.data.feature_id;
                    break;
                case 'tag':
                    i[t].link_url = '/tag/' + e.data.tag_id
            }
        }), i
    },
    {
        notify: function () {
        },
        validMobile: function (t) {
            return /^((\+86)|(86))?(1)\d{10}$/.test('' + t)
        },
        validPhone: function (t) {
            return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test('' + t)
        },
        validNumber: function (t) {
            return /^\d+$/.test(t)
        },
        validEmail: function (t) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        },
        validPostalCode: function (t) {
            return t = '' + t,
            /^\d{6}$/.test(t)
        }
    }
}),
define('share', [
    'jquery'
], function ($) {
    function changeURLArg(url, arg, arg_val) {
        var pattern = arg + '=([^&]*)',
        replaceText = arg + '=' + arg_val;
        if (url.match(pattern)) {
            var tmp = '/(' + arg + '=)([^&]*)/gi';
            return tmp = url.replace(eval(tmp), replaceText)
        }
        return url.match('[?]') ? url + '&' + replaceText : url + '?' + replaceText
    }
    function delQueStr(t, e) {
        var n = '';
        if ( - 1 == t.indexOf('?')) return t;
        n = t.substr(t.indexOf('?') + 1);
        var r = '',
        a = '';
        if ( - 1 != n.indexOf('&')) {
            r = n.split('&');
            for (i in r) r[i].split('=') [0] != e && (a = a + r[i].split('=') [0] + '=' + r[i].split('=') [1] + '&');
            return t.substr(0, t.indexOf('?')) + '?' + a.substr(0, a.length - 1)
        }
        return r = n.split('='),
        r[0] == e ? t.substr(0, t.indexOf('?'))  : t
    }
    $.getUrlParam = function (t, i) {
        var e = i ? i : window.location.search,
        n = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
        r = decodeURI(e).substr(1).match(n);
        return null != r ? unescape(r[2])  : null
    },
    $.statistics = {
        init: function () {
            if (void 0 != _global.shop && void 0 != _global.shop.magic_appid && '' != _global.shop.magic_appid) {
                var t = this,
                i = t.getCookie('uuid');
                '' == i && (i = t.generateUUID(), t.setCookie('uuid', i, 365));
                var e = {
                    cur_url: window.location.href,
                    prev_url: t.getCookie('prev_url'),
                    width: screen.width,
                    height: screen.height,
                    title: $(document).attr('title'),
                    uuid: i,
                    merchant_id: _global.shop.merchant_id,
                    shop_id: _global.shop.id,
                    appid: _global.shop.magic_appid,
                    member_id: _global.user.id || 0
                };
                t.setCookie('prev_url', e.cur_url, 0.01041),
                $.ajax({
                    url: _global.shop.magic_server,
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    type: 'post',
                    data: e,
                    success: function () {
                    }
                })
            }
        },
        generateUUID: function () {
            var t = (new Date).getTime(),
            i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (i) {
                var e = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16),
                ('x' == i ? e : 7 & e | 8).toString(16)
            });
            return i
        },
        setCookie: function (t, i, e) {
            var n = new Date,
            t = t ? t : 'true',
            e = e ? e : 30;
            n.setTime(n.getTime() + 24 * e * 60 * 60 * 1000),
            document.cookie = t + '=' + escape(i) + ';expires=' + n.toGMTString()
        },
        getCookie: function (t) {
            var i,
            e = new RegExp('(^| )' + t + '=([^;]*)(;|$)');
            return (i = document.cookie.match(e)) ? unescape(i[2])  : ''
        }
    },
    $.device.weixin && void 0 != _global.jssdk && ($.setShare = function (t) {
        wx.showOptionMenu();
        var i = $.getUrlParam('uid', t.link);
        _global.user.id && parseInt(i) != _global.user.id && (_global.guider || _global.partner) && (t.link = delQueStr(t.link, 'did'), t.link = changeURLArg(t.link, 'uid', _global.user.id)),
        wx.onMenuShareAppMessage(t),
        wx.onMenuShareTimeline(t),
        wx.onMenuShareQQ(t),
        wx.onMenuShareWeibo(t),
        wx.onMenuShareQZone(t)
    }, $.setShare({
        title: _global.shop.name,
        desc: _global.shop.share_description,
        link: window.location.href,
        imgUrl: _global.url.ms + _global.shop.share_img
    }), $.hideOptionMenu = function () {
        wx.hideOptionMenu()
    }, $.hideMenuItems = function (t) {
        wx.hideMenuItems({
            menuList: t
        })
    }, $.hideAllNonBaseMenuItem = function () {
        wx.hideAllNonBaseMenuItem()
    }, $.previewImage = function (t) {
        wx.previewImage({
            current: t.current,
            urls: t.urls
        })
    }),
    $.device.weixin && void 0 != _global.jsSdkMall && ($.setShare = function (t) {
        wx.showOptionMenu(),
        wx.onMenuShareAppMessage(t),
        wx.onMenuShareTimeline(t),
        wx.onMenuShareQQ(t),
        wx.onMenuShareWeibo(t),
        wx.onMenuShareQZone(t)
    }, $.setShare({
        title: _global.mall_info.name,
        desc: _global.mall_info.share_description,
        link: window.location.href,
        imgUrl: _global.url.ms + (_global.mall_info.share_img ? _global.mall_info.share_img : _global.mall_info.logo)
    }))
}),
define('core/common', [
    'jquery',
    'fastclick',
    'share',
    'backbone',
    'doT',
    'components/user/view',
    'components/account/views/main'
], function (t, i, e, n, r, a, o) {
    function s() {
        var t = navigator.userAgent,
        i = t.match(/(Android);?[\s\/]+([\d.]+)?/),
        e = t.match(/(iPad).*OS\s([\d_]+)/),
        n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
        r = !e && t.match(/(iPhone\sOS)\s([\d_]+)/),
        a = t.match(/MicroMessenger/i);
        _const.is_pc = !(a || e || n || r || i),
        a ? _const.weixin = !0 : _const.weixin = !1
    }
    function c() {
        var i = document.body.scrollWidth,
        e = document.documentElement.clientHeight;
        s(),
        _const.is_pc ? (d = 60, l = 62, f = d + l, h = 47, m = e - f - h - d > 568 ? 568 : e - f - h - d, t(b).show())  : t(b).hide();
        var n = 'block',
        r = 'background: rgba(2, 42, 61, 1);background: -webkit-linear-gradient(top left, rgba(2, 42, 61, 1) 0%, rgba(1, 110, 159, 1) 100%);background: linear-gradient(to bottom right, rgba(2, 42, 61, 1) 0%, rgba(1, 110, 159, 1) 100%);',
        a = 'background:rgba(255, 255, 255, 0) none repeat scroll 0 0 !important;';
        (300 > m || 'full' == w || 540 >= i) && (p = 'full' == w ? i : 540, p = 540 >= p ? i : 540, r = '', a = 'box-shadow: 0 0 8px rgba(0, 0, 0, .6)', m = e, d = 0, l = 0, f = 0, n = 'none');
        var o = (i - p) / 2,
        c = '.view-container{min-height:' + m + 'px}',
        g = 'body{width: 100%;}.bar{width: 100%;}',
        _ = i == p ? i : o + p + 40,
        v = m == e ? 0 : e - f - m;
        _const.is_pc ? g = 'html{' + r + '}body{width: ' + p + 'px;padding-top: ' + d + 'px!important;' + a + '}#phone-top, #phone-bottom{display:' + n + ';}.bar, .popup{width: ' + p + 'px;left: auto;right: ' + o + 'px;bottom: ' + v + 'px;}.top-bar{top: ' + (f + 10) + 'px;height: 36px;}.aside-bar{right: ' + o + 'px;bottom: ' + (v + 80) + 'px;}.aside-bar-collect{right: ' + o + 'px;}#views{height: ' + m + 'px;overflow-y:scroll;overflow-x: hidden;}' + b + '{left:' + _ + 'px;}.popup-overlay{width: ' + p + 'px;right: ' + o + 'px;left: auto;top:' + f + 'px;height:' + m + 'px;}.panel.panel-right.panel-reveal{right: ' + o + 'px;top: ' + f + 'px;}.panel-user{width:240px;}body.with-panel-right-cover .panel-right, body.with-panel-right-reveal .panel.active{transform: translate3d(0,0,0);-webkit-transform(0,0,0);}body.with-panel-right-reveal .views{transform:translate3d(-240px,0,0);-webkit-transform(-240px,0,0);}body.with-panel-right-reveal .bar, body.with-panel-right-reveal .popup, body.with-panel-right-reveal .aside-bar{right: 0;}.js-search-container >.search-container{width:' + p + 'px;margin:0 auto;top: ' + f + 'px;}' : t(b).hide(),
        c += g,
        u.innerHTML = '',
        u.appendChild(document.createTextNode(c)),
        document.head.appendChild(u)
    }
    var u = document.createElement('style'),
    p = 320,
    d = 0,
    l = 0,
    f = d + l,
    h = 0,
    g = document.body.clientHeight,
    m = g,
    b = '#qr-code-enter',
    _ = t('#qr-code-enter-img'),
    w = t.getUrlParam('sample');
    t.createCurrentUrlQr = function (i) {
        _.html('').qrcode({
            render: 'canvas',
            width: 158,
            height: 158,
            text: i || window.location.href
        }),
        t(b).fadeIn(200)
    },
    function () {
        c()
    }(),
    window.onresize = function () {
        '' == _.html() && t.createCurrentUrlQr(),
        document.head.removeChild(u),
        c()
    },
    t.checkAuth = function (i) {
        if (_const.is_pc) {
            var e = document.documentElement.offsetWidth;
            return t.toast('请在手机上扫码购买'),
            t('body').append('<div class="popup-overlay visible"></div>'),
            t(b).animate({
                left: (e - 190) / 2 + 'px',
                top: (f + m - 131) / 2 + 'px'
            }, 200, '', function () {
                t(b).addClass('rubber-band'),
                t(b).append('<a class="close-btn" style="left: 79px;top: -64px;"><i class="if if-close-circle-o"></i></a>'),
                t(b + ' .close-btn').on('click', function () {
                    t(b).attr('style', '').removeClass('rubber-band').show(),
                    t('.popup-overlay').remove(),
                    t(this).remove()
                })
            }),
            !1
        }
        if (!_global.user) {
            if (t.device.weixin) return t.authRedirect(),
            !1;
            if (i && i.toRightSide) {
                var r = new o;
                t('body').append(r.render().$el),
                r.on('success', function (i) {
                    t('#panel-user').html((new a).$el)
                })
            } else {
                var s = decodeURIComponent(n.history.location.pathname.substring(1) + n.history.location.search);
                n.history.navigate('login?' + s, {
                    trigger: !0,
                    replace: !0
                })
            }
            return !1
        }
        return t.device.weixin && 'undefined' != typeof _global.user.weixin_info ? (t.authRedirect(), !1)  : !0
    },
    i.attach(document.body),
    t.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': t('meta[name="csrf-token"]').attr('content')
        },
        beforeSend: function (t, i) {
            'trade' == window.location.host.split('.') [0] && ( - 1 == i.url.indexOf('?') ? i.url = i.url + '?_=' + _global.shop.id : i.url = i.url + '&_=' + _global.shop.id)
        }
    }),
    t.setForward = function (i) {
        t.device.weixin && void 0 != _global.jssdk && t.setShare(i)
    },
    t.setMallForward = function (i) {
        t.device.weixin && void 0 != _global.jsSdkMall && t.setShare(i)
    },
    t.wechatHideMenuItems = function (i) {
        t.device.weixin && void 0 != _global.jssdk && t.hideMenuItems(i)
    },
    t.setShareWithCountForward = function (i) {
        t.device.weixin && void 0 != _global.jssdk && t.setShare(i)
    },
    t.wechatHideAllNonBaseMenuItem = function () {
        t.device.weixin && void 0 != _global.jssdk && t.hideAllNonBaseMenuItem()
    },
    t.wechatPreviewImage = function (i) {
        t.device.weixin && void 0 != _global.jssdk && t.previewImage(i)
    },
    t.authRedirect = function () {
        void 0 != _global.mall_info && void 0 != _global.mall_info.shop_id ? window.location.href = _global.url.auth + 'auth/login?id=' + _global.mall_info.shop_id + '&redirect_uri=' + decodeURIComponent(location.href)  : window.location.href = _global.url.auth + 'auth/login?id=' + _global.shop.id + '&redirect_uri=' + decodeURIComponent(location.href)
    },
    t.guiderCheck = function () {
        return _global.guider && 1 != _global.guider.status ? 2 == _global.guider.status ? (n.history.navigate('guider/disabled', {
            trigger: !0,
            replace: !0
        }), !1)  : !0 : (n.history.navigate('guider/apply', {
            trigger: !0,
            replace: !0
        }), !1)
    },
    t.localStorage = function () {
        try {
            return localStorage.setItem('test', 1),
            !0
        } catch (t) {
            return !1
        }
    },
    t.copyObj = function (i) {
        var e = typeof i;
        if ('object' == e) if (i instanceof Array) var n = [
        ];
         else var n = {
        };
        for (var r in i) {
            var a = typeof i[r];
            'object' == a || 'array' == a ? n[r] = t.copyObj(i[r])  : n[r] = i[r]
        }
        return n
    },
    t.pageInit = function () {
        _const.is_pc && t(b).attr('style', '').removeClass('rubber-band').show(),
        t('body,html').attr('style', ''),
        t(document).scrollTop(0),
        t('.popup-overlay').remove(),
        t('.popup').remove(),
        t('#pop-share').remove(),
        t('.js-search-container').remove(),
        t('#views').removeClass('blur'),
        t(window).unbind('scroll')
    },
    t.base64_encode = function (t) {
        for (var i, e, n, r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, o = t.length, s = ''; o > a; ) {
            if (i = 255 & t.charCodeAt(a++), a == o) {
                s += r.charAt(i >> 2),
                s += r.charAt((3 & i) << 4),
                s += '==';
                break
            }
            if (e = t.charCodeAt(a++), a == o) {
                s += r.charAt(i >> 2),
                s += r.charAt((3 & i) << 4 | (240 & e) >> 4),
                s += r.charAt((15 & e) << 2),
                s += '=';
                break
            }
            n = t.charCodeAt(a++),
            s += r.charAt(i >> 2),
            s += r.charAt((3 & i) << 4 | (240 & e) >> 4),
            s += r.charAt((15 & e) << 2 | (192 & n) >> 6),
            s += r.charAt(63 & n)
        }
        return s
    },
    t.base64_decode = function (t) {
        for (var i, e, n, r, a = new Array( - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 62, - 1, - 1, - 1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, - 1, - 1, - 1, - 1, - 1, - 1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, - 1, - 1, - 1, - 1, - 1), o = 0, s = t.length, c = ''; s > o; ) {
            do i = a[255 & t.charCodeAt(o++)];
            while (s > o && - 1 == i);
            if ( - 1 == i) break;
            do e = a[255 & t.charCodeAt(o++)];
            while (s > o && - 1 == e);
            if ( - 1 == e) break;
            c += String.fromCharCode(i << 2 | (48 & e) >> 4);
            do {
                if (n = 255 & t.charCodeAt(o++), 61 == n) return c;
                n = a[n]
            } while (s > o && - 1 == n);
            if ( - 1 == n) break;
            c += String.fromCharCode((15 & e) << 4 | (60 & n) >> 2);
            do {
                if (r = 255 & t.charCodeAt(o++), 61 == r) return c;
                r = a[r]
            } while (s > o && - 1 == r);
            if ( - 1 == r) break;
            c += String.fromCharCode((3 & n) << 6 | r)
        }
        return c
    },
    t.paymentRedirectAuth = function (t, i) {
        var e,
        n = _global.url.trade_url + 'order/' + t + '?_=' + _global.shop.id + '&paydata=' + JSON.stringify(i);
        e = void 0 != _global.mall_info && void 0 != _global.mall_info.shop_id ? _global.mall_info.shop_id : _global.shop.id,
        window.location.href = _global.url.auth + 'auth/login?id=' + e + '&redirect_uri=' + encodeURIComponent(n)
    },
    t.paymentRedirectSystemAuth = function (t, i, e) {
        e = e || _global.url.trade_url + 'order/' + t + '?_=' + _global.shop.id + '&paydata=' + JSON.stringify(i),
        window.location.replace(_global.url.auth + 'auth/openid?id=' + _global.shop.id + '&redirect_uri=' + encodeURIComponent(e))
    },
    t.goToPayment = function (i) {
        t.indicator();
        var e = [
            '_=' + _global.shop.id,
            'shop_name=' + _global.shop.name,
            'type=' + i.type,
            'payment_id=' + i.payment_id
        ];
        i.order_id && e.push('order_id=' + i.order_id),
        i.amount && e.push('amount=' + i.amount),
        i.redirect_uri && e.push('redirect_uri=' + i.redirect_uri),
        31 == i.type && i.openid && (e[0] = '_=' + i.merchant_id),
        i.openid && e.push('openid=' + i.openid);
        var n,
        r = !0,
        a = '/cashier.json?' + e.join('&');
        return 1 == i.type && (r = !1),
        t.ajax({
            url: a,
            async: r,
            dataType: 'json',
            type: 'get',
            success: function (e) {
                if (t.indicator('hide'), e) if (e.status) switch (e.html) {
                    case 'appid and openid not match':
                        t.paymentRedirectAuth(i.order_id, i);
                        break;
                    default:
                        t('body').append(e.html),
                        n = e
                } else {
                    if ('mall_supplier' == e.error) return window.location.href = _global.url.auth + 'auth/login?id=' + _global.shop.id + '&redirect_uri=' + decodeURIComponent(_global.url.trade_url + 'order/' + i.order_id + '?_=' + _global.shop.id),
                    !1;
                    t.toast(e.error)
            }
        },
        error: function (i) {
            alert(i.responseJSON.error),
            t.indicator('hide')
        }
    }), n
},
t.fixFomat = function (t, i) {
    return ('' + t).length < i ? (new Array(i + 1).join('0') + t).slice( - i)  : '' + t
},
t.formatNumber = function (t) {
    return 10 > t ? '0' + t : t
},
t.modalCustom = function (i) {
    t.modal({
        text: i.html || '',
        buttons: [
            {
                text: '取消',
                onClick: i.callbackCancel
            },
            {
                text: '确认',
                bold: !0,
                onClick: i.callbackOk,
                close: !1
            }
        ],
        extraClass: i.extraClass
    }),
    i.callbackBtn && i.callbackBtn.map(function (i, e) {
        t(i.el).on('click', i.callback)
    })
},
t.openImgPostalCode = function (i, e) {
    function n(i) {
        var e,
        a = t(i.currentTarget);
        e = setTimeout(function () {
            n(i)
        }, 1000),
        0 == r ? (a.prop('disabled', !1), a.removeClass('disabled'), a.text('获取验证码'), r = 60, clearTimeout(e))  : (a.addClass('disabled'), a.prop('disabled', !0), a.text('等待 ' + r + '秒'), r--)
    }
    var r = 60,
    a = '.js-check-captcha-text',
    o = '.js-reload-captcha',
    s = _global.url.shop_url + 'captcha_img';
    t.modalCustom({
        html: '<div class="form-list right-item"><input type="text" name="captcha_code" autocomplete="off" class="form-item" placeholder="点击刷新"><div class="right"><img class="js-reload-captcha" src="' + s + '" /></div><p class="js-check-captcha-text t_left helper"></p></div>',
        callbackBtn: [
            {
                el: '.js-reload-captcha',
                callback: function () {
                    t(o).attr('src', s + '?' + Math.random())
                }
            }
        ],
        callbackOk: function () {
            e.captcha = t('input[name="captcha_code"]').val(),
            /^[a-zA-Z\d]{4}$/.test(e.captcha) ? t.ajax({
                url: '/send_message.json',
                type: 'POST',
                dataType: 'json',
                data: e
            }).done(function (e) {
                t.closeModal('.modal-captcha'),
                n(i)
            }).error(function (i) {
                t(o).attr('src', s + '?' + Math.random()),
                t(a).text(i.responseJSON.error.message)
            })  : t(a).text('图片验证码不正确')
        },
        okClose: !1,
        extraClass: 'modal-captcha'
    })
}
}), define('router', [
'jquery',
'backbone',
'core/utils',
'core/common',
'components/cart/views/main'
], function (t, i, e, n, r) {
window.Utils = e;
var a = i.Router.extend({
    initialize: function () {
        t(document).on('click', 'a[href^="/"],a[href^="' + window.location.origin + '"]', function (e) {
            event.preventDefault();
            var n,
            r = t(e.currentTarget).attr('href');
            return n = r.indexOf(window.location.origin) >= 0 ? r.replace(window.location.origin, '')  : r,
            '/' != r && r != _global.url.shop_url && document.body.scrollTop > 0 && history.replaceState({
                home: 'home'
            }, 'home', window.location.origin + window.location.pathname + '?st=' + document.body.scrollTop),
            '/guide' == n ? t.guiderCheck() && (window.location.href = n + '?uid=' + _global.user.id)  : i.history.navigate(n, !0),
            !1
        }),
        window.openCart = function (t) {
            var i = new r;
            i.open('', t)
        }
    },
    routes: {
        '': 'home',
        rd: 'home',
        login: 'login',
        'feature/:id': 'feature',
        list: 'list',
        'new': 'list',
        'tag/:id': 'tag',
        'search/:key': 'list',
        'goods/:id': 'goods',
        'goods/:id/bi/:bargain_initiate_id': 'goodsBargain',
        'trade/cart': 'cart',
        'trade/return/:id': 'tradeReturn',
        'order/recharge': 'recharge',
        'order/cashier': 'cashier',
        'order/confirm': 'confirm',
        'order/peerpay_invite': 'peerpayInvite',
        'order/peerpay': 'peerpay',
        'order/peerpay_pay': 'peerpay',
        'order/snatch_pay': 'snatchPay',
        'order/collect_pay': 'collectPay',
        'order/auction_enroll': 'auctionenrollPay',
        'order/auction_confirm': 'auctionPay',
        'order/comment/:id': 'orderComment',
        order: 'order',
        'order/:id': 'orderDetail',
        'order/package/:id': 'orderPackage',
        recently: 'recently',
        vipcard: 'vipcard',
        points: 'points',
        balance: 'balance',
        'balance/withdraw': 'withdraw',
        'balance/withdraw/list': 'withdrawList',
        refund: 'refund',
        'refund/status': 'refundStatus',
        'refund/record': 'record',
        coupon: 'coupon',
        'coupon/:id': 'couponDetail',
        'coupon/get_code/:id': 'couponGet',
        'fetch/verify': 'fetchVerify',
        user: 'user',
        'user/userinfo': 'userinfo',
        address: 'address',
        'address/create': 'editAddress',
        'address/edit/:id': 'editAddress',
        guider: 'guider',
        'guide/:id': 'guide',
        guide: 'guide',
        'guider/apply': 'guiderApply',
        'guider/subscribe': 'guiderSubscribe',
        'guider/order': 'guiderOrder',
        'guider/team': 'guiderTeam',
        'guider/spread': 'guiderSpread',
        'guider/stat': 'guiderStat',
        'guider/setting': 'guiderSetting',
        'guider/disabled': 'guiderDisabled',
        'guider/armory': 'guiderArmory',
        'guider/distribution': 'guiderDistribution',
        'ingroup/grouplist/:id': 'groupList',
        'ingroup/list': 'ingroupList',
        'ingroup/rule': 'ingroupRule',
        'ingroup/:id': 'ingroup',
        'combo/combo_order_detail/:order_sn': 'orderSetMealDetail',
        setmeal: 'setmeal',
        'combo/:id': 'combo',
        'bangmian/rule/:bangmian_id/:bangmian_initiate_id': 'bangmianRule',
        'bangmian/detail/:id/:order_id': 'bangmianDetail',
        'goods/:id/bmi/:bangmian_initiate_id': 'goodsBangmian',
        partner: 'partner',
        'partner/user': 'partnerUser',
        'partner/apply': 'partnerApply',
        'partner/income': 'partnerIncome',
        'partner/unsettled': 'partnerUnsettled',
        'partner/order': 'partnerOrder',
        'partner/order/:id': 'partnerOrderDetail',
        'partner/team': 'partnerTeam',
        'partner/area/create/:id': 'partnerAreaCreate',
        'partner/area/audit/:id': 'partnerAreaAudit',
        'partner/area/edit/:id': 'partnerAreaEdit',
        'partner/area': 'partnerArea',
        'partner/shareholder': 'partnerShareholder',
        'partner/fellow/members': 'partnerFellowMembers',
        'partner/fellow/instr': 'partnerFellowInstr',
        snatch: 'snatch',
        'snatch/cart': 'snatchCart',
        'snatch/detail/:id': 'snatchDetail',
        'snatch/goods/:id': 'snatchGoods',
        'snatch/success/:id': 'snatchSuccess',
        'snatch/win/:id': 'snatchWin',
        'snatch/calc/:id': 'snatchCalc',
        'snatch/record/:id': 'snatchRecord',
        'snatch/record': 'snatchRecord',
        'snatch/user/:type': 'snatchList',
        collect: 'collect',
        'collect/detail/:id': 'collectDetail',
        'collect/goods/:id': 'goodsDetail',
        'collect/success/:id': 'collectSuccess',
        'collect/record/:type': 'collectRecord',
        'collect/record/detail/:id': 'collectRecordDetail',
        'collect/record/package/:id': 'collectPackage',
        'credit/record': 'creditRecord',
        'credit/mall': 'creditMall',
        'credit/rank': 'creditRank',
        'credit/regular': 'creditRegular',
        error: 'error',
        'alipayTransfer/:id': 'alipayTransfer',
        'supplier/confirm/:id': 'sConfirm',
        team: 'teamer',
        'team/order': 'teamerOrder',
        'team/member_list': 'member_list',
        'team/member_contribution/:id': 'member_contribution',
        'team/reward': 'reward',
        'team/invite/:id': 'teamInvite',
        'team/invite_add/:id': 'teamaddInvite',
        'team/edit': 'teamEdit',
        'team/edit_popup/:id': 'teampopupEdit',
        'team/hero': 'teamhero',
        'team/contribution_order': 'contribution_order',
        'team/audit': 'teamAudit',
        'team/bonus': 'teamBonus',
        'team/bonus_detail/:id': 'teamdetailbonus',
        dynamics: 'dynamics',
        'dynamics/:id/:id2': 'dynamicsDetail',
        'article/join': 'join',
        article: 'article',
        'article/detail/:id': 'articleDetail',
        'guess/:id': 'guessDetails',
        'user/guess': 'guessList',
        'guess/all/list': 'guessAll',
        'guess/activity/:id/:stage_id/:member_id': 'guessActivity',
        auction: 'auction',
        'auction/enrollattention': 'attention',
        'auction/myauction': 'myauction',
        'auction/rounds/:id': 'Rounds',
        'auction/bid_hall/:id': 'bid_hall',
        'auction/confirm': 'auctionconfirm',
        'auction/history/:id': 'auctionhistory',
        'auction/notice': 'auctionnotice'
    },
    home: function () {
        require(['apps/home/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    feature: function (i) {
        require(['apps/home/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    login: function (i) {
        require(['apps/login/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    list: function (i) {
        require(['apps/list/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    tag: function (i) {
        require(['apps/tag/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    goods: function (i) {
        require(['apps/goods/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    goodsBargain: function (i, e) {
        require(['apps/goods/app'], function (n) {
            n.mainBargain(i, e),
            t.statistics.init()
        })
    },
    goodsBangmian: function (i, e) {
        require(['apps/goods/app'], function (n) {
            n.mainBangmian(i, e),
            t.statistics.init()
        })
    },
    cart: function () {
        require(['apps/trade/app'], function (i) {
            i.cart(),
            t.statistics.init()
        })
    },
    confirm: function () {
        require(['apps/trade/app'], function (i) {
            i.detail(),
            t.statistics.init()
        })
    },
    tradeReturn: function (i) {
        require(['apps/trade/app'], function (e) {
            e.tradeReturn(i),
            t.statistics.init()
        })
    },
    user: function () {
        require(['apps/user/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    userinfo: function () {
        require(['apps/user/app'], function (i) {
            i.userinfo(),
            t.statistics.init()
        })
    },
    address: function () {
        require(['apps/address/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    editAddress: function (i) {
        require(['apps/address/app'], function (e) {
            e.address(i),
            t.statistics.init()
        })
    },
    order: function () {
        require(['apps/order/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    orderDetail: function (i) {
        require(['apps/order/app'], function (e) {
            e.detail(i),
            t.statistics.init()
        })
    },
    orderComment: function (i) {
        require(['apps/comment/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    orderPackage: function (i) {
        require(['apps/order/app'], function (e) {
            e['package'](i),
            t.statistics.init()
        })
    },
    orderSetMealDetail: function (i) {
        require(['apps/order/app'], function (e) {
            e.setmealdetail(i),
            t.statistics.init()
        })
    },
    recently: function () {
        require(['apps/recently/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    vipcard: function () {
        require(['apps/vipcard/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    points: function () {
        require(['apps/points/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    balance: function () {
        require(['apps/balance/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    withdraw: function () {
        require(['apps/balance/app'], function (i) {
            i.withdrawView(),
            t.statistics.init()
        })
    },
    withdrawList: function () {
        require(['apps/balance/app'], function (i) {
            i.list(),
            t.statistics.init()
        })
    },
    coupon: function () {
        require(['apps/coupon/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    couponDetail: function (i) {
        require(['apps/coupon/app'], function (e) {
            e.detail(i),
            t.statistics.init()
        })
    },
    couponGet: function (i) {
        require(['apps/coupon/app'], function (e) {
            e.get(i),
            t.statistics.init()
        })
    },
    guider: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'main'
            }),
            t.statistics.init()
        })
    },
    guiderApply: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'apply'
            }),
            t.statistics.init()
        })
    },
    guiderSubscribe: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'subscribe'
            }),
            t.statistics.init()
        })
    },
    guiderOrder: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'order'
            }),
            t.statistics.init()
        })
    },
    guiderTeam: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'team'
            }),
            t.statistics.init()
        })
    },
    guiderSpread: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'spread'
            }),
            t.statistics.init()
        })
    },
    guiderStat: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'stat'
            }),
            t.statistics.init()
        })
    },
    guiderSetting: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'setting'
            }),
            t.statistics.init()
        })
    },
    guiderArmory: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'armory'
            }),
            t.pageInit(),
            t.statistics.init()
        })
    },
    guiderDisabled: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'disabled'
            }),
            t.statistics.init()
        })
    },
    guiderDistribution: function () {
        require(['apps/guider/app'], function (i) {
            i.render({
                router: 'distribution'
            }),
            t.statistics.init()
        })
    },
    guide: function (i) {
        require(['apps/guide/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    refund: function () {
        require(['apps/refund/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    refundStatus: function () {
        require(['apps/refund/app'], function (i) {
            i.status(),
            t.statistics.init()
        })
    },
    record: function () {
        require(['apps/refund/app'], function (i) {
            i.record(),
            t.statistics.init()
        })
    },
    recharge: function (i) {
        require(['apps/recharge/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    cashier: function () {
        require(['apps/recharge/app'], function (i) {
            i.cashier(),
            t.statistics.init()
        })
    },
    error: function () {
        require(['apps/error/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    alipayTransfer: function (i) {
        require(['apps/trade/app'], function (e) {
            e.alipayTransfer(i),
            t.statistics.init()
        })
    },
    ingroupRule: function () {
        require(['apps/ingroup/app'], function (i) {
            i.rule(),
            t.statistics.init()
        })
    },
    groupList: function (i) {
        require(['apps/ingroup/app'], function (e) {
            e.grouplist(i),
            t.statistics.init()
        })
    },
    ingroupList: function () {
        require(['apps/ingroup/app'], function (i) {
            i.list(),
            t.statistics.init()
        })
    },
    setmeal: function () {
        require(['apps/setmeal/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    ingroup: function (i) {
        require(['apps/ingroup/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    combo: function (i) {
        require(['apps/goods/app'], function (e) {
            e.combomain(i),
            t.statistics.init()
        })
    },
    peerpayInvite: function () {
        require(['apps/peerpay/app'], function (i) {
            i.invite(),
            t.statistics.init()
        })
    },
    peerpay: function (i) {
        require(['apps/peerpay/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    snatch: function () {
        require(['apps/snatch/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    snatchDetail: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.detail(i),
            t.statistics.init()
        })
    },
    snatchGoods: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.goods(i),
            t.statistics.init()
        })
    },
    snatchCart: function () {
        require(['apps/snatch/app'], function (i) {
            i.cart(),
            t.statistics.init()
        })
    },
    snatchPay: function () {
        require(['apps/snatch/app'], function (i) {
            i.pay(),
            t.statistics.init()
        })
    },
    snatchSuccess: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.success(i),
            t.statistics.init()
        })
    },
    snatchWin: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.win(i),
            t.statistics.init()
        })
    },
    snatchCalc: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.calc(i),
            t.statistics.init()
        })
    },
    snatchRecord: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.record(i),
            t.statistics.init()
        })
    },
    snatchList: function (i) {
        require(['apps/snatch/app'], function (e) {
            e.list(i),
            t.statistics.init()
        })
    },
    collect: function () {
        require(['apps/collect/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    collectDetail: function (i) {
        require(['apps/collect/app'], function (e) {
            e.detail(i),
            t.statistics.init()
        })
    },
    goodsDetail: function (i) {
        require(['apps/collect/app'], function (e) {
            e.goods(i),
            t.statistics.init()
        })
    },
    collectPay: function () {
        require(['apps/collect/app'], function (i) {
            i.pay(),
            t.statistics.init()
        })
    },
    collectSuccess: function (i) {
        require(['apps/collect/app'], function (e) {
            e.success(i),
            t.statistics.init()
        })
    },
    collectRecord: function (i) {
        require(['apps/collect/app'], function (e) {
            e.record(i),
            t.statistics.init()
        })
    },
    collectRecordDetail: function (i) {
        require(['apps/collect/app'], function (e) {
            e.recordDetail(i),
            t.statistics.init()
        })
    },
    collectPackage: function (i) {
        require(['apps/collect/app'], function (e) {
            e.recordPackage(i),
            t.statistics.init()
        })
    },
    partner: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'main'
            }),
            t.statistics.init()
        })
    },
    partnerUser: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'user'
            }),
            t.statistics.init()
        })
    },
    partnerApply: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'apply'
            }),
            t.statistics.init()
        })
    },
    partnerIncome: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'income'
            }),
            t.statistics.init()
        })
    },
    partnerUnsettled: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'unsettled'
            }),
            t.statistics.init()
        })
    },
    partnerOrder: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'order'
            }),
            t.statistics.init()
        })
    },
    partnerOrderDetail: function (i) {
        require(['apps/partner/app'], function (e) {
            e.render({
                router: 'orderDetail',
                id: i
            }),
            t.statistics.init()
        })
    },
    partnerTeam: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'team'
            }),
            t.statistics.init()
        })
    },
    partnerAreaCreate: function (i) {
        require(['apps/partner/app'], function (e) {
            e.render({
                router: 'areaCreate',
                id: i
            }),
            t.statistics.init()
        })
    },
    partnerAreaAudit: function (i) {
        require(['apps/partner/app'], function (e) {
            e.render({
                router: 'areaAudit',
                id: i
            }),
            t.statistics.init()
        })
    },
    partnerAreaEdit: function (i) {
        require(['apps/partner/app'], function (e) {
            e.render({
                router: 'areaEdit',
                id: i
            }),
            t.statistics.init()
        })
    },
    partnerArea: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'area'
            }),
            t.statistics.init()
        })
    },
    partnerShareholder: function () {
        require(['apps/partner/app'], function (i) {
            i.render({
                router: 'shareholder'
            }),
            t.statistics.init()
        })
    },
    partnerFellowMembers: function () {
        require(['apps/partner/app'], function (t) {
            t.render({
                router: 'fellowMembers'
            })
        }),
        t.statistics.init()
    },
    partnerFellowInstr: function () {
        require(['apps/partner/app'], function (t) {
            t.render({
                router: 'fellowInstr'
            })
        }),
        t.statistics.init()
    },
    bangmianRule: function (i, e) {
        require(['apps/bangmian/app'], function (n) {
            n.rule(i, e),
            t.statistics.init()
        })
    },
    bangmianDetail: function (i, e) {
        require(['apps/bangmian/app'], function (n) {
            n.detail(i, e),
            t.statistics.init()
        })
    },
    fetchVerify: function () {
        require(['apps/verify/app'], function (i) {
            i.verifyMain(),
            t.statistics.init()
        })
    },
    sConfirm: function (i) {
        require(['apps/supplier/app'], function (e) {
            e.detail(i),
            t.pageInit(),
            t.statistics.init()
        })
    },
    teamer: function () {
        require(['apps/team/app'], function (t) {
            t.main()
        }),
        t.statistics.init()
    },
    teamerOrder: function () {
        require(['apps/team/app'], function (t) {
            t.order()
        }),
        t.statistics.init()
    },
    member_list: function () {
        require(['apps/team/app'], function (t) {
            t.member_list()
        }),
        t.statistics.init()
    },
    member_contribution: function (i) {
        require(['apps/team/app'], function (t) {
            t.member_contribution(i)
        }),
        t.statistics.init()
    },
    reward: function () {
        require(['apps/team/app'], function (t) {
            t.reward()
        }),
        t.statistics.init()
    },
    teamInvite: function (i) {
        require(['apps/team/app'], function (t) {
            t.invite(i)
        }),
        t.statistics.init()
    },
    teamaddInvite: function (i) {
        require(['apps/team/app'], function (t) {
            t.invite_add(i)
        }),
        t.statistics.init()
    },
    teamEdit: function () {
        require(['apps/team/app'], function (t) {
            t.edit()
        }),
        t.statistics.init()
    },
    teampopupEdit: function (i) {
        require(['apps/team/app'], function (t) {
            t.edit_popup(i)
        }),
        t.statistics.init()
    },
    teamhero: function () {
        require(['apps/team/app'], function (t) {
            t.hero()
        }),
        t.statistics.init()
    },
    contribution_order: function () {
        require(['apps/team/app'], function (t) {
            t.contribution()
        }),
        t.statistics.init()
    },
    teamAudit: function () {
        require(['apps/team/app'], function (t) {
            t.audit()
        }),
        t.statistics.init()
    },
    teamBonus: function () {
        require(['apps/team/app'], function (t) {
            t.bonus()
        }),
        t.statistics.init()
    },
    teamdetailbonus: function (i) {
        require(['apps/team/app'], function (t) {
            t.detailbonus(i)
        }),
        t.statistics.init()
    },
    dynamics: function () {
        require(['apps/dynamics/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    dynamicsDetail: function (i, e) {
        require(['apps/dynamics/app'], function (n) {
            n.detail(i, e),
            t.statistics.init()
        })
    },
    join: function () {
        require(['apps/article/app'], function (i) {
            i.join(),
            t.statistics.init()
        })
    },
    article: function () {
        require(['apps/article/app'], function (i) {
            i.main(),
            t.statistics.init()
        })
    },
    articleDetail: function (i) {
        require(['apps/article/app'], function (e) {
            e.detail(i),
            t.statistics.init()
        })
    },
    guessDetails: function (i) {
        require(['apps/guess/app'], function (e) {
            e.main(i),
            t.statistics.init()
        })
    },
    guessActivity: function (i, e, n) {
        require(['apps/guess/app'], function (t) {
            t.activity(i, e, n)
        }),
        t.statistics.init()
    },
    guessList: function () {
        require(['apps/guess/app'], function (i) {
            i.list(),
            t.statistics.init()
        })
    },
    guessAll: function () {
        require(['apps/guess/app'], function (i) {
            i.all(),
            t.statistics.init()
        })
    },
    creditRecord: function () {
        require(['apps/credit/app'], function (t) {
            t.creditRecord()
        }),
        t.statistics.init()
    },
    creditMall: function () {
        require(['apps/credit/app'], function (t) {
            t.creditMall()
        }),
        t.statistics.init()
    },
    creditRank: function () {
        require(['apps/credit/app'], function (t) {
            t.creditRank()
        }),
        t.statistics.init()
    },
    creditRegular: function () {
        require(['apps/credit/app'], function (t) {
            t.creditRegular()
        }),
        t.statistics.init()
    },
    auction: function () {
        require(['apps/auction/app'], function (t) {
            t.main()
        }),
        t.statistics.init()
    },
    attention: function () {
        require(['apps/auction/app'], function (t) {
            t.attention()
        }),
        t.statistics.init()
    },
    myauction: function () {
        require(['apps/auction/app'], function (t) {
            t.Myauction()
        }),
        t.statistics.init()
    },
    auctionconfirm: function () {
        require(['apps/auction/app'], function (i) {
            i.confirm(),
            t.statistics.init()
        })
    },
    auctionhistory: function (i) {
        require(['apps/auction/app'], function (t) {
            t.history(i)
        }),
        t.statistics.init()
    },
    auctionnotice: function () {
        require(['apps/auction/app'], function (t) {
            t.notice()
        }),
        t.statistics.init()
    },
    Rounds: function (i) {
        require(['apps/auction/app'], function (t) {
            t.rounds(i)
        }),
        t.statistics.init()
    },
    bid_hall: function (i) {
        require(['apps/auction/app'], function (t) {
            t.bid_hall(i)
        }),
        t.statistics.init()
    },
    auctionenrollPay: function () {
        require(['apps/auction/app'], function (t) {
            t.enroll()
        }),
        t.statistics.init()
    },
    auctionPay: function () {
        require(['apps/auction/app'], function (i) {
            i.confirm(),
            t.statistics.init()
        })
    },
    loading: function () {
        t.loading(),
        t.pageInit();
        var i = t.getUrlParam('st');
        if (i) {
            history.replaceState({
                back: 'back'
            }, 'back', window.location.origin + window.location.pathname);
            var e = setInterval(function () {
                document.body.scrollHeight < i ? t(document).scrollTop(document.body.scrollHeight)  : (t(document).scrollTop(i), setTimeout(function () {
                    clearInterval(e)
                }, 1000))
            }, 100)
        }
    },
    execute: function (i, e, n) {
        if (_const.is_pc) switch (n) {
            case 'confirm':
                t.createCurrentUrlQr(_global.url.shop_url);
                break;
            default:
                t.createCurrentUrlQr()
        }
        this.loading();
        var r = {
            user: !0,
            userinfo: !0,
            points: !0,
            balance: !0,
            withdraw: !0,
            confirm: !0,
            order: !0,
            orderDetail: !0,
            guider: !0,
            guiderApply: !0,
            guiderOrder: !0,
            guiderTeam: !0,
            guiderSpread: !0,
            guiderStat: !0,
            guiderSetting: !0,
            guiderArmory: !0,
            partner: !0,
            partnerUser: !0,
            partnerApply: !0,
            partnerIncome: !0,
            partnerUnsettled: !0,
            partnerOrder: !0,
            partnerOrderDetail: !0,
            partnerTeam: !0,
            partnerAreaCreate: !0,
            partnerAreaAudit: !0,
            partnerAreaEdit: !0,
            partnerArea: !0,
            partnerShareholder: !0,
            partnerFellowMembers: !0,
            partnerFellowInstr: !0
    };
    return _const.is_pc && (r.login = !0),
    r[n] && !t.checkAuth() ? (t.loading('hide'), !1)  : void (i && i.apply(this, e))
},
mpRedirect: function (e) {
    i.history.navigate(e, !0),
    t.statistics.init()
}
}); new a, i.history.start({
pushState: !0
})
});
