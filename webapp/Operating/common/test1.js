
$(document).ready(function(){
	/* 测试获取分享 */	
	var g = {};
	test();
	
	var myCity = new BMap.LocalCity();
		myCity.get(myFun);

	g.page_now = Utils.offLineStore.get("nowPage",false) || "1";
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	g.up = Utils.getQueryString("up") || "";//获取上一级电话
	
	page_now();
	window_scroll();
	show_paiming();
	$("#submit_a_btn").bind("click",_click_f);
	$("#common_a_btn_regist").bind("click",return_regist);
	$(".common_a_btn_tell").bind("click",return_tel);
	$(".back_up_btn").bind("click",function(){
		$("html, body").animate({
		  scrollTop: "0px"
		}, {
		  duration: 300,
		  easing: "swing"
		});	
	});
	function _click_f(){
		if (typeof WeixinJSBridge == "undefined"){
		  // alert(WeixinJSBridge);
		   if( document.addEventListener ){
			   document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		   }else if (document.attachEvent){
			   document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
			   document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		   }
		}else{
		   onBridgeReady();
		}
	}
		
	function onBridgeReady(){
	  var url = Base.serverUrl + "weixin/pay/getBrandWCPayConfig";
		$.ajax({
			url:url,
			data:'',
			type:"POST",
			dataType:"json",
			context:this,
			global:false,
			success: function(data){
				var success = data.success || true;
				if(success){
					 /* -- */
					 var d = data.obj || {};
					 var timeStamp = d.timeStamp || "";
					 var packAge = d.packAge || "";
					 var paySign = d.paySign || "";
					 var appId = d.appId || "";
					 var signType = d.signType || "";
					 var nonceStr = d.nonceStr || "";
					 
					 WeixinJSBridge.invoke(
					   'getBrandWCPayRequest', {
						   "appId" : appId, //公众号名称，由商户传入     
						   "timeStamp":timeStamp, //时间戳，自1970年以来的秒数     
						   "nonceStr" : nonceStr, //随机串     
						   "package" : packAge,
						   "signType" : signType,//微信签名方式：     
						   "paySign" : paySign //微信签名 
					   },
					   function(res){
						  alert(res.err_msg);
						  if(res.err_msg == "get_brand_wcpay_request：ok" ) {alert('成功')}
						  else if(res.err_msg == "get_brand_wcpay_request：cancel"){alert('失败')}
						  else if(res.err_msg == "get_brand_wcpay_request：fail"){alert('失败')}// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
					   }
				   ); 
					/* -- */
				}
				else{
					var msg = data.message || "获取失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});



	 
	}

	/* 获取排名前两位 */
	function show_paiming(){
		var url = Base.serverUrl + "user/getCustomerCollectTop";
		$.ajax({
			url:url,
			data:'',
			type:"POST",
			dataType:"json",
			context:this,
			global:false,
			success: function(data){
				var success = data.success || "";
				if(success){
					var d = data.list || [];
					var a = ['一','二','三'];
					var b = ['<br>',''];
					var html = '';
					for(var i=0;i<d.length;i++){
						var phoneNub = d[i].userPhone || "";
						var num = d[i].num || 0;
						var phone =  phoneNub.substring(0,3)+'*****'+phoneNub.substring(8,phoneNub.length)+"";
						html += '第'+a[i]+'名：'+phone+' 分享次数：'+num+'次'+b[i];
					}
					$('#user_list_paiming').html(html);
				}
				else{
					var msg = data.message || "获取失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	/* 滑动一屏 */
	function window_scroll(){
		back_top();
		$('.body_list_page1').each(function(evt){
			var n1 = evt + 2,n2 = evt;
			$(this).touchwipe({
	 			min_move_y: 30, //纵向灵敏度
				wipeDown: function() { 
					$("html, body").animate({
					  scrollTop: $('.page'+n2).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				}, 
				wipeUp: function() { 
					$("html, body").animate({
					  scrollTop: $('.page'+n1).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				},
	 			preventDefaultEvents: true //阻止默认事件
	 		});
			$(this).find('.u-arrow-bottom .pre-wrap').click(function(){
				$("html, body").animate({
				  scrollTop: $('.page'+n1).offset().top + "px"
				}, {
				  duration: 300,
				  easing: "swing"
				});	
	 		});
		});
		$('.body_list_page2').each(function(evt){
			var n1 = evt + 2,n2 = evt;
			$(this).touchwipe({
	 			min_move_y: 30, //纵向灵敏度
				wipeDown: function() { 
					$("html, body").animate({
					  scrollTop: $('._page'+n2).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				}, 
				wipeUp: function() { 
					$("html, body").animate({
					  scrollTop: $('._page'+n1).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				},
	 			preventDefaultEvents: true //阻止默认事件
	 		});
			$(this).find('.u-arrow-bottom .pre-wrap').click(function(){
				$("html, body").animate({
				  scrollTop: $('._page'+n1).offset().top + "px"
				}, {
				  duration: 300,
				  easing: "swing"
				});	
	 		});
		});
	}
	/* 判断显示返回顶部 */
	function back_top(){
		$(window).scroll(function(){
			var _top = $(document).scrollTop() || 0;
			var s = $(window).height();
			if(_top >= s){
				$('.back_up_btn').fadeIn(0);
			}else{
				$('.back_up_btn').fadeOut(0);
			}
		});
	}
	
	/* 页面判断 */
	function page_now(){ 
		var n = g.page_now || "";
		if(n == "2"){
			$('.body_list_page1').fadeOut(0);
			$('.body_list_page2').fadeIn(0);
		}
		/* 页面定义高度 */
		var _height = $(window).height();
		$('.body_list,.body_list2').height(_height);
		
	}
	/* 跳转 */
	function return_regist(){
		alert('请点击微信右上角的发送给朋友或者分享朋友圈');
	}
	function return_tel(){
		location.href = "tel://4006616896";
	}
	
	//if(!isWeiXin()){alert("请使用微信");}
	//百度定位
	function myFun(result){
		var cityName = result.name;
		g.userCity = cityName;
		Utils.offLineStore.set("userCity",cityName,false);
		sendGetUserInfoDicHttp();
	}
	
	function submit_form(){
		var condi = {};
		condi.userCity = $("#userCity").val() || "";
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		if(condi.userName == ""){alert("姓名不能为空","提示");return;}
		if(!validPhone()){return;}		
		condi.designName = $("#designName").val() || "";
		condi.designPhone = $("#designPhone").val() || "";
		condi.operate = escape(g.operate) || "";
		condi.channel = escape(g.channel) || "";
		condi.activity = escape(g.activity) || "";
		var up = g.up.substring(0,5)+g.up.substring(6,g.up.length)+"";
		condi.sharedPhone = up;
		var url = Base.serverUrl + "user/insertCustomerCollect";
		//if(!isWeiXin()){alert("请使用微信");return;}
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				global:false,
				success: function(data){
					var success = data.success || "";
					if(success){
						Utils.offLineStore.set("nowPage",'2',false);
						var nub = Math.floor(Math.random()*10) || '5';
						var phone_nub = condi.userPhone.substring(0,5)+nub+condi.userPhone.substring(5,condi.userPhone.length);
						location.href="activity.html?O="+g.operate+"&C="+g.channel+"&A="+g.activity+"&up="+phone_nub;
					}
					else{
						var msg = data.message || "预约失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			})
		
		
	}
	function test(){
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
			
				var d = data || {};
				var appId = d.appId || "";
				var signature = d.signature || "";
				var nonceStr = d.nonceStr || "";
				var timestamp = d.timestamp || "";
				var nub = Math.floor(Math.random()*10) || '5';
				var userPhone = $("#userPhone").val() || "";
				var phone_nub = userPhone.substring(0,5)+nub+userPhone.substring(5,userPhone.length);
				var localtionUrl ="activity.html?O="+g.operate+"&C="+g.channel+"&A="+g.activity+"&up="+phone_nub;
				
				wx.config({
					debug: '', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: appId, // 必填，公众号的唯一标识
					timestamp:timestamp, // 必填，生成签名的时间戳
					nonceStr: nonceStr, // 必填，生成签名的随机串
					signature: signature,// 必填，签名，见附录1
					jsApiList: ['onMenuShareQZone','onMenuShareWeibo','onMenuShareQQ','onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				
				/* 分享到朋友圈 */
				wx.onMenuShareTimeline({
					title: '燕子安家，5.20分期享好礼，分享献爱心~', // 分享标题
					link: localtionUrl, // 分享链接
					imgUrl: 'img/logo.jpg', // 分享图标
					success: function () { 
						diskFunc();
					},
					cancel: function () { 
					}
				});	
				/* 发送给朋友 */
				wx.onMenuShareAppMessage({
					title: '燕子安家，5.20分期享好礼，分享献爱心~', // 分享标题
					desc: '加入燕子安家助建520爱的音乐教室公益行动，动动手指领取豪礼，为爱加油！', // 分享描述
					link: localtionUrl, // 分享链接
					imgUrl: 'img/logo.jpg', // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						diskFunc();
					},
					cancel: function () { 
					}
				}); 
				/* 分享到qq */
				wx.onMenuShareQQ({
					title: '燕子安家，5.20分期享好礼，分享献爱心~', // 分享标题
					desc: '加入燕子安家助建520爱的音乐教室公益行动，动动手指领取豪礼，为爱加油！', // 分享描述
					link: localtionUrl, // 分享链接
					imgUrl: 'img/logo.jpg', // 分享图标
					success: function () { 
						diskFunc();
					},
					cancel: function () { 
					}
				});
				/* 分享到微博 */
				wx.onMenuShareWeibo({
					title: '燕子安家，5.20分期享好礼，分享献爱心~', // 分享标题
					desc: '加入燕子安家助建520爱的音乐教室公益行动，动动手指领取豪礼，为爱加油！', // 分享描述
					link: localtionUrl, // 分享链接
					imgUrl: 'img/logo.jpg', // 分享图标
					success: function () { 
						diskFunc();
					},
					cancel: function () { 
					}
				});
				/* 分享到qq空间 */
				wx.onMenuShareQZone({
					title: '燕子安家，5.20分期享好礼，分享献爱心~', // 分享标题
					desc: '加入燕子安家助建520爱的音乐教室公益行动，动动手指领取豪礼，为爱加油！', // 分享描述
					link: localtionUrl, // 分享链接
					imgUrl: 'img/logo.jpg', // 分享图标
					success: function () { 
						diskFunc();
					},
					cancel: function () { 
					}
				});
				
			},
			error:function(data){
			}
		});
		
	}
	//分享触发计数
	function diskFunc(){
		var url = Base.serverUrl + "user/updateNum";
		var condi = {};
		condi.userPhone = $("#userPhone").val() || "";
		condi.activity = g.activity;
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
					var msg = data.message || "失败";
					
				}				
			},
			error:function(data){
			}
		});
	}
		//验证手机号
	function validPhone(){
		var phone = $("#userPhone").val() || "";
		var reg = /^1[3,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("手机号输入错误");
				return false;
			}else{
				return true;
			}
		}else{
			alert("请输入电话");
		}
	}
	
	//获取城市列表
	function sendGetUserInfoDicHttp(){
		var url = Base.serverUrl + "city/getCitys";
		var condi = {};
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					changeSelectHtml(data);
				}
				else{
					var msg = data.message || "获取城市列表失败";
					alert(msg);
				}				
			},
			error:function(data){
			}
		});
	}

	function changeSelectHtml(obj){
			var data = obj.list || {};
			var option = [];
			option.push('<option value="">请选择</option>');
			var city = g.userCity.split("市")[0] || "";
			for(var i=0;i<data.length;i++){
				var name = data[i].name;
				var id = data[i].id || "";
					if(city == name){
						option.push('<option selected="selected" value="' + id + '">' + name + '</option>');
					}else{
						option.push('<option value="' + id + '">' + name + '</option>');
					}	
			}
			$("#userCity").html(option.join(''));
	}
	
	window.submit_form = submit_form;
	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
	window.validPhone = validPhone;
/*  */
})


