/**
 * file:登录
 * author:chenxy
*/

//页面初始化
$(function(){
	var g = {};
	g.codeId = "";
	g.tout = null;
	g.httpTip = new Utils.httpTip({});
	/* 元宵活动标记 */
	g.customerId = "";
	g.codeImg = $("#imgcodebtn")[0];
	g.dengmi = Utils.offLineStore.get("dengmi",false) || "";
	g.coupons_id = Utils.offLineStore.get("coupons_id",false) || "";
	g.openid = Utils.offLineStore.get("openid",false) || "";
	g.guid = Utils.getGuid();
	g.code = "";
	var userPhone = Utils.offLineStore.get("userphone_login",true) || "";
	$("#inputphone").val(userPhone);
	//获取图形验证码
	sendGetImgCodeHttp();

	$("#backbtn").bind("click",backBtnUp);
	$("#getcodebtn").bind("click",getValidCode);
	$("#inputphone").bind("blur",validPhone);
	$("#inputpwd").bind("blur",validPwd);
	$("#loginbtn").bind("click",loginBtnUp);
	//找回密码
	//$("#findpwd").bind("click",findPwdPage);
	$("#imgcodebtn").bind("click",sendGetImgCodeHttp);


	function sendGetImgCodeHttp(){
		//URL:  http://www.partywo.com/imageValidate/getImageValidate
		//参数: {image_key:string}
		g.guid = Utils.getGuid();
		var url = Base.serverUrl + "imageValidate/getImageValidate";
		url = url + "?image_key=" + g.guid + "&t=" + (new Date() - 0);
		g.codeImg.src = url;

		$("#inputimgcode").val("");
	}
		//获取验证码
	function getValidCode(evt){
		//var ele = evt.currentTarget;
		//$(ele).removeClass("curr");
		//if(!this.moved){}

		var p = $("#inputphone").val() || "";
		var imgCode = $("#inputimgcode").val() || "";
		if(p !== ""){
			var reg = /^1[3,4,5,7,8]\d{9}$/g;
			if(reg.test(p)){
				g.phone = p;
				if(imgCode !== ""){
					if(!g.sendCode){
						sendGetCodeHttp(imgCode);
					}
				}
				else{
					alert("请输入图形验证码");
					//$("#inputimgcode").focus();
				}
			}
			else{
				alert("手机号输入错误");
				//$("#inputphone").focus();
			}
		}
		else{
			//$("#inputphone").focus();
		}
	}
	//重新获取验证码
	function resetGetValidCode(){
		g.sendTime = g.sendTime - 1;
		if(g.sendTime > 0){
			$("#getcodebtn").val(g.sendTime + "秒后重新发送");
			setTimeout(function(){
				resetGetValidCode();
			},1000);
		}
		else{
			$("#getcodebtn").val("重新发送");
			g.sendTime = 60;
			g.sendCode = false;

			//重新获取图形验证码,1分钟有效
			//重新获取图形验证码,1分钟有效
			sendGetImgCodeHttp();
		}
	}
	//请求验证码
	function sendGetCodeHttp(imgCode){
		//{'phone_number':string,'validate_key':string,'validate_code':string}
		var url = Base.serverUrl + "message/sendRegisterValidateMessage";
		var condi = {};
		condi.phone_num = g.phone;
		condi.validate_key = g.guid;
		condi.validate_code = imgCode;

		g.httpTip.show();
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			//要求为Boolean类型的参数，默认为true。表示是否触发全局ajax事件。设置为false将不会触发全局ajax事件，ajaxStart或ajaxStop可用于控制各种ajax事件。
			//global:false,
			success: function(data){
				//console.log("sendGetCodeHttp",data);
				var status = data.success || false;
				if(status){
					//alert("验证码:" + data.obj);
					alert("验证码已发送,请注意查收");
					g.sendCode = true;
					$("#getcodebtn").val("60秒后重新发送");
					setTimeout(function(){
						resetGetValidCode();
					},1000);
				}
				else{
					var msg = data.message || "验证码获取失败";
					alert(msg);

					//重新请求图形验证码
					sendGetImgCodeHttp();
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}


	function backBtnUp(evt){
		history.go(-1);
	}


	//验证手机号
	function validPhone(){
		var phone = $("#inputphone").val() || "";
		var reg = /^1[3,4,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("用户名/手机号输入错误");
				//$("#inputphone").focus();
			}
		}
	}

	//验证密码6-16
	function validPwd(){
		var pwd = $("#inputpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("密码输入错误");
			//$("#inputpwd").focus();
		}
	}
	/* 接收页面参数 */
	function GetRequest() { 
		var url = location.search; //获取url中"?"符后的字串
	   var theRequest = [];
	   if (url.indexOf("?") != -1) {
		  var str = url.substr(1);
		  strs = str.split("&");
		  for(var i = 0; i < strs.length; i ++) {
			 theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		  }
	   }
	   return theRequest;
	}

	function loginBtnUp(evt){
		var phone = $("#inputphone").val() || "";
		var pwd = $("#inputpwd").val() || "";
		var image_validate_key = g.guid || "";
		var image_validate_code = $("#inputimgcode").val() || "";
		var inputcode = $("#inputcode").val() || "";
		if(phone !== ""){
			if(pwd !== ""){
				var savePhone = $("#chkphone").attr("checked") == "checked" ? true : false;
				
				if(savePhone){
					Utils.offLineStore.set("userphone_login",phone,true);
				}
				var condi = {};
				condi.phone_number = phone;
				condi.password = $.md5(pwd);
				if(g.code == '106'){
					condi.image_validate_key = image_validate_key;
					condi.image_validate_code = image_validate_code;
				}else if(g.code == '107'){
					condi.validate_code = inputcode;
				}
				sendLoginHttp(condi);
			}
			else{
				alert("请输入密码");
				//$("#inputpwd").focus();
			}
		}
		else{
			alert("请输入手机号");
			//$("#inputphone").focus();
		}
	}

	function sendLoginHttp(condi){
		var url = Base.serverUrl + "user/CustomerLoginController";
		g.httpTip.show();
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendLoginHttp",data);
				$('.static_con').fadeOut(0);//默认隐藏图形验证码和短信验证码
				var status = data.success || false;
				if(status){
					var userInfo = data.obj || "";
					if(userInfo !== ""){
						g.customerId = userInfo.customerId || "";
						userInfo = JSON.stringify(userInfo);
						//保存用户数据
						Utils.offLineStore.remove("weiyue_message",false);
						Utils.offLineStore.set("userinfo",userInfo,false);
						var token = data.token || "";
						g.login_token = token;
						Utils.offLineStore.set("token",token,false);
						/* 判断是否是从元宵活动页过来的 */
						var compare = GetRequest().p;
						if(compare==1){location.replace("../mystaging/mystaging.html");}//分期付款
						else if(compare==2){location.replace("../order/index.html?orderType=100507");}//还款中
						else if(compare=="langrun"){location.href = "/webapp/coupons/langrun_1212_mobi.html";}
						else if(compare=="shenghuojia"){location.href = "/webapp/coupons/shenghuojia_1212_mobi.html";}
						else if(g.dengmi == "dengmi"){get_user_coupons();}
						else{location.replace("../personal-center/index.html");}
						
						//location.replace("../personal-center/index.html");
					}
					//location.href = "center.html";
					//var token = data.result.token || "";
					//Utils.offLineStore.set("token",token,false);
					//location.href = "center.html?token=" + token + "&p=0";
				}
				else{
					//var msg = data.error || "";
					//判断 code 106表示需要图形验证码 107表示需要图形验证码和短信验证码
					var code = data.code || '';
					var msg = data.message || "登录失败";
					if(code != ''){
						g.code = code;
						$('.static_con').fadeOut(0);
						if(code == '106') $('.static_con1').fadeIn(0);
						if(code == '107') $('.static_con').fadeIn(0);
					}
					//重新请求图形验证码
					sendGetImgCodeHttp();
					$("#inputcode").val("");
					alert(msg);
					//getImgCode();
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

//元宵活动的自动获取优惠券
	function get_user_coupons(){
		var url = Base.serverUrl + "coupon/claimCoupon";		
		var condi = {};
		condi.couponId = g.coupons_id;//优惠券id
		condi.customerId = g.customerId;
		condi.user_id = g.openid;
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			type:"POST",
			data:condi,
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					/* 判断是否是从元宵活动页过来的 */
					location.href = "/webapp/coupons/index.html";

				}
				else{
					var msg = data.message || "获取优惠券失败";
					alert(msg);
					location.replace("../personal-center/index.html");
				}
			},
			error:function(data){
			}
		});
	}













	function findPwdPage(){
		location.href = "/anjia/findpwd.html";
	}

	setTimeout(function(){
		getImgCode();
	},2000);
	//换一组图片
	function getImgCode(evt){
		var userName = $("#inputEmail3").val() || "";
		if(userName !== ""){
			g.codeId = userName;
			//console.log(g.codeId);
			$("#updatecodebtn").attr("src",Base.imgCodeUrl + "?id=" + g.codeId + "&t=" + (new Date() - 0));
			clearTimeout(g.tout);
			g.tout = setTimeout(function(){
				getImgCode();
			},60000);
		}
	}

	//重置信息
	function resetRegInfo(evt){
		$("#inputEmail3").val("");
		$("#inputPassword3").val("");
		$("#inputPhone3").val("");
		$("#inputImgCode3").val("");
		$("#inputCode3").val("");
		$("#password").val("");
	}

	function codeKeyDown(evt){
		evt = evt || event;
		if(evt.keyCode == 13){
			//
			$("#loginbtn").trigger("click");
		}
	}

	//打开注册用户页面
	function openRegPage(evt){
		window.open("/anjia/reg.html");
	}
	
});