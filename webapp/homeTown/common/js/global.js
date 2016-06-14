/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
/*
  backbone.paginator 2.0.0
  http://github.com/backbone-paginator/backbone.paginator

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
// doT.js
// 2011, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.
/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.5
 *
 */
/**
 * Swiper 3.1.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 10, 2015
 */
!function (e, t) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0)  : function (e) {
        if (!e.document) throw new Error('jQuery requires a window with a document');
        return t(e)
    }
     : t(e)
}('undefined' != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = 'length' in e && e.length,
        n = Z.type(e);
        return 'function' === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ('string' == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return Y.call(t, e) >= 0 !== n
        })
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e
    }
    function i(e) {
        var t = he[e] = {
        };
        return Z.each(e.match(fe) || [
        ], function (e, n) {
            t[n] = !0
        }),
        t
    }
    function o() {
        J.removeEventListener('DOMContentLoaded', o, !1),
        e.removeEventListener('load', o, !1),
        Z.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {
        }, 0, {
            get: function () {
                return {
                }
            }
        }),
        this.expando = Z.expando + s.uid++
    }
    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = 'data-' + t.replace(we, '-$1').toLowerCase(), n = e.getAttribute(r), 'string' == typeof n) {
            try {
                n = 'true' === n ? !0 : 'false' === n ? !1 : 'null' === n ? null : + n + '' === n ? + n : be.test(n) ? Z.parseJSON(n)  : n
            } catch (a) {
            }
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function d() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }
    function p(e, t) {
        return Z.nodeName(e, 'table') && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody') [0] || e.appendChild(e.ownerDocument.createElement('tbody'))  : e
    }
    function f(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type,
        e
    }
    function h(e) {
        var t = je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute('type'),
        e
    }
    function m(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], 'globalEval', !t || ve.get(t[n], 'globalEval'))
    }
    function g(e, t) {
        var n,
        r,
        a,
        i,
        o,
        s,
        l,
        c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (i = ve.access(e), o = ve.set(t, i), c = i.events)) {
                delete o.handle,
                o.events = {
                };
                for (a in c) for (n = 0, r = c[a].length; r > n; n++) Z.event.add(t, a, c[a][n])
            }
            ye.hasData(e) && (s = ye.access(e), l = Z.extend({
            }, s), ye.set(t, l))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || '*')  : e.querySelectorAll ? e.querySelectorAll(t || '*')  : [
        ];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n)  : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && Ce.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue)
    }
    function b(t, n) {
        var r,
        a = Z(n.createElement(t)).appendTo(n.body),
        i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(a[0])) ? r.display : Z.css(a[0], 'display');
        return a.detach(),
        i
    }
    function w(e) {
        var t = J,
        n = Re[e];
        return n || (n = b(e, t), 'none' !== n && n || (He = (He || Z('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = b(e, t), He.detach()), Re[e] = n),
        n
    }
    function x(e, t, n) {
        var r,
        a,
        i,
        o,
        s = e.style;
        return n = n || qe(e),
        n && (o = n.getPropertyValue(t) || n[t]),
        n && ('' !== o || Z.contains(e.ownerDocument, e) || (o = Z.style(e, t)), Fe.test(o) && $e.test(t) && (r = s.width, a = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = a, s.maxWidth = i)),
        void 0 !== o ? o + '' : o
    }
    function k(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, a = Ue.length; a--; ) if (t = Ue[a] + n, t in e) return t;
        return r
    }
    function C(e, t, n) {
        var r = We.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px')  : t
    }
    function S(e, t, n, r, a) {
        for (var i = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, o = 0; 4 > i; i += 2) 'margin' === n && (o += Z.css(e, n + ke[i], !0, a)),
        r ? ('content' === n && (o -= Z.css(e, 'padding' + ke[i], !0, a)), 'margin' !== n && (o -= Z.css(e, 'border' + ke[i] + 'Width', !0, a)))  : (o += Z.css(e, 'padding' + ke[i], !0, a), 'padding' !== n && (o += Z.css(e, 'border' + ke[i] + 'Width', !0, a)));
        return o
    }
    function M(e, t, n) {
        var r = !0,
        a = 'width' === t ? e.offsetWidth : e.offsetHeight,
        i = qe(e),
        o = 'border-box' === Z.css(e, 'boxSizing', !1, i);
        if (0 >= a || null == a) {
            if (a = x(e, t, i), (0 > a || null == a) && (a = e.style[t]), Fe.test(a)) return a;
            r = o && (K.boxSizingReliable() || a === e.style[t]),
            a = parseFloat(a) || 0
        }
        return a + S(e, t, n || (o ? 'border' : 'content'), r, i) + 'px'
    }
    function E(e, t) {
        for (var n, r, a, i = [
        ], o = 0, s = e.length; s > o; o++) r = e[o],
        r.style && (i[o] = ve.get(r, 'olddisplay'), n = r.style.display, t ? (i[o] || 'none' !== n || (r.style.display = ''), '' === r.style.display && Te(r) && (i[o] = ve.access(r, 'olddisplay', w(r.nodeName))))  : (a = Te(r), 'none' === n && a || ve.set(r, 'olddisplay', a ? n : Z.css(r, 'display'))));
        for (o = 0; s > o; o++) r = e[o],
        r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? i[o] || '' : 'none'));
        return e
    }
    function _(e, t, n, r, a) {
        return new _.prototype.init(e, t, n, r, a)
    }
    function P() {
        return setTimeout(function () {
            Ke = void 0
        }),
        Ke = Z.now()
    }
    function D(e, t) {
        var n,
        r = 0,
        a = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = ke[r],
        a['margin' + n] = a['padding' + n] = e;
        return t && (a.opacity = a.width = e),
        a
    }
    function A(e, t, n) {
        for (var r, a = (nt[t] || [
        ]).concat(nt['*']), i = 0, o = a.length; o > i; i++) if (r = a[i].call(n, t, e)) return r
    }
    function I(e, t, n) {
        var r,
        a,
        i,
        o,
        s,
        l,
        c,
        u,
        d = this,
        p = {
        },
        f = e.style,
        h = e.nodeType && Te(e),
        m = ve.get(e, 'fxshow');
        n.queue || (s = Z._queueHooks(e, 'fx'), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--,
                Z.queue(e, 'fx').length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
            f.overflow,
            f.overflowX,
            f.overflowY
        ], c = Z.css(e, 'display'), u = 'none' === c ? ve.get(e, 'olddisplay') || w(e.nodeName)  : c, 'inline' === u && 'none' === Z.css(e, 'float') && (f.display = 'inline-block')),
        n.overflow && (f.overflow = 'hidden', d.always(function () {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t) if (a = t[r], Qe.exec(a)) {
            if (delete t[r], i = i || 'toggle' === a, a === (h ? 'hide' : 'show')) {
                if ('show' !== a || !m || void 0 === m[r]) continue;
                h = !0
            }
            p[r] = m && m[r] || Z.style(e, r)
        } else c = void 0;
        if (Z.isEmptyObject(p)) 'inline' === ('none' === c ? w(e.nodeName)  : c) && (f.display = c);
         else {
            m ? 'hidden' in m && (h = m.hidden)  : m = ve.access(e, 'fxshow', {
            }),
            i && (m.hidden = !h),
            h ? Z(e).show()  : d.done(function () {
                Z(e).hide()
            }),
            d.done(function () {
                var t;
                ve.remove(e, 'fxshow');
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) o = A(h ? m[r] : 0, r, d),
            r in m || (m[r] = o.start, h && (o.end = o.start, o.start = 'width' === r || 'height' === r ? 1 : 0))
        }
    }
    function N(e, t) {
        var n,
        r,
        a,
        i,
        o;
        for (n in e) if (r = Z.camelCase(n), a = t[r], i = e[n], Z.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), o = Z.cssHooks[r], o && 'expand' in o) {
            i = o.expand(i),
            delete e[r];
            for (n in i) n in e || (e[n] = i[n], t[n] = a)
        } else t[r] = a
    }
    function O(e, t, n) {
        var r,
        a,
        i = 0,
        o = tt.length,
        s = Z.Deferred().always(function () {
            delete l.elem
        }),
        l = function () {
            if (a) return !1;
            for (var t = Ke || P(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(i);
            return s.notifyWith(e, [
                c,
                i,
                n
            ]),
            1 > i && l ? n : (s.resolveWith(e, [
                c
            ]), !1)
        },
        c = s.promise({
            elem: e,
            props: Z.extend({
            }, t),
            opts: Z.extend(!0, {
                specialEasing: {
                }
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ke || P(),
            duration: n.duration,
            tweens: [
            ],
            createTween: function (t, n) {
                var r = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function (t) {
                var n = 0,
                r = t ? c.tweens.length : 0;
                if (a) return this;
                for (a = !0; r > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [
                    c,
                    t
                ])  : s.rejectWith(e, [
                    c,
                    t
                ]),
                this
            }
        }),
        u = c.props;
        for (N(u, c.opts.specialEasing); o > i; i++) if (r = tt[i].call(c, e, u, c.opts)) return r;
        return Z.map(u, A, c),
        Z.isFunction(c.opts.start) && c.opts.start.call(e, c),
        Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function L(e) {
        return function (t, n) {
            'string' != typeof t && (n = t, t = '*');
            var r,
            a = 0,
            i = t.toLowerCase().match(fe) || [
            ];
            if (Z.isFunction(n)) for (; r = i[a++]; ) '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || [
            ]).unshift(n))  : (e[r] = e[r] || [
            ]).push(n)
        }
    }
    function j(e, t, n, r) {
        function a(s) {
            var l;
            return i[s] = !0,
            Z.each(e[s] || [
            ], function (e, s) {
                var c = s(t, n, r);
                return 'string' != typeof c || o || i[c] ? o ? !(l = c)  : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }),
            l
        }
        var i = {
        },
        o = e === bt;
        return a(t.dataTypes[0]) || !i['*'] && a('*')
    }
    function z(e, t) {
        var n,
        r,
        a = Z.ajaxSettings.flatOptions || {
        };
        for (n in t) void 0 !== t[n] && ((a[n] ? e : r || (r = {
        })) [n] = t[n]);
        return r && Z.extend(!0, e, r),
        e
    }
    function B(e, t, n) {
        for (var r, a, i, o, s = e.contents, l = e.dataTypes; '*' === l[0]; ) l.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
        if (r) for (a in s) if (s[a] && s[a].test(r)) {
            l.unshift(a);
            break
        }
        if (l[0] in n) i = l[0];
         else {
            for (a in n) {
                if (!l[0] || e.converters[a + ' ' + l[0]]) {
                    i = a;
                    break
                }
                o || (o = a)
            }
            i = i || o
        }
        return i ? (i !== l[0] && l.unshift(i), n[i])  : void 0
    }
    function H(e, t, n, r) {
        var a,
        i,
        o,
        s,
        l,
        c = {
        },
        u = e.dataTypes.slice();
        if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
        for (i = u.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ('*' === i) i = l;
         else if ('*' !== l && l !== i) {
            if (o = c[l + ' ' + i] || c['* ' + i], !o) for (a in c) if (s = a.split(' '), s[1] === i && (o = c[l + ' ' + s[0]] || c['* ' + s[0]])) {
                o === !0 ? o = c[a] : c[a] !== !0 && (i = s[0], u.unshift(s[1]));
                break
            }
            if (o !== !0) if (o && e['throws']) t = o(t);
             else try {
                t = o(t)
            } catch (d) {
                return {
                    state: 'parsererror',
                    error: o ? d : 'No conversion from ' + l + ' to ' + i
                }
            }
        }
        return {
            state: 'success',
            data: t
        }
    }
    function R(e, t, n, r) {
        var a;
        if (Z.isArray(t)) Z.each(t, function (t, a) {
            n || Ct.test(e) ? r(e, a)  : R(e + '[' + ('object' == typeof a ? t : '') + ']', a, n, r)
        });
         else if (n || 'object' !== Z.type(t)) r(e, t);
         else for (a in t) R(e + '[' + a + ']', t[a], n, r)
    }
    function $(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var F = [
    ],
    q = F.slice,
    V = F.concat,
    W = F.push,
    Y = F.indexOf,
    X = {
    },
    G = X.toString,
    U = X.hasOwnProperty,
    K = {
    },
    J = e.document,
    Q = '2.1.4',
    Z = function (e, t) {
        return new Z.fn.init(e, t)
    },
    ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    te = /^-ms-/,
    ne = /-([\da-z])/gi,
    re = function (e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: Q,
        constructor: Z,
        selector: '',
        length: 0,
        toArray: function () {
            return q.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : q.call(this)
        },
        pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function (e, t) {
            return Z.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq( - 1)
        },
        eq: function (e) {
            var t = this.length,
            n = + e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [
                this[n]
            ] : [
            ])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: F.sort,
        splice: F.splice
    },
    Z.extend = Z.fn.extend = function () {
        var e,
        t,
        n,
        r,
        a,
        i,
        o = arguments[0] || {
        },
        s = 1,
        l = arguments.length,
        c = !1;
        for ('boolean' == typeof o && (c = o, o = arguments[s] || {
        }, s++), 'object' == typeof o || Z.isFunction(o) || (o = {
        }), s === l && (o = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = o[t],
        r = e[t],
        o !== r && (c && r && (Z.isPlainObject(r) || (a = Z.isArray(r))) ? (a ? (a = !1, i = n && Z.isArray(n) ? n : [
        ])  : i = n && Z.isPlainObject(n) ? n : {
        }, o[t] = Z.extend(c, i, r))  : void 0 !== r && (o[t] = r));
        return o
    },
    Z.extend({
        expando: 'jQuery' + (Q + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {
        },
        isFunction: function (e) {
            return 'function' === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return 'object' !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !U.call(e.constructor.prototype, 'isPrototypeOf') ? !1 : !0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? X[G.call(e)] || 'object' : typeof e
        },
        globalEval: function (e) {
            var t,
            n = eval;
            e = Z.trim(e),
            e && (1 === e.indexOf('use strict') ? (t = J.createElement('script'), t.text = e, J.head.appendChild(t).parentNode.removeChild(t))  : n(e))
        },
        camelCase: function (e) {
            return e.replace(te, 'ms-').replace(ne, re)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var a,
            i = 0,
            o = e.length,
            s = n(e);
            if (r) {
                if (s) for (; o > i && (a = t.apply(e[i], r), a !== !1); i++);
                 else for (i in e) if (a = t.apply(e[i], r), a === !1) break
            } else if (s) for (; o > i && (a = t.call(e[i], i, e[i]), a !== !1); i++);
             else for (i in e) if (a = t.call(e[i], i, e[i]), a === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? '' : (e + '').replace(ee, '')
        },
        makeArray: function (e, t) {
            var r = t || [
            ];
            return null != e && (n(Object(e)) ? Z.merge(r, 'string' == typeof e ? [
                e
            ] : e)  : W.call(r, e)),
            r
        },
        inArray: function (e, t, n) {
            return null == t ? - 1 : Y.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = + t.length, r = 0, a = e.length; n > r; r++) e[a++] = t[r];
            return e.length = a,
            e
        },
        grep: function (e, t, n) {
            for (var r, a = [
            ], i = 0, o = e.length, s = !n; o > i; i++) r = !t(e[i], i),
            r !== s && a.push(e[i]);
            return a
        },
        map: function (e, t, r) {
            var a,
            i = 0,
            o = e.length,
            s = n(e),
            l = [
            ];
            if (s) for (; o > i; i++) a = t(e[i], i, r),
            null != a && l.push(a);
             else for (i in e) a = t(e[i], i, r),
            null != a && l.push(a);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n,
            r,
            a;
            return 'string' == typeof t && (n = e[t], t = e, e = n),
            Z.isFunction(e) ? (r = q.call(arguments, 2), a = function () {
                return e.apply(t || this, r.concat(q.call(arguments)))
            }, a.guid = e.guid = e.guid || Z.guid++, a)  : void 0
        },
        now: Date.now,
        support: K
    }),
    Z.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
        X['[object ' + t + ']'] = t.toLowerCase()
    });
    var ae = function (e) {
        function t(e, t, n, r) {
            var a,
            i,
            o,
            s,
            l,
            c,
            d,
            f,
            h,
            m;
            if ((t ? t.ownerDocument || t : R) !== I && A(t), t = t || I, n = n || [
            ], s = t.nodeType, 'string' != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (a = ye.exec(e))) if (o = a[1]) {
                    if (9 === s) {
                        if (i = t.getElementById(o), !i || !i.parentNode) return n;
                        if (i.id === o) return n.push(i),
                        n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(o)) && B(t, i) && i.id === o) return n.push(i),
                    n
                } else {
                    if (a[2]) return Q.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = a[3]) && x.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (x.qsa && (!L || !L.test(e))) {
                    if (f = d = H, h = t, m = 1 !== s && e, 1 === s && 'object' !== t.nodeName.toLowerCase()) {
                        for (c = S(e), (d = t.getAttribute('id')) ? f = d.replace(we, '\\$&')  : t.setAttribute('id', f), f = '[id=\'' + f + '\'] ', l = c.length; l--; ) c[l] = f + p(c[l]);
                        h = be.test(e) && u(t.parentNode) || t,
                        m = c.join(',')
                    }
                    if (m) try {
                        return Q.apply(n, h.querySelectorAll(m)),
                        n
                    } catch (g) {
                    } finally {
                        d || t.removeAttribute('id')
                    }
                }
            }
            return E(e.replace(le, '$1'), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + ' ') > k.cacheLength && delete e[t.shift()],
                e[n + ' '] = r
            }
            var t = [
            ];
            return e
        }
        function r(e) {
            return e[H] = !0,
            e
        }
        function a(e) {
            var t = I.createElement('div');
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function i(e, t) {
            for (var n = e.split('|'), r = e.length; r--; ) k.attrHandle[n[r]] = t
        }
        function o(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n) for (; n = n.nextSibling; ) if (n === t) return - 1;
            return e ? 1 : - 1
        }
        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return 'input' === n && t.type === e
            }
        }
        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e
            }
        }
        function c(e) {
            return r(function (t) {
                return t = + t,
                r(function (n, r) {
                    for (var a, i = e([], n.length, t), o = i.length; o--; ) n[a = i[o]] && (n[a] = !(r[a] = n[a]))
                })
            })
        }
        function u(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e
        }
        function d() {
        }
        function p(e) {
            for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir,
            a = n && 'parentNode' === r,
            i = F++;
            return t.first ? function (t, n, i) {
                for (; t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i)
            }
             : function (t, n, o) {
                var s,
                l,
                c = [
                    $,
                    i
                ];
                if (o) {
                    for (; t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, o)) return !0
                } else for (; t = t[r]; ) if (1 === t.nodeType || a) {
                    if (l = t[H] || (t[H] = {
                    }), (s = l[r]) && s[0] === $ && s[1] === i) return c[2] = s[2];
                    if (l[r] = c, c[2] = e(t, n, o)) return !0
                }
            }
        }
        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var a = e.length; a--; ) if (!e[a](t, n, r)) return !1;
                return !0
            }
             : e[0]
        }
        function m(e, n, r) {
            for (var a = 0, i = n.length; i > a; a++) t(e, n[a], r);
            return r
        }
        function g(e, t, n, r, a) {
            for (var i, o = [
            ], s = 0, l = e.length, c = null != t; l > s; s++) (i = e[s]) && (!n || n(i, r, a)) && (o.push(i), c && t.push(s));
            return o
        }
        function v(e, t, n, a, i, o) {
            return a && !a[H] && (a = v(a)),
            i && !i[H] && (i = v(i, o)),
            r(function (r, o, s, l) {
                var c,
                u,
                d,
                p = [
                ],
                f = [
                ],
                h = o.length,
                v = r || m(t || '*', s.nodeType ? [
                    s
                ] : s, [
                ]),
                y = !e || !r && t ? v : g(v, p, e, s, l),
                b = n ? i || (r ? e : h || a) ? [
                ] : o : y;
                if (n && n(y, b, s, l), a) for (c = g(b, f), a(c, [
                ], s, l), u = c.length; u--; ) (d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (c = [
                            ], u = b.length; u--; ) (d = b[u]) && c.push(y[u] = d);
                            i(null, b = [
                            ], c, l)
                        }
                        for (u = b.length; u--; ) (d = b[u]) && (c = i ? ee(r, d)  : p[u]) > - 1 && (r[c] = !(o[c] = d))
                    }
                } else b = g(b === o ? b.splice(h, b.length)  : b),
                i ? i(null, o, b, l)  : Q.apply(o, b)
            })
        }
        function y(e) {
            for (var t, n, r, a = e.length, i = k.relative[e[0].type], o = i || k.relative[' '], s = i ? 1 : 0, l = f(function (e) {
                return e === t
            }, o, !0), c = f(function (e) {
                return ee(t, e) > - 1
            }, o, !0), u = [
                function (e, n, r) {
                    var a = !i && (r || n !== _) || ((t = n).nodeType ? l(e, n, r)  : c(e, n, r));
                    return t = null,
                    a
                }
            ]; a > s; s++) if (n = k.relative[e[s].type]) u = [
                f(h(u), n)
            ];
             else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                    for (r = ++s; a > r && !k.relative[e[r].type]; r++);
                    return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                        value: ' ' === e[s - 2].type ? '*' : ''
                    })).replace(le, '$1'), n, r > s && y(e.slice(s, r)), a > r && y(e = e.slice(r)), a > r && p(e))
                }
                u.push(n)
            }
            return h(u)
        }
        function b(e, n) {
            var a = n.length > 0,
            i = e.length > 0,
            o = function (r, o, s, l, c) {
                var u,
                d,
                p,
                f = 0,
                h = '0',
                m = r && [
                ],
                v = [
                ],
                y = _,
                b = r || i && k.find.TAG('*', c),
                w = $ += null == y ? 1 : Math.random() || 0.1,
                x = b.length;
                for (c && (_ = o !== I && o); h !== x && null != (u = b[h]); h++) {
                    if (i && u) {
                        for (d = 0; p = e[d++]; ) if (p(u, o, s)) {
                            l.push(u);
                            break
                        }
                        c && ($ = w)
                    }
                    a && ((u = !p && u) && f--, r && m.push(u))
                }
                if (f += h, a && h !== f) {
                    for (d = 0; p = n[d++]; ) p(m, v, o, s);
                    if (r) {
                        if (f > 0) for (; h--; ) m[h] || v[h] || (v[h] = K.call(l));
                        v = g(v)
                    }
                    Q.apply(l, v),
                    c && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return c && ($ = w, _ = y),
                m
            };
            return a ? r(o)  : o
        }
        var w,
        x,
        k,
        T,
        C,
        S,
        M,
        E,
        _,
        P,
        D,
        A,
        I,
        N,
        O,
        L,
        j,
        z,
        B,
        H = 'sizzle' + 1 * new Date,
        R = e.document,
        $ = 0,
        F = 0,
        q = n(),
        V = n(),
        W = n(),
        Y = function (e, t) {
            return e === t && (D = !0),
            0
        },
        X = 1 << 31,
        G = {
        }.hasOwnProperty,
        U = [
        ],
        K = U.pop,
        J = U.push,
        Q = U.push,
        Z = U.slice,
        ee = function (e, t) {
            for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
            return - 1
        },
        te = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        ne = '[\\x20\\t\\r\\n\\f]',
        re = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        ae = re.replace('w', 'w#'),
        ie = '\\[' + ne + '*(' + re + ')(?:' + ne + '*([*^$|!~]?=)' + ne + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ae + '))|)' + ne + '*\\]',
        oe = ':(' + re + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ie + ')*)|.*)\\)|)',
        se = new RegExp(ne + '+', 'g'),
        le = new RegExp('^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$', 'g'),
        ce = new RegExp('^' + ne + '*,' + ne + '*'),
        ue = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
        de = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
        pe = new RegExp(oe),
        fe = new RegExp('^' + ae + '$'),
        he = {
            ID: new RegExp('^#(' + re + ')'),
            CLASS: new RegExp('^\\.(' + re + ')'),
            TAG: new RegExp('^(' + re.replace('w', 'w*') + ')'),
            ATTR: new RegExp('^' + ie),
            PSEUDO: new RegExp('^' + oe),
            CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ne + '*(even|odd|(([+-]|)(\\d*)n|)' + ne + '*(?:([+-]|)' + ne + '*(\\d+)|))' + ne + '*\\)|)', 'i'),
            bool: new RegExp('^(?:' + te + ')$', 'i'),
            needsContext: new RegExp('^' + ne + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ne + '*((?:-\\d)?\\d*)' + ne + '*\\)|)(?=[^-]|$)', 'i')
        },
        me = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        we = /'|\\/g,
        xe = new RegExp('\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)', 'ig'),
        ke = function (e, t, n) {
            var r = '0x' + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536)  : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        Te = function () {
            A()
        };
        try {
            Q.apply(U = Z.call(R.childNodes), R.childNodes),
            U[R.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: U.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                }
                 : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; );
                    e.length = n - 1
                }
            }
        }
        x = t.support = {
        },
        C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? 'HTML' !== t.nodeName : !1
        },
        A = t.setDocument = function (e) {
            var t,
            n,
            r = e ? e.ownerDocument || e : R;
            return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, N = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener('unload', Te, !1)  : n.attachEvent && n.attachEvent('onunload', Te)), O = !C(r), x.attributes = a(function (e) {
                return e.className = 'i',
                !e.getAttribute('className')
            }), x.getElementsByTagName = a(function (e) {
                return e.appendChild(r.createComment('')),
                !e.getElementsByTagName('*').length
            }), x.getElementsByClassName = ve.test(r.getElementsByClassName), x.getById = a(function (e) {
                return N.appendChild(e).id = H,
                !r.getElementsByName || !r.getElementsByName(H).length
            }), x.getById ? (k.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [
                        n
                    ] : [
                    ]
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(xe, ke);
                return function (e) {
                    return e.getAttribute('id') === t
                }
            })  : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(xe, ke);
                return function (e) {
                    var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function (e, t) {
                return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e)  : x.qsa ? t.querySelectorAll(e)  : void 0
            }
             : function (e, t) {
                var n,
                r = [
                ],
                a = 0,
                i = t.getElementsByTagName(e);
                if ('*' === e) {
                    for (; n = i[a++]; ) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, k.find.CLASS = x.getElementsByClassName && function (e, t) {
                return O ? t.getElementsByClassName(e)  : void 0
            }, j = [
            ], L = [
            ], (x.qsa = ve.test(r.querySelectorAll)) && (a(function (e) {
                N.appendChild(e).innerHTML = '<a id=\'' + H + '\'></a><select id=\'' + H + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>',
                e.querySelectorAll('[msallowcapture^=\'\']').length && L.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length || L.push('\\[' + ne + '*(?:value|' + te + ')'),
                e.querySelectorAll('[id~=' + H + '-]').length || L.push('~='),
                e.querySelectorAll(':checked').length || L.push(':checked'),
                e.querySelectorAll('a#' + H + '+*').length || L.push('.#.+[+~]')
            }), a(function (e) {
                var t = r.createElement('input');
                t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length && L.push('name' + ne + '*[*^$|!~]?='),
                e.querySelectorAll(':enabled').length || L.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                L.push(',.*:')
            })), (x.matchesSelector = ve.test(z = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && a(function (e) {
                x.disconnectedMatch = z.call(e, 'div'),
                z.call(e, '[s!=\'\']:x'),
                j.push('!=', oe)
            }), L = L.length && new RegExp(L.join('|')), j = j.length && new RegExp(j.join('|')), t = ve.test(N.compareDocumentPosition), B = t || ve.test(N.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r)  : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
             : function (e, t) {
                if (t) for (; t = t.parentNode; ) if (t === e) return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t) return D = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t)  : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? - 1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : P ? ee(P, e) - ee(P, t)  : 0 : 4 & n ? - 1 : 1)
            }
             : function (e, t) {
                if (e === t) return D = !0,
                0;
                var n,
                a = 0,
                i = e.parentNode,
                s = t.parentNode,
                l = [
                    e
                ],
                c = [
                    t
                ];
                if (!i || !s) return e === r ? - 1 : t === r ? 1 : i ? - 1 : s ? 1 : P ? ee(P, e) - ee(P, t)  : 0;
                if (i === s) return o(e, t);
                for (n = e; n = n.parentNode; ) l.unshift(n);
                for (n = t; n = n.parentNode; ) c.unshift(n);
                for (; l[a] === c[a]; ) a++;
                return a ? o(l[a], c[a])  : l[a] === R ? - 1 : c[a] === R ? 1 : 0
            }, r)  : I
        },
        t.matches = function (e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== I && A(e), n = n.replace(de, '=\'$1\']'), x.matchesSelector && O && (!j || !j.test(n)) && (!L || !L.test(n))) try {
                var r = z.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (a) {
            }
            return t(n, I, null, [
                e
            ]).length > 0
        },
        t.contains = function (e, t) {
            return (e.ownerDocument || e) !== I && A(e),
            B(e, t)
        },
        t.attr = function (e, t) {
            (e.ownerDocument || e) !== I && A(e);
            var n = k.attrHandle[t.toLowerCase()],
            r = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !O)  : void 0;
            return void 0 !== r ? r : x.attributes || !O ? e.getAttribute(t)  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        },
        t.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e)
        },
        t.uniqueSort = function (e) {
            var t,
            n = [
            ],
            r = 0,
            a = 0;
            if (D = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(Y), D) {
                for (; t = e[a++]; ) t === e[a] && (r = n.push(a));
                for (; r--; ) e.splice(n[r], 1)
            }
            return P = null,
            e
        },
        T = t.getText = function (e) {
            var t,
            n = '',
            r = 0,
            a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else for (; t = e[r++]; ) n += T(t);
            return n
        },
        k = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {
            },
            find: {
            },
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': {
                    dir: 'parentNode'
                },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': {
                    dir: 'previousSibling'
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, ke),
                    e[3] = (e[3] || e[4] || e[5] || '').replace(xe, ke),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(),
                    'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1)  : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = + (e[7] + e[8] || 'odd' === e[3]))  : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function (e) {
                    var t,
                    n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, ke).toLowerCase();
                    return '*' === e ? function () {
                        return !0
                    }
                     : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = q[e + ' '];
                    return t || (t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) && q(e, function (e) {
                        return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '')
                    })
                },
                ATTR: function (e, n, r) {
                    return function (a) {
                        var i = t.attr(a, e);
                        return null == i ? '!=' === n : n ? (i += '', '=' === n ? i === r : '!=' === n ? i !== r : '^=' === n ? r && 0 === i.indexOf(r)  : '*=' === n ? r && i.indexOf(r) > - 1 : '$=' === n ? r && i.slice( - r.length) === r : '~=' === n ? (' ' + i.replace(se, ' ') + ' ').indexOf(r) > - 1 : '|=' === n ? i === r || i.slice(0, r.length + 1) === r + '-' : !1)  : !0
                    }
                },
                CHILD: function (e, t, n, r, a) {
                    var i = 'nth' !== e.slice(0, 3),
                    o = 'last' !== e.slice( - 4),
                    s = 'of-type' === t;
                    return 1 === r && 0 === a ? function (e) {
                        return !!e.parentNode
                    }
                     : function (t, n, l) {
                        var c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        m = i !== o ? 'nextSibling' : 'previousSibling',
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !l && !s;
                        if (g) {
                            if (i) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = 'only' === e && !h && 'nextSibling'
                                }
                                return !0
                            }
                            if (h = [
                                o ? g.firstChild : g.lastChild
                            ], o && y) {
                                for (u = g[H] || (g[H] = {
                                }), c = u[e] || [
                                ], f = c[0] === $ && c[1], p = c[0] === $ && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop(); ) if (1 === d.nodeType && ++p && d === t) {
                                    u[e] = [
                                        $,
                                        f,
                                        p
                                    ];
                                    break
                                }
                            } else if (y && (c = (t[H] || (t[H] = {
                            })) [e]) && c[0] === $) p = c[1];
                             else for (; (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {
                            })) [e] = [
                                $,
                                p
                            ]), d !== t)); );
                            return p -= a,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var a,
                    i = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
                    return i[H] ? i(n)  : i.length > 1 ? (a = [
                        e,
                        e,
                        '',
                        n
                    ], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, a = i(e, n), o = a.length; o--; ) r = ee(e, a[o]),
                        e[r] = !(t[r] = a[o])
                    })  : function (e) {
                        return i(e, 0, a)
                    })  : i
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [
                    ],
                    n = [
                    ],
                    a = M(e.replace(le, '$1'));
                    return a[H] ? r(function (e, t, n, r) {
                        for (var i, o = a(e, null, r, [
                        ]), s = e.length; s--; ) (i = o[s]) && (e[s] = !(t[s] = i))
                    })  : function (e, r, i) {
                        return t[0] = e,
                        a(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(xe, ke),
                    function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > - 1
                    }
                }),
                lang: r(function (e) {
                    return fe.test(e || '') || t.error('unsupported lang: ' + e),
                    e = e.replace(xe, ke).toLowerCase(),
                    function (t) {
                        var n;
                        do if (n = O ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + '-');
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === N
                },
                focus: function (e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && !!e.checked || 'option' === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !k.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return me.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && 'button' === e.type || 'button' === t
                },
                text: function (e) {
                    var t;
                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e
                })
            }
        },
        k.pseudos.nth = k.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        }) k.pseudos[w] = l(w);
        return d.prototype = k.filters = k.pseudos,
        k.setFilters = new d,
        S = t.tokenize = function (e, n) {
            var r,
            a,
            i,
            o,
            s,
            l,
            c,
            u = V[e + ' '];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [
            ], c = k.preFilter; s; ) {
                (!r || (a = ce.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(i = [
                ])),
                r = !1,
                (a = ue.exec(s)) && (r = a.shift(), i.push({
                    value: r,
                    type: a[0].replace(le, ' ')
                }), s = s.slice(r.length));
                for (o in k.filter) !(a = he[o].exec(s)) || c[o] && !(a = c[o](a)) || (r = a.shift(), i.push({
                    value: r,
                    type: o,
                    matches: a
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e)  : V(e, l).slice(0)
        },
        M = t.compile = function (e, t) {
            var n,
            r = [
            ],
            a = [
            ],
            i = W[e + ' '];
            if (!i) {
                for (t || (t = S(e)), n = t.length; n--; ) i = y(t[n]),
                i[H] ? r.push(i)  : a.push(i);
                i = W(e, b(a, r)),
                i.selector = e
            }
            return i
        },
        E = t.select = function (e, t, n, r) {
            var a,
            i,
            o,
            s,
            l,
            c = 'function' == typeof e && e,
            d = !r && S(e = c.selector || e);
            if (n = n || [
            ], 1 === d.length) {
                if (i = d[0] = d[0].slice(0), i.length > 2 && 'ID' === (o = i[0]).type && x.getById && 9 === t.nodeType && O && k.relative[i[1].type]) {
                    if (t = (k.find.ID(o.matches[0].replace(xe, ke), t) || [
                    ]) [0], !t) return n;
                    c && (t = t.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (a = he.needsContext.test(e) ? 0 : i.length; a-- && (o = i[a], !k.relative[s = o.type]); ) if ((l = k.find[s]) && (r = l(o.matches[0].replace(xe, ke), be.test(i[0].type) && u(t.parentNode) || t))) {
                    if (i.splice(a, 1), e = r.length && p(i), !e) return Q.apply(n, r),
                    n;
                    break
                }
            }
            return (c || M(e, d)) (r, t, !O, n, be.test(e) && u(t.parentNode) || t),
            n
        },
        x.sortStable = H.split('').sort(Y).join('') === H,
        x.detectDuplicates = !!D,
        A(),
        x.sortDetached = a(function (e) {
            return 1 & e.compareDocumentPosition(I.createElement('div'))
        }),
        a(function (e) {
            return e.innerHTML = '<a href=\'#\'></a>',
            '#' === e.firstChild.getAttribute('href')
        }) || i('type|href|height|width', function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }),
        x.attributes && a(function (e) {
            return e.innerHTML = '<input/>',
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
        }) || i('value', function (e, t, n) {
            return n || 'input' !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        a(function (e) {
            return null == e.getAttribute('disabled')
        }) || i(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase()  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    Z.find = ae,
    Z.expr = ae.selectors,
    Z.expr[':'] = Z.expr.pseudos,
    Z.unique = ae.uniqueSort,
    Z.text = ae.getText,
    Z.isXMLDoc = ae.isXML,
    Z.contains = ae.contains;
    var ie = Z.expr.match.needsContext,
    oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    se = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ':not(' + e + ')'),
        1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [
            r
        ] : [
        ] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    },
    Z.fn.extend({
        find: function (e) {
            var t,
            n = this.length,
            r = [
            ],
            a = this;
            if ('string' != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++) if (Z.contains(a[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, a[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r)  : r),
            r.selector = this.selector ? this.selector + ' ' + e : e,
            r
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [
            ], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [
            ], !0))
        },
        is: function (e) {
            return !!r(this, 'string' == typeof e && ie.test(e) ? Z(e)  : e || [
            ], !1).length
        }
    });
    var le,
    ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ue = Z.fn.init = function (e, t) {
        var n,
        r;
        if (!e) return this;
        if ('string' == typeof e) {
            if (n = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
                null,
                e,
                null
            ] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e)  : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), oe.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n])  : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]),
            r && r.parentNode && (this.length = 1, this[0] = r),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this)  : Z.isFunction(e) ? 'undefined' != typeof le.ready ? le.ready(e)  : e(Z)  : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ue.prototype = Z.fn,
    le = Z(J);
    var de = /^(?:parents|prev(?:Until|All))/,
    pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [
            ], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                if (a && Z(e).is(n)) break;
                r.push(e)
            }
            return r
        },
        sibling: function (e, t) {
            for (var n = [
            ]; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    Z.fn.extend({
        has: function (e) {
            var t = Z(e, this),
            n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, a = this.length, i = [
            ], o = ie.test(e) || 'string' != typeof e ? Z(e, t || this.context)  : 0; a > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > - 1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                i.push(n);
                break
            }
            return this.pushStack(i.length > 1 ? Z.unique(i)  : i)
        },
        index: function (e) {
            return e ? 'string' == typeof e ? Y.call(Z(e), this[0])  : Y.call(this, e.jquery ? e[0] : e)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Z.dir(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
            return Z.dir(e, 'parentNode', n)
        },
        next: function (e) {
            return a(e, 'nextSibling')
        },
        prev: function (e) {
            return a(e, 'previousSibling')
        },
        nextAll: function (e) {
            return Z.dir(e, 'nextSibling')
        },
        prevAll: function (e) {
            return Z.dir(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
            return Z.dir(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
            return Z.dir(e, 'previousSibling', n)
        },
        siblings: function (e) {
            return Z.sibling((e.parentNode || {
            }).firstChild, e)
        },
        children: function (e) {
            return Z.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var a = Z.map(this, t, n);
            return 'Until' !== e.slice( - 5) && (r = n),
            r && 'string' == typeof r && (a = Z.filter(r, a)),
            this.length > 1 && (pe[e] || Z.unique(a), de.test(e) && a.reverse()),
            this.pushStack(a)
        }
    });
    var fe = /\S+/g,
    he = {
    };
    Z.Callbacks = function (e) {
        e = 'string' == typeof e ? he[e] || i(e)  : Z.extend({
        }, e);
        var t,
        n,
        r,
        a,
        o,
        s,
        l = [
        ],
        c = !e.once && [
        ],
        u = function (i) {
            for (t = e.memory && i, n = !0, s = a || 0, a = 0, o = l.length, r = !0; l && o > s; s++) if (l[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1,
            l && (c ? c.length && u(c.shift())  : t ? l = [
            ] : d.disable())
        },
        d = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function i(t) {
                        Z.each(t, function (t, n) {
                            var r = Z.type(n);
                            'function' === r ? e.unique && d.has(n) || l.push(n)  : n && n.length && 'string' !== r && i(n)
                        })
                    }(arguments),
                    r ? o = l.length : t && (a = n, u(t))
                }
                return this
            },
            remove: function () {
                return l && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, l, n)) > - 1; ) l.splice(n, 1),
                    r && (o >= n && o--, s >= n && s--)
                }),
                this
            },
            has: function (e) {
                return e ? Z.inArray(e, l) > - 1 : !(!l || !l.length)
            },
            empty: function () {
                return l = [
                ],
                o = 0,
                this
            },
            disable: function () {
                return l = c = t = void 0,
                this
            },
            disabled: function () {
                return !l
            },
            lock: function () {
                return c = void 0,
                t || d.disable(),
                this
            },
            locked: function () {
                return !c
            },
            fireWith: function (e, t) {
                return !l || n && !c || (t = t || [
                ], t = [
                    e,
                    t.slice ? t.slice()  : t
                ], r ? c.push(t)  : u(t)),
                this
            },
            fire: function () {
                return d.fireWith(this, arguments),
                this
            },
            fired: function () {
                return !!n
            }
        };
        return d
    },
    Z.extend({
        Deferred: function (e) {
            var t = [
                ['resolve',
                'done',
                Z.Callbacks('once memory'),
                'resolved'],
                [
                    'reject',
                    'fail',
                    Z.Callbacks('once memory'),
                    'rejected'
                ],
                [
                    'notify',
                    'progress',
                    Z.Callbacks('memory')
                ]
            ],
            n = 'pending',
            r = {
                state: function () {
                    return n
                },
                always: function () {
                    return a.done(arguments).fail(arguments),
                    this
                },
                then: function () {
                    var e = arguments;
                    return Z.Deferred(function (n) {
                        Z.each(t, function (t, i) {
                            var o = Z.isFunction(e[t]) && e[t];
                            a[i[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)  : n[i[0] + 'With'](this === r ? n.promise()  : this, o ? [
                                    e
                                ] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function (e) {
                    return null != e ? Z.extend(e, r)  : r
                }
            },
            a = {
            };
            return r.pipe = r.then,
            Z.each(t, function (e, i) {
                var o = i[2],
                s = i[3];
                r[i[1]] = o.add,
                s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                a[i[0]] = function () {
                    return a[i[0] + 'With'](this === a ? r : this, arguments),
                    this
                },
                a[i[0] + 'With'] = o.fireWith
            }),
            r.promise(a),
            e && e.call(a, a),
            a
        },
        when: function (e) {
            var t,
            n,
            r,
            a = 0,
            i = q.call(arguments),
            o = i.length,
            s = 1 !== o || e && Z.isFunction(e.promise) ? o : 0,
            l = 1 === s ? e : Z.Deferred(),
            c = function (e, n, r) {
                return function (a) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? q.call(arguments)  : a,
                    r === t ? l.notifyWith(n, r)  : --s || l.resolveWith(n, r)
                }
            };
            if (o > 1) for (t = new Array(o), n = new Array(o), r = new Array(o); o > a; a++) i[a] && Z.isFunction(i[a].promise) ? i[a].promise().done(c(a, r, i)).fail(l.reject).progress(c(a, n, t))  : --s;
            return s || l.resolveWith(r, i),
            l.promise()
        }
    });
    var me;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e),
        this
    },
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(J, [
                Z
            ]), Z.fn.triggerHandler && (Z(J).triggerHandler('ready'), Z(J).off('ready'))))
        }
    }),
    Z.ready.promise = function (t) {
        return me || (me = Z.Deferred(), 'complete' === J.readyState ? setTimeout(Z.ready)  : (J.addEventListener('DOMContentLoaded', o, !1), e.addEventListener('load', o, !1))),
        me.promise(t)
    },
    Z.ready.promise();
    var ge = Z.access = function (e, t, n, r, a, i, o) {
        var s = 0,
        l = e.length,
        c = null == n;
        if ('object' === Z.type(n)) {
            a = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, i, o)
        } else if (void 0 !== r && (a = !0, Z.isFunction(r) || (o = !0), c && (o ? (t.call(e, r), t = null)  : (c = t, t = function (e, t, n) {
            return c.call(Z(e), n)
        })), t)) for (; l > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        return a ? e : c ? t.call(e)  : l ? t(e[0], n)  : i
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || ! + e.nodeType
    },
    s.uid = 1,
    s.accepts = Z.acceptData,
    s.prototype = {
        key: function (e) {
            if (!s.accepts(e)) return 0;
            var t = {
            },
            n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {
            }),
            n
        },
        set: function (e, t, n) {
            var r,
            a = this.key(e),
            i = this.cache[a];
            if ('string' == typeof t) i[t] = n;
             else if (Z.isEmptyObject(i)) Z.extend(this.cache[a], t);
             else for (r in t) i[r] = t[r];
            return i
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var r;
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t)))  : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n,
            r,
            a,
            i = this.key(e),
            o = this.cache[i];
            if (void 0 === t) this.cache[i] = {
            };
             else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase))  : (a = Z.camelCase(t), t in o ? r = [
                    t,
                    a
                ] : (r = a, r = r in o ? [
                    r
                ] : r.match(fe) || [
                ])),
                n = r.length;
                for (; n--; ) delete o[r[n]]
            }
        },
        hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {
            })
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new s,
    ye = new s,
    be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    we = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function (e, t) {
            ye.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }),
    Z.fn.extend({
        data: function (e, t) {
            var n,
            r,
            a,
            i = this[0],
            o = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (a = ye.get(i), 1 === i.nodeType && !ve.get(i, 'hasDataAttrs'))) {
                    for (n = o.length; n--; ) o[n] && (r = o[n].name, 0 === r.indexOf('data-') && (r = Z.camelCase(r.slice(5)), l(i, r, a[r])));
                    ve.set(i, 'hasDataAttrs', !0)
                }
                return a
            }
            return 'object' == typeof e ? this.each(function () {
                ye.set(this, e)
            })  : ge(this, function (t) {
                var n,
                r = Z.camelCase(e);
                if (i && void 0 === t) {
                    if (n = ye.get(i, e), void 0 !== n) return n;
                    if (n = ye.get(i, r), void 0 !== n) return n;
                    if (n = l(i, r, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t),
                    - 1 !== e.indexOf('-') && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }),
    Z.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || 'fx') + 'queue', r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n))  : r.push(n)), r || [
            ])  : void 0
        },
        dequeue: function (e, t) {
            t = t || 'fx';
            var n = Z.queue(e, t),
            r = n.length,
            a = n.shift(),
            i = Z._queueHooks(e, t),
            o = function () {
                Z.dequeue(e, t)
            };
            'inprogress' === a && (a = n.shift(), r--),
            a && ('fx' === t && n.unshift('inprogress'), delete i.stop, a.call(e, o, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks('once memory').add(function () {
                    ve.remove(e, [
                        t + 'queue',
                        n
                    ])
                })
            })
        }
    }),
    Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return 'string' != typeof e && (t = e, e = 'fx', n--),
            arguments.length < n ? Z.queue(this[0], e)  : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                'fx' === e && 'inprogress' !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || 'fx', [
            ])
        },
        promise: function (e, t) {
            var n,
            r = 1,
            a = Z.Deferred(),
            i = this,
            o = this.length,
            s = function () {
                --r || a.resolveWith(i, [
                    i
                ])
            };
            for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; o--; ) n = ve.get(i[o], e + 'queueHooks'),
            n && n.empty && (r++, n.empty.add(s));
            return s(),
            a.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = [
        'Top',
        'Right',
        'Bottom',
        'Left'
    ],
    Te = function (e, t) {
        return e = t || e,
        'none' === Z.css(e, 'display') || !Z.contains(e.ownerDocument, e)
    },
    Ce = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(),
        t = e.appendChild(J.createElement('div')),
        n = J.createElement('input');
        n.setAttribute('type', 'radio'),
        n.setAttribute('checked', 'checked'),
        n.setAttribute('name', 't'),
        t.appendChild(n),
        K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = '<textarea>x</textarea>',
        K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = 'undefined';
    K.focusinBubbles = 'onfocusin' in e;
    var Me = /^key/,
    Ee = /^(?:mouse|pointer|contextmenu)|click/,
    _e = /^(?:focusinfocus|focusoutblur)$/,
    Pe = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {
        },
        add: function (e, t, n, r, a) {
            var i,
            o,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g = ve.get(e);
            if (g) for (n.handler && (i = n, n = i.handler, a = i.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {
            }), (o = g.handle) || (o = g.handle = function (t) {
                return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments)  : void 0
            }), t = (t || '').match(fe) || [
                ''
            ], c = t.length; c--; ) s = Pe.exec(t[c]) || [
            ],
            f = m = s[1],
            h = (s[2] || '').split('.').sort(),
            f && (d = Z.event.special[f] || {
            }, f = (a ? d.delegateType : d.bindType) || f, d = Z.event.special[f] || {
            }, u = Z.extend({
                type: f,
                origType: m,
                data: r,
                handler: n,
                guid: n.guid,
                selector: a,
                needsContext: a && Z.expr.match.needsContext.test(a),
                namespace: h.join('.')
            }, i), (p = l[f]) || (p = l[f] = [
            ], p.delegateCount = 0, d.setup && d.setup.call(e, r, h, o) !== !1 || e.addEventListener && e.addEventListener(f, o, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, u)  : p.push(u), Z.event.global[f] = !0)
        },
        remove: function (e, t, n, r, a) {
            var i,
            o,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || '').match(fe) || [
                    ''
                ], c = t.length; c--; ) if (s = Pe.exec(t[c]) || [
                ], f = m = s[1], h = (s[2] || '').split('.').sort(), f) {
                    for (d = Z.event.special[f] || {
                    }, f = (r ? d.delegateType : d.bindType) || f, p = l[f] || [
                    ], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), o = i = p.length; i--; ) u = p[i],
                    !a && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ('**' !== r || !u.selector) || (p.splice(i, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                    o && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) Z.event.remove(e, f + t[c], n, r, !0);
                Z.isEmptyObject(l) && (delete g.handle, ve.remove(e, 'events'))
            }
        },
        trigger: function (t, n, r, a) {
            var i,
            o,
            s,
            l,
            c,
            u,
            d,
            p = [
                r || J
            ],
            f = U.call(t, 'type') ? t.type : t,
            h = U.call(t, 'namespace') ? t.namespace.split('.')  : [
            ];
            if (o = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(f + Z.event.triggered) && (f.indexOf('.') >= 0 && (h = f.split('.'), f = h.shift(), h.sort()), c = f.indexOf(':') < 0 && 'on' + f, t = t[Z.expando] ? t : new Z.Event(f, 'object' == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = h.join('.'), t.namespace_re = t.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [
                t
            ] : Z.makeArray(n, [
                t
            ]), d = Z.event.special[f] || {
            }, a || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!a && !d.noBubble && !Z.isWindow(r)) {
                    for (l = d.delegateType || f, _e.test(l + f) || (o = o.parentNode); o; o = o.parentNode) p.push(o),
                    s = o;
                    s === (r.ownerDocument || J) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (o = p[i++]) && !t.isPropagationStopped(); ) t.type = i > 1 ? l : d.bindType || f,
                u = (ve.get(o, 'events') || {
                }) [t.type] && ve.get(o, 'handle'),
                u && u.apply(o, n),
                u = c && o[c],
                u && u.apply && Z.acceptData(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = f,
                a || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[f]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = f, r[f](), Z.event.triggered = void 0, s && (r[c] = s)),
                t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t,
            n,
            r,
            a,
            i,
            o = [
            ],
            s = q.call(arguments),
            l = (ve.get(this, 'events') || {
            }) [e.type] || [
            ],
            c = Z.event.special[e.type] || {
            };
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (o = Z.event.handlers.call(this, e, l), t = 0; (a = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = a.elem, n = 0; (i = a.handlers[n++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Z.event.special[i.origType] || {
                }).handle || i.handler).apply(a.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function (e, t) {
            var n,
            r,
            a,
            i,
            o = [
            ],
            s = t.delegateCount,
            l = e.target;
            if (s && l.nodeType && (!e.button || 'click' !== e.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || 'click' !== e.type) {
                for (r = [
                ], n = 0; s > n; n++) i = t[n],
                a = i.selector + ' ',
                void 0 === r[a] && (r[a] = i.needsContext ? Z(a, this).index(l) >= 0 : Z.find(a, this, null, [
                    l
                ]).length),
                r[a] && r.push(i);
                r.length && o.push({
                    elem: l,
                    handlers: r
                })
            }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {
        },
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (e, t) {
                var n,
                r,
                a,
                i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, a = n.body, e.pageX = t.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)),
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t,
            n,
            r,
            a = e.type,
            i = e,
            o = this.fixHooks[a];
            for (o || (this.fixHooks[a] = o = Ee.test(a) ? this.mouseHooks : Me.test(a) ? this.keyHooks : {
            }), r = o.props ? this.props.concat(o.props)  : this.props, e = new Z.Event(i), t = r.length; t--; ) n = r[t],
            e[n] = i[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            o.filter ? o.filter(e, i)  : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== d() && this.focus ? (this.focus(), !1)  : void 0
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    return this === d() && this.blur ? (this.blur(), !1)  : void 0
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    return 'checkbox' === this.type && this.click && Z.nodeName(this, 'input') ? (this.click(), !1)  : void 0
                },
                _default: function (e) {
                    return Z.nodeName(e.target, 'a')
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var a = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {
                }
            });
            r ? Z.event.trigger(a, null, t)  : Z.event.dispatch.call(t, a),
            a.isDefaultPrevented() && n.preventDefault()
        }
    },
    Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    },
    Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u)  : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void (this[Z.expando] = !0))  : new Z.Event(e, t)
    },
    Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n,
                r = this,
                a = e.relatedTarget,
                i = e.handleObj;
                return (!a || a !== r && !Z.contains(r, a)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    K.focusinBubbles || Z.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                a = ve.access(r, t);
                a || r.addEventListener(e, n, !0),
                ve.access(r, t, (a || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                a = ve.access(r, t) - 1;
                a ? ve.access(r, t, a)  : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }),
    Z.fn.extend({
        on: function (e, t, n, r, a) {
            var i,
            o;
            if ('object' == typeof e) {
                'string' != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], a);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0)  : null == r && ('string' == typeof t ? (r = n, n = void 0)  : (r = n, n = t, t = void 0)), r === !1) r = u;
             else if (!r) return this;
            return 1 === a && (i = r, r = function (e) {
                return Z().off(e),
                i.apply(this, arguments)
            }, r.guid = i.guid || (i.guid = Z.guid++)),
            this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r,
            a;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            Z(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
            this;
            if ('object' == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this
            }
            return (t === !1 || 'function' == typeof t) && (n = t, t = void 0),
            n === !1 && (n = u),
            this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0)  : void 0
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ae = /<([\w:]+)/,
    Ie = /<|&#?\w+;/,
    Ne = /<(?:script|style|link)/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Le = /^$|\/(?:java|ecma)script/i,
    je = /^true\/(.*)/,
    ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Be = {
        option: [
            1,
            '<select multiple=\'multiple\'>',
            '</select>'
        ],
        thead: [
            1,
            '<table>',
            '</table>'
        ],
        col: [
            2,
            '<table><colgroup>',
            '</colgroup></table>'
        ],
        tr: [
            2,
            '<table><tbody>',
            '</tbody></table>'
        ],
        td: [
            3,
            '<table><tbody><tr>',
            '</tr></tbody></table>'
        ],
        _default: [
            0,
            '',
            ''
        ]
    };
    Be.optgroup = Be.option,
    Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead,
    Be.th = Be.td,
    Z.extend({
        clone: function (e, t, n) {
            var r,
            a,
            i,
            o,
            s = e.cloneNode(!0),
            l = Z.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (o = v(s), i = v(e), r = 0, a = i.length; a > r; r++) y(i[r], o[r]);
            if (t) if (n) for (i = i || v(e), o = o || v(s), r = 0, a = i.length; a > r; r++) g(i[r], o[r]);
             else g(e, s);
            return o = v(s, 'script'),
            o.length > 0 && m(o, !l && v(e, 'script')),
            s
        },
        buildFragment: function (e, t, n, r) {
            for (var a, i, o, s, l, c, u = t.createDocumentFragment(), d = [
            ], p = 0, f = e.length; f > p; p++) if (a = e[p], a || 0 === a) if ('object' === Z.type(a)) Z.merge(d, a.nodeType ? [
                a
            ] : a);
             else if (Ie.test(a)) {
                for (i = i || u.appendChild(t.createElement('div')), o = (Ae.exec(a) || [
                    '',
                    ''
                ]) [1].toLowerCase(), s = Be[o] || Be._default, i.innerHTML = s[1] + a.replace(De, '<$1></$2>') + s[2], c = s[0]; c--; ) i = i.lastChild;
                Z.merge(d, i.childNodes),
                i = u.firstChild,
                i.textContent = ''
            } else d.push(t.createTextNode(a));
            for (u.textContent = '', p = 0; a = d[p++]; ) if ((!r || - 1 === Z.inArray(a, r)) && (l = Z.contains(a.ownerDocument, a), i = v(u.appendChild(a), 'script'), l && m(i), n)) for (c = 0; a = i[c++]; ) Le.test(a.type || '') && n.push(a);
            return u
        },
        cleanData: function (e) {
            for (var t, n, r, a, i = Z.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Z.acceptData(n) && (a = n[ve.expando], a && (t = ve.cache[a]))) {
                    if (t.events) for (r in t.events) i[r] ? Z.event.remove(n, r)  : Z.removeEvent(n, r, t.handle);
                    ve.cache[a] && delete ve.cache[a]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }),
    Z.fn.extend({
        text: function (e) {
            return ge(this, function (e) {
                return void 0 === e ? Z.text(this)  : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this)  : this, a = 0; null != (n = r[a]); a++) t || 1 !== n.nodeType || Z.cleanData(v(n)),
            n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, 'script')), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = '');
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function () {
                return Z.clone(this, e, t)
            })
        },
        html: function (e) {
            return ge(this, function (e) {
                var t = this[0] || {
                },
                n = 0,
                r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ('string' == typeof e && !Ne.test(e) && !Be[(Ae.exec(e) || [
                    '',
                    ''
                ]) [1].toLowerCase()]) {
                    e = e.replace(De, '<$1></$2>');
                    try {
                        for (; r > n; n++) t = this[n] || {
                        },
                        1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (a) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode,
                Z.cleanData(v(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = V.apply([], e);
            var n,
            r,
            a,
            i,
            o,
            s,
            l = 0,
            c = this.length,
            u = this,
            d = c - 1,
            p = e[0],
            m = Z.isFunction(p);
            if (m || c > 1 && 'string' == typeof p && !K.checkClone && Oe.test(p)) return this.each(function (n) {
                var r = u.eq(n);
                m && (e[0] = p.call(this, n, r.html())),
                r.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (a = Z.map(v(n, 'script'), f), i = a.length; c > l; l++) o = n,
                l !== d && (o = Z.clone(o, !0, !0), i && Z.merge(a, v(o, 'script'))),
                t.call(this[l], o, l);
                if (i) for (s = a[a.length - 1].ownerDocument, Z.map(a, h), l = 0; i > l; l++) o = a[l],
                Le.test(o.type || '') && !ve.access(o, 'globalEval') && Z.contains(s, o) && (o.src ? Z._evalUrl && Z._evalUrl(o.src)  : Z.globalEval(o.textContent.replace(ze, '')))
            }
            return this
        }
    }),
    Z.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [
            ], a = Z(e), i = a.length - 1, o = 0; i >= o; o++) n = o === i ? this : this.clone(!0),
            Z(a[o]) [t](n),
            W.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var He,
    Re = {
    },
    $e = /^margin/,
    Fe = new RegExp('^(' + xe + ')(?!px)[a-z%]+$', 'i'),
    qe = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null)  : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            o.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute',
            o.innerHTML = '',
            a.appendChild(i);
            var t = e.getComputedStyle(o, null);
            n = '1%' !== t.top,
            r = '4px' === t.width,
            a.removeChild(i)
        }
        var n,
        r,
        a = J.documentElement,
        i = J.createElement('div'),
        o = J.createElement('div');
        o.style && (o.style.backgroundClip = 'content-box', o.cloneNode(!0).style.backgroundClip = '', K.clearCloneStyle = 'content-box' === o.style.backgroundClip, i.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', i.appendChild(o), e.getComputedStyle && Z.extend(K, {
            pixelPosition: function () {
                return t(),
                n
            },
            boxSizingReliable: function () {
                return null == r && t(),
                r
            },
            reliableMarginRight: function () {
                var t,
                n = o.appendChild(J.createElement('div'));
                return n.style.cssText = o.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0',
                n.style.marginRight = n.style.width = '0',
                o.style.width = '1px',
                a.appendChild(i),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                a.removeChild(i),
                o.removeChild(n),
                t
            }
        }))
    }(),
    Z.swap = function (e, t, n, r) {
        var a,
        i,
        o = {
        };
        for (i in t) o[i] = e.style[i],
        e.style[i] = t[i];
        a = n.apply(e, r || [
        ]);
        for (i in t) e.style[i] = o[i];
        return a
    };
    var Ve = /^(none|table(?!-c[ea]).+)/,
    We = new RegExp('^(' + xe + ')(.*)$', 'i'),
    Ye = new RegExp('^([+-])=(' + xe + ')', 'i'),
    Xe = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block'
    },
    Ge = {
        letterSpacing: '0',
        fontWeight: '400'
    },
    Ue = [
        'Webkit',
        'O',
        'Moz',
        'ms'
    ];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = x(e, 'opacity');
                        return '' === n ? '1' : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            'float': 'cssFloat'
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a,
                i,
                o,
                s = Z.camelCase(t),
                l = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(l, s)),
                o = Z.cssHooks[t] || Z.cssHooks[s],
                void 0 === n ? o && 'get' in o && void 0 !== (a = o.get(e, !1, r)) ? a : l[t] : (i = typeof n, 'string' === i && (a = Ye.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(Z.css(e, t)), i = 'number'), null != n && n === n && ('number' !== i || Z.cssNumber[s] || (n += 'px'), K.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), o && 'set' in o && void 0 === (n = o.set(e, n, r)) || (l[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var a,
            i,
            o,
            s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)),
            o = Z.cssHooks[t] || Z.cssHooks[s],
            o && 'get' in o && (a = o.get(e, !0, n)),
            void 0 === a && (a = x(e, t, r)),
            'normal' === a && t in Ge && (a = Ge[t]),
            '' === n || n ? (i = parseFloat(a), n === !0 || Z.isNumeric(i) ? i || 0 : a)  : a
        }
    }),
    Z.each(['height',
    'width'], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? Ve.test(Z.css(e, 'display')) && 0 === e.offsetWidth ? Z.swap(e, Xe, function () {
                    return M(e, t, r)
                })  : M(e, t, r)  : void 0
            },
            set: function (e, n, r) {
                var a = r && qe(e);
                return C(e, n, r ? S(e, t, r, 'border-box' === Z.css(e, 'boxSizing', !1, a), a)  : 0)
            }
        }
    }),
    Z.cssHooks.marginRight = k(K.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {
            display: 'inline-block'
        }, x, [
            e,
            'marginRight'
        ])  : void 0
    }),
    Z.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, a = {
                }, i = 'string' == typeof n ? n.split(' ')  : [
                    n
                ]; 4 > r; r++) a[e + ke[r] + t] = i[r] || i[r - 2] || i[0];
                return a
            }
        },
        $e.test(e) || (Z.cssHooks[e + t].set = C)
    }),
    Z.fn.extend({
        css: function (e, t) {
            return ge(this, function (e, t, n) {
                var r,
                a,
                i = {
                },
                o = 0;
                if (Z.isArray(t)) {
                    for (r = qe(e), a = t.length; a > o; o++) i[t[o]] = Z.css(e, t[o], !1, r);
                    return i
                }
                return void 0 !== n ? Z.style(e, t, n)  : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (e) {
            return 'boolean' == typeof e ? e ? this.show()  : this.hide()  : this.each(function () {
                Te(this) ? Z(this).show()  : Z(this).hide()
            })
        }
    }),
    Z.Tween = _,
    _.prototype = {
        constructor: _,
        init: function (e, t, n, r, a, i) {
            this.elem = e,
            this.prop = n,
            this.easing = a || 'swing',
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (Z.cssNumber[n] ? '' : 'px')
        },
        cur: function () {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this)  : _.propHooks._default.get(this)
        },
        run: function (e) {
            var t,
            n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)  : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this)  : _.propHooks._default.set(this),
            this
        }
    },
    _.prototype.init.prototype = _.prototype,
    _.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0)  : e.elem[e.prop]
            },
            set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e)  : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit)  : e.elem[e.prop] = e.now
            }
        }
    },
    _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    Z.fx = _.prototype.init,
    Z.fx.step = {
    };
    var Ke,
    Je,
    Qe = /^(?:toggle|show|hide)$/,
    Ze = new RegExp('^(?:([+-])=|)(' + xe + ')([a-z%]*)$', 'i'),
    et = /queueHooks$/,
    tt = [
        I
    ],
    nt = {
        '*': [
            function (e, t) {
                var n = this.createTween(e, t),
                r = n.cur(),
                a = Ze.exec(t),
                i = a && a[3] || (Z.cssNumber[e] ? '' : 'px'),
                o = (Z.cssNumber[e] || 'px' !== i && + r) && Ze.exec(Z.css(n.elem, e)),
                s = 1,
                l = 20;
                if (o && o[3] !== i) {
                    i = i || o[3],
                    a = a || [
                    ],
                    o = + r || 1;
                    do s = s || '.5',
                    o /= s,
                    Z.style(n.elem, e, o + i);
                    while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return a && (o = n.start = + o || + r || 0, n.unit = i, n.end = a[1] ? o + (a[1] + 1) * a[2] : + a[2]),
                n
            }
        ]
    };
    Z.Animation = Z.extend(O, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = [
                '*'
            ])  : e = e.split(' ');
            for (var n, r = 0, a = e.length; a > r; r++) n = e[r],
            nt[n] = nt[n] || [
            ],
            nt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? tt.unshift(e)  : tt.push(e)
        }
    }),
    Z.speed = function (e, t, n) {
        var r = e && 'object' == typeof e ? Z.extend({
        }, e)  : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
        r.old = r.complete,
        r.complete = function () {
            Z.isFunction(r.old) && r.old.call(this),
            r.queue && Z.dequeue(this, r.queue)
        },
        r
    },
    Z.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Te).css('opacity', 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var a = Z.isEmptyObject(e),
            i = Z.speed(t, n, r),
            o = function () {
                var t = O(this, Z.extend({
                }, e), i);
                (a || ve.get(this, 'finish')) && t.stop(!0)
            };
            return o.finish = o,
            a || i.queue === !1 ? this.each(o)  : this.queue(i.queue, o)
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return 'string' != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || 'fx', [
            ]),
            this.each(function () {
                var t = !0,
                a = null != e && e + 'queueHooks',
                i = Z.timers,
                o = ve.get(this);
                if (a) o[a] && o[a].stop && r(o[a]);
                 else for (a in o) o[a] && o[a].stop && et.test(a) && r(o[a]);
                for (a = i.length; a--; ) i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || 'fx'),
            this.each(function () {
                var t,
                n = ve.get(this),
                r = n[e + 'queue'],
                a = n[e + 'queueHooks'],
                i = Z.timers,
                o = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, [
                ]), a && a.stop && a.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    Z.each(['toggle',
    'show',
    'hide'], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, r, a) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments)  : this.animate(D(t, !0), e, r, a)
        }
    }),
    Z.each({
        slideDown: D('show'),
        slideUp: D('hide'),
        slideToggle: D('toggle'),
        fadeIn: {
            opacity: 'show'
        },
        fadeOut: {
            opacity: 'hide'
        },
        fadeToggle: {
            opacity: 'toggle'
        }
    }, function (e, t) {
        Z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    Z.timers = [
    ],
    Z.fx.tick = function () {
        var e,
        t = 0,
        n = Z.timers;
        for (Ke = Z.now(); t < n.length; t++) e = n[t],
        e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        Ke = void 0
    },
    Z.fx.timer = function (e) {
        Z.timers.push(e),
        e() ? Z.fx.start()  : Z.timers.pop()
    },
    Z.fx.interval = 13,
    Z.fx.start = function () {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    },
    Z.fx.stop = function () {
        clearInterval(Je),
        Je = null
    },
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e,
        t = t || 'fx',
        this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    },
    function () {
        var e = J.createElement('input'),
        t = J.createElement('select'),
        n = t.appendChild(J.createElement('option'));
        e.type = 'checkbox',
        K.checkOn = '' !== e.value,
        K.optSelected = n.selected,
        t.disabled = !0,
        K.optDisabled = !n.disabled,
        e = J.createElement('input'),
        e.value = 't',
        e.type = 'radio',
        K.radioValue = 't' === e.value
    }();
    var rt,
    at,
    it = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }),
    Z.extend({
        attr: function (e, t, n) {
            var r,
            a,
            i = e.nodeType;
            if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === Se ? Z.prop(e, t, n)  : (1 === i && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? at : rt)), void 0 === n ? r && 'get' in r && null !== (a = r.get(e, t)) ? a : (a = Z.find.attr(e, t), null == a ? void 0 : a)  : null !== n ? r && 'set' in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ''), n)  : void Z.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n,
            r,
            a = 0,
            i = t && t.match(fe);
            if (i && 1 === e.nodeType) for (; n = i[a++]; ) r = Z.propFix[n] || n,
            Z.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!K.radioValue && 'radio' === t && Z.nodeName(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    at = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n)  : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = it[t] || Z.find.attr;
        it[t] = function (e, t, r) {
            var a,
            i;
            return r || (i = it[t], it[t] = a, a = null != n(e, t, r) ? t.toLowerCase()  : null, it[t] = i),
            a
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
    Z.extend({
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        },
        prop: function (e, t, n) {
            var r,
            a,
            i,
            o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return i = 1 !== o || !Z.isXMLDoc(e),
            i && (t = Z.propFix[t] || t, a = Z.propHooks[t]),
            void 0 !== n ? a && 'set' in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && 'get' in a && null !== (r = a.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute('tabindex') || ot.test(e.nodeName) || e.href ? e.tabIndex : - 1
                }
            }
        }
    }),
    K.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    Z.each(['tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t,
            n,
            r,
            a,
            i,
            o,
            s = 'string' == typeof e && e,
            l = 0,
            c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || '').match(fe) || [
            ]; c > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(st, ' ')  : ' ')) {
                for (i = 0; a = t[i++]; ) r.indexOf(' ' + a + ' ') < 0 && (r += a + ' ');
                o = Z.trim(r),
                n.className !== o && (n.className = o)
            }
            return this
        },
        removeClass: function (e) {
            var t,
            n,
            r,
            a,
            i,
            o,
            s = 0 === arguments.length || 'string' == typeof e && e,
            l = 0,
            c = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || '').match(fe) || [
            ]; c > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(st, ' ')  : '')) {
                for (i = 0; a = t[i++]; ) for (; r.indexOf(' ' + a + ' ') >= 0; ) r = r.replace(' ' + a + ' ', ' ');
                o = e ? Z.trim(r)  : '',
                n.className !== o && (n.className = o)
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e)  : this.removeClass(e)  : Z.isFunction(e) ? this.each(function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            })  : this.each(function () {
                if ('string' === n) for (var t, r = 0, a = Z(this), i = e.match(fe) || [
                ]; t = i[r++]; ) a.hasClass(t) ? a.removeClass(t)  : a.addClass(t);
                 else (n === Se || 'boolean' === n) && (this.className && ve.set(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : ve.get(this, '__className__') || '')
            })
        },
        hasClass: function (e) {
            for (var t = ' ' + e + ' ', n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(st, ' ').indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t,
            n,
            r,
            a = this[0];
            {
                if (arguments.length) return r = Z.isFunction(e),
                this.each(function (n) {
                    var a;
                    1 === this.nodeType && (a = r ? e.call(this, n, Z(this).val())  : e, null == a ? a = '' : 'number' == typeof a ? a += '' : Z.isArray(a) && (a = Z.map(a, function (e) {
                        return null == e ? '' : e + ''
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && 'set' in t && void 0 !== t.set(this, a, 'value') || (this.value = a))
                });
                if (a) return t = Z.valHooks[a.type] || Z.valHooks[a.nodeName.toLowerCase()],
                t && 'get' in t && void 0 !== (n = t.get(a, 'value')) ? n : (n = a.value, 'string' == typeof n ? n.replace(lt, '')  : null == n ? '' : n)
            }
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, 'value');
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, a = e.selectedIndex, i = 'select-one' === e.type || 0 > a, o = i ? null : [
                    ], s = i ? a + 1 : r.length, l = 0 > a ? s : i ? a : 0; s > l; l++) if (n = r[l], (n.selected || l === a) && (K.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, 'optgroup'))) {
                        if (t = Z(n).val(), i) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function (e, t) {
                    for (var n, r, a = e.options, i = Z.makeArray(t), o = a.length; o--; ) r = a[o],
                    (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = - 1),
                    i
                }
            }
        }
    }),
    Z.each(['radio',
    'checkbox'], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        },
        K.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value
        })
    }),
    Z.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n)  : this.trigger(t)
        }
    }),
    Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n)
        }
    });
    var ct = Z.now(),
    ut = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + '')
    },
    Z.parseXML = function (e) {
        var t,
        n;
        if (!e || 'string' != typeof e) return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, 'text/xml')
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName('parsererror').length) && Z.error('Invalid XML: ' + e),
        t
    };
    var dt = /#.*$/,
    pt = /([?&])_=[^&]*/,
    ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    mt = /^(?:GET|HEAD)$/,
    gt = /^\/\//,
    vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    yt = {
    },
    bt = {
    },
    wt = '*/'.concat('*'),
    xt = e.location.href,
    kt = vt.exec(xt.toLowerCase()) || [
    ];
    Z.extend({
        active: 0,
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: xt,
            type: 'GET',
            isLocal: ht.test(kt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': wt,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': Z.parseJSON,
                'text xml': Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? z(z(e, Z.ajaxSettings), t)  : z(Z.ajaxSettings, e)
        },
        ajaxPrefilter: L(yt),
        ajaxTransport: L(bt),
        ajax: function (e, t) {
            function n(e, t, n, o) {
                var l,
                u,
                v,
                y,
                w,
                k = t;
                2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = o || '', x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = B(d, x, n)), y = H(d, y, x, l), l ? (d.ifModified && (w = x.getResponseHeader('Last-Modified'), w && (Z.lastModified[a] = w), w = x.getResponseHeader('etag'), w && (Z.etag[a] = w)), 204 === e || 'HEAD' === d.type ? k = 'nocontent' : 304 === e ? k = 'notmodified' : (k = y.state, u = y.data, v = y.error, l = !v))  : (v = k, (e || !k) && (k = 'error', 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + '', l ? h.resolveWith(p, [
                    u,
                    k,
                    x
                ])  : h.rejectWith(p, [
                    x,
                    k,
                    v
                ]), x.statusCode(g), g = void 0, c && f.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
                    x,
                    d,
                    l ? u : v
                ]), m.fireWith(p, [
                    x,
                    k
                ]), c && (f.trigger('ajaxComplete', [
                    x,
                    d
                ]), --Z.active || Z.event.trigger('ajaxStop')))
            }
            'object' == typeof e && (t = e, e = void 0),
            t = t || {
            };
            var r,
            a,
            i,
            o,
            s,
            l,
            c,
            u,
            d = Z.ajaxSetup({
            }, t),
            p = d.context || d,
            f = d.context && (p.nodeType || p.jquery) ? Z(p)  : Z.event,
            h = Z.Deferred(),
            m = Z.Callbacks('once memory'),
            g = d.statusCode || {
            },
            v = {
            },
            y = {
            },
            b = 0,
            w = 'canceled',
            x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!o) for (o = {
                        }; t = ft.exec(i); ) o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? i : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function (e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function (e) {
                    var t;
                    if (e) if (2 > b) for (t in e) g[t] = [
                        g[t],
                        e[t]
                    ];
                     else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || xt) + '').replace(dt, '').replace(gt, kt[1] + '//'), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || '*').toLowerCase().match(fe) || [
                ''
            ], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === kt[1] && l[2] === kt[2] && (l[3] || ('http:' === l[1] ? '80' : '443')) === (kt[3] || ('http:' === kt[1] ? '80' : '443')))), d.data && d.processData && 'string' != typeof d.data && (d.data = Z.param(d.data, d.traditional)), j(yt, d, t, x), 2 === b) return x;
            c = Z.event && d.global,
            c && 0 === Z.active++ && Z.event.trigger('ajaxStart'),
            d.type = d.type.toUpperCase(),
            d.hasContent = !mt.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (ut.test(a) ? '&' : '?') + d.data, delete d.data), d.cache === !1 && (d.url = pt.test(a) ? a.replace(pt, '$1_=' + ct++)  : a + (ut.test(a) ? '&' : '?') + '_=' + ct++)),
            d.ifModified && (Z.lastModified[a] && x.setRequestHeader('If-Modified-Since', Z.lastModified[a]), Z.etag[a] && x.setRequestHeader('If-None-Match', Z.etag[a])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader('Content-Type', d.contentType),
            x.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + wt + '; q=0.01' : '')  : d.accepts['*']);
            for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = 'abort';
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) x[u](d[u]);
            if (r = j(bt, d, t, x)) {
                x.readyState = 1,
                c && f.trigger('ajaxSend', [
                    x,
                    d
                ]),
                d.async && d.timeout > 0 && (s = setTimeout(function () {
                    x.abort('timeout')
                }, d.timeout));
                try {
                    b = 1,
                    r.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n( - 1, k)
                }
            } else n( - 1, 'No Transport');
            return x
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, 'json')
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, 'script')
        }
    }),
    Z.each(['get',
    'post'], function (e, t) {
        Z[t] = function (e, n, r, a) {
            return Z.isFunction(n) && (a = a || r, r = n, n = void 0),
            Z.ajax({
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: r
            })
        }
    }),
    Z._evalUrl = function (e) {
        return Z.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        })
    },
    Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            })  : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapInner(e.call(this, t))
            })  : this.each(function () {
                var t = Z(this),
                n = t.contents();
                n.length ? n.wrapAll(e)  : t.append(e)
            })
        },
        wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n)  : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, 'body') || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    },
    Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
    Ct = /\[\]$/,
    St = /\r?\n/g,
    Mt = /^(?:submit|button|image|reset|file)$/i,
    Et = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n,
        r = [
        ],
        a = function (e, t) {
            t = Z.isFunction(t) ? t()  : null == t ? '' : t,
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            a(this.name, this.value)
        });
         else for (n in e) R(n, e[n], t, a);
        return r.join('&').replace(Tt, '+')
    },
    Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, 'elements');
                return e ? Z.makeArray(e)  : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(':disabled') && Et.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ce.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(St, '\r\n')
                    }
                })  : {
                    name: t.name,
                    value: n.replace(St, '\r\n')
                }
            }).get()
        }
    }),
    Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var _t = 0,
    Pt = {
    },
    Dt = {
        0: 200,
        1223: 204
    },
    At = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent('onunload', function () {
        for (var e in Pt) Pt[e]()
    }),
    K.cors = !!At && 'withCredentials' in At,
    K.ajax = At = !!At,
    Z.ajaxTransport(function (e) {
        var t;
        return K.cors || At && !e.crossDomain ? {
            send: function (n, r) {
                var a,
                i = e.xhr(),
                o = ++_t;
                if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) i[a] = e.xhrFields[a];
                e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
                e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
                for (a in n) i.setRequestHeader(a, n[a]);
                t = function (e) {
                    return function () {
                        t && (delete Pt[o], t = i.onload = i.onerror = null, 'abort' === e ? i.abort()  : 'error' === e ? r(i.status, i.statusText)  : r(Dt[i.status] || i.status, i.statusText, 'string' == typeof i.responseText ? {
                            text: i.responseText
                        }
                         : void 0, i.getAllResponseHeaders()))
                    }
                },
                i.onload = t(),
                i.onerror = t('error'),
                t = Pt[o] = t('abort');
                try {
                    i.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function () {
                t && t()
            }
        }
         : void 0
    }),
    Z.ajaxSetup({
        accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            'text script': function (e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter('script', function (e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = 'GET')
    }),
    Z.ajaxTransport('script', function (e) {
        if (e.crossDomain) {
            var t,
            n;
            return {
                send: function (r, a) {
                    t = Z('<script>').prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on('load error', n = function (e) {
                        t.remove(),
                        n = null,
                        e && a('error' === e.type ? 404 : 200, e.type)
                    }),
                    J.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var It = [
    ],
    Nt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var e = It.pop() || Z.expando + '_' + ct++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter('json jsonp', function (t, n, r) {
        var a,
        i,
        o,
        s = t.jsonp !== !1 && (Nt.test(t.url) ? 'url' : 'string' == typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && Nt.test(t.data) && 'data');
        return s || 'jsonp' === t.dataTypes[0] ? (a = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback()  : t.jsonpCallback, s ? t[s] = t[s].replace(Nt, '$1' + a)  : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? '&' : '?') + t.jsonp + '=' + a), t.converters['script json'] = function () {
            return o || Z.error(a + ' was not called'),
            o[0]
        }, t.dataTypes[0] = 'json', i = e[a], e[a] = function () {
            o = arguments
        }, r.always(function () {
            e[a] = i,
            t[a] && (t.jsonpCallback = n.jsonpCallback, It.push(a)),
            o && Z.isFunction(i) && i(o[0]),
            o = i = void 0
        }), 'script')  : void 0
    }),
    Z.parseHTML = function (e, t, n) {
        if (!e || 'string' != typeof e) return null;
        'boolean' == typeof t && (n = t, t = !1),
        t = t || J;
        var r = oe.exec(e),
        a = !n && [
        ];
        return r ? [
            t.createElement(r[1])
        ] : (r = Z.buildFragment([e], t, a), a && a.length && Z(a).remove(), Z.merge([], r.childNodes))
    };
    var Ot = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ('string' != typeof e && Ot) return Ot.apply(this, arguments);
        var r,
        a,
        i,
        o = this,
        s = e.indexOf(' ');
        return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)),
        Z.isFunction(t) ? (n = t, t = void 0)  : t && 'object' == typeof t && (a = 'POST'),
        o.length > 0 && Z.ajax({
            url: e,
            type: a,
            dataType: 'html',
            data: t
        }).done(function (e) {
            i = arguments,
            o.html(r ? Z('<div>').append(Z.parseHTML(e)).find(r)  : e)
        }).complete(n && function (e, t) {
            o.each(n, i || [
                e.responseText,
                t,
                e
            ])
        }),
        this
    },
    Z.each(['ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }),
    Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Lt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r,
            a,
            i,
            o,
            s,
            l,
            c,
            u = Z.css(e, 'position'),
            d = Z(e),
            p = {
            };
            'static' === u && (e.style.position = 'relative'),
            s = d.offset(),
            i = Z.css(e, 'top'),
            l = Z.css(e, 'left'),
            c = ('absolute' === u || 'fixed' === u) && (i + l).indexOf('auto') > - 1,
            c ? (r = d.position(), o = r.top, a = r.left)  : (o = parseFloat(i) || 0, a = parseFloat(l) || 0),
            Z.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (p.top = t.top - s.top + o),
            null != t.left && (p.left = t.left - s.left + a),
            'using' in t ? t.using.call(e, p)  : d.css(p)
        }
    },
    Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t,
            n,
            r = this[0],
            a = {
                top: 0,
                left: 0
            },
            i = r && r.ownerDocument;
            if (i) return t = i.documentElement,
            Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (a = r.getBoundingClientRect()), n = $(i), {
                top: a.top + n.pageYOffset - t.clientTop,
                left: a.left + n.pageXOffset - t.clientLeft
            })  : a
        },
        position: function () {
            if (this[0]) {
                var e,
                t,
                n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
                return 'fixed' === Z.css(n, 'position') ? t = n.getBoundingClientRect()  : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], 'html') || (r = e.offset()), r.top += Z.css(e[0], 'borderTopWidth', !0), r.left += Z.css(e[0], 'borderLeftWidth', !0)),
                {
                    top: t.top - r.top - Z.css(n, 'marginTop', !0),
                    left: t.left - r.left - Z.css(n, 'marginLeft', !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Lt; e && !Z.nodeName(e, 'html') && 'static' === Z.css(e, 'position'); ) e = e.offsetParent;
                return e || Lt
            })
        }
    }),
    Z.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (t, n) {
        var r = 'pageYOffset' === n;
        Z.fn[t] = function (a) {
            return ge(this, function (t, a, i) {
                var o = $(t);
                return void 0 === i ? o ? o[n] : t[a] : void (o ? o.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset)  : t[a] = i)
            }, t, a, arguments.length, null)
        }
    }),
    Z.each(['top',
    'left'], function (e, t) {
        Z.cssHooks[t] = k(K.pixelPosition, function (e, n) {
            return n ? (n = x(e, t), Fe.test(n) ? Z(e).position() [t] + 'px' : n)  : void 0
        })
    }),
    Z.each({
        Height: 'height',
        Width: 'width'
    }, function (e, t) {
        Z.each({
            padding: 'inner' + e,
            content: t,
            '': 'outer' + e
        }, function (n, r) {
            Z.fn[r] = function (r, a) {
                var i = arguments.length && (n || 'boolean' != typeof r),
                o = n || (r === !0 || a === !0 ? 'margin' : 'border');
                return ge(this, function (t, n, r) {
                    var a;
                    return Z.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body['scroll' + e], a['scroll' + e], t.body['offset' + e], a['offset' + e], a['client' + e]))  : void 0 === r ? Z.css(t, n, o)  : Z.style(t, n, r, o)
                }, t, i ? r : void 0, i, null)
            }
        })
    }),
    Z.fn.size = function () {
        return this.length
    },
    Z.fn.andSelf = Z.fn.addBack,
    'function' == typeof define && define.amd && define('jquery', [
    ], function () {
        return Z
    });
    var jt = e.jQuery,
    zt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = zt),
        t && e.jQuery === Z && (e.jQuery = jt),
        Z
    },
    typeof t === Se && (e.jQuery = e.$ = Z),
    Z
}),
define('text', [
    'module'
], function (e) {
    'use strict';
    var t,
    n,
    r,
    a,
    i,
    o = [
        'Msxml2.XMLHTTP',
        'Microsoft.XMLHTTP',
        'Msxml2.XMLHTTP.4.0'
    ],
    s = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
    l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
    c = 'undefined' != typeof location && location.href,
    u = c && location.protocol && location.protocol.replace(/\:/, ''),
    d = c && location.hostname,
    p = c && (location.port || void 0),
    f = {
    },
    h = e.config && e.config() || {
    };
    return t = {
        version: '2.0.14',
        strip: function (e) {
            if (e) {
                e = e.replace(s, '');
                var t = e.match(l);
                t && (e = t[1])
            } else e = '';
            return e
        },
        jsEscape: function (e) {
            return e.replace(/(['\\])/g, '\\$1').replace(/[\f]/g, '\\f').replace(/[\b]/g, '\\b').replace(/[\n]/g, '\\n').replace(/[\t]/g, '\\t').replace(/[\r]/g, '\\r').replace(/[\u2028]/g, '\\u2028').replace(/[\u2029]/g, '\\u2029')
        },
        createXhr: h.createXhr || function () {
            var e,
            t,
            n;
            if ('undefined' != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ('undefined' != typeof ActiveXObject) for (t = 0; 3 > t; t += 1) {
                n = o[t];
                try {
                    e = new ActiveXObject(n)
                } catch (r) {
                }
                if (e) {
                    o = [
                        n
                    ];
                    break
                }
            }
            return e
        },
        parseName: function (e) {
            var t,
            n,
            r,
            a = !1,
            i = e.lastIndexOf('.'),
            o = 0 === e.indexOf('./') || 0 === e.indexOf('../');
            return - 1 !== i && (!o || i > 1) ? (t = e.substring(0, i), n = e.substring(i + 1))  : t = e,
            r = n || t,
            i = r.indexOf('!'),
            - 1 !== i && (a = 'strip' === r.substring(i + 1), r = r.substring(0, i), n ? n = r : t = r),
            {
                moduleName: t,
                ext: n,
                strip: a
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (e, n, r, a) {
            var i,
            o,
            s,
            l = t.xdRegExp.exec(e);
            return l ? (i = l[2], o = l[3], o = o.split(':'), s = o[1], o = o[0], !(i && i !== n || o && o.toLowerCase() !== r.toLowerCase() || (s || o) && s !== a))  : !0
        },
        finishLoad: function (e, n, r, a) {
            r = n ? t.strip(r)  : r,
            h.isBuild && (f[e] = r),
            a(r)
        },
        load: function (e, n, r, a) {
            if (a && a.isBuild && !a.inlineText) return void r();
            h.isBuild = a && a.isBuild;
            var i = t.parseName(e),
            o = i.moduleName + (i.ext ? '.' + i.ext : ''),
            s = n.toUrl(o),
            l = h.useXhr || t.useXhr;
            return 0 === s.indexOf('empty:') ? void r()  : void (!c || l(s, u, d, p) ? t.get(s, function (n) {
                t.finishLoad(e, i.strip, n, r)
            }, function (e) {
                r.error && r.error(e)
            })  : n([o], function (e) {
                t.finishLoad(i.moduleName + '.' + i.ext, i.strip, e, r)
            }))
        },
        write: function (e, n, r, a) {
            if (f.hasOwnProperty(n)) {
                var i = t.jsEscape(f[n]);
                r.asModule(e + '!' + n, 'define(function () { return \'' + i + '\';});\n')
            }
        },
        writeFile: function (e, n, r, a, i) {
            var o = t.parseName(n),
            s = o.ext ? '.' + o.ext : '',
            l = o.moduleName + s,
            c = r.toUrl(o.moduleName + s) + '.js';
            t.load(l, r, function (n) {
                var r = function (e) {
                    return a(c, e)
                };
                r.asModule = function (e, t) {
                    return a.asModule(e, c, t)
                },
                t.write(e, l, r, i)
            }, i)
        }
    },
    'node' === h.env || !h.env && 'undefined' != typeof process && process.versions && process.versions.node && !process.versions['node-webkit'] && !process.versions['atom-shell'] ? (n = require.nodeRequire('fs'), t.get = function (e, t, r) {
        try {
            var a = n.readFileSync(e, 'utf8');
            '﻿' === a[0] && (a = a.substring(1)),
            t(a)
        } catch (i) {
            r && r(i)
        }
    })  : 'xhr' === h.env || !h.env && t.createXhr() ? t.get = function (e, n, r, a) {
        var i,
        o = t.createXhr();
        if (o.open('GET', e, !0), a) for (i in a) a.hasOwnProperty(i) && o.setRequestHeader(i.toLowerCase(), a[i]);
        h.onXhr && h.onXhr(o, e),
        o.onreadystatechange = function (t) {
            var a,
            i;
            4 === o.readyState && (a = o.status || 0, a > 399 && 600 > a ? (i = new Error(e + ' HTTP status: ' + a), i.xhr = o, r && r(i))  : n(o.responseText), h.onXhrComplete && h.onXhrComplete(o, e))
        },
        o.send(null)
    }
     : 'rhino' === h.env || !h.env && 'undefined' != typeof Packages && 'undefined' != typeof java ? t.get = function (e, t) {
        var n,
        r,
        a = 'utf-8',
        i = new java.io.File(e),
        o = java.lang.System.getProperty('line.separator'),
        s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i), a)),
        l = '';
        try {
            for (n = new java.lang.StringBuffer, r = s.readLine(), r && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)), null !== r && n.append(r); null !== (r = s.readLine()); ) n.append(o),
            n.append(r);
            l = String(n.toString())
        } finally {
            s.close()
        }
        t(l)
    }
     : ('xpconnect' === h.env || !h.env && 'undefined' != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes, a = Components.interfaces, Components.utils['import']('resource://gre/modules/FileUtils.jsm'), i = '@mozilla.org/windows-registry-key;1' in r, t.get = function (e, t) {
        var n,
        o,
        s,
        l = {
        };
        i && (e = e.replace(/\//g, '\\')),
        s = new FileUtils.File(e);
        try {
            n = r['@mozilla.org/network/file-input-stream;1'].createInstance(a.nsIFileInputStream),
            n.init(s, 1, 0, !1),
            o = r['@mozilla.org/intl/converter-input-stream;1'].createInstance(a.nsIConverterInputStream),
            o.init(n, 'utf-8', n.available(), a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            o.readString(n.available(), l),
            o.close(),
            n.close(),
            t(l.value)
        } catch (c) {
            throw new Error((s && s.path || '') + ': ' + c)
        }
    }),
    t
}),
function () {
    function e(e) {
        function t(t, n, r, a, i, o) {
            for (; i >= 0 && o > i; i += e) {
                var s = a ? a[i] : i;
                r = n(r, t[s], s, t)
            }
            return r
        }
        return function (n, r, a, i) {
            r = b(r, i, 4);
            var o = !M(n) && y.keys(n),
            s = (o || n).length,
            l = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (a = n[o ? o[l] : l], l += e),
            t(n, r, a, o, l, s)
        }
    }
    function t(e) {
        return function (t, n, r) {
            n = w(n, r);
            for (var a = S(t), i = e > 0 ? 0 : a - 1; i >= 0 && a > i; i += e) if (n(t[i], i, t)) return i;
            return - 1
        }
    }
    function n(e, t, n) {
        return function (r, a, i) {
            var o = 0,
            s = S(r);
            if ('number' == typeof i) e > 0 ? o = i >= 0 ? i : Math.max(i + s, o)  : s = i >= 0 ? Math.min(i + 1, s)  : i + s + 1;
             else if (n && i && s) return i = n(r, a),
            r[i] === a ? i : - 1;
            if (a !== a) return i = t(u.call(r, o, s), y.isNaN),
            i >= 0 ? i + o : - 1;
            for (i = e > 0 ? o : s - 1; i >= 0 && s > i; i += e) if (r[i] === a) return i;
            return - 1
        }
    }
    function r(e, t) {
        var n = A.length,
        r = e.constructor,
        a = y.isFunction(r) && r.prototype || s,
        i = 'constructor';
        for (y.has(e, i) && !y.contains(t, i) && t.push(i); n--; ) i = A[n],
        i in e && e[i] !== a[i] && !y.contains(t, i) && t.push(i)
    }
    var a = this,
    i = a._,
    o = Array.prototype,
    s = Object.prototype,
    l = Function.prototype,
    c = o.push,
    u = o.slice,
    d = s.toString,
    p = s.hasOwnProperty,
    f = Array.isArray,
    h = Object.keys,
    m = l.bind,
    g = Object.create,
    v = function () {
    },
    y = function (e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e)  : new y(e)
    };
    'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = y), exports._ = y)  : a._ = y,
    y.VERSION = '1.8.3';
    var b = function (e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, a) {
                    return e.call(t, n, r, a)
                };
            case 4:
                return function (n, r, a, i) {
                    return e.call(t, n, r, a, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
    }
},
w = function (e, t, n) {
    return null == e ? y.identity : y.isFunction(e) ? b(e, t, n)  : y.isObject(e) ? y.matcher(e)  : y.property(e)
};
y.iteratee = function (e, t) {
    return w(e, t, 1 / 0)
};
var x = function (e, t) {
    return function (n) {
        var r = arguments.length;
        if (2 > r || null == n) return n;
        for (var a = 1; r > a; a++) for (var i = arguments[a], o = e(i), s = o.length, l = 0; s > l; l++) {
            var c = o[l];
            t && void 0 !== n[c] || (n[c] = i[c])
        }
        return n
    }
},
k = function (e) {
    if (!y.isObject(e)) return {
    };
    if (g) return g(e);
    v.prototype = e;
    var t = new v;
    return v.prototype = null,
    t
},
T = function (e) {
    return function (t) {
        return null == t ? void 0 : t[e]
    }
},
C = Math.pow(2, 53) - 1,
S = T('length'),
M = function (e) {
    var t = S(e);
    return 'number' == typeof t && t >= 0 && C >= t
};
y.each = y.forEach = function (e, t, n) {
    t = b(t, n);
    var r,
    a;
    if (M(e)) for (r = 0, a = e.length; a > r; r++) t(e[r], r, e);
     else {
        var i = y.keys(e);
        for (r = 0, a = i.length; a > r; r++) t(e[i[r]], i[r], e)
    }
    return e
},
y.map = y.collect = function (e, t, n) {
    t = w(t, n);
    for (var r = !M(e) && y.keys(e), a = (r || e).length, i = Array(a), o = 0; a > o; o++) {
        var s = r ? r[o] : o;
        i[o] = t(e[s], s, e)
    }
    return i
},
y.reduce = y.foldl = y.inject = e(1),
y.reduceRight = y.foldr = e( - 1),
y.find = y.detect = function (e, t, n) {
    var r;
    return r = M(e) ? y.findIndex(e, t, n)  : y.findKey(e, t, n),
    void 0 !== r && - 1 !== r ? e[r] : void 0
},
y.filter = y.select = function (e, t, n) {
    var r = [
    ];
    return t = w(t, n),
    y.each(e, function (e, n, a) {
        t(e, n, a) && r.push(e)
    }),
    r
},
y.reject = function (e, t, n) {
    return y.filter(e, y.negate(w(t)), n)
},
y.every = y.all = function (e, t, n) {
    t = w(t, n);
    for (var r = !M(e) && y.keys(e), a = (r || e).length, i = 0; a > i; i++) {
        var o = r ? r[i] : i;
        if (!t(e[o], o, e)) return !1
    }
    return !0
},
y.some = y.any = function (e, t, n) {
    t = w(t, n);
    for (var r = !M(e) && y.keys(e), a = (r || e).length, i = 0; a > i; i++) {
        var o = r ? r[i] : i;
        if (t(e[o], o, e)) return !0
    }
    return !1
},
y.contains = y.includes = y.include = function (e, t, n, r) {
    return M(e) || (e = y.values(e)),
    ('number' != typeof n || r) && (n = 0),
    y.indexOf(e, t, n) >= 0
},
y.invoke = function (e, t) {
    var n = u.call(arguments, 2),
    r = y.isFunction(t);
    return y.map(e, function (e) {
        var a = r ? t : e[t];
        return null == a ? a : a.apply(e, n)
    })
},
y.pluck = function (e, t) {
    return y.map(e, y.property(t))
},
y.where = function (e, t) {
    return y.filter(e, y.matcher(t))
},
y.findWhere = function (e, t) {
    return y.find(e, y.matcher(t))
},
y.max = function (e, t, n) {
    var r,
    a,
    i = - (1 / 0),
    o = - (1 / 0);
    if (null == t && null != e) {
        e = M(e) ? e : y.values(e);
        for (var s = 0, l = e.length; l > s; s++) r = e[s],
        r > i && (i = r)
    } else t = w(t, n),
    y.each(e, function (e, n, r) {
        a = t(e, n, r),
        (a > o || a === - (1 / 0) && i === - (1 / 0)) && (i = e, o = a)
    });
    return i
},
y.min = function (e, t, n) {
    var r,
    a,
    i = 1 / 0,
    o = 1 / 0;
    if (null == t && null != e) {
        e = M(e) ? e : y.values(e);
        for (var s = 0, l = e.length; l > s; s++) r = e[s],
        i > r && (i = r)
    } else t = w(t, n),
    y.each(e, function (e, n, r) {
        a = t(e, n, r),
        (o > a || a === 1 / 0 && i === 1 / 0) && (i = e, o = a)
    });
    return i
},
y.shuffle = function (e) {
    for (var t, n = M(e) ? e : y.values(e), r = n.length, a = Array(r), i = 0; r > i; i++) t = y.random(0, i),
    t !== i && (a[i] = a[t]),
    a[t] = n[i];
    return a
},
y.sample = function (e, t, n) {
    return null == t || n ? (M(e) || (e = y.values(e)), e[y.random(e.length - 1)])  : y.shuffle(e).slice(0, Math.max(0, t))
},
y.sortBy = function (e, t, n) {
    return t = w(t, n),
    y.pluck(y.map(e, function (e, n, r) {
        return {
            value: e,
            index: n,
            criteria: t(e, n, r)
        }
    }).sort(function (e, t) {
        var n = e.criteria,
        r = t.criteria;
        if (n !== r) {
            if (n > r || void 0 === n) return 1;
            if (r > n || void 0 === r) return - 1
        }
        return e.index - t.index
    }), 'value')
};
var E = function (e) {
    return function (t, n, r) {
        var a = {
        };
        return n = w(n, r),
        y.each(t, function (r, i) {
            var o = n(r, i, t);
            e(a, r, o)
        }),
        a
    }
};
y.groupBy = E(function (e, t, n) {
    y.has(e, n) ? e[n].push(t)  : e[n] = [
        t
    ]
}),
y.indexBy = E(function (e, t, n) {
    e[n] = t
}),
y.countBy = E(function (e, t, n) {
    y.has(e, n) ? e[n]++ : e[n] = 1
}),
y.toArray = function (e) {
    return e ? y.isArray(e) ? u.call(e)  : M(e) ? y.map(e, y.identity)  : y.values(e)  : [
    ]
},
y.size = function (e) {
    return null == e ? 0 : M(e) ? e.length : y.keys(e).length
},
y.partition = function (e, t, n) {
    t = w(t, n);
    var r = [
    ],
    a = [
    ];
    return y.each(e, function (e, n, i) {
        (t(e, n, i) ? r : a).push(e)
    }),
    [
        r,
        a
    ]
},
y.first = y.head = y.take = function (e, t, n) {
    return null != e ? null == t || n ? e[0] : y.initial(e, e.length - t)  : void 0
},
y.initial = function (e, t, n) {
    return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
},
y.last = function (e, t, n) {
    return null != e ? null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))  : void 0
},
y.rest = y.tail = y.drop = function (e, t, n) {
    return u.call(e, null == t || n ? 1 : t)
},
y.compact = function (e) {
    return y.filter(e, y.identity)
};
var _ = function (e, t, n, r) {
    for (var a = [
    ], i = 0, o = r || 0, s = S(e); s > o; o++) {
        var l = e[o];
        if (M(l) && (y.isArray(l) || y.isArguments(l))) {
            t || (l = _(l, t, n));
            var c = 0,
            u = l.length;
            for (a.length += u; u > c; ) a[i++] = l[c++]
        } else n || (a[i++] = l)
    }
    return a
};
y.flatten = function (e, t) {
    return _(e, t, !1)
},
y.without = function (e) {
    return y.difference(e, u.call(arguments, 1))
},
y.uniq = y.unique = function (e, t, n, r) {
    y.isBoolean(t) || (r = n, n = t, t = !1),
    null != n && (n = w(n, r));
    for (var a = [
    ], i = [
    ], o = 0, s = S(e); s > o; o++) {
        var l = e[o],
        c = n ? n(l, o, e)  : l;
        t ? (o && i === c || a.push(l), i = c)  : n ? y.contains(i, c) || (i.push(c), a.push(l))  : y.contains(a, l) || a.push(l)
    }
    return a
},
y.union = function () {
    return y.uniq(_(arguments, !0, !0))
},
y.intersection = function (e) {
    for (var t = [
    ], n = arguments.length, r = 0, a = S(e); a > r; r++) {
        var i = e[r];
        if (!y.contains(t, i)) {
            for (var o = 1; n > o && y.contains(arguments[o], i); o++);
            o === n && t.push(i)
        }
    }
    return t
},
y.difference = function (e) {
    var t = _(arguments, !0, !0, 1);
    return y.filter(e, function (e) {
        return !y.contains(t, e)
    })
},
y.zip = function () {
    return y.unzip(arguments)
},
y.unzip = function (e) {
    for (var t = e && y.max(e, S).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = y.pluck(e, r);
    return n
},
y.object = function (e, t) {
    for (var n = {
    }, r = 0, a = S(e); a > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
    return n
},
y.findIndex = t(1),
y.findLastIndex = t( - 1),
y.sortedIndex = function (e, t, n, r) {
    n = w(n, r, 1);
    for (var a = n(t), i = 0, o = S(e); o > i; ) {
        var s = Math.floor((i + o) / 2);
        n(e[s]) < a ? i = s + 1 : o = s
    }
    return i
},
y.indexOf = n(1, y.findIndex, y.sortedIndex),
y.lastIndexOf = n( - 1, y.findLastIndex),
y.range = function (e, t, n) {
    null == t && (t = e || 0, e = 0),
    n = n || 1;
    for (var r = Math.max(Math.ceil((t - e) / n), 0), a = Array(r), i = 0; r > i; i++, e += n) a[i] = e;
    return a
};
var P = function (e, t, n, r, a) {
    if (!(r instanceof t)) return e.apply(n, a);
    var i = k(e.prototype),
    o = e.apply(i, a);
    return y.isObject(o) ? o : i
};
y.bind = function (e, t) {
    if (m && e.bind === m) return m.apply(e, u.call(arguments, 1));
    if (!y.isFunction(e)) throw new TypeError('Bind must be called on a function');
    var n = u.call(arguments, 2),
    r = function () {
        return P(e, r, t, this, n.concat(u.call(arguments)))
    };
    return r
},
y.partial = function (e) {
    var t = u.call(arguments, 1),
    n = function () {
        for (var r = 0, a = t.length, i = Array(a), o = 0; a > o; o++) i[o] = t[o] === y ? arguments[r++] : t[o];
        for (; r < arguments.length; ) i.push(arguments[r++]);
        return P(e, n, this, this, i)
    };
    return n
},
y.bindAll = function (e) {
    var t,
    n,
    r = arguments.length;
    if (1 >= r) throw new Error('bindAll must be passed function names');
    for (t = 1; r > t; t++) n = arguments[t],
    e[n] = y.bind(e[n], e);
    return e
},
y.memoize = function (e, t) {
    var n = function (r) {
        var a = n.cache,
        i = '' + (t ? t.apply(this, arguments)  : r);
        return y.has(a, i) || (a[i] = e.apply(this, arguments)),
        a[i]
    };
    return n.cache = {
    },
    n
},
y.delay = function (e, t) {
    var n = u.call(arguments, 2);
    return setTimeout(function () {
        return e.apply(null, n)
    }, t)
},
y.defer = y.partial(y.delay, y, 1),
y.throttle = function (e, t, n) {
    var r,
    a,
    i,
    o = null,
    s = 0;
    n || (n = {
    });
    var l = function () {
        s = n.leading === !1 ? 0 : y.now(),
        o = null,
        i = e.apply(r, a),
        o || (r = a = null)
    };
    return function () {
        var c = y.now();
        s || n.leading !== !1 || (s = c);
        var u = t - (c - s);
        return r = this,
        a = arguments,
        0 >= u || u > t ? (o && (clearTimeout(o), o = null), s = c, i = e.apply(r, a), o || (r = a = null))  : o || n.trailing === !1 || (o = setTimeout(l, u)),
        i
    }
},
y.debounce = function (e, t, n) {
    var r,
    a,
    i,
    o,
    s,
    l = function () {
        var c = y.now() - o;
        t > c && c >= 0 ? r = setTimeout(l, t - c)  : (r = null, n || (s = e.apply(i, a), r || (i = a = null)))
    };
    return function () {
        i = this,
        a = arguments,
        o = y.now();
        var c = n && !r;
        return r || (r = setTimeout(l, t)),
        c && (s = e.apply(i, a), i = a = null),
        s
    }
},
y.wrap = function (e, t) {
    return y.partial(t, e)
},
y.negate = function (e) {
    return function () {
        return !e.apply(this, arguments)
    }
},
y.compose = function () {
    var e = arguments,
    t = e.length - 1;
    return function () {
        for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
        return r
    }
},
y.after = function (e, t) {
    return function () {
        return --e < 1 ? t.apply(this, arguments)  : void 0
    }
},
y.before = function (e, t) {
    var n;
    return function () {
        return --e > 0 && (n = t.apply(this, arguments)),
        1 >= e && (t = null),
        n
    }
},
y.once = y.partial(y.before, 2);
var D = !{
    toString: null
}.propertyIsEnumerable('toString'),
A = [
    'valueOf',
    'isPrototypeOf',
    'toString',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'toLocaleString'
];
y.keys = function (e) {
    if (!y.isObject(e)) return [];
    if (h) return h(e);
    var t = [
    ];
    for (var n in e) y.has(e, n) && t.push(n);
    return D && r(e, t),
    t
},
y.allKeys = function (e) {
    if (!y.isObject(e)) return [];
    var t = [
    ];
    for (var n in e) t.push(n);
    return D && r(e, t),
    t
},
y.values = function (e) {
    for (var t = y.keys(e), n = t.length, r = Array(n), a = 0; n > a; a++) r[a] = e[t[a]];
    return r
},
y.mapObject = function (e, t, n) {
    t = w(t, n);
    for (var r, a = y.keys(e), i = a.length, o = {
    }, s = 0; i > s; s++) r = a[s],
    o[r] = t(e[r], r, e);
    return o
},
y.pairs = function (e) {
    for (var t = y.keys(e), n = t.length, r = Array(n), a = 0; n > a; a++) r[a] = [
        t[a],
        e[t[a]]
    ];
    return r
},
y.invert = function (e) {
    for (var t = {
    }, n = y.keys(e), r = 0, a = n.length; a > r; r++) t[e[n[r]]] = n[r];
    return t
},
y.functions = y.methods = function (e) {
    var t = [
    ];
    for (var n in e) y.isFunction(e[n]) && t.push(n);
    return t.sort()
},
y.extend = x(y.allKeys),
y.extendOwn = y.assign = x(y.keys),
y.findKey = function (e, t, n) {
    t = w(t, n);
    for (var r, a = y.keys(e), i = 0, o = a.length; o > i; i++) if (r = a[i], t(e[r], r, e)) return r
},
y.pick = function (e, t, n) {
    var r,
    a,
    i = {
    },
    o = e;
    if (null == o) return i;
    y.isFunction(t) ? (a = y.allKeys(o), r = b(t, n))  : (a = _(arguments, !1, !1, 1), r = function (e, t, n) {
        return t in n
    }, o = Object(o));
    for (var s = 0, l = a.length; l > s; s++) {
        var c = a[s],
        u = o[c];
        r(u, c, o) && (i[c] = u)
    }
    return i
},
y.omit = function (e, t, n) {
    if (y.isFunction(t)) t = y.negate(t);
     else {
        var r = y.map(_(arguments, !1, !1, 1), String);
        t = function (e, t) {
            return !y.contains(r, t)
        }
    }
    return y.pick(e, t, n)
},
y.defaults = x(y.allKeys, !0),
y.create = function (e, t) {
    var n = k(e);
    return t && y.extendOwn(n, t),
    n
},
y.clone = function (e) {
    return y.isObject(e) ? y.isArray(e) ? e.slice()  : y.extend({
    }, e)  : e
},
y.tap = function (e, t) {
    return t(e),
    e
},
y.isMatch = function (e, t) {
    var n = y.keys(t),
    r = n.length;
    if (null == e) return !r;
    for (var a = Object(e), i = 0; r > i; i++) {
        var o = n[i];
        if (t[o] !== a[o] || !(o in a)) return !1
    }
    return !0
};
var I = function (e, t, n, r) {
    if (e === t) return 0 !== e || 1 / e === 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof y && (e = e._wrapped),
    t instanceof y && (t = t._wrapped);
    var a = d.call(e);
    if (a !== d.call(t)) return !1;
    switch (a) {
        case '[object RegExp]':
        case '[object String]':
            return '' + e == '' + t;
        case '[object Number]':
            return + e !== + e ? + t !== + t : 0 === + e ? 1 / + e === 1 / t : + e === + t;
        case '[object Date]':
        case '[object Boolean]':
            return + e === + t
    }
    var i = '[object Array]' === a;
    if (!i) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var o = e.constructor,
        s = t.constructor;
        if (o !== s && !(y.isFunction(o) && o instanceof o && y.isFunction(s) && s instanceof s) && 'constructor' in e && 'constructor' in t) return !1
}
n = n || [
],
r = r || [
];
for (var l = n.length; l--; ) if (n[l] === e) return r[l] === t;
if (n.push(e), r.push(t), i) {
    if (l = e.length, l !== t.length) return !1;
    for (; l--; ) if (!I(e[l], t[l], n, r)) return !1
} else {
var c,
u = y.keys(e);
if (l = u.length, y.keys(t).length !== l) return !1;
for (; l--; ) if (c = u[l], !y.has(t, c) || !I(e[c], t[c], n, r)) return !1
}
return n.pop(),
r.pop(),
!0
};
y.isEqual = function (e, t) {
return I(e, t)
},
y.isEmpty = function (e) {
return null == e ? !0 : M(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
},
y.isElement = function (e) {
return !(!e || 1 !== e.nodeType)
},
y.isArray = f || function (e) {
return '[object Array]' === d.call(e)
},
y.isObject = function (e) {
var t = typeof e;
return 'function' === t || 'object' === t && !!e
},
y.each(['Arguments',
'Function',
'String',
'Number',
'Date',
'RegExp',
'Error'], function (e) {
y['is' + e] = function (t) {
return d.call(t) === '[object ' + e + ']'
}
}),
y.isArguments(arguments) || (y.isArguments = function (e) {
return y.has(e, 'callee')
}),
'function' != typeof /./ && 'object' != typeof Int8Array && (y.isFunction = function (e) {
return 'function' == typeof e || !1
}),
y.isFinite = function (e) {
return isFinite(e) && !isNaN(parseFloat(e))
},
y.isNaN = function (e) {
return y.isNumber(e) && e !== + e
},
y.isBoolean = function (e) {
return e === !0 || e === !1 || '[object Boolean]' === d.call(e)
},
y.isNull = function (e) {
return null === e
},
y.isUndefined = function (e) {
return void 0 === e
},
y.has = function (e, t) {
return null != e && p.call(e, t)
},
y.noConflict = function () {
return a._ = i,
this
},
y.identity = function (e) {
return e
},
y.constant = function (e) {
return function () {
return e
}
},
y.noop = function () {
},
y.property = T,
y.propertyOf = function (e) {
return null == e ? function () {
}
 : function (t) {
return e[t]
}
},
y.matcher = y.matches = function (e) {
return e = y.extendOwn({
}, e),
function (t) {
return y.isMatch(t, e)
}
},
y.times = function (e, t, n) {
var r = Array(Math.max(0, e));
t = b(t, n, 1);
for (var a = 0; e > a; a++) r[a] = t(a);
return r
},
y.random = function (e, t) {
return null == t && (t = e, e = 0),
e + Math.floor(Math.random() * (t - e + 1))
},
y.now = Date.now || function () {
return (new Date).getTime()
};
var N = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
'\'': '&#x27;',
'`': '&#x60;'
},
O = y.invert(N),
L = function (e) {
var t = function (t) {
return e[t]
},
n = '(?:' + y.keys(e).join('|') + ')',
r = RegExp(n),
a = RegExp(n, 'g');
return function (e) {
return e = null == e ? '' : '' + e,
r.test(e) ? e.replace(a, t)  : e
}
};
y.escape = L(N),
y.unescape = L(O),
y.result = function (e, t, n) {
var r = null == e ? void 0 : e[t];
return void 0 === r && (r = n),
y.isFunction(r) ? r.call(e)  : r
};
var j = 0;
y.uniqueId = function (e) {
var t = ++j + '';
return e ? e + t : t
},
y.templateSettings = {
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
escape: /<%-([\s\S]+?)%>/g
};
var z = /(.)^/,
B = {
'\'': '\'',
'\\': '\\',
'\r': 'r',
'\n': 'n',
'': 'u2028',
'': 'u2029'
},
H = /\\|'|\r|\n|\u2028|\u2029/g,
R = function (e) {
return '\\' + B[e]
};
y.template = function (e, t, n) {
!t && n && (t = n),
t = y.defaults({
}, t, y.templateSettings);
var r = RegExp([(t.escape || z).source,
(t.interpolate || z).source,
(t.evaluate || z).source].join('|') + '|$', 'g'),
a = 0,
i = '__p+=\'';
e.replace(r, function (t, n, r, o, s) {
return i += e.slice(a, s).replace(H, R),
a = s + t.length,
n ? i += '\'+\n((__t=(' + n + '))==null?\'\':_.escape(__t))+\n\'' : r ? i += '\'+\n((__t=(' + r + '))==null?\'\':__t)+\n\'' : o && (i += '\';\n' + o + '\n__p+=\''),
t
}),
i += '\';\n',
t.variable || (i = 'with(obj||{}){\n' + i + '}\n'),
i = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + i + 'return __p;\n';
try {
var o = new Function(t.variable || 'obj', '_', i)
} catch (s) {
throw s.source = i,
s
}
var l = function (e) {
return o.call(this, e, y)
},
c = t.variable || 'obj';
return l.source = 'function(' + c + '){\n' + i + '}',
l
},
y.chain = function (e) {
var t = y(e);
return t._chain = !0,
t
};
var $ = function (e, t) {
return e._chain ? y(t).chain()  : t
};
y.mixin = function (e) {
y.each(y.functions(e), function (t) {
var n = y[t] = e[t];
y.prototype[t] = function () {
var e = [
    this._wrapped
];
return c.apply(e, arguments),
$(this, n.apply(y, e))
}
})
},
y.mixin(y),
y.each(['pop',
'push',
'reverse',
'shift',
'sort',
'splice',
'unshift'], function (e) {
var t = o[e];
y.prototype[e] = function () {
var n = this._wrapped;
return t.apply(n, arguments),
'shift' !== e && 'splice' !== e || 0 !== n.length || delete n[0],
$(this, n)
}
}),
y.each(['concat',
'join',
'slice'], function (e) {
var t = o[e];
y.prototype[e] = function () {
return $(this, t.apply(this._wrapped, arguments))
}
}),
y.prototype.value = function () {
return this._wrapped
},
y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
y.prototype.toString = function () {
return '' + this._wrapped
},
'function' == typeof define && define.amd && define('underscore', [
], function () {
return y
})
}.call(this),
function (e) {
var t = 'object' == typeof self && self.self == self && self || 'object' == typeof global && global.global == global && global;
if ('function' == typeof define && define.amd) define('backbone', [
'underscore',
'jquery',
'exports'
], function (n, r, a) {
t.Backbone = e(t, a, n, r)
});
 else if ('undefined' != typeof exports) {
var n,
r = require('underscore');
try {
n = require('jquery')
} catch (a) {
}
e(t, exports, r, n)
} else t.Backbone = e(t, {
}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(function (e, t, n, r) {
var a = e.Backbone,
i = Array.prototype.slice;
t.VERSION = '1.2.3',
t.$ = r,
t.noConflict = function () {
return e.Backbone = a,
this
},
t.emulateHTTP = !1,
t.emulateJSON = !1;
var o = function (e, t, r) {
switch (e) {
case 1:
return function () {
    return n[t](this[r])
};
case 2:
return function (e) {
    return n[t](this[r], e)
};
case 3:
return function (e, a) {
    return n[t](this[r], l(e, this), a)
};
case 4:
return function (e, a, i) {
    return n[t](this[r], l(e, this), a, i)
};
default:
return function () {
    var e = i.call(arguments);
    return e.unshift(this[r]),
    n[t].apply(n, e)
}
}
},
s = function (e, t, r) {
n.each(t, function (t, a) {
n[a] && (e.prototype[a] = o(t, a, r))
})
},
l = function (e, t) {
return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? c(e)  : n.isString(e) ? function (t) {
return t.get(e)
}
 : e
},
c = function (e) {
var t = n.matches(e);
return function (e) {
return t(e.attributes)
}
},
u = t.Events = {
},
d = /\s+/,
p = function (e, t, r, a, i) {
var o,
s = 0;
if (r && 'object' == typeof r) {
void 0 !== a && 'context' in i && void 0 === i.context && (i.context = a);
for (o = n.keys(r); s < o.length; s++) t = p(e, t, o[s], r[o[s]], i)
} else if (r && d.test(r)) for (o = r.split(d); s < o.length; s++) t = e(t, o[s], a, i);
 else t = e(t, r, a, i);
return t
};
u.on = function (e, t, n) {
return f(this, e, t, n)
};
var f = function (e, t, n, r, a) {
if (e._events = p(h, e._events || {
}, t, n, {
context: r,
ctx: e,
listening: a
}), a) {
var i = e._listeners || (e._listeners = {
});
i[a.id] = a
}
return e
};
u.listenTo = function (e, t, r) {
if (!e) return this;
var a = e._listenId || (e._listenId = n.uniqueId('l')),
i = this._listeningTo || (this._listeningTo = {
}),
o = i[a];
if (!o) {
var s = this._listenId || (this._listenId = n.uniqueId('l'));
o = i[a] = {
obj: e,
objId: a,
id: s,
listeningTo: i,
count: 0
}
}
return f(e, t, r, this, o),
this
};
var h = function (e, t, n, r) {
if (n) {
var a = e[t] || (e[t] = [
]),
i = r.context,
o = r.ctx,
s = r.listening;
s && s.count++,
a.push({
callback: n,
context: i,
ctx: i || o,
listening: s
})
}
return e
};
u.off = function (e, t, n) {
return this._events ? (this._events = p(m, this._events, e, t, {
context: n,
listeners: this._listeners
}), this)  : this
},
u.stopListening = function (e, t, r) {
var a = this._listeningTo;
if (!a) return this;
for (var i = e ? [
e._listenId
] : n.keys(a), o = 0; o < i.length; o++) {
var s = a[i[o]];
if (!s) break;
s.obj.off(t, r, this)
}
return n.isEmpty(a) && (this._listeningTo = void 0),
this
};
var m = function (e, t, r, a) {
if (e) {
var i,
o = 0,
s = a.context,
l = a.listeners;
if (t || r || s) {
for (var c = t ? [
    t
] : n.keys(e); o < c.length; o++) {
    t = c[o];
    var u = e[t];
    if (!u) break;
    for (var d = [
    ], p = 0; p < u.length; p++) {
        var f = u[p];
        r && r !== f.callback && r !== f.callback._callback || s && s !== f.context ? d.push(f)  : (i = f.listening, i && 0 === --i.count && (delete l[i.id], delete i.listeningTo[i.objId]))
    }
    d.length ? e[t] = d : delete e[t]
}
return n.size(e) ? e : void 0
}
for (var h = n.keys(l); o < h.length; o++) i = l[h[o]],
delete l[i.id],
delete i.listeningTo[i.objId]
}
};
u.once = function (e, t, r) {
var a = p(g, {
}, e, t, n.bind(this.off, this));
return this.on(a, void 0, r)
},
u.listenToOnce = function (e, t, r) {
var a = p(g, {
}, t, r, n.bind(this.stopListening, this, e));
return this.listenTo(e, a)
};
var g = function (e, t, r, a) {
if (r) {
var i = e[t] = n.once(function () {
a(t, i),
r.apply(this, arguments)
});
i._callback = r
}
return e
};
u.trigger = function (e) {
if (!this._events) return this;
for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; t > r; r++) n[r] = arguments[r + 1];
return p(v, this._events, e, void 0, n),
this
};
var v = function (e, t, n, r) {
if (e) {
var a = e[t],
i = e.all;
a && i && (i = i.slice()),
a && y(a, r),
i && y(i, [
t
].concat(r))
}
return e
},
y = function (e, t) {
var n,
r = - 1,
a = e.length,
i = t[0],
o = t[1],
s = t[2];
switch (t.length) {
case 0:
for (; ++r < a; ) (n = e[r]).callback.call(n.ctx);
return;
case 1:
for (; ++r < a; ) (n = e[r]).callback.call(n.ctx, i);
return;
case 2:
for (; ++r < a; ) (n = e[r]).callback.call(n.ctx, i, o);
return;
case 3:
for (; ++r < a; ) (n = e[r]).callback.call(n.ctx, i, o, s);
return;
default:
for (; ++r < a; ) (n = e[r]).callback.apply(n.ctx, t);
return
}
};
u.bind = u.on,
u.unbind = u.off,
n.extend(t, u);
var b = t.Model = function (e, t) {
var r = e || {
};
t || (t = {
}),
this.cid = n.uniqueId(this.cidPrefix),
this.attributes = {
},
t.collection && (this.collection = t.collection),
t.parse && (r = this.parse(r, t) || {
}),
r = n.defaults({
}, r, n.result(this, 'defaults')),
this.set(r, t),
this.changed = {
},
this.initialize.apply(this, arguments)
};
n.extend(b.prototype, u, {
changed: null,
validationError: null,
idAttribute: 'id',
cidPrefix: 'c',
initialize: function () {
},
toJSON: function (e) {
return n.clone(this.attributes)
},
sync: function () {
return t.sync.apply(this, arguments)
},
get: function (e) {
return this.attributes[e]
},
escape: function (e) {
return n.escape(this.get(e))
},
has: function (e) {
return null != this.get(e)
},
matches: function (e) {
return !!n.iteratee(e, this) (this.attributes)
},
set: function (e, t, r) {
if (null == e) return this;
var a;
if ('object' == typeof e ? (a = e, r = t)  : (a = {
}) [e] = t, r || (r = {
}), !this._validate(a, r)) return !1;
var i = r.unset,
o = r.silent,
s = [
],
l = this._changing;
this._changing = !0,
l || (this._previousAttributes = n.clone(this.attributes), this.changed = {
});
var c = this.attributes,
u = this.changed,
d = this._previousAttributes;
for (var p in a) t = a[p],
n.isEqual(c[p], t) || s.push(p),
n.isEqual(d[p], t) ? delete u[p] : u[p] = t,
i ? delete c[p] : c[p] = t;
if (this.id = this.get(this.idAttribute), !o) {
s.length && (this._pending = r);
for (var f = 0; f < s.length; f++) this.trigger('change:' + s[f], this, c[s[f]], r)
}
if (l) return this;
if (!o) for (; this._pending; ) r = this._pending,
this._pending = !1,
this.trigger('change', this, r);
return this._pending = !1,
this._changing = !1,
this
},
unset: function (e, t) {
return this.set(e, void 0, n.extend({
}, t, {
unset: !0
}))
},
clear: function (e) {
var t = {
};
for (var r in this.attributes) t[r] = void 0;
return this.set(t, n.extend({
}, e, {
unset: !0
}))
},
hasChanged: function (e) {
return null == e ? !n.isEmpty(this.changed)  : n.has(this.changed, e)
},
changedAttributes: function (e) {
if (!e) return this.hasChanged() ? n.clone(this.changed)  : !1;
var t = this._changing ? this._previousAttributes : this.attributes,
r = {
};
for (var a in e) {
var i = e[a];
n.isEqual(t[a], i) || (r[a] = i)
}
return n.size(r) ? r : !1
},
previous: function (e) {
return null != e && this._previousAttributes ? this._previousAttributes[e] : null
},
previousAttributes: function () {
return n.clone(this._previousAttributes)
},
fetch: function (e) {
e = n.extend({
parse: !0
}, e);
var t = this,
r = e.success;
return e.success = function (n) {
var a = e.parse ? t.parse(n, e)  : n;
return t.set(a, e) ? (r && r.call(e.context, t, n, e), void t.trigger('sync', t, n, e))  : !1
},
$(this, e),
this.sync('read', this, e)
},
save: function (e, t, r) {
var a;
null == e || 'object' == typeof e ? (a = e, r = t)  : (a = {
}) [e] = t,
r = n.extend({
validate: !0,
parse: !0
}, r);
var i = r.wait;
if (a && !i) {
if (!this.set(a, r)) return !1
} else if (!this._validate(a, r)) return !1;
var o = this,
s = r.success,
l = this.attributes;
r.success = function (e) {
o.attributes = l;
var t = r.parse ? o.parse(e, r)  : e;
return i && (t = n.extend({
}, a, t)),
t && !o.set(t, r) ? !1 : (s && s.call(r.context, o, e, r), void o.trigger('sync', o, e, r))
},
$(this, r),
a && i && (this.attributes = n.extend({
}, l, a));
var c = this.isNew() ? 'create' : r.patch ? 'patch' : 'update';
'patch' !== c || r.attrs || (r.attrs = a);
var u = this.sync(c, this, r);
return this.attributes = l,
u
},
destroy: function (e) {
e = e ? n.clone(e)  : {
};
var t = this,
r = e.success,
a = e.wait,
i = function () {
t.stopListening(),
t.trigger('destroy', t, t.collection, e)
};
e.success = function (n) {
a && i(),
r && r.call(e.context, t, n, e),
t.isNew() || t.trigger('sync', t, n, e)
};
var o = !1;
return this.isNew() ? n.defer(e.success)  : ($(this, e), o = this.sync('delete', this, e)),
a || i(),
o
},
url: function () {
var e = n.result(this, 'urlRoot') || n.result(this.collection, 'url') || R();
if (this.isNew()) return e;
var t = this.get(this.idAttribute);
return e.replace(/[^\/]$/, '$&/') + encodeURIComponent(t)
},
parse: function (e, t) {
return e
},
clone: function () {
return new this.constructor(this.attributes)
},
isNew: function () {
return !this.has(this.idAttribute)
},
isValid: function (e) {
return this._validate({
}, n.defaults({
validate: !0
}, e))
},
_validate: function (e, t) {
if (!t.validate || !this.validate) return !0;
e = n.extend({
}, this.attributes, e);
var r = this.validationError = this.validate(e, t) || null;
return r ? (this.trigger('invalid', this, r, n.extend(t, {
validationError: r
})), !1)  : !0
}
});
var w = {
keys: 1,
values: 1,
pairs: 1,
invert: 1,
pick: 0,
omit: 0,
chain: 1,
isEmpty: 1
};
s(b, w, 'attributes');
var x = t.Collection = function (e, t) {
t || (t = {
}),
t.model && (this.model = t.model),
void 0 !== t.comparator && (this.comparator = t.comparator),
this._reset(),
this.initialize.apply(this, arguments),
e && this.reset(e, n.extend({
silent: !0
}, t))
},
k = {
add: !0,
remove: !0,
merge: !0
},
T = {
add: !0,
remove: !1
},
C = function (e, t, n) {
n = Math.min(Math.max(n, 0), e.length);
for (var r = Array(e.length - n), a = t.length, i = 0; i < r.length; i++) r[i] = e[i + n];
for (i = 0; a > i; i++) e[i + n] = t[i];
for (i = 0; i < r.length; i++) e[i + a + n] = r[i]
};
n.extend(x.prototype, u, {
model: b,
initialize: function () {
},
toJSON: function (e) {
return this.map(function (t) {
return t.toJSON(e)
})
},
sync: function () {
return t.sync.apply(this, arguments)
},
add: function (e, t) {
return this.set(e, n.extend({
merge: !1
}, t, T))
},
remove: function (e, t) {
t = n.extend({
}, t);
var r = !n.isArray(e);
e = r ? [
e
] : n.clone(e);
var a = this._removeModels(e, t);
return !t.silent && a && this.trigger('update', this, t),
r ? a[0] : a
},
set: function (e, t) {
if (null != e) {
t = n.defaults({
}, t, k),
t.parse && !this._isModel(e) && (e = this.parse(e, t));
var r = !n.isArray(e);
e = r ? [
    e
] : e.slice();
var a = t.at;
null != a && (a = + a),
0 > a && (a += this.length + 1);
for (var i, o = [
], s = [
], l = [
], c = {
}, u = t.add, d = t.merge, p = t.remove, f = !1, h = this.comparator && null == a && t.sort !== !1, m = n.isString(this.comparator) ? this.comparator : null, g = 0; g < e.length; g++) {
    i = e[g];
    var v = this.get(i);
    if (v) {
        if (d && i !== v) {
            var y = this._isModel(i) ? i.attributes : i;
            t.parse && (y = v.parse(y, t)),
            v.set(y, t),
            h && !f && (f = v.hasChanged(m))
        }
        c[v.cid] || (c[v.cid] = !0, o.push(v)),
        e[g] = v
    } else u && (i = e[g] = this._prepareModel(i, t), i && (s.push(i), this._addReference(i, t), c[i.cid] = !0, o.push(i)))
}
if (p) {
    for (g = 0; g < this.length; g++) i = this.models[g],
    c[i.cid] || l.push(i);
    l.length && this._removeModels(l, t)
}
var b = !1,
w = !h && u && p;
if (o.length && w ? (b = this.length != o.length || n.some(this.models, function (e, t) {
    return e !== o[t]
}), this.models.length = 0, C(this.models, o, 0), this.length = this.models.length)  : s.length && (h && (f = !0), C(this.models, s, null == a ? this.length : a), this.length = this.models.length), f && this.sort({
    silent: !0
}), !t.silent) {
    for (g = 0; g < s.length; g++) null != a && (t.index = a + g),
    i = s[g],
    i.trigger('add', i, this, t);
    (f || b) && this.trigger('sort', this, t),
    (s.length || l.length) && this.trigger('update', this, t)
}
return r ? e[0] : e
}
},
reset: function (e, t) {
t = t ? n.clone(t)  : {
};
for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], t);
return t.previousModels = this.models,
this._reset(),
e = this.add(e, n.extend({
silent: !0
}, t)),
t.silent || this.trigger('reset', this, t),
e
},
push: function (e, t) {
return this.add(e, n.extend({
at: this.length
}, t))
},
pop: function (e) {
var t = this.at(this.length - 1);
return this.remove(t, e)
},
unshift: function (e, t) {
return this.add(e, n.extend({
at: 0
}, t))
},
shift: function (e) {
var t = this.at(0);
return this.remove(t, e)
},
slice: function () {
return i.apply(this.models, arguments)
},
get: function (e) {
if (null != e) {
var t = this.modelId(this._isModel(e) ? e.attributes : e);
return this._byId[e] || this._byId[t] || this._byId[e.cid]
}
},
at: function (e) {
return 0 > e && (e += this.length),
this.models[e]
},
where: function (e, t) {
return this[t ? 'find' : 'filter'](e)
},
findWhere: function (e) {
return this.where(e, !0)
},
sort: function (e) {
var t = this.comparator;
if (!t) throw new Error('Cannot sort a set without a comparator');
e || (e = {
});
var r = t.length;
return n.isFunction(t) && (t = n.bind(t, this)),
1 === r || n.isString(t) ? this.models = this.sortBy(t)  : this.models.sort(t),
e.silent || this.trigger('sort', this, e),
this
},
pluck: function (e) {
return n.invoke(this.models, 'get', e)
},
fetch: function (e) {
e = n.extend({
parse: !0
}, e);
var t = e.success,
r = this;
return e.success = function (n) {
var a = e.reset ? 'reset' : 'set';
r[a](n, e),
t && t.call(e.context, r, n, e),
r.trigger('sync', r, n, e)
},
$(this, e),
this.sync('read', this, e)
},
create: function (e, t) {
t = t ? n.clone(t)  : {
};
var r = t.wait;
if (e = this._prepareModel(e, t), !e) return !1;
r || this.add(e, t);
var a = this,
i = t.success;
return t.success = function (e, t, n) {
r && a.add(e, n),
i && i.call(n.context, e, t, n)
},
e.save(null, t),
e
},
parse: function (e, t) {
return e
},
clone: function () {
return new this.constructor(this.models, {
model: this.model,
comparator: this.comparator
})
},
modelId: function (e) {
return e[this.model.prototype.idAttribute || 'id']
},
_reset: function () {
this.length = 0,
this.models = [
],
this._byId = {
}
},
_prepareModel: function (e, t) {
if (this._isModel(e)) return e.collection || (e.collection = this),
e;
t = t ? n.clone(t)  : {
},
t.collection = this;
var r = new this.model(e, t);
return r.validationError ? (this.trigger('invalid', this, r.validationError, t), !1)  : r
},
_removeModels: function (e, t) {
for (var n = [
], r = 0; r < e.length; r++) {
var a = this.get(e[r]);
if (a) {
    var i = this.indexOf(a);
    this.models.splice(i, 1),
    this.length--,
    t.silent || (t.index = i, a.trigger('remove', a, this, t)),
    n.push(a),
    this._removeReference(a, t)
}
}
return n.length ? n : !1
},
_isModel: function (e) {
return e instanceof b
},
_addReference: function (e, t) {
this._byId[e.cid] = e;
var n = this.modelId(e.attributes);
null != n && (this._byId[n] = e),
e.on('all', this._onModelEvent, this)
},
_removeReference: function (e, t) {
delete this._byId[e.cid];
var n = this.modelId(e.attributes);
null != n && delete this._byId[n],
this === e.collection && delete e.collection,
e.off('all', this._onModelEvent, this)
},
_onModelEvent: function (e, t, n, r) {
if ('add' !== e && 'remove' !== e || n === this) {
if ('destroy' === e && this.remove(t, r), 'change' === e) {
    var a = this.modelId(t.previousAttributes()),
    i = this.modelId(t.attributes);
    a !== i && (null != a && delete this._byId[a], null != i && (this._byId[i] = t))
}
this.trigger.apply(this, arguments)
}
}
});
var S = {
forEach: 3,
each: 3,
map: 3,
collect: 3,
reduce: 4,
foldl: 4,
inject: 4,
reduceRight: 4,
foldr: 4,
find: 3,
detect: 3,
filter: 3,
select: 3,
reject: 3,
every: 3,
all: 3,
some: 3,
any: 3,
include: 3,
includes: 3,
contains: 3,
invoke: 0,
max: 3,
min: 3,
toArray: 1,
size: 1,
first: 3,
head: 3,
take: 3,
initial: 3,
rest: 3,
tail: 3,
drop: 3,
last: 3,
without: 0,
difference: 0,
indexOf: 3,
shuffle: 1,
lastIndexOf: 3,
isEmpty: 1,
chain: 1,
sample: 3,
partition: 3,
groupBy: 3,
countBy: 3,
sortBy: 3,
indexBy: 3
};
s(x, S, 'models');
var M = t.View = function (e) {
this.cid = n.uniqueId('view'),
n.extend(this, n.pick(e, _)),
this._ensureElement(),
this.initialize.apply(this, arguments)
},
E = /^(\S+)\s*(.*)$/,
_ = [
'model',
'collection',
'el',
'id',
'attributes',
'className',
'tagName',
'events'
];
n.extend(M.prototype, u, {
tagName: 'div',
$: function (e) {
return this.$el.find(e)
},
initialize: function () {
},
render: function () {
return this
},
remove: function () {
return this._removeElement(),
this.stopListening(),
this
},
_removeElement: function () {
this.$el.remove()
},
setElement: function (e) {
return this.undelegateEvents(),
this._setElement(e),
this.delegateEvents(),
this
},
_setElement: function (e) {
this.$el = e instanceof t.$ ? e : t.$(e),
this.el = this.$el[0]
},
delegateEvents: function (e) {
if (e || (e = n.result(this, 'events')), !e) return this;
this.undelegateEvents();
for (var t in e) {
var r = e[t];
if (n.isFunction(r) || (r = this[r]), r) {
    var a = t.match(E);
    this.delegate(a[1], a[2], n.bind(r, this))
}
}
return this
},
delegate: function (e, t, n) {
return this.$el.on(e + '.delegateEvents' + this.cid, t, n),
this
},
undelegateEvents: function () {
return this.$el && this.$el.off('.delegateEvents' + this.cid),
this
},
undelegate: function (e, t, n) {
return this.$el.off(e + '.delegateEvents' + this.cid, t, n),
this
},
_createElement: function (e) {
return document.createElement(e)
},
_ensureElement: function () {
if (this.el) this.setElement(n.result(this, 'el'));
 else {
var e = n.extend({
}, n.result(this, 'attributes'));
this.id && (e.id = n.result(this, 'id')),
this.className && (e['class'] = n.result(this, 'className')),
this.setElement(this._createElement(n.result(this, 'tagName'))),
this._setAttributes(e)
}
},
_setAttributes: function (e) {
this.$el.attr(e)
}
}),
t.sync = function (e, r, a) {
var i = P[e];
n.defaults(a || (a = {
}), {
emulateHTTP: t.emulateHTTP,
emulateJSON: t.emulateJSON
});
var o = {
type: i,
dataType: 'json'
};
if (a.url || (o.url = n.result(r, 'url') || R()), null != a.data || !r || 'create' !== e && 'update' !== e && 'patch' !== e || (o.contentType = 'application/json', o.data = JSON.stringify(a.attrs || r.toJSON(a))), a.emulateJSON && (o.contentType = 'application/x-www-form-urlencoded', o.data = o.data ? {
model: o.data
}
 : {
}), a.emulateHTTP && ('PUT' === i || 'DELETE' === i || 'PATCH' === i)) {
o.type = 'POST',
a.emulateJSON && (o.data._method = i);
var s = a.beforeSend;
a.beforeSend = function (e) {
return e.setRequestHeader('X-HTTP-Method-Override', i),
s ? s.apply(this, arguments)  : void 0
}
}
'GET' === o.type || a.emulateJSON || (o.processData = !1);
var l = a.error;
a.error = function (e, t, n) {
a.textStatus = t,
a.errorThrown = n,
l && l.call(a.context, e, t, n)
};
var c = a.xhr = t.ajax(n.extend(o, a));
return r.trigger('request', r, c, a),
c
};
var P = {
create: 'POST',
update: 'PUT',
patch: 'PATCH',
'delete': 'DELETE',
read: 'GET'
};
t.ajax = function () {
return t.$.ajax.apply(t.$, arguments)
};
var D = t.Router = function (e) {
e || (e = {
}),
e.routes && (this.routes = e.routes),
this._bindRoutes(),
this.initialize.apply(this, arguments)
},
A = /\((.*?)\)/g,
I = /(\(\?)?:\w+/g,
N = /\*\w+/g,
O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
n.extend(D.prototype, u, {
initialize: function () {
},
route: function (e, r, a) {
n.isRegExp(e) || (e = this._routeToRegExp(e)),
n.isFunction(r) && (a = r, r = ''),
a || (a = this[r]);
var i = this;
return t.history.route(e, function (n) {
var o = i._extractParameters(e, n);
i.execute(a, o, r) !== !1 && (i.trigger.apply(i, [
    'route:' + r
].concat(o)), i.trigger('route', r, o), t.history.trigger('route', i, r, o))
}),
this
},
execute: function (e, t, n) {
e && e.apply(this, t)
},
navigate: function (e, n) {
return t.history.navigate(e, n),
this
},
_bindRoutes: function () {
if (this.routes) {
this.routes = n.result(this, 'routes');
for (var e, t = n.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e])
}
},
_routeToRegExp: function (e) {
return e = e.replace(O, '\\$&').replace(A, '(?:$1)?').replace(I, function (e, t) {
return t ? e : '([^/?]+)'
}).replace(N, '([^?]*?)'),
new RegExp('^' + e + '(?:\\?([\\s\\S]*))?$')
},
_extractParameters: function (e, t) {
var r = e.exec(t).slice(1);
return n.map(r, function (e, t) {
return t === r.length - 1 ? e || null : e ? decodeURIComponent(e)  : null
})
}
});
var L = t.History = function () {
this.handlers = [
],
this.checkUrl = n.bind(this.checkUrl, this),
'undefined' != typeof window && (this.location = window.location, this.history = window.history)
},
j = /^[#\/]|\s+$/g,
z = /^\/+|\/+$/g,
B = /#.*$/;
L.started = !1,
n.extend(L.prototype, u, {
interval: 50,
atRoot: function () {
var e = this.location.pathname.replace(/[^\/]$/, '$&/');
return e === this.root && !this.getSearch()
},
matchRoot: function () {
var e = this.decodeFragment(this.location.pathname),
t = e.slice(0, this.root.length - 1) + '/';
return t === this.root
},
decodeFragment: function (e) {
return decodeURI(e.replace(/%25/g, '%2525'))
},
getSearch: function () {
var e = this.location.href.replace(/#.*/, '').match(/\?.+/);
return e ? e[0] : ''
},
getHash: function (e) {
var t = (e || this).location.href.match(/#(.*)$/);
return t ? t[1] : ''
},
getPath: function () {
var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
return '/' === e.charAt(0) ? e.slice(1)  : e
},
getFragment: function (e) {
return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath()  : this.getHash()),
e.replace(j, '')
},
start: function (e) {
if (L.started) throw new Error('Backbone.history has already been started');
if (L.started = !0, this.options = n.extend({
root: '/'
}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = 'onhashchange' in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ('/' + this.root + '/').replace(z, '/'), this._wantsHashChange && this._wantsPushState) {
if (!this._hasPushState && !this.atRoot()) {
    var t = this.root.slice(0, - 1) || '/';
    return this.location.replace(t + '#' + this.getPath()),
    !0
}
this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
    replace: !0
})
}
if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
this.iframe = document.createElement('iframe'),
this.iframe.src = 'javascript:0',
this.iframe.style.display = 'none',
this.iframe.tabIndex = - 1;
var r = document.body,
a = r.insertBefore(this.iframe, r.firstChild).contentWindow;
a.document.open(),
a.document.close(),
a.location.hash = '#' + this.fragment
}
var i = window.addEventListener || function (e, t) {
return attachEvent('on' + e, t)
};
return this._usePushState ? i('popstate', this.checkUrl, !1)  : this._useHashChange && !this.iframe ? i('hashchange', this.checkUrl, !1)  : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
this.options.silent ? void 0 : this.loadUrl()
},
stop: function () {
var e = window.removeEventListener || function (e, t) {
return detachEvent('on' + e, t)
};
this._usePushState ? e('popstate', this.checkUrl, !1)  : this._useHashChange && !this.iframe && e('hashchange', this.checkUrl, !1),
this.iframe && (document.body.removeChild(this.iframe), this.iframe = null),
this._checkUrlInterval && clearInterval(this._checkUrlInterval),
L.started = !1
},
route: function (e, t) {
this.handlers.unshift({
route: e,
callback: t
})
},
checkUrl: function (e) {
var t = this.getFragment();
return t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
},
loadUrl: function (e) {
return this.matchRoot() ? (e = this.fragment = this.getFragment(e), n.some(this.handlers, function (t) {
return t.route.test(e) ? (t.callback(e), !0)  : void 0
}))  : !1
},
navigate: function (e, t) {
if (!L.started) return !1;
t && t !== !0 || (t = {
trigger: !!t
}),
e = this.getFragment(e || '');
var n = this.root;
('' === e || '?' === e.charAt(0)) && (n = n.slice(0, - 1) || '/');
var r = n + e;
if (e = this.decodeFragment(e.replace(B, '')), this.fragment !== e) {
if (this.fragment = e, this._usePushState) this.history[t.replace ? 'replaceState' : 'pushState']({
}, document.title, r);
 else {
    if (!this._wantsHashChange) return this.location.assign(r);
    if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
        var a = this.iframe.contentWindow;
        t.replace || (a.document.open(), a.document.close()),
        this._updateHash(a.location, e, t.replace)
    }
}
return t.trigger ? this.loadUrl(e)  : void 0
}
},
_updateHash: function (e, t, n) {
if (n) {
var r = e.href.replace(/(javascript:|#).*$/, '');
e.replace(r + '#' + t)
} else e.hash = '#' + t
}
}),
t.history = new L;
var H = function (e, t) {
var r,
a = this;
r = e && n.has(e, 'constructor') ? e.constructor : function () {
return a.apply(this, arguments)
},
n.extend(r, a, t);
var i = function () {
this.constructor = r
};
return i.prototype = a.prototype,
r.prototype = new i,
e && n.extend(r.prototype, e),
r.__super__ = a.prototype,
r
};
b.extend = x.extend = D.extend = M.extend = L.extend = H;
var R = function () {
throw new Error('A "url" property or function must be specified')
},
$ = function (e, t) {
var n = t.error;
t.error = function (r) {
n && n.call(t.context, e, r, t),
e.trigger('error', e, r, t)
}
};
return t
}),
function (e) {
if ('object' == typeof exports) module.exports = e(require('underscore'), require('backbone'));
 else if ('function' == typeof define && define.amd) define('backbone.paginator', [
'underscore',
'backbone'
], e);
 else if ('undefined' != typeof _ && 'undefined' != typeof Backbone) {
var t = Backbone.PageableCollection,
n = e(_, Backbone);
Backbone.PageableCollection.noConflict = function () {
return Backbone.PageableCollection = t,
n
}
}
}(function (e, t) {
'use strict';
function n(t, n) {
if (!e.isNumber(t) || e.isNaN(t) || !e.isFinite(t) || ~~t !== t) throw new TypeError('`' + n + '` must be a finite integer');
return t
}
function r(e) {
for (var t, n, r, a, i = {
}, o = decodeURIComponent, s = e.split('&'), l = 0, c = s.length; c > l; l++) {
var u = s[l];
t = u.split('='),
n = t[0],
r = t[1] || !0,
n = o(n),
r = o(r),
a = i[n],
h(a) ? a.push(r)  : a ? i[n] = [
a,
r
] : i[n] = r
}
return i
}
function a(e, t, n) {
var r = e._events[t];
if (r && r.length) {
var a = r[r.length - 1],
i = a.callback;
a.callback = function () {
try {
    i.apply(this, arguments),
    n()
} catch (e) {
    throw e
} finally {
    a.callback = i
}
}
} else n()
}
var i = e.extend,
o = e.omit,
s = e.clone,
l = e.each,
c = e.pick,
u = e.contains,
d = e.isEmpty,
p = e.pairs,
f = e.invert,
h = e.isArray,
m = e.isFunction,
g = e.isObject,
v = e.keys,
y = e.isUndefined,
b = Math.ceil,
w = Math.floor,
x = Math.max,
k = t.Collection.prototype,
T = /[\s'"]/g,
C = /[<>\s'"]/g,
S = t.PageableCollection = t.Collection.extend({
state: {
firstPage: 1,
lastPage: null,
currentPage: null,
pageSize: 25,
totalPages: null,
totalRecords: null,
sortKey: null,
order: - 1
},
mode: 'server',
queryParams: {
currentPage: 'page',
pageSize: 'per_page',
totalPages: 'total_pages',
totalRecords: 'total_entries',
sortKey: 'sort_by',
order: 'order',
directions: {
'-1': 'asc',
1: 'desc'
}
},
constructor: function (e, t) {
k.constructor.apply(this, arguments),
t = t || {
};
var n = this.mode = t.mode || this.mode || M.mode,
r = i({
}, M.queryParams, this.queryParams, t.queryParams || {
});
r.directions = i({
}, M.queryParams.directions, this.queryParams.directions, r.directions || {
}),
this.queryParams = r;
var a = this.state = i({
}, M.state, this.state, t.state || {
});
a.currentPage = null == a.currentPage ? a.firstPage : a.currentPage,
h(e) || (e = e ? [
e
] : [
]),
e = e.slice(),
'server' == n || null != a.totalRecords || d(e) || (a.totalRecords = e.length),
this.switchMode(n, i({
fetch: !1,
resetState: !1,
models: e
}, t));
var o = t.comparator;
if (a.sortKey && !o && this.setSorting(a.sortKey, a.order, t), 'server' != n) {
var l = this.fullCollection;
o && t.full && (this.comparator = null, l.comparator = o),
t.full && l.sort(),
e && !d(e) && (this.reset(e, i({
    silent: !0
}, t)), this.getPage(a.currentPage), e.splice.apply(e, [
    0,
    e.length
].concat(this.models)))
}
this._initState = s(this.state)
},
_makeFullCollection: function (e, n) {
var r,
a,
i,
o = [
'url',
'model',
'sync',
'comparator'
],
s = this.constructor.prototype,
l = {
};
for (r = 0, a = o.length; a > r; r++) i = o[r],
y(s[i]) || (l[i] = s[i]);
var c = new (t.Collection.extend(l)) (e, n);
for (r = 0, a = o.length; a > r; r++) i = o[r],
this[i] !== s[i] && (c[i] = this[i]);
return c
},
_makeCollectionEventHandler: function (e, t) {
return function (n, r, o, c) {
var u = e._handlers;
l(v(u), function (n) {
    var r = u[n];
    e.off(n, r),
    t.off(n, r)
});
var d = s(e.state),
p = d.firstPage,
f = 0 === p ? d.currentPage : d.currentPage - 1,
h = d.pageSize,
m = f * h,
g = m + h;
if ('add' == n) {
    var w,
    x,
    k,
    T,
    c = c || {
    };
    if (o == t) x = t.indexOf(r),
    x >= m && g > x && (T = e, w = k = x - m);
     else {
        w = e.indexOf(r),
        x = m + w,
        T = t;
        var k = y(c.at) ? x : c.at + m
    }
    if (c.onRemove || (++d.totalRecords, delete c.onRemove), e.state = e._checkState(d), T) {
        T.add(r, i({
        }, c || {
        }, {
            at: k
        }));
        var C = w >= h ? r : !y(c.at) && g > k && e.length > h ? e.at(h)  : null;
        C && a(o, n, function () {
            e.remove(C, {
                onAdd: !0
            })
        })
    }
}
if ('remove' == n) if (c.onAdd) delete c.onAdd;
 else {
    if (--d.totalRecords) {
        var S = d.totalPages = b(d.totalRecords / h);
        d.lastPage = 0 === p ? S - 1 : S || p,
        d.currentPage > S && (d.currentPage = d.lastPage)
    } else d.totalRecords = null,
    d.totalPages = null;
    e.state = e._checkState(d);
    var M,
    E = c.index;
    o == e ? ((M = t.at(g)) ? a(e, n, function () {
        e.push(M, {
            onRemove: !0
        })
    })  : !e.length && d.totalRecords && e.reset(t.models.slice(m - h, g - h), i({
    }, c, {
        parse: !1
    })), t.remove(r))  : E >= m && g > E && ((M = t.at(g - 1)) && a(e, n, function () {
        e.push(M, {
            onRemove: !0
        })
    }), e.remove(r), !e.length && d.totalRecords && e.reset(t.models.slice(m - h, g - h), i({
    }, c, {
        parse: !1
    })))
}
if ('reset' == n) if (c = o, o = r, o == e && null == c.from && null == c.to) {
    var _ = t.models.slice(0, m),
    P = t.models.slice(m + e.models.length);
    t.reset(_.concat(e.models).concat(P), c)
} else o == t && ((d.totalRecords = t.models.length) || (d.totalRecords = null, d.totalPages = null), 'client' == e.mode && (d.lastPage = d.currentPage = d.firstPage), e.state = e._checkState(d), e.reset(t.models.slice(m, g), i({
}, c, {
    parse: !1
})));
'sort' == n && (c = o, o = r, o === t && e.reset(t.models.slice(m, g), i({
}, c, {
    parse: !1
}))),
l(v(u), function (n) {
    var r = u[n];
    l([e,
    t], function (e) {
        e.on(n, r);
        var t = e._events[n] || [
        ];
        t.unshift(t.pop())
    })
})
}
},
_checkState: function (e) {
var t = this.mode,
r = this.links,
a = e.totalRecords,
i = e.pageSize,
o = e.currentPage,
s = e.firstPage,
l = e.totalPages;
if (null != a && null != i && null != o && null != s && ('infinite' == t ? r : !0)) {
if (a = n(a, 'totalRecords'), i = n(i, 'pageSize'), o = n(o, 'currentPage'), s = n(s, 'firstPage'), 1 > i) throw new RangeError('`pageSize` must be >= 1');
if (l = e.totalPages = b(a / i), 0 > s || s > 1) throw new RangeError('`firstPage must be 0 or 1`');
if (e.lastPage = 0 === s ? x(0, l - 1)  : l || s, 'infinite' == t) {
    if (!r[o + '']) throw new RangeError('No link found for page ' + o)
} else if (s > o || l > 0 && (s ? o > l : o >= l)) throw new RangeError('`currentPage` must be firstPage <= currentPage ' + (s ? '>' : '>=') + ' totalPages if ' + s + '-based. Got ' + o + '.')
}
return e
},
setPageSize: function (e, t) {
e = n(e, 'pageSize'),
t = t || {
first: !1
};
var r = this.state,
a = b(r.totalRecords / e),
s = a ? x(r.firstPage, w(a * r.currentPage / r.totalPages))  : r.firstPage;
return r = this.state = this._checkState(i({
}, r, {
pageSize: e,
currentPage: t.first ? r.firstPage : s,
totalPages: a
})),
this.getPage(r.currentPage, o(t, [
'first'
]))
},
switchMode: function (t, n) {
if (!u(['server',
'client',
'infinite'], t)) throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
n = n || {
fetch: !0,
resetState: !0
};
var r = this.state = n.resetState ? s(this._initState)  : this._checkState(i({
}, this.state));
this.mode = t;
var a,
c = this,
d = this.fullCollection,
p = this._handlers = this._handlers || {
};
if ('server' == t || d) 'server' == t && d && (l(v(p), function (e) {
a = p[e],
c.off(e, a),
d.off(e, a)
}), delete this._handlers, this._fullComparator = d.comparator, delete this.fullCollection);
 else {
d = this._makeFullCollection(n.models || [
], n),
d.pageableCollection = this,
this.fullCollection = d;
var f = this._makeCollectionEventHandler(this, d);
l(['add',
'remove',
'reset',
'sort'], function (t) {
    p[t] = a = e.bind(f, {
    }, t),
    c.on(t, a),
    d.on(t, a)
}),
d.comparator = this._fullComparator
}
if ('infinite' == t) for (var h = this.links = {
}, m = r.firstPage, g = b(r.totalRecords / r.pageSize), y = 0 === m ? x(0, g - 1)  : g || m, w = r.firstPage; y >= w; w++) h[w] = this.url;
 else this.links && delete this.links;
return n.fetch ? this.fetch(o(n, 'fetch', 'resetState'))  : this
},
hasPreviousPage: function () {
var e = this.state,
t = e.currentPage;
return 'infinite' != this.mode ? t > e.firstPage : !!this.links[t - 1]
},
hasNextPage: function () {
var e = this.state,
t = this.state.currentPage;
return 'infinite' != this.mode ? t < e.lastPage : !!this.links[t + 1]
},
getFirstPage: function (e) {
return this.getPage('first', e)
},
getPreviousPage: function (e) {
return this.getPage('prev', e)
},
getNextPage: function (e) {
return this.getPage('next', e)
},
getLastPage: function (e) {
return this.getPage('last', e)
},
getPage: function (e, t) {
var r = this.mode,
a = this.fullCollection;
t = t || {
fetch: !1
};
var s = this.state,
l = s.firstPage,
c = s.currentPage,
u = s.lastPage,
p = s.pageSize,
f = e;
switch (e) {
case 'first':
    f = l;
    break;
case 'prev':
    f = c - 1;
    break;
case 'next':
    f = c + 1;
    break;
case 'last':
    f = u;
    break;
default:
    f = n(e, 'index')
}
this.state = this._checkState(i({
}, s, {
currentPage: f
})),
t.from = c,
t.to = f;
var h = (0 === l ? f : f - 1) * p,
m = a && a.length ? a.models.slice(h, h + p)  : [
];
return 'client' != r && ('infinite' != r || d(m)) || t.fetch ? ('infinite' == r && (t.url = this.links[f]), this.fetch(o(t, 'fetch')))  : (this.reset(m, o(t, 'fetch')), this)
},
getPageByOffset: function (e, t) {
if (0 > e) throw new RangeError('`offset must be > 0`');
e = n(e);
var r = w(e / this.state.pageSize);
return 0 !== this.state.firstPage && r++,
r > this.state.lastPage && (r = this.state.lastPage),
this.getPage(r, t)
},
sync: function (e, n, r) {
var a = this;
if ('infinite' == a.mode) {
var o = r.success,
s = a.state.currentPage;
r.success = function (e, t, n) {
    var l = a.links,
    c = a.parseLinks(e, i({
        xhr: n
    }, r));
    c.first && (l[a.state.firstPage] = c.first),
    c.prev && (l[s - 1] = c.prev),
    c.next && (l[s + 1] = c.next),
    o && o(e, t, n)
}
}
return (k.sync || t.sync).call(a, e, n, r)
},
parseLinks: function (e, t) {
var n = {
},
r = t.xhr.getResponseHeader('Link');
if (r) {
var a = [
    'first',
    'prev',
    'next'
];
l(r.split(','), function (e) {
    var t = e.split(';'),
    r = t[0].replace(C, ''),
    i = t.slice(1);
    l(i, function (e) {
        var t = e.split('='),
        i = t[0].replace(T, ''),
        o = t[1].replace(T, '');
        'rel' == i && u(a, o) && (n[o] = r)
    })
})
}
return n
},
parse: function (e, t) {
var n = this.parseState(e, s(this.queryParams), s(this.state), t);
return n && (this.state = this._checkState(i({
}, this.state, n))),
this.parseRecords(e, t)
},
parseState: function (t, n, r, a) {
if (t && 2 === t.length && g(t[0]) && h(t[1])) {
var i = s(r),
c = t[0];
return l(p(o(n, 'directions')), function (t) {
    var n = t[0],
    r = t[1],
    a = c[r];
    y(a) || e.isNull(a) || (i[n] = c[r])
}),
c.order && (i.order = 1 * f(n.directions) [c.order]),
i
}
},
parseRecords: function (e, t) {
return e && 2 === e.length && g(e[0]) && h(e[1]) ? e[1] : e
},
fetch: function (e) {
e = e || {
};
var t = this._checkState(this.state),
n = this.mode;
'infinite' != n || e.url || (e.url = this.links[t.currentPage]);
var a = e.data || {
},
l = e.url || this.url || '';
m(l) && (l = l.call(this));
var u = l.indexOf('?');
- 1 != u && (i(a, r(l.slice(u + 1))), l = l.slice(0, u)),
e.url = l,
e.data = a;
var d,
f,
h,
g,
b = 'client' == this.mode ? c(this.queryParams, 'sortKey', 'order')  : o(c(this.queryParams, v(M.queryParams)), 'directions'),
w = p(b),
x = s(this);
for (d = 0; d < w.length; d++) f = w[d],
h = f[0],
g = f[1],
g = m(g) ? g.call(x)  : g,
null != t[h] && null != g && (a[g] = t[h]);
if (t.sortKey && t.order) {
var T = m(b.order) ? b.order.call(x)  : b.order;
a[T] = this.queryParams.directions[t.order + '']
} else t.sortKey || delete a[b.order];
var C = p(o(this.queryParams, v(M.queryParams)));
for (d = 0; d < C.length; d++) f = C[d],
g = f[1],
g = m(g) ? g.call(x)  : g,
null != g && (a[f[0]] = g);
if ('server' != n) {
var S = this,
E = this.fullCollection,
_ = e.success;
return e.success = function (t, r, a) {
    a = a || {
    },
    y(e.silent) ? delete a.silent : a.silent = e.silent;
    var o = t.models;
    'client' == n ? E.reset(o, a)  : (E.add(o, i({
        at: E.length
    }, i(a, {
        parse: !1
    }))), S.trigger('reset', S, a)),
    _ && _(t, r, a)
},
k.fetch.call(this, i({
}, e, {
    silent: !0
}))
}
return k.fetch.call(this, e)
},
_makeComparator: function (e, t, n) {
var r = this.state;
return e = e || r.sortKey,
t = t || r.order,
e && t ? (n || (n = function (e, t) {
return e.get(t)
}), function (r, a) {
var i,
o = n(r, e),
s = n(a, e);
return 1 === t && (i = o, o = s, s = i),
o === s ? 0 : s > o ? - 1 : 1
})  : void 0
},
setSorting: function (e, t, n) {
var r = this.state;
r.sortKey = e,
r.order = t = t || r.order;
var a = this.fullCollection,
o = !1,
s = !1;
e || (o = s = !0);
var l = this.mode;
n = i({
side: 'client' == l ? l : 'server',
full: !0
}, n);
var c = this._makeComparator(e, t, n.sortValue),
u = n.full,
d = n.side;
return 'client' == d ? u ? (a && (a.comparator = c), o = !0)  : (this.comparator = c, s = !0)  : 'server' != d || u || (this.comparator = c),
o && (this.comparator = null),
s && a && (a.comparator = null),
this
}
}), M = S.prototype; return S
}), function () {
'use strict';
function e() {
var e = {
'&': '&#38;',
'<': '&#60;',
'>': '&#62;',
'"': '&#34;',
'\'': '&#39;',
'/': '&#47;'
},
t = /&(?!#?\w+;)|<|>|"|'|\//g;
return function () {
return this ? this.replace(t, function (t) {
return e[t] || t
})  : this
}
}
function t(e, n, r) {
return ('string' == typeof n ? n : n.toString()).replace(e.define || o, function (t, n, a, i) {
return 0 === n.indexOf('def.') && (n = n.substring(4)),
n in r || (':' === a ? (e.defineParams && i.replace(e.defineParams, function (e, t, a) {
r[n] = {
    arg: t,
    text: a
}
}), n in r || (r[n] = i))  : new Function('def', 'def[\'' + n + '\']=' + i) (r)),
''
}).replace(e.use || o, function (n, a) {
e.useParams && (a = a.replace(e.useParams, function (e, t, n, a) {
if (r[n] && r[n].arg && a) {
    var i = (n + ':' + a).replace(/'|\\/g, '_');
    return r.__exp = r.__exp || {
    },
    r.__exp[i] = r[n].text.replace(new RegExp('(^|[^\\w$])' + r[n].arg + '([^\\w$])', 'g'), '$1' + a + '$2'),
    t + 'def.__exp[\'' + i + '\']'
}
}));
var i = new Function('def', 'return ' + a) (r);
return i ? t(e, i, r)  : i
})
}
function n(e) {
return e.replace(/\\('|\\)/g, '$1').replace(/[\r\t\n]/g, ' ')
}
var r,
a = {
version: '1.0.1',
templateSettings: {
evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
interpolate: /\{\{=([\s\S]+?)\}\}/g,
encode: /\{\{!([\s\S]+?)\}\}/g,
use: /\{\{#([\s\S]+?)\}\}/g,
useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
defineParams: /^\s*([\w$]+):([\s\S]+)/,
conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
varname: 'it',
strip: !0,
append: !0,
selfcontained: !1
},
template: void 0,
compile: void 0
};
'undefined' != typeof module && module.exports ? module.exports = a : 'function' == typeof define && define.amd ? define('doT', [
], function () {
return a
})  : (r = function () {
return this || (0, eval) ('this')
}(), r.doT = a),
String.prototype.encodeHTML = e();
var i = {
append: {
start: '\'+(',
end: ')+\'',
endencode: '||\'\').toString().encodeHTML()+\''
},
split: {
start: '\';out+=(',
end: ');out+=\'',
endencode: '||\'\').toString().encodeHTML();out+=\''
}
},
o = /$^/;
a.template = function (r, s, l) {
s = s || a.templateSettings;
var c,
u,
d = s.append ? i.append : i.split,
p = 0,
f = s.use || s.define ? t(s, r, l || {
})  : r;
f = ('var out=\'' + (s.strip ? f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, ' ').replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, '')  : f).replace(/'|\\/g, '\\$&').replace(s.interpolate || o, function (e, t) {
return d.start + n(t) + d.end
}).replace(s.encode || o, function (e, t) {
return c = !0,
d.start + n(t) + d.endencode
}).replace(s.conditional || o, function (e, t, r) {
return t ? r ? '\';}else if(' + n(r) + '){out+=\'' : '\';}else{out+=\'' : r ? '\';if(' + n(r) + '){out+=\'' : '\';}out+=\''
}).replace(s.iterate || o, function (e, t, r, a) {
return t ? (p += 1, u = a || 'i' + p, t = n(t), '\';var arr' + p + '=' + t + ';if(arr' + p + '){var ' + r + ',' + u + '=-1,l' + p + '=arr' + p + '.length-1;while(' + u + '<l' + p + '){' + r + '=arr' + p + '[' + u + '+=1];out+=\'')  : '\';} } out+=\''
}).replace(s.evaluate || o, function (e, t) {
return '\';' + n(t) + 'out+=\''
}) + '\';return out;').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, '').replace(/(\s|;|\}|^|\{)out\+=''\+/g, '$1out+='),
c && s.selfcontained && (f = 'String.prototype.encodeHTML=(' + e.toString() + '());' + f);
try {
return new Function(s.varname, f)
} catch (h) {
throw 'undefined' != typeof console && console.log('Could not create a template function: ' + f),
h
}
},
a.compile = function (e, t) {
return a.template(e, null, t)
}
}(), function () {
'use strict';
function e(t, r) {
function a(e, t) {
return function () {
return e.apply(t, arguments)
}
}
var i;
if (r = r || {
}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !e.notNeeded(t)) {
for (var o = [
'onMouse',
'onClick',
'onTouchStart',
'onTouchMove',
'onTouchEnd',
'onTouchCancel'
], s = this, l = 0, c = o.length; c > l; l++) s[o[l]] = a(s[o[l]], s);
n && (t.addEventListener('mouseover', this.onMouse, !0), t.addEventListener('mousedown', this.onMouse, !0), t.addEventListener('mouseup', this.onMouse, !0)),
t.addEventListener('click', this.onClick, !0),
t.addEventListener('touchstart', this.onTouchStart, !1),
t.addEventListener('touchmove', this.onTouchMove, !1),
t.addEventListener('touchend', this.onTouchEnd, !1),
t.addEventListener('touchcancel', this.onTouchCancel, !1),
Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, r) {
var a = Node.prototype.removeEventListener;
'click' === e ? a.call(t, e, n.hijacked || n, r)  : a.call(t, e, n, r)
}, t.addEventListener = function (e, n, r) {
var a = Node.prototype.addEventListener;
'click' === e ? a.call(t, e, n.hijacked || (n.hijacked = function (e) {
    e.propagationStopped || n(e)
}), r)  : a.call(t, e, n, r)
}),
'function' == typeof t.onclick && (i = t.onclick, t.addEventListener('click', function (e) {
i(e)
}, !1), t.onclick = null)
}
}
var t = navigator.userAgent.indexOf('Windows Phone') >= 0,
n = navigator.userAgent.indexOf('Android') > 0 && !t,
r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
a = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
i = r && /OS [6-7]_\d/.test(navigator.userAgent),
o = navigator.userAgent.indexOf('BB10') > 0;
e.prototype.needsClick = function (e) {
switch (e.nodeName.toLowerCase()) {
case 'button':
case 'select':
case 'textarea':
if (e.disabled) return !0;
break;
case 'input':
if (r && 'file' === e.type || e.disabled) return !0;
break;
case 'label':
case 'iframe':
case 'video':
return !0
}
return /\bneedsclick\b/.test(e.className)
},
e.prototype.needsFocus = function (e) {
switch (e.nodeName.toLowerCase()) {
case 'textarea':
return !0;
case 'select':
return !n;
case 'input':
switch (e.type) {
    case 'button':
    case 'checkbox':
    case 'file':
    case 'image':
    case 'radio':
    case 'submit':
        return !1
}
return !e.disabled && !e.readOnly;
default:
return /\bneedsfocus\b/.test(e.className)
}
},
e.prototype.sendClick = function (e, t) {
var n,
r;
document.activeElement && document.activeElement !== e && document.activeElement.blur(),
r = t.changedTouches[0],
n = document.createEvent('MouseEvents'),
n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
n.forwardedTouchEvent = !0,
e.dispatchEvent(n)
},
e.prototype.determineEventType = function (e) {
return n && 'select' === e.tagName.toLowerCase() ? 'mousedown' : 'click'
},
e.prototype.focus = function (e) {
var t;
r && e.setSelectionRange && 0 !== e.type.indexOf('date') && 'time' !== e.type && 'month' !== e.type ? (t = e.value.length, e.setSelectionRange(t, t))  : e.focus()
},
e.prototype.updateScrollParent = function (e) {
var t,
n;
if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
n = e;
do {
if (n.scrollHeight > n.offsetHeight) {
t = n,
e.fastClickScrollParent = n;
break
}
n = n.parentElement
} while (n)
}
t && (t.fastClickLastScrollTop = t.scrollTop)
},
e.prototype.getTargetElementFromEventTarget = function (e) {
return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
},
e.prototype.onTouchStart = function (e) {
var t,
n,
i;
if (e.targetTouches.length > 1) return !0;
if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], r) {
if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
if (!a) {
if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(),
!1;
this.lastTouchIdentifier = n.identifier,
this.updateScrollParent(t)
}
}
return this.trackingClick = !0,
this.trackingClickStart = e.timeStamp,
this.targetElement = t,
this.touchStartX = n.pageX,
this.touchStartY = n.pageY,
e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
!0
},
e.prototype.touchHasMoved = function (e) {
var t = e.changedTouches[0],
n = this.touchBoundary;
return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
},
e.prototype.onTouchMove = function (e) {
return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)  : !0
},
e.prototype.findControl = function (e) {
return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor)  : e.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea')
},
e.prototype.onTouchEnd = function (e) {
var t,
o,
s,
l,
c,
u = this.targetElement;
if (!this.trackingClick) return !0;
if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
!0;
if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, i && (c = e.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = u.tagName.toLowerCase(), 'label' === s) {
if (t = this.findControl(u)) {
if (this.focus(u), n) return !1;
u = t
}
} else if (this.needsFocus(u)) return e.timeStamp - o > 100 || r && window.top !== window && 'input' === s ? (this.targetElement = null, !1)  : (this.focus(u), this.sendClick(u, e), r && 'select' === s || (this.targetElement = null, e.preventDefault()), !1);
return r && !a && (l = u.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
},
e.prototype.onTouchCancel = function () {
this.trackingClick = !1,
this.targetElement = null
},
e.prototype.onMouse = function (e) {
return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation()  : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1)  : !0 : !0
},
e.prototype.onClick = function (e) {
var t;
return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0)  : 'submit' === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
},
e.prototype.destroy = function () {
var e = this.layer;
n && (e.removeEventListener('mouseover', this.onMouse, !0), e.removeEventListener('mousedown', this.onMouse, !0), e.removeEventListener('mouseup', this.onMouse, !0)),
e.removeEventListener('click', this.onClick, !0),
e.removeEventListener('touchstart', this.onTouchStart, !1),
e.removeEventListener('touchmove', this.onTouchMove, !1),
e.removeEventListener('touchend', this.onTouchEnd, !1),
e.removeEventListener('touchcancel', this.onTouchCancel, !1)
},
e.notNeeded = function (e) {
var t,
r,
a,
i;
if ('undefined' == typeof window.ontouchstart) return !0;
if (r = + (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [
,
0
]) [1]) {
if (!n) return !0;
if (t = document.querySelector('meta[name=viewport]')) {
if ( - 1 !== t.content.indexOf('user-scalable=no')) return !0;
if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
}
}
if (o && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), a[1] >= 10 && a[2] >= 3 && (t = document.querySelector('meta[name=viewport]')))) {
if ( - 1 !== t.content.indexOf('user-scalable=no')) return !0;
if (document.documentElement.scrollWidth <= window.outerWidth) return !0
}
return 'none' === e.style.msTouchAction || 'manipulation' === e.style.touchAction ? !0 : (i = + (/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [
,
0
]) [1], i >= 27 && (t = document.querySelector('meta[name=viewport]'), t && ( - 1 !== t.content.indexOf('user-scalable=no') || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : 'none' === e.style.touchAction || 'manipulation' === e.style.touchAction ? !0 : !1)
},
e.attach = function (t, n) {
return new e(t, n)
},
'function' == typeof define && 'object' == typeof define.amd && define.amd ? define('fastclick', [
], function () {
return e
})  : 'undefined' != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e)  : window.FastClick = e
}(),
+ function (e) {
e.setTitle = function (t) {
if (document.title = t ? t : '', e.device.weixin) var n = e('body'),
r = e('<iframe src="' + _global.url['static'] + '/empty.html" style="display:none;"></iframe>').on('load', function () {
setTimeout(function () {
r.off('load').remove()
}, 0)
}).appendTo(n)
}
}(jQuery),
define('forale/head', function () {
}),
+ function (e) {
'use strict';
function t(t) {
t.stopPropagation(),
t.preventDefault();
var n,
a = e(this);
a.hasClass('open-popup') && (n = a.attr('data-popup') ? a.attr('data-popup')  : '.popup', e.popup(n)),
a.hasClass('close-popup') && (n = a.attr('data-popup') ? a.attr('data-popup')  : '.popup.modal-in', e.closeModal(n)),
a.hasClass('modal-overlay') && (e('.modal.modal-in').length > 0 && r.modalCloseByOutside && e.closeModal('.modal.modal-in'), e('.actions-modal.modal-in').length > 0 && r.actionsCloseByOutside && e.closeModal('.actions-modal.modal-in'), e('.popover.modal-in').length > 0 && e.closeModal('.popover.modal-in')),
a.hasClass('popup-overlay') && e('.popup.modal-in').length > 0 && r.popupCloseByOutside && e.closeModal('.popup.modal-in')
}
var n = document.createElement('div');
e.modalStack = [
],
e.modalStackClearQueue = function () {
e.modalStack.length && e.modalStack.shift() ()
},
e.modal = function (t) {
t = t || {
};
var a = '';
if (r.modalTemplate) e._compiledTemplates.modal || (e._compiledTemplates.modal = r.modalTemplate),
a = e._compiledTemplates.modal(t);
 else {
var i = '';
if (t.buttons && t.buttons.length > 0) for (var o = 0; o < t.buttons.length; o++) i += '<span class="modal-button' + (t.buttons[o].bold ? ' modal-button-bold' : '') + '">' + t.buttons[o].text + '</span>';
var s = t.title ? '<div class="modal-title">' + t.title + '</div>' : '',
l = t.text ? '<div class="modal-text">' + t.text + '</div>' : '',
c = t.afterText ? t.afterText : '',
u = t.buttons && 0 !== t.buttons.length ? '' : 'modal-no-buttons',
d = t.verticalButtons ? 'modal-buttons-vertical' : '',
p = t.extraClass || '';
a = '<div class="modal ' + u + ' ' + p + '"><div class="modal-inner">' + (s + l + c) + '</div><div class="modal-buttons ' + d + '">' + i + '</div></div>'
}
n.innerHTML = a;
var f = e(n).children();
return e(r.modalContainer).append(f[0]),
f.find('.modal-button').each(function (n, r) {
e(r).on('click', function (r) {
t.buttons[n].close !== !1 && e.closeModal(f),
t.buttons[n].onClick && t.buttons[n].onClick(f, r),
t.onClick && t.onClick(f, n)
})
}),
e.openModal(f),
f[0]
},
e.alert = function (t, n, a, i) {
var o = r.modalButtonOk;
return 'function' == typeof n ? (a && (o = arguments[2]), a = arguments[1], n = void 0)  : i && (o = arguments[3]),
e.modal({
text: t || '',
title: 'undefined' == typeof n ? r.modalTitle : n,
buttons: [
{
text: o,
bold: !0,
onClick: a
}
]
})
},
e.confirm = function (t, n, a, i) {
return 'function' == typeof n && (i = arguments[2], a = arguments[1], n = void 0),
e.modal({
text: t || '',
title: 'undefined' == typeof n ? r.modalTitle : n,
buttons: [
{
text: r.modalButtonCancel,
onClick: i
},
{
text: r.modalButtonOk,
bold: !0,
onClick: a
}
]
})
},
e.actions = function (t, a) {
var i,
o,
s,
l = !1;
1 === arguments.length ? a = t : e.device.ios ? e.device.ipad && (l = !0)  : e(window).width() >= 768 && (l = !0),
a = a || [
],
a.length > 0 && !e.isArray(a[0]) && (a = [
a
]);
var c;
if (l) {
var u = r.modalActionsToPopoverTemplate || '<div class="popover actions-popover"><div class="popover-inner">{{#each this}}<div class="list-block"><ul>{{#each this}}{{#if label}}<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>{{else}}<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>{{/if}}{{/each}}</ul></div>{{/each}}</div></div>';
e._compiledTemplates.actionsToPopover || (e._compiledTemplates.actionsToPopover = u);
var d = e._compiledTemplates.actionsToPopover(a);
i = e(e.popover(d, t, !0)),
o = '.list-block ul',
s = '.list-button'
} else {
if (r.modalActionsTemplate) e._compiledTemplates.actions || (e._compiledTemplates.actions = r.modalActionsTemplate),
c = e._compiledTemplates.actions(a);
 else {
for (var p = '', f = 0; f < a.length; f++) for (var h = 0; h < a[f].length; h++) {
0 === h && (p += '<div class="actions-modal-group">');
var m = a[f][h],
g = m.label ? 'actions-modal-label' : 'actions-modal-button';
m.bold && (g += ' actions-modal-button-bold'),
m.color && (g += ' color-' + m.color),
m.bg && (g += ' bg-' + m.bg),
m.disabled && (g += ' disabled'),
p += '<span class="' + g + '">' + m.text + '</span>',
h === a[f].length - 1 && (p += '</div>')
}
c = '<div class="actions-modal">' + p + '</div>'
}
n.innerHTML = c,
i = e(n).children(),
e(r.modalContainer).append(i[0]),
o = '.actions-modal-group',
s = '.actions-modal-button'
}
var v = i.find(o);
return v.each(function (t, n) {
var r = t;
e(n).children().each(function (t, n) {
var o,
c = t,
u = a[r][c];
!l && e(n).is(s) && (o = e(n)),
l && e(n).find(s).length > 0 && (o = e(n).find(s)),
o && o.on('click', function (t) {
u.close !== !1 && e.closeModal(i),
u.onClick && u.onClick(i, t)
})
})
}),
l || e.openModal(i),
i[0]
},
e.popover = function (t, n, a) {
function i() {
t.css({
left: '',
top: ''
});
var r,
a,
i = t.width(),
o = t.height(),
s = t.find('.popover-angle'),
l = s.width() / 2;
s.removeClass('on-left on-right on-top on-bottom').css({
left: '',
top: ''
});
var c = n.outerWidth(),
u = n.outerHeight(),
d = n.offset(),
p = n.parents('.page');
p.length > 0 && (d.top = d.top - p[0].scrollTop);
var f = e(window).height(),
h = e(window).width(),
m = 0,
g = 0,
v = 0,
y = 'top';
o + l < d.top ? m = d.top - o - l : o + l < f - d.top - u ? (y = 'bottom', m = d.top + u + l)  : (y = 'middle', m = u / 2 + d.top - o / 2, v = m, 0 > m ? m = 5 : m + o > f && (m = f - o - 5), v -= m),
'top' === y || 'bottom' === y ? (g = c / 2 + d.left - i / 2, v = g, 5 > g && (g = 5), g + i > h && (g = h - i - 5), 'top' === y && s.addClass('on-bottom'), 'bottom' === y && s.addClass('on-top'), v -= g, r = i / 2 - l + v, r = Math.max(Math.min(r, i - 2 * l - 6), 6), s.css({
left: r + 'px'
}))  : 'middle' === y && (g = d.left - i - l, s.addClass('on-right'), 5 > g && (g = d.left + c + l, s.removeClass('on-right').addClass('on-left')), g + i > h && (g = h - i - 5, s.removeClass('on-right').addClass('on-left')), a = o / 2 - l + v, a = Math.max(Math.min(a, o - 2 * l - 6), 6), s.css({
top: a + 'px'
})),
t.css({
top: m + 'px',
left: g + 'px'
})
}
if ('undefined' == typeof a && (a = !0), 'string' == typeof t && t.indexOf('<') >= 0) {
var o = document.createElement('div');
if (o.innerHTML = t.trim(), !(o.childNodes.length > 0)) return !1;
t = o.childNodes[0],
a && t.classList.add('remove-on-close'),
e(r.modalContainer).append(t)
}
return t = e(t),
n = e(n),
0 === t.length || 0 === n.length ? !1 : (0 === t.find('.popover-angle').length && t.append('<div class="popover-angle"></div>'), t.show(), i(), e(window).on('resize', i), t.on('close', function () {
e(window).off('resize', i)
}), t.find('.' + r.viewClass).length > 0 && e.sizeNavbars(t.find('.' + r.viewClass) [0]), e.openModal(t), t[0])
},
e.popup = function (t, n) {
if (_global.scroll = {
index: e(document).scrollTop()
}, e(document).scrollTop(0), e('html').css({
height: e(window).height(),
position: 'relative',
overflow: 'hidden',
padding: 0
}), e('body').css({
height: e(window).height(),
overflow: 'hidden',
padding: 0
}), 'undefined' == typeof n && (n = !0), 'string' == typeof t && t.indexOf('<') >= 0) {
var a = document.createElement('div');
if (a.css({
position: 'absolute',
padding: 0
}), a.innerHTML = t.trim(), !(a.childNodes.length > 0)) return !1;
t = a.childNodes[0],
n && t.classList.add('remove-on-close'),
e(r.modalContainer).append(t)
}
return t = e(t),
0 === t.length ? !1 : (t.show(), t.find('.content').scroller('refresh'), t.find('.' + r.viewClass).length > 0 && e.sizeNavbars(t.find('.' + r.viewClass) [0]), e.openModal(t), t[0])
},
e.pickerModal = function (t, n) {
if ('undefined' == typeof n && (n = !0), 'string' == typeof t && t.indexOf('<') >= 0) {
if (t = e(t), !(t.length > 0)) return !1;
n && t.addClass('remove-on-close'),
e(r.modalContainer).append(t[0])
}
return t = e(t),
0 === t.length ? !1 : (t.show(), e.openModal(t), t[0])
},
e.toast = function (t, n) {
var r = e('<div class=\'modal toast\'>' + t + '</div>').appendTo(document.body);
e.openModal(r);
var n = n ? n : 2000;
setTimeout(function () {
e.closeModal(r)
}, n)
},
e.openModal = function (t) {
t = e(t);
var n = t.hasClass('modal');
if (e('.modal.modal-in:not(.modal-out)').length && r.modalStack && n) return void e.modalStack.push(function () {
e.openModal(t)
});
var a = (t.hasClass('popover'), t.hasClass('popup')),
i = t.hasClass('login-screen'),
o = t.hasClass('picker-modal'),
s = t.hasClass('toast');
n && (t.show(), t.css({
marginTop: - Math.round(t.outerHeight() / 2) + 'px'
})),
s && t.css({
marginLeft: - Math.round(t.innerWidth() / 2) + 'px'
});
var l;
i || o || s || (0 !== e('.modal-overlay').length || a || e(r.modalContainer).append('<div class="modal-overlay"></div>'), 0 === e('.popup-overlay').length && a && e(r.modalContainer).append('<div class="popup-overlay"></div>'), l = e(a ? '.popup-overlay' : '.modal-overlay'));
t[0].clientLeft;
return t.trigger('open'),
o && e(r.modalContainer).addClass('with-picker-modal'),
i || o || s || l.addClass('visible'),
t.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
t.hasClass('modal-out') ? t.trigger('closed')  : t.trigger('opened')
}),
!0
},
e.closeModal = function (t) {
if (t = e(t || '.modal-in'), 'undefined' == typeof t || 0 !== t.length) {
var n = t.hasClass('modal'),
a = t.hasClass('popover'),
i = t.hasClass('popup'),
o = t.hasClass('login-screen'),
s = t.hasClass('picker-modal'),
l = t.hasClass('remove-on-close'),
c = e(i ? '.popup-overlay' : '.modal-overlay');
if (i) {
if (e('html').attr('style', ''), e('body').attr('style', ''), 'undefined' != typeof _global.scroll) {
var u = _global.scroll;
null != u && null != u.index && e(document).scrollTop(u.index)
}
t.length === e('.popup.modal-in').length && c.removeClass('visible')
} else s || c.removeClass('visible');
return t.trigger('close'),
s && (e(r.modalContainer).removeClass('with-picker-modal'), e(r.modalContainer).addClass('picker-modal-closing')),
a ? (t.removeClass('modal-in modal-out').trigger('closed').hide(), l && t.remove())  : (t.removeClass('modal-in').addClass('modal-out').transitionEnd(function (n) {
t.hasClass('modal-out') ? t.trigger('closed')  : t.trigger('opened'),
s && e(r.modalContainer).removeClass('picker-modal-closing'),
i || o || s ? (t.removeClass('modal-out').hide(), l && t.length > 0 && t.remove())  : t.remove()
}), n && r.modalStack && e.modalStackClearQueue()),
!0
}
},
e(document).on('click', ' .modal-overlay, .popup-overlay, .close-popup, .open-popup, .close-picker', t);
var r = e.modal.prototype.defaults = {
modalButtonOk: '确定',
modalButtonCancel: '取消',
modalPreloaderTitle: '加载中',
modalContainer: document.body,
popupCloseByOutside: !0
}
}(jQuery),
define('forale/modal', function () {
}),
+ function (e) {
'use strict';
e.allowPanelOpen = !0,
e.openPanel = function (t) {
function n() {
i.transitionEnd(function (r) {
r.target === i[0] ? (t.hasClass('active') ? t.trigger('opened')  : t.trigger('closed'), e.allowPanelOpen = !0)  : n()
})
}
if (!e.allowPanelOpen) return !1;
('left' === t || 'right' === t) && (t = '.panel-' + t),
t = t ? e(t)  : e('.panel').eq(0);
var r = t.hasClass('panel-right') ? 'right' : 'left';
if (0 === t.length || t.hasClass('active')) return !1;
e.closePanel(),
e.allowPanelOpen = !1;
var a = t.hasClass('panel-reveal') ? 'reveal' : 'cover';
t.css({
display: 'block'
}).addClass('active'),
t.trigger('open');
var i = (t[0].clientLeft, 'reveal' === a ? e('.views')  : t);
return n(),
e(document.body).addClass('with-panel-' + r + '-' + a),
!0
},
e.closePanel = function () {
var t = e('.panel.active');
if (0 === t.length) return !1;
var n = t.hasClass('panel-reveal') ? 'reveal' : 'cover',
r = t.hasClass('panel-left') ? 'left' : 'right';
t.removeClass('active');
var a = 'reveal' === n ? e('.views')  : t;
t.trigger('close'),
e.allowPanelOpen = !1,
a.transitionEnd(function () {
t.hasClass('active') || (t.css({
display: ''
}), t.trigger('closed'), e('body').removeClass('panel-closing'), e.allowPanelOpen = !0)
}),
e('body').addClass('panel-closing').removeClass('with-panel-' + r + '-' + n)
},
e(document).on('click', '.open-panel', function (t) {
var n = e(t.target).attr('data-panel');
e.openPanel(n)
}),
e(document).on('click', '.close-panel, .panel-overlay', function (t) {
e.closePanel()
})
}(jQuery),
define('forale/panels', function () {
}),
+ function (e) {
e.indicator = function (t) {
'hide' == t ? e('.indicator-overlay, .indicator-modal').remove()  : e('.indicator-overlay') [0] || e('body').append('<div class="indicator-overlay"></div><div class="indicator-modal"><i class="loading loading-white"></i></div>')
},
e.loading = function (t) {
'hide' == t ? e('.loading-overlay, .loading-modal').remove()  : e('.loading-overlay') [0] || e('body').append('<div class="loading-overlay"></div><div class="loading-modal" style="width: 1.8rem;height: 1.8rem;"><img src="/image/loading.gif" /></div>')
},
e.fn.loading = function (t) {
'hide' == t ? e(this).find('.loading-wrap').remove()  : e(this).html('<div class="loading-wrap"><span class="loading"></span></div>');
}
}(jQuery),
define('forale/loading', function () {
}),
+ function (e) {
'use strict';
function t(t) {
var n = Array.apply(null, arguments);
n.shift();
var a;
return this.each(function () {
var i = e(this),
o = e.extend({
}, 'object' == typeof t && t),
s = i.data('scroller');
return s || i.data('scroller', s = new r(this, o)),
'string' == typeof t && 'function' == typeof s[t] && (a = s[t].apply(s, n), void 0 !== a) ? !1 : void 0
}),
void 0 !== a ? a : this
}
var n = function (e, t) {
var n = e.split('.'),
r = t.split('.');
if (e === t) return 0;
for (var a = 0; a < n.length; a++) {
var i = parseInt(n[a]);
if (!r[a]) return 1;
var o = parseInt(r[a]);
if (o > i) return - 1;
if (i > o) return 1
}
return 1
},
r = function (t, r) {
this.$scroller = e(t),
this.options = e.extend({
}, this.defaults, r);
var a = this.options.type,
i = 'js' === a || 'auto' === a && e.os.android && n('4.4.0', e.os.version) > - 1 || e.os.ios && n('6.0.0', e.os.version) > - 1;
i ? this.scroller = new IScroll(t, {
mouseWheel: !0
})  : this.$scroller.addClass('native-scroll')
};
r.prototype = {
defaults: {
type: 'native'
},
refresh: function () {
return this.scroller && this.scroller.refresh(),
this
}
},
e.fn.scroller = t
}(jQuery),
define('forale/scroller', function () {
}),
+ function (e) {
function t(e) {
return e.required ? n[e.type].test.test(e.value)  : '' == e.value || n[e.type].test.test(e.value)
}
var n = {
num: {
test: /^\d+(\.\d+)?$/,
error: '请输入正确数字'
},
email: {
test: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
error: '邮箱格式不正确'
},
date: {
test: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/,
error: '日期格式不正确'
},
time: {
test: /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/,
error: '时间格式不正确'
},
id_no: {
test: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
error: '身份证格式不正确'
},
mobile: {
test: /^\d+(\.\d+)?$/,
error: '手机号码只能为数字'
},
price: {
test: /^([+-]?[1-9][\d]{0,3}|0)([.]?[\d]{1,2})?$/,
error: '请输入正确金额'
}
};
e.validity = function (e) {
var r = {
status: !0
};
for (var a in e) {
var i = e[a].type;
if ('undefined' == typeof n[i]) {
if (e[a].required && '' == e[a].value) {
r = {
status: !1,
error: e[a].name + '必填',
index: a
};
break
}
} else if (!t(e[a])) {
r = {
status: !1,
error: n[i].error,
index: a
};
break
}
}
return r
}
}(jQuery),
define('forale/validity', function () {
}),
+ function (e) {
'use strict';
var t = !1,
n = function (n) {
function r() {
var t = !1;
return c.params.convertToPopover || c.params.onlyInPopover ? (!c.inline && c.params.input && (c.params.onlyInPopover ? t = !0 : e.device.ios ? t = e.device.ipad ? !0 : !1 : e(window).width() >= 768 && (t = !0)), t)  : t
}
function a() {
return c.opened && c.container && c.container.length > 0 && c.container.parents('.popover').length > 0 ? !0 : !1
}
function i(e) {
e = new Date(e);
var t = e.getFullYear(),
n = e.getMonth(),
r = n + 1,
a = e.getDate(),
i = e.getDay();
return c.params.dateFormat.replace(/yyyy/g, t).replace(/yy/g, (t + '').substring(2)).replace(/mm/g, 10 > r ? '0' + r : r).replace(/m/g, r).replace(/MM/g, c.params.monthNames[n]).replace(/M/g, c.params.monthNamesShort[n]).replace(/dd/g, 10 > a ? '0' + a : a).replace(/d/g, a).replace(/DD/g, c.params.dayNames[i]).replace(/D/g, c.params.dayNamesShort[i])
}
function o(e) {
if (e.preventDefault(), !c.opened && (c.open(), c.params.scrollToInput && !r())) {
var t = c.input.parents('.page-content');
if (0 === t.length) return;
var n,
a = parseInt(t.css('padding-top'), 10),
i = parseInt(t.css('padding-bottom'), 10),
o = t[0].offsetHeight - a - c.container.height(),
s = t[0].scrollHeight - a - c.container.height(),
l = c.input.offset().top - a + c.input[0].offsetHeight;
if (l > o) {
var u = t.scrollTop() + l - o;
u + o > s && (n = u + o - s + i, o === s && (n = c.container.height()), t.css({
'padding-bottom': n + 'px'
})),
t.scrollTop(u, 300)
}
}
}
function s(t) {
a() || (c.input && c.input.length > 0 ? t.target !== c.input[0] && 0 === e(t.target).parents('.picker-modal').length && c.close()  : 0 === e(t.target).parents('.picker-modal').length && c.close())
}
function l() {
c.opened = !1,
c.input && c.input.length > 0 && c.input.parents('.page-content').css({
'padding-bottom': ''
}),
c.params.onClose && c.params.onClose(c),
c.destroyCalendarEvents()
}
var c = this,
u = {
monthNames: [
'一月',
'二月',
'三月',
'四月',
'五月',
'六月',
'七月',
'八月',
'九月',
'十月',
'十一月',
'十二月'
],
monthNamesShort: [
'一月',
'二月',
'三月',
'四月',
'五月',
'六月',
'七月',
'八月',
'九月',
'十月',
'十一月',
'十二月'
],
dayNames: [
'周日',
'周一',
'周二',
'周三',
'周四',
'周五',
'周六'
],
dayNamesShort: [
'周日',
'周一',
'周二',
'周三',
'周四',
'周五',
'周六'
],
firstDay: 1,
weekendDays: [
0,
6
],
multiple: !1,
dateFormat: 'yyyy-mm-dd',
direction: 'horizontal',
minDate: null,
maxDate: null,
touchMove: !0,
animate: !0,
closeOnSelect: !0,
monthPicker: !0,
monthPickerTemplate: '<div class="picker-calendar-month-picker"><a href="#" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a><div class="current-month-value"></div><a href="#" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a></div>',
yearPicker: !0,
yearPickerTemplate: '<div class="picker-calendar-year-picker"><a href="#" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a><span class="current-year-value"></span><a href="#" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a></div>',
weekHeader: !0,
scrollToInput: !0,
inputReadOnly: !0,
convertToPopover: !0,
onlyInPopover: !1,
toolbar: !0,
toolbarCloseText: 'Done',
toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner">{{monthPicker}}{{yearPicker}}</div></div>'
};
n = n || {
};
for (var d in u) 'undefined' == typeof n[d] && (n[d] = u[d]);
c.params = n,
c.initialized = !1,
c.inline = c.params.container ? !0 : !1,
c.isH = 'horizontal' === c.params.direction;
var p = c.isH && t ? - 1 : 1;
return c.animating = !1,
c.addValue = function (e) {
if (c.params.multiple) {
c.value || (c.value = [
]);
for (var t, n = 0; n < c.value.length; n++) new Date(e).getTime() === new Date(c.value[n]).getTime() && (t = n);
'undefined' == typeof t ? c.value.push(e)  : c.value.splice(t, 1),
c.updateValue()
} else c.value = [
e
],
c.updateValue()
},
c.setValue = function (e) {
c.value = e,
c.updateValue()
},
c.updateValue = function () {
c.wrapper.find('.picker-calendar-day-selected').removeClass('picker-calendar-day-selected');
var t,
n;
for (t = 0; t < c.value.length; t++) {
var r = new Date(c.value[t]);
c.wrapper.find('.picker-calendar-day[data-date="' + r.getFullYear() + '-' + r.getMonth() + '-' + r.getDate() + '"]').addClass('picker-calendar-day-selected')
}
if (c.params.onChange && c.params.onChange(c, c.value, c.value.map(i)), c.input && c.input.length > 0) {
if (c.params.formatValue) n = c.params.formatValue(c, c.value);
 else {
for (n = [
], t = 0; t < c.value.length; t++) n.push(i(c.value[t]));
n = n.join(', ')
}
e(c.input).val(n),
e(c.input).trigger('change')
}
},
c.initCalendarEvents = function () {
function n(e) {
s || o || (o = !0, l = f = 'touchstart' === e.type ? e.originalEvent.targetTouches[0].pageX : e.pageX, u = f = 'touchstart' === e.type ? e.originalEvent.targetTouches[0].pageY : e.pageY, h = (new Date).getTime(), w = 0, T = !0, k = void 0, g = v = c.monthsTranslate)
}
function r(e) {
if (o) {
if (d = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX, f = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY, 'undefined' == typeof k && (k = !!(k || Math.abs(f - u) > Math.abs(d - l))), c.isH && k) return void (o = !1);
if (e.preventDefault(), c.animating) return void (o = !1);
T = !1,
s || (s = !0, y = c.wrapper[0].offsetWidth, b = c.wrapper[0].offsetHeight, c.wrapper.transition(0)),
e.preventDefault(),
x = c.isH ? d - l : f - u,
w = x / (c.isH ? y : b),
v = 100 * (c.monthsTranslate * p + w),
c.wrapper.transform('translate3d(' + (c.isH ? v : 0) + '%, ' + (c.isH ? 0 : v) + '%, 0)')
}
}
function a(e) {
return o && s ? (o = s = !1, m = (new Date).getTime(), 300 > m - h ? Math.abs(x) < 10 ? c.resetMonth()  : x >= 10 ? t ? c.nextMonth()  : c.prevMonth()  : t ? c.prevMonth()  : c.nextMonth()  : - 0.5 >= w ? t ? c.prevMonth()  : c.nextMonth()  : w >= 0.5 ? t ? c.nextMonth()  : c.prevMonth()  : c.resetMonth(), void setTimeout(function () {
T = !0
}, 100))  : void (o = s = !1)
}
function i(t) {
if (T) {
var n = e(t.target).parents('.picker-calendar-day');
if (0 === n.length && e(t.target).hasClass('picker-calendar-day') && (n = e(t.target)), 0 !== n.length && (!n.hasClass('picker-calendar-day-selected') || c.params.multiple) && !n.hasClass('picker-calendar-day-disabled')) {
n.hasClass('picker-calendar-day-next') && c.nextMonth(),
n.hasClass('picker-calendar-day-prev') && c.prevMonth();
var r = n.attr('data-year'),
a = n.attr('data-month'),
i = n.attr('data-day');
c.params.onDayClick && c.params.onDayClick(c, n[0], r, a, i),
c.addValue(new Date(r, a, i).getTime()),
c.params.closeOnSelect && c.close()
}
}
}
var o,
s,
l,
u,
d,
f,
h,
m,
g,
v,
y,
b,
w,
x,
k,
T = !0;
c.container.find('.picker-calendar-prev-month').on('click', c.prevMonth),
c.container.find('.picker-calendar-next-month').on('click', c.nextMonth),
c.container.find('.picker-calendar-prev-year').on('click', c.prevYear),
c.container.find('.picker-calendar-next-year').on('click', c.nextYear),
c.wrapper.on('click', i),
c.params.touchMove && (c.wrapper.on(e.touchEvents.start, n), c.wrapper.on(e.touchEvents.move, r), c.wrapper.on(e.touchEvents.end, a)),
c.container[0].f7DestroyCalendarEvents = function () {
c.container.find('.picker-calendar-prev-month').off('click', c.prevMonth),
c.container.find('.picker-calendar-next-month').off('click', c.nextMonth),
c.container.find('.picker-calendar-prev-year').off('click', c.prevYear),
c.container.find('.picker-calendar-next-year').off('click', c.nextYear),
c.wrapper.off('click', i),
c.params.touchMove && (c.wrapper.off(e.touchEvents.start, n), c.wrapper.off(e.touchEvents.move, r), c.wrapper.off(e.touchEvents.end, a))
}
},
c.destroyCalendarEvents = function (e) {
'f7DestroyCalendarEvents' in c.container[0] && c.container[0].f7DestroyCalendarEvents()
},
c.daysInMonth = function (e) {
var t = new Date(e);
return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
},
c.monthHTML = function (e, t) {
e = new Date(e);
var n = e.getFullYear(),
r = e.getMonth();
e.getDate();
'next' === t && (e = 11 === r ? new Date(n + 1, 0)  : new Date(n, r + 1, 1)),
'prev' === t && (e = 0 === r ? new Date(n - 1, 11)  : new Date(n, r - 1, 1)),
('next' === t || 'prev' === t) && (r = e.getMonth(), n = e.getFullYear());
var a = c.daysInMonth(new Date(e.getFullYear(), e.getMonth()).getTime() - 864000000),
i = c.daysInMonth(e),
o = new Date(e.getFullYear(), e.getMonth()).getDay();
0 === o && (o = 7);
var s,
l,
u,
d = [
],
p = 6,
f = 7,
h = '',
m = 0 + (c.params.firstDay - 1),
g = (new Date).setHours(0, 0, 0, 0),
v = c.params.minDate ? new Date(c.params.minDate).getTime()  : null,
y = c.params.maxDate ? new Date(c.params.maxDate).getTime()  : null;
if (c.value && c.value.length) for (l = 0; l < c.value.length; l++) d.push(new Date(c.value[l]).setHours(0, 0, 0, 0));
for (l = 1; p >= l; l++) {
var b = '';
for (u = 1; f >= u; u++) {
var w = u;
m++;
var x = m - o,
k = '';
0 > x ? (x = a + x + 1, k += ' picker-calendar-day-prev', s = new Date(0 > r - 1 ? n - 1 : n, 0 > r - 1 ? 11 : r - 1, x).getTime())  : (x += 1, x > i ? (x -= i, k += ' picker-calendar-day-next', s = new Date(r + 1 > 11 ? n + 1 : n, r + 1 > 11 ? 0 : r + 1, x).getTime())  : s = new Date(n, r, x).getTime()),
s === g && (k += ' picker-calendar-day-today'),
d.indexOf(s) >= 0 && (k += ' picker-calendar-day-selected'),
c.params.weekendDays.indexOf(w - 1) >= 0 && (k += ' picker-calendar-day-weekend'),
(v && v > s || y && s > y) && (k += ' picker-calendar-day-disabled'),
s = new Date(s);
var T = s.getFullYear(),
C = s.getMonth();
b += '<div data-year="' + T + '" data-month="' + C + '" data-day="' + x + '" class="picker-calendar-day' + k + '" data-date="' + (T + '-' + C + '-' + x) + '"><span>' + x + '</span></div>'
}
h += '<div class="picker-calendar-row">' + b + '</div>'
}
return h = '<div class="picker-calendar-month" data-year="' + n + '" data-month="' + r + '">' + h + '</div>'
},
c.animating = !1,
c.updateCurrentMonthYear = function (e) {
'undefined' == typeof e ? (c.currentMonth = parseInt(c.months.eq(1).attr('data-month'), 10), c.currentYear = parseInt(c.months.eq(1).attr('data-year'), 10))  : (c.currentMonth = parseInt(c.months.eq('next' === e ? c.months.length - 1 : 0).attr('data-month'), 10), c.currentYear = parseInt(c.months.eq('next' === e ? c.months.length - 1 : 0).attr('data-year'), 10)),
c.container.find('.current-month-value').text(c.params.monthNames[c.currentMonth]),
c.container.find('.current-year-value').text(c.currentYear)
},
c.onMonthChangeStart = function (e) {
c.updateCurrentMonthYear(e),
c.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
var t = 'next' === e ? c.months.length - 1 : 0;
c.months.eq(t).addClass('picker-calendar-month-current'),
c.months.eq('next' === e ? t - 1 : t + 1).addClass('next' === e ? 'picker-calendar-month-prev' : 'picker-calendar-month-next'),
c.params.onMonthYearChangeStart && c.params.onMonthYearChangeStart(c, c.currentYear, c.currentMonth)
},
c.onMonthChangeEnd = function (e, t) {
c.animating = !1;
var n,
r,
a;
c.wrapper.find('.picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)').remove(),
'undefined' == typeof e && (e = 'next', t = !0),
t ? (c.wrapper.find('.picker-calendar-month-next, .picker-calendar-month-prev').remove(), r = c.monthHTML(new Date(c.currentYear, c.currentMonth), 'prev'), n = c.monthHTML(new Date(c.currentYear, c.currentMonth), 'next'))  : a = c.monthHTML(new Date(c.currentYear, c.currentMonth), e),
('next' === e || t) && c.wrapper.append(a || n),
('prev' === e || t) && c.wrapper.prepend(a || r),
c.months = c.wrapper.find('.picker-calendar-month'),
c.setMonthsTranslate(c.monthsTranslate),
c.params.onMonthAdd && c.params.onMonthAdd(c, 'next' === e ? c.months.eq(c.months.length - 1) [0] : c.months.eq(0) [0]),
c.params.onMonthYearChangeEnd && c.params.onMonthYearChangeEnd(c, c.currentYear, c.currentMonth)
},
c.setMonthsTranslate = function (e) {
e = e || c.monthsTranslate || 0,
'undefined' == typeof c.monthsTranslate && (c.monthsTranslate = e),
c.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
var t = 100 * - (e + 1) * p,
n = 100 * - e * p,
r = 100 * - (e - 1) * p;
c.months.eq(0).transform('translate3d(' + (c.isH ? t : 0) + '%, ' + (c.isH ? 0 : t) + '%, 0)').addClass('picker-calendar-month-prev'),
c.months.eq(1).transform('translate3d(' + (c.isH ? n : 0) + '%, ' + (c.isH ? 0 : n) + '%, 0)').addClass('picker-calendar-month-current'),
c.months.eq(2).transform('translate3d(' + (c.isH ? r : 0) + '%, ' + (c.isH ? 0 : r) + '%, 0)').addClass('picker-calendar-month-next')
},
c.nextMonth = function (t) {
('undefined' == typeof t || 'object' == typeof t) && (t = '', c.params.animate || (t = 0));
var n = parseInt(c.months.eq(c.months.length - 1).attr('data-month'), 10),
r = parseInt(c.months.eq(c.months.length - 1).attr('data-year'), 10),
a = new Date(r, n),
i = a.getTime(),
o = c.animating ? !1 : !0;
if (c.params.maxDate && i > new Date(c.params.maxDate).getTime()) return c.resetMonth();
if (c.monthsTranslate--, n === c.currentMonth) {
var s = 100 * - c.monthsTranslate * p,
l = e(c.monthHTML(i, 'next')).transform('translate3d(' + (c.isH ? s : 0) + '%, ' + (c.isH ? 0 : s) + '%, 0)').addClass('picker-calendar-month-next');
c.wrapper.append(l[0]),
c.months = c.wrapper.find('.picker-calendar-month'),
c.params.onMonthAdd && c.params.onMonthAdd(c, c.months.eq(c.months.length - 1) [0])
}
c.animating = !0,
c.onMonthChangeStart('next');
var u = 100 * c.monthsTranslate * p;
c.wrapper.transition(t).transform('translate3d(' + (c.isH ? u : 0) + '%, ' + (c.isH ? 0 : u) + '%, 0)'),
o && c.wrapper.transitionEnd(function () {
c.onMonthChangeEnd('next')
}),
c.params.animate || c.onMonthChangeEnd('next')
},
c.prevMonth = function (t) {
('undefined' == typeof t || 'object' == typeof t) && (t = '', c.params.animate || (t = 0));
var n = parseInt(c.months.eq(0).attr('data-month'), 10),
r = parseInt(c.months.eq(0).attr('data-year'), 10),
a = new Date(r, n + 1, - 1),
i = a.getTime(),
o = c.animating ? !1 : !0;
if (c.params.minDate && i < new Date(c.params.minDate).getTime()) return c.resetMonth();
if (c.monthsTranslate++, n === c.currentMonth) {
var s = 100 * - c.monthsTranslate * p,
l = e(c.monthHTML(i, 'prev')).transform('translate3d(' + (c.isH ? s : 0) + '%, ' + (c.isH ? 0 : s) + '%, 0)').addClass('picker-calendar-month-prev');
c.wrapper.prepend(l[0]),
c.months = c.wrapper.find('.picker-calendar-month'),
c.params.onMonthAdd && c.params.onMonthAdd(c, c.months.eq(0) [0])
}
c.animating = !0,
c.onMonthChangeStart('prev');
var u = 100 * c.monthsTranslate * p;
c.wrapper.transition(t).transform('translate3d(' + (c.isH ? u : 0) + '%, ' + (c.isH ? 0 : u) + '%, 0)'),
o && c.wrapper.transitionEnd(function () {
c.onMonthChangeEnd('prev')
}),
c.params.animate || c.onMonthChangeEnd('prev')
},
c.resetMonth = function (e) {
'undefined' == typeof e && (e = '');
var t = 100 * c.monthsTranslate * p;
c.wrapper.transition(e).transform('translate3d(' + (c.isH ? t : 0) + '%, ' + (c.isH ? 0 : t) + '%, 0)')
},
c.setYearMonth = function (e, t, n) {
'undefined' == typeof e && (e = c.currentYear),
'undefined' == typeof t && (t = c.currentMonth),
('undefined' == typeof n || 'object' == typeof n) && (n = '', c.params.animate || (n = 0));
var r;
if (r = e < c.currentYear ? new Date(e, t + 1, - 1).getTime()  : new Date(e, t).getTime(), c.params.maxDate && r > new Date(c.params.maxDate).getTime()) return !1;
if (c.params.minDate && r < new Date(c.params.minDate).getTime()) return !1;
var a = new Date(c.currentYear, c.currentMonth).getTime(),
i = r > a ? 'next' : 'prev',
o = c.monthHTML(new Date(e, t));
c.monthsTranslate = c.monthsTranslate || 0;
var s,
l,
u = c.monthsTranslate,
d = c.animating ? !1 : !0;
r > a ? (c.monthsTranslate--, c.animating || c.months.eq(c.months.length - 1).remove(), c.wrapper.append(o), c.months = c.wrapper.find('.picker-calendar-month'), s = 100 * - (u - 1) * p, c.months.eq(c.months.length - 1).transform('translate3d(' + (c.isH ? s : 0) + '%, ' + (c.isH ? 0 : s) + '%, 0)').addClass('picker-calendar-month-next'))  : (c.monthsTranslate++, c.animating || c.months.eq(0).remove(), c.wrapper.prepend(o), c.months = c.wrapper.find('.picker-calendar-month'), s = 100 * - (u + 1) * p, c.months.eq(0).transform('translate3d(' + (c.isH ? s : 0) + '%, ' + (c.isH ? 0 : s) + '%, 0)').addClass('picker-calendar-month-prev')),
c.params.onMonthAdd && c.params.onMonthAdd(c, 'next' === i ? c.months.eq(c.months.length - 1) [0] : c.months.eq(0) [0]),
c.animating = !0,
c.onMonthChangeStart(i),
l = 100 * c.monthsTranslate * p,
c.wrapper.transition(n).transform('translate3d(' + (c.isH ? l : 0) + '%, ' + (c.isH ? 0 : l) + '%, 0)'),
d && c.wrapper.transitionEnd(function () {
c.onMonthChangeEnd(i, !0)
}),
c.params.animate || c.onMonthChangeEnd(i)
},
c.nextYear = function () {
c.setYearMonth(c.currentYear + 1)
},
c.prevYear = function () {
c.setYearMonth(c.currentYear - 1)
},
c.layout = function () {
var e,
t = '',
n = '',
r = c.value && c.value.length ? c.value[0] : (new Date).setHours(0, 0, 0, 0),
a = c.monthHTML(r, 'prev'),
i = c.monthHTML(r),
o = c.monthHTML(r, 'next'),
s = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (a + i + o) + '</div></div>',
l = '';
if (c.params.weekHeader) {
for (e = 0; 7 > e; e++) {
var u = e + c.params.firstDay > 6 ? e - 7 + c.params.firstDay : e + c.params.firstDay,
d = c.params.dayNamesShort[u];
l += '<div class="picker-calendar-week-day ' + (c.params.weekendDays.indexOf(u) >= 0 ? 'picker-calendar-week-day-weekend' : '') + '"> ' + d + '</div>'
}
l = '<div class="picker-calendar-week-days">' + l + '</div>'
}
n = 'picker-modal picker-calendar ' + (c.params.cssClass || '');
var p = c.params.toolbar ? c.params.toolbarTemplate.replace(/{{closeText}}/g, c.params.toolbarCloseText)  : '';
c.params.toolbar && (p = c.params.toolbarTemplate.replace(/{{closeText}}/g, c.params.toolbarCloseText).replace(/{{monthPicker}}/g, c.params.monthPicker ? c.params.monthPickerTemplate : '').replace(/{{yearPicker}}/g, c.params.yearPicker ? c.params.yearPickerTemplate : '')),
t = '<div class="' + n + '">' + p + '<div class="picker-modal-inner">' + l + s + '</div></div>',
c.pickerHTML = t
},
c.params.input && (c.input = e(c.params.input), c.input.length > 0 && (c.params.inputReadOnly && c.input.prop('readOnly', !0), c.inline || c.input.on('click', o), c.params.inputReadOnly && c.input.on('focus mousedown', function (e) {
e.preventDefault()
}))),
c.inline || e('html').on('click', s),
c.opened = !1,
c.open = function () {
var t = r(),
n = !1;
c.opened || (c.value || c.params.value && (c.value = c.params.value, n = !0), c.layout(), t ? (c.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + c.pickerHTML + '</div></div>', c.popover = e.popover(c.pickerHTML, c.params.input, !0), c.container = e(c.popover).find('.picker-modal'), e(c.popover).on('close', function () {
l()
}))  : c.inline ? (c.container = e(c.pickerHTML), c.container.addClass('picker-modal-inline'), e(c.params.container).append(c.container))  : (c.container = e(e.pickerModal(c.pickerHTML)), e(c.container).on('close', function () {
l()
})), c.container[0].f7Calendar = c, c.wrapper = c.container.find('.picker-calendar-months-wrapper'), c.months = c.wrapper.find('.picker-calendar-month'), c.updateCurrentMonthYear(), c.monthsTranslate = 0, c.setMonthsTranslate(), c.initCalendarEvents(), n && c.updateValue()),
c.opened = !0,
c.initialized = !0,
c.params.onMonthAdd && c.months.each(function () {
c.params.onMonthAdd(c, this)
}),
c.params.onOpen && c.params.onOpen(c)
},
c.close = function () {
return c.opened && !c.inline ? a() ? void e.closeModal(c.popover)  : void e.closeModal(c.container)  : void 0
},
c.destroy = function () {
c.close(),
c.params.input && c.input.length > 0 && c.input.off('click focus', o),
e('html').off('click', s)
},
c.inline && c.open(),
c
};
e.fn.calendar = function (t) {
return this.each(function () {
var r = e(this);
if (r[0]) {
var a = {
};
'INPUT' === r[0].tagName.toUpperCase() ? a.input = r : a.container = r,
new n(e.extend(a, t))
}
})
},
e.initCalendar = function (t) {
var n = e(t ? t : document.body);
n.find('[data-toggle=\'date\']').each(function () {
e(this).calendar()
})
}
}(jQuery),
define('forale/calendar', function () {
}),
$.device = function (e) {
'use strict';
var t = {
},
n = navigator.userAgent,
r = n.match(/(Android);?[\s\/]+([\d.]+)?/),
a = n.match(/(iPad).*OS\s([\d_]+)/),
i = n.match(/(iPod)(.*OS\s([\d_]+))?/),
o = n.match(/Version\/([\d.]+).*Safari/),
s = !a && n.match(/(iPhone\sOS)\s([\d_]+)/),
l = n.match(/MicroMessenger/i);
if (t.ios = t.android = t.iphone = t.ipad = t.androidChrome = !1, l ? t.weixin = !0 : t.weixin = !1, o ? t.safari = !0 : t.safari = !1, r && (t.os = 'android', t.osVersion = r[2], t.android = !0, t.androidChrome = n.toLowerCase().indexOf('chrome') >= 0), (a || s || i) && (t.os = 'ios', t.ios = !0), s && !i && (t.osVersion = s[2].replace(/_/g, '.'), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, '.'), t.ipad = !0), i && (t.osVersion = i[3] ? i[3].replace(/_/g, '.')  : null, t.iphone = !0), t.ios && t.osVersion && n.indexOf('Version/') >= 0 && '10' === t.osVersion.split('.') [0] && (t.osVersion = n.toLowerCase().split('version/') [1].split(' ') [0]), t.webView = (s || a || i) && n.match(/.*AppleWebKit(?!.*Safari)/i), t.os && 'ios' === t.os) {
var c = t.osVersion.split('.');
t.minimalUi = !t.webView && (i || s) && (1 * c[0] === 7 ? 1 * c[1] >= 1 : 1 * c[0] > 7) && e('meta[name="viewport"]').length > 0 && e('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0
}
var u = e(window).width(),
d = e(window).height();
t.statusBar = !1,
t.webView && u * d === screen.width * screen.height ? t.statusBar = !0 : t.statusBar = !1;
var p = [
];
if (t.pixelRatio = window.devicePixelRatio || 1, p.push('pixel-ratio-' + Math.floor(t.pixelRatio)), t.pixelRatio >= 2 && p.push('retina'), t.os && (p.push(t.os, t.os + '-' + t.osVersion.split('.') [0], t.os + '-' + t.osVersion.replace(/\./g, '-')), 'ios' === t.os)) for (var f = parseInt(t.osVersion.split('.') [0], 10), h = f - 1; h >= 6; h--) p.push('ios-gt-' + h);
return t.statusBar ? p.push('with-statusbar-overlay')  : e('html').removeClass('with-statusbar-overlay'),
p.length > 0 && e('html').addClass(p.join(' ')),
t
}(jQuery),
define('forale/device', function () {
}),
+ function (e) {
'use strict';
var t = new Date,
n = function (e) {
for (var t = [
], n = 1; (e || 31) >= n; n++) t.push(10 > n ? '0' + n : n);
return t
},
r = function (e, t) {
var r = new Date(t, parseInt(e) + 1 - 1, 1),
a = new Date(r - 1);
return n(a.getDate())
},
a = function (e) {
return 10 > e ? '0' + e : e
},
i = '01 02 03 04 05 06 07 08 09 10 11 12'.split(' '),
o = function () {
for (var e = [
], t = 1950; 2030 >= t; t++) e.push(t);
return e
}(),
s = {
rotateEffect: !1,
value: [
t.getFullYear(),
a(t.getMonth() + 1),
t.getDate(),
t.getHours(),
a(t.getMinutes())
],
onChange: function (e, t, n) {
var a = r(e.cols[1].value, e.cols[0].value),
i = e.cols[2].value;
i > a.length && (i = a.length),
e.cols[2].setValue(i)
},
formatValue: function (e, t, n) {
return n[0] + '-' + t[1] + '-' + t[2] + ' ' + t[3] + ':' + t[4]
},
cols: [
{
values: o
},
{
values: i
},
{
values: n()
},
{
divider: !0,
content: '  '
},
{
values: function () {
for (var e = [
], t = 0; 23 >= t; t++) e.push(t);
return e
}()
},
{
divider: !0,
content: ':'
},
{
values: function () {
for (var e = [
], t = 0; 59 >= t; t++) e.push(10 > t ? '0' + t : t);
return e
}()
}
]
};
e.fn.datetimePicker = function (t) {
return this.each(function () {
if (this) {
var n = e.extend(s, t);
e(this).picker(n)
}
})
}
}(jQuery),
define('forale/datetime-picker', function () {
}),
+ function (e) {
'use strict';
var t = function (t) {
function n() {
var e = !1;
return l.params.convertToPopover || l.params.onlyInPopover ? (!l.inline && l.params.input && (e = l.params.onlyInPopover ? !0 : !1), e)  : e
}
function r() {
return l.opened && l.container && l.container.length > 0 && l.container.parents('.popover').length > 0 ? !0 : !1
}
function a() {
if (l.opened) for (var e = 0; e < l.cols.length; e++) l.cols[e].divider || (l.cols[e].calcSize(), l.cols[e].setValue(l.cols[e].value, 0, !1))
}
function i(e) {
if (e.preventDefault(), !l.opened && (l.open(), l.params.scrollToInput && !n())) {
var t = l.input.parents('.page-content');
if (0 === t.length) return;
var r,
a = parseInt(t.css('padding-top'), 10),
i = parseInt(t.css('padding-bottom'), 10),
o = t[0].offsetHeight - a - l.container.height(),
s = t[0].scrollHeight - a - l.container.height(),
c = l.input.offset().top - a + l.input[0].offsetHeight;
if (c > o) {
var u = t.scrollTop() + c - o;
u + o > s && (r = u + o - s + i, o === s && (r = l.container.height()), t.css({
'padding-bottom': r + 'px'
})),
t.scrollTop(u, 300)
}
}
}
function o(t) {
r() || (l.input && l.input.length > 0 ? t.target !== l.input[0] && 0 === e(t.target).parents('.picker-modal').length && l.close()  : 0 === e(t.target).parents('.picker-modal').length && l.close())
}
function s() {
l.opened = !1,
l.input && l.input.length > 0 && l.input.parents('.page-content').css({
'padding-bottom': ''
}),
l.params.onClose && l.params.onClose(l),
l.container.find('.picker-items-col').each(function () {
l.destroyPickerCol(this)
})
}
var l = this,
c = {
updateValuesOnMomentum: !1,
updateValuesOnTouchmove: !0,
rotateEffect: !1,
momentumRatio: 7,
freeMode: !1,
scrollToInput: !0,
inputReadOnly: !0,
convertToPopover: !0,
onlyInPopover: !1,
toolbar: !0,
toolbarCloseText: '确定',
toolbarTemplate: '<header class="bar bar-nav">          <button class="button button-link pull-right close-picker">确定</button>          <h1 class="title"></h1>          </header>'
};
t = t || {
};
for (var u in c) 'undefined' == typeof t[u] && (t[u] = c[u]);
l.params = t,
l.cols = [
],
l.initialized = !1,
l.inline = l.params.container ? !0 : !1;
var d = e.device.ios || navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0 && !e.device.android;
return l.setValue = function (e, t) {
for (var n = 0, r = 0; r < l.cols.length; r++) l.cols[r] && !l.cols[r].divider && (l.cols[r].setValue(e[n], t), n++)
},
l.updateValue = function () {
for (var t = [
], n = [
], r = [
], a = 0; a < l.cols.length; a++) l.cols[a].divider || (t.push(l.cols[a].value), n.push(l.cols[a].displayValue), l.cols[a].id && r.push(l.cols[a].id));
t.indexOf(void 0) >= 0 || (l.value = t, l.displayValue = n, l.id = r, l.params.onChange && l.params.onChange(l, l.value, l.displayValue), l.input && l.input.length > 0 && (r.length > 0 && e(l.input).attr('picker-ids', l.id.join(' ')), e(l.input).val(l.params.formatValue ? l.params.formatValue(l, l.value, l.displayValue)  : l.value.join(' ')), e(l.input).trigger('change')))
},
l.initPickerCol = function (t, n) {
function r() {
y = e.requestAnimationFrame(function () {
p.updateItems(void 0, void 0, 0),
r()
})
}
function a(t) {
w || b || (t.preventDefault(), b = !0, x = k = 'touchstart' === t.type ? t.originalEvent.targetTouches[0].pageY : t.pageY, T = (new Date).getTime(), A = !0, S = E = e.getTranslate(p.wrapper[0], 'y'))
}
function i(t) {
if (b) {
t.preventDefault(),
A = !1,
k = 'touchmove' === t.type ? t.originalEvent.targetTouches[0].pageY : t.pageY,
w || (e.cancelAnimationFrame(y), w = !0, S = E = e.getTranslate(p.wrapper[0], 'y'), p.wrapper.transition(0)),
t.preventDefault();
var n = k - x;
E = S + n,
M = void 0,
g > E && (E = g - Math.pow(g - E, 0.8), M = 'min'),
E > v && (E = v + Math.pow(E - v, 0.8), M = 'max'),
p.wrapper.transform('translate3d(0,' + E + 'px,0)'),
p.updateItems(void 0, E, 0, l.params.updateValuesOnTouchmove),
P = E - _ || E,
D = (new Date).getTime(),
_ = E
}
}
function o(t) {
if (!b || !w) return void (b = w = !1);
b = w = !1,
p.wrapper.transition(''),
M && ('min' === M ? p.wrapper.transform('translate3d(0,' + g + 'px,0)')  : p.wrapper.transform('translate3d(0,' + v + 'px,0)')),
C = (new Date).getTime();
var n,
a;
C - T > 300 ? a = E : (n = Math.abs(P / (C - D)), a = E + P * l.params.momentumRatio),
a = Math.max(Math.min(a, v), g);
var i = - Math.floor((a - v) / h);
l.params.freeMode || (a = - i * h + v),
p.wrapper.transform('translate3d(0,' + parseInt(a, 10) + 'px,0)'),
p.updateItems(i, a, '', !0),
l.params.updateValuesOnMomentum && (r(), p.wrapper.transitionEnd(function () {
e.cancelAnimationFrame(y)
})),
setTimeout(function () {
A = !0
}, 100)
}
function s(t) {
if (A) {
e.cancelAnimationFrame(y);
var n = e(this).attr('data-picker-value');
p.setValue(n)
}
}
var c = e(t),
u = c.index(),
p = l.cols[u];
if (!p.divider) {
p.container = c,
p.wrapper = p.container.find('.picker-items-col-wrapper'),
p.items = p.wrapper.find('.picker-item');
var f,
h,
m,
g,
v;
p.replaceValues = function (e, t) {
p.destroyEvents(),
p.values = e,
p.displayValues = t;
var n = l.columnHTML(p, !0);
p.wrapper.html(n),
p.items = p.wrapper.find('.picker-item'),
p.calcSize(),
p.setValue(p.values[0], 0, !0),
p.initEvents()
},
p.calcSize = function () {
l.params.rotateEffect && (p.container.removeClass('picker-items-col-absolute'), p.width || p.container.css({
width: ''
}));
var t,
n;
t = 0,
n = p.container[0].offsetHeight,
f = p.wrapper[0].offsetHeight,
h = p.items[0].offsetHeight,
m = h * p.items.length,
g = n / 2 - m + h / 2,
v = n / 2 - h / 2,
p.width && (t = p.width, parseInt(t, 10) === t && (t += 'px'), p.container.css({
width: t
})),
l.params.rotateEffect && (p.width || (p.items.each(function () {
var n = e(this);
n.css({
width: 'auto'
}),
t = Math.max(t, n[0].offsetWidth),
n.css({
width: ''
})
}), p.container.css({
width: t + 2 + 'px'
})), p.container.addClass('picker-items-col-absolute'))
},
p.calcSize(),
p.wrapper.transform('translate3d(0,' + v + 'px,0)').transition(0);
var y;
p.setValue = function (t, n, a) {
'undefined' == typeof n && (n = '');
var i;
if (i = 'object' == typeof t ? p.wrapper.find('.picker-item[data-picker-value="' + t.name + '"]').index()  : p.wrapper.find('.picker-item[data-picker-value="' + t + '"]').index(), 'undefined' != typeof i && - 1 !== i) {
var o = - i * h + v;
p.wrapper.transition(n),
p.wrapper.transform('translate3d(0,' + o + 'px,0)'),
l.params.updateValuesOnMomentum && p.activeIndex && p.activeIndex !== i && (e.cancelAnimationFrame(y), p.wrapper.transitionEnd(function () {
e.cancelAnimationFrame(y)
}), r()),
p.updateItems(i, o, n, a)
}
},
p.updateItems = function (t, n, r, a) {
'undefined' == typeof n && (n = e.getTranslate(p.wrapper[0], 'y')),
'undefined' == typeof t && (t = - Math.round((n - v) / h)),
0 > t && (t = 0),
t >= p.items.length && (t = p.items.length - 1);
var i = p.activeIndex;
p.activeIndex = t,
p.wrapper.find('.picker-selected').removeClass('picker-selected'),
l.params.rotateEffect && p.items.transition(r);
var o = p.items.eq(t).addClass('picker-selected').transform('');
if ((a || 'undefined' == typeof a) && (p.value = o.attr('data-picker-value'), p.id = o.attr('data-picker-id'), p.displayValue = p.displayValues ? p.displayValues[t] : p.value, i !== t && (p.onChange && p.onChange(l, p.value, p.displayValue), l.updateValue())), l.params.rotateEffect) {
(n - (Math.floor((n - v) / h) * h + v)) / h;
p.items.each(function () {
var t = e(this),
r = t.index() * h,
a = v - n,
i = r - a,
o = i / h,
s = Math.ceil(p.height / h / 2) + 1,
l = - 18 * o;
l > 180 && (l = 180),
- 180 > l && (l = - 180),
Math.abs(o) > s ? t.addClass('picker-item-far')  : t.removeClass('picker-item-far'),
t.transform('translate3d(0, ' + ( - n + v) + 'px, ' + (d ? - 110 : 0) + 'px) rotateX(' + l + 'deg)')
})
}
},
n && p.updateItems(0, v, 0);
var b,
w,
x,
k,
T,
C,
S,
M,
E,
_,
P,
D,
A = !0;
p.initEvents = function (t) {
var n = t ? 'off' : 'on';
p.container[n](e.touchEvents.start, a),
p.container[n](e.touchEvents.move, i),
p.container[n](e.touchEvents.end, o),
p.items[n]('click', s)
},
p.destroyEvents = function () {
p.initEvents(!0)
},
p.container[0].f7DestroyPickerCol = function () {
p.destroyEvents()
},
p.initEvents()
}
},
l.destroyPickerCol = function (t) {
t = e(t),
'f7DestroyPickerCol' in t[0] && t[0].f7DestroyPickerCol()
},
e(window).on('resize', a),
l.columnHTML = function (e, t) {
var n = '',
r = '';
if (e.divider) r += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? 'picker-items-col-' + e.textAlign : '') + ' ' + (e.cssClass || '') + '">' + e.content + '</div>';
 else {
for (var a = 0; a < e.values.length; a++) n += 'object' == typeof e.values[a] ? '<div class="picker-item" data-picker-id="' + e.values[a].id + '" data-picker-value="' + e.values[a].name + '">' + (e.displayValues ? e.displayValues[a].name : e.values[a].name) + '</div>' : '<div class="picker-item" data-picker-value="' + e.values[a] + '">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + '</div>';
r += '<div class="picker-items-col ' + (e.textAlign ? 'picker-items-col-' + e.textAlign : '') + ' ' + (e.cssClass || '') + '"><div class="picker-items-col-wrapper">' + n + '</div></div>'
}
return t ? n : r
},
l.layout = function () {
var e,
t = '',
n = '';
l.cols = [
];
var r = '';
for (e = 0; e < l.params.cols.length; e++) {
var a = l.params.cols[e];
r += l.columnHTML(l.params.cols[e]),
l.cols.push(a)
}
n = 'picker-modal picker-columns ' + (l.params.cssClass || '') + (l.params.rotateEffect ? ' picker-3d' : ''),
t = '<div class="' + n + '">' + (l.params.toolbar ? l.params.toolbarTemplate.replace(/{{closeText}}/g, l.params.toolbarCloseText)  : '') + '<div class="picker-modal-inner picker-items">' + r + '<div class="picker-center-highlight"></div></div></div>',
l.pickerHTML = t
},
l.params.input && (l.input = e(l.params.input), l.input.length > 0 && (l.params.inputReadOnly && l.input.prop('readOnly', !0), l.inline || l.input.on('click', i), l.params.inputReadOnly && l.input.on('focus mousedown', function (e) {
e.preventDefault()
}))),
l.inline || e('html').on('click', o),
l.opened = !1,
l.open = function () {
var t = n();
l.opened || (l.layout(), t ? (l.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + l.pickerHTML + '</div></div>', l.popover = e.popover(l.pickerHTML, l.params.input, !0), l.container = e(l.popover).find('.picker-modal'), e(l.popover).on('close', function () {
s()
}))  : l.inline ? (l.container = e(l.pickerHTML), l.container.addClass('picker-modal-inline'), e(l.params.container).append(l.container))  : (l.container = e(e.pickerModal(l.pickerHTML)), e(l.container).on('close', function () {
s()
})), l.container[0].f7Picker = l, l.container.find('.picker-items-col').each(function () {
var e = !0;
(!l.initialized && l.params.value || l.initialized && l.value) && (e = !1),
l.initPickerCol(this, e);
}), l.initialized ? l.value && l.setValue(l.value, 0)  : l.params.value && l.setValue(l.params.value, 0)),
l.opened = !0,
l.initialized = !0,
l.params.onOpen && l.params.onOpen(l)
},
l.close = function () {
return l.opened && !l.inline ? r() ? void e.closeModal(l.popover)  : void e.closeModal(l.container)  : void 0
},
l.destroy = function () {
l.close(),
l.params.input && l.input.length > 0 && l.input.off('click focus', i),
e('html').off('click', o),
e(window).off('resize', a)
},
l.inline && l.open(),
l
};
e(document).on('click', '.close-picker', function () {
var t = e('.picker-modal.modal-in');
t.length > 0 ? e.closeModal(t)  : (t = e('.popover.modal-in .picker-modal'), t.length > 0 && e.closeModal(t.parents('.popover')))
}),
e.fn.picker = function (n) {
var r = arguments;
return this.each(function () {
if (this) {
var a = e(this),
i = a.data('picker');
if (!i) {
var o = e.extend({
input: this
}, n);
i = new t(o),
a.data('picker', i)
}
'string' == typeof n && i[n].apply(i, Array.prototype.slice.call(r, 1))
}
})
}
}(jQuery),
define('forale/picker', function () {
}),
function (e) {
'use strict';
[
'width',
'height'
].forEach(function (t) {
var n = t.replace(/./, function (e) {
return e[0].toUpperCase()
});
e.fn['outer' + n] = function (e) {
var n = this;
if (n) {
var r = n[t](),
a = {
width: [
'left',
'right'
],
height: [
'top',
'bottom'
]
};
return a[t].forEach(function (t) {
e && (r += parseInt(n.css('margin-' + t), 10))
}),
r
}
return null
}
}),
e.support = function () {
var e = {
touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
};
return e
}(),
e.touchEvents = {
start: e.support.touch ? 'touchstart' : 'mousedown',
move: e.support.touch ? 'touchmove' : 'mousemove',
end: e.support.touch ? 'touchend' : 'mouseup'
},
e.getTranslate = function (e, t) {
var n,
r,
a,
i;
return 'undefined' == typeof t && (t = 'x'),
a = window.getComputedStyle(e, null),
window.WebKitCSSMatrix ? i = new WebKitCSSMatrix('none' === a.webkitTransform ? '' : a.webkitTransform)  : (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'), n = i.toString().split(',')),
'x' === t && (r = window.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12])  : parseFloat(n[4])),
'y' === t && (r = window.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13])  : parseFloat(n[5])),
r || 0
},
e.requestAnimationFrame = function (e) {
return window.requestAnimationFrame ? window.requestAnimationFrame(e)  : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(e)  : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(e)  : window.setTimeout(e, 1000 / 60)
},
e.cancelAnimationFrame = function (e) {
return window.cancelAnimationFrame ? window.cancelAnimationFrame(e)  : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e)  : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e)  : window.clearTimeout(e)
},
e.fn.transitionEnd = function (e) {
function t(i) {
if (i.target === this) for (e.call(this, i), n = 0; n < r.length; n++) a.off(r[n], t)
}
var n,
r = [
'webkitTransitionEnd',
'transitionend',
'oTransitionEnd',
'MSTransitionEnd',
'msTransitionEnd'
],
a = this;
if (e) for (n = 0; n < r.length; n++) a.on(r[n], t);
return this
},
e.fn.dataset = function () {
var t = this[0];
if (t) {
var n = {
};
if (t.dataset) for (var r in t.dataset) n[r] = t.dataset[r];
 else for (var a = 0; a < t.attributes.length; a++) {
var i = t.attributes[a];
i.name.indexOf('data-') >= 0 && (n[e.toCamelCase(i.name.split('data-') [1])] = i.value)
}
for (var o in n) 'false' === n[o] ? n[o] = !1 : 'true' === n[o] ? n[o] = !0 : parseFloat(n[o]) === 1 * n[o] && (n[o] = 1 * n[o]);
return n
}
},
e.fn.data = function (e, t) {
if ('undefined' != typeof t) {
for (var n = 0; n < this.length; n++) {
var r = this[n];
r.smElementDataStorage || (r.smElementDataStorage = {
}),
r.smElementDataStorage[e] = t
}
return this
}
if (this[0] && this[0].getAttribute) {
var a = this[0].getAttribute('data-' + e);
return a ? a : this[0].smElementDataStorage && e in this[0].smElementDataStorage ? this[0].smElementDataStorage[e] : void 0
}
},
e.fn.animationEnd = function (e) {
function t(i) {
for (e(i), n = 0; n < r.length; n++) a.off(r[n], t)
}
var n,
r = [
'webkitAnimationEnd',
'OAnimationEnd',
'MSAnimationEnd',
'animationend'
],
a = this;
if (e) for (n = 0; n < r.length; n++) a.on(r[n], t);
return this
},
e.fn.transition = function (e) {
'string' != typeof e && (e += 'ms');
for (var t = 0; t < this.length; t++) {
var n = this[t].style;
n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
}
return this
},
e.fn.transform = function (e) {
for (var t = 0; t < this.length; t++) {
var n = this[t].style;
n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
}
return this
},
e.fn.prevAll = function (t) {
var n = [
],
r = this[0];
if (!r) return e([]);
for (; r.previousElementSibling; ) {
var a = r.previousElementSibling;
t ? e(a).is(t) && n.push(a)  : n.push(a),
r = a
}
return e(n)
},
e.fn.nextAll = function (t) {
var n = [
],
r = this[0];
if (!r) return e([]);
for (; r.nextElementSibling; ) {
var a = r.nextElementSibling;
t ? e(a).is(t) && n.push(a)  : n.push(a),
r = a
}
return e(n)
},
e.fn.show = function () {
function e(e) {
var n,
r;
return t[e] || (n = document.createElement(e), document.body.appendChild(n), r = getComputedStyle(n, '').getPropertyValue('display'), n.parentNode.removeChild(n), 'none' === r && (r = 'block'), t[e] = r),
t[e]
}
var t = {
};
return this.each(function () {
'none' === this.style.display && (this.style.display = ''),
'none' === getComputedStyle(this, '').getPropertyValue('display'),
this.style.display = e(this.nodeName)
})
}
}(jQuery),
define('forale/zepto-adapter', function () {
});
var defaults = {
autoInit: !1,
showPageLoadingIndicator: !0,
pushjs: !0,
swipePanel: 'left',
swipePanelOnlyClose: !1,
pushAnimationDuration: 400
};
$.smConfig = $.extend(defaults, $.config),
+ function (e) {
'use strict';
function t() {
var e = r.map(function (e) {
return e
}),
t = i(r[0]),
a = i(r[0].sub[0]) || [
],
l = e[0].name,
c = t[0].name;
a[0].name;
n = {
cssClass: 'city-picker',
rotateEffect: !1,
onChange: function (e, t, n) {
var r,
a = e.cols[0].value;
if (a !== l) {
var i = o(a);
r = i[0].name;
var u = s(a, r),
d = [
],
p = [
];
for (var f in i) d.push(i[f].name);
e.cols[1].replaceValues(i);
for (var h in u) p.push(u[h].name);
return e.cols[2].replaceValues(u),
l = a,
c = r,
void e.updateValue()
}
r = e.cols[1].value,
r !== c && (e.cols[2].replaceValues(s(a, r)), c = r, e.updateValue())
},
cols: [
{
values: e,
cssClass: 'col-province'
},
{
values: t,
cssClass: 'col-city'
},
{
values: a,
cssClass: 'col-district'
}
]
}
}
var n,
r,
a = function (e) {
for (var t = [
], n = 0; n < e.length; n++) {
var r = e[n];
'0' !== r.id && t.push(r)
}
return t.length ? t : [
''
]
},
i = function (e) {
return e.sub ? a(e.sub)  : [
''
]
},
o = function (e) {
for (var t = 0; t < r.length; t++) if (r[t].name === e) return i(r[t]);
return ['']
},
s = function (e, t) {
for (var n = 0; n < r.length; n++) if (r[n].name === e) for (var a = 0; a < r[n].sub.length; a++) if (r[n].sub[a].name === t) return i(r[n].sub[a]);
return ['']
};
e.fn.cityPicker = function (a, i) {
return r = e.smConfig.rawCitiesData = a,
t(),
this.each(function () {
if (this) {
var t = e.extend(n, i),
r = e(this).val();
r && (t.value = r.split(' '), t.value[0] && (t.cols[1].values = o(t.value[0])), t.value[1] ? t.cols[2].values = s(t.value[0], t.value[1])  : t.cols[2].values = s(t.value[0], t.cols[1].values[0])),
e(this).picker(t)
}
})
}
}(jQuery),
define('forale/city-picker', function () {
}),
define('forale', [
'forale/head',
'forale/modal',
'forale/panels',
'forale/loading',
'forale/scroller',
'forale/validity',
'forale/calendar',
'forale/device',
'forale/datetime-picker',
'forale/picker',
'forale/zepto-adapter',
'forale/city-picker'
], function () {
}),
function (e, t, n, r) {
var a = e(t);
e.fn.lazyload = function (i) {
function o() {
var t = 0;
l.each(function () {
var n = e(this);
if (!c.skip_invisible || n.is(':visible')) if (e.abovethetop(this, c) || e.leftofbegin(this, c));
 else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
if (++t > c.failure_limit) return !1
} else n.trigger('appear'),
t = 0
})
}
var s,
l = this,
c = {
threshold: 1000,
failure_limit: 0,
event: 'scroll',
effect: 'show',
container: t,
data_attribute: 'original',
skip_invisible: !1,
appear: null,
load: null,
placeholder: '/image/loading_img.gif'
};
return i && (r !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), r !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(c, i)),
s = c.container === r || c.container === t ? a : e(c.container),
0 === c.event.indexOf('scroll') && s.bind(c.event, function () {
return o()
}),
this.each(function () {
var t = this,
n = e(t);
t.loaded = !1,
(n.attr('src') === r || n.attr('src') === !1) && n.is('img') && n.attr('src', c.placeholder),
n.one('appear', function () {
if (!this.loaded) {
if (c.appear) {
var r = l.length;
c.appear.call(t, r, c)
}
e('<img />').bind('load', function () {
var r = n.attr('data-' + c.data_attribute);
n.hide(),
n.is('img') ? n.attr('src', r)  : n.css('background-image', 'url(\'' + r + '\')'),
n[c.effect](c.effect_speed),
t.loaded = !0;
var a = e.grep(l, function (e) {
return !e.loaded
});
if (l = e(a), c.load) {
var i = l.length;
c.load.call(t, i, c)
}
}).attr('src', n.attr('data-' + c.data_attribute))
}
}),
0 !== c.event.indexOf('scroll') && n.bind(c.event, function () {
t.loaded || n.trigger('appear')
})
}),
a.bind('resize', function () {
o()
}),
/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind('pageshow', function (t) {
t.originalEvent && t.originalEvent.persisted && l.each(function () {
e(this).trigger('appear')
})
}),
e(n).ready(function () {
o()
}),
this
},
e.belowthefold = function (n, i) {
var o;
return o = i.container === r || i.container === t ? (t.innerHeight ? t.innerHeight : a.height()) + a.scrollTop()  : e(i.container).offset().top + e(i.container).height(),
o <= e(n).offset().top - i.threshold
},
e.rightoffold = function (n, i) {
var o;
return o = i.container === r || i.container === t ? a.width() + a.scrollLeft()  : e(i.container).offset().left + e(i.container).width(),
o <= e(n).offset().left - i.threshold
},
e.abovethetop = function (n, i) {
var o;
return o = i.container === r || i.container === t ? a.scrollTop()  : e(i.container).offset().top,
o >= e(n).offset().top + i.threshold + e(n).height()
},
e.leftofbegin = function (n, i) {
var o;
return o = i.container === r || i.container === t ? a.scrollLeft()  : e(i.container).offset().left,
o >= e(n).offset().left + i.threshold + e(n).width()
},
e.inviewport = function (t, n) {
return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
},
e.extend(e.expr[':'], {
'below-the-fold': function (t) {
return e.belowthefold(t, {
threshold: 0
})
},
'above-the-top': function (t) {
return !e.belowthefold(t, {
threshold: 0
})
},
'right-of-screen': function (t) {
return e.rightoffold(t, {
threshold: 0
})
},
'left-of-screen': function (t) {
return !e.rightoffold(t, {
threshold: 0
})
},
'in-viewport': function (t) {
return e.inviewport(t, {
threshold: 0
})
},
'above-the-fold': function (t) {
return !e.belowthefold(t, {
threshold: 0
})
},
'right-of-fold': function (t) {
return e.rightoffold(t, {
threshold: 0
})
},
'left-of-fold': function (t) {
return !e.rightoffold(t, {
threshold: 0
})
}
})
}(jQuery, window, document),
define('lazyLoad', [
'jquery'
], function () {
}),
function (e, t) {
'use strict';
'function' == typeof define && define.amd ? define('Swiper', [
'jquery'
], t)  : 'object' == typeof exports ? module.exports = t(require('jquery'))  : e.Swiper = t(e.jQuery)
}(this, function (e) {
'use strict';
function t(e) {
e.fn.swiper = function (t) {
var r;
return e(this).each(function () {
var e = new n(this, t);
r || (r = e)
}),
r
}
}
var n = function (t, r) {
function a() {
return 'horizontal' === v.params.direction
}
function i(e) {
return Math.floor(e)
}
function o() {
v.autoplayTimeoutId = setTimeout(function () {
v.params.loop ? (v.fixLoop(), v._slideNext())  : v.isEnd ? r.autoplayStopOnLast ? v.stopAutoplay()  : v._slideTo(0)  : v._slideNext()
}, v.params.autoplay)
}
function s(t, n) {
var r = e(t.target);
if (!r.is(n)) if ('string' == typeof n) r = r.parents(n);
 else if (n.nodeType) {
var a;
return r.parents().each(function (e, t) {
t === n && (a = n)
}),
a ? n : void 0
}
if (0 !== r.length) return r[0]
}
function l(e, t) {
t = t || {
};
var n = window.MutationObserver || window.WebkitMutationObserver,
r = new n(function (e) {
e.forEach(function (e) {
v.onResize(!0),
v.emit('onObserverUpdate', v, e)
})
});
r.observe(e, {
attributes: 'undefined' == typeof t.attributes ? !0 : t.attributes,
childList: 'undefined' == typeof t.childList ? !0 : t.childList,
characterData: 'undefined' == typeof t.characterData ? !0 : t.characterData
}),
v.observers.push(r)
}
function c(e) {
e.originalEvent && (e = e.originalEvent);
var t = e.keyCode || e.charCode;
if (!v.params.allowSwipeToNext && (a() && 39 === t || !a() && 40 === t)) return !1;
if (!v.params.allowSwipeToPrev && (a() && 37 === t || !a() && 38 === t)) return !1;
if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ('input' === document.activeElement.nodeName.toLowerCase() || 'textarea' === document.activeElement.nodeName.toLowerCase()))) {
if (37 === t || 39 === t || 38 === t || 40 === t) {
var n = !1;
if (v.container.parents('.swiper-slide').length > 0 && 0 === v.container.parents('.swiper-slide-active').length) return;
var r = {
left: window.pageXOffset,
top: window.pageYOffset
},
i = window.innerWidth,
o = window.innerHeight,
s = v.container.offset();
v.rtl && (s.left = s.left - v.container[0].scrollLeft);
for (var l = [
[s.left,
s.top],
[
s.left + v.width,
s.top
],
[
s.left,
s.top + v.height
],
[
s.left + v.width,
s.top + v.height
]
], c = 0; c < l.length; c++) {
var u = l[c];
u[0] >= r.left && u[0] <= r.left + i && u[1] >= r.top && u[1] <= r.top + o && (n = !0)
}
if (!n) return
}
a() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), (39 === t && !v.rtl || 37 === t && v.rtl) && v.slideNext(), (37 === t && !v.rtl || 39 === t && v.rtl) && v.slidePrev())  : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), 40 === t && v.slideNext(), 38 === t && v.slidePrev())
}
}
function u(e) {
e.originalEvent && (e = e.originalEvent);
var t = v.mousewheel.event,
n = 0;
if (e.detail) n = - e.detail;
 else if ('mousewheel' === t) if (v.params.mousewheelForceToAxis) if (a()) {
if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
n = e.wheelDeltaX
} else {
if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
n = e.wheelDeltaY
} else n = e.wheelDelta;
 else if ('DOMMouseScroll' === t) n = - e.detail;
 else if ('wheel' === t) if (v.params.mousewheelForceToAxis) if (a()) {
if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
n = - e.deltaX
} else {
if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
n = - e.deltaY
} else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
if (v.params.mousewheelInvert && (n = - n), v.params.freeMode) {
var r = v.getWrapperTranslate() + n * v.params.mousewheelSensitivity;
if (r > v.minTranslate() && (r = v.minTranslate()), r < v.maxTranslate() && (r = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(r), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function () {
v.slideReset()
}, 300)), 0 === r || r === v.maxTranslate()) return
} else {
if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60) if (0 > n) if (v.isEnd && !v.params.loop || v.animating) {
if (v.params.mousewheelReleaseOnEdges) return !0
} else v.slideNext();
 else if (v.isBeginning && !v.params.loop || v.animating) {
if (v.params.mousewheelReleaseOnEdges) return !0
} else v.slidePrev();
v.mousewheel.lastScrollTime = (new window.Date).getTime()
}
return v.params.autoplay && v.stopAutoplay(),
e.preventDefault ? e.preventDefault()  : e.returnValue = !1,
!1
}
function d(t, n) {
t = e(t);
var r,
i,
o;
r = t.attr('data-swiper-parallax') || '0',
i = t.attr('data-swiper-parallax-x'),
o = t.attr('data-swiper-parallax-y'),
i || o ? (i = i || '0', o = o || '0')  : a() ? (i = r, o = '0')  : (o = r, i = '0'),
i = i.indexOf('%') >= 0 ? parseInt(i, 10) * n + '%' : i * n + 'px',
o = o.indexOf('%') >= 0 ? parseInt(o, 10) * n + '%' : o * n + 'px',
t.transform('translate3d(' + i + ', ' + o + ',0px)')
}
function p(e) {
return 0 !== e.indexOf('on') && (e = e[0] !== e[0].toUpperCase() ? 'on' + e[0].toUpperCase() + e.substring(1)  : 'on' + e),
e
}
if (!(this instanceof n)) return new n(t, r);
var f = {
direction: 'horizontal',
touchEventsTarget: 'container',
initialSlide: 0,
speed: 300,
autoplay: !1,
autoplayDisableOnInteraction: !0,
iOSEdgeSwipeDetection: !1,
iOSEdgeSwipeThreshold: 20,
freeMode: !1,
freeModeMomentum: !0,
freeModeMomentumRatio: 1,
freeModeMomentumBounce: !0,
freeModeMomentumBounceRatio: 1,
freeModeSticky: !1,
freeModeMinimumVelocity: 0.02,
setWrapperSize: !1,
virtualTranslate: !1,
effect: 'slide',
coverflow: {
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: !0
},
cube: {
slideShadows: !0,
shadow: !0,
shadowOffset: 20,
shadowScale: 0.94
},
fade: {
crossFade: !1
},
parallax: !1,
scrollbar: null,
scrollbarHide: !0,
scrollbarDraggable: !1,
scrollbarSnapOnRelease: !1,
keyboardControl: !1,
mousewheelControl: !1,
mousewheelReleaseOnEdges: !1,
mousewheelInvert: !1,
mousewheelForceToAxis: !1,
mousewheelSensitivity: 1,
hashnav: !1,
spaceBetween: 0,
slidesPerView: 1,
slidesPerColumn: 1,
slidesPerColumnFill: 'column',
slidesPerGroup: 1,
centeredSlides: !1,
slidesOffsetBefore: 0,
slidesOffsetAfter: 0,
roundLengths: !1,
touchRatio: 1,
touchAngle: 45,
simulateTouch: !0,
shortSwipes: !0,
longSwipes: !0,
longSwipesRatio: 0.5,
longSwipesMs: 300,
followFinger: !0,
onlyExternal: !1,
threshold: 0,
touchMoveStopPropagation: !0,
pagination: null,
paginationElement: 'span',
paginationClickable: !1,
paginationHide: !1,
paginationBulletRender: null,
resistance: !0,
resistanceRatio: 0.85,
nextButton: null,
prevButton: null,
watchSlidesProgress: !1,
watchSlidesVisibility: !1,
grabCursor: !1,
preventClicks: !0,
preventClicksPropagation: !0,
slideToClickedSlide: !1,
lazyLoading: !1,
lazyLoadingInPrevNext: !1,
lazyLoadingOnTransitionStart: !1,
preloadImages: !0,
updateOnImagesReady: !0,
loop: !1,
loopAdditionalSlides: 0,
loopedSlides: null,
control: void 0,
controlInverse: !1,
controlBy: 'slide',
allowSwipeToPrev: !0,
allowSwipeToNext: !0,
swipeHandler: null,
noSwiping: !0,
noSwipingClass: 'swiper-no-swiping',
slideClass: 'swiper-slide',
slideActiveClass: 'swiper-slide-active',
slideVisibleClass: 'swiper-slide-visible',
slideDuplicateClass: 'swiper-slide-duplicate',
slideNextClass: 'swiper-slide-next',
slidePrevClass: 'swiper-slide-prev',
wrapperClass: 'swiper-wrapper',
bulletClass: 'swiper-pagination-bullet',
bulletActiveClass: 'swiper-pagination-bullet-active',
buttonDisabledClass: 'swiper-button-disabled',
paginationHiddenClass: 'swiper-pagination-hidden',
observer: !1,
observeParents: !1,
a11y: !1,
prevSlideMessage: 'Previous slide',
nextSlideMessage: 'Next slide',
firstSlideMessage: 'This is the first slide',
lastSlideMessage: 'This is the last slide',
paginationBulletMessage: 'Go to slide {{index}}',
runCallbacksOnInit: !0
},
h = r && r.virtualTranslate;
r = r || {
};
for (var m in f) if ('undefined' == typeof r[m]) r[m] = f[m];
 else if ('object' == typeof r[m]) for (var g in f[m]) 'undefined' == typeof r[m][g] && (r[m][g] = f[m][g]);
var v = this;
if (v.params = r, v.classNames = [
], 'undefined' != typeof e && 'undefined' != typeof Dom7 && (e = Dom7), ('undefined' != typeof e || (e = 'undefined' == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = e, v.container = e(t), 0 !== v.container.length)) {
if (v.container.length > 1) return void v.container.each(function () {
new n(this, r)
});
v.container[0].swiper = v,
v.container.data('swiper', v),
v.classNames.push('swiper-container-' + v.params.direction),
v.params.freeMode && v.classNames.push('swiper-container-free-mode'),
v.support.flexbox || (v.classNames.push('swiper-container-no-flexbox'), v.params.slidesPerColumn = 1),
(v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0),
[
'cube',
'coverflow'
].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push('swiper-container-3d'))  : v.params.effect = 'slide'),
'slide' !== v.params.effect && v.classNames.push('swiper-container-' + v.params.effect),
'cube' === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1),
'fade' === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, 'undefined' == typeof h && (v.params.virtualTranslate = !0)),
v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1),
v.wrapper = v.container.children('.' + v.params.wrapperClass),
v.params.pagination && (v.paginationContainer = e(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass('swiper-pagination-clickable')),
v.rtl = a() && ('rtl' === v.container[0].dir.toLowerCase() || 'rtl' === v.container.css('direction')),
v.rtl && v.classNames.push('swiper-container-rtl'),
v.rtl && (v.wrongRTL = '-webkit-box' === v.wrapper.css('display')),
v.params.slidesPerColumn > 1 && v.classNames.push('swiper-container-multirow'),
v.device.android && v.classNames.push('swiper-container-android'),
v.container.addClass(v.classNames.join(' ')),
v.translate = 0,
v.progress = 0,
v.velocity = 0,
v.lockSwipeToNext = function () {
v.params.allowSwipeToNext = !1
},
v.lockSwipeToPrev = function () {
v.params.allowSwipeToPrev = !1
},
v.lockSwipes = function () {
v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
},
v.unlockSwipeToNext = function () {
v.params.allowSwipeToNext = !0
},
v.unlockSwipeToPrev = function () {
v.params.allowSwipeToPrev = !0
},
v.unlockSwipes = function () {
v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
},
v.params.grabCursor && (v.container[0].style.cursor = 'move', v.container[0].style.cursor = '-webkit-grab', v.container[0].style.cursor = '-moz-grab', v.container[0].style.cursor = 'grab'),
v.imagesToLoad = [
],
v.imagesLoaded = 0,
v.loadImage = function (e, t, n, r, a) {
function i() {
a && a()
}
var o;
e.complete && r ? i()  : t ? (o = new window.Image, o.onload = i, o.onerror = i, n && (o.srcset = n), t && (o.src = t))  : i()
},
v.preloadImages = function () {
function e() {
'undefined' != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit('onImagesReady', v)))
}
v.imagesToLoad = v.container.find('img');
for (var t = 0; t < v.imagesToLoad.length; t++) v.loadImage(v.imagesToLoad[t], v.imagesToLoad[t].currentSrc || v.imagesToLoad[t].getAttribute('src'), v.imagesToLoad[t].srcset || v.imagesToLoad[t].getAttribute('srcset'), !0, e)
},
v.autoplayTimeoutId = void 0,
v.autoplaying = !1,
v.autoplayPaused = !1,
v.startAutoplay = function () {
return 'undefined' != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit('onAutoplayStart', v), void o())  : !1
},
v.stopAutoplay = function (e) {
v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit('onAutoplayStop', v))
},
v.pauseAutoplay = function (e) {
v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, o())  : v.wrapper.transitionEnd(function () {
v && (v.autoplayPaused = !1, v.autoplaying ? o()  : v.stopAutoplay())
}))
},
v.minTranslate = function () {
return - v.snapGrid[0]
},
v.maxTranslate = function () {
return - v.snapGrid[v.snapGrid.length - 1]
},
v.updateContainerSize = function () {
var e,
t;
e = 'undefined' != typeof v.params.width ? v.params.width : v.container[0].clientWidth,
t = 'undefined' != typeof v.params.height ? v.params.height : v.container[0].clientHeight,
0 === e && a() || 0 === t && !a() || (e = e - parseInt(v.container.css('padding-left'), 10) - parseInt(v.container.css('padding-right'), 10), t = t - parseInt(v.container.css('padding-top'), 10) - parseInt(v.container.css('padding-bottom'), 10), v.width = e, v.height = t, v.size = a() ? v.width : v.height)
},
v.updateSlidesSize = function () {
v.slides = v.wrapper.children('.' + v.params.slideClass),
v.snapGrid = [
],
v.slidesGrid = [
],
v.slidesSizesGrid = [
];
var e,
t = v.params.spaceBetween,
n = - v.params.slidesOffsetBefore,
r = 0,
o = 0;
'string' == typeof t && t.indexOf('%') >= 0 && (t = parseFloat(t.replace('%', '')) / 100 * v.size),
v.virtualSize = - t,
v.rtl ? v.slides.css({
marginLeft: '',
marginTop: ''
})  : v.slides.css({
marginRight: '',
marginBottom: ''
});
var s;
v.params.slidesPerColumn > 1 && (s = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn, 'auto' !== v.params.slidesPerView && 'row' === v.params.slidesPerColumnFill && (s = Math.max(s, v.params.slidesPerView * v.params.slidesPerColumn)));
var l,
c = v.params.slidesPerColumn,
u = s / c,
d = u - (v.params.slidesPerColumn * u - v.slides.length);
for (e = 0; e < v.slides.length; e++) {
l = 0;
var p = v.slides.eq(e);
if (v.params.slidesPerColumn > 1) {
var f,
h,
m;
'column' === v.params.slidesPerColumnFill ? (h = Math.floor(e / c), m = e - h * c, (h > d || h === d && m === c - 1) && ++m >= c && (m = 0, h++), f = h + m * s / c, p.css({
'-webkit-box-ordinal-group': f,
'-moz-box-ordinal-group': f,
'-ms-flex-order': f,
'-webkit-order': f,
order: f
}))  : (m = Math.floor(e / u), h = e - m * u),
p.css({
'margin-top': 0 !== m && v.params.spaceBetween && v.params.spaceBetween + 'px'
}).attr('data-swiper-column', h).attr('data-swiper-row', m)
}
'none' !== p.css('display') && ('auto' === v.params.slidesPerView ? (l = a() ? p.outerWidth(!0)  : p.outerHeight(!0), v.params.roundLengths && (l = i(l)))  : (l = (v.size - (v.params.slidesPerView - 1) * t) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), a() ? v.slides[e].style.width = l + 'px' : v.slides[e].style.height = l + 'px'), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (n = n + l / 2 + r / 2 + t, 0 === e && (n = n - v.size / 2 - t), Math.abs(n) < 0.001 && (n = 0), o % v.params.slidesPerGroup === 0 && v.snapGrid.push(n), v.slidesGrid.push(n))  : (o % v.params.slidesPerGroup === 0 && v.snapGrid.push(n), v.slidesGrid.push(n), n = n + l + t), v.virtualSize += l + t, r = l, o++)
}
v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
var g;
if (v.rtl && v.wrongRTL && ('slide' === v.params.effect || 'coverflow' === v.params.effect) && v.wrapper.css({
width: v.virtualSize + v.params.spaceBetween + 'px'
}), (!v.support.flexbox || v.params.setWrapperSize) && (a() ? v.wrapper.css({
width: v.virtualSize + v.params.spaceBetween + 'px'
})  : v.wrapper.css({
height: v.virtualSize + v.params.spaceBetween + 'px'
})), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * s, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
width: v.virtualSize + v.params.spaceBetween + 'px'
}), v.params.centeredSlides)) {
for (g = [
], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
v.snapGrid = g
}
if (!v.params.centeredSlides) {
for (g = [
], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
v.snapGrid = g,
Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
}
0 === v.snapGrid.length && (v.snapGrid = [
0
]),
0 !== v.params.spaceBetween && (a() ? v.rtl ? v.slides.css({
marginLeft: t + 'px'
})  : v.slides.css({
marginRight: t + 'px'
})  : v.slides.css({
marginBottom: t + 'px'
})),
v.params.watchSlidesProgress && v.updateSlidesOffset()
},
v.updateSlidesOffset = function () {
for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = a() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
},
v.updateSlidesProgress = function (e) {
if ('undefined' == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
'undefined' == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
var t = - e;
v.rtl && (t = e);
v.container[0].getBoundingClientRect(),
a() ? 'left' : 'top',
a() ? 'right' : 'bottom';
v.slides.removeClass(v.params.slideVisibleClass);
for (var n = 0; n < v.slides.length; n++) {
var r = v.slides[n],
i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + v.params.spaceBetween);
if (v.params.watchSlidesVisibility) {
var o = - (t - r.swiperSlideOffset),
s = o + v.slidesSizesGrid[n],
l = o >= 0 && o < v.size || s > 0 && s <= v.size || 0 >= o && s >= v.size;
l && v.slides.eq(n).addClass(v.params.slideVisibleClass)
}
r.progress = v.rtl ? - i : i
}
}
},
v.updateProgress = function (e) {
'undefined' == typeof e && (e = v.translate || 0);
var t = v.maxTranslate() - v.minTranslate();
0 === t ? (v.progress = 0, v.isBeginning = v.isEnd = !0)  : (v.progress = (e - v.minTranslate()) / t, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1),
v.isBeginning && v.emit('onReachBeginning', v),
v.isEnd && v.emit('onReachEnd', v),
v.params.watchSlidesProgress && v.updateSlidesProgress(e),
v.emit('onProgress', v, v.progress)
},
v.updateActiveIndex = function () {
var e,
t,
n,
r = v.rtl ? v.translate : - v.translate;
for (t = 0; t < v.slidesGrid.length; t++) 'undefined' != typeof v.slidesGrid[t + 1] ? r >= v.slidesGrid[t] && r < v.slidesGrid[t + 1] - (v.slidesGrid[t + 1] - v.slidesGrid[t]) / 2 ? e = t : r >= v.slidesGrid[t] && r < v.slidesGrid[t + 1] && (e = t + 1)  : r >= v.slidesGrid[t] && (e = t);
(0 > e || 'undefined' == typeof e) && (e = 0),
n = Math.floor(e / v.params.slidesPerGroup),
n >= v.snapGrid.length && (n = v.snapGrid.length - 1),
e !== v.activeIndex && (v.snapIndex = n, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
},
v.updateClasses = function () {
v.slides.removeClass(v.params.slideActiveClass + ' ' + v.params.slideNextClass + ' ' + v.params.slidePrevClass);
var t = v.slides.eq(v.activeIndex);
if (t.addClass(v.params.slideActiveClass), t.next('.' + v.params.slideClass).addClass(v.params.slideNextClass), t.prev('.' + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
v.bullets.removeClass(v.params.bulletActiveClass);
var n;
v.params.loop ? (n = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, n > v.slides.length - 1 - 2 * v.loopedSlides && (n -= v.slides.length - 2 * v.loopedSlides), n > v.bullets.length - 1 && (n -= v.bullets.length))  : n = 'undefined' != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0,
v.paginationContainer.length > 1 ? v.bullets.each(function () {
e(this).index() === n && e(this).addClass(v.params.bulletActiveClass)
})  : v.bullets.eq(n).addClass(v.params.bulletActiveClass)
}
v.params.loop || (v.params.prevButton && (v.isBeginning ? (e(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(e(v.params.prevButton)))  : (e(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(e(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (e(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(e(v.params.nextButton)))  : (e(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(e(v.params.nextButton)))))
},
v.updatePagination = function () {
if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
for (var e = '', t = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup)  : v.snapGrid.length, n = 0; t > n; n++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(n, v.params.bulletClass)  : '<' + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + '>';
v.paginationContainer.html(e),
v.bullets = v.paginationContainer.find('.' + v.params.bulletClass),
v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
}
},
v.update = function (e) {
function t() {
r = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()),
v.setWrapperTranslate(r),
v.updateActiveIndex(),
v.updateClasses()
}
if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
var n,
r;
v.controller && v.controller.spline && (v.controller.spline = void 0),
v.params.freeMode ? t()  : (n = ('auto' === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0)  : v.slideTo(v.activeIndex, 0, !1, !0), n || t())
}
},
v.onResize = function (e) {
var t = v.params.allowSwipeToPrev,
n = v.params.allowSwipeToNext;
if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ('auto' === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
var r = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
v.setWrapperTranslate(r),
v.updateActiveIndex(),
v.updateClasses()
} else v.updateClasses(),
('auto' === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0)  : v.slideTo(v.activeIndex, 0, !1, !0);
v.params.allowSwipeToPrev = t,
v.params.allowSwipeToNext = n
};
var y = [
'mousedown',
'mousemove',
'mouseup'
];
window.navigator.pointerEnabled ? y = [
'pointerdown',
'pointermove',
'pointerup'
] : window.navigator.msPointerEnabled && (y = [
'MSPointerDown',
'MSPointerMove',
'MSPointerUp'
]),
v.touchEvents = {
start: v.support.touch || !v.params.simulateTouch ? 'touchstart' : y[0],
move: v.support.touch || !v.params.simulateTouch ? 'touchmove' : y[1],
end: v.support.touch || !v.params.simulateTouch ? 'touchend' : y[2]
},
(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ('container' === v.params.touchEventsTarget ? v.container : v.wrapper).addClass('swiper-wp8-' + v.params.direction),
v.initEvents = function (t) {
var n = t ? 'off' : 'on',
a = t ? 'removeEventListener' : 'addEventListener',
i = 'container' === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
o = v.support.touch ? i : document,
s = v.params.nested ? !0 : !1;
v.browser.ie ? (i[a](v.touchEvents.start, v.onTouchStart, !1), o[a](v.touchEvents.move, v.onTouchMove, s), o[a](v.touchEvents.end, v.onTouchEnd, !1))  : (v.support.touch && (i[a](v.touchEvents.start, v.onTouchStart, !1), i[a](v.touchEvents.move, v.onTouchMove, s), i[a](v.touchEvents.end, v.onTouchEnd, !1)), !r.simulateTouch || v.device.ios || v.device.android || (i[a]('mousedown', v.onTouchStart, !1), document[a]('mousemove', v.onTouchMove, s), document[a]('mouseup', v.onTouchEnd, !1))),
window[a]('resize', v.onResize),
v.params.nextButton && (e(v.params.nextButton) [n]('click', v.onClickNext), v.params.a11y && v.a11y && e(v.params.nextButton) [n]('keydown', v.a11y.onEnterKey)),
v.params.prevButton && (e(v.params.prevButton) [n]('click', v.onClickPrev), v.params.a11y && v.a11y && e(v.params.prevButton) [n]('keydown', v.a11y.onEnterKey)),
v.params.pagination && v.params.paginationClickable && (e(v.paginationContainer) [n]('click', '.' + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && e(v.paginationContainer) [n]('keydown', '.' + v.params.bulletClass, v.a11y.onEnterKey)),
(v.params.preventClicks || v.params.preventClicksPropagation) && i[a]('click', v.preventClicks, !0)
},
v.attachEvents = function (e) {
v.initEvents()
},
v.detachEvents = function () {
v.initEvents(!0)
},
v.allowClick = !0,
v.preventClicks = function (e) {
v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
},
v.onClickNext = function (e) {
e.preventDefault(),
(!v.isEnd || v.params.loop) && v.slideNext()
},
v.onClickPrev = function (e) {
e.preventDefault(),
(!v.isBeginning || v.params.loop) && v.slidePrev()
},
v.onClickIndex = function (t) {
t.preventDefault();
var n = e(this).index() * v.params.slidesPerGroup;
v.params.loop && (n += v.loopedSlides),
v.slideTo(n)
},
v.updateClickedSlide = function (t) {
var n = s(t, '.' + v.params.slideClass),
r = !1;
if (n) for (var a = 0; a < v.slides.length; a++) v.slides[a] === n && (r = !0);
if (!n || !r) return v.clickedSlide = void 0,
void (v.clickedIndex = void 0);
if (v.clickedSlide = n, v.clickedIndex = e(n).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
var i,
o = v.clickedIndex;
if (v.params.loop) {
if (v.animating) return;
i = e(v.clickedSlide).attr('data-swiper-slide-index'),
v.params.centeredSlides ? o < v.loopedSlides - v.params.slidesPerView / 2 || o > v.slides.length - v.loopedSlides + v.params.slidesPerView / 2 ? (v.fixLoop(), o = v.wrapper.children('.' + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
v.slideTo(o)
}, 0))  : v.slideTo(o)  : o > v.slides.length - v.params.slidesPerView ? (v.fixLoop(), o = v.wrapper.children('.' + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
v.slideTo(o)
}, 0))  : v.slideTo(o)
} else v.slideTo(o)
}
};
var b,
w,
x,
k,
T,
C,
S,
M,
E,
_ = 'input, select, textarea, button',
P = Date.now(),
D = [
];
v.animating = !1,
v.touches = {
startX: 0,
startY: 0,
currentX: 0,
currentY: 0,
diff: 0
};
var A,
I;
if (v.onTouchStart = function (t) {
if (t.originalEvent && (t = t.originalEvent), A = 'touchstart' === t.type, A || !('which' in t) || 3 !== t.which) {
if (v.params.noSwiping && s(t, '.' + v.params.noSwipingClass)) return void (v.allowClick = !0);
if (!v.params.swipeHandler || s(t, v.params.swipeHandler)) {
var n = v.touches.currentX = 'touchstart' === t.type ? t.targetTouches[0].pageX : t.pageX,
r = v.touches.currentY = 'touchstart' === t.type ? t.targetTouches[0].pageY : t.pageY;
if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && n <= v.params.iOSEdgeSwipeThreshold)) {
if (b = !0, w = !1, k = void 0, I = void 0, v.touches.startX = n, v.touches.startY = r, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (S = !1), 'touchstart' !== t.type) {
var a = !0;
e(t.target).is(_) && (a = !1),
document.activeElement && e(document.activeElement).is(_) && document.activeElement.blur(),
a && t.preventDefault()
}
v.emit('onTouchStart', v, t)
}
}
}
}, v.onTouchMove = function (t) {
if (t.originalEvent && (t = t.originalEvent), !(A && 'mousemove' === t.type || t.preventedByNestedSwiper)) {
if (v.params.onlyExternal) return v.allowClick = !1,
void (b && (v.touches.startX = v.touches.currentX = 'touchmove' === t.type ? t.targetTouches[0].pageX : t.pageX, v.touches.startY = v.touches.currentY = 'touchmove' === t.type ? t.targetTouches[0].pageY : t.pageY, x = Date.now()));
if (A && document.activeElement && t.target === document.activeElement && e(t.target).is(_)) return w = !0,
void (v.allowClick = !1);
if (v.emit('onTouchMove', v, t), !(t.targetTouches && t.targetTouches.length > 1)) {
if (v.touches.currentX = 'touchmove' === t.type ? t.targetTouches[0].pageX : t.pageX, v.touches.currentY = 'touchmove' === t.type ? t.targetTouches[0].pageY : t.pageY, 'undefined' == typeof k) {
var n = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
k = a() ? n > v.params.touchAngle : 90 - n > v.params.touchAngle
}
if (k && v.emit('onTouchMoveOpposite', v, t), 'undefined' == typeof I && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (I = !0), b) {
if (k) return void (b = !1);
if (I || !v.browser.ieTouch) {
v.allowClick = !1,
v.emit('onSliderMove', v, t),
t.preventDefault(),
v.params.touchMoveStopPropagation && !v.params.nested && t.stopPropagation(),
w || (r.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd'), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay()  : v.pauseAutoplay()), E = !1, v.params.grabCursor && (v.container[0].style.cursor = 'move', v.container[0].style.cursor = '-webkit-grabbing', v.container[0].style.cursor = '-moz-grabbin', v.container[0].style.cursor = 'grabbing')),
w = !0;
var i = v.touches.diff = a() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
i *= v.params.touchRatio,
v.rtl && (i = - i),
v.swipeDirection = i > 0 ? 'prev' : 'next',
T = i + C;
var o = !0;
if (i > 0 && T > v.minTranslate() ? (o = !1, v.params.resistance && (T = v.minTranslate() - 1 + Math.pow( - v.minTranslate() + C + i, v.params.resistanceRatio)))  : 0 > i && T < v.maxTranslate() && (o = !1, v.params.resistance && (T = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), o && (t.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && 'next' === v.swipeDirection && C > T && (T = C), !v.params.allowSwipeToPrev && 'prev' === v.swipeDirection && T > C && (T = C), v.params.followFinger) {
if (v.params.threshold > 0) {
if (!(Math.abs(i) > v.params.threshold || S)) return void (T = C);
if (!S) return S = !0,
v.touches.startX = v.touches.currentX,
v.touches.startY = v.touches.currentY,
T = C,
void (v.touches.diff = a() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
}(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(),
v.params.freeMode && (0 === D.length && D.push({
position: v.touches[a() ? 'startX' : 'startY'],
time: x
}), D.push({
position: v.touches[a() ? 'currentX' : 'currentY'],
time: (new window.Date).getTime()
})),
v.updateProgress(T),
v.setWrapperTranslate(T)
}
}
}
}
}
}, v.onTouchEnd = function (t) {
if (t.originalEvent && (t = t.originalEvent), v.emit('onTouchEnd', v, t), b) {
v.params.grabCursor && w && b && (v.container[0].style.cursor = 'move', v.container[0].style.cursor = '-webkit-grab', v.container[0].style.cursor = '-moz-grab', v.container[0].style.cursor = 'grab');
var n = Date.now(),
r = n - x;
if (v.allowClick && (v.updateClickedSlide(t), v.emit('onTap', v, t), 300 > r && n - P > 300 && (M && clearTimeout(M), M = setTimeout(function () {
v && (v.params.paginationHide && v.paginationContainer.length > 0 && !e(t.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit('onClick', v, t))
}, 300)), 300 > r && 300 > n - P && (M && clearTimeout(M), v.emit('onDoubleTap', v, t))), P = Date.now(), setTimeout(function () {
v && (v.allowClick = !0)
}, 0), !b || !w || !v.swipeDirection || 0 === v.touches.diff || T === C) return void (b = w = !1);
b = w = !1;
var a;
if (a = v.params.followFinger ? v.rtl ? v.translate : - v.translate : - T, v.params.freeMode) {
if (a < - v.minTranslate()) return void v.slideTo(v.activeIndex);
if (a > - v.maxTranslate()) return void (v.slides.length < v.snapGrid.length ? v.slideTo(v.snapGrid.length - 1)  : v.slideTo(v.slides.length - 1));
if (v.params.freeModeMomentum) {
if (D.length > 1) {
var i = D.pop(),
o = D.pop(),
s = i.position - o.position,
l = i.time - o.time;
v.velocity = s / l,
v.velocity = v.velocity / 2,
Math.abs(v.velocity) < v.params.freeModeMinimumVelocity && (v.velocity = 0),
(l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
} else v.velocity = 0;
D.length = 0;
var c = 1000 * v.params.freeModeMomentumRatio,
u = v.velocity * c,
d = v.translate + u;
v.rtl && (d = - d);
var p,
f = !1,
h = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
if (d < v.maxTranslate()) v.params.freeModeMomentumBounce ? (d + v.maxTranslate() < - h && (d = v.maxTranslate() - h), p = v.maxTranslate(), f = !0, E = !0)  : d = v.maxTranslate();
 else if (d > v.minTranslate()) v.params.freeModeMomentumBounce ? (d - v.minTranslate() > h && (d = v.minTranslate() + h), p = v.minTranslate(), f = !0, E = !0)  : d = v.minTranslate();
 else if (v.params.freeModeSticky) {
var m,
g = 0;
for (g = 0; g < v.snapGrid.length; g += 1) if (v.snapGrid[g] > - d) {
m = g;
break
}
d = Math.abs(v.snapGrid[m] - d) < Math.abs(v.snapGrid[m - 1] - d) || 'next' === v.swipeDirection ? v.snapGrid[m] : v.snapGrid[m - 1],
v.rtl || (d = - d)
}
if (0 !== v.velocity) c = v.rtl ? Math.abs(( - d - v.translate) / v.velocity)  : Math.abs((d - v.translate) / v.velocity);
 else if (v.params.freeModeSticky) return void v.slideReset();
v.params.freeModeMomentumBounce && f ? (v.updateProgress(p), v.setWrapperTransition(c), v.setWrapperTranslate(d), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function () {
v && E && (v.emit('onMomentumBounce', v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(p), v.wrapper.transitionEnd(function () {
v && v.onTransitionEnd()
}))
}))  : v.velocity ? (v.updateProgress(d), v.setWrapperTransition(c), v.setWrapperTranslate(d), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
v && v.onTransitionEnd()
})))  : v.updateProgress(d),
v.updateActiveIndex()
}
return void ((!v.params.freeModeMomentum || r >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
}
var y,
k = 0,
S = v.slidesSizesGrid[0];
for (y = 0; y < v.slidesGrid.length; y += v.params.slidesPerGroup) 'undefined' != typeof v.slidesGrid[y + v.params.slidesPerGroup] ? a >= v.slidesGrid[y] && a < v.slidesGrid[y + v.params.slidesPerGroup] && (k = y, S = v.slidesGrid[y + v.params.slidesPerGroup] - v.slidesGrid[y])  : a >= v.slidesGrid[y] && (k = y, S = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
var _ = (a - v.slidesGrid[k]) / S;
if (r > v.params.longSwipesMs) {
if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
'next' === v.swipeDirection && (_ >= v.params.longSwipesRatio ? v.slideTo(k + v.params.slidesPerGroup)  : v.slideTo(k)),
'prev' === v.swipeDirection && (_ > 1 - v.params.longSwipesRatio ? v.slideTo(k + v.params.slidesPerGroup)  : v.slideTo(k))
} else {
if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
'next' === v.swipeDirection && v.slideTo(k + v.params.slidesPerGroup),
'prev' === v.swipeDirection && v.slideTo(k)
}
}
}, v._slideTo = function (e, t) {
return v.slideTo(e, t, !0, !0)
}, v.slideTo = function (e, t, n, r) {
'undefined' == typeof n && (n = !0),
'undefined' == typeof e && (e = 0),
0 > e && (e = 0),
v.snapIndex = Math.floor(e / v.params.slidesPerGroup),
v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
var i = - v.snapGrid[v.snapIndex];
v.params.autoplay && v.autoplaying && (r || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(t)  : v.stopAutoplay()),
v.updateProgress(i);
for (var o = 0; o < v.slidesGrid.length; o++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[o]) && (e = o);
if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return !1;
if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return !1;
if ('undefined' == typeof t && (t = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(),
!1;
v.updateClasses(),
v.onTransitionStart(n);
a() ? i : 0,
a() ? 0 : i;
return 0 === t ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(n))  : (v.setWrapperTransition(t), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
v && v.onTransitionEnd(n)
}))),
!0
}, v.onTransitionStart = function (e) {
'undefined' == typeof e && (e = !0),
v.lazy && v.lazy.onTransitionStart(),
e && (v.emit('onTransitionStart', v), v.activeIndex !== v.previousIndex && v.emit('onSlideChangeStart', v))
}, v.onTransitionEnd = function (e) {
v.animating = !1,
v.setWrapperTransition(0),
'undefined' == typeof e && (e = !0),
v.lazy && v.lazy.onTransitionEnd(),
e && (v.emit('onTransitionEnd', v), v.activeIndex !== v.previousIndex && v.emit('onSlideChangeEnd', v)),
v.params.hashnav && v.hashnav && v.hashnav.setHash()
}, v.slideNext = function (e, t, n) {
if (v.params.loop) {
if (v.animating) return !1;
v.fixLoop();
v.container[0].clientLeft;
return v.slideTo(v.activeIndex + v.params.slidesPerGroup, t, e, n)
}
return v.slideTo(v.activeIndex + v.params.slidesPerGroup, t, e, n)
}, v._slideNext = function (e) {
return v.slideNext(!0, e, !0)
}, v.slidePrev = function (e, t, n) {
if (v.params.loop) {
if (v.animating) return !1;
v.fixLoop();
v.container[0].clientLeft;
return v.slideTo(v.activeIndex - 1, t, e, n)
}
return v.slideTo(v.activeIndex - 1, t, e, n)
}, v._slidePrev = function (e) {
return v.slidePrev(!0, e, !0)
}, v.slideReset = function (e, t, n) {
return v.slideTo(v.activeIndex, t, e)
}, v.setWrapperTransition = function (e, t) {
v.wrapper.transition(e),
'slide' !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e),
v.params.parallax && v.parallax && v.parallax.setTransition(e),
v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e),
v.params.control && v.controller && v.controller.setTransition(e, t),
v.emit('onSetTransition', v, e)
}, v.setWrapperTranslate = function (e, t, n) {
var r = 0,
o = 0,
s = 0;
a() ? r = v.rtl ? - e : e : o = e,
v.params.roundLengths && (r = i(r), o = i(o)),
v.params.virtualTranslate || (v.support.transforms3d ? v.wrapper.transform('translate3d(' + r + 'px, ' + o + 'px, ' + s + 'px)')  : v.wrapper.transform('translate(' + r + 'px, ' + o + 'px)')),
v.translate = a() ? r : o,
t && v.updateActiveIndex(),
'slide' !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate),
v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate),
v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate),
v.params.control && v.controller && v.controller.setTranslate(v.translate, n),
v.emit('onSetTranslate', v, v.translate)
}, v.getTranslate = function (e, t) {
var n,
r,
a,
i;
return 'undefined' == typeof t && (t = 'x'),
v.params.virtualTranslate ? v.rtl ? - v.translate : v.translate : (a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(',').length > 6 && (r = r.split(', ').map(function (e) {
return e.replace(',', '.')
}).join(', ')), i = new window.WebKitCSSMatrix('none' === r ? '' : r))  : (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'), n = i.toString().split(',')), 'x' === t && (r = window.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12])  : parseFloat(n[4])), 'y' === t && (r = window.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13])  : parseFloat(n[5])), v.rtl && r && (r = - r), r || 0)
}, v.getWrapperTranslate = function (e) {
return 'undefined' == typeof e && (e = a() ? 'x' : 'y'),
v.getTranslate(v.wrapper[0], e)
}, v.observers = [
], v.initObservers = function () {
if (v.params.observeParents) for (var e = v.container.parents(), t = 0; t < e.length; t++) l(e[t]);
l(v.container[0], {
childList: !1
}),
l(v.wrapper[0], {
attributes: !1
})
}, v.disconnectObservers = function () {
for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
v.observers = [
]
}, v.createLoop = function () {
v.wrapper.children('.' + v.params.slideClass + '.' + v.params.slideDuplicateClass).remove();
var t = v.wrapper.children('.' + v.params.slideClass);
'auto' !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = t.length),
v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10),
v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides,
v.loopedSlides > t.length && (v.loopedSlides = t.length);
var n,
r = [
],
a = [
];
for (t.each(function (n, i) {
var o = e(this);
n < v.loopedSlides && a.push(i),
n < t.length && n >= t.length - v.loopedSlides && r.push(i),
o.attr('data-swiper-slide-index', n)
}), n = 0; n < a.length; n++) v.wrapper.append(e(a[n].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
for (n = r.length - 1; n >= 0; n--) v.wrapper.prepend(e(r[n].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
}, v.destroyLoop = function () {
v.wrapper.children('.' + v.params.slideClass + '.' + v.params.slideDuplicateClass).remove(),
v.slides.removeAttr('data-swiper-slide-index')
}, v.fixLoop = function () {
var e;
v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))  : ('auto' === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = - v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
}, v.appendSlide = function (e) {
if (v.params.loop && v.destroyLoop(), 'object' == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && v.wrapper.append(e[t]);
 else v.wrapper.append(e);
v.params.loop && v.createLoop(),
v.params.observer && v.support.observer || v.update(!0)
}, v.prependSlide = function (e) {
v.params.loop && v.destroyLoop();
var t = v.activeIndex + 1;
if ('object' == typeof e && e.length) {
for (var n = 0; n < e.length; n++) e[n] && v.wrapper.prepend(e[n]);
t = v.activeIndex + e.length
} else v.wrapper.prepend(e);
v.params.loop && v.createLoop(),
v.params.observer && v.support.observer || v.update(!0),
v.slideTo(t, 0, !1)
}, v.removeSlide = function (e) {
v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children('.' + v.params.slideClass));
var t,
n = v.activeIndex;
if ('object' == typeof e && e.length) {
for (var r = 0; r < e.length; r++) t = e[r],
v.slides[t] && v.slides.eq(t).remove(),
n > t && n--;
n = Math.max(n, 0)
} else t = e,
v.slides[t] && v.slides.eq(t).remove(),
n > t && n--,
n = Math.max(n, 0);
v.params.loop && v.createLoop(),
v.params.observer && v.support.observer || v.update(!0),
v.params.loop ? v.slideTo(n + v.loopedSlides, 0, !1)  : v.slideTo(n, 0, !1)
}, v.removeAllSlides = function () {
for (var e = [
], t = 0; t < v.slides.length; t++) e.push(t);
v.removeSlide(e)
}, v.effects = {
fade: {
setTranslate: function () {
for (var e = 0; e < v.slides.length; e++) {
var t = v.slides.eq(e),
n = t[0].swiperSlideOffset,
r = - n;
v.params.virtualTranslate || (r -= v.translate);
var i = 0;
a() || (i = r, r = 0);
var o = v.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0)  : 1 + Math.min(Math.max(t[0].progress, - 1), 0);
t.css({
opacity: o
}).transform('translate3d(' + r + 'px, ' + i + 'px, 0px)')
}
},
setTransition: function (e) {
if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
var t = !1;
v.slides.transitionEnd(function () {
if (!t && v) {
t = !0,
v.animating = !1;
for (var e = [
'webkitTransitionEnd',
'transitionend',
'oTransitionEnd',
'MSTransitionEnd',
'msTransitionEnd'
], n = 0; n < e.length; n++) v.wrapper.trigger(e[n])
}
})
}
}
},
cube: {
setTranslate: function () {
var t,
n = 0;
v.params.cube.shadow && (a() ? (t = v.wrapper.find('.swiper-cube-shadow'), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(t)), t.css({
height: v.width + 'px'
}))  : (t = v.container.find('.swiper-cube-shadow'), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), v.container.append(t))));
for (var r = 0; r < v.slides.length; r++) {
var i = v.slides.eq(r),
o = 90 * r,
s = Math.floor(o / 360);
v.rtl && (o = - o, s = Math.floor( - o / 360));
var l = Math.max(Math.min(i[0].progress, 1), - 1),
c = 0,
u = 0,
d = 0;
r % 4 === 0 ? (c = 4 * - s * v.size, d = 0)  : (r - 1) % 4 === 0 ? (c = 0, d = 4 * - s * v.size)  : (r - 2) % 4 === 0 ? (c = v.size + 4 * s * v.size, d = v.size)  : (r - 3) % 4 === 0 && (c = - v.size, d = 3 * v.size + 4 * v.size * s),
v.rtl && (c = - c),
a() || (u = c, c = 0);
var p = 'rotateX(' + (a() ? 0 : - o) + 'deg) rotateY(' + (a() ? o : 0) + 'deg) translate3d(' + c + 'px, ' + u + 'px, ' + d + 'px)';
if (1 >= l && l > - 1 && (n = 90 * r + 90 * l, v.rtl && (n = 90 * - r - 90 * l)), i.transform(p), v.params.cube.slideShadows) {
var f = a() ? i.find('.swiper-slide-shadow-left')  : i.find('.swiper-slide-shadow-top'),
h = a() ? i.find('.swiper-slide-shadow-right')  : i.find('.swiper-slide-shadow-bottom');
0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (a() ? 'left' : 'top') + '"></div>'), i.append(f)),
0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (a() ? 'right' : 'bottom') + '"></div>'), i.append(h));
i[0].progress;
f.length && (f[0].style.opacity = - i[0].progress),
h.length && (h[0].style.opacity = i[0].progress)
}
}
if (v.wrapper.css({
'-webkit-transform-origin': '50% 50% -' + v.size / 2 + 'px',
'-moz-transform-origin': '50% 50% -' + v.size / 2 + 'px',
'-ms-transform-origin': '50% 50% -' + v.size / 2 + 'px',
'transform-origin': '50% 50% -' + v.size / 2 + 'px'
}), v.params.cube.shadow) if (a()) t.transform('translate3d(0px, ' + (v.width / 2 + v.params.cube.shadowOffset) + 'px, ' + - v.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + v.params.cube.shadowScale + ')');
 else {
var m = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
g = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
y = v.params.cube.shadowScale,
b = v.params.cube.shadowScale / g,
w = v.params.cube.shadowOffset;
t.transform('scale3d(' + y + ', 1, ' + b + ') translate3d(0px, ' + (v.height / 2 + w) + 'px, ' + - v.height / 2 / b + 'px) rotateX(-90deg)')
}
var x = v.isSafari || v.isUiWebView ? - v.size / 2 : 0;
v.wrapper.transform('translate3d(0px,0,' + x + 'px) rotateX(' + (a() ? 0 : n) + 'deg) rotateY(' + (a() ? - n : 0) + 'deg)')
},
setTransition: function (e) {
v.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
v.params.cube.shadow && !a() && v.container.find('.swiper-cube-shadow').transition(e)
}
},
coverflow: {
setTranslate: function () {
for (var t = v.translate, n = a() ? - t + v.width / 2 : - t + v.height / 2, r = a() ? v.params.coverflow.rotate : - v.params.coverflow.rotate, i = v.params.coverflow.depth, o = 0, s = v.slides.length; s > o; o++) {
var l = v.slides.eq(o),
c = v.slidesSizesGrid[o],
u = l[0].swiperSlideOffset,
d = (n - u - c / 2) / c * v.params.coverflow.modifier,
p = a() ? r * d : 0,
f = a() ? 0 : r * d,
h = - i * Math.abs(d),
m = a() ? 0 : v.params.coverflow.stretch * d,
g = a() ? v.params.coverflow.stretch * d : 0;
Math.abs(g) < 0.001 && (g = 0),
Math.abs(m) < 0.001 && (m = 0),
Math.abs(h) < 0.001 && (h = 0),
Math.abs(p) < 0.001 && (p = 0),
Math.abs(f) < 0.001 && (f = 0);
var y = 'translate3d(' + g + 'px,' + m + 'px,' + h + 'px)  rotateX(' + f + 'deg) rotateY(' + p + 'deg)';
if (l.transform(y), l[0].style.zIndex = - Math.abs(Math.round(d)) + 1, v.params.coverflow.slideShadows) {
var b = a() ? l.find('.swiper-slide-shadow-left')  : l.find('.swiper-slide-shadow-top'),
w = a() ? l.find('.swiper-slide-shadow-right')  : l.find('.swiper-slide-shadow-bottom');
0 === b.length && (b = e('<div class="swiper-slide-shadow-' + (a() ? 'left' : 'top') + '"></div>'), l.append(b)),
0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (a() ? 'right' : 'bottom') + '"></div>'), l.append(w)),
b.length && (b[0].style.opacity = d > 0 ? d : 0),
w.length && (w[0].style.opacity = - d > 0 ? - d : 0)
}
}
if (v.browser.ie) {
var x = v.wrapper[0].style;
x.perspectiveOrigin = n + 'px 50%'
}
},
setTransition: function (e) {
v.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e)
}
}
}, v.lazy = {
initialImageLoaded: !1,
loadImageInSlide: function (t, n) {
if ('undefined' != typeof t && ('undefined' == typeof n && (n = !0), 0 !== v.slides.length)) {
var r = v.slides.eq(t),
a = r.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
!r.hasClass('swiper-lazy') || r.hasClass('swiper-lazy-loaded') || r.hasClass('swiper-lazy-loading') || (a = a.add(r[0])),
0 !== a.length && a.each(function () {
var t = e(this);
t.addClass('swiper-lazy-loading');
var a = t.attr('data-background'),
i = t.attr('data-src'),
o = t.attr('data-srcset');
v.loadImage(t[0], i || a, o, !1, function () {
if (a ? (t.css('background-image', 'url(' + a + ')'), t.removeAttr('data-background'))  : (o && (t.attr('srcset', o), t.removeAttr('data-srcset')), i && (t.attr('src', i), t.removeAttr('data-src'))), t.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading'), r.find('.swiper-lazy-preloader, .preloader').remove(), v.params.loop && n) {
var e = r.attr('data-swiper-slide-index');
if (r.hasClass(v.params.slideDuplicateClass)) {
var s = v.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + v.params.slideDuplicateClass + ')');
v.lazy.loadImageInSlide(s.index(), !1)
} else {
var l = v.wrapper.children('.' + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
v.lazy.loadImageInSlide(l.index(), !1)
}
}
v.emit('onLazyImageReady', v, r[0], t[0])
}),
v.emit('onLazyImageLoad', v, r[0], t[0])
})
}
},
load: function () {
var t;
if (v.params.watchSlidesVisibility) v.wrapper.children('.' + v.params.slideVisibleClass).each(function () {
v.lazy.loadImageInSlide(e(this).index())
});
 else if (v.params.slidesPerView > 1) for (t = v.activeIndex; t < v.activeIndex + v.params.slidesPerView; t++) v.slides[t] && v.lazy.loadImageInSlide(t);
 else v.lazy.loadImageInSlide(v.activeIndex);
if (v.params.lazyLoadingInPrevNext) if (v.params.slidesPerView > 1) {
for (t = v.activeIndex + v.params.slidesPerView; t < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; t++) v.slides[t] && v.lazy.loadImageInSlide(t);
for (t = v.activeIndex - v.params.slidesPerView; t < v.activeIndex; t++) v.slides[t] && v.lazy.loadImageInSlide(t)
} else {
var n = v.wrapper.children('.' + v.params.slideNextClass);
n.length > 0 && v.lazy.loadImageInSlide(n.index());
var r = v.wrapper.children('.' + v.params.slidePrevClass);
r.length > 0 && v.lazy.loadImageInSlide(r.index())
}
},
onTransitionStart: function () {
v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
},
onTransitionEnd: function () {
v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
}
}, v.scrollbar = {
isTouched: !1,
setDragPosition: function (e) {
var t = v.scrollbar,
n = a() ? 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
r = n - t.track.offset() [a() ? 'left' : 'top'] - t.dragSize / 2,
i = - v.minTranslate() * t.moveDivider,
o = - v.maxTranslate() * t.moveDivider;
i > r ? r = i : r > o && (r = o),
r = - r / t.moveDivider,
v.updateProgress(r),
v.setWrapperTranslate(r, !0)
},
dragStart: function (e) {
var t = v.scrollbar;
t.isTouched = !0,
e.preventDefault(),
e.stopPropagation(),
t.setDragPosition(e),
clearTimeout(t.dragTimeout),
t.track.transition(0),
v.params.scrollbarHide && t.track.css('opacity', 1),
v.wrapper.transition(100),
t.drag.transition(100),
v.emit('onScrollbarDragStart', v)
},
dragMove: function (e) {
var t = v.scrollbar;
t.isTouched && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, t.setDragPosition(e), v.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), v.emit('onScrollbarDragMove', v))
},
dragEnd: function (e) {
var t = v.scrollbar;
t.isTouched && (t.isTouched = !1, v.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
t.track.css('opacity', 0),
t.track.transition(400)
}, 1000)), v.emit('onScrollbarDragEnd', v), v.params.scrollbarSnapOnRelease && v.slideReset())
},
enableDraggable: function () {
var t = v.scrollbar,
n = v.support.touch ? t.track : document;
e(t.track).on(v.touchEvents.start, t.dragStart),
e(n).on(v.touchEvents.move, t.dragMove),
e(n).on(v.touchEvents.end, t.dragEnd)
},
disableDraggable: function () {
var t = v.scrollbar,
n = v.support.touch ? t.track : document;
e(t.track).off(v.touchEvents.start, t.dragStart),
e(n).off(v.touchEvents.move, t.dragMove),
e(n).off(v.touchEvents.end, t.dragEnd)
},
set: function () {
if (v.params.scrollbar) {
var t = v.scrollbar;
t.track = e(v.params.scrollbar),
t.drag = t.track.find('.swiper-scrollbar-drag'),
0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)),
t.drag[0].style.width = '',
t.drag[0].style.height = '',
t.trackSize = a() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
t.divider = v.size / v.virtualSize,
t.moveDivider = t.divider * (t.trackSize / v.size),
t.dragSize = t.trackSize * t.divider,
a() ? t.drag[0].style.width = t.dragSize + 'px' : t.drag[0].style.height = t.dragSize + 'px',
t.divider >= 1 ? t.track[0].style.display = 'none' : t.track[0].style.display = '',
v.params.scrollbarHide && (t.track[0].style.opacity = 0)
}
},
setTranslate: function () {
if (v.params.scrollbar) {
var e,
t = v.scrollbar,
n = (v.translate || 0, t.dragSize);
e = (t.trackSize - t.dragSize) * v.progress,
v.rtl && a() ? (e = - e, e > 0 ? (n = t.dragSize - e, e = 0)  : - e + t.dragSize > t.trackSize && (n = t.trackSize + e))  : 0 > e ? (n = t.dragSize + e, e = 0)  : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
a() ? (v.support.transforms3d ? t.drag.transform('translate3d(' + e + 'px, 0, 0)')  : t.drag.transform('translateX(' + e + 'px)'), t.drag[0].style.width = n + 'px')  : (v.support.transforms3d ? t.drag.transform('translate3d(0px, ' + e + 'px, 0)')  : t.drag.transform('translateY(' + e + 'px)'), t.drag[0].style.height = n + 'px'),
v.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
t.track[0].style.opacity = 0,
t.track.transition(400)
}, 1000))
}
},
setTransition: function (e) {
v.params.scrollbar && v.scrollbar.drag.transition(e)
}
}, v.controller = {
LinearSpline: function (e, t) {
this.x = e,
this.y = t,
this.lastIndex = e.length - 1;
var n,
r;
this.x.length;
this.interpolate = function (e) {
return e ? (r = a(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n])  : 0
};
var a = function () {
var e,
t,
n;
return function (r, a) {
for (t = - 1, e = r.length; e - t > 1; ) r[n = e + t >> 1] <= a ? t = n : e = n;
return e
}
}()
},
getInterpolateFunction: function (e) {
v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid)  : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
},
setTranslate: function (e, t) {
function r(t) {
e = t.rtl && 'horizontal' === t.params.direction ? - v.translate : v.translate,
'slide' === v.params.controlBy && (v.controller.getInterpolateFunction(t), i = - v.controller.spline.interpolate( - e)),
i && 'container' !== v.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * a + t.minTranslate()),
v.params.controlInverse && (i = t.maxTranslate() - i),
t.updateProgress(i),
t.setWrapperTranslate(i, !1, v),
t.updateActiveIndex()
}
var a,
i,
o = v.params.control;
if (v.isArray(o)) for (var s = 0; s < o.length; s++) o[s] !== t && o[s] instanceof n && r(o[s]);
 else o instanceof n && t !== o && r(o)
},
setTransition: function (e, t) {
function r(t) {
t.setWrapperTransition(e, v),
0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
i && (t.params.loop && 'slide' === v.params.controlBy && t.fixLoop(), t.onTransitionEnd())
}))
}
var a,
i = v.params.control;
if (v.isArray(i)) for (a = 0; a < i.length; a++) i[a] !== t && i[a] instanceof n && r(i[a]);
 else i instanceof n && t !== i && r(i)
}
}, v.hashnav = {
init: function () {
if (v.params.hashnav) {
v.hashnav.initialized = !0;
var e = document.location.hash.replace('#', '');
if (e) for (var t = 0, n = 0, r = v.slides.length; r > n; n++) {
var a = v.slides.eq(n),
i = a.attr('data-hash');
if (i === e && !a.hasClass(v.params.slideDuplicateClass)) {
var o = a.index();
v.slideTo(o, t, v.params.runCallbacksOnInit, !0)
}
}
}
},
setHash: function () {
v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr('data-hash') || '')
}
}, v.disableKeyboardControl = function () {
e(document).off('keydown', c)
}, v.enableKeyboardControl = function () {
e(document).on('keydown', c)
}, v.mousewheel = {
event: !1,
lastScrollTime: (new window.Date).getTime()
}, v.params.mousewheelControl) {
try {
new window.WheelEvent('wheel'),
v.mousewheel.event = 'wheel'
} catch (N) {
}
v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = 'mousewheel'),
v.mousewheel.event || (v.mousewheel.event = 'DOMMouseScroll')
}
v.disableMousewheelControl = function () {
return v.mousewheel.event ? (v.container.off(v.mousewheel.event, u), !0)  : !1
},
v.enableMousewheelControl = function () {
return v.mousewheel.event ? (v.container.on(v.mousewheel.event, u), !0)  : !1
},
v.parallax = {
setTranslate: function () {
v.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
d(this, v.progress)
}),
v.slides.each(function () {
var t = e(this);
t.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
var e = Math.min(Math.max(t[0].progress, - 1), 1);
d(this, e)
})
})
},
setTransition: function (t) {
'undefined' == typeof t && (t = v.params.speed),
v.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
var n = e(this),
r = parseInt(n.attr('data-swiper-parallax-duration'), 10) || t;
0 === t && (r = 0),
n.transition(r)
})
}
},
v._plugins = [
];
for (var O in v.plugins) {
var L = v.plugins[O](v, v.params[O]);
L && v._plugins.push(L)
}
return v.callPlugins = function (e) {
for (var t = 0; t < v._plugins.length; t++) e in v._plugins[t] && v._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
},
v.emitterEventListeners = {
},
v.emit = function (e) {
v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
var t;
if (v.emitterEventListeners[e]) for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
},
v.on = function (e, t) {
return e = p(e),
v.emitterEventListeners[e] || (v.emitterEventListeners[e] = [
]),
v.emitterEventListeners[e].push(t),
v
},
v.off = function (e, t) {
var n;
if (e = p(e), 'undefined' == typeof t) return v.emitterEventListeners[e] = [
],
v;
if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
for (n = 0; n < v.emitterEventListeners[e].length; n++) v.emitterEventListeners[e][n] === t && v.emitterEventListeners[e].splice(n, 1);
return v
}
},
v.once = function (e, t) {
e = p(e);
var n = function () {
t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
v.off(e, n)
};
return v.on(e, n),
v
},
v.a11y = {
makeFocusable: function (e) {
return e.attr('tabIndex', '0'),
e
},
addRole: function (e, t) {
return e.attr('role', t),
e
},
addLabel: function (e, t) {
return e.attr('aria-label', t),
e
},
disable: function (e) {
return e.attr('aria-disabled', !0),
e
},
enable: function (e) {
return e.attr('aria-disabled', !1),
e
},
onEnterKey: function (t) {
13 === t.keyCode && (e(t.target).is(v.params.nextButton) ? (v.onClickNext(t), v.isEnd ? v.a11y.notify(v.params.lastSlideMessage)  : v.a11y.notify(v.params.nextSlideMessage))  : e(t.target).is(v.params.prevButton) && (v.onClickPrev(t), v.isBeginning ? v.a11y.notify(v.params.firstSlideMessage)  : v.a11y.notify(v.params.prevSlideMessage)), e(t.target).is('.' + v.params.bulletClass) && e(t.target) [0].click())
},
liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
notify: function (e) {
var t = v.a11y.liveRegion;
0 !== t.length && (t.html(''), t.html(e))
},
init: function () {
if (v.params.nextButton) {
var t = e(v.params.nextButton);
v.a11y.makeFocusable(t),
v.a11y.addRole(t, 'button'),
v.a11y.addLabel(t, v.params.nextSlideMessage)
}
if (v.params.prevButton) {
var n = e(v.params.prevButton);
v.a11y.makeFocusable(n),
v.a11y.addRole(n, 'button'),
v.a11y.addLabel(n, v.params.prevSlideMessage)
}
e(v.container).append(v.a11y.liveRegion)
},
initPagination: function () {
v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function () {
var t = e(this);
v.a11y.makeFocusable(t),
v.a11y.addRole(t, 'button'),
v.a11y.addLabel(t, v.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
})
},
destroy: function () {
v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
}
},
v.init = function () {
v.params.loop && v.createLoop(),
v.updateContainerSize(),
v.updateSlidesSize(),
v.updatePagination(),
v.params.scrollbar && v.scrollbar && (v.scrollbar.set(), v.params.scrollbarDraggable && v.scrollbar.enableDraggable()),
'slide' !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()),
v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit)  : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))),
v.attachEvents(),
v.params.observer && v.support.observer && v.initObservers(),
v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(),
v.params.autoplay && v.startAutoplay(),
v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(),
v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(),
v.params.hashnav && v.hashnav && v.hashnav.init(),
v.params.a11y && v.a11y && v.a11y.init(),
v.emit('onInit', v)
},
v.cleanupStyles = function () {
v.container.removeClass(v.classNames.join(' ')).removeAttr('style'),
v.wrapper.removeAttr('style'),
v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass,
v.params.slideActiveClass,
v.params.slideNextClass,
v.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row'),
v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass),
v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass),
v.params.prevButton && e(v.params.prevButton).removeClass(v.params.buttonDisabledClass),
v.params.nextButton && e(v.params.nextButton).removeClass(v.params.buttonDisabledClass),
v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr('style'), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr('style'))
},
v.destroy = function (e, t) {
v.detachEvents(),
v.stopAutoplay(),
v.params.scrollbar && v.scrollbar && v.params.scrollbarDraggable && v.scrollbar.disableDraggable(),
v.params.loop && v.destroyLoop(),
t && v.cleanupStyles(),
v.disconnectObservers(),
v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(),
v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(),
v.params.a11y && v.a11y && v.a11y.destroy(),
v.emit('onDestroy'),
e !== !1 && (v = null)
},
v.init(),
v
}
};
n.prototype = {
isSafari: function () {
var e = navigator.userAgent.toLowerCase();
return e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0
}(),
isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
isArray: function (e) {
return '[object Array]' === Object.prototype.toString.apply(e)
},
browser: {
ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
},
device: function () {
var e = navigator.userAgent,
t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
n = e.match(/(iPad).*OS\s([\d_]+)/),
r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
return {
ios: n || a || r,
android: t
}
}(),
support: {
touch: window.Modernizr && Modernizr.touch === !0 || function () {
return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)
}(),
transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
var e = document.createElement('div').style;
return 'webkitPerspective' in e || 'MozPerspective' in e || 'OPerspective' in e || 'MsPerspective' in e || 'perspective' in e
}(),
flexbox: function () {
for (var e = document.createElement('div').style, t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' '), n = 0; n < t.length; n++) if (t[n] in e) return !0
}(),
observer: function () {
return 'MutationObserver' in window || 'WebkitMutationObserver' in window
}()
},
plugins: {
}
},
t(e);
var r = e;
return r && ('transitionEnd' in r.fn || (r.fn.transitionEnd = function (e) {
function t(i) {
if (i.target === this) for (e.call(this, i), n = 0; n < r.length; n++) a.off(r[n], t)
}
var n,
r = [
'webkitTransitionEnd',
'transitionend',
'oTransitionEnd',
'MSTransitionEnd',
'msTransitionEnd'
],
a = this;
if (e) for (n = 0; n < r.length; n++) a.on(r[n], t);
return this
}), 'transform' in r.fn || (r.fn.transform = function (e) {
for (var t = 0; t < this.length; t++) {
var n = this[t].style;
n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
}
return this
}), 'transition' in r.fn || (r.fn.transition = function (e) {
'string' != typeof e && (e += 'ms');
for (var t = 0; t < this.length; t++) {
var n = this[t].style;
n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
}
return this
})),
n
}),
!function (e) {
'use strict';
function t(t, n, r, a) {
function i(e, t) {
return e -= a,
t -= a,
0 > e || e >= s || 0 > t || t >= s ? !1 : o.isDark(e, t)
}
var o = e(r, n);
o.addData(t),
o.make(),
a = a || 0;
var s = o.getModuleCount(),
l = o.getModuleCount() + 2 * a,
c = function (e, t, n, r) {
var a = this.isDark,
i = 1 / l;
this.isDark = function (o, s) {
var l = s * i,
c = o * i,
u = l + i,
d = c + i;
return a(o, s) && (e > u || l > n || t > d || c > r)
}
};
this.text = t,
this.level = n,
this.version = r,
this.moduleCount = l,
this.isDark = i,
this.addBlank = c
}
function n(e, n, r, a, i) {
r = Math.max(1, r || 1),
a = Math.min(40, a || 40);
for (var o = r; a >= o; o += 1) try {
return new t(e, n, o, i)
} catch (s) {
}
}
function r(e, t, n) {
var r = n.size,
a = 'bold ' + n.mSize * r + 'px ' + n.fontname,
i = g('<canvas/>') [0].getContext('2d');
i.font = a;
var o = i.measureText(n.label).width,
s = n.mSize,
l = o / r,
c = (1 - l) * n.mPosX,
u = (1 - s) * n.mPosY,
d = c + l,
p = u + s,
f = 0.01;
1 === n.mode ? e.addBlank(0, u - f, r, p + f)  : e.addBlank(c - f, u - f, d + f, p + f),
t.fillStyle = n.fontcolor,
t.font = a,
t.fillText(n.label, c * r, u * r + 0.75 * n.mSize * r)
}
function a(e, t, n) {
var r = n.size,
a = n.image.naturalWidth || 1,
i = n.image.naturalHeight || 1,
o = n.mSize,
s = o * a / i,
l = (1 - s) * n.mPosX,
c = (1 - o) * n.mPosY,
u = l + s,
d = c + o,
p = 0.01;
3 === n.mode ? e.addBlank(0, c - p, r, d + p)  : e.addBlank(l - p, c - p, u + p, d + p),
t.drawImage(n.image, l * r, c * r, s * r, o * r)
}
function i(e, t, n) {
g(n.background).is('img') ? t.drawImage(n.background, 0, 0, n.size, n.size)  : n.background && (t.fillStyle = n.background, t.fillRect(n.left, n.top, n.size, n.size));
var i = n.mode;
1 === i || 2 === i ? r(e, t, n)  : (3 === i || 4 === i) && a(e, t, n)
}
function o(e, t, n, r, a, i, o, s) {
e.isDark(o, s) && t.rect(r, a, i, i)
}
function s(e, t, n, r, a, i, o, s, l, c) {
o ? e.moveTo(t + i, n)  : e.moveTo(t, n),
s ? (e.lineTo(r - i, n), e.arcTo(r, n, r, a, i))  : e.lineTo(r, n),
l ? (e.lineTo(r, a - i), e.arcTo(r, a, t, a, i))  : e.lineTo(r, a),
c ? (e.lineTo(t + i, a), e.arcTo(t, a, t, n, i))  : e.lineTo(t, a),
o ? (e.lineTo(t, n + i), e.arcTo(t, n, r, n, i))  : e.lineTo(t, n)
}
function l(e, t, n, r, a, i, o, s, l, c) {
o && (e.moveTo(t + i, n), e.lineTo(t, n), e.lineTo(t, n + i), e.arcTo(t, n, t + i, n, i)),
s && (e.moveTo(r - i, n), e.lineTo(r, n), e.lineTo(r, n + i), e.arcTo(r, n, r - i, n, i)),
l && (e.moveTo(r - i, a), e.lineTo(r, a), e.lineTo(r, a - i), e.arcTo(r, a, r - i, a, i)),
c && (e.moveTo(t + i, a), e.lineTo(t, a), e.lineTo(t, a - i), e.arcTo(t, a, t + i, a, i))
}
function c(e, t, n, r, a, i, o, c) {
var u = e.isDark,
d = r + i,
p = a + i,
f = n.radius * i,
h = o - 1,
m = o + 1,
g = c - 1,
v = c + 1,
y = u(o, c),
b = u(h, g),
w = u(h, c),
x = u(h, v),
k = u(o, v),
T = u(m, v),
C = u(m, c),
S = u(m, g),
M = u(o, g);
y ? s(t, r, a, d, p, f, !w && !M, !w && !k, !C && !k, !C && !M)  : l(t, r, a, d, p, f, w && M && b, w && k && x, C && k && T, C && M && S)
}
function u(e, t, n) {
var r,
a,
i = e.moduleCount,
s = n.size / i,
l = o;
for (y && n.radius > 0 && n.radius <= 0.5 && (l = c), t.beginPath(), r = 0; i > r; r += 1) for (a = 0; i > a; a += 1) {
var u = n.left + a * s,
d = n.top + r * s,
p = s;
l(e, t, n, u, d, p, r, a)
}
if (g(n.fill).is('img')) {
t.strokeStyle = 'rgba(0,0,0,0.5)',
t.lineWidth = 2,
t.stroke();
var f = t.globalCompositeOperation;
t.globalCompositeOperation = 'destination-out',
t.fill(),
t.globalCompositeOperation = f,
t.clip(),
t.drawImage(n.fill, 0, 0, n.size, n.size),
t.restore()
} else t.fillStyle = n.fill,
t.fill()
}
function d(e, t) {
var r = n(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
if (!r) return null;
var a = g(e).data('qrcode', r),
o = a[0].getContext('2d');
return i(r, o, t),
u(r, o, t),
a
}
function p(e) {
var t = g('<canvas/>').attr('width', e.size).attr('height', e.size);
return d(t, e)
}
function f(e) {
return g('<img/>').attr('src', p(e) [0].toDataURL('image/png'))
}
function h(e) {
var t = n(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet);
if (!t) return null;
var r,
a,
i = e.size,
o = e.background,
s = Math.floor,
l = t.moduleCount,
c = s(i / l),
u = s(0.5 * (i - c * l)),
d = {
position: 'relative',
left: 0,
top: 0,
padding: 0,
margin: 0,
width: i,
height: i
},
p = {
position: 'absolute',
padding: 0,
margin: 0,
width: c,
height: c,
'background-color': e.fill
},
f = g('<div/>').data('qrcode', t).css(d);
for (o && f.css('background-color', o), r = 0; l > r; r += 1) for (a = 0; l > a; a += 1) t.isDark(r, a) && g('<div/>').css(p).css({
left: u + a * c,
top: u + r * c
}).appendTo(f);
return f
}
function m(e) {
return v && 'canvas' === e.render ? p(e)  : v && 'image' === e.render ? f(e)  : h(e)
}
var g = jQuery,
v = function () {
var e = document.createElement('canvas');
return Boolean(e.getContext && e.getContext('2d'))
}(),
y = '[object Opera]' !== Object.prototype.toString.call(window.opera),
b = {
render: 'canvas',
minVersion: 1,
maxVersion: 40,
ecLevel: 'L',
left: 0,
top: 0,
size: 200,
fill: '#000',
background: null,
text: 'no text',
radius: 0,
quiet: 0,
mode: 0,
mSize: 0.1,
mPosX: 0.5,
mPosY: 0.5,
label: 'no label',
fontname: 'sans',
fontcolor: '#000',
image: null
};
g.fn.qrcode = function (e) {
var t = g.extend({
}, b, e);
return this.each(function () {
'canvas' === this.nodeName.toLowerCase() ? d(this, t)  : g(this).append(m(t))
})
}
}(function () {
var e = function () {
function e(t, n) {
if ('undefined' == typeof t.length) throw new Error(t.length + '/' + n);
var r = function () {
for (var e = 0; e < t.length && 0 == t[e]; ) e += 1;
for (var r = new Array(t.length - e + n), a = 0; a < t.length - e; a += 1) r[a] = t[a + e];
return r
}(),
a = {
};
return a.getAt = function (e) {
return r[e]
},
a.getLength = function () {
return r.length
},
a.multiply = function (t) {
for (var n = new Array(a.getLength() + t.getLength() - 1), r = 0; r < a.getLength(); r += 1) for (var i = 0; i < t.getLength(); i += 1) n[r + i] ^= o.gexp(o.glog(a.getAt(r)) + o.glog(t.getAt(i)));
return e(n, 0)
},
a.mod = function (t) {
if (a.getLength() - t.getLength() < 0) return a;
for (var n = o.glog(a.getAt(0)) - o.glog(t.getAt(0)), r = new Array(a.getLength()), i = 0; i < a.getLength(); i += 1) r[i] = a.getAt(i);
for (var i = 0; i < t.getLength(); i += 1) r[i] ^= o.gexp(o.glog(t.getAt(i)) + n);
return e(r, 0).mod(t)
},
a
}
var t = function (t, n) {
var a = 236,
o = 17,
u = t,
d = r[n],
p = null,
f = 0,
m = null,
g = new Array,
v = {
},
y = function (e, t) {
f = 4 * u + 17,
p = function (e) {
for (var t = new Array(e), n = 0; e > n; n += 1) {
t[n] = new Array(e);
for (var r = 0; e > r; r += 1) t[n][r] = null
}
return t
}(f),
b(0, 0),
b(f - 7, 0),
b(0, f - 7),
k(),
x(),
C(e, t),
u >= 7 && T(e),
null == m && (m = E(u, d, g)),
S(m, t)
},
b = function (e, t) {
for (var n = - 1; 7 >= n; n += 1) if (!( - 1 >= e + n || e + n >= f)) for (var r = - 1; 7 >= r; r += 1) - 1 >= t + r || t + r >= f || (n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? p[e + n][t + r] = !0 : p[e + n][t + r] = !1)
},
w = function () {
for (var e = 0, t = 0, n = 0; 8 > n; n += 1) {
y(!0, n);
var r = i.getLostPoint(v);
(0 == n || e > r) && (e = r, t = n)
}
return t
},
x = function () {
for (var e = 8; f - 8 > e; e += 1) null == p[e][6] && (p[e][6] = e % 2 == 0);
for (var t = 8; f - 8 > t; t += 1) null == p[6][t] && (p[6][t] = t % 2 == 0)
},
k = function () {
for (var e = i.getPatternPosition(u), t = 0; t < e.length; t += 1) for (var n = 0; n < e.length; n += 1) {
var r = e[t],
a = e[n];
if (null == p[r][a]) for (var o = - 2; 2 >= o; o += 1) for (var s = - 2; 2 >= s; s += 1) - 2 == o || 2 == o || - 2 == s || 2 == s || 0 == o && 0 == s ? p[r + o][a + s] = !0 : p[r + o][a + s] = !1
}
},
T = function (e) {
for (var t = i.getBCHTypeNumber(u), n = 0; 18 > n; n += 1) {
var r = !e && 1 == (t >> n & 1);
p[Math.floor(n / 3)][n % 3 + f - 8 - 3] = r
}
for (var n = 0; 18 > n; n += 1) {
var r = !e && 1 == (t >> n & 1);
p[n % 3 + f - 8 - 3][Math.floor(n / 3)] = r
}
},
C = function (e, t) {
for (var n = d << 3 | t, r = i.getBCHTypeInfo(n), a = 0; 15 > a; a += 1) {
var o = !e && 1 == (r >> a & 1);
6 > a ? p[a][8] = o : 8 > a ? p[a + 1][8] = o : p[f - 15 + a][8] = o
}
for (var a = 0; 15 > a; a += 1) {
var o = !e && 1 == (r >> a & 1);
8 > a ? p[8][f - a - 1] = o : 9 > a ? p[8][15 - a - 1 + 1] = o : p[8][15 - a - 1] = o
}
p[f - 8][8] = !e
},
S = function (e, t) {
for (var n = - 1, r = f - 1, a = 7, o = 0, s = i.getMaskFunction(t), l = f - 1; l > 0; l -= 2) for (6 == l && (l -= 1); ; ) {
for (var c = 0; 2 > c; c += 1) if (null == p[r][l - c]) {
var u = !1;
o < e.length && (u = 1 == (e[o] >>> a & 1));
var d = s(r, l - c);
d && (u = !u),
p[r][l - c] = u,
a -= 1,
- 1 == a && (o += 1, a = 7)
}
if (r += n, 0 > r || r >= f) {
r -= n,
n = - n;
break
}
}
},
M = function (t, n) {
for (var r = 0, a = 0, o = 0, s = new Array(n.length), l = new Array(n.length), c = 0; c < n.length; c += 1) {
var u = n[c].dataCount,
d = n[c].totalCount - u;
a = Math.max(a, u),
o = Math.max(o, d),
s[c] = new Array(u);
for (var p = 0; p < s[c].length; p += 1) s[c][p] = 255 & t.getBuffer() [p + r];
r += u;
var f = i.getErrorCorrectPolynomial(d),
h = e(s[c], f.getLength() - 1),
m = h.mod(f);
l[c] = new Array(f.getLength() - 1);
for (var p = 0; p < l[c].length; p += 1) {
var g = p + m.getLength() - l[c].length;
l[c][p] = g >= 0 ? m.getAt(g)  : 0
}
}
for (var v = 0, p = 0; p < n.length; p += 1) v += n[p].totalCount;
for (var y = new Array(v), b = 0, p = 0; a > p; p += 1) for (var c = 0; c < n.length; c += 1) p < s[c].length && (y[b] = s[c][p], b += 1);
for (var p = 0; o > p; p += 1) for (var c = 0; c < n.length; c += 1) p < l[c].length && (y[b] = l[c][p], b += 1);
return y
},
E = function (e, t, n) {
for (var r = s.getRSBlocks(e, t), c = l(), u = 0; u < n.length; u += 1) {
var d = n[u];
c.put(d.getMode(), 4),
c.put(d.getLength(), i.getLengthInBits(d.getMode(), e)),
d.write(c)
}
for (var p = 0, u = 0; u < r.length; u += 1) p += r[u].dataCount;
if (c.getLengthInBits() > 8 * p) throw new Error('code length overflow. (' + c.getLengthInBits() + '>' + 8 * p + ')');
for (c.getLengthInBits() + 4 <= 8 * p && c.put(0, 4); c.getLengthInBits() % 8 != 0; ) c.putBit(!1);
for (; !(c.getLengthInBits() >= 8 * p) && (c.put(a, 8), !(c.getLengthInBits() >= 8 * p)); ) c.put(o, 8);
return M(c, r)
};
return v.addData = function (e) {
var t = c(e);
g.push(t),
m = null
},
v.isDark = function (e, t) {
if (0 > e || e >= f || 0 > t || t >= f) throw new Error(e + ',' + t);
return p[e][t]
},
v.getModuleCount = function () {
return f
},
v.make = function () {
y(!1, w())
},
v.createTableTag = function (e, t) {
e = e || 2,
t = 'undefined' == typeof t ? 4 * e : t;
var n = '';
n += '<table style="',
n += ' border-width: 0px; border-style: none;',
n += ' border-collapse: collapse;',
n += ' padding: 0px; margin: ' + t + 'px;',
n += '">',
n += '<tbody>';
for (var r = 0; r < v.getModuleCount(); r += 1) {
n += '<tr>';
for (var a = 0; a < v.getModuleCount(); a += 1) n += '<td style="',
n += ' border-width: 0px; border-style: none;',
n += ' border-collapse: collapse;',
n += ' padding: 0px; margin: 0px;',
n += ' width: ' + e + 'px;',
n += ' height: ' + e + 'px;',
n += ' background-color: ',
n += v.isDark(r, a) ? '#000000' : '#ffffff',
n += ';',
n += '"/>';
n += '</tr>'
}
return n += '</tbody>',
n += '</table>'
},
v.createImgTag = function (e, t) {
e = e || 2,
t = 'undefined' == typeof t ? 4 * e : t;
var n = v.getModuleCount() * e + 2 * t,
r = t,
a = n - t;
return h(n, n, function (t, n) {
if (t >= r && a > t && n >= r && a > n) {
var i = Math.floor((t - r) / e),
o = Math.floor((n - r) / e);
return v.isDark(o, i) ? 0 : 1
}
return 1
})
},
v
};
t.stringToBytes = function (e) {
for (var t = new Array, n = 0; n < e.length; n += 1) {
var r = e.charCodeAt(n);
t.push(255 & r)
}
return t
},
t.createStringToBytes = function (e, t) {
var n = function () {
for (var n = p(e), r = function () {
var e = n.read();
if ( - 1 == e) throw new Error;
return e
}, a = 0, i = {
}; ; ) {
var o = n.read();
if ( - 1 == o) break;
var s = r(),
l = r(),
c = r(),
u = String.fromCharCode(o << 8 | s),
d = l << 8 | c;
i[u] = d,
a += 1
}
if (a != t) throw new Error(a + ' != ' + t);
return i
}(),
r = '?'.charCodeAt(0);
return function (e) {
for (var t = new Array, a = 0; a < e.length; a += 1) {
var i = e.charCodeAt(a);
if (128 > i) t.push(i);
 else {
var o = n[e.charAt(a)];
'number' == typeof o ? (255 & o) == o ? t.push(o)  : (t.push(o >>> 8), t.push(255 & o))  : t.push(r)
}
}
return t
}
};
var n = {
MODE_NUMBER: 1,
MODE_ALPHA_NUM: 2,
MODE_8BIT_BYTE: 4,
MODE_KANJI: 8
},
r = {
L: 1,
M: 0,
Q: 3,
H: 2
},
a = {
PATTERN000: 0,
PATTERN001: 1,
PATTERN010: 2,
PATTERN011: 3,
PATTERN100: 4,
PATTERN101: 5,
PATTERN110: 6,
PATTERN111: 7
},
i = function () {
var t = [
[],
[
6,
18
],
[
6,
22
],
[
6,
26
],
[
6,
30
],
[
6,
34
],
[
6,
22,
38
],
[
6,
24,
42
],
[
6,
26,
46
],
[
6,
28,
50
],
[
6,
30,
54
],
[
6,
32,
58
],
[
6,
34,
62
],
[
6,
26,
46,
66
],
[
6,
26,
48,
70
],
[
6,
26,
50,
74
],
[
6,
30,
54,
78
],
[
6,
30,
56,
82
],
[
6,
30,
58,
86
],
[
6,
34,
62,
90
],
[
6,
28,
50,
72,
94
],
[
6,
26,
50,
74,
98
],
[
6,
30,
54,
78,
102
],
[
6,
28,
54,
80,
106
],
[
6,
32,
58,
84,
110
],
[
6,
30,
58,
86,
114
],
[
6,
34,
62,
90,
118
],
[
6,
26,
50,
74,
98,
122
],
[
6,
30,
54,
78,
102,
126
],
[
6,
26,
52,
78,
104,
130
],
[
6,
30,
56,
82,
108,
134
],
[
6,
34,
60,
86,
112,
138
],
[
6,
30,
58,
86,
114,
142
],
[
6,
34,
62,
90,
118,
146
],
[
6,
30,
54,
78,
102,
126,
150
],
[
6,
24,
50,
76,
102,
128,
154
],
[
6,
28,
54,
80,
106,
132,
158
],
[
6,
32,
58,
84,
110,
136,
162
],
[
6,
26,
54,
82,
110,
138,
166
],
[
6,
30,
58,
86,
114,
142,
170
]
],
r = 1335,
i = 7973,
s = 21522,
l = {
},
c = function (e) {
for (var t = 0; 0 != e; ) t += 1,
e >>>= 1;
return t
};
return l.getBCHTypeInfo = function (e) {
for (var t = e << 10; c(t) - c(r) >= 0; ) t ^= r << c(t) - c(r);
return (e << 10 | t) ^ s
},
l.getBCHTypeNumber = function (e) {
for (var t = e << 12; c(t) - c(i) >= 0; ) t ^= i << c(t) - c(i);
return e << 12 | t
},
l.getPatternPosition = function (e) {
return t[e - 1]
},
l.getMaskFunction = function (e) {
switch (e) {
case a.PATTERN000:
return function (e, t) {
return (e + t) % 2 == 0
};
case a.PATTERN001:
return function (e, t) {
return e % 2 == 0
};
case a.PATTERN010:
return function (e, t) {
return t % 3 == 0
};
case a.PATTERN011:
return function (e, t) {
return (e + t) % 3 == 0
};
case a.PATTERN100:
return function (e, t) {
return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
};
case a.PATTERN101:
return function (e, t) {
return e * t % 2 + e * t % 3 == 0
};
case a.PATTERN110:
return function (e, t) {
return (e * t % 2 + e * t % 3) % 2 == 0
};
case a.PATTERN111:
return function (e, t) {
return (e * t % 3 + (e + t) % 2) % 2 == 0
};
default:
throw new Error('bad maskPattern:' + e)
}
},
l.getErrorCorrectPolynomial = function (t) {
for (var n = e([1], 0), r = 0; t > r; r += 1) n = n.multiply(e([1,
o.gexp(r)], 0));
return n
},
l.getLengthInBits = function (e, t) {
if (t >= 1 && 10 > t) switch (e) {
case n.MODE_NUMBER:
return 10;
case n.MODE_ALPHA_NUM:
return 9;
case n.MODE_8BIT_BYTE:
return 8;
case n.MODE_KANJI:
return 8;
default:
throw new Error('mode:' + e)
} else if (27 > t) switch (e) {
case n.MODE_NUMBER:
return 12;
case n.MODE_ALPHA_NUM:
return 11;
case n.MODE_8BIT_BYTE:
return 16;
case n.MODE_KANJI:
return 10;
default:
throw new Error('mode:' + e)
} else {
if (!(41 > t)) throw new Error('type:' + t);
switch (e) {
case n.MODE_NUMBER:
return 14;
case n.MODE_ALPHA_NUM:
return 13;
case n.MODE_8BIT_BYTE:
return 16;
case n.MODE_KANJI:
return 12;
default:
throw new Error('mode:' + e)
}
}
},
l.getLostPoint = function (e) {
for (var t = e.getModuleCount(), n = 0, r = 0; t > r; r += 1) for (var a = 0; t > a; a += 1) {
for (var i = 0, o = e.isDark(r, a), s = - 1; 1 >= s; s += 1) if (!(0 > r + s || r + s >= t)) for (var l = - 1; 1 >= l; l += 1) 0 > a + l || a + l >= t || (0 != s || 0 != l) && o == e.isDark(r + s, a + l) && (i += 1);
i > 5 && (n += 3 + i - 5)
}
for (var r = 0; t - 1 > r; r += 1) for (var a = 0; t - 1 > a; a += 1) {
var c = 0;
e.isDark(r, a) && (c += 1),
e.isDark(r + 1, a) && (c += 1),
e.isDark(r, a + 1) && (c += 1),
e.isDark(r + 1, a + 1) && (c += 1),
(0 == c || 4 == c) && (n += 3)
}
for (var r = 0; t > r; r += 1) for (var a = 0; t - 6 > a; a += 1) e.isDark(r, a) && !e.isDark(r, a + 1) && e.isDark(r, a + 2) && e.isDark(r, a + 3) && e.isDark(r, a + 4) && !e.isDark(r, a + 5) && e.isDark(r, a + 6) && (n += 40);
for (var a = 0; t > a; a += 1) for (var r = 0; t - 6 > r; r += 1) e.isDark(r, a) && !e.isDark(r + 1, a) && e.isDark(r + 2, a) && e.isDark(r + 3, a) && e.isDark(r + 4, a) && !e.isDark(r + 5, a) && e.isDark(r + 6, a) && (n += 40);
for (var u = 0, a = 0; t > a; a += 1) for (var r = 0; t > r; r += 1) e.isDark(r, a) && (u += 1);
var d = Math.abs(100 * u / t / t - 50) / 5;
return n += 10 * d
},
l
}(),
o = function () {
for (var e = new Array(256), t = new Array(256), n = 0; 8 > n; n += 1) e[n] = 1 << n;
for (var n = 8; 256 > n; n += 1) e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
for (var n = 0; 255 > n; n += 1) t[e[n]] = n;
var r = {
};
return r.glog = function (e) {
if (1 > e) throw new Error('glog(' + e + ')');
return t[e]
},
r.gexp = function (t) {
for (; 0 > t; ) t += 255;
for (; t >= 256; ) t -= 255;
return e[t]
},
r
}(),
s = function () {
var e = [
[1,
26,
19],
[
1,
26,
16
],
[
1,
26,
13
],
[
1,
26,
9
],
[
1,
44,
34
],
[
1,
44,
28
],
[
1,
44,
22
],
[
1,
44,
16
],
[
1,
70,
55
],
[
1,
70,
44
],
[
2,
35,
17
],
[
2,
35,
13
],
[
1,
100,
80
],
[
2,
50,
32
],
[
2,
50,
24
],
[
4,
25,
9
],
[
1,
134,
108
],
[
2,
67,
43
],
[
2,
33,
15,
2,
34,
16
],
[
2,
33,
11,
2,
34,
12
],
[
2,
86,
68
],
[
4,
43,
27
],
[
4,
43,
19
],
[
4,
43,
15
],
[
2,
98,
78
],
[
4,
49,
31
],
[
2,
32,
14,
4,
33,
15
],
[
4,
39,
13,
1,
40,
14
],
[
2,
121,
97
],
[
2,
60,
38,
2,
61,
39
],
[
4,
40,
18,
2,
41,
19
],
[
4,
40,
14,
2,
41,
15
],
[
2,
146,
116
],
[
3,
58,
36,
2,
59,
37
],
[
4,
36,
16,
4,
37,
17
],
[
4,
36,
12,
4,
37,
13
],
[
2,
86,
68,
2,
87,
69
],
[
4,
69,
43,
1,
70,
44
],
[
6,
43,
19,
2,
44,
20
],
[
6,
43,
15,
2,
44,
16
],
[
4,
101,
81
],
[
1,
80,
50,
4,
81,
51
],
[
4,
50,
22,
4,
51,
23
],
[
3,
36,
12,
8,
37,
13
],
[
2,
116,
92,
2,
117,
93
],
[
6,
58,
36,
2,
59,
37
],
[
4,
46,
20,
6,
47,
21
],
[
7,
42,
14,
4,
43,
15
],
[
4,
133,
107
],
[
8,
59,
37,
1,
60,
38
],
[
8,
44,
20,
4,
45,
21
],
[
12,
33,
11,
4,
34,
12
],
[
3,
145,
115,
1,
146,
116
],
[
4,
64,
40,
5,
65,
41
],
[
11,
36,
16,
5,
37,
17
],
[
11,
36,
12,
5,
37,
13
],
[
5,
109,
87,
1,
110,
88
],
[
5,
65,
41,
5,
66,
42
],
[
5,
54,
24,
7,
55,
25
],
[
11,
36,
12,
7,
37,
13
],
[
5,
122,
98,
1,
123,
99
],
[
7,
73,
45,
3,
74,
46
],
[
15,
43,
19,
2,
44,
20
],
[
3,
45,
15,
13,
46,
16
],
[
1,
135,
107,
5,
136,
108
],
[
10,
74,
46,
1,
75,
47
],
[
1,
50,
22,
15,
51,
23
],
[
2,
42,
14,
17,
43,
15
],
[
5,
150,
120,
1,
151,
121
],
[
9,
69,
43,
4,
70,
44
],
[
17,
50,
22,
1,
51,
23
],
[
2,
42,
14,
19,
43,
15
],
[
3,
141,
113,
4,
142,
114
],
[
3,
70,
44,
11,
71,
45
],
[
17,
47,
21,
4,
48,
22
],
[
9,
39,
13,
16,
40,
14
],
[
3,
135,
107,
5,
136,
108
],
[
3,
67,
41,
13,
68,
42
],
[
15,
54,
24,
5,
55,
25
],
[
15,
43,
15,
10,
44,
16
],
[
4,
144,
116,
4,
145,
117
],
[
17,
68,
42
],
[
17,
50,
22,
6,
51,
23
],
[
19,
46,
16,
6,
47,
17
],
[
2,
139,
111,
7,
140,
112
],
[
17,
74,
46
],
[
7,
54,
24,
16,
55,
25
],
[
34,
37,
13
],
[
4,
151,
121,
5,
152,
122
],
[
4,
75,
47,
14,
76,
48
],
[
11,
54,
24,
14,
55,
25
],
[
16,
45,
15,
14,
46,
16
],
[
6,
147,
117,
4,
148,
118
],
[
6,
73,
45,
14,
74,
46
],
[
11,
54,
24,
16,
55,
25
],
[
30,
46,
16,
2,
47,
17
],
[
8,
132,
106,
4,
133,
107
],
[
8,
75,
47,
13,
76,
48
],
[
7,
54,
24,
22,
55,
25
],
[
22,
45,
15,
13,
46,
16
],
[
10,
142,
114,
2,
143,
115
],
[
19,
74,
46,
4,
75,
47
],
[
28,
50,
22,
6,
51,
23
],
[
33,
46,
16,
4,
47,
17
],
[
8,
152,
122,
4,
153,
123
],
[
22,
73,
45,
3,
74,
46
],
[
8,
53,
23,
26,
54,
24
],
[
12,
45,
15,
28,
46,
16
],
[
3,
147,
117,
10,
148,
118
],
[
3,
73,
45,
23,
74,
46
],
[
4,
54,
24,
31,
55,
25
],
[
11,
45,
15,
31,
46,
16
],
[
7,
146,
116,
7,
147,
117
],
[
21,
73,
45,
7,
74,
46
],
[
1,
53,
23,
37,
54,
24
],
[
19,
45,
15,
26,
46,
16
],
[
5,
145,
115,
10,
146,
116
],
[
19,
75,
47,
10,
76,
48
],
[
15,
54,
24,
25,
55,
25
],
[
23,
45,
15,
25,
46,
16
],
[
13,
145,
115,
3,
146,
116
],
[
2,
74,
46,
29,
75,
47
],
[
42,
54,
24,
1,
55,
25
],
[
23,
45,
15,
28,
46,
16
],
[
17,
145,
115
],
[
10,
74,
46,
23,
75,
47
],
[
10,
54,
24,
35,
55,
25
],
[
19,
45,
15,
35,
46,
16
],
[
17,
145,
115,
1,
146,
116
],
[
14,
74,
46,
21,
75,
47
],
[
29,
54,
24,
19,
55,
25
],
[
11,
45,
15,
46,
46,
16
],
[
13,
145,
115,
6,
146,
116
],
[
14,
74,
46,
23,
75,
47
],
[
44,
54,
24,
7,
55,
25
],
[
59,
46,
16,
1,
47,
17
],
[
12,
151,
121,
7,
152,
122
],
[
12,
75,
47,
26,
76,
48
],
[
39,
54,
24,
14,
55,
25
],
[
22,
45,
15,
41,
46,
16
],
[
6,
151,
121,
14,
152,
122
],
[
6,
75,
47,
34,
76,
48
],
[
46,
54,
24,
10,
55,
25
],
[
2,
45,
15,
64,
46,
16
],
[
17,
152,
122,
4,
153,
123
],
[
29,
74,
46,
14,
75,
47
],
[
49,
54,
24,
10,
55,
25
],
[
24,
45,
15,
46,
46,
16
],
[
4,
152,
122,
18,
153,
123
],
[
13,
74,
46,
32,
75,
47
],
[
48,
54,
24,
14,
55,
25
],
[
42,
45,
15,
32,
46,
16
],
[
20,
147,
117,
4,
148,
118
],
[
40,
75,
47,
7,
76,
48
],
[
43,
54,
24,
22,
55,
25
],
[
10,
45,
15,
67,
46,
16
],
[
19,
148,
118,
6,
149,
119
],
[
18,
75,
47,
31,
76,
48
],
[
34,
54,
24,
34,
55,
25
],
[
20,
45,
15,
61,
46,
16
]
],
t = function (e, t) {
var n = {
};
return n.totalCount = e,
n.dataCount = t,
n
},
n = {
},
a = function (t, n) {
switch (n) {
case r.L:
return e[4 * (t - 1) + 0];
case r.M:
return e[4 * (t - 1) + 1];
case r.Q:
return e[4 * (t - 1) + 2];
case r.H:
return e[4 * (t - 1) + 3];
default:
return
}
};
return n.getRSBlocks = function (e, n) {
var r = a(e, n);
if ('undefined' == typeof r) throw new Error('bad rs block @ typeNumber:' + e + '/errorCorrectLevel:' + n);
for (var i = r.length / 3, o = new Array, s = 0; i > s; s += 1) for (var l = r[3 * s + 0], c = r[3 * s + 1], u = r[3 * s + 2], d = 0; l > d; d += 1) o.push(t(c, u));
return o
},
n
}(),
l = function () {
var e = new Array,
t = 0,
n = {
};
return n.getBuffer = function () {
return e
},
n.getAt = function (t) {
var n = Math.floor(t / 8);
return 1 == (e[n] >>> 7 - t % 8 & 1)
},
n.put = function (e, t) {
for (var r = 0; t > r; r += 1) n.putBit(1 == (e >>> t - r - 1 & 1))
},
n.getLengthInBits = function () {
return t
},
n.putBit = function (n) {
var r = Math.floor(t / 8);
e.length <= r && e.push(0),
n && (e[r] |= 128 >>> t % 8),
t += 1
},
n
},
c = function (e) {
var r = n.MODE_8BIT_BYTE,
a = t.stringToBytes(e),
i = {
};
return i.getMode = function () {
return r
},
i.getLength = function (e) {
return a.length
},
i.write = function (e) {
for (var t = 0; t < a.length; t += 1) e.put(a[t], 8)
},
i
},
u = function () {
var e = new Array,
t = {
};
return t.writeByte = function (t) {
e.push(255 & t)
},
t.writeShort = function (e) {
t.writeByte(e),
t.writeByte(e >>> 8)
},
t.writeBytes = function (e, n, r) {
n = n || 0,
r = r || e.length;
for (var a = 0; r > a; a += 1) t.writeByte(e[a + n])
},
t.writeString = function (e) {
for (var n = 0; n < e.length; n += 1) t.writeByte(e.charCodeAt(n))
},
t.toByteArray = function () {
return e
},
t.toString = function () {
var t = '';
t += '[';
for (var n = 0; n < e.length; n += 1) n > 0 && (t += ','),
t += e[n];
return t += ']'
},
t
},
d = function () {
var e = 0,
t = 0,
n = 0,
r = '',
a = {
},
i = function (e) {
r += String.fromCharCode(o(63 & e))
},
o = function (e) {
if (0 > e);
 else {
if (26 > e) return 65 + e;
if (52 > e) return 97 + (e - 26);
if (62 > e) return 48 + (e - 52);
if (62 == e) return 43;
if (63 == e) return 47
}
throw new Error('n:' + e)
};
return a.writeByte = function (r) {
for (e = e << 8 | 255 & r, t += 8, n += 1; t >= 6; ) i(e >>> t - 6),
t -= 6
},
a.flush = function () {
if (t > 0 && (i(e << 6 - t), e = 0, t = 0), n % 3 != 0) for (var a = 3 - n % 3, o = 0; a > o; o += 1) r += '='
},
a.toString = function () {
return r
},
a
},
p = function (e) {
var t = e,
n = 0,
r = 0,
a = 0,
i = {
};
i.read = function () {
for (; 8 > a; ) {
if (n >= t.length) {
if (0 == a) return - 1;
throw new Error('unexpected end of file./' + a)
}
var e = t.charAt(n);
if (n += 1, '=' == e) return a = 0,
- 1;
e.match(/^\s$/) || (r = r << 6 | o(e.charCodeAt(0)), a += 6)
}
var i = r >>> a - 8 & 255;
return a -= 8,
i
};
var o = function (e) {
if (e >= 65 && 90 >= e) return e - 65;
if (e >= 97 && 122 >= e) return e - 97 + 26;
if (e >= 48 && 57 >= e) return e - 48 + 52;
if (43 == e) return 62;
if (47 == e) return 63;
throw new Error('c:' + e)
};
return i
},
f = function (e, t) {
var n = e,
r = t,
a = new Array(e * t),
i = {
};
i.setPixel = function (e, t, r) {
a[t * n + e] = r
},
i.write = function (e) {
e.writeString('GIF87a'),
e.writeShort(n),
e.writeShort(r),
e.writeByte(128),
e.writeByte(0),
e.writeByte(0),
e.writeByte(0),
e.writeByte(0),
e.writeByte(0),
e.writeByte(255),
e.writeByte(255),
e.writeByte(255),
e.writeString(','),
e.writeShort(0),
e.writeShort(0),
e.writeShort(n),
e.writeShort(r),
e.writeByte(0);
var t = 2,
a = s(t);
e.writeByte(t);
for (var i = 0; a.length - i > 255; ) e.writeByte(255),
e.writeBytes(a, i, 255),
i += 255;
e.writeByte(a.length - i),
e.writeBytes(a, i, a.length - i),
e.writeByte(0),
e.writeString(';')
};
var o = function (e) {
var t = e,
n = 0,
r = 0,
a = {
};
return a.write = function (e, a) {
if (e >>> a != 0) throw new Error('length over');
for (; n + a >= 8; ) t.writeByte(255 & (e << n | r)),
a -= 8 - n,
e >>>= 8 - n,
r = 0,
n = 0;
r = e << n | r,
n += a
},
a.flush = function () {
n > 0 && t.writeByte(r)
},
a
},
s = function (e) {
for (var t = 1 << e, n = (1 << e) + 1, r = e + 1, i = l(), s = 0; t > s; s += 1) i.add(String.fromCharCode(s));
i.add(String.fromCharCode(t)),
i.add(String.fromCharCode(n));
var c = u(),
d = o(c);
d.write(t, r);
var p = 0,
f = String.fromCharCode(a[p]);
for (p += 1; p < a.length; ) {
var h = String.fromCharCode(a[p]);
p += 1,
i.contains(f + h) ? f += h : (d.write(i.indexOf(f), r), i.size() < 4095 && (i.size() == 1 << r && (r += 1), i.add(f + h)), f = h)
}
return d.write(i.indexOf(f), r),
d.write(n, r),
d.flush(),
c.toByteArray()
},
l = function () {
var e = {
},
t = 0,
n = {
};
return n.add = function (r) {
if (n.contains(r)) throw new Error('dup key:' + r);
e[r] = t,
t += 1
},
n.size = function () {
return t
},
n.indexOf = function (t) {
return e[t]
},
n.contains = function (t) {
return 'undefined' != typeof e[t]
},
n
};
return i
},
h = function (e, t, n, r) {
for (var a = f(e, t), i = 0; t > i; i += 1) for (var o = 0; e > o; o += 1) a.setPixel(o, i, n(o, i));
var s = u();
a.write(s);
for (var l = d(), c = s.toByteArray(), p = 0; p < c.length; p += 1) l.writeByte(c[p]);
l.flush();
var h = '';
return h += '<img',
h += ' src="',
h += 'data:image/gif;base64,',
h += l,
h += '"',
h += ' width="',
h += e,
h += '"',
h += ' height="',
h += t,
h += '"',
r && (h += ' alt="', h += r, h += '"'),
h += '/>'
};
return t
}();
return function (e) {
'function' == typeof define && define.amd ? define('qrcode', [
], e)  : 'object' == typeof exports && (module.exports = e())
}(function () {
return e
}),
!function (e) {
e.stringToBytes = function (e) {
function t(e) {
for (var t = [
], n = 0; n < e.length; n++) {
var r = e.charCodeAt(n);
128 > r ? t.push(r)  : 2048 > r ? t.push(192 | r >> 6, 128 | 63 & r)  : 55296 > r || r >= 57344 ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r)  : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
}
return t
}
return t(e)
}
}(e),
e
}()),
define('components/cart/models/skudata', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return this.id ? _global.shop ? '/goods/' + this.id + '/skudata.json' : '/mall/goods/' + this.id + '/skudata.json' : _global.shop ? '/goods/skudata.json' : '/mall/goods/skudata.json'
}
})
}),
define('components/cart/models/skuBargainData', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return '/bargain/' + this.get('bargain_id') + '/' + this.get('bargain_initiate_id') + '/getBargainSku.json'
}
})
}),
define('components/cart/models/skuBangmianData', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return '/bangmian/' + this.get('bangmian_id') + '/getBangmianSku.json'
}
})
}),
define('apps/trade/models/cart', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return this.id ? _global.shop ? '/cart/' + this.id + '.json' : '/mall/cart/' + this.id + '.json' : _global.shop ? '/cart.json' : '/mall/cart.json'
}
})
}),
define('apps/trade/models/bargainCart', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return '/bargain/' + this.get('bargain_id') + '/' + this.get('bargain_initiate_id') + '/postBargainOrder.json'
}
})
}),
define('apps/trade/models/bangmianCart', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return '/bangmian/' + this.get('bangmian_id') + '/' + this.get('bangmian_initiate_id') + '/bangmianOrder.json'
}
})
}),
define('text!components/cart/templates/main.html', [
], function () {
return '<div class="popup popup-sku remove-on-close">\n    <div class="goods-summary">\n        <div class="thumb"><img id="main-img" src="{{=_global.url.ms}}{{=it.img}}?imageMogr2/thumbnail/280x280"></div>\n        <div class="detail">\n            <p class="title">{{=it.title}}</p>\n            <div class="price-scope cart-price-num">\n                <i class="price-currency">{{=_global.setting.currency_unit}}</i>\n                {{?(it.is_sku)}}\n                    {{? (it.price == it.max_price)}}\n                    <span class="price-integer">{{=parseInt(it.price)}}</span>\n                    <span class="price-decimal">{{=it.price.substring(it.price.indexOf("."), it.price.indexOf(".") + 3)}}</span>\n                    {{??}}\n                    <span class="price-integer">{{=it.price}}-{{=it.max_price}}</span>\n                    {{?}}\n                {{??}}\n                {{?it.vip_price}}\n                <span class="price-integer">{{=parseInt(it.vip_price)}}</span>\n                <span class="price-decimal">{{=it.vip_price.substring(it.vip_price.indexOf("."), it.vip_price.indexOf(".") + 3)}}</span>\n                {{??}}\n                <span class="price-integer">{{=parseInt(it.price)}}</span>\n                <span class="price-decimal">{{=it.price.substring(it.price.indexOf("."), it.price.indexOf(".") + 3)}}</span>\n                {{?}}\n                {{?}}\n\n                {{?it.credit_price}}\n                <span class="price-credit-cart">+</span>\n                <span class="price-credit-cart">{{=parseInt(it.credit_price)}}积分</span>\n                {{?}}\n            </div>\n        </div>\n        <div class="close-popup if if-close" data-popup=".popup-sku"></div>\n    </div>\n    <div class="popup-sku-content">\n    <ul class="sku-control cart-sku-control">\n        {{for(var i in it.goods_props){}}\n        <li>\n            <h2>{{=it.goods_props[i].name}}</h2>\n            <div class="items cart-sku-items">\n                {{~it.goods_props[i].gps:v:index}}\n                <label class="cart-sku-click {{?(v.stock <= 0)}}disabled{{?}} sku-click-{{=it.goods_props[i].id}}{{=v.prop_vid}}" data-str="{{=it.goods_props[i].id}}:{{=v.prop_vid}}">{{=v.prop_value}}</label>\n                {{~}}\n            </div>\n        </li>\n        {{}}}\n    </ul>\n    {{?(it.btnType != 3)}}\n    <div class="quantity-control clearfix">\n        <label>数量</label>\n        <div class="quantity">\n            <button class="minus cart-num-minus disabled"><i class="if if-minis"></i></button>\n            <input type="tel" name="cart-num" value="1">\n            <button class="plus cart-num-plus"><i class="if if-plus"></i></button>\n        </div>\n        <div class="stock">库存：<span class="cart-stock-num">{{=it.stock}}</span></div>\n    </div>\n    <div class="message-control">\n        <form class="form-horizontal" role="form">\n            {{~it.collect_fields:v:index}}\n            <div class="form-group">\n                <label>{{=v.name}}</label>\n{{switch(v.type){}}\n{{case \'date\':}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item date-input" placeholder="请选择{{=v.name}}" />\n{{break;}}\n{{case \'time\':}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item time-input" placeholder="请选择{{=v.name}}" />\n{{break;}}\n{{case \'multipleText\':}}\n<textarea name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item">{{?v.value}}{{=v.value}}{{?}}</textarea>\n{{break;}}\n{{default:}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} {{?v.value}}value="{{=v.value}}"{{?}} class="form-item" placeholder="请填写{{=v.name}}">\n{{}}}\n            </div>\n            {{~}}\n        </form>\n    </div>\n    {{?}}\n{{switch(it.btnType){}}\n{{case 0:}}\n    <div class="popup-options cart-btn-two">\n        <button type="button" class="btn btn-block btn-cart cart-submit-btn">加入购物车</button>\n        <button type="button" class="btn btn-block btn-buy cart-buy-btn">立即购买</button>\n    </div>\n{{break;}}\n{{case 1:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-cart cart-submit-btn">加入购物车</button>\n    </div>\n{{break;}}\n{{case 2:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-buy cart-buy-btn">立即购买</button>\n    </div>\n{{break;}}\n{{case 3:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-buy cart-sku-submit-btn">确认修改</button>\n    </div>\n{{break;}}\n{{case 4:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-buy cart-submit-btn">确认</button>\n    </div>\n{{break;}}\n{{case 5:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-buy cart-buy-btn">确认</button>\n    </div>\n{{break;}}\n{{case 6:}}\n    <div class="popup-options">\n        <button type="button" class="btn btn-block btn-buy ump-buy-btn">确认</button>\n    </div>\n{{break;}}\n{{}}}\n</div></div>';
}),
define('components/cart/views/main', [
'backbone',
'jquery',
'doT',
'components/cart/models/skudata',
'components/cart/models/skuBargainData',
'components/cart/models/skuBangmianData',
'apps/trade/models/cart',
'apps/trade/models/bargainCart',
'apps/trade/models/bangmianCart',
'text!components/cart/templates/main.html'
], function (Backbone, $, doT, Model, BargainModel, BangmianModel, CartModel, BargainCartModel, BangmianCartModel, Tpl) {
return Backbone.View.extend({
el: 'body',
events: {
'click .cart-num-plus': 'numPlus',
'click .cart-num-minus': 'numMinus',
'change input[name="cart-num"]': 'numChange',
'click .cart-submit-btn': 'addCart',
'click .ump-buy-btn': 'umpSubmit',
'click .cart-sku-submit-btn': 'updateSku',
'click .cart-buy-btn': 'buy',
'click .close-popup': 'closeModal',
'click .popup-overlay.visible': 'closeModal'
},
template: doT.template(Tpl),
initialize: function () {
this.model = new Model,
this.bargainModel = new BargainModel,
this.bargainModel.on('sync', this.loadDom, this),
this.bargainCartModel = new BargainCartModel,
this.bangmianModel = new BangmianModel,
this.bangmianModel.on('sync', this.loadDom, this),
this.bangmianCartModel = new BangmianCartModel,
this.cartModel = new CartModel,
this.selected = {
},
this.pid = 0,
$.indicator(),
this.undelegateEvents()
},
open: function (e, t) {
if (t) this.gid = t,
this.type = 0;
 else {
var n = $(e.currentTarget);
this.gid = n.attr('cart-gid'),
this.pid = n.attr('cart-pid') || 0,
this.type = parseInt(n.attr('cart-type')) || 0,
this.pageDetail = n.attr('page-detail') || 0,
e.stopPropagation(),
e.preventDefault()
}
var r = this;
this.model.set({
id: this.gid,
btnType: this.type
}),
this.model.fetch({
success: function (e, t, n) {
r.data = r.model.toJSON(),
'' != t.ump.alone || !r.pageDetail && 1 == t.is_virtual ? (t.shop_id ? window.location.href = 'http://shop' + t.shop_id + '.' + _global.url.base_domain + '/goods/' + t.id : Backbone.history.navigate('goods/' + t.id, {
trigger: !0
}), $.indicator('hide'))  : r.model.on('sync', r.loadDom, r)
}
})
},
umpOpen: function (e) {
var t = this;
switch (e.umpType) {
case 'bargain':
t.bargainModel.set({
bargain_id: e.bargain_id,
bargain_initiate_id: e.bargain_initiate_id
}),
t.bargainModel.fetch({
success: function (n, r, a) {
t.data = r,
t.data = $.extend(!0, t.data, {
gid: e.gid,
btnType: e.btnType
}),
t.submitUmpType = 'bargain'
}
});
break;
case 'bangmian':
t.bangmianModel.set({
bangmian_id: e.bangmian_id,
bangmian_initiate_id: e.bangmian_initiate_id
}),
t.bangmianModel.fetch({
success: function (n, r, a) {
t.data = r,
t.data = $.extend(!0, t.data, {
gid: e.gid,
btnType: e.btnType
}),
t.submitUmpType = 'bangmian'
}
})
}
},
umpSubmit: function () {
var e = this;
switch (e.submitUmpType) {
case 'bargain':
e.bargain();
break;
case 'bangmian':
e.bangmian()
}
},
bargain: function () {
this.is_login();
var e = this,
t = [
],
n = {
bargain_id: e.bargainModel.get('bargain_id'),
bargain_initiate_id: e.bargainModel.get('bargain_initiate_id'),
goods_id: e.data.gid,
quantity: parseInt(e.inputDom.val())
};
if (1 != parseInt(e.inputDom.val())) return $.toast('优惠商品只能购买一件哦~'),
!1;
if (e.data.is_sku) {
if (!e.selectInfo) return $.toast('请先选择规格尺寸'),
!1;
n.product_id = e.selectInfo.id
}
var r = e.data.collect_fields;
if (r) {
var a = e.validityCollectFields();
if (!a) return !1;
n.fields = a,
$.localStorage && e.setCollectFieldHistory(a)
}
t.push(n),
e.bargainCartModel.set({
goods: t,
bargain_id: e.bargainModel.get('bargain_id'),
bargain_initiate_id: e.bargainModel.get('bargain_initiate_id')
}),
$.indicator(),
e.undelegateEvents(),
e.bargainCartModel.save('', '', {
success: function (t, n, r) {
n.status ? (e.closeModal(), window.location.href = _global.url.trade_url + 'order/confirm?_=' + _global.shop.id + '&order_id=' + n.order_id)  : ($.toast(n.msg), e.delegateEvents()),
$.indicator('hide')
}
})
},
bangmian: function () {
this.is_login();
var e = this,
t = [
],
n = {
bangmian_id: e.bangmianModel.get('bangmian_id'),
bangmian_initiate_id: e.bangmianModel.get('bangmian_initiate_id'),
goods_id: e.data.gid,
quantity: parseInt(e.inputDom.val())
};
if (e.data.is_sku) {
if (!e.selectInfo) return $.toast('请先选择规格尺寸'),
!1;
n.product_id = e.selectInfo.id
}
var r = e.data.collect_fields;
if (r) {
var a = e.validityCollectFields();
if (!a) return !1;
n.fields = a,
$.localStorage && e.setCollectFieldHistory(a)
}
t.push(n),
e.bangmianCartModel.set({
goods: t,
bangmian_id: e.bangmianModel.get('bangmian_id'),
bangmian_initiate_id: e.bangmianModel.get('bangmian_initiate_id')
}),
$.indicator(),
e.undelegateEvents(),
e.bangmianCartModel.save('', '', {
success: function (t, n, r) {
var a = n.order_id;
n.other_order_id && (a = n.other_order_id);
var i = _global.url.shop_url + 'bangmian/detail/' + n.bangmian_id + '/' + a;
n.status ? (e.closeModal(), window.location.href = _global.url.trade_url + 'order/confirm?_=' + _global.shop.id + '&order_id=' + n.order_id + '&redirect_uri=' + i)  : ($.toast(n.msg), e.delegateEvents()),
$.indicator('hide')
}
})
},
loadDom: function () {
var e = this;
if (this.skuStock(), this.data.collect_fields && (this.data.collect_fields = e.getDefaultCollectFields(this.data.collect_fields)), this.$el.append(this.template(e.data)), $('.cart-sku-click').bind('click', function (t) {
e.skuSelect(t)
}), this.inputDom = $('input[name=\'cart-num\']'), this.mainImgDom = $('#main-img', this.$el), this.minusDom = $('.cart-num-minus'), this.plusDom = $('.cart-num-plus'), this.stockDom = $('.cart-stock-num'), this.priceDom = $('.cart-price-num'), this.stock = this.data.stock, 'bargain' == this.submitUmpType && (this.minusDom.addClass('disabled'), this.plusDom.addClass('disabled')), 0 != this.pid) {
var t = e.getPropStr(this.pid),
n = t.split(';');
for (var r in n) {
var a = n[r].split(':').join(''),
i = $('.sku-click-' + a);
i.trigger('click')
}
}
$('.popup-sku-content', this.$el).css({
'max-height': $(window).height() - 100
}),
$.popup('.popup-sku'),
$('.date-input').calendar({
dateFormat: 'yyyy-mm-dd'
}),
$('.time-input').datetimePicker({
toolbarTemplate: '<header class="bar bar-nav">                    <button class="button button-link pull-right close-picker">确定</button>                    <h1 class="title">选择日期和时间</h1>                    </header>'
}),
this.delegateEvents(),
$.indicator('hide')
},
getDefaultCollectFields: function (data) {
var collectFieldHistory = localStorage.getItem('collectFieldHistory');
if (collectFieldHistory) {
collectFieldHistory = eval('(' + collectFieldHistory + ')');
for (var i in data) data[i].value = '',
collectFieldHistory[data[i].type] && (data[i].value = collectFieldHistory[data[i].type])
}
return data
},
numPlus: function (e) {
if (!$(e.currentTarget).hasClass('disabled')) {
var t = parseInt(this.inputDom.val()) + 1;
this.inputDom.val(t).trigger('change')
}
},
numMinus: function (e) {
if (!$(e.currentTarget).hasClass('disabled')) {
var t = parseInt(this.inputDom.val()) - 1;
this.inputDom.val(t).trigger('change')
}
},
numChange: function () {
var e = this.inputDom.val();
if (!/^[1-9]\d*$/.test(e)) {
if ($.toast('请填写正整数'), !(parseInt(e) > 0)) return this.inputDom.val(1),
!1;
this.inputDom.val(parseInt(e))
}
e = parseInt(e),
'bargain' != this.submitUmpType && (e > 1 ? this.minusDom.removeClass('disabled')  : 1 >= e && (this.minusDom.addClass('disabled'), 1 > e && ($.toast('至少购买1件噢'), this.inputDom.val(1))), e >= this.stock ? (this.plusDom.addClass('disabled'), e > this.stock && ($.toast('只有' + this.stock + '件啦'), this.inputDom.val(this.stock)))  : this.plusDom.removeClass('disabled'))
},
getPropStr: function (e) {
var t = this.data.products;
for (var n in t) if (t[n].id == e) return t[n].props;
return !1
},
skuStock: function (e) {
this.props = this.data.goods_props;
for (var t in this.props) {
var n = this.props[t];
for (var r in n.gps) {
var a = n.gps[r],
i = [
n.id + ':' + a.prop_vid
];
n.gps[r].stock = this.getStock(i)
}
}
},
getStock: function (e) {
var t = this.data.products,
n = 0;
for (var r in t) this.checkStock(e, t[r].props) && (n += t[r].stock);
return n
},
checkStock: function (e, t) {
var n = !0;
for (var r in e) if ( - 1 == t.indexOf(e[r])) {
n = !1;
break
}
return n
},
skuSelect: function (e) {
var t = $(e.currentTarget);
if (this.selectInfo = null, !t.hasClass('disabled')) {
t.toggleClass('checked').siblings().removeClass('checked');
var n = t.parent('.cart-sku-items').parent('li').index();
if (t.hasClass('checked') ? this.selected[n] = t.attr('data-str')  : delete this.selected[n], this.skuEach(), Object.keys(this.props).length == Object.keys(this.selected).length) {
this.stock = this.getStock(this.selected),
this.stockDom.text(this.stock),
this.inputDom.trigger('change'),
this.selectInfo = this.getSkuInfo();
var r = this.selectInfo.price;
if (this.selectInfo.vip_price && (r = this.selectInfo.vip_price), this.selectInfo.img ? this.mainImgDom.attr('src', _global.url.ms + this.selectInfo.img)  : this.mainImgDom.attr('src', _global.url.ms + this.data.img), this.data.credit_price) {
var a = this.data.credit_price;
this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + parseInt(r) + '</span>\n<span class="price-decimal">' + r.substring(r.indexOf('.'), r.indexOf('.') + 3) + '</span><span class="price-credit-cart">+</span><span class="price-credit-cart">' + parseInt(a) + '积分</span>')
} else this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + parseInt(r) + '</span>\n<span class="price-decimal">' + r.substring(r.indexOf('.'), r.indexOf('.') + 3) + '</span>')
} else if (this.stock = this.data.stock, this.stockDom.text(this.stock), this.inputDom.trigger('change'), this.mainImgDom.attr('src', _global.url.ms + this.data.img), this.data.price == this.data.max_price) if (this.data.credit_price) {
var a = this.data.credit_price;
this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + parseInt(this.data.price) + '</span><span class="price-decimal"> ' + this.data.price.substring(this.data.price.indexOf('.'), this.data.price.indexOf('.') + 3) + '</span>\n<span class="price-credit-cart">+</span><span class="price-credit-cart">' + parseInt(a) + '积分</span>')
} else this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + parseInt(this.data.price) + '</span><span class="price-decimal"> ' + this.data.price.substring(this.data.price.indexOf('.'), this.data.price.indexOf('.') + 3) + '</span>\n');
 else if (this.data.credit_price) {
var a = this.data.credit_price;
this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + this.data.price + '-' + this.data.max_price + '</span>\n<span class="price-credit-cart">+</span><span class="price-credit-cart">' + parseInt(a) + '积分</span>')
} else this.priceDom.html('<i class="price-currency">￥</i>\n<span class="price-integer">' + this.data.price + '-' + this.data.max_price + '</span>\n')
}
},
skuEach: function () {
var e = this;
$('.cart-sku-control').children('li').each(function () {
var t = $(this).index(),
n = [
],
r = 0;
for (var a in e.selected) t != a && n.push(e.selected[a]);
$(this).children('.cart-sku-items').children('label').each(function () {
var t = [
];
t = $.copyObj(n),
t.push($(this).attr('data-str')),
r = e.getStock(t),
0 >= r ? $(this).addClass('disabled')  : $(this).removeClass('disabled')
})
})
},
getSkuInfo: function () {
var e = this.data.products,
t = {
};
for (var n in e) {
var r = e[n];
if (this.checkStock(this.selected, r.props)) {
t = {
id: r.id,
img: r.img,
price: r.price,
props_str: r.props_str,
vip_price: r.vip_price
};
break
}
}
return t
},
validityCollectFields: function () {
var e = $.copyObj(this.data.collect_fields);
for (var t in e) 'multipleText' != e[t].type ? e[t].value = $.trim($('input[name=\'' + e[t].type + t + '\']').val())  : e[t].value = $.trim($('textarea[name=\'' + e[t].type + t + '\']').val());
var n = $.validity(e);
return n.status ? e : ($.toast(n.error), !1)
},
addCart: function () {
this.cartSubmit(0)
},
updateSku: function () {
this.trigger('updateSku', this.selectInfo)
},
buy: function () {
this.data.status ? $.toast('积分不足，无法下单')  : this.cartSubmit(1)
},
cartSubmit: function (e) {
var t = {
type: e,
goods_id: this.gid,
quantity: parseInt(this.inputDom.val())
};
if (this.data.is_sku) {
if (!this.selectInfo) return $.toast('请先选择商品信息'),
!1;
t.product_id = this.selectInfo.id
}
var n = this.data.collect_fields;
if (n) {
var r = this.validityCollectFields();
if (!r) return !1;
t.fields = r,
$.localStorage && this.setCollectFieldHistory(r)
}
this.cartModel.set(t);
var a = this;
$.indicator(),
this.undelegateEvents(),
this.cartModel.save('', '', {
success: function (t, n, r) {
n.status ? (a.closeModal(), e ? 'undefined' != typeof _global.shop && 'undefined' != typeof _global.shop.id ? window.location.href = _global.url.trade_url + 'order/confirm?_=' + _global.shop.id : window.location.href = _global.url.trade_url + 'order/confirm?_=' + a.data.shop_id : (0 == _global.cart.count && $('.js-go-cart').append('<em></em>'), _global.cart.count++, $.toast('添加成功，在购物车等亲～')))  : ($.toast(n.error), a.delegateEvents()),
$.indicator('hide')
}
})
},
setCollectFieldHistory: function (data) {
var collectFieldHistory = localStorage.getItem('collectFieldHistory');
collectFieldHistory = collectFieldHistory ? eval('(' + collectFieldHistory + ')')  : {
};
for (var i in data) {
var res = data[i];
'date' != res.type && 'time' != res.type && (collectFieldHistory[res.type] = res.value)
}
localStorage.setItem('collectFieldHistory', JSON.stringify(collectFieldHistory))
},
closeModal: function () {
$.closeModal('.popup-sku'),
this.undelegateEvents()
},
is_login: function () {
if (!_global.user) {
if ($.device.weixin) return $.authRedirect(),
!1;
var e = decodeURIComponent(Backbone.history.location.pathname.substring(1) + Backbone.history.location.search);
return Backbone.history.navigate('login?' + e, {
trigger: !0,
replace: !0
}),
!1
}
return $.device.weixin && void 0 != _global.user.weixin_info ? ($.authRedirect(), !1)  : void 0
}
})
}),
define('apps/user/models/order_count', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return _global.mall_info ? ' /mall/mall_uc_order.json' : '/shop/uc_order.json'
}
})
}),
define('text!components/user/tpl.html', [
], function () {
return '<div class="panel-overlay"></div>\n<div class="panel panel-right panel-reveal panel-user">\n    <div class="panel-user-info">\n        <img class="avatar" src="{{=_global.user.avatar||\'/image/default_head_img.jpg\'}}">\n        <div class="account">\n            <span class="user-name">{{=_global.user.name||\'新用户\'}}</span>\n            <span class="user-account"><i class="if if-user"></i>\n                {{?_global.user.member_account}}\n                  {{=_global.user.member_account||\'\'}}\n                {{?}}\n            </span>\n            <span class="user-mobile"><i class="if if-mobile"></i>{{=_global.user.mobile || \'\'}}</span>\n        </div>\n    </div>\n    <ul class="panel-user-order clearfix">\n        <li>\n\n            <a class="close-panel jump-to-topay" href="{{? _global.mall_info }}{{=\'http://mall\'+_global.mall_info.id+\'.\'+_global.url.base_domain+\'/super/order?status=topay\'}}{{??}}/order?status=topay{{?}}">\n                <i>{{=it.toPayCount||0}}</i><span>{{=_global.order_config.order_str[\'ORDER_TOPAY\']}}</span>\n            </a>\n        </li>\n        <li>\n            <a class="close-panel jump-to-tosend" href="{{? _global.mall_info }}{{=\'http://mall\'+_global.mall_info.id+\'.\'+_global.url.base_domain+\'/super/order?status=tosend\'}}{{??}}/order?status=tosend{{?}}">\n                <i>{{=it.toSendCount||0}}</i><span>{{=_global.order_config.order_str[\'ORDER_TOSEND\']}}</span>\n            </a>\n        </li>\n        <li>\n            <a class="close-panel jump-to-send" href="{{? _global.mall_info }}{{=\'http://mall\'+_global.mall_info.id+\'.\'+_global.url.base_domain+\'/super/order?status=send\'}}{{??}}/order?status=send{{?}}">\n                <i>{{=it.sendCount||0}}</i><span>{{=_global.order_config.order_str[\'ORDER_SEND\']}}</span>\n            </a>\n        </li>\n        <li>\n            <a class="close-panel jump-to-suss" href="{{? _global.mall_info }}{{=\'http://mall\'+_global.mall_info.id+\'.\'+_global.url.base_domain+\'/super/order?status=finish\'}}{{??}}/order?status=finish{{?}}">\n                <i>{{=it.sussCount||0}}</i><span>{{=_global.order_config.order_str[\'ORDER_SUCCESS\']}}</span>\n            </a>\n        </li>\n    </ul>\n    <ul class="list-block">\n        <li>\n        {{? _global.mall_info }}\n            <a class="close-panel" href="{{=\'http://mall\'+_global.mall_info.id+\'.\'+_global.url.base_domain+\'/super/order\'}}">\n                <i class="if if-order"></i>我的订单\n            </a>\n        {{??}}\n            <a class="close-panel" href="/order">\n                <i class="if if-order"></i>我的订单\n            </a>\n        {{?}}\n        </li>\n        <li><a class="close-panel" href="/auction/myauction?status=topay"><i class="if iconfont">&#xe6ad;</i>我的拍卖</a></li>\n        <li><a class="close-panel" href="/coupon"><i class="if if-coupon"></i>优惠券</a></li>\n        <li><a class="close-panel" href="/recently"><i class="if if-record"></i>浏览记录</a></li>\n        {{?_global.checkPrev(\'guide\')}}\n            {{?_global.guider.status==0}}\n            <li><a class="close-panel" href="/guide"><i class="if if-store"></i>我的小店</a></li>\n            <li><a class="close-panel" href="/guider"><i class="if if-distribution"></i>{{=_global.guider_alias}}中心</a></li>\n            {{?}}\n            {{?_global.guider.status==1 || !_global.guider.id}}\n            <li><a class="close-panel" href="/guider/apply"><i class="if if-distribution"></i>{{=_global.guider_alias}}申请</a></li>\n            {{?}}\n        {{?}}\n        {{?_global.checkPrev(\'partner\') && _global.partner}}\n            <li><a class="close-panel" href="/partner"><i class="if if-partner"></i>{{=_global.partner_setting.partner_alias}}中心</a></li>\n            <!--{{?_global.partner && (_global.partner.status == 0 || _global.partner.status == 2)}}\n            <li><a class="close-panel" href="/partner"><i class="if if-partner"></i>{{=_global.partner_setting.partner_alias}}中心</a></li>\n            {{??}}\n            <li><a class="close-panel" href="/partner/apply"><i class="if if-partner"></i>{{=_global.partner_setting.partner_alias}}申请</a></li>\n            {{?}}-->\n        {{?}}\n        {{?_global.teamer}}\n        <li><a class="close-panel" href="/team"><i class="if iconfont">&#xe69e;</i>{{=_global.team_alias}}中心</a></li>\n        {{?}}\n    </ul>\n    <div class="panel-act">\n        <a class="close-panel" href="javascript:;"><i class="if if-back"></i> 返回</a>\n        <a class="go-ucenter close-panel" href="/user"><i class="if if-forward"></i> 进入</a>\n    </div>\n</div>\n        '
}),
define('components/user/view', [
'backbone',
'doT',
'apps/user/models/order_count',
'text!components/user/tpl.html'
], function (e, t, n, r) {
return e.View.extend({
template: t.template(r),
events: {
},
initialize: function () {
this.model = new n,
this.model.on('sync', this.render, this),
_global.mall_info ? this.model.fetch({
data: {
mall_id: _global.mall_info.id
}
})  : this.model.fetch()
},
render: function () {
return this.$el.html(this.template(this.model.toJSON())),
setTimeout(function () {
$.openPanel('.panel-user')
}, 0),
this
}
})
}),
define('components/account/models/verify', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return _global.setting.is_foreign ? '/verify_mobile.json?mobile=' + this.get('mobile') + '&mobile_prefix=' + encodeURIComponent(this.get('prefix'))  : '/verify_mobile.json?mobile=' + this.get('mobile')
}
})
}),
define('components/account/models/signin', [
'backbone'
], function (e) {
return e.Model.extend({
url: '/signin.json'
})
}),
define('components/account/models/reg', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
return '/' + this.type + '.json'
}
})
}),
define('components/account/models/sms', [
'backbone'
], function (e) {
return e.Model.extend({
url: function () {
var e = '/send_message.json?mobile=' + this.get('mobile');
return _global.setting.is_foreign && (e += '&mobile_prefix=' + encodeURIComponent(this.get('prefix'))),
this.get('type') && (e += '&type=' + this.get('type')),
e
}
})
}),
define('text!components/account/templates/reg.html', [
], function () {
return '<h4 class="popup-title">{{=it.title}}</h4>\n<form class="form-horizontal" role="form">\n    <div class="form-group">\n        <label>手机号码</label>\n        <input type="tel" class="form-item" disabled="disabled" value="{{=it.mobile}}" placeholder="请填写手机号码">\n    </div>\n    <div class="form-group form-group-r">\n        <label>验证码</label>\n        <input type="text" name="sms_str" class="form-item" placeholder="请填写验证码">\n        <button type="button" class="btn-sm btn-white js-sms-code">获取验证码</button>\n    </div>\n    <div class="form-group">\n        <label>设置密码</label>\n        <input type="password" name="password" class="form-item" placeholder="请填写密码">\n    </div>\n    <div class="js-help-info error"></div>\n</form>\n<div class="popup-options">\n    <button type="button" class="btn btn-block btn-success js-register">确认</button>\n</div>'
}),
define('components/account/views/reg', [
'backbone',
'doT',
'components/account/models/reg',
'components/account/models/sms',
'text!components/account/templates/reg.html'
], function (e, t, n, r, a) {
return e.View.extend({
template: t.template(a),
events: {
'change input': 'change',
'click .js-sms-code': 'sms',
'click .js-register': 'register'
},
initialize: function (e) {
this.type = e || 'regist',
this.model = new n,
this.model.type = 'findPwd' === this.type ? 'reset_password' : 'register',
this.smsModel = new r
},
render: function (e) {
return this.model.set('mobile', e.mobile),
this.model.set('mobile_prefix', e.mobile_prefix),
this.smsModel.set('mobile', e.mobile),
this.smsModel.set('prefix', e.mobile_prefix),
this.$el.html(this.template({
mobile: e.mobile,
title: 'findPwd' === this.type ? '找回密码' : '注册账号'
})),
this
},
sms: function (e) {
'findPwd' === this.type && this.smsModel.set('type', 3),
$.openImgPostalCode(e, this.smsModel.toJSON())
},
register: function () {
if (!Utils.validPostalCode(this.model.get('sms_str'))) return $.toast('请输入6位短信验证码'),
!1;
if (!this.checkPwd(this.model.get('password'))) return !1;
$('.js-help-info', this.$el).html('');
var e = this;
e.model.save('', '', {
success: function (t, n, r) {
return n.error ? ($.toast(n.error), !1)  : void ('findPwd' === e.type ? ($.toast('重置密码成功，请登录'), e.trigger('toLogin', n))  : (_global.user = n, e.trigger('success', n), $.closeModal('.popup-account')))
},
error: function (e, t) {
$.toast(t.responseJSON.error.message)
}
})
},
change: function (e) {
this.model.set($(e.target).attr('name'), $(e.target).val())
},
checkPwd: function (e) {
return 'undefined' == typeof e ? ($.toast('请输入您的密码'), $('input[name="password"]', this.$el).focus(), !1)  : e.length < 6 ? ($.toast('亲，密码最短为6位'), $('input[name="password"]', this.$el).focus(), !1)  : e.length > 20 ? ($.toast('亲，密码长为16位'), $('input[name="password"]', this.$el).focus(), !1)  : !0
}
})
}),
define('text!components/account/templates/login.html', [
], function () {
return '<h4 class="popup-title">登录</h4>\n<form class="form-horizontal" role="form">\n    <div class="form-group">\n        <label>手机号码</label>\n        <input type="tel" class="form-item" disabled="disabled" placeholder="请填写手机号码" value="{{=it}}">\n    </div>\n    <div class="form-group">\n        <label>登录密码</label>\n        <input type="password" name="password" class="form-item" placeholder="请填写密码">\n    </div>\n    <div class="js-help-info error"></div>\n</form>\n<div class="forget-pwd">\n        <a class="f-fr js-forget-pwd">忘记密码</a>\n</div>\n<div class="popup-options">\n    <button type="button" class="btn btn-block btn-success js-login">确认</button>\n</div>'
}),
define('components/account/views/login', [
'backbone',
'doT',
'components/account/models/signin',
'components/account/views/reg',
'text!components/account/templates/login.html'
], function (e, t, n, r, a) {
return e.View.extend({
template: t.template(a),
events: {
'change input': 'change',
'click .js-login': 'login',
'click .js-forget-pwd': 'findPwd'
},
initialize: function () {
this.model = new n
},
render: function (e) {
return this.options = e,
this.model.set('mobile', e.mobile),
this.model.set('mobile_prefix', e.mobile_prefix),
this.$el.html(this.template(e.mobile)),
this
},
change: function (e) {
this.model.set($(e.target).attr('name'), $(e.target).val())
},
findPwd: function (e) {
var t = new r('findPwd'),
n = this;
this.$el.html(t.render(this.options).$el),
t.on('success', function (e) {
n.trigger('success', e)
}),
t.on('toLogin', function (e) {
n.render(n.options)
})
},
login: function () {
if (!this.checkPwd(this.model.get('password'))) return !1;
$('.js-help-info', this.$el).html('');
var e = this;
e.model.save('', '', {
success: function (t, n, r) {
n.error ? $.toast(n.error)  : (_global.user = n, n.gid > 0 && (_global.guider = {
id: n.gid,
title: n.guider_shop_name,
logo: n.guider_shop_logo,
status: n.guider_status
}), n.partner && (_global.partner = n.partner), e.trigger('success', n), $.closeModal('.popup-account'))
},
error: function (e, t) {
$.toast(t.responseJSON.error.message)
}
})
},
checkPwd: function (e) {
return 'undefined' == typeof e ? ($.toast('请输入您的密码'), $('input[name="password"]', this.$el).focus(), !1)  : e.length < 6 ? ($.toast('亲，密码最短为6位'), $('input[name="password"]', this.$el).focus(), !1)  : e.length > 20 ? ($.toast('亲，密码长为16位'), $('input[name="password"]', this.$el).focus(), !1)  : !0
}
})
}),
define('text!components/account/templates/verify.html', [
], function () {
return '<h4 class="popup-title">确认手机号码</h4>\n<form class="form-horizontal" role="form" onsubmit="return false;">\n    <div class="form-group">\n        {{?_global.setting.is_foreign}}\n        <div class="cell-hd">\n            <select class="prefix-select" name="prefix">\n                {{~_global.setting.prefix:value:index}}\n                <option value="{{=value.code}}">{{=value.code}}</option>\n                {{~}}\n            </select>\n        </div>\n        {{??}}\n        <label>手机号码</label>\n        {{?}}\n        <input type="tel" name="mobile" class="form-item" placeholder="请填写手机号码">\n    </div>\n    <div class="js-help-info error"></div>\n</form>\n<div class="popup-options">\n    <button type="button" class="btn btn-block btn-success js-verify">确认</button>\n</div>'
}),
define('components/account/views/verify', [
'backbone',
'doT',
'components/account/models/verify',
'components/account/views/login',
'components/account/views/reg',
'text!components/account/templates/verify.html'
], function (e, t, n, r, a, i) {
return e.View.extend({
template: t.template(i),
events: {
'click .js-verify': 'verify'
},
initialize: function () {
this.model = new n
},
render: function () {
return this.$el.html(this.template()),
this
},
verify: function () {
var e = $('input[name="mobile"]', this.$el).val(),
t = {
};
if (t.mobile = e, _global.setting.is_foreign) {
var n = $('select[name="prefix"]', this.$el).val();
this.model.set('prefix', n),
t.mobile_prefix = n
}
if (Utils.validNumber(e)) {
this.model.set('mobile', e);
var i = this;
i.model.fetch({
success: function (e, n) {
if (n) {
var o = new r;
i.$el.html(o.render(t).$el),
o.on('success', function (e) {
i.trigger('success', e)
})
} else if (_const.is_weixin) {
var o = new a;
i.$el.html(o.render(t).$el),
o.on('success', function (e) {
i.trigger('success', e)
})
} else $.toast('请在微信中注册')
}
})
} else $.toast('请填写正确的手机号码')
}
})
}),
define('text!components/account/templates/main.html', [
], function () {
return '\n<div class="close-popup if if-close" data-popup=".popup-account"></div>\n<div class="js-account-container">\n</div>'
}),
define('components/account/views/main', [
'backbone',
'doT',
'components/account/views/verify',
'text!components/account/templates/main.html'
], function (e, t, n, r) {
return e.View.extend({
className: 'popup popup-account remove-on-close',
template: t.template(r),
initialize: function () {
this.$el.html(this.template())
},
render: function () {
var e = new n;
$('.js-account-container', this.$el).html(e.render().$el);
var t = this;
return e.on('success', function (e) {
t.trigger('success', e)
}),
setTimeout(function () {
$.popup('.popup-account')
}, 0),
this
}
})
}),
define('core/global', [
'jquery',
'text',
'backbone',
'backbone.paginator',
'doT',
'fastclick',
'forale',
'lazyLoad',
'Swiper',
'qrcode',
'components/cart/views/main',
'components/user/view',
'components/account/views/main'
], function () {
});
