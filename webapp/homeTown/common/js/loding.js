$(function(){
	var g = {};
	g.zan = 0;//点赞数
	g.fangwen = 0;
	var gs = "{	'obj':[{'title':'二师弟开发网站','text':'','list':[{'id':'1','sell':'1','title':'网站开发 电脑网站 手机网站 微信微官网等','img':'1447321487.jpg','img2':'1-16022915514N15.jpg','price':'10.00'},{'id':'2','sell':'2','title':'app开发 ios app开发 android app开发等(上海复大医院案例)','img':'wei15.gif','img2':'1-150R9135K80-L.jpg','price':'10.00'},{'id':'3','sell':'5','title':'微信开发 微网站开发 商城开发','img':'u421994179.jpg','img2':'201403171657254045.jpg','price':'10.00'}]}]}";
	var goods_id = Utils.getQueryString("id") || "";
	
	loding();
	read_txt();
	read_database();
	if(goods_id != ''){show_gools();}
	
	$('.mod-nav.no-icon').bind('click',write_zan);
	$('.show_alert').bind('click',_show);
	$('.tab-nav .js-tab').bind('click',js_tab_func);
	$('.btn-sm.btn-cart.js-open-cart').bind('click',function(){alert('微信号：xiaolibier(别告诉别人哦..)')});
	$('.btn-sm.btn-buy.js-open-cart').bind('click',function(){alert('qq：1350461875(别告诉别人哦..)')});
	
	
	/* 点击商品详情与商品参数 */
	function js_tab_func(){
		var index = $(this).attr('data-index') || 0;
		var id = ['goods-info','goods-prop']; 
		$(".show_hidden.tab").removeClass('active');
		$("#"+id[index]).addClass('active');
		$(this).addClass('active').siblings('.js-tab').removeClass('active');
	}
	/* 详情页 显示商品 */
	function show_gools(){
		var data = eval('('+gs + ')') || {};
		var obj = data.obj || {};
		var count = 0;//新上的商品量
		for(var i=0,len=obj.length;i < len;i++){
			var d = obj[i] || [];
			var list = d.list || [];
			var title = d.title || '无名';
			for(var j=0 , len2=list.length; j < len2; j++){
				var b = list[j] || [];
				var t = b.title || '无名';
				var img = b.img || 'loading_img.gif';//商品图片
				var img2 = b.img2 || 'loading_img.gif';//商品介绍图片
				var id = b.id || '';
				var price = b.price || '0';
				var new_price = (price*2+10).toFixed(2) || price;
				var sell = b.sell || 0;
				if(goods_id == id){
					$('.swiper-goods-list-img.swiper-lazy').attr('src','common/img/'+img);
					$('.gools_title').html(t);
					$('.price_new').html(price);
					$('.price_old').html(new_price);
					$('.js-is-csale.sell').html('销量：'+sell+'件');
					var img_list = '<img src="common/img/'+img2+'" class="lazy goods-component-imgs" style="max-width: 100%; display: inline;"  />';
					$('.goods_img_list').html(img_list);
					
				}
			}
		}
		
			
	}
	/* 读取txt文件数据 */
	function read_txt(){
		var data = eval('('+gs + ')') || {};
		var obj = data.obj || {};
		var html = '';
		var count = 0;//新上的商品量
		for(var i=0,len=obj.length;i < len;i++){
			var d = obj[i] || [];
			var list = d.list || [];
			var title = d.title || '无名';
			html += '<div class="modules-text"><div><section class="mod-text"><p style="text-align: center;">';
			html += '<strong><span style="font-size:20px;"><span style="color:#FF0000;">'+title+'</span></span></strong>';
			html += '</p></section></div></div>';
			html += '<div class="modules-goods"><div><section class="mod-goods-list"><ul class="goods-list clearfix style-small">';
			for(var j=0 , len2=list.length; j < len2; j++){
				var b = list[j] || [];
				var t = b.title || '无名';
				var img = b.img || 'loading_img.gif';
				var id = b.id || '';
				var price = b.price || '0';
				html += '<li><a href="mom.html?id='+id+'"><div class="goods-image">';
				html += '<img class="lazy" src="common/img/'+img+'" style="display: inline;" /></div>';
				html += '<div class="goods-info"><p class="goods-title">'+t+'</p>';
				html += '<p class="goods-price">￥'+price+'</p>';
				html += '</div></a></li>';
				if(list.length != 0){count++;}
			}
			html += '</ul></section></div></div>';
		}
		$('.os_list_out').html(html);
		$('.count_num_2').html(count);
			
	}
	/* 弹出提示 */
	function _show(){
		alert('还没到货 敬请期待！');
	}
	/* 写入点赞 */
	function write_zan(){
		var condi = {};
		condi.channel = "789456321";
		condi.userPhone = getNum();
		condi.question1 = g.fangwen;
		condi.question2 = parseInt(g.zan)+1;
		var url = Base.serverUrl + "questionnaire/gydcwj";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var status = data.success || false;
				if(status){
					window.location.reload(true);
				}
				else{
					var msg = data.message || "获取失败";
					Utils.alert(msg);
				}
				
			},
			error:function(data){
			}
		});
	}
	/* 获取日期时间 */
	function getNum(){
		var Num=""; 
		for(var i=0;i<11;i++) 
		{ 
		Num+=Math.floor(Math.random()*10); 
		}
		return Num;
	}
	/* 写入访问量 */
	function write_database(num){
		var condi = {};
		condi.channel = "789456321";
		condi.userPhone = getNum();
		condi.question1 = num;
		condi.question2 = parseInt(g.zan);
		var url = Base.serverUrl + "questionnaire/gydcwj";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var status = data.success || false;
				if(status){
					
				}
				else{
					var msg = data.message || "获取失败";
					Utils.alert(msg);
				}
				
			},
			error:function(data){
			}
		});
	}	
	/* 读取访问量 */
	function read_database(){
		var condi = {};
		condi.channel = "789456321";
		condi.activityId = '1'
		var url = Base.serverUrl + "questionnaire/queryQuestionnaires";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var success = data.success || false;
				if(success){
					var d = data.obj || [];
					var num = d[0].question1 || 0;//记录访问量
					var num2 = d[0].question2 || 1;//记录点赞数
					$('.count_user_get').html(num);
					$('.count_zan_num').html(num2);
					g.zan = num2;
					num = parseInt(num)+1;
					g.fangwen = num;
					write_database(num);
				}else{
					var msg = data.message || "失败";
					Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
	}					
	
	/* 页面加载进度 */
	function loding(){
		var html = '';
		html += '<div class="common_loding_bg active">';
		html += '<div class="col-md-6">';
		html += '<div class="middle">';
		html += '<p>等一会儿</p>';
		html += '<div class="loader3">';
		html += '<span></span>';
		html += '<span></span>';
		html += '</div>';
		html += '</div>	';
		html += '</div>';
		html += '</div>';
		if(!$('.common_loding_bg').hasClass('active')){
			$('body').append(html);
		}else{
			$('.common_loding_bg').fadeIn(0);
		}
		setTimeout(function(){
			$('.common_loding_bg').fadeOut(300);
		},2000);
	}
	
	
	
	
	
	
	
	
	
	
	/* end */
});