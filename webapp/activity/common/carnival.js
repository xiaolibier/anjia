
$(function(){
	/*  */	
	/* var myCity = new BMap.LocalCity();
		myCity.get(myFun); */
		
		
	/* 弹窗关闭 */
	$('.sbox .close_btn').bind('click',function(){
		$(this).parents('.sbox').fadeOut(100);
		$('.sbox_bg').fadeOut(100);
	});
	/* 显示弹窗 */
	$('.playbtn').bind('click',function(){
		$('.sbox').fadeIn(100);
		$('.sbox_bg').fadeIn(100);
	});

	var g = {};
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	g.code = Utils.getQueryString("code") || "";//获取微信扫码code
	g.customerCollectId = Utils.getQueryString("cus") || "";//获取用户识别id
	
	$("#submit_a_btn").bind("click",submit_form);

	function submit_form(){
		var index = $(this).attr('index') || "";
		var conf = $(this).attr('conf') || "";
		if(index == 1){
			//g.channel = '01';
			g.activity = '915';
		}else if(index == 2){
			//g.channel = '02';
			g.activity = '915';
		}
		var condi = {};
		/* condi.userCity = $("#userCity").val() || ""; */
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		condi.designName = $("#designName").val() || "";
		condi.designPhone = $("#designPhone").val() || "";
		if(condi.userName == ""){alert("客户姓名不能为空","提示");return;}
		if(!validPhone($("#userPhone"),'客户')){return;}
		if(condi.designName == ""){alert("设计师姓名不能为空","提示");return;}
		if(!validPhone($("#designPhone"),'设计师')){return;}
		condi.operate = escape(g.operate) || "";
		condi.channel = escape(g.channel) || "";
		condi.activity = escape(g.activity) || "";
		var url = Base.serverUrl + "user/insertCustomerCollect";
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
						var d = data.obj || [];
						var s = d.award || []; 
						var num = s.id || '0';
						if(conf == 1){$('.sbox').fadeOut(0);$('.sbox_bg').fadeOut(0);chouJang(num);return false;}//区分两个接口
						alert('恭喜，预约成功！');
						$("#userName").val('');
						$("#userPhone").val('');
						/* var d = data.obj || {};
						var c = d.customerCollect || {};
						var customerCollectId = c.id || ""; */
						/* location.href="carnivalOK.html"; */
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
	var $btn = $('.playbtn');
		/* 抽奖js */
	function chouJang(num){
		var num = num || '0';
		
		var playnum = 1; //初始次数，由后台传入
		//$('.playnum').html(playnum);
		var isture = 0;
		var clickfunc = function() {
			var data = [1, 2, 3, 4, 5, 6, 7, 8];
			//data为随机出来的结果，根据概率后的结果
			data = data[Math.floor(Math.random() * data.length)];
			switch(num) {
				case '0':
					alert('没有次数了');
					break;
				case '18':
					rotateFunc(1, 0, '恭喜您获得100元免息特权');
					break;
				case '6':
					rotateFunc(2, 60, '恭喜您获得工具箱一个');
					break;
				case '21':
					rotateFunc(3, 120, '恭喜您获得500元免息特权');
					break;
				case '7':
					rotateFunc(4, 180, '恭喜您获得多功能按摩器一个');
					break;
				case '20':
					rotateFunc(5, 240, '恭喜您获得300元免息特权');
					break;
				case '4':
					rotateFunc(6, 300, '恭喜您获得小米48英寸彩电-台');
					break;
				case '19':
					rotateFunc(7, 360, '恭喜您获得200元免息特权');
					break;
				case '5':
					rotateFunc(8, 420, '恭喜您获得床上用品一套');
					break;
			}
		}
		//$btn.click(function() {
		$(function() {	
			if(isture) return; // 如果在执行就退出
			isture = true; // 标志为 在执行
			//先判断是否登录,未登录则执行下面的函数
			if(1 == 2) {
				$('.playnum').html('0');
				alert("请先登录");
				isture = false;
			} else { //登录了就执行下面
				if(playnum <= 0) { //当抽奖次数为0的时候执行
					alert("没有次数了");
					//$('.playnum').html(0);
					isture = false;
				} else { //还有次数就执行
					playnum = playnum - 1; //执行转盘了则次数减1
					if(playnum <= 0) {
						playnum = 0;
					}
					//$('.playnum').html(playnum);
					clickfunc();
				}
			}
		});
		
		
	}	
		
	function rotateFunc(awards, angle, text){
			isture = true;
			$btn.stopRotate();
			$btn.rotate({
				angle: 0,
				duration: 4000, //旋转时间
				animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
				callback: function() {
					isture = false; // 标志为 执行完毕
					$('#tips').html(text);
					alert(text);
				}
			});
		};
	
	//验证手机号
	function validPhone(phone,name){
		var phone = phone.val() || "";
		var reg = /^1[3,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert(name+"手机号输入错误");
				return false;
			}else{
				return true;
			}
		}else{
			alert("请输入"+name+"电话");
		}
	}

	
	/* 配置微信参数 */
	function config_weixin(){
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
					jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				onBridgeReady();
			},
			error:function(data){
			}
		});
		
	}	
	/* 弹出支付窗口 */
	function onBridgeReady(){
	  var condi = {};
	  condi.code = g.code || "";
	  condi.customerCollectId = g.customerCollectId || "";
	  var url = Base.serverUrl + "user/payActivity";
		$.ajax({
			url:url,
			data:condi,
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
					 
					wx.chooseWXPay({
							timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
							nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
							package: packAge, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
							signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
							paySign: paySign, // 支付签名
							success: function (res) {
								// 支付成功后的回调函数
								//alert(res);
							},
							cancel: function (res) { 
								//alert(res);
							}
						});
				}
				else{
					var msg = data.message || "支付失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	
	window.chouJang = chouJang;
	window.validPhone = validPhone;
	window.onBridgeReady = onBridgeReady;
/*  */
});


