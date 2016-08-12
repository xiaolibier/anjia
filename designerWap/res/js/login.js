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
	g.dengmi = Utils.offLineStore.get("dengmi",false) || "";
	g.coupons_id = Utils.offLineStore.get("coupons_id",false) || "";
	g.openid = Utils.offLineStore.get("openid",false) || "";
	var userPhone = Utils.offLineStore.get("userphone_login",true) || "";
	g.code = Utils.getQueryString("de") || "";
	$("#inputphone").val(userPhone);

	$("#inputphone").bind("blur",validPhone);
	$("#inputpwd").bind("blur",validPwd);
	$("#loginbtn").bind("click",loginBtnUp);
	$('#reg_btn').bind('click',reg_btn_func);
	
	/* 点击注册跳转 */
	function reg_btn_func(){
		location.href="../html/reg.html?de="+g.code;
	}
	
	//验证手机号
	function validPhone(){
		var phone = $("#inputphone").val() || "";
		var reg = /^1[3,4,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("用户名/手机号输入错误");
			}
		}
	}

	//验证密码6-16
	function validPwd(){
		var pwd = $("#inputpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("密码输入错误");
		}
	}

	function loginBtnUp(evt){
		var phone = $("#inputphone").val() || "";
		var pwd = $("#inputpwd").val() || "";
		if(phone !== ""){
			if(pwd !== ""){
				Utils.offLineStore.set("userphone_login",phone,true);
				var condi = {};
				condi.phone = phone;
				condi.password = pwd;
				sendLoginHttp(condi);
			}
			else{
				alert("请输入密码");
			}
		}
		else{
			alert("请输入手机号");
		}
	}

	function sendLoginHttp(condi){
		var url = Base.serverUrl + "user/login";
		g.httpTip.show();
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var userInfo = data.obj || "";
					if(userInfo !== ""){
                        var token = data.token || "";
						var theme_color = userInfo.bgTheme || "blue";
						var code = userInfo.code || "";
                        Utils.offLineStore.set("token", token, false);
						Utils.offLineStore.set("code", code, false);
						g.customerId = userInfo.customerId || "";
						userInfo = JSON.stringify(userInfo);
						//保存用户数据
						Utils.offLineStore.set("userinfo_admin", userInfo, false);
						Utils.offLineStore.set("userinfo", userInfo, false);
						Utils.offLineStore.set("theme_color", theme_color, false);
						var token = data.token || "";
						g.login_token = token;
						Utils.offLineStore.set("token",token,false);
						location.href="../html/index.html";
					}
				}
				else{
					var msg = data.message || "登录失败";
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