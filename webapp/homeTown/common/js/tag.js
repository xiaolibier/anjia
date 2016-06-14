/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
define('text!components/nav/tpl.html', [
], function () {
    return '<div class="bar bottom-bar">\n    {{?it.style==1}}\n    <div class="nav-style-1">\n        <div class="nav-home"><a href="/"><i class="if if-store"></i></a></div>\n        <ul class="nav-items">\n            {{~$.changeLink(it.data):menu:index}}\n            {{var has_sub=(typeof menu.sub_button !=\'undefined\' && menu.sub_button !=null  && menu.sub_button.length>0) ? true: false;}}\n            <li>\n                {{?has_sub}}<a class="js-toggle"> <i class="menu-arrow"></i> {{=menu.name}}</a>\n                <div class="submenu" style="display: none">\n                    <span class="arrow-front"></span>\n                    <span class="arrow-back"></span>\n                    <ul>\n                        {{~$.changeLink(menu.sub_button):sub_menu:i}}\n                        <li>\n                            <a href="{{=sub_menu.link_url||\'javascript:void(0)\'}}">{{=sub_menu.name}}</a>\n                        </li>\n                        {{~}}\n                    </ul>\n                </div>\n                {{??}}\n                <a href="{{=menu.link_url||\'javascript:void(0)\'}}">\n                {{=menu.name}}</a>\n                {{?}}\n            </li>\n            {{~}}\n        </ul>\n    </div>\n    {{?}}\n    {{?it.style==2}}\n    <div class="nav-style-2" style="background-color:{{=it.data.bgcolor}}">\n        <ul class="nav-items">\n            {{~$.changeLink(it.data.list):menu:index}}\n            {{?menu.active}}\n            <li class="active">\n                <a href="{{=menu.link_url||\'javascript:void(0)\'}}">\n                    <div class="icon">\n                        <img src="{{=_global.url.ms+menu.bghoverimg}}?imageMogr2/thumbnail/50x50!">\n                    </div>\n                    <span style="color:{{=it.data.fontHoverColor}}">{{=menu.name}}</span>\n                </a>\n            </li>\n                {{??}}\n            <li>\n                <a href="{{=menu.link_url||\'javascript:void(0)\'}}">\n                    <div class="icon">\n                        <img src="{{=_global.url.ms+menu.bgimg}}?imageMogr2/thumbnail/50x50!">\n                    </div>\n                    <span style="color:{{=it.data.fontColor}}">{{=menu.name}}</span>\n                </a>\n            </li>\n                {{?}}\n            {{~}}\n        </ul>\n    </div>\n    {{?}}\n</div>'
}),
define('components/nav/view', [
    'backbone',
    'doT',
    'text!components/nav/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function (t) {
            var i = this;
            return 'undefined' != typeof _global.nav && '' != _global.nav && $.each(_global.nav.scope, function (e, n) {
                n == t.type && (i.$el.addClass('with-nav-' + _global.nav.style), 2 == _global.nav.style && $.each(_global.nav.data.list, function (i, e) {
                    t.id && 'undefined' != typeof t.id ? e.link_type == t.type && t.id == e.data[t.type + '_id'] ? e.active = 1 : e.active = 0 : e.link_type == t.type ? e.active = 1 : e.active = 0
                }), i.$el.html(i.template(_global.nav)))
            }),
            $('.js-toggle', this.$el).on('click', function () {
                $(this).parent().siblings().find('.submenu').hide(),
                $(this).parent().find('.submenu').toggle()
            }),
            this
        }
    })
}),
define('components/aside/model', [
    'backbone'
], function (t) {
    return t.Model.extend({
        url: function () {
            return this.id ? '/guider/goods_spread/' + this.id + '.json' : '/guider/spread.json'
        }
    })
}),
define('text!components/aside/main.html', [
], function () {
    return '<section class="spread-qrcode">\n    <h3 class="spread-title">方法1：二维码推广<span>(点击查看二维码)</span></h3>\n    <div class="spread-qrcode-content">\n        <div class="js-more-loading" style="margin: 0 auto"></div>\n    </div>\n    <div class="qrcode-info t_center"><div>正在加载二维码...</div></div>\n</section>\n<section class="spread-link">\n    <h3 class="spread-title">方法2：复制链接推广</h3>\n    <p class="copy-text js-copy-text">我开了一个小店，来看看有没有你喜欢的宝贝</p>\n</section>\n<div class="spread-action">\n    <ul class="tab-nav">\n        <li><a class="btn-block btn btn-success" href="/guide">我的小店</a></li>\n        <li><a class="btn-block btn btn-buy" href="/guider">{{=_global.guider_alias}}中心</a></li>\n    </ul>\n</div>\n'
}),
define('components/aside/main', [
    'backbone',
    'doT',
    'components/aside/model',
    'text!components/aside/main.html'
], function (t, i, e, n) {
    return t.View.extend({
        className: 'view-guider-spread',
        events: {
            'click .js-qrcode': 'qrcode',
            'click .js-params_qrcode': 'params_qrcode'
        },
        template: i.template(n),
        initialize: function (t) {
            $.indicator('show'),
            this.render(),
            this.model = new e,
            this.model.id = t,
            this.model.on('sync', this.renderQrcode, this),
            this.model.fetch()
        },
        render: function () {
            return this.$el.html(this.template()),
            $('.js-more-loading', this.$el).loading('show'),
            $.indicator('hide'),
            this
        },
        qrcode: function () {
            $.device.weixin ? wx.previewImage({
                current: _global.url.ms + this.model.get('spread_img'),
                urls: [
                    _global.url.ms + this.model.get('spread_img'),
                    this.model.get('params_qrcode')
                ]
            })  : window.location.href = _global.url.ms + this.model.get('spread_img')
        },
        params_qrcode: function () {
            $.device.weixin ? wx.previewImage({
                current: this.model.get('params_qrcode'),
                urls: [
                    _global.url.ms + this.model.get('spread_img'),
                    this.model.get('params_qrcode')
                ]
            })  : window.location.href = this.model.get('params_qrcode')
        },
        renderQrcode: function () {
            var t = this.model.get('params_qrcode');
            t && - 1 == t.indexOf('http') && this.model.set('params_qrcode', _global.url.ms + t),
            $('.js-copy-text', this.$el).append(this.model.get('spread_url')),
            $('.qrcode-info', this.$el).remove();
            var i = '';
            this.model.get('spread_img') && (i += '<div class="qrcode-item"><span class="if if-click-qcrode js-qrcode"></span> <div>推广二维码</div> </div> '),
            this.model.get('params_qrcode') && (i += '<div class="qrcode-item"> <span class="if if-click-qcrode js-params_qrcode"></span> <div>关注二维码</div> </div>'),
            $('.spread-qrcode-content', this.$el).html(i)
        }
    })
}),
define('text!components/share/tpl.html', [
], function () {
    return '<div class="pop-share">\n    <div class="js-cancel over-cancel"></div>\n<section class="share-cell">\n    <div>点击微信右上角 <span class="share-img"></span><br>通过【发送给朋友】、【分享到朋友圈】推广</div>\n    <div class="allow"></div>\n</section>\n{{?it.content}}\n{{var maxH= window.screen.height-230;}}\n<div class="share-cell share-cell-spread {{?it.open}}active{{?}}">\n    <div class="other-title js-toggle">其他方式</div>\n    <div style="max-height:{{=maxH}}px" class="js-content scroll-content"></div>\n</div>\n{{?}}\n{{?it.cancel}}\n<button type="button" class="btn btn-block btn-white js-cancel">取消</button>\n{{?}}\n</div>\n\n'
}),
define('components/share/view', [
    'backbone',
    'doT',
    'text!components/share/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        id: 'pop-share',
        template: i.template(e),
        events: {
            'click .js-cancel': 'cancel',
            'click .js-toggle': 'toggle'
        },
        initialize: function () {
        },
        render: function (t) {
            return t = t ? t : {
            },
            this.$el.html(this.template(t)),
            t.content && $('.js-content', this.$el).html(t.content),
            this
        },
        cancel: function (t) {
            t.preventDefault(),
            this.$el.remove()
        },
        toggle: function () {
            $('.share-cell-spread', this.$el).toggleClass('active')
        }
    })
}),
define('text!components/aside/tpl.html', [
], function () {
    return '\n{{?_global.mall_info && _global.mall_info.is_show_mallback == 1}}\n<a class="if if-allgoods" href="http://mall{{=_global.mall_info.id+\'.\'+_global.url.base_domain}}"></a>\n{{?}}\n\n{{?_global.mall_info}}\n<a class="if if-tuike js-go-share"></a>\n{{??}}\n{{?_global.checkPrev(\'guide\')}}<a class="if if-tuike js-go-share"></a>{{?}}\n{{?}}\n\n{{?_global.shop.is_dynamic == 1}}\n<a href="/dynamics" class="if if-dongtai"></a>\n{{?}}\n\n{{?_global.kefu.code && _global.kefu.enabled && _global.kefu.pages && _global.kefu.pages && _global.kefu.pages[it.type]}}\n<a href="{{=_global.kefu.code}}" class="if if-custom"></a>\n{{?}}\n\n{{?_global.mall_info}}\n<a href="http://mall{{=_global.mall_info.id+\'.\'+_global.url.base_domain}}/mall/cart" class="if if-cart js-go-cart">\n\t{{?_global.cart.count>0}}\n\t<em></em>\n\t{{?}}\n</a>\n{{??}}\n<a href="/trade/cart" class="if if-cart js-go-cart">\n\t{{?_global.cart.count>0}}\n\t<em></em>\n\t{{?}}\n</a>\n{{?}}\n\n<a class="if if-back-top hide js-go-top"></a>\n\n'
}),
define('components/aside/view', [
    'backbone',
    'doT',
    'components/aside/main',
    'components/share/view',
    'text!components/aside/tpl.html'
], function (t, i, e, n, s) {
    return t.View.extend({
        className: 'aside-bar',
        template: i.template(s),
        events: {
            'click .js-go-top': 'goTop',
            'click .js-go-share': 'shareStep',
            'click .js-go-more': 'moreAside'
        },
        initialize: function (t) {
            this.id = t
        },
        render: function (t) {
            return this.$el.html(this.template(t)),
            $(window).on('scroll', function (t) {
                var i = $(window).scrollTop();
                i > 300 ? $('.js-go-top', this.$el).removeClass('hide')  : $('.js-go-top', this.$el).addClass('hide')
            }),
            this
        },
        goTop: function () {
            $(document).scrollTop(0)
        },
        shareStep: function () {
            if (_global.guider.id) {
                var i = new e(this.id).$el;
                $('body').append((new n).render({
                    cancel: 1,
                    content: i,
                    open: 1
                }).$el)
            } else t.history.navigate('/guider', {
                trigger: !0
            })
        },
        moreAside: function () {
            $('.more-aside', this.$el).toggleClass('moreActive')
        }
    })
}),
define('apps/home/models/feature', [
    'backbone'
], function (t) {
    return t.Model.extend({
        url: function () {
            return this.id && this.type ? '/design/feature.json?id=' + this.id + '&type=' + this.type : '/design/feature.json'
        }
    })
}),
define('apps/tag/collections/collection', [
    'backbone.paginator'
], function (t) {
    return Backbone.PageableCollection.extend({
        url: '/goods.json',
        state: {
            pagesInRange: 0,
            pageSize: 10
        },
        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'limit',
            currentPage: null,
            offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        },
        parseState: function (t, i, e, n) {
            return {
                totalRecords: t._count
            }
        },
        parseRecords: function (t, i) {
            return t.data
        }
    })
}),
define('text!components/modules/goods_tag/item.html', [
], function () {
    return '<a href="/goods/{{=it.id}}">\n    <div class="goods-image"></div>\n    {{?it.content.show_title || it.content.show_price || it.content.show_cart}}\n    <div class="goods-info">\n        {{?it.content.show_title}}<p class="goods-title">{{=it.title}}</p>{{?}}\n        {{?it.content.show_price}}\n        <p class="goods-price">{{=_global.setting.currency_unit+it.price}}\n            {{?it.original_price != \'0.00\'}}\n            <del><i>{{?it.price_key}}{{=it.price_key}}{{??}}原价{{?}}{{=it.original_price}}</i></del>\n            {{?}}\n        </p>\n        {{?}}\n        {{?it.content.show_csale}}<p class="goods-sale">销量：{{=it.total_csale}}件</p>{{?}}\n        {{?it.content.show_cart}}<i class="goods-buy if if-cart-add js-open-cart" cart-gid="{{=it.id}}"></i>{{?}}\n    </div>\n    {{?}}\n</a>'
}),
define('components/modules/goods_tag/itemView', [
    'backbone',
    'doT',
    'text!components/modules/goods_tag/item.html',
    'components/cart/views/main'
], function (t, i, e, n) {
    return t.View.extend({
        tagName: 'li',
        className: 'clearfix',
        template: i.template(e),
        events: {
            'click .js-open-cart': 'openSku'
        },
        initialize: function () {
        },
        render: function () {
            var t,
            i = this.model.toJSON(),
            e = this;
            this.$el.html(this.template(i)),
            t = 'big' == i.content.size ? '640x' : 'small' == i.content.size ? '320x' : '240x';
            var n = new Image,
            s = $(n);
            return s.addClass('lazy'),
            s.attr('data-original', _global.url.ms + i.img + '?imageMogr2/thumbnail/' + t),
            n.onload = function () {
                if ('big' != i.content.size) {
                    var t = n.width,
                    e = n.height,
                    a = (t - e) / 2;
                    t > e ? s.attr('style', 'height: 100%;object-position: ' + - a + 'px 0;')  : e > t && s.attr('style', 'object-position: 0 ' + a + 'px;')
                }
            },
            $('.goods-image', e.$el).html(n),
            this
        },
        openSku: function (t) {
            var i = new n;
            i.open(t)
        }
    })
}),
define('apps/super/list/collection/search', [
    'backbone'
], function (t) {
    return t.Collection.extend({
        url: function () {
            return '/mall/search.json'
        },
        state: {
        },
        queryParams: {
            title: ''
        },
        parseState: function (t) {
            return {
                'default': t['default'],
                data: t.data
            }
        },
        parseRecords: function (t, i) {
            return t
        }
    })
}),
define('text!components/search/tpl.html', [
], function () {
    return '\n<div class="search-container">\n    {{?_global.mall_info}}\n    <div class="view-container view-search" style="min-height:0 !important;">\n        <div class="view-inner">\n            <div class="search-container">\n                <div class="searchbar-wrap search-btn">\n                    <a href="http://mall{{=_global.mall_info.id+\'.\'+_global.url.base_domain}}/super/list" class="j-list-load">\n                        <div class="cate-icon">\n                            <i class="if if-cate"></i>\n                            <p style="margin: 0; padding: 0;">分类</p>\n                        </div>\n                    </a>\n                    <div class="searchbar"> <i class="if if-search"></i>\n                        <form onsubmit="return false;">\n                            <input class="search-input ipt-values js-search-input" type="search" placeholder="请输入关键字">\n                        </form>\n                        <i class="if if-close-circle js-clear"></i>\n                    </div>\n                    <button class="searchbar-shop js-search-shop">搜本店</button>\n                    <button class="searchbar-mall js-search-mall">搜商超</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    {{?_global.mall_info}}\n    <button style="position: absolute;top: 5rem;right: 1rem;" type="button" class="btn btn-default js-cancel">取消</button>\n    {{?}}\n\n    {{??}}\n    <div class="searchbar-wrap">\n        <div class="searchbar">\n            <i class="if if-search"></i>\n            <form onsubmit="return false;">\n                <input class="search-input js-search-input" type="search" placeholder="请输入商品关键字">\n            </form>\n            <i class="if if-close-circle js-clear"></i>\n        </div>\n        <button class="searchbar-cancel js-cancel">取消</button>\n    </div>\n    {{?}}\n    {{?it}}\n    <div class="history-wrap">\n        <ul class="history-list clearfix">\n            {{~it:value:index}}\n            <li class="js-keyword" key="{{=value}}">{{=value}}</li>\n            {{~}}\n        </ul>\n        <button type="button" class="btn btn-default js-clear-history">清除历史搜索</button>\n    </div>\n    {{?}}\n</div>\n'
}),
define('components/search/view', [
    'backbone',
    'doT',
    'apps/super/list/collection/search',
    'text!components/search/tpl.html'
], function (t, i, e, n) {
    return t.View.extend({
        className: 'js-search-container',
        template: i.template(n),
        events: {
            'click .js-cancel': 'cancel',
            'click .js-clear-history': 'clearHistory',
            'click .js-keyword': 'historySearch',
            'click .js-clear': 'clear',
            'click .js-search-shop': 'searchShop',
            'click .js-search-mall': 'searchMall'
        },
        initialize: function () {
        },
        render: function () {
            $('#views').addClass('blur'),
            _global.scroll = {
                index: $(document).scrollTop()
            },
            $(document).scrollTop(0),
            $('html').css({
                height: $(window).height(),
                position: 'relative',
                overflow: 'hidden',
                padding: 0
            }),
            $('body').css({
                height: $(window).height(),
                overflow: 'hidden',
                padding: 0
            });
            var t;
            if ($.localStorage) {
                var i = (window.localStorage, localStorage.getItem('search_History'));
                null != i && (t = JSON.parse(i))
            }
            return this.$el.html(this.template(t)),
            this.keyDownSearch(),
            this
        },
        historySearch: function (t) {
            var i = $(t.currentTarget).attr('key');
            this.search(i)
        },
        keyDownSearch: function () {
            var t = this;
            $('.js-search-input', this.$el).keydown(function (i) {
                if ('13' == i.keyCode) {
                    var e = $.trim($('.js-search-input', this.$el).val());
                    t.search(e)
                }
            })
        },
        search: function (i) {
            var e = decodeURIComponent($.getUrlParam('q'));
            '/list' == t.history.location.pathname && '' != i && i != e && this.trigger('search', i),
            t.history.navigate('list?q=' + i, {
                trigger: !0
            }),
            this.cancel()
        },
        cancel: function () {
            if ($('#views').removeClass('blur'), $('html').attr('style', ''), $('body').attr('style', ''), 'undefined' != typeof _global.scroll) {
                var t = _global.scroll;
                null != t && null != t.index && $(document).scrollTop(t.index)
            }
            this.$el.remove()
        },
        clearHistory: function () {
            $.localStorage && (localStorage.removeItem('search_History'), this.render())
        },
        clear: function () {
            $('.js-search-input', this.$el).val('')
        },
        searchShop: function (i) {
            var i = $.trim($('.js-search-input', this.$el).val());
            if ('' == i || null == i) return void $.toast('请输入关键字！');
            var e = decodeURIComponent($.getUrlParam('q'));
            '/list' == t.history.location.pathname && '' != i && i != e && this.trigger('search', i),
            t.history.navigate('list?q=' + i, {
                trigger: !0
            })
        },
        searchMall: function () {
            var t = $.trim($('.js-search-input', this.$el).val());
            if ('' == t || null == t) return void $.toast('请输入关键字！');
            var i = 'http://mall' + _global.mall_info.id + '.' + _global.url.base_domain + '/super/search?title=' + t;
            console.log(i),
            $.loading(''),
            this.collection = new e;
            this.collection.fetch({
                data: {
                    keyword: t
                },
                success: function (t, e) {
                    $(window).unbind('scroll'),
                    window.location.href = i
                }
            }),
            console.log(t)
        }
    })
}),
define('text!apps/tag/templates/main.html', [
], function () {
    return '<div class="view-container">\n    <div class="view-inner">\n        <div class="modules-container"></div>\n        <section class="mod-goods-list">\n            {{?it.keyword}}\n            <div class="mod-search js-search-btn">\n                <div class="search-inner"><i class="if if-search"></i> {{=it.keyword || \'在店铺内搜索\'}}</div>\n            </div>\n            {{?}}\n            <div class="filter">\n                <ul>\n                    <li data-column="created_at" class="js-column active">默认</li>\n                    <li data-column="csale" class="js-column">销量<i class="if if-sort"></i></li>\n                    <li data-column="shelve_at" class="js-column">新品<i class="if if-sort"></i></li>\n                    <li data-column="price" class="js-column">价格<i class="if if-sort"></i></li>\n                    <li class="show-type-btn js-show-type"><i class="if if-list"></i></li>\n             </ul>\n            </div>\n            <ul class="goods-list js-tag-list clearfix style-{{=it.content.size}}">\n            </ul>\n            <div class="js-more-loading"></div>\n        </section>\n    </div>\n</div>\n\n'
}),
define('text!components/footer/tpl.html', [
], function () {
    return '<div class="foot-links" id=\'bottomNav\'>\n{{?_global.shop_bottom_nav[0].link_status==1}}\n    <a href="{{=_global.url.shop_url}}">店铺主页</a>\n{{?}}\n\n{{?_global.shop_bottom_nav[1].link_status==1}}\n    <a href="{{=_global.url.shop_url}}user">会员中心</a>\n{{?}}\n\n{{?_global.shop_bottom_nav[2].link_status==1}}\n    {{?_global.guider.status==0}}\n    <a href="{{=_global.url.shop_url}}guide">我的小店</a></li>\n    <a href="{{=_global.url.shop_url}}guider">{{=_global.guider_alias}}中心</a></li>\n    {{?}}\n    {{?_global.guider.status==1 || !_global.guider.id}}\n    <a href="/guider/apply">{{=_global.guider_alias}}申请</a>\n    {{?}}\n{{?}}\n\n{{~_global.shop_bottom_nav:value:index}}\n\t{{?index > 3}}\n        {{?value.link_status == 1}}\n\t\t<a href="{{=value.link_url||\'javascript:void(0)\'}}">{{=value.name}}</a>\n        {{?}}\n\t{{?}}\n{{~}}\n</div>'
}),
define('components/footer/view', [
    'backbone',
    'doT',
    'text!components/footer/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        className: 'footer',
        template: i.template(e),
        events: {
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template()),
            this
        }
    })
}),
define('text!components/modules/slide/tpl.html', [
], function () {
    return '{{var window_width=document.body.clientWidth,item_height=\'auto\';}}\n{{?it.style<4}}\n<div class="image-list style{{=it.style}}">\n    <ul class="clearfix">\n        {{?it.style > 1}}\n        {{for(var i = 0;i < it.style;i++){}}\n        <li>\n            {{for(var j = i;j< it.item_list.length;j = j + it.style){}}\n                {{?it.item_list[j]}}\n                <a {{?(j < it.item_list.length - 2)}}style="padding-bottom: 8px;" {{?}}href="{{=it.item_list[j].link_url||\'javacript:void(0)\'}}"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[j].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[j].title||\'\'}}">\n                    {{?it.item_list[j].title}}<p>{{=it.item_list[j].title}}</p>{{?}}\n                </a>\n                {{?}}\n            {{}}}\n        </li>\n        {{}}}\n        {{??}}\n        {{~it.item_list:value:index}}\n            <li>\n                <a href="{{=value.link_url||\'javacript:void(0)\'}}"><img class="lazy" data-original="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/640x"  alt="{{=value.title||\'\'}}">\n                    {{?value.title}}<p>{{=value.title}}</p>{{?}}\n                </a>\n            </li>\n        {{~}}\n        {{?}}\n    </ul>\n</div>\n{{?}}\n{{?it.style==4}}\n{{ var ad_w1=(window_width-24)/2;}}\n<div class="image-ad clearfix images-tpl">\n    <div>\n        {{?it.item_list[0]}}<a href="{{=it.item_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1+8)}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[0].title||\'\'}}"></a>{{?}}\n    </div>\n    <div>\n        {{?it.item_list[1]}}<a href="{{=it.item_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[1].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[2]}}<a href="{{=it.item_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[2].title||\'\'}}"></a>{{?}}\n    </div>\n</div>\n{{?}}\n{{?it.style==5}}\n{{var ad_w2=(window_width-24)/3;}}\n<div class="image-ad2 clearfix images-tpl">\n    <div class="clearfix">\n        {{?it.item_list[0]}}<a href="{{=it.item_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2}}px;height:{{=ad_w2}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[0].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[1]}}<a href="{{=it.item_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2*2}}px;height:{{=ad_w2}}px"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[1].title||\'\'}}"></a>{{?}}\n    </div>\n    <div class="clearfix">\n        {{?it.item_list[2]}}<a href="{{=it.item_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2*2}}px;height:{{=ad_w2}}px"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[2].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[3]}}<a href="{{=it.item_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2}}px;height:{{=ad_w2}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[3].title||\'\'}}"></a>{{?}}\n    </div>\n</div>\n{{?}}\n{{?it.style==6}}\n{{var ad_w3=(window_width-24)/2;}}\n<div class="image-ad3 clearfix images-tpl">\n    <div>\n        {{?it.item_list[0]}}<a href="{{=it.item_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=(ad_w3/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[0].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[1]}}<a href="{{=it.item_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=ad_w3}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[1].title||\'\'}}"></a>{{?}}\n    </div>\n    <div>\n        {{?it.item_list[2]}}<a href="{{=it.item_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=ad_w3}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[2].title}}"></a>{{?}}\n        {{?it.item_list[3]}}<a href="{{=it.item_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=(ad_w3/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[3].title}}"></a>{{?}}\n    </div>\n</div>\n{{?}}\n{{?it.style==7}}\n{{ var ad_w4=(window_width-32)/3;}}\n<div listorder="5" class="image-ad4 clearfix images-tpl">\n    <div>\n        {{?it.item_list[0]}}<a href="{{=it.item_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[0].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[1]}}<a href="{{=it.item_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[1].title||\'\'}}"></a>{{?}}\n    </div>\n    <div>\n        {{?it.item_list[2]}}<a href="{{=it.item_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[2].title||\'\'}}"></a>{{?}}\n        {{?it.item_list[3]}}<a href="{{=it.item_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[3].title}}"></a>{{?}}\n    </div>\n    <div>\n        {{?it.item_list[4]}}<a href="{{=it.item_list[4].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4*2+8}}px;"><img class="lazy" data-original="{{=_global.url.ms+it.item_list[4].img}}?imageMogr2/thumbnail/640x"  alt="{{=it.item_list[4].title||\'\'}}"></a>{{?}}\n    </div>\n</div>\n{{?}}\n{{?it.style==8}}\n<div class="swiper-container">\n    <div class="swiper-wrapper">\n        {{~it.item_list:value:index}}\n        <div class="swiper-slide">\n            <a href="{{=value.link_url||\'javacript:void(0)\'}}">\n            <img class="swiper-lazy" data-src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/640x" >\n                </a>\n            {{?value.title}}<div class="title">{{=value.title}}</div>{{?}}\n        </div>\n        {{~}}\n    </div>\n    <div class="swiper-pagination"></div>\n</div>\n{{?}}'
}),
define('components/modules/slide/view', [
    'backbone',
    'doT',
    'text!components/modules/slide/tpl.html',
    'Swiper',
    'lazyLoad'
], function (t, i, e, n, s) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.model.item_list = $.changeLink(this.model.item_list),
            this.$el.html(this.template(this.model)),
            8 == this.model.style && this.$el.find('.swiper-container').swiper({
                loop: !0,
                pagination: $('.swiper-pagination', this.$el) [0],
                autoplay: 3500,
                autoplayDisableOnInteraction: !1,
                preloadImages: !0,
                lazyLoading: !0
            }),
            $('img.lazy', this.$el).lazyload(),
            this
        }
    })
}),
define('text!components/modules/text/tpl.html', [
], function () {
    return '<section class="mod-text">\n    {{=it}}\n</section>'
}),
define('components/modules/text/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'text!components/modules/text/tpl.html'
], function (t, i, e, n) {
    return t.View.extend({
        template: i.template(n),
        initialize: function () {
        },
        render: function () {
            var t = this.model.text,
            i = new RegExp('src', 'g'),
            e = '';
            return t && (e = t.replace(i, 'class="lazy" data-original')),
            this.$el.html(this.template(e)),
            $('img.lazy').lazyload(),
            this
        }
    })
}),
define('text!components/modules/banner/tpl.html', [
], function () {
    return '{{?it.style==1 }}\n<section class="mod-shop-header1">\n    <div class="mod-shop-header1-bg" {{?(it.banner_img || typeof it.banner_img !="undefined" )}} style="background-image: url({{=_global.url.ms+it.banner_img}}?imageMogr2/thumbnail/640x215)" {{?}}>\n        <div class="mod-shop-header1-title">{{=_global.shop.name || \'店铺名称\'}}</div>\n        <div class="mod-shop-header1-logo">\n            <img src="{{=_global.url.ms+_global.shop.logo}}?imageMogr2/thumbnail/160x160!">\n        </div>\n    </div>\n    <ul class="mod-shop-header1-nav clearfix">\n        <li>\n            <a href="/list">\n                <i class="count">{{=it.all_goods ||\'0\'}}</i>\n                <span class="text">全部商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/new">\n                <i class="count">{{=it.new_goods ||\'0\'}}</i>\n                <span class="text">新上商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/user">\n                <i class="if if-user"></i>\n                <span class="text">会员中心</span>\n            </a>\n        </li>\n    </ul>\n</section>\n{{?}}\n{{?it.style==2 }}\n<section class="mod-shop-header2" {{?(it.banner_img || typeof it.banner_img !="undefined" )}} style="background-image: url({{=_global.url.ms+it.banner_img}}?imageMogr2/thumbnail/640x430)"{{?}}>\n    <div class="mod-shop-header2-title">{{=_global.shop.name || \'店铺名称\'}}</div>\n    <div class="mod-shop-header2-logo">\n        <img src="{{=_global.url.ms+_global.shop.logo}}?imageMogr2/thumbnail/160x160!">\n    </div>\n    <ul class="mod-shop-header2-nav clearfix">\n        <li class="active" style="border-bottom-color:{{=it.active_color}};">\n            <a href="/">\n                <i class="if if-store"></i>\n                <span class="text">首页</span>\n            </a>\n        </li>\n        <li>\n            <a href="/list">\n                <i class="if if-allgoods"></i>\n                <span class="text">全部商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/new">\n                <i class="if if-new"></i>\n                <span class="text">新上商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/user">\n                <i class="if if-user"></i>\n                <span class="text">个人中心</span>\n            </a>\n        </li>\n    </ul>\n</section>\n{{?}}'
}),
define('components/modules/banner/view', [
    'backbone',
    'doT',
    'text!components/modules/banner/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/goods/tpl.html', [
], function () {
    return '{{?it.style==1}}\n<section class="mod-goods-com">\n    {{?it.title}}<div class="com-title">{{=it.title}}</div>{{?}}\n    {{?it.img}}<img src="{{=_global.url.ms+it.img}}">{{?}}\n    {{?it.desc}}<div class="com-desc">{{=it.desc}}</div>{{?}}\n    <div class="swiper-goods-container">\n        <div class="swiper-wrapper">\n            {{~it.goods :value:index}}\n            <div class="swiper-slide">\n                <a href="/goods/{{=value.id}}">\n                    <div class="goods-image"><img src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/240x240!"></div>\n                    <div class="goods-info">\n                        <p class="goods-title">{{=value.title}}</p>\n                        <p class="goods-price">{{=_global.setting.currency_unit+value.price}}</p>\n                    </div>\n                </a>\n            </div>\n            {{~}}\n        </div>\n    </div>\n</section>\n{{??}}\n<section class="mod-goods-list">\n    <ul class="goods-list clearfix style-{{=it.size}}">\n        {{\n        var img_size;\n        if(it.size==\'big\')\n        {\n        img_size=\'640x640!\'\n\n    }else if(it.size==\'small\')\n    {\n    img_size=\'320x320!\'\n}else{\nimg_size=\'240x240!\'\n}\n}}\n{{~it.goods :value:index}}\n<li>\n    <a href="/goods/{{=value.id}}">\n        <div class="goods-image"><img class="lazy" data-original="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/{{=img_size}}"></div>\n        {{?it.show_title || it.show_price || it.show_cart || it.show_csale}}\n        <div class="goods-info">\n            {{?it.show_title}}<p class="goods-title">{{=value.title}}</p>{{?}}\n            {{?it.show_price}}<p class="goods-price">{{=_global.setting.currency_unit+value.price}}</p>{{?}}\n            {{?it.show_csale}}<p class="goods-sale">销量：{{=value.total_csale}}件</p>{{?}}\n            {{?it.show_cart}}<i class="goods-buy if if-cart-add js-open-cart" cart-gid="{{=value.id}}"></i>{{?}}\n        </div>\n        {{?}}\n    </a>\n</li>\n{{~}}\n</ul>\n</section>\n{{?}}'
}),
define('components/modules/goods/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'Swiper',
    'text!components/modules/goods/tpl.html',
    'components/cart/views/main'
], function (t, i, e, n, s, a) {
    return t.View.extend({
        template: i.template(s),
        events: {
            'click .js-open-cart': 'openSku'
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            1 == this.model.style && $('.swiper-goods-container', this.$el).swiper({
                slidesPerView: 'auto',
                paginationClickable: !0,
                spaceBetween: 10
            }),
            $('img.lazy').lazyload(),
            this
        },
        openSku: function (t) {
            var i = new a;
            i.open(t)
        }
    })
}),
define('text!components/modules/nav/tpl.html', [
], function () {
    return '<section>\n    {{?it.style==\'tag\'}}\n    <ul class="mod-tag-nav clearfix">\n        {{~$.changeLink(it.item_list):value:index}}\n        <li>\n            <a style="{{=value.bg_color ? \'background-color:\'+value.bg_color+\';\': \'\'+it.icon_size ? \'line-height:\'+it.icon_size+\'px;\':\'\'}}" class="clearfix" href="{{=value.link_url || \'javascript:void(0)\' }}">\n                <img style="{{=it.icon_size ? \'width:\'+it.icon_size+\'px;height:\'+it.icon_size+\'px;\' : \'\'}}" src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/160x160!">\n                <span style="width: {{=it.nev_len}}px;{{=value.font_color ? \'color:\'+value.font_color+\';\': \'\'}}">{{=value.title || \'\'}}</span>\n            </a>\n        </li>\n        {{~}}\n    </ul>\n    {{?}}\n    {{?it.style==\'nav\'}}\n    <ul class="mod-nav {{=it.display_icon}}">\n        {{~$.changeLink(it.item_list):value:index}}\n        <li style="{{=value.bg_color ? \'background-color:\'+value.bg_color+\';\': \'\'}}">\n            <a href="{{=value.link_url || \'javascript:void(0)\' }}">\n                {{?it.display_icon !=\'no-icon\'}}\n                <i style="{{=it.icon_size ? \'width:\'+it.icon_size+\'px;height:\'+it.icon_size+\'px;\' : \'\'}}"><img src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/160x160!"></i>\n                {{?}}\n                <span style="width: {{=it.nev_len}}px;{{=value.font_color ? \'color:\'+value.font_color+\';\': \'\'}}">{{=value.title || \'\'}}</span>\n            </a>\n        </li>\n        {{~}}\n    </ul>\n    {{?}}\n</section>'
}),
define('components/modules/nav/view', [
    'backbone',
    'doT',
    'text!components/modules/nav/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            var t = this.model.item_list.length;
            return this.model.nev_len = $(window).width() / t,
            this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/search/tpl.html', [
], function () {
    return '{{?it==null || it.style==1}}\n<section class="mod-search js-search">\n    <div class="search-inner">\n        <i class="if if-search"></i> 在店铺内搜索\n    </div>\n</section>\n\n{{??}}\n<section class="mod-search-top" style="background-color: {{=it.bg_color}}">\n    <div class="search-inner js-search" style="background-color: {{=it.active_color}}">\n        <i class="if if-search"></i> 在店铺内搜索\n    </div>\n    <a class="my-link js-open-user" data-panel="right" href="javascript:;"><i class="if if-user"></i></a>\n</section>\n{{?}}'
}),
define('components/modules/search/view', [
    'backbone',
    'doT',
    'components/user/view',
    'components/account/views/main',
    'components/search/view',
    'apps/super/list/collection/search',
    'text!components/modules/search/tpl.html'
], function (t, i, e, n, s, a, l) {
    var o = $('#panel-user');
    return t.View.extend({
        template: i.template(l),
        events: {
            'click .js-search': 'search',
            'click .js-open-user': 'open',
            'click .js-search-shop': 'searchShop',
            'click .js-search-mall': 'searchMall',
            'click .js-clear': 'clear'
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        },
        search: function () {
            $('body').append((new s).render().$el)
        },
        open: function () {
            if (_global.user) {
                if ($.device.weixin && void 0 != _global.user.weixin_info) return $.authRedirect(),
                !1;
                o.html((new e).$el)
            } else {
                if ($.device.weixin) return $.authRedirect(),
                !1;
                var t = new n;
                $('body').append(t.render().$el),
                t.on('success', function (t) {
                    o.html((new e).$el)
                })
            }
        },
        searchShop: function (i) {
            var i = $.trim($('.js-search-input', this.$el).val());
            if ('' == i || null == i) return void $.toast('请输入关键字！');
            var e = decodeURIComponent($.getUrlParam('q'));
            '/list' == t.history.location.pathname && '' != i && i != e && this.trigger('search', i),
            t.history.navigate('list?q=' + i, {
                trigger: !0
            })
        },
        searchMall: function () {
            var t = $.trim($('.js-search-input', this.$el).val());
            if ('' == t || null == t) return void $.toast('请输入关键字！');
            var i = 'http://mall' + _global.mall_info.id + '.' + _global.url.base_domain + '/super/search?title=' + t;
            console.log(i),
            $.loading(''),
            this.collection = new a;
            this.collection.fetch({
                data: {
                    keyword: t
                },
                success: function (t, e) {
                    $(window).unbind('scroll'),
                    window.location.href = i
                }
            }),
            console.log(t)
        },
        clear: function () {
            $('.js-search-input', this.$el).val('')
        }
    })
}),
define('text!components/modules/notice/tpl.html', [
], function () {
    return '<section class="mod-notice">\n    <i class="if if-notice"></i>\n    <!--  1 wuxin�޸� -->\n    <marquee scrollamount="4"><a href="{{=it.link_url || \'javascript:void(0)\' }}">{{=it.notice}}</a></marquee>\n    <!-- wuxin�޸� -->\n</section>'
}),
define('components/modules/notice/view', [
    'backbone',
    'doT',
    'text!components/modules/notice/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('components/modules/goods_tag/collection', [
    'backbone.paginator'
], function (t) {
    return Backbone.PageableCollection.extend({
        url: '/goods.json',
        state: {
            pagesInRange: 0,
            pageSize: 20
        },
        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'limit',
            currentPage: null,
            offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        },
        parseState: function (t, i, e, n) {
            return {
                totalRecords: t._count
            }
        },
        parseRecords: function (t, i) {
            return t.data
        }
    })
}),
define('text!components/modules/goods_tag/tpl.html', [
], function () {
    return '<section class="mod-goods-list">\n    {{?it.selected_tag.length==1}}\n    <div class="list-title clearfix">\n        <h2>{{=it.selected_tag[0].name}}</h2>\n        {{?it.selected_tag[0].id>0}}\n        <a href="/tag/{{=it.selected_tag[0].id}}">更多<i class="if if-chevron-right"></i></a>\n        {{??}}\n        <a href="/list">更多<i class="if if-chevron-right"></i></a>\n        {{?}}\n    </div>\n    {{?}}\n    {{?it.selected_tag.length>1}}\n    <div class="tab-nav goods-list-tab">\n        {{~it.selected_tag:value:index}}\n        <a class="js-tab-tag {{?index==0}}active{{?}}" data-id="{{=value.id}}" href="javascript:void(0);">{{=value.name}}</a>\n        {{~}}\n    </div>\n    {{?}}\n    <ul class="js-goods-list goods-list clearfix style-{{=it.size}}">\n\n    </ul>\n</section>'
}),
define('components/modules/goods_tag/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'components/modules/goods_tag/collection',
    'components/modules/goods_tag/itemView',
    'text!components/modules/goods_tag/tpl.html'
], function (t, i, e, n, s, a) {
    return t.View.extend({
        template: i.template(a),
        events: {
            'click .js-tab-tag ': 'setTab'
        },
        initialize: function () {
            this.collection = new n,
            this.collection.on('sync', this.renderEach, this)
        },
        render: function () {
            return 'undefined' != typeof this.model.selected_tag[0] && (this.model.selected_tag[0].id && (this.collection.queryParams.goods_tag_id = this.model.selected_tag[0].id), this.collection.queryParams.limit = this.model.number, this.collection.queryParams.column = this.model.sort, this.collection.fetch()),
            this.$el.html(this.template(this.model)),
            this
        },
        setTab: function (t) {
            var i = $(t.currentTarget);
            $(i).hasClass('active') || ($(i).addClass('active').siblings().removeClass('active'), i.data('id') && (this.collection.queryParams.goods_tag_id = i.data('id')), this.collection.fetch())
        },
        renderEach: function () {
            $('.js-goods-list', this.$el).html(''),
            this.collection.each(this.renderItem, this),
            $('img.lazy').lazyload()
        },
        renderItem: function (t) {
            t.set('content', this.model),
            $('.js-goods-list', this.$el).append(new s({
                model: t
            }).render().$el)
        }
    })
}),
define('text!components/modules/phone/tpl.html', [
], function () {
    return '<section class="mod-tel">\n    <a href="tel:{{=it.phone||\'\'}}"><i class="if if-tel pull-left"></i>{{=it.name||\'客服电话\'}}：{{=it.phone||\'\'}}<i class="if if-chevron-right pull-right"></i></a>\n</section>'
}),
define('components/modules/phone/view', [
    'backbone',
    'doT',
    'text!components/modules/phone/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/video/tpl.html', [
], function () {
    return '<section class="mod-video">\n    {{=it.code}}\n</section>'
}),
define('components/modules/video/view', [
    'backbone',
    'doT',
    'text!components/modules/video/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/image/tpl.html', [
], function () {
    return '<section class="mod-image-list">\n    <div style="background-color: {{=it.bg_color}}">\n        <table style="width: {{=document.body.clientWidth-document.body.clientWidth%4}}px">\n            {{=it.html}}\n        </table>\n    </div>\n</section>'
}),
define('components/modules/image/view', [
    'backbone',
    'doT',
    'text!components/modules/image/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            var t = this.model.tableContent,
            i = new RegExp('src', 'g'),
            e = new RegExp('<tr></tr>', 'g'),
            n = '';
            return t && (n = t.replace(i, 'class="lazy" data-original')),
            ($.device.ios || $.device.ipad || $.device.iphone || $.device.safari) && (n = n.replace(e, '<tr><td></td><td></td><td></td><td></td></tr>')),
            this.model.html = n,
            this.$el.html(this.template(this.model)),
            $('img.lazy').lazyload(),
            this
        }
    })
}),
define('text!components/modules/white/tpl.html', [
], function () {
    return '<div class="mod-white" style="height:{{=it.height}}px"></div>'
}),
define('components/modules/white/view', [
    'backbone',
    'doT',
    'text!components/modules/white/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/title/tpl.html', [
], function () {
    return '<div class="mod-title">\n    <a class="title-link clearfix" href="{{=it.link_url ||\'javascript:;\'}}">\n        {{?it.icon}}<div class="title-img"><img src="{{=_global.url.ms+it.icon}}"></div>{{?}}\n        <div class="title-name">{{=it.title||\'标题名\'}}</div>\n        {{?it.more}}<span class="more-enter">{{=it.more||\'更多\'}} <span class="if if-chevron-right"></span></span>{{?}}\n    </a>\n</div>'
}),
define('components/modules/title/view', [
    'backbone',
    'doT',
    'text!components/modules/title/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            var t = $.switchLink(this.model);
            return this.$el.html(this.template(t)),
            this
        }
    })
}),
define('text!components/modules/guider_nav/tpl.html', [
], function () {
    return '<section class="mod-guider-nav">\n    <ul class="clearfix">\n        <li>\n            <a href="/guider/order">\n                <i class="if if-order"></i>\n                <p>推广订单</p>\n                <div><span>{{=it.guider_order_num}}</span>个</div>\n            </a>\n        </li>\n        <li>\n            <a href="/guider/team">\n                <i class="if if-team"></i>\n                <p>我的团队</p>\n                <div><span>{{=it.guider_team_num}}</span>个</div>\n            </a>\n        </li>\n        <!--<li>-->\n            <!--<a href="/guider/stat">-->\n                <!--<i class="if if-pie"></i>-->\n                <!--<p>推广统计</p>-->\n                <!--<div><span>1233</span>个</div>-->\n            <!--</a>-->\n        <!--</li>-->\n        {{?(_global.from!=\'rrdtk\')}}\n        <li>\n            <a href="/guider/spread">\n                <i class="if if-spread"></i>\n                <p>开始推广</p>\n                <div>推广方式和说明</div>\n            </a>\n        </li>\n        {{?}}\n        <li>\n            <a href="/guider/setting">\n                <i class="if if-setting"></i>\n                <p>店铺设置</p>\n                <div>修改店铺信息</div>\n            </a>\n        </li>\n        {{?it.hero_open==1}}\n        <li>\n            <a href="/guider/armory">\n                <i class="if if-ranking"></i>\n                <p>英雄榜</p>\n                <div>你上榜了吗</div>\n            </a>\n        </li>\n        {{?}}\n        {{~$.changeLink(it.item_list):value:index}}\n        <li>\n            <a href="{{=value.link_url || \'javascript:void(0)\' }}">\n                <i><img src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/100x100!"></i>\n                <p>{{=value.title ||\'导航\'}}</p>\n                <div>{{=value.desc || \'副导航\'}}</div>\n            </a>\n        </li>\n        {{~}}\n    </ul>\n</section>'
}),
define('components/modules/guider_nav/view', [
    'backbone',
    'doT',
    'text!components/modules/guider_nav/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('text!components/modules/guider_banner/tpl.html', [
], function () {
    return '{{?it.style==1 || it.style==\'user\'}}\n<section class="mod-shop-header1">\n    <div class="mod-shop-header1-bg" {{?(it.banner_img || typeof it.banner_img !="undefined" )}} style="background-image: url({{=_global.url.ms+it.banner_img}}?imageMogr2/thumbnail/640x215)" {{?}}>\n        {{?it.guider_style == \'shop\'}}\n        <div class="mod-shop-header1-title">{{=_global.shop.name || \'店铺名称\'}}</div>\n        <div class="mod-shop-header1-logo"><img src="{{=_global.url.ms+_global.shop.logo}}?imageMogr2/thumbnail/160x160!"></div>\n        {{?}}\n        {{?it.guider_style == \'user\'}}\n        <div class="mod-shop-header1-title">{{=it.guide.title || \'\'}}</div>\n        <div class="mod-shop-header1-logo">\n            {{?(it.guide.logo.indexOf("http")!=-1)}}\n            <img src="{{=it.guide.logo || \'/image/default_head_img.jpg\'}}">\n            {{??}}\n            <img src="{{=_global.url.ms+it.guide.logo}}?imageMogr2/thumbnail/160x160!">\n            {{?}}\n        </div>\n        {{?}}\n        {{?!it.guider_style }}\n        <div class="mod-shop-header1-title">{{=it.guide.title || \'\'}}</div>\n        <div class="mod-shop-header1-logo">\n            {{?(it.guide.logo.indexOf("http")!=-1)}}\n            <img src="{{=it.guide.logo || \'/image/default_head_img.jpg\'}}">\n            {{??}}\n            <img src="{{=_global.url.ms+it.guide.logo}}?imageMogr2/thumbnail/160x160!">\n            {{?}}\n        </div>\n        {{?}}\n    </div>\n    <ul class="mod-shop-header1-nav clearfix">\n        <li>\n            <a href="/list">\n                <i class="count">{{=it.all_goods ||\'0\'}}</i>\n                <span class="text">全部商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/new">\n                <i class="count">{{=it.new_goods ||\'0\'}}</i>\n                <span class="text">新上商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/user">\n                <i class="if if-user"></i>\n                <span class="text">会员中心</span>\n            </a>\n        </li>\n    </ul>\n</section>\n{{?}}\n{{?it.style==2 || it.style==\'shop\'}}\n<section class="mod-shop-header2" {{?(it.banner_img || typeof it.banner_img !="undefined" )}} style="background-image: url({{=_global.url.ms+it.banner_img}}?imageMogr2/thumbnail/640x430)"{{?}}>\n    {{?it.guider_style == \'user\'}}\n    <div class="mod-shop-header2-logo">\n        {{?(it.guide.logo.indexOf("http")!=-1)}}\n        <img src="{{=it.guide.logo || \'/image/default_head_img.jpg\'}}">\n        {{??}}\n        <img src="{{=_global.url.ms+it.guide.logo}}?imageMogr2/thumbnail/160x160!">\n        {{?}}\n    </div>\n    <div class="mod-shop-header2-title">{{=it.guide.title || \'\'}}</div>\n    {{?}}\n    {{?it.guider_style == \'shop\'}}\n    <div class="mod-shop-header2-logo"><img src="{{=_global.url.ms+_global.shop.logo}}?imageMogr2/thumbnail/160x160!"></div>\n    <div class="mod-shop-header2-title">{{=_global.shop.name || \'店铺名称\'}}</div>\n    {{?}}\n    {{?!it.guider_style}}\n    <div class="mod-shop-header2-title">{{=it.guide.title || \'\'}}</div>\n    <div class="mod-shop-header2-logo">\n        {{?(it.guide.logo.indexOf("http")!=-1)}}\n        <img src="{{=it.guide.logo || \'/image/default_head_img.jpg\'}}">\n        {{??}}\n        <img src="{{=_global.url.ms+it.guide.logo}}?imageMogr2/thumbnail/160x160!">\n        {{?}}\n    </div>\n    {{?}}\n    <ul class="mod-shop-header2-nav clearfix">\n        <li class="active" style="border-bottom-color:{{=it.active_color}};">\n            <a href="/">\n                <i class="if if-store"></i>\n                <span class="text">首页</span>\n            </a>\n        </li>\n        <li>\n            <a href="/list">\n                <i class="if if-allgoods"></i>\n                <span class="text">全部商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/new">\n                <i class="if if-new"></i>\n                <span class="text">新上商品</span>\n            </a>\n        </li>\n        <li>\n            <a href="/user">\n                <i class="if if-user"></i>\n                <span class="text">个人中心</span>\n            </a>\n        </li>\n    </ul>\n</section>\n{{?}}'
}),
define('components/modules/guider_banner/view', [
    'backbone',
    'doT',
    'text!components/modules/guider_banner/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            _global.from_guider ? this.model.guide = _global.from_guider : this.model.guide = _global.guider;
            var t = {
                title: _global.shop.name || '',
                desc: _global.shop.share_description,
                link: window.location.href,
                imgUrl: _global.shop.logo.indexOf('http') > - 1 ? _global.shop.logo : _global.url.ms + _global.shop.logo
            },
            i = this.model.guide.title;
            return '' == i && (i = this.model.guide.title = this.model.guide.nickname + '的小店'),
            'user' == this.model.style || void 0 != this.model.guider_style && 'user' == this.model.guider_style || 1 == this.model.style ? ($.setTitle(i), t.title = this.model.guide.title ? this.model.guide.title : i, _global.from_guider && (t.imgUrl = this.model.guide.logo.indexOf('http') > - 1 ? this.model.guide.logo : _global.url.ms + this.model.guide.logo), _global.guider && (t.title = _global.guider.title ? _global.guider.title : _global.guider.nickname + '的小店', t.imgUrl = _global.guider.logo.indexOf('http') > - 1 ? _global.guider.logo : _global.url.ms + _global.guider.logo))  : $.setTitle(_global.shop.name),
            $.setForward(t),
            this.$el.html(this.template(this.model)),
            this
        }
    })
}),
define('components/modules/guider_apply/model', [
    'backbone'
], function (t) {
    return t.Model.extend({
        url: function () {
            return '/guider/is_guider.json'
        }
    })
}),
define('text!components/modules/guider_apply/tpl.html', [
], function () {
    return '{{?it.original.status==-1}}\n<section class="mod-guider">\n    <div class="promoter">\n        <span class="cl-red">{{=it.nickname}}</span> 推荐你成为 <span class="cl-red">{{=_global.shop.name}}</span> {{=_global.guider_alias}}。\n    </div>\n    {{?it.original.pay || it.original.subscribe}}\n    <ul class="apply-block">\n        {{?it.original.subscribe}}\n        <li class="clearfix">\n            <div class="pull-left">\n                <p>关注微信公众号</p>\n            </div>\n            {{?it.subscribe==0}}\n            <a href="/guider/subscribe" class="btn pull-right btn-sm btn-success">关 注</a>\n            {{??}}\n            <span class="success-red">已完成</span>\n            {{?}}\n        </li>\n        {{?}}\n        {{?it.original.pay}}\n        <li class="clearfix">\n            <div class="pull-left">\n                <p>满足消费金额</p>\n                <small>\n                    需要消费 <span class="cl-red">¥{{=parseFloat(it.original.pay_money).toFixed(2)}}</span> {{?it.poor_amount>0}} ,还差\n                    <span class="cl-red">¥{{=parseFloat(it.poor_amount).toFixed(2)}}</span>\n                    {{?}}\n                </small>\n            </div>\n            {{?(it.poor_amount>0)}}\n            <a class="pull-right" href="/"><button class="btn btn-sm btn-success">去逛逛</button></a>\n            {{??}}\n            <span class="success-red">已完成</span>\n            {{?}}\n        </li>\n        {{?}}\n    </ul>\n    {{?}}\n</section>\n{{?}}\n{{?it.original.status==1}}\n<section>\n    <li class="list-empty">\n        <i class="if if-info"></i>\n        <p>正在审核</p>\n    </li>\n</section>\n{{?}}\n\n{{?it.original.status==2}}\n<section>\n    <li class="list-empty">\n        <i class="if if-info"></i>\n        <p>审核不通过</p>\n    </li>\n</section>\n{{?}}'
}),
define('components/modules/guider_apply/view', [
    'backbone',
    'doT',
    'components/modules/guider_apply/model',
    'text!components/modules/guider_apply/tpl.html'
], function (t, i, e, n) {
    return t.View.extend({
        template: i.template(n),
        events: {
        },
        initialize: function () {
        },
        render: function () {
            this.guideModel = new e,
            this.guideModel.on('sync', this.renderHtml, this),
            this.guideModel.fetch()
        },
        renderHtml: function () {
            return this.guideModel.set('original', this.model),
            _global.qrcode_local = this.guideModel.get('qrcode_local'),
            this.guideModel.get('status') && this.trigger('success'),
            this.$el.html(this.template(this.guideModel.toJSON())),
            this
        }
    })
}),
define('text!components/modules/guider_text/tpl.html', [
], function () {
    return '<section class="mod-guider-text">\n    <div class="promoter">{{=_global.guider_alias}}特权</div>\n    <ul class="apply-block">\n        <li class="clearfix">\n            <i class="if if-store"></i>\n            <div class="pull-left">\n                <p>独立微店</p>\n                <small>拥有自己的微店及推广二维码；</small>\n            </div>\n        </li>\n        <li class="clearfix">\n            <i class="if if-rmb-o"></i>\n            <div class="pull-left">\n                <p>销售拿佣金</p>\n                <small>微店卖出商品，您可以获得佣金；</small>\n            </div>\n        </li>\n        <li class="clearfix">\n            <small>{{=_global.guider_alias}}的商品销售统一由厂家直接收款、直接发货，并提供产品的售后服务，分销佣金由厂家统一设置。</small>\n        </li>\n    </ul>\n</section>'
}),
define('components/modules/guider_text/view', [
    'backbone',
    'doT',
    'text!components/modules/guider_text/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template()),
            this
        }
    })
}),
define('text!components/modules/scene/tpl.html', [
], function () {
    return ' <style>\n        html,body,.views,.page-view,.view-container,.view-inner,.swiper-container{height:100%;}\n        .modules-scene{\n            position: relative;\n            height: 100%;\n        }\n        .swiper-slide,.swiper-slide img{\n            width:100%;\n            height:100%;\n        }\n    </style>\n {{?it.music && it.on_music }}\n    <div class="bgm-btn"></div>\n <audio id="bgm" src="{{=_global.url.ms+it.music.url}}" autoplay="autoplay" loop style="display: none;"></audio>\n {{?}}\n <div class="swiper-container">\n        <div class="swiper-wrapper">\n            {{~it.item_list:value:index}}\n            <div data-href="{{=value.link_url||\'javacript:void(0)\'}}" class="swiper-slide">\n                <a href="{{=value.link_url||\'javacript:void(0)\'}}">\n                <img src="{{=_global.url.ms+value.img}}?imageMogr2/thumbnail/640x" >\n                {{?index+1<it.item_list.length}}<a href="javascript:;" class="m-tips"></a>{{?}}\n                </a>\n            </div>\n            {{~}}\n        </div>\n    </div>'
}),
define('components/modules/scene/view', [
    'backbone',
    'doT',
    'text!components/modules/scene/tpl.html',
    'Swiper',
    'lazyLoad'
], function (t, i, e, n, s) {
    return t.View.extend({
        el: '.modules-scene',
        template: i.template(e),
        events: {
            'click .swiper-slide': 'slideGo'
        },
        initialize: function () {
        },
        render: function () {
            if (this.model.item_list = $.changeLink(this.model.item_list), this.$el.html(this.template(this.model)), this.model.item_list.length > 0 && this.$el.find('.swiper-container').swiper({
                direction: 'vertical',
                loop: this.model.loop,
                mousewheelControl: !0,
                pagination: null
            }), this.model.music && this.model.on_music) {
                var t = !0,
                i = document.getElementById('bgm');
                $('body').bind('touchstart', function (e) {
                    t && (t = !1, i.play())
                }),
                $('.bgm-btn').bind('touchstart', function (t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    i.paused ? (i.play(), $('.bgm-btn').removeClass('mut'))  : (i.pause(), $('.bgm-btn').addClass('mut'))
                })
            }
            return this
        },
        slideGo: function (t) {
            var i = $(t.currentTarget).attr('data-href');
            'javacript:void(0)' != i && this.$el.remove()
        }
    })
}),
define('text!components/modules/voice/tpl.html', [
], function () {
    return '<div class="mod-voice">\n    {{?it.style == 1}}\n    \t{{?it.align == 1}}\n    \t<div class="voice-left clearfix">{{?}}\n    \t{{?it.align == 2}}\n    \t<div class="voice-right clearfix">{{?}}\n\n\t\t<img src="{{=_global.url.ms}}{{=it.voice_img || _global.shop.logo}}?imageMogr2/thumbnail/160x160!" width="40" height="40" class="voice-logo">\n\t\t<span class="voice-bar">\n\t\t\t<i class="voice-animation-static"></i>\n\t\t\t<i class="voice-animation-play"></i>\n\t\t</span>\n\t\t<span class="hidden">\n\t\t\t<audio preload {{?it.play == 1}}data-play="off"{{??}}data-play="on"{{?}} data-trans=\'off\' src="{{=_global.url.ms+it.voice_audio.url}}"></audio>\t\n\t\t</span>\n\t</div>\n\t{{??}}\n\t<div class="voice-music clearfix">\n\t\t<i class="voice-btn"></i>\n\t\t{{?it.title}}<span class="voice-title">{{=it.title}}</span>{{?}}\n\t\t<span class="hidden">\n\t\t\t<audio preload {{?it.loop == 1}}loop="loop"{{?}} {{?it.play == 1}}data-play="off"{{??}}data-play="on"{{?}} data-trans=\'off\' src="{{=_global.url.ms+it.voice_audio.url}}"></audio>\t\n\t\t</span>\n\t</div>{{?}}\n</div>\n'
}),
define('components/modules/voice/view', [
    'backbone',
    'doT',
    'text!components/modules/voice/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        events: {
            'click .voice-bar': 'aplay',
            'click .voice-btn': 'aplay'
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        },
        aplay: function () {
            var t = this.$el.find('audio');
            'off' == t.attr('data-trans') ? (this.$el.find('.mod-voice').addClass('voice-play'), t.attr('data-trans', 'on'), t.get(0).play())  : (this.$el.find('.mod-voice').removeClass('voice-play'), t.attr('data-trans', 'off'), t.get(0).pause(), 'off' == t.attr('data-play') && (t.get(0).currentTime = '0'))
        }
    })
}),
define('components/modules/snatch_nav/model', [
    'backbone'
], function (t) {
    return t.Model.extend({
        url: function () {
            return 'snatch/snatch_notice.json'
        }
    })
}),
define('text!components/modules/snatch_nav/tpl.html', [
], function () {
    return '<ul class="snatch-nav">\n    <li><a href="/snatch/record">\n        <i class="s-img">\n        <img src="/image/snatch-nav2.png?imageMogr2/thumbnail/160x160!"></i>\n        <div class="s-cont">\n            <h3 style="color: #CA6ACA;">往期揭晓</h3>\n            <span>查看哪些人中奖了</span>\n        </div>\n    </a></li>\n    <li><a href="/snatch/user/1">\n        <i class="s-img">\n        <img src="/image/snatch-nav4.png?imageMogr2/thumbnail/160x160!"></i>\n        <div class="s-cont">\n            <h3 style="color: #3ECCCB;">我的夺宝</h3>\n            <span>查看我参与的夺宝</span>\n        </div>\n    </a></li>\n</ul>\n{{?it.data && it.data.length>0}}\n<div class="snatch-notice">\n    <i class="if if-notice"></i>\n    <div class="js-snatch-notice warp">\n        <ul>\n            {{~it.data:val:index}}\n            <li><a href="/snatch/detail/{{=val.snatch_id}}">恭喜<span class="user-name"> {{=val.user_name}} </span>获得了 {{=val.name||\'\'}}</a></li>\n            {{~}}\n        </ul>\n    </div>\n</div>\n{{?}}'
}),
define('components/modules/snatch_nav/view', [
    'backbone',
    'doT',
    'components/modules/snatch_nav/model',
    'text!components/modules/snatch_nav/tpl.html'
], function (t, i, e, n) {
    return t.View.extend({
        template: i.template(n),
        initialize: function () {
        },
        render: function () {
            this.model = new e,
            this.model.on('sync', this.renderHtml, this),
            this.model.fetch()
        },
        renderHtml: function () {
            this.$el.html(this.template(this.model.toJSON()));
            var t = this;
            if (this.model.get('data') && this.model.get('data').length > 0) {
                setInterval(function () {
                    t.autoScroll('.js-snatch-notice')
                }, 3000)
            }
            return this
        },
        autoScroll: function (t) {
            $(t, this.$el).find('ul').animate({
                marginTop: '-3.5rem'
            }, 500, function () {
                $(this).css({
                    marginTop: 0
                }).find('li:first').appendTo(this)
            })
        }
    })
}),
define('components/modules/snatch_goods/collection', [
    'backbone.paginator'
], function (t) {
    return Backbone.PageableCollection.extend({
        url: '/snatch/snatch_list.json',
        state: {
            pagesInRange: 0,
            pageSize: 10
        },
        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'limit',
            currentPage: null,
            offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        },
        parseState: function (t, i, e, n) {
            return {
                totalRecords: t._count,
                total: t.total
            }
        },
        parseRecords: function (t, i) {
            return t.data
        }
    })
}),
define('apps/snatch/models/cart', [
    'backbone'
], function (t) {
    return t.Model.extend({
        url: function () {
            return this.isNew() ? '/snatch/snatch_cart.json' : 'snatch_cart/' + this.id + '.json'
        }
    })
}),
define('text!components/modules/snatch_goods/item.html', [
], function () {
    return '<a href="/snatch/detail/{{=it.id}}">\n    {{\n    var img_size;\n    if(it.content.size==\'big\')\n    {\n    img_size=\'640x640!\'\n\n    }else if(it.content.size==\'small\')\n    {\n    img_size=\'320x320!\'\n    }else{\n    img_size=\'240x240!\'\n    }\n    }}\n    <div class="goods-image"><img class="lazy" data-original="{{=_global.url.ms+it.goods_img}}?imageMogr2/thumbnail/{{=img_size}}"></div>\n    <div class="goods-info">\n        <p class="goods-title">{{=it.name||\'\'}}</p>\n        <div class="goods-progress">\n            <p class="txt">开奖进度<strong>{{=it.rate||0}}%</strong></p>\n            <p class="bar-wrap">\n                <span class="progress" style="width:{{=it.rate||0}}%;"><i class="color"></i></span>\n            </p>\n            {{?it.content.size!=\'small\'}}\n            <ul class="txt clearfix">\n                <li class="pull-left">总需{{=it.total_num}}</li>\n                <li class="pull-right">剩余<span class="clr-red">{{=it.total_num-it.buy_number}}</span></li>\n            </ul>\n            {{?}}\n        </div>\n        <span class="button-add-cart js-add-cart">\n            <span class="button-round"></span>\n        </span>\n    </div>\n</a>'
}),
define('components/modules/snatch_goods/item', [
    'backbone',
    'doT',
    'apps/snatch/models/cart',
    'text!components/modules/snatch_goods/item.html'
], function (t, i, e, n) {
    return t.View.extend({
        tagName: 'li',
        className: 'clearfix',
        template: i.template(n),
        events: {
            'click .js-add-cart': 'addCart'
        },
        initialize: function () {
            this.cartmodel = new e
        },
        render: function () {
            return this.$el.html(this.template(this.model.toJSON())),
            this
        },
        addCart: function (t) {
            var i = this;
            this.undelegateEvents(),
            $(t.currentTarget).loading('show'),
            this.cartmodel.set('snatch_id', this.model.get('id')),
            this.cartmodel.set('type', 0),
            this.cartmodel.save('', '', {
                success: function (e, n, s) {
                    $(t.currentTarget).html('<span class="button-round"></span>'),
                    i.delegateEvents();
                    var a = 20,
                    l = $('.global-cart'),
                    o = $(t.currentTarget).parent().siblings('.goods-image').find('img'),
                    r = $('<img width="' + o.width() + '" src="' + o.attr('src') + '" />');
                    r.css({
                        position: 'absolute',
                        top: o.offset().top,
                        left: o.offset().left,
                        'z-index': 100
                    }),
                    $('body').append(r);
                    var c = (r.offset().left - l.offset().left - l.width() / 2) / a,
                    d = (r.offset().top - l.offset().top - l.height() / 2) / a,
                    h = r.width() / a,
                    m = r.height() / a;
                    p && clearInterval(p);
                    var p = setInterval(function () {
                        r.width() > 0 ? r.css({
                            top: r.offset().top - d,
                            left: r.offset().left - c,
                            width: r.width() - h,
                            height: r.height() - m
                        })  : (p && clearInterval(p), r.remove(), l.find('.if-cart').html('<em>' + n.total + '</em>'))
                    }, a)
                },
                error: function (e, n, s) {
                    i.delegateEvents(),
                    $(t.currentTarget).html('<span class="button-round"></span>'),
                    $.toast(n.responseJSON.error)
                }
            }),
            t.stopPropagation(),
            t.preventDefault()
        }
    })
}),
define('text!components/modules/snatch_goods/tpl.html', [
], function () {
    return '<section class="mod-snatch">\n    <div class="filter">\n        <ul>\n            <li data-column="number" class="js-column active">人气</li>\n            <li data-column="created_at" class="js-column">最新</li>\n            <li data-column="rate" class="js-column">进度</li>\n            <li data-column="total_num" class="js-column">总需<i class="if if-sort"></i></li>\n        </ul>\n    </div>\n    <div class="mod-goods-list">\n        <ul class="goods-list style-{{=it.size}} clearfix js-goods-list">\n        </ul>\n        <div class="js-more-loading"></div>\n    </div>\n    <div class="bar bottom-left-bar global-icon">\n        <a class="global-cart" href="/snatch/cart"><i class="if if-cart"></i></a>\n    </div>\n</section>\n';
}),
define('text!apps/guider/templates/empty.html', [
], function () {
    return '<li class="list-empty"{{?it.is_background}} style="background-image: none;background-color: transparent;"{{?}}>\n    <i class="if if-info"></i>\n    <p>{{=it.info}}</p>\n    {{?it.show}}\n    <div class="t_center">\n        <a href="/" class="btn btn-danger-o btn-sm">去逛逛</a>\n    </div>\n    {{?}}\n</li>'
}),
define('components/modules/snatch_goods/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'components/modules/snatch_goods/collection',
    'components/modules/snatch_goods/item',
    'text!components/modules/snatch_goods/tpl.html',
    'text!apps/guider/templates/empty.html'
], function (t, i, e, n, s, a, l) {
    return t.View.extend({
        template: i.template(a),
        events: {
            'click .js-column': 'setColumn'
        },
        initialize: function () {
            this.collection = new n,
            this.collection.on('sync', this.renderEach, this)
        },
        render: function () {
            return this.collection.queryParams.column = 'number',
            this.collection.queryParams.direction = 'desc',
            this.collection.fetch(),
            $('.js-more-loading', this.$el).loading('show'),
            this.$el.html(this.template(this.model)),
            this.bottomLoad(),
            this
        },
        renderEach: function () {
            if ($('.js-more-loading', this.$el).loading('hide'), this.collection.state.total > 0 && $('.global-cart .if-cart', this.$el).html('<em>' + this.collection.state.total + '</em>'), 0 == this.collection.state.totalRecords) {
                var t = i.template(l),
                e = '店铺还没有添加商品';
                $('.js-goods-list', this.$el).html(t({
                    info: e,
                    is_background: 1
                })),
                $('.js-goods-list', this.$el).find('li').css('width', '100%')
            } else this.collection.each(this.renderItem, this),
            $('img.lazy').lazyload(),
            this.isRequest = !1
        },
        renderItem: function (t) {
            t.set('content', this.model),
            $('.js-goods-list', this.$el).append(new s({
                model: t
            }).render().$el)
        },
        setColumn: function (t) {
            var i = $(t.currentTarget),
            e = this,
            n = function () {
                $('.js-goods-list', e.$el).html(''),
                i.addClass('active').siblings().removeClass('active'),
                e.collection.queryParams.column = i.attr('data-column'),
                $('.js-more-loading', e.$el).loading('show'),
                e.collection.getFirstPage({
                    fetch: !0
                })
            };
            'total_num' == i.attr('data-column') ? (i.find('.if-sort').hasClass('sort-asc') ? (this.collection.queryParams.direction = 'desc', i.find('.if-sort').addClass('sort-desc').removeClass('sort-asc'))  : (this.collection.queryParams.direction = 'asc', i.find('.if-sort').addClass('sort-asc').removeClass('sort-desc')), n())  : i.hasClass('active') || (this.collection.queryParams.direction = 'desc', $('.js-column').find('.if-sort').removeClass('sort-desc').removeClass('sort-asc'), n())
        },
        bottomLoad: function () {
            this.isRequest = !1;
            var t = this;
            $(window).on('scroll', function (i) {
                var e = $(window).scrollTop(),
                n = $(document).height(),
                s = $(window).height();
                e >= n - s - 100 && t.collection.hasNextPage() && 0 == t.isRequest && (t.isRequest = !0, $('.js-more-loading', t.$el).loading('show'), t.collection.getNextPage())
            })
        }
    })
}),
define('text!components/modules/partner_banner/tpl.html', [
], function () {
    return '<section class="partner-banner">\n    <img src="/image/partner_banner.png">\n</section>'
}),
define('components/modules/partner_banner/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_banner/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template()),
            this
        }
    })
}),
define('text!components/modules/partner_apply/tpl.html', [
], function () {
    return '<section class="partner-apply-form">\n    <div class="list-block">\n        <div class="item-content">\n            <select name="partner-apply-type">\n                {{~it.modes:v:index}}\n                    <option value="{{=v.value}}">{{=v.text}}</option>\n                {{~}}\n            </select>\n        </div>\n{{~it.fields:v:index}}\n<div class="item-content">\n{{switch(v.type){}}\n{{case \'date\':}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item date-input" placeholder="{{=v.name}}" value="{{=v.value || \'\'}}" />\n{{break;}}\n{{case \'time\':}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item time-input" placeholder="{{=v.name}}" value="{{=v.value || \'\'}}" />\n{{break;}}\n{{case \'multipleText\':}}\n<textarea name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item">{{=v.value}}</textarea>\n{{break;}}\n{{default:}}\n<input type="text" name="{{=v.type+index}}" {{?(v.required)}}required{{?}} class="form-item" placeholder="{{=v.name}}" value="{{=v.value || \'\'}}">\n{{}}}\n</div>\n{{~}}\n    </div>\n    <div class="list-btn">\n        <a class="btn btn-apply js-partner-apply-btn">我要申请</a>\n    </div>\n</section>'
}),
define('components/modules/partner_apply/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_apply/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        events: {
        },
        initialize: function () {
        },
        render: function () {
            switch (this.model.type) {
                case 0:
                    this.model.modes = [
                        {
                            value: 0,
                            text: '区域模式'
                        }
                    ];
                    break;
                case 1:
                    this.model.modes = [
                        {
                            value: 1,
                            text: '团队模式'
                        }
                    ];
                    break;
                default:
                    this.model.modes = [
                        {
                            value: - 1,
                            text: '请选择' + _global.partner_setting.partner_alias + '模式'
                        },
                        {
                            value: 0,
                            text: '区域模式'
                        },
                        {
                            value: 1,
                            text: '团队模式'
                        }
                    ]
            }
            return this.$el.html(this.template(this.model)),
            $('.date-input').calendar({
                dateFormat: 'yyyy-mm-dd'
            }),
            $('.time-input').datetimePicker({
                toolbarTemplate: '<header class="bar bar-nav">                        <button class="button button-link pull-right close-picker">确定</button>                        <h1 class="title">选择日期和时间</h1>                        </header>'
            }),
            this
        }
    })
}), define('text!components/modules/partner_intro/tpl.html', [
], function () {
    return '<section class="partner-intro">\n    <ul>\n        <li class="area">\n            <div class="title">区域{{=_global.partner_setting.partner_alias}}</div>\n            <div class="sub">区域商品卖出，您可以获得商家分红；</div>\n        </li>\n        <li class="team">\n            <div class="title">团队{{=_global.partner_setting.partner_alias}}</div>\n            <div class="sub">你的团队成员有商品卖出，您可获得商家分红；</div>\n        </li>\n    </ul>\n</section>'
}), define('components/modules/partner_intro/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_intro/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template()),
            this
        }
    })
}), define('text!components/modules/partner_head/tpl.html', [
], function () {
    return '<section class="partner-head clearfix">\n    <a href="/partner/user">\n        <div class="user-img">\n            {{?_global.partner.avatar.indexOf("http")!=-1}}\n            <img class="avatar" src="{{=_global.partner.avatar}}">\n            {{??}}\n            <img class="avatar" src="{{=_global.partner.avatar ? _global.url.ms + _global.partner.avatar : \'/image/default_head_img.jpg\'}}">\n            {{?}}\n        </div>\n        <div class="user-info">\n            <p class="username">\n                {{=it.nickname}}\n                {{?it.is_team_type && it.partner_team_type_name}}<span class="label">{{=it.partner_team_type_name}}</span>{{?}}\n                {{?it.is_shareholder_type && it.partner_shareholder_type_name}}<span class="label">{{=it.partner_shareholder_type_name}}</span>{{?}}\n            </p>\n            <p class="mobile">{{=it.mobile || \'&nbsp;\'}}</p>\n        </div>\n    </a>\n</section>'
}), define('components/modules/partner_head/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_head/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), define('text!components/modules/partner_account/tpl.html', [
], function () {
    return '<section class="partner-account">\n    <ul class="account-info clearfix">\n        <li>\n            <a href="/balance?type=10">\n                <div class="intro-text">累计收益</div>\n                {{var total = it.total.split(\'.\');}}\n                <div class="account-price"><span class="price-currency">{{=_global.setting.currency_unit}}</span><span class="price-integer">{{=total[0]}}</span><span class="price-decimal">.{{=total[1]}}</span></div>\n            </a>\n        </li>\n    </ul>\n    <ul class="account-info-list">\n        <li>\n            <a href="/partner/unsettled">\n                <span>未结算</span>\n                <span class="f_right cl-price">{{=_global.setting.currency_unit}}{{=it.expect}}</span>\n            </a>\n        </li>\n    </ul>\n</section>'
}), define('components/modules/partner_account/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_account/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), define('text!components/modules/partner_navs/tpl.html', [
], function () {
    return '<section class="partner-navs">\n    {{?_global.partner.is_team_type}}\n    <ul class="list-block">\n        <li class="no-arrow">\n            <a><i class="if if-team"></i>团队合伙人</a>\n        </li>\n    </ul>\n    <div class="tab-nav">\n        <a href="/partner/team">\n            <span class="word">\n                <span class="num">{{=it.team}}</span>\n                <span class="title">我的团队</span>\n            </span>\n        </a>\n        <a href="/partner/order?type=team">\n            <span class="word">\n                <span class="num cl-price"><span class="currency">{{=_global.setting.currency_unit}}</span>{{=it.team_total}}</span>\n                <span class="title">累计收益</span>\n            </span>\n        </a>\n    </div>\n    {{?}}\n\n    {{?_global.partner.is_region_type}}\n    <ul class="list-block">\n        <li class="no-arrow">\n            <a><i class="if if-area"></i>区域合伙人</a>\n        </li>\n    </ul>\n    <div class="tab-nav">\n        <a href="/partner/area">\n            <span class="word">\n                <!--<span class="num cl-price"><span class="currency">{{=_global.setting.currency_unit}}</span>{{=it.region_total}}</span>-->\n                <span class="num main">区域贡献</span>\n                <span class="title">查看详情</span>\n            </span>\n        </a>\n        <a href="/partner/order?type=region">\n            <span class="word">\n                <span class="num cl-price"><span class="currency">{{=_global.setting.currency_unit}}</span>{{=it.region_total}}</span>\n                <span class="title">累计收益</span>\n            </span>\n        </a>\n    </div>\n    {{?}}\n\n    {{?_global.partner.is_shareholder_type}}\n    <ul class="list-block">\n        <li class="no-arrow">\n            <a><i class="if if-sharehoder"></i>股东合伙人</a>\n        </li>\n    </ul>\n    <div class="tab-nav">\n        <a href="/partner/shareholder">\n            <span class="word">\n                <span class="num cl-price"><span class="currency">{{=_global.setting.currency_unit}}</span>{{=it.shareholder_total}}</span>\n                <span class="title">累计收益</span>\n            </span>\n        </a>\n    </div>\n    {{?}}\n\n    {{?it.fellow_enabled}}\n    <ul class="list-block">\n        <li class="no-arrow">\n            <a><i class="if if-fellow"></i>伙伴合伙人</a>\n        </li>\n    </ul>\n    <div class="tab-nav">\n        {{?_global.partner.is_fellow_type}}\n        <a href="/partner/fellow/members">\n            <span class="word">\n                <span class="num main">{{=it.fellow_type_name || \'默认\'}}</span>\n                <span class="title">伙伴级别</span>\n            </span>\n        </a>\n        <a href="/partner/order?type=fellow">\n            <span class="word">\n                <span class="num cl-price"><span class="currency">{{=_global.setting.currency_unit}}</span>{{=it.fellow_total}}</span>\n                <span class="title">累计收益</span>\n            </span>\n        </a>\n        {{??}}\n        <a href="/partner/fellow/instr" class="cl-gray">\n            您尚未达到伙伴条件，<label class="clr-blue">查看条件</label>\n        </a>\n        {{?}}\n    </div>\n    {{?}}\n\n    {{?it.itemList.length > 0}}\n    <ul class="list-block">\n        <li class="no-arrow">\n            <a><i class="if if-share"></i>{{=it.navName || \'自定义菜单\'}}</a>\n        </li>\n    </ul>\n    <div class="tab-nav float">\n        {{~it.itemList:v:index}}\n        <a {{?v.link_url}}href="{{=v.link_url}}"{{?}}>\n            <span class="word">\n                <span class="num">\n                    {{?v.img}}\n                    <img src="{{=_global.url.ms}}{{=v.img}}" />\n                    {{??}}\n                    <i class="if if-more cl-gray"></i>\n                    {{?}}\n                </span>\n                <span class="title">{{=v.title}}</span>\n            </span>\n        </a>\n        {{~}}\n        {{?it.itemList.length % 2 != 0}}\n        <a><span class="word"></span></a>\n        {{?}}\n    </div>\n    {{?}}\n</section>'
}), define('components/modules/partner_navs/view', [
    'backbone',
    'doT',
    'text!components/modules/partner_navs/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), define('components/modules/collect_list/collection', [
    'backbone.paginator'
], function (t) {
    return Backbone.PageableCollection.extend({
        url: '/collect/collect.json',
        state: {
            pagesInRange: 0,
            pageSize: 10
        },
        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'limit',
            currentPage: null,
            offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        },
        parseState: function (t, i, e, n) {
            return {
                totalRecords: t._count,
                total: t.total
            }
        },
        parseRecords: function (t, i) {
            return t.data
        }
    })
}), define('text!components/modules/collect_list/item.html', [
], function () {
    return '<a class="goods-item" href="/collect/detail/{{=it.id}}">\n    {{\n    var img_size;\n    if(it.content.size==\'big\')\n    {\n    img_size=\'640x320!\'\n\n    }else if(it.content.size==\'small\')\n    {\n    img_size=\'320x320!\'\n    }else{\n    img_size=\'240x240!\'\n    }\n    }}\n\n\n    {{? it.content.size==\'list\'}}\n      {{? it.picture}}\n        <div class="goods-img">\n            <img class="lazy" data-original="{{=_global.url.ms+it.picture}}?imageMogr2/thumbnail/{{=img_size}}">\n        </div>\n      {{??}}\n        <div class="goods-img">\n            <img class="lazy" data-original="{{=_global.url.ms+it.pic}}?imageMogr2/thumbnail/{{=img_size}}">\n        </div>\n      {{?}}\n    {{??}}\n        <div class="goods-img" style="background-image: url(\'{{=_global.url.ms+it.pic}}?imageMogr2/thumbnail/{{=img_size}}\')">\n\n        </div>\n    {{?}}\n\n    <div class="goods-info">\n        <p class="goods-title">{{=it.name||\'\'}}</p>\n        <div class="goods-progress">\n            {{? it.content.size == \'list\' }}\n                <span class="progress" style="width:{{=(it.ratio > 100 ? 100 : it.ratio)}}%"></span>\n                {{? it.ratio > 20}}\n                <span class="percentage" style="right:{{=((100 - it.ratio)< 0 ? 0 : (100 - it.ratio))}}%">{{=it.ratio||0}}%</span>\n                {{??}}\n                <span class="percentage" style="left:{{=it.ratio||0}}%">{{=it.ratio||0}}%</span>\n                {{?}}\n            {{?}}\n            {{? it.content.size == \'big\' }}\n            <svg viewbox="0 0 100 100">\n                <circle cx="50" cy="50" r="45" stroke-width="4" stroke="#ccc" fill="none"></circle>\n                <circle cx="50" cy="50" r="45" stroke-width="4" stroke="#ff6600" fill="none"\n                        transform="rotate(-90 50 50)"\n                        stroke-dasharray="{{=(it.ratio/100) * Math.PI * 90}} 283">\n                </circle>\n            </svg>\n            <span>{{=it.ratio||0}}%</span>\n            {{?}}\n        </div>\n        <p class="goods-text">\n            <span><i class="if if-user"></i>{{=it.buyer}}人</span>\n            <span><i class="if if-rmb-o"></i>{{=it.amount_have}}元</span>\n            {{? it.be_day != 0}}\n            <span><i class="if if-time"></i>{{=it.be_day}}天</span>\n            {{?}}\n        </p>\n    </div>\n</a>\n\n\n\n\n'
}), define('components/modules/collect_list/item', [
    'backbone',
    'doT',
    'text!components/modules/collect_list/item.html'
], function (t, i, e) {
    return t.View.extend({
        tagName: 'li',
        className: 'clearfix',
        template: i.template(e),
        events: {
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model.toJSON())),
            this
        }
    })
}), define('text!components/modules/collect_list/tpl.html', [
], function () {
    return '<div class="collect">\n    <div class="collect-tab">\n        <ul>\n            <li type="1" class="j-sort active">最新上线</li>\n            <li type="2" class="j-sort">即将结束</li>\n            <li type="3" class="j-sort">完结项目</li>\n        </ul>\n    </div>\n    <div class="collect-goods">\n        <ul class="goods-list style-{{=it.size}} js-goods-list"></ul>\n        <div class="js-more-loading"></div>\n    </div>\n</div>\n\n<div class="aside-bar">\n    <a href="javascript:;" class="if if-my-zhongchou js-my-zhongchou">\n        <em></em>\n    </a>\n</div>'
}), define('components/modules/collect_list/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'components/modules/collect_list/collection',
    'components/modules/collect_list/item',
    'text!components/modules/collect_list/tpl.html',
    'text!apps/guider/templates/empty.html'
], function (t, i, e, n, s, a, l) {
    return t.View.extend({
        template: i.template(a),
        events: {
            'click .j-sort': 'setColumn',
            'click .js-my-zhongchou': 'goMyFav'
        },
        initialize: function () {
            this.collection = new n,
            this.collection.on('sync', this.renderEach, this)
        },
        render: function () {
            return this.collection.queryParams.type = '1',
            this.collection.fetch(),
            $('.js-more-loading', this.$el).loading('show'),
            this.$el.html(this.template(this.model)),
            this.bottomLoad(),
            this
        },
        renderEach: function () {
            if ($('.js-more-loading', this.$el).loading('hide'), 0 == this.collection.state.totalRecords) {
                var t = i.template(l),
                e = '暂无项目';
                $('.js-goods-list', this.$el).html(t({
                    info: e,
                    is_background: 1
                })),
                $('.js-goods-list', this.$el).find('li').css('width', '100%')
            } else this.collection.each(this.renderItemList, this),
            $('img.lazy').lazyload(),
            this.isRequest = !1
        },
        renderItemList: function (t) {
            t.set('content', this.model),
            $('.js-goods-list', this.$el).append(new s({
                model: t
            }).render().$el)
        },
        goMyFav: function () {
            _global.user ? t.history.navigate('/collect/record/follow', {
                trigger: !0,
                replace: !1
            })  : $.toast('请先登陆')
        },
        setColumn: function (t) {
            var i = this;
            if (!$(t.currentTarget).hasClass('active')) {
                $(t.currentTarget).addClass('active').siblings().removeClass('active');
                var e = $(t.currentTarget).attr('type');
                i.collection.queryParams.type = e,
                $('.js-goods-list', this.$el).html(''),
                i.collection.getFirstPage()
            }
        },
        bottomLoad: function () {
            this.isRequest = !1;
            var t = this;
            $(window).on('scroll', function (i) {
                var e = $(window).scrollTop(),
                n = $(document).height(),
                s = $(window).height();
                e >= n - s - 100 && t.collection.hasNextPage() && 0 == t.isRequest && (t.isRequest = !0, $('.js-more-loading', t.$el).loading('show'), t.collection.getNextPage())
            })
        }
    })
}), define('text!components/modules/credit_head/tpl.html', [
], function () {
    return '<div class="credit-mall-header">\n    <ul class="mall-item">\n        <li>\n            <i class="if if-credit-circle"></i>\n            <span>积分</span>\n            <span class="record-num">{{= it.credit_num||0}}</span>\n        </li>\n        <li>\n             <a href="/credit/record" style="color: #000;">\n                <i class="if if-credit-record"></i>\n                <span>积分详情</span>\n             </a>\n        </li>\n    </ul>\n</div>'
}), define('components/modules/credit_head/view', [
    'backbone',
    'doT',
    'text!components/modules/credit_head/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), define('components/modules/credit_goods/collection', [
    'backbone.paginator'
], function (t) {
    return Backbone.PageableCollection.extend({
        url: '/credit/getCreditGoods.json',
        state: {
            pagesInRange: 0,
            pageSize: 10
        },
        queryParams: {
            totalPages: null,
            totalRecords: null,
            pageSize: 'limit',
            currentPage: null,
            offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        },
        parseState: function (t, i, e, n) {
            return {
                totalRecords: t._count
            }
        },
        parseRecords: function (t, i) {
            return t.data
        }
    })
}), define('text!components/modules/credit_goods/item.html', [
], function () {
    return '<a class="clearfix" href="/goods/{{=it.goods_id}}">\n    <div class="goods-title">{{=it.title}}</div>\n    <p class="goods-credit">\n        {{?it.price}}\n        <span>{{=_global.setting.currency_unit}}{{=parseInt(it.price)}}</span>\n        <span>+</span>\n        {{?}}\n        <span>{{=it.credit_price}}</span>\n        <i class="if if-credit-money"></i>\n    </p>\n    <img class="lazy" data-original="{{=_global.url.ms+it.img}}?imageMogr2/thumbnail/320x320!">\n</a>'
}), define('components/modules/credit_goods/item', [
    'backbone',
    'doT',
    'text!components/modules/credit_goods/item.html'
], function (t, i, e) {
    return t.View.extend({
        tagName: 'li',
        className: 'clearfix',
        template: i.template(e),
        events: {
        },
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model.toJSON())),
            this
        }
    })
}), define('text!components/modules/credit_goods/tpl.html', [
], function () {
    return '<div class="mall-goods">\n    <div class="goods-header">\n        <div class="tab-goods">\n            <div class="all-goods j-mall-type active" data-type="1">全部商品</div>\n            <div class="able-goods j-mall-type" data-type="2">我能换的</div>\n            <div class="credit-switch-left credit-switch"></div>\n        </div>\n    </div>\n\n    <div class="goods-list-wrapper">\n        <ul class="goods-list clearfix"></ul>\n        <div class="js-more-loading"></div>\n    </div>\n</div>'
}), define('components/modules/credit_goods/view', [
    'backbone',
    'doT',
    'lazyLoad',
    'components/modules/credit_goods/collection',
    'components/modules/credit_goods/item',
    'text!components/modules/credit_goods/tpl.html',
    'text!apps/guider/templates/empty.html'
], function (t, i, e, n, s, a, l) {
    return t.View.extend({
        template: i.template(a),
        events: {
            'click .j-mall-type': 'changeType'
        },
        initialize: function () {
            this.collection = new n,
            this.collection.on('sync', this.renderEach, this)
        },
        render: function () {
            if (window.localStorage.getItem('creditType')) {
                var t = window.localStorage.getItem('creditType');
                this.collection.queryParams.type = t
            } else this.collection.queryParams.type = '1';
            return this.collection.fetch(),
            $('.js-more-loading', this.$el).loading('show'),
            this.$el.html(this.template(this.model)),
            '1' == t ? $('.credit-switch', this.$el).addClass('credit-switch-left').removeClass('credit-switch-right')  : ($('.all-goods', this.$el).removeClass('active').siblings().addClass('active'), $('.credit-switch', this.$el).addClass('credit-switch-right').removeClass('credit-switch-left')),
            this.bottomLoad(),
            this
        },
        renderEach: function () {
            if ($('.js-more-loading', this.$el).loading('hide'), 0 == this.collection.state.totalRecords) {
                var t = i.template(l),
                e = '暂无商品';
                $('.goods-list', this.$el).html(t({
                    info: e,
                    is_background: 1
                })),
                $('.goods-list', this.$el).find('li').css('width', '100%')
            } else this.collection.each(this.renderItemList, this),
            $('img.lazy').lazyload(),
            this.isRequest = !1
        },
        renderItemList: function (t) {
            $('.goods-list', this.$el).append(new s({
                model: t
            }).render().$el)
        },
        changeType: function (t) {
            var i = $(t.currentTarget),
            e = i.data('type');
            i.hasClass('active') || (i.addClass('active').siblings().removeClass('active'), '1' == e ? ($('.credit-switch', this.$el).addClass('credit-switch-left').removeClass('credit-switch-right'), window.localStorage.setItem('creditType', '1'))  : ($('.credit-switch', this.$el).addClass('credit-switch-right').removeClass('credit-switch-left'), window.localStorage.setItem('creditType', '2')), this.collection.queryParams.type = e, $('.goods-list', this.$el).html(''), this.collection.getFirstPage())
        },
        bottomLoad: function () {
            this.isRequest = !1;
            var t = this;
            $(window).on('scroll', function (i) {
                var e = $(window).scrollTop(),
                n = $(document).height(),
                s = $(window).height();
                e >= n - s - 100 && t.collection.hasNextPage() && 0 == t.isRequest && (t.isRequest = !0, $('.js-more-loading', t.$el).loading('show'), t.collection.getNextPage())
            })
        }
    })
}), define('text!components/modules/team_head/tpl.html', [
], function () {
    return '<div class="view-team">\n    <div class="Upper">\n        <div class="InUpper">\n             <div class="title">\n                {{?it.member}}\n                <i>\n                    <img src="{{=it.member.avatar}}" class="team_logo" />\n                    {{?_global.teamer.is_captain==1}}\n                    <img src="image/captains_logo.png" class="captains" />\n                    {{?}}\n                </i>    \n                {{?}}\n\n            </div>\n            <div class="name">\n                <span>\n                    {{=it.nickname}}\n                </span>\n                <span>\n                    {{=it.mobile}}\n                </span>\n            </div>\n        </div>\n        <div class="royalty">\n            <div class="left">\n                <h2>{{=it.total_bonus}}</h2>\n                <p>累计提成(元)</p>\n            </div>\n            <div class="right">\n                <h2>{{=it.team_order_count}}</h2>\n                <p>贡献订单</p>\n            </div>\n        </div>\n    </div>\n    <div class="team_name">     \n        <a href="/team/edit" class="clearfix">\n            {{?it.team}}\n            <div class="logo">\n            {{?it.team.logo.indexOf("/")!=0}}\n                <img src="{{=_global.url.ms}}{{=it.team.logo}}"/>\n            {{??}}\n                <img src="{{=it.team.logo}}"/>\n            {{?}}\n            </div>\n            {{?}}\n            <div class="logo_name">\n                {{?it.team}}\n                <h4>{{=it.team.name}}</h4>\n                {{?}}\n                {{?it.team}}\n                <p>编号:{{=it.team.id}}</p>\n                {{?}}\n                <i class="if"></i>\n            </div>\n        </a>\n    </div>\n    {{?_global.teamer.is_captain==1}}\n    <div class="content">\n        <ul class="InContent">\n            <li>\n                <a href="/team/invite/{{=_global.teamer.id}}">\n                    <i class="if first"></i>\n                    <p>成员邀请</p>\n                    {{? it.to_audit_count >0}}\n                    <span class="number">{{=it.to_audit_count}}</span>\n                    {{?}}\n                </a>\n                \n            </li>\n            <li>\n                <a href="/team/order">\n                    <i class="if second"></i>\n                    <p>{{=_global.team_alias}}订单</p>\n                </a>\n                \n            </li>\n            <li>\n                <a href="/team/bonus">\n                   <i class="if third"></i>\n                    <p>{{=_global.team_alias}}提成</p> \n                </a>\n                \n            </li>\n        </ul>\n    </div>\n    {{?}}\n</div>'
}), define('components/modules/team_head/view', [
    'backbone',
    'doT',
    'text!components/modules/team_head/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), define('text!components/modules/team_navs/tpl.html', [
], function () {
    return '<div class="view-team">\n    <div class="main">\n        <ul class="Inmain">\n            <li>\n                <a href="/balance?type=11" class="clearfix">                   \n                    <p> \n                        <i class="if if-iconfont">&#xe67f;</i>我的提成\n                    </p>\n                    <div class="if next"></div>\n                </a>                \n            </li>\n            <li class="current">\n                <a href="/team/contribution_order" class="clearfix">                    \n                    <p>\n                        <i class="if if-iconfont">&#xe687;</i>\n                        贡献订单\n                        <span>共计{{=it.team_order_count}}笔订单</span>\n                        <div class="if next"></div>\n                    </p>                    \n                </a>\n            </li>\n            <li>\n                <a href="/team/member_list" class="clearfix"> \n                    <p>\n                        <i class="if if-iconfont">&#xe688;</i>\n                        {{=_global.team_alias}}成员                    \n                        <span>共{{=it.team_count}}位成员</span>\n                        <div class="if next"></div>\n                    </p>\n                </a>                \n            </li>\n            <li>\n                <a href="/team/hero" class="clearfix">\n                    <p>\n                        <i class="if if-iconfont">&#xe684;</i>\n                        {{=_global.team_alias}}榜                    \n                        <span>本月排行第{{=it.rank}}名</span>\n                        <div class="if next"></div>\n                    </p>\n                </a>                \n            </li>\n        </ul>\n    </div>\n</div>'
}), define('components/modules/team_navs/view', [
    'backbone',
    'doT',
    'text!components/modules/team_navs/tpl.html'
], function (t, i, e) {
    return t.View.extend({
        template: i.template(e),
        initialize: function () {
        },
        render: function () {
            return this.$el.html(this.template(this.model)),
            this
        }
    })
}), function (t, i, e) {
    function n(t, e) {
        this.wrapper = 'string' == typeof t ? i.querySelector(t)  : t,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: '',
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var n in e) this.options[n] = e[n];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? ' translateZ(0)' : '',
        this.options.useTransition = o.hasTransition && this.options.useTransition,
        this.options.useTransform = o.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? 'vertical' : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = 'vertical' == this.options.eventPassthrough ? !1 : this.options.scrollY,
        this.options.scrollX = 'horizontal' == this.options.eventPassthrough ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = 'string' == typeof this.options.bounceEasing ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = 'tap'),
        'scale' == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? - 1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {
        },
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function s(t, e, n) {
        var s = i.createElement('div'),
        a = i.createElement('div');
        return n === !0 && (s.style.cssText = 'position:absolute;z-index:9999', a.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'),
        a.className = 'iScrollIndicator',
        'h' == t ? (n === !0 && (s.style.cssText += ';height:7px;left:2px;right:2px;bottom:0', a.style.height = '100%'), s.className = 'iScrollHorizontalScrollbar')  : (n === !0 && (s.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px', a.style.width = '100%'), s.className = 'iScrollVerticalScrollbar'),
        s.style.cssText += ';overflow:hidden',
        e || (s.style.pointerEvents = 'none'),
        s.appendChild(a),
        s
    }
    function a(e, n) {
        this.wrapper = 'string' == typeof n.el ? i.querySelector(n.el)  : n.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = e,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var s in n) this.options[s] = n[s];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (o.addEvent(this.indicator, 'touchstart', this), o.addEvent(t, 'touchend', this)), this.options.disablePointer || (o.addEvent(this.indicator, o.prefixPointerEvent('pointerdown'), this), o.addEvent(t, o.prefixPointerEvent('pointerup'), this)), this.options.disableMouse || (o.addEvent(this.indicator, 'mousedown', this), o.addEvent(t, 'mouseup', this))),
        this.options.fade && (this.wrapperStyle[o.style.transform] = this.scroller.translateZ, this.wrapperStyle[o.style.transitionDuration] = o.isBadAndroid ? '0.001s' : '0ms', this.wrapperStyle.opacity = '0')
    }
    var l = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
        t.setTimeout(i, 1000 / 60)
    },
    o = function () {
        function n(t) {
            return l === !1 ? !1 : '' === l ? t : l + t.charAt(0).toUpperCase() + t.substr(1)
        }
        var s = {
        },
        a = i.createElement('div').style,
        l = function () {
            for (var t, i = [
                't',
                'webkitT',
                'MozT',
                'msT',
                'OT'
            ], e = 0, n = i.length; n > e; e++) if (t = i[e] + 'ransform', t in a) return i[e].substr(0, i[e].length - 1);
            return !1
        }();
        s.getTime = Date.now || function () {
            return (new Date).getTime()
        },
        s.extend = function (t, i) {
            for (var e in i) t[e] = i[e]
        },
        s.addEvent = function (t, i, e, n) {
            t.addEventListener(i, e, !!n)
        },
        s.removeEvent = function (t, i, e, n) {
            t.removeEventListener(i, e, !!n)
        },
        s.prefixPointerEvent = function (i) {
            return t.MSPointerEvent ? 'MSPointer' + i.charAt(9).toUpperCase() + i.substr(10)  : i
        },
        s.momentum = function (t, i, n, s, a, l) {
            var o,
            r,
            c = t - i,
            d = e.abs(c) / n;
            return l = void 0 === l ? 0.0006 : l,
            o = t + d * d / (2 * l) * (0 > c ? - 1 : 1),
            r = d / l,
            s > o ? (o = a ? s - a / 2.5 * (d / 8)  : s, c = e.abs(o - t), r = c / d)  : o > 0 && (o = a ? a / 2.5 * (d / 8)  : 0, c = e.abs(t) + o, r = c / d),
            {
                destination: e.round(o),
                duration: r
            }
        };
        var o = n('transform');
        return s.extend(s, {
            hasTransform: o !== !1,
            hasPerspective: n('perspective') in a,
            hasTouch: 'ontouchstart' in t,
            hasPointer: t.PointerEvent || t.MSPointerEvent,
            hasTransition: n('transition') in a
        }),
        s.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion),
        s.extend(s.style = {
        }, {
            transform: o,
            transitionTimingFunction: n('transitionTimingFunction'),
            transitionDuration: n('transitionDuration'),
            transitionDelay: n('transitionDelay'),
            transformOrigin: n('transformOrigin')
        }),
        s.hasClass = function (t, i) {
            var e = new RegExp('(^|\\s)' + i + '(\\s|$)');
            return e.test(t.className)
        },
        s.addClass = function (t, i) {
            if (!s.hasClass(t, i)) {
                var e = t.className.split(' ');
                e.push(i),
                t.className = e.join(' ')
            }
        },
        s.removeClass = function (t, i) {
            if (s.hasClass(t, i)) {
                var e = new RegExp('(^|\\s)' + i + '(\\s|$)', 'g');
                t.className = t.className.replace(e, ' ')
            }
        },
        s.offset = function (t) {
            for (var i = - t.offsetLeft, e = - t.offsetTop; t = t.offsetParent; ) i -= t.offsetLeft,
            e -= t.offsetTop;
            return {
                left: i,
                top: e
            }
        },
        s.preventDefaultException = function (t, i) {
            for (var e in i) if (i[e].test(t[e])) return !0;
            return !1
        },
        s.extend(s.eventType = {
        }, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        s.extend(s.ease = {
        }, {
            quadratic: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function (t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                fn: function (t) {
                    return e.sqrt(1 - --t * t)
                }
            },
            back: {
                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                fn: function (t) {
                    var i = 4;
                    return (t -= 1) * t * ((i + 1) * t + i) + 1
                }
            },
            bounce: {
                style: '',
                fn: function (t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                }
            },
            elastic: {
                style: '',
                fn: function (t) {
                    var i = 0.22,
                    n = 0.4;
                    return 0 === t ? 0 : 1 == t ? 1 : n * e.pow(2, - 10 * t) * e.sin((t - i / 4) * (2 * e.PI) / i) + 1
                }
            }
        }),
        s.tap = function (t, e) {
            var n = i.createEvent('Event');
            n.initEvent(e, !0, !0),
            n.pageX = t.pageX,
            n.pageY = t.pageY,
            t.target.dispatchEvent(n)
        },
        s.click = function (t) {
            var e,
            n = t.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (e = i.createEvent('MouseEvents'), e.initMouseEvent('click', !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, n.dispatchEvent(e))
        },
        s
    }();
    n.prototype = {
        version: '5.1.3',
        _init: function () {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function () {
            this._initEvents(!0),
            this._execEvent('destroy')
        },
        _transitionEnd: function (t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent('scrollEnd')))
        },
        _start: function (t) {
            if ((1 == o.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || o.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || o.isBadAndroid || o.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var i,
                n = t.touches ? t.touches[0] : t;
                this.initiated = o.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this._transitionTime(),
                this.startTime = o.getTime(),
                this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, i = this.getComputedPosition(), this._translate(e.round(i.x), e.round(i.y)), this._execEvent('scrollEnd'))  : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent('scrollEnd')),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = n.pageX,
                this.pointY = n.pageY,
                this._execEvent('beforeScrollStart')
            }
        },
        _move: function (t) {
            if (this.enabled && o.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var i,
                n,
                s,
                a,
                l = t.touches ? t.touches[0] : t,
                r = l.pageX - this.pointX,
                c = l.pageY - this.pointY,
                d = o.getTime();
                if (this.pointX = l.pageX, this.pointY = l.pageY, this.distX += r, this.distY += c, s = e.abs(this.distX), a = e.abs(this.distY), !(d - this.endTime > 300 && 10 > s && 10 > a)) {
                    if (this.directionLocked || this.options.freeScroll || (s > a + this.options.directionLockThreshold ? this.directionLocked = 'h' : a >= s + this.options.directionLockThreshold ? this.directionLocked = 'v' : this.directionLocked = 'n'), 'h' == this.directionLocked) {
                        if ('vertical' == this.options.eventPassthrough) t.preventDefault();
                         else if ('horizontal' == this.options.eventPassthrough) return void (this.initiated = !1);
                        c = 0
                    } else if ('v' == this.directionLocked) {
                        if ('horizontal' == this.options.eventPassthrough) t.preventDefault();
                         else if ('vertical' == this.options.eventPassthrough) return void (this.initiated = !1);
                        r = 0
                    }
                    r = this.hasHorizontalScroll ? r : 0,
                    c = this.hasVerticalScroll ? c : 0,
                    i = this.x + r,
                    n = this.y + c,
                    (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + r / 3 : i > 0 ? 0 : this.maxScrollX),
                    (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY),
                    this.directionX = r > 0 ? - 1 : 0 > r ? 1 : 0,
                    this.directionY = c > 0 ? - 1 : 0 > c ? 1 : 0,
                    this.moved || this._execEvent('scrollStart'),
                    this.moved = !0,
                    this._translate(i, n),
                    d - this.startTime > 300 && (this.startTime = d, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function (t) {
            if (this.enabled && o.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !o.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var i,
                n,
                s = (t.changedTouches ? t.changedTouches[0] : t, o.getTime() - this.startTime),
                a = e.round(this.x),
                l = e.round(this.y),
                r = e.abs(a - this.startX),
                c = e.abs(l - this.startY),
                d = 0,
                h = '';
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = o.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(a, l), !this.moved) return this.options.tap && o.tap(t, this.options.tap),
                    this.options.click && o.click(t),
                    void this._execEvent('scrollCancel');
                    if (this._events.flick && 200 > s && 100 > r && 100 > c) return void this._execEvent('flick');
                    if (this.options.momentum && 300 > s && (i = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration)  : {
                        destination: a,
                        duration: 0
                    }, n = this.hasVerticalScroll ? o.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration)  : {
                        destination: l,
                        duration: 0
                    }, a = i.destination, l = n.destination, d = e.max(i.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                        var m = this._nearestSnap(a, l);
                        this.currentPage = m,
                        d = this.options.snapSpeed || e.max(e.max(e.min(e.abs(a - m.x), 1000), e.min(e.abs(l - m.y), 1000)), 300),
                        a = m.x,
                        l = m.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        h = this.options.bounceEasing
                    }
                    return a != this.x || l != this.y ? ((a > 0 || a < this.maxScrollX || l > 0 || l < this.maxScrollY) && (h = o.ease.quadratic), void this.scrollTo(a, l, d, h))  : void this._execEvent('scrollEnd')
                }
            }
        },
        _resize: function () {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function () {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function (t) {
            var i = this.x,
            e = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? e = 0 : this.y < this.maxScrollY && (e = this.maxScrollY),
            i == this.x && e == this.y ? !1 : (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        },
        refresh: function () {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = o.offset(this.wrapper),
            this._execEvent('refresh'),
            this.resetPosition()
        },
        on: function (t, i) {
            this._events[t] || (this._events[t] = [
            ]),
            this._events[t].push(i)
        },
        off: function (t, i) {
            if (this._events[t]) {
                var e = this._events[t].indexOf(i);
                e > - 1 && this._events[t].splice(e, 1)
            }
        },
        _execEvent: function (t) {
            if (this._events[t]) {
                var i = 0,
                e = this._events[t].length;
                if (e) for (; e > i; i++) this._events[t][i].apply(this, [
                ].slice.call(arguments, 1))
            }
        },
        scrollBy: function (t, i, e, n) {
            t = this.x + t,
            i = this.y + i,
            e = e || 0,
            this.scrollTo(t, i, e, n)
        },
        scrollTo: function (t, i, e, n) {
            n = n || o.ease.circular,
            this.isInTransition = this.options.useTransition && e > 0,
            !e || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(e), this._translate(t, i))  : this._animate(t, i, e, n.fn)
        },
        scrollToElement: function (t, i, n, s, a) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var l = o.offset(t);
                l.left -= this.wrapperOffset.left,
                l.top -= this.wrapperOffset.top,
                n === !0 && (n = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                s === !0 && (s = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                l.left -= n || 0,
                l.top -= s || 0,
                l.left = l.left > 0 ? 0 : l.left < this.maxScrollX ? this.maxScrollX : l.left,
                l.top = l.top > 0 ? 0 : l.top < this.maxScrollY ? this.maxScrollY : l.top,
                i = void 0 === i || null === i || 'auto' === i ? e.max(e.abs(this.x - l.left), e.abs(this.y - l.top))  : i,
                this.scrollTo(l.left, l.top, i, a)
            }
        },
        _transitionTime: function (t) {
            if (t = t || 0, this.scrollerStyle[o.style.transitionDuration] = t + 'ms', !t && o.isBadAndroid && (this.scrollerStyle[o.style.transitionDuration] = '0.001s'), this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTime(t)
        },
        _transitionTimingFunction: function (t) {
            if (this.scrollerStyle[o.style.transitionTimingFunction] = t, this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTimingFunction(t)
        },
        _translate: function (t, i) {
            if (this.options.useTransform ? this.scrollerStyle[o.style.transform] = 'translate(' + t + 'px,' + i + 'px)' + this.translateZ : (t = e.round(t), i = e.round(i), this.scrollerStyle.left = t + 'px', this.scrollerStyle.top = i + 'px'), this.x = t, this.y = i, this.indicators) for (var n = this.indicators.length; n--; ) this.indicators[n].updatePosition()
        },
        _initEvents: function (i) {
            var e = i ? o.removeEvent : o.addEvent,
            n = this.options.bindToWrapper ? this.wrapper : t;
            e(t, 'orientationchange', this),
            e(t, 'resize', this),
            this.options.click && e(this.wrapper, 'click', this, !0),
            this.options.disableMouse || (e(this.wrapper, 'mousedown', this), e(n, 'mousemove', this), e(n, 'mousecancel', this), e(n, 'mouseup', this)),
            o.hasPointer && !this.options.disablePointer && (e(this.wrapper, o.prefixPointerEvent('pointerdown'), this), e(n, o.prefixPointerEvent('pointermove'), this), e(n, o.prefixPointerEvent('pointercancel'), this), e(n, o.prefixPointerEvent('pointerup'), this)),
            o.hasTouch && !this.options.disableTouch && (e(this.wrapper, 'touchstart', this), e(n, 'touchmove', this), e(n, 'touchcancel', this), e(n, 'touchend', this)),
            e(this.scroller, 'transitionend', this),
            e(this.scroller, 'webkitTransitionEnd', this),
            e(this.scroller, 'oTransitionEnd', this),
            e(this.scroller, 'MSTransitionEnd', this)
        },
        getComputedPosition: function () {
            var i,
            e,
            n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (n = n[o.style.transform].split(')') [0].split(', '), i = + (n[12] || n[4]), e = + (n[13] || n[5]))  : (i = + n.left.replace(/[^-\d.]/g, ''), e = + n.top.replace(/[^-\d.]/g, '')),
            {
                x: i,
                y: e
            }
        },
        _initIndicators: function () {
            function t(t) {
                for (var i = o.indicators.length; i--; ) t.call(o.indicators[i])
            }
            var i,
            e = this.options.interactiveScrollbars,
            n = 'string' != typeof this.options.scrollbars,
            l = [
            ],
            o = this;
            this.indicators = [
            ],
            this.options.scrollbars && (this.options.scrollY && (i = {
                el: s('v', e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(i.el), l.push(i)), this.options.scrollX && (i = {
                el: s('h', e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(i.el), l.push(i))),
            this.options.indicators && (l = l.concat(this.options.indicators));
            for (var r = l.length; r--; ) this.indicators.push(new a(this, l[r]));
            this.options.fadeScrollbars && (this.on('scrollEnd', function () {
                t(function () {
                    this.fade()
                })
            }), this.on('scrollCancel', function () {
                t(function () {
                    this.fade()
                })
            }), this.on('scrollStart', function () {
                t(function () {
                    this.fade(1)
                })
            }), this.on('beforeScrollStart', function () {
                t(function () {
                    this.fade(1, !0)
                })
            })),
            this.on('refresh', function () {
                t(function () {
                    this.refresh()
                })
            }),
            this.on('destroy', function () {
                t(function () {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function () {
            o.addEvent(this.wrapper, 'wheel', this),
            o.addEvent(this.wrapper, 'mousewheel', this),
            o.addEvent(this.wrapper, 'DOMMouseScroll', this),
            this.on('destroy', function () {
                o.removeEvent(this.wrapper, 'wheel', this),
                o.removeEvent(this.wrapper, 'mousewheel', this),
                o.removeEvent(this.wrapper, 'DOMMouseScroll', this)
            })
        },
        _wheel: function (t) {
            if (this.enabled) {
                t.preventDefault(),
                t.stopPropagation();
                var i,
                n,
                s,
                a,
                l = this;
                if (void 0 === this.wheelTimeout && l._execEvent('scrollStart'), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                    l._execEvent('scrollEnd'),
                    l.wheelTimeout = void 0
                }, 400), 'deltaX' in t) 1 === t.deltaMode ? (i = - t.deltaX * this.options.mouseWheelSpeed, n = - t.deltaY * this.options.mouseWheelSpeed)  : (i = - t.deltaX, n = - t.deltaY);
                 else if ('wheelDeltaX' in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                 else if ('wheelDelta' in t) i = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                 else {
                    if (!('detail' in t)) return;
                    i = n = - t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (i *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = n, n = 0), this.options.snap) return s = this.currentPage.pageX,
                a = this.currentPage.pageY,
                i > 0 ? s-- : 0 > i && s++,
                n > 0 ? a-- : 0 > n && a++,
                void this.goToPage(s, a);
                s = this.x + e.round(this.hasHorizontalScroll ? i : 0),
                a = this.y + e.round(this.hasVerticalScroll ? n : 0),
                s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX),
                a > 0 ? a = 0 : a < this.maxScrollY && (a = this.maxScrollY),
                this.scrollTo(s, a, 0)
            }
        },
        _initSnap: function () {
            this.currentPage = {
            },
            'string' == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on('refresh', function () {
                var t,
                i,
                n,
                s,
                a,
                l,
                o = 0,
                r = 0,
                c = 0,
                d = this.options.snapStepX || this.wrapperWidth,
                h = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [
                ], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0) for (n = e.round(d / 2), s = e.round(h / 2); c > - this.scrollerWidth; ) {
                        for (this.pages[o] = [
                        ], t = 0, a = 0; a > - this.scrollerHeight; ) this.pages[o][t] = {
                            x: e.max(c, this.maxScrollX),
                            y: e.max(a, this.maxScrollY),
                            width: d,
                            height: h,
                            cx: c - n,
                            cy: a - s
                        },
                        a -= h,
                        t++;
                        c -= d,
                        o++
                    } else for (l = this.options.snap, t = l.length, i = - 1; t > o; o++) (0 === o || l[o].offsetLeft <= l[o - 1].offsetLeft) && (r = 0, i++),
                    this.pages[r] || (this.pages[r] = [
                    ]),
                    c = e.max( - l[o].offsetLeft, this.maxScrollX),
                    a = e.max( - l[o].offsetTop, this.maxScrollY),
                    n = c - e.round(l[o].offsetWidth / 2),
                    s = a - e.round(l[o].offsetHeight / 2),
                    this.pages[r][i] = {
                        x: c,
                        y: a,
                        width: l[o].offsetWidth,
                        height: l[o].offsetHeight,
                        cx: n,
                        cy: s
                    },
                    c > this.maxScrollX && r++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold)  : (this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on('flick', function () {
                var t = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1000), e.min(e.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function (t, i) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var n = 0,
            s = this.pages.length,
            a = 0;
            if (e.abs(t - this.absStartX) < this.snapThresholdX && e.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); s > n; n++) if (t >= this.pages[n][0].cx) {
                t = this.pages[n][0].x;
                break
            }
            for (s = this.pages[n].length; s > a; a++) if (i >= this.pages[0][a].cy) {
                i = this.pages[0][a].y;
                break
            }
            return n == this.currentPage.pageX && (n += this.directionX, 0 > n ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x),
            a == this.currentPage.pageY && (a += this.directionY, 0 > a ? a = 0 : a >= this.pages[0].length && (a = this.pages[0].length - 1), i = this.pages[0][a].y),
            {
                x: t,
                y: i,
                pageX: n,
                pageY: a
            }
        },
        goToPage: function (t, i, n, s) {
            s = s || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0),
            i >= this.pages[t].length ? i = this.pages[t].length - 1 : 0 > i && (i = 0);
            var a = this.pages[t][i].x,
            l = this.pages[t][i].y;
            n = void 0 === n ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(a - this.x), 1000), e.min(e.abs(l - this.y), 1000)), 300)  : n,
            this.currentPage = {
                x: a,
                y: l,
                pageX: t,
                pageY: i
            },
            this.scrollTo(a, l, n, s)
        },
        next: function (t, i) {
            var e = this.currentPage.pageX,
            n = this.currentPage.pageY;
            e++,
            e >= this.pages.length && this.hasVerticalScroll && (e = 0, n++),
            this.goToPage(e, n, t, i)
        },
        prev: function (t, i) {
            var e = this.currentPage.pageX,
            n = this.currentPage.pageY;
            e--,
            0 > e && this.hasVerticalScroll && (e = 0, n--),
            this.goToPage(e, n, t, i)
        },
        _initKeys: function (i) {
            var e,
            n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ('object' == typeof this.options.keyBindings) for (e in this.options.keyBindings) 'string' == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
             else this.options.keyBindings = {
            };
            for (e in n) this.options.keyBindings[e] = this.options.keyBindings[e] || n[e];
            o.addEvent(t, 'keydown', this),
            this.on('destroy', function () {
                o.removeEvent(t, 'keydown', this)
            })
        },
        _key: function (t) {
            if (this.enabled) {
                var i,
                n = this.options.snap,
                s = n ? this.currentPage.pageX : this.x,
                a = n ? this.currentPage.pageY : this.y,
                l = o.getTime(),
                r = this.keyTime || 0,
                c = 0.25;
                switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(e.round(i.x), e.round(i.y)), this.isInTransition = !1), this.keyAcceleration = 200 > l - r ? e.min(this.keyAcceleration + c, 50)  : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s += n ? 1 : this.wrapperWidth : a += n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= n ? 1 : this.wrapperWidth : a -= n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        s = n ? this.pages.length - 1 : this.maxScrollX,
                        a = n ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        s = 0,
                        a = 0;
                        break;
                    case this.options.keyBindings.left:
                        s += n ? - 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        a += n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        s -= n ? - 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        a -= n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (n) return void this.goToPage(s, a);
                s > 0 ? (s = 0, this.keyAcceleration = 0)  : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0),
                a > 0 ? (a = 0, this.keyAcceleration = 0)  : a < this.maxScrollY && (a = this.maxScrollY, this.keyAcceleration = 0),
                this.scrollTo(s, a, 0),
                this.keyTime = l
            }
        },
        _animate: function (t, i, e, n) {
            function s() {
                var m,
                p,
                u,
                g = o.getTime();
                return g >= h ? (a.isAnimating = !1, a._translate(t, i), void (a.resetPosition(a.options.bounceTime) || a._execEvent('scrollEnd')))  : (g = (g - d) / e, u = n(g), m = (t - r) * u + r, p = (i - c) * u + c, a._translate(m, p), void (a.isAnimating && l(s)))
            }
            var a = this,
            r = this.x,
            c = this.y,
            d = o.getTime(),
            h = d + e;
            this.isAnimating = !0,
            s()
        },
        handleEvent: function (t) {
            switch (t.type) {
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                case 'mousedown':
                    this._start(t);
                    break;
                case 'touchmove':
                case 'pointermove':
                case 'MSPointerMove':
                case 'mousemove':
                    this._move(t);
                    break;
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseup':
                case 'touchcancel':
                case 'pointercancel':
                case 'MSPointerCancel':
                case 'mousecancel':
                    this._end(t);
                    break;
                case 'orientationchange':
                case 'resize':
                    this._resize();
                    break;
                case 'transitionend':
                case 'webkitTransitionEnd':
                case 'oTransitionEnd':
                case 'MSTransitionEnd':
                    this._transitionEnd(t);
                    break;
                case 'wheel':
                case 'DOMMouseScroll':
                case 'mousewheel':
                    this._wheel(t);
                    break;
                case 'keydown':
                    this._key(t);
                    break;
                case 'click':
                    t._constructed || (t.preventDefault(), t.stopPropagation())
            }
        }
    },
    a.prototype = {
        handleEvent: function (t) {
            switch (t.type) {
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                case 'mousedown':
                    this._start(t);
                    break;
                case 'touchmove':
                case 'pointermove':
                case 'MSPointerMove':
                case 'mousemove':
                    this._move(t);
                    break;
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseup':
                case 'touchcancel':
                case 'pointercancel':
                case 'MSPointerCancel':
                case 'mousecancel':
                    this._end(t)
            }
        },
        destroy: function () {
            this.options.interactive && (o.removeEvent(this.indicator, 'touchstart', this), o.removeEvent(this.indicator, o.prefixPointerEvent('pointerdown'), this), o.removeEvent(this.indicator, 'mousedown', this), o.removeEvent(t, 'touchmove', this), o.removeEvent(t, o.prefixPointerEvent('pointermove'), this), o.removeEvent(t, 'mousemove', this), o.removeEvent(t, 'touchend', this), o.removeEvent(t, o.prefixPointerEvent('pointerup'), this), o.removeEvent(t, 'mouseup', this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function (i) {
            var e = i.touches ? i.touches[0] : i;
            i.preventDefault(),
            i.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = e.pageX,
            this.lastPointY = e.pageY,
            this.startTime = o.getTime(),
            this.options.disableTouch || o.addEvent(t, 'touchmove', this),
            this.options.disablePointer || o.addEvent(t, o.prefixPointerEvent('pointermove'), this),
            this.options.disableMouse || o.addEvent(t, 'mousemove', this),
            this.scroller._execEvent('beforeScrollStart')
        },
        _move: function (t) {
            var i,
            e,
            n,
            s,
            a = t.touches ? t.touches[0] : t;
            o.getTime();
            this.moved || this.scroller._execEvent('scrollStart'),
            this.moved = !0,
            i = a.pageX - this.lastPointX,
            this.lastPointX = a.pageX,
            e = a.pageY - this.lastPointY,
            this.lastPointY = a.pageY,
            n = this.x + i,
            s = this.y + e,
            this._pos(n, s),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function (i) {
            if (this.initiated) {
                if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), o.removeEvent(t, 'touchmove', this), o.removeEvent(t, o.prefixPointerEvent('pointermove'), this), o.removeEvent(t, 'mousemove', this), this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    s = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - n.x), 1000), e.min(e.abs(this.scroller.y - n.y), 1000)), 300);
                    (this.scroller.x != n.x || this.scroller.y != n.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, s, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent('scrollEnd')
            }
        },
        transitionTime: function (t) {
            t = t || 0,
            this.indicatorStyle[o.style.transitionDuration] = t + 'ms',
            !t && o.isBadAndroid && (this.indicatorStyle[o.style.transitionDuration] = '0.001s')
        },
        transitionTimingFunction: function (t) {
            this.indicatorStyle[o.style.transitionTimingFunction] = t
        },
        refresh: function () {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none' : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none' : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none',
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (o.addClass(this.wrapper, 'iScrollBothScrollbars'), o.removeClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '8px' : this.wrapper.style.bottom = '8px'))  : (o.removeClass(this.wrapper, 'iScrollBothScrollbars'), o.addClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '2px' : this.wrapper.style.bottom = '2px'));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + 'px')  : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, 'clip' == this.options.shrink ? (this.minBoundaryX = - this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8)  : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + 'px')  : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, 'clip' == this.options.shrink ? (this.minBoundaryY = - this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8)  : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function () {
            var t = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
            i = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ('scale' == this.options.shrink && (this.width = e.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + 'px'), t = this.minBoundaryX)  : t > this.maxBoundaryX ? 'scale' == this.options.shrink ? (this.width = e.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + 'px', t = this.maxPosX + this.indicatorWidth - this.width)  : t = this.maxBoundaryX : 'scale' == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + 'px'), i < this.minBoundaryY ? ('scale' == this.options.shrink && (this.height = e.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + 'px'), i = this.minBoundaryY)  : i > this.maxBoundaryY ? 'scale' == this.options.shrink ? (this.height = e.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + 'px', i = this.maxPosY + this.indicatorHeight - this.height)  : i = this.maxBoundaryY : 'scale' == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + 'px')),
            this.x = t,
            this.y = i,
            this.scroller.options.useTransform ? this.indicatorStyle[o.style.transform] = 'translate(' + t + 'px,' + i + 'px)' + this.scroller.translateZ : (this.indicatorStyle.left = t + 'px', this.indicatorStyle.top = i + 'px')
        },
        _pos: function (t, i) {
            0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            0 > i ? i = 0 : i > this.maxPosY && (i = this.maxPosY),
            t = this.options.listenX ? e.round(t / this.sizeRatioX)  : this.scroller.x,
            i = this.options.listenY ? e.round(i / this.sizeRatioY)  : this.scroller.y,
            this.scroller.scrollTo(t, i)
        },
        fade: function (t, i) {
            if (!i || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var e = t ? 250 : 500,
                n = t ? 0 : 300;
                t = t ? '1' : '0',
                this.wrapperStyle[o.style.transitionDuration] = e + 'ms',
                this.fadeTimeout = setTimeout(function (t) {
                    this.wrapperStyle.opacity = t,
                    this.visible = + t
                }.bind(this, t), n)
            }
        }
    },
    n.utils = o,
    'undefined' != typeof module && module.exports ? module.exports = n : t.IScroll = n
}(window, document, Math),
define('iscroll', function () {
}),
define('text!components/modules/tag_list/tpl.html', [
], function () {
    return '{{var window_width=document.body.clientWidth-114,item_height=\'auto\';}}\n<section>\n\t<div class="list-container clearfix">\n\t\t<div id="rootList" class="cate-list" style="height: {{=it.pageHeight}}px; overflow:hidden;">\n\t\t\t<div style="overflow: hidden;">\n\t\t\t\t{{? it }}\n\t\t\t\t<ul class="ul-height">\n\t\t\t\t\t{{~it.nav_list:value:index}}\n\t\t\t\t\t<li class="liDefault {{=index}}">\n\t\t\t\t\t\t<a href="javascript:void(0);" class="js-change-cate currentT{{=index}}" data-index="{{=index}}">{{=value.title}}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t{{~}}\n\t\t\t\t</ul>\n\t\t\t\t{{?}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="js-info-container">\n\t\t\t<div class="wb-category-content">\n\t\t\t\t<div id="branchScroll" class="wb-category-content-wrapper" >\n\t\t\t\t\t<div id="branchList">\n\t\t\t\t\t\t{{?it}}\n\t\t\t\t\t\t{{~it.nav_list:value:indexs}}\n\t\t\t\t\t\t<div class="wb-category-div tag-list modules-slide current{{=indexs}}" data-tag-index={{=indexs}}>\n\t\t\t\t\t\t\t{{?value.imgstyle<4}}\n\t\t\t\t\t\t\t<div class="image-list style{{=value.imgstyle}}">\n\t\t\t\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t\t\t\t{{?value.imgstyle > 1}}\n\t\t\t\t\t\t\t\t\t{{for(var i = 0;i < value.imgstyle;i++){}}\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t{{for(var j = i;j< value.img_list.length;j = j + value.imgstyle){}}\n\t\t\t\t\t\t\t\t\t\t{{?value.img_list[j]}}\n\t\t\t\t\t\t\t\t\t\t<a {{?(j < value.img_list.length - 2)}}style="padding-bottom: 8px;" {{?}}href="{{=value.img_list[j].link_url||\'javacript:void(0)\'}}"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[j].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[j].title||\'\'}}">\n\t\t\t\t\t\t\t\t\t\t\t{{?value.img_list[j].title}}<p>{{=value.img_list[j].title}}</p>{{?}}\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t\t\t\t{{}}}\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{}}}\n\t\t\t\t\t\t\t\t\t{{??}}\n\t\t\t\t\t\t\t\t\t{{~value.img_list:valueson:index}}\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="{{=valueson.link_url||\'javacript:void(0)\'}}"><img class="lazy" data-original="{{=_global.url.ms+valueson.img}}?imageMogr2/thumbnail/640x"  alt="{{=valueson.title||\'\'}}">\n\t\t\t\t\t\t\t\t\t\t\t{{?valueson.title}}<p>{{=valueson.title}}</p>{{?}}\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{~}}\n\t\t\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\n\t\t\t\t\t\t\t{{?value.imgstyle==4}}\n\t\t\t\t\t\t\t{{ var ad_w1=(window_width-24)/2;}}\n\t\t\t\t\t\t\t<div class="image-ad clearfix images-tpl">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[0]}}<a href="{{=value.img_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1+8)}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[0].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[1]}}<a href="{{=value.img_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[1].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[2]}}<a href="{{=value.img_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w1}}px;height:{{=(ad_w1/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[2].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t{{?value.imgstyle==5}}\n\t\t\t\t\t\t\t{{var ad_w2=(window_width-24)/3;}}\n\t\t\t\t\t\t\t<div class="image-ad2 clearfix images-tpl">\n\t\t\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t\t\t\t{{?value.img_list[0]}}<a href="{{=value.img_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2}}px;height:{{=ad_w2}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[0].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[1]}}<a href="{{=value.img_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2*2}}px;height:{{=ad_w2}}px"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[1].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t\t\t\t{{?value.img_list[2]}}<a href="{{=value.img_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2*2}}px;height:{{=ad_w2}}px"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[2].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[3]}}<a href="{{=value.img_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w2}}px;height:{{=ad_w2}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[3].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t{{?value.imgstyle==6}}\n\t\t\t\t\t\t\t{{var ad_w3=(window_width-24)/2;}}\n\t\t\t\t\t\t\t<div class="image-ad3 clearfix images-tpl">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[0]}}<a href="{{=value.img_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=(ad_w3/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[0].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[1]}}<a href="{{=value.img_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=ad_w3}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[1].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[2]}}<a href="{{=value.img_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=ad_w3}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[2].title}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[3]}}<a href="{{=value.img_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w3}}px;height:{{=(ad_w3/2)}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[3].title}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t{{?value.imgstyle==7}}\n\t\t\t\t\t\t\t{{ var ad_w4=(window_width-32)/3;}}\n\t\t\t\t\t\t\t<div listorder="5" class="image-ad4 clearfix images-tpl">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[0]}}<a href="{{=value.img_list[0].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[0].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[0].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[1]}}<a href="{{=value.img_list[1].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[1].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[1].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[2]}}<a href="{{=value.img_list[2].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[2].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[2].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t\t{{?value.img_list[3]}}<a href="{{=value.img_list[3].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[3].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[3].title}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t{{?value.img_list[4]}}<a href="{{=value.img_list[4].link_url||\'javacript:void(0)\'}}" style="width:{{=ad_w4}}px;height:{{=ad_w4*2+8}}px;"><img class="lazy" data-original="{{=_global.url.ms+value.img_list[4].img}}?imageMogr2/thumbnail/640x"  alt="{{=value.img_list[4].title||\'\'}}"></a>{{?}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\n\t\t\t\t\t\t\t{{?value.imgstyle==8}}\n\t\t\t\t\t\t\t<div class="swiper-container swiper-img">\n\t\t\t\t\t\t\t\t<div class="swiper-wrapper">\n\t\t\t\t\t\t\t\t\t{{~value.img_list:valueimg:index}}\n\t\t\t\t\t\t\t\t\t<div class="swiper-slide">\n\t\t\t\t\t\t\t\t\t\t<a href="{{=valueimg.link_url||\'javacript:void(0)\'}}">\n\t\t\t\t\t\t\t\t\t\t\t<img class="swiper-lazy" src="{{=_global.url.ms+valueimg.img}}?imageMogr2/thumbnail/640x" >\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t{{?valueimg.title}}<div class="title">{{=valueimg.title}}</div>{{?}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t{{~}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="swiper-pagination"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{?}}\n\n\t\t\t\t\t\t\t<ul class="wb-category-style-1">\n\t\t\t\t\t\t\t\t{{~value.item_list:valueson:index}}\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a class="J_ping" href="{{=valueson.link_url||\'javascript:void(0)\'}}">\n\t\t\t\t\t\t\t\t\t\t{{?valueson.img}}\n\t\t\t\t\t\t\t\t\t\t<img src="{{=_global.url.ms+valueson.img}}" style="width:{{=value.icon_size}}px; height:{{=value.icon_size}}px;" />\n\t\t\t\t\t\t\t\t\t\t{{?}}\n\t\t\t\t\t\t\t\t\t\t<span>{{=valueson.title}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t{{~}}\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{~}}\n\t\t\t\t\t\t{{?}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>';
}),
define('components/modules/tag_list/view', [
    'backbone',
    'doT',
    'iscroll',
    'text!components/modules/tag_list/tpl.html',
    'Swiper',
    'lazyLoad'
], function (t, i, e, n, s, a) {
    return t.View.extend({
        template: i.template(n),
        events: {
            'click .js-change-cate': 'changeCate'
        },
        initialize: function () {
        },
        render: function () {
            var t = this.model.nav_list.length;
            this.model.nev_len = $(window).width() / t,
            '0' == this.model.pageHeightType && (this.model.pageHeight = $(window).height()),
            this.$el.html(this.template(this.model));
            for (var i in this.model.nav_list) console.log(this.model.nav_list[i].imgstyle),
            8 == this.model.nav_list[i].imgstyle && (console.log(this.model.nav_list[i].imgstyle), this.$el.find('.swiper-container').swiper({
                loop: !0,
                pagination: $('.swiper-pagination', this.$el) [0],
                autoplay: 3500,
                autoplayDisableOnInteraction: !1,
                preloadImages: !0
            }));
            return $('img.lazy', this.$el).lazyload(),
            $('.liDefault:first').addClass('cur'),
            $('.tag-list:first').addClass('active'),
            $('.swiper-img:first').addClass('active'),
            $('.liDefault').on('click', function () {
                $('.liDefault').removeClass('cur'),
                $(this).addClass('cur')
            }),
            this.getHeight(),
            this.loaded(),
            this
        },
        changeCate: function (t) {
            this.model.nav_list;
            this.getHeight();
            var i = $(t.currentTarget).attr('data-index');
            $('.current' + i).addClass('active').siblings().removeClass('active'),
            $('.current' + i).find('.swiper-container').addClass('active').siblings().find('.swiper-container').removeClass('active');
            for (var e in this.model.nav_list) 8 == this.model.nav_list[e].imgstyle && this.$el.find('.swiper-container').swiper({
                loop: !0,
                pagination: $('.swiper-pagination', this.$el) [e],
                autoplay: 3500,
                autoplayDisableOnInteraction: !1,
                preloadImages: !0
            });
            this.loadRight()
        },
        loaded: function () {
            setTimeout(function () {
                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) {
                    new IScroll('#rootList'),
                    new IScroll('#branchScroll')
                } else {
                    new IScroll('#rootList', {
                        click: !0
                    }),
                    new IScroll('#branchScroll', {
                        click: !0
                    })
                }
            }, 300)
        },
        loadRight: function () {
            setTimeout(function () {
                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) {
                    new IScroll('#branchScroll')
                } else {
                    new IScroll('#branchScroll', {
                        click: !0
                    })
                }
            }, 300)
        },
        getHeight: function () {
            $('#branchScroll').css({
                height: this.model.pageHeight
            }),
            $('#rootList').css({
                'max-height': this.model.pageHeight
            })
        }
    })
}),
define('components/modules/modules', [
    'components/modules/slide/view',
    'components/modules/text/view',
    'components/modules/banner/view',
    'components/modules/goods/view',
    'components/modules/nav/view',
    'components/modules/search/view',
    'components/modules/notice/view',
    'components/modules/goods_tag/view',
    'components/modules/phone/view',
    'components/modules/video/view',
    'components/modules/image/view',
    'components/modules/white/view',
    'components/modules/title/view',
    'components/modules/guider_nav/view',
    'components/modules/guider_banner/view',
    'components/modules/guider_apply/view',
    'components/modules/guider_text/view',
    'components/modules/scene/view',
    'components/modules/voice/view',
    'components/modules/snatch_nav/view',
    'components/modules/snatch_goods/view',
    'components/modules/partner_banner/view',
    'components/modules/partner_apply/view',
    'components/modules/partner_intro/view',
    'components/modules/partner_head/view',
    'components/modules/partner_account/view',
    'components/modules/partner_navs/view',
    'components/modules/collect_list/view',
    'components/modules/credit_head/view',
    'components/modules/credit_goods/view',
    'components/modules/team_head/view',
    'components/modules/team_navs/view',
    'components/modules/tag_list/view'
], function () {
}),
define('apps/tag/views/main', [
    'backbone',
    'doT',
    'lazyLoad',
    'components/nav/view',
    'components/aside/view',
    'apps/home/models/feature',
    'apps/tag/collections/collection',
    'components/modules/goods_tag/itemView',
    'components/search/view',
    'text!apps/tag/templates/main.html',
    'components/footer/view',
    'components/modules/modules'
], function (t, i, e, n, s, a, l, o, r, c, d) {
    var h = $('#views');
    return t.View.extend({
        id: 'view-tag',
        className: 'page-view view-tag',
        template: i.template(c),
        events: {
            'click .js-search-btn': 'search',
            'click .js-show-type': 'showType',
            'click .js-column': 'setColumn'
        },
        initialize: function (t) {
            $('.page-view', h).removeClass('active'),
            this.model = new a,
            this.model.id = t,
            this.model.type = 'tag',
            this.model.on('sync', this.render, this),
            this.collection = new l,
            t && (this.collection.queryParams.goods_tag_id = t),
            this.collection.on('sync', this.renderEach, this),
            $('#view-tag').remove(),
            h.append(this.$el)
        },
        render: function () {
            $.setTitle(this.model.get('name'));
            var t = this;
            return $.setForward({
                title: document.title,
                desc: t.model.get('description') || window.location.href,
                link: window.location.href,
                imgUrl: _global.url.ms + _global.shop.logo
            }),
            this.$el.html(this.template(this.model.toJSON())).addClass('active'),
            $.each(this.model.get('goods_tag_components'), function (i, e) {
                t.renderModule(e.type, e.content)
            }),
            'undefined' != this.model.get('content').sort && (this.collection.queryParams.column = this.model.get('content').sort),
            this.collection.fetch(),
            this.bottomLoad(),
            this.$el.append((new d).render().$el),
            this.$el.append((new n).render({
                type: 'tag',
                id: this.model.id
            }).$el),
            this.$el.append((new s).render({
                type: 'tag'
            }).$el),
            $.loading('hide'),
            this
        },
        renderModule: function (t, i) {
            var e = require('components/modules/' + t + '/view'),
            n = $('<div class="modules-' + t + '"></div>');
            $('.modules-container', this.$el).append(n);
            var s = new e({
                model: i
            });
            n.html(s.$el),
            s.render()
        },
        renderEach: function () {
            $('.js-more-loading', this.$el).loading('hide'),
            this.collection.each(this.renderItem, this),
            $('img.lazy').lazyload({
                effect: 'fadeIn'
            }),
            this.isRequest = !1
        },
        renderItem: function (t) {
            var i = {
                locked: !0,
                size: 'small',
                sort: 'created_at',
                show_title: !0,
                show_cart: !0,
                show_price: !0
            };
            '' != this.model.get('content') && (i = this.model.get('content')),
            t.set('content', i),
            $('.js-tag-list', this.$el).append(new o({
                model: t
            }).render().$el)
        },
        showType: function (t) {
            $(t.currentTarget).find('.if').hasClass('if-list') ? ($(t.currentTarget).html('<i class="if if-cascades"></i>'), $('.js-tag-list', this.$el).addClass('style-small'))  : ($(t.currentTarget).html('<i class="if if-list"></i>'), $('.js-tag-list', this.$el).removeClass('style-small'))
        },
        setColumn: function (t) {
            var i = $(t.currentTarget, this.$el),
            e = this,
            n = function () {
                e.collection.queryParams.column = i.attr('data-column'),
                $('.js-tag-list', e.$el).html(''),
                i.addClass('active').siblings().removeClass('active'),
                $('.js-more-loading', e.$el).loading('show'),
                e.collection.getFirstPage({
                    fetch: !0
                })
            };
            'created_at' == i.attr('data-column') ? i.hasClass('active') || ($('.js-column', this.$el).find('.if-sort').removeClass('sort-desc').removeClass('sort-asc'), this.collection.queryParams.direction = 'desc', n())  : (i.find('.if-sort').hasClass('sort-asc') ? ($('.js-column', this.$el).find('.if-sort').removeClass('sort-desc').removeClass('sort-asc'), this.collection.queryParams.direction = 'desc', i.find('.if-sort').addClass('sort-desc'))  : ($('.js-column', this.$el).find('.if-sort').removeClass('sort-desc').removeClass('sort-asc'), this.collection.queryParams.direction = 'asc', i.find('.if-sort').addClass('sort-asc')), n())
        },
        bottomLoad: function () {
            this.isRequest = !1;
            var t = this;
            $(window).on('scroll', function (i) {
                var e = $(window).scrollTop(),
                n = $(document).height(),
                s = $(window).height();
                e >= n - s - 100 && t.collection.hasNextPage() && 0 == t.isRequest && (t.isRequest = !0, $('.js-more-loading', t.$el).loading('show'), t.collection.getNextPage())
            })
        }
    })
}),
define('apps/tag/app', [
    'backbone',
    'apps/tag/views/main'
], function (t, i) {
    return {
        main: function (t) {
            this.mainView = new i(t),
            this.mainView.model.fetch()
        }
    }
});
