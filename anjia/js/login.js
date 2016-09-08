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
	g.codeImg = $("#imgcodebtn")[0];
	g.code = "";
	var userPhone = Utils.offLineStore.get("userphone_login",true) || "";
	$("#inputphone").val(userPhone);

	$("#inputphone").bind("blur",validPhone);
	$("#inputpwd").bind("blur",validPwd);
	$("#loginbtn").bind("click",loginBtnUp);
	$(document).keydown(function(e){
		var keycode=e.keyCode || e.which || e.charCode;
		if(keycode == 13){
			loginBtnUp();
		}
	});	
	//获取图形验证码
	sendGetImgCodeHttp();
	$("#imgcodebtn").bind("click",sendGetImgCodeHttp);
	$("#getcodebtn").bind("click",getValidCode);
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
					Utils.alert("请输入图形验证码");
					$("#inputimgcode").focus();
				}
			}
			else{
				Utils.alert("手机号输入错误");
				$("#inputphone").focus();
			}
		}
		else{
			$("#inputphone").focus();
		}
	}
	//请求验证码
	function sendGetCodeHttp(imgCode){
		//{'phone_number':string,'validate_key':string,'validate_code':string}
		var url = Base.serverUrl + "message/sendRegisterValidateMessage";//message/sendPhoneValidateMessage
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
					Utils.alert("验证码已发送,请注意查收");
					g.sendCode = true;
					$("#getcodebtn").val("60秒后重新发送");
					setTimeout(function(){
						resetGetValidCode();
					},1000);
				}
				else{
					var msg = data.message || "验证码获取失败";
					Utils.alert(msg);

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
	//找回密码
	//$("#findpwd").bind("click",findPwdPage);
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
	//验证手机号
	function validPhone(){
		var phone = $("#inputphone").val() || "";
		var reg = /^1[3,4,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				Utils.alert("用户名/手机号输入错误");
				$("#inputphone").focus();
			}
		}
	}

	//验证密码6-16
	function validPwd(){
		var pwd = $("#inputpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			Utils.alert("密码输入错误");
			//$("#inputpwd").focus();
		}
	}


	function loginBtnUp(evt){
		var phone = $("#inputphone").val() || "";
		var pwd = $("#inputpwd").val() || "";
		var image_validate_key = g.guid || "";
		var image_validate_code = $("#inputimgcode").val() || "";
		var inputcode = $("#inputcode").val() || "";
		if(phone !== ""){
			if(pwd !== ""){
				var savePhone = $("#chkphone")[0].checked;
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
				Utils.alert("请输入密码");
				$("#inputpwd").focus();
			}
		}
		else{
			Utils.alert("请输入手机号");
			$("#inputphone").focus();
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
						userInfo = JSON.stringify(userInfo);
						//保存用户数据
						Utils.offLineStore.set("userinfo",userInfo,false);
						var token = data.token || "";
						Utils.offLineStore.remove("weiyue_message",false);
						Utils.offLineStore.set("token",token,false);
						var compare=GetRequest().p;						
						if(compare==1){location.href = "/anjia/mystaging.html"}
						else if(compare=="langrun"){location.href = "/anjia/langrun_1212.html";}
						else if(compare=="shenghuojia"){location.href = "/anjia/shenghuojia_1212.html";}
						else{location.href = "/anjia/usercenter.html";}
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
					Utils.alert(msg);
					//getImgCode();
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
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