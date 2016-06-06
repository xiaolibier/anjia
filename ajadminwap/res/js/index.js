/**
 * author:chenxy
*/
//页面初始化
$(function(){
	
	var g = {};
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.httpTip = new Utils.httpTip({});
	g.index = Utils.offLineStore.get("index",false) || "";
	g.index2 = g.index;
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		sendGetIndexMessage();
		showAllMenu();
		if(g.index == ""){//判断应该显示那一页
			g.index = 1;
		}
		menu_click(g.index,true);
		
	}

	$(".common_bottom li").bind('click',menu_click);
	
	/* 判断权限显示菜单 */
	function showAllMenu(){
		var condi = {};
		condi.login_token = g.login_token;
		condi.authoritySystem = 102302;
		var url = Base.serverUrl + "common/auth/findMenuTreeByUser";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var list = data.obj || [];
					var C = list.childrenAuthority || [];
					var html = [],html2 = [];
					var i = 0;
					for( i = 0, len = C.length; i < len; i++){
						var d = C[i] || {};
						var L = d.childrenAuthority || {};
						for(var b = 0, le = L.length; b < le; b++){
							var n = b+1;
							var s = L[b] || {};
							var authorityName = s.authorityName || "";
							var authorityUrl = s.authorityUrl || "";
							if(i == 0){//订单管理
								html.push('<a href="'+authorityUrl+'"><div class="common_list_div div'+n+'"><i class="i1"></i>'+authorityName+'<i class="i2"></i></div></a>');
							}else if(i == 1){//风控审核
								html2.push('<a href="'+authorityUrl+'"><div class="common_list_div div'+n+'"><i class="i1"></i>'+authorityName+'<i class="i2"></i></div></a>');
							}
						}
					}
					$("#my-ui-list").html(html.join(''));
					$("#rca_M_list").html(html2.join(''));
					drag_menu();
				}
				else{
					var msg = data.message || "获取信息失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	
	/* 拖拽栏目 */
	function drag_menu(){
		var list = document.getElementById("my-ui-list");
		new Sortable(list, {
			group: "name",
			store: null, // @see Store
			handle: ".i1", // 点击目标元素约束开始
			draggable: "",   // 指定那些选项需要排序
			ghostClass: "",
		 
			onStart: function (/**Event*/evt) { // 拖拽
				var itemEl = evt.item;
				//$(itemEl).find('.common_list_div').css('border','1px solid #00abdf');
				$(itemEl).find('.common_list_div').css({'background-color':'#00a675','color':'#fff'});
			},
		 
			onEnd: function (/**Event*/evt) { // 拖拽
				var itemEl = evt.item;
				//$(itemEl).find('.common_list_div').css({'border':'none','border-bottom':'1px solid #e5e5e5'});
				$(itemEl).find('.common_list_div').css({'background-color':'#fff','color':'#222'});
			},
		 
			onAdd: function (/**Event*/evt){
				var itemEl = evt.item;
			},
		 
			onUpdate: function (/**Event*/evt){
				var itemEl = evt.item; // 当前拖拽的html元素
			},
		 
			onRemove: function (/**Event*/evt){
				var itemEl = evt.item;
			}
		});
	}
	//控制菜单显示
	function menu_click(c,b){
		var a = b ? c : $(this).attr('v') || "";
		var an = g.index2 >= a ? true : false;
		
		switch(a){
			case '1': $('.common_bottom .back_color').css('left','0%'); break;
			case '2': $('.common_bottom .back_color').css('left','33.33%'); break;
			case '3': $('.common_bottom .back_color').css('left','66.66%'); break;
		}
		//判断左右动画方向
		if(an){
			$(".list_body").css({'animation':'left_in .4s linear','-moz-animation':'left_in .4s linear','-webkit-animation':'left_in .4s linear','-o-animation':'left_in .4s linear'});
		}else{
			$(".list_body").css({'animation':'right_in .4s linear','-moz-animation':'right_in .4s linear','-webkit-animation':'right_in .4s linear','-o-animation':'right_in .4s linear'});
		}
		Utils.offLineStore.set("index",a,false);
		g.index2 = a;
		$(this).parents('.ul').find('li').removeClass('active');
		$('.common_bottom .ul .li'+a).addClass("active");
		$(".list_body.list_body"+a).fadeIn(0).siblings('.list_body').fadeOut(0).removeClass('active');
	}
	function sendGetIndexMessage(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "md/order/findOrderStatusCount";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var list = data.obj || [];
					var html = [];
					for(var i = 0, len = list.length; i < len; i++){
						var n = i+1;
						var d = list[i] || {};
						var name = d.name || "";
						var count = d.count || 0;
						if(name !== ""){
							html.push('<li class="li'+n+' left"></li><li class="right">'+name+'：<span class="color">'+count+'</span>个</li>');
						}
					}
					$("#IndexMessage").html(html.join(''));
				}
				else{
					var msg = data.message || "获取信息失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}


});

