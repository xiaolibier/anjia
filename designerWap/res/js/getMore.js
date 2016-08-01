/**
 * author:chenxy
*/
//页面初始化
$(function(){
	
	var g = {};
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.code = Utils.getQueryString("Y") || "";
	g.httpTip = new Utils.httpTip({});
	g.aTitle = "" ;
	g.aUrl = "";
	g.imgUrl = "";
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		activitys();
	}

	$("#share_btn1").bind('click',share_btn_f);
	$("#share_btn2").bind('click',share_btn_f);
	$(".sbox_tips").bind('click',function(){$('.sbox_tips').fadeOut();});

	/* 获取最新活动 */
	function activitys(){
		var url = Base.serverUrl + "bannerImage/findBannerImageByKey";
		var condi = {};
		//condi.login_token = g.login_token;
		condi.navigationKey = 'DESIGNER_SHARE';
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.list || [];
					var data = obj || {};
					var option = [];
					for(var i = 0,len = data.length; i < len; i++){
						var d = data[0];
						var bmUrl = d.bmUrl || "";
						var bmTitle = d.bmTitle || "";
						var bmTextDesc = d.bmTextDesc || "";
						var bmClickUrl = d.bmClickUrl || "";
						g.aTitle = bmTitle ;
						g.aUrl = bmClickUrl;
						g.imgUrl = bmUrl;
					}
				}
				else{
					var msg = data.message || "";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}
	
	/* 活动分享点击 */
	function share_btn_f(){
		var a = $(this).attr('idx') || "";
		if(a == '1'){
			var aTitle = '我用燕子安家活动页推广业务，你也快来吧，注册即送3000元';
			var aUrl = location.href || "";
			var imgUrl = "";
		}else{
			var aTitle = g.aTitle || "" ;
			var aUrl = g.aUrl || "";
			var imgUrl = g.imgUrl || "";
		}
		 if(!isWeiXin()){
			$('.sbox_tips').fadeIn();
		}else{
			$('.sbox_tips').fadeIn();
			share_weixin(aUrl,aTitle,imgUrl);
		}
	}
	/* 配置微信参数 */
	function share_weixin(aUrl,aTitle,imgUrl){
		var condi = {};
		condi.url = window.location.href || '';
		var url = Base.serverUrl + "weixin/getJsSdkConfig";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			global:false,
			success: function(data){	
				var d = data.obj || {};
				var appId = d.appId || "";
				var signature = d.signature || "";
				var nonceStr = d.nonceStr || "";
				var timestamp = d.timestamp || "";
				
				wx.config({
					debug: '', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: appId, // 必填，公众号的唯一标识
					timestamp:timestamp, // 必填，生成签名的时间戳
					nonceStr: nonceStr, // 必填，生成签名的随机串
					signature: signature,// 必填，签名，见附录1
					jsApiList: ['onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				wx.ready(function(){
					wx.onMenuShareTimeline({
						title: aTitle, // 分享标题
						link: aUrl, // 分享链接
						imgUrl: imgUrl, // 分享图标
						success: function () { 
							// 用户确认分享后执行的回调函数
							alert('分享成功！');
							Share_back();
						},
						cancel: function () { 
							// 用户取消分享后执行的回调函数
						}
					});

				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				});
			},
			error:function(data){
			}
		});
		
	}
		
	/* 判断是不是微信浏览器 */
	function isWeiXin(){
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){
			return true;
		}else{
			return false;
		}
	}	

	/* 微信分享成功后 */
	function Share_back(){
		alert('分享回调！');
		var url = Base.serverUrl + "activity/shareActivityCallBack";
		var condi = {};
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
					alert('恭喜您，分享成功！新特权已经发送到您的账户');
				}
				else{
					var msg = data.message || "";
					alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}
	
	

});

