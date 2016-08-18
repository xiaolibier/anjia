
$(document).ready(function(){
	/*  */	
	/* var myCity = new BMap.LocalCity();
		myCity.get(myFun); */
		
	var g = {};
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	g.code = Utils.getQueryString("code") || "";//获取微信扫码code
	g.customerCollectId = Utils.getQueryString("cus") || "";//获取用户识别id
	
	$("#submit_a_btn").bind("click",submit_form);
	/* $("#chakan_inf").bind("click",chakan_inf_func); */
	/* $("#telphone").bind("click",telphone_func); */
	/* $("#common_a_btn_regist").bind("click",config_weixin); */
	$("#slideTo").bind("click",slideTo_func);
	slideTo_func();
	sendGetUserTequan();
	sendGetUserVisitTime();
	function slideTo_func(){
		$(".a_bottom .a_content").slideToggle(300);
		$(".a_bottom .a_text .ico").toggleClass('up');
		setTimeout(function(){$(".bg").height($(".a_bottom").height());},300);
	}
	
	function submit_form(){
		var index = $(this).attr('index') || "";
		if(index == 1){
			//g.channel = '01';
			g.activity = '818';
		}else if(index == 2){
			//g.channel = '02';
			g.activity = '818';
		}
		var condi = {};
		/* condi.userCity = $("#userCity").val() || ""; */
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		condi.designName = $("#designName").val() || "";
		condi.designPhone = $("#designPhone").val() || "";
		condi.designerPrivilegeId = $("#designerPrivilegeId").val() || "";
		condi.visitTime = $("#visitTime").val() || "";
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
						/* alert('恭喜，预约成功！');
						$("#userName").val('');
						$("#userPhone").val(''); */
						/* var d = data.obj || {};
						var c = d.customerCollect || {};
						var customerCollectId = c.id || ""; */
						location.href="carnivalOK.html";
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
	/* 获取特权 */
	function sendGetUserTequan(){
		var url = Base.serverUrl + "user/getDesignerPrivileges";
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
					var data = data.obj || {};
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var i=0;i<data.length;i++){
						var money = data[i].money || 0;
						var useLeastMoney = data[i].useLeastMoney || 0;
						var id = data[i].id || "";
						option.push('<option value="' + id + '">' + money+'元（分期满'+useLeastMoney+'元可用）</option>');
					}
					$("#designerPrivilegeId").html(option.join(''));
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
	/* 获取回访时间 */
		function sendGetUserVisitTime(){
		var url = Base.serverUrl + "baseCodeController/getBaseCodeByParents";
		var condi = {};
		condi.parents = "1035";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendGetUserInfoDicHttp",data);
				var status = data.success || false;
				if(status){
					var obj = data.obj || {};
					changeSelectHtmlVisitTime(obj);
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

	function changeSelectHtmlVisitTime(obj){
		var parents = ["1035"];
		var ids = ["visitTime"];
		for(var i = 0,len = parents.length; i < len; i++){
			var data = obj[parents[i]] || {};
			var option = [];
			option.push('<option value="">全部订单</option>');
			for(var k in data){
				var id = k || "";
				var name = data[k] || "";
				option.push('<option value="' + id + '">' + name + '</option>');
			}
			$("#" + ids[i]).html(option.join(''));
		}
	}


	//百度定位
	function myFun(result){
		var cityName = result.name;
		g.userCity = cityName;
		Utils.offLineStore.set("userCity",cityName,false);
		sendGetUserInfoDicHttp();
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
	/* 查看详情 */
	function telphone_func(){
		location.href = "tel://4006616896";
	}
	/* 查看详情 */
	function chakan_inf_func(){
		alert('活动期间，预约报名参加活动，并支付1元订金，最终签约生活家装饰任意家装产品并选择燕子安家分期支付，每满5万元，即可享受5千元免息。如：申请分期10万元，36期，其中1万元为免息金额。最终只需支付(10万-1万)*16%=14400的服务费。相比起原先10万*16%=16000的服务费，直接优惠了1600元！');
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
	

	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
	window.validPhone = validPhone;
	window.onBridgeReady = onBridgeReady;
/*  */
})


