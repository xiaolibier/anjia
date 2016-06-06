(function($){
	var g = {};
	g.theme_color = Utils.offLineStore.get("theme_color",false) || "blue";//判断主题颜色
	g.userinfo = Utils.offLineStore.get("userinfo",false) || "";
	g.login_token = Utils.offLineStore.get("token",false) || "";
	
	//insertBottomHtml();
	insertHeadHtml();
	timeout_func();
	//getUserInfo();
	
	/* 页面超时 */
	function timeout_func(){
		var _time;
		$("body").click(function () {
			clearTimeout(_time);
			if (Utils.offLineStore.get("token", false) != "") {
				_time = setTimeout(function () {
					Utils.offLineStore.remove("token", false);
					c_alert('页面超时，请重新登录！',function(){location.reload();},function(){});
				}, 10800000);//超时3个小时10800000
			}
		});
	}
	/* 获取主题颜色 */
	function getThemeColor(){
		g.theme_color = Utils.offLineStore.get("theme_color",false) || "blue";//判断主题颜色
		if(g.theme_color == "cheng"){$('html').addClass("cheng");}else{$('html').removeClass("cheng");}
	}
	/* 保存用户主题颜色 */
	function saveThemeColor(){		
		var userinfo = JSON.parse(g.userinfo)|| {};
		var usersId = userinfo.usersId || "";
		var url = Base.serverUrl + "md/user/updateTheme";
		var condi = {};
		condi.usersId = usersId;
		condi.bgTheme = g.theme_color;
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					
				}
				else{
					var msg = data.message || "保存主题失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
		
	}
	/* 控制头部底部显示隐藏 */
	function h_scroll(){
		var _top = $(document).scrollTop() || 0;
		if(_top == 0){
			$(".common_head,.common_bottom").stop().slideDown(0);
		}else{
			$(".common_head,.common_bottom").stop().slideUp(100);
		}
	}
	//退出
	function loginOutBtn(evt){
		_alert('确定要退出吗？',function(){
			Utils.loginOut();
		},function(){})
		
	}
	/* 菜单展开收缩效果 */
	function show_toggle(){
		$(".demo_position").slideToggle(200);
	}
	/* 弹窗 */
	function _alert(showMsg,sureClickCallBack,cancelClickCallBack){
		if(typeof showMsg === 'undefined' || typeof sureClickCallBack !== 'function' || typeof cancelClickCallBack !== 'function') return;
		layer.open({
			content: showMsg,
			btn: ['确定','取消'],
			yes: function(index){
				sureClickCallBack();
				layer.close(index);
			},
			no: function(index){
				cancelClickCallBack();
				layer.close(index);
			}
		});
	}
	
	function c_alert(showMsg,sureClickCallBack,cancelClickCallBack){
		if(typeof showMsg === 'undefined' || typeof sureClickCallBack !== 'function' || typeof cancelClickCallBack !== 'function') return;
		layer.open({
			content: showMsg,
			btn: ['确定'],
			yes: function(index){
				sureClickCallBack();
				layer.close(index);
			},
			no: function(index){
				cancelClickCallBack();
				layer.close(index);
			}
		});
	}
	/* 公共头部返回 */
	function backHistory(){
		history.go(-1);
	}
	/* 页面加载插入公共底部 */
	function insertBottomHtml(){
		var idx = $('.common_bottom').attr("idx") || "";
		$('.common_bottom').empty().load('../html/footer.html',function(){
			if(idx != ""){$('.common_bottom li.li'+idx).addClass("active");}
		});
		
	}
	/* 页面加载插入公共头部 */
	function insertHeadHtml(){
		$('.common_head').empty().load('../html/header.html',function(){
			getUserInfo();
			$(".maki .loginoutbtn").on("click",loginOutBtn);
			$("#toggle_dd").on("click",show_toggle);
			$("#back_btn").bind("click",backHistory);
			$("#change_cheng").on('click',function(){
				Utils.offLineStore.set("theme_color",'cheng',false);
				getThemeColor();
				saveThemeColor();
				show_toggle();
			});
			$("#change_lan").on('click',function(){
				Utils.offLineStore.set("theme_color",'blue',false);
				getThemeColor();
				saveThemeColor();
				show_toggle();
			});
			getThemeColor();
		});
	}
	/* 公共头部获取用户名 */
	function getUserInfo(){
		var info = Utils.offLineStore.get("userinfo_admin",false) || "";
		var token = Utils.offLineStore.get("token",false) || "";
		if(token !== "" && info !== ""){
			var obj = JSON.parse(info) || {};
			var phoneNumber = obj.usersPhone || "";
			var usersName = obj.usersName || "";
			if(usersName != ""){
				$("#username_index").html(usersName);
			}else{
				$("#username_index").html(phoneNumber);
			}
			
		}
	}
	
	window._alert =_alert;
	window.c_alert =c_alert;
})(jQuery);
