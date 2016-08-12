/**
 * file:注册
 * author:chenxy
*/

//页面初始化
$(function(){
	var g = {};
	g.phone = "";
	g.imgCodeId = "";
	g.sendCode = false;
	g.sendTime = 60;
	g.httpTip = new Utils.httpTip({});	
	g.codeImg = $("#imgcodebtn")[0];
	g.guid = Utils.getGuid();
	/* 元宵活动标记 */
	g.customerId = "";
	g.dengmi = Utils.offLineStore.get("dengmi",false) || "";
	g.openid = Utils.offLineStore.get("openid",false) || "";
	g.coupons_id = Utils.offLineStore.get("coupons_id",false) || "";
	g.company = Utils.offLineStore.get("company",false) || "";
	g.code = Utils.getQueryString("de") || "";
	
	//获取图形验证码
	//sendGetImgCodeHttp();
	sendGetCompanyList();
	//g.httpTip.show();
	//$("#inputphone").bind("blur",validPhone);
	//$("#inputpwd").bind("blur",validPwd);
	//$("#inputcpwd").bind("blur",validCPwd);
	$("#getcodebtn").bind("click",getValidCode);
	$("#regbtn").bind("click",regUser);

	
	function sendGetCompanyList(){
		//自动填写邀请码
		if(g.code != ""){
			$('#inviterCode').val(g.code);
		}
		var url = Base.serverUrl + "common/findSubsidiarys";
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
					var obj = data.list || [];
					var data = obj || {};
					var option = [];
					for(var i = 0,len = data.length; i < len; i++){
						var d = data[i];
						var id = d.id || "";
						//var cid = d.companyId || "";
						var name = d.name || "";
						option.push('<option value="' + id + '">' + name + '</option>');
					}
					$("#company").html(option.join(''));
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

	//验证手机号
	function validPhone(){
		var phone = $("#inputphone").val() || "";
		var reg = /^1[3,4,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("手机号输入错误");
				//$("#inputphone").focus();
			}
		}
	}

	//验证密码6-16
	function validPwd(){
		var pwd = $("#inputpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("密码输入错误:请输入字符6-16位");
			//$("#inputpwd").focus();
		}
	}

	function validCPwd(){
		var pwd = $("#inputcpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("确认密码输入错误:请输入字符6-16位");
			//$("#inputcpwd").focus();
		}
		else{
			var pwd1 = $("#inputpwd").val() || "";
			if(pwd !== pwd1){
				alert("两次密码输入不一致.");
				//$("#inputcpwd").focus();
			}
		}
	}

	//获取验证码
	function getValidCode(evt){
		//var ele = evt.currentTarget;
		//$(ele).removeClass("curr");
		//if(!this.moved){}

		var p = $("#inputphone").val() || "";
		//var imgCode = $("#inputimgcode").val() || "";
		if(p !== ""){
			var reg = /^1[3,4,5,7,8]\d{9}$/g;
			if(reg.test(p)){
				g.phone = p;
				sendGetCodeHttp();
				/* if(imgCode !== ""){
					if(!g.sendCode){
						
					}
				}
				else{
					alert("请输入图形验证码");
					//$("#inputimgcode").focus();
				} */
			}
			else{
				alert("手机号输入错误");
				//$("#inputphone").focus();
			}
		}
		else{
			//$("#inputphone").focus();
			alert("请输入手机号！");
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
	function sendGetCodeHttp(){
		//{'phone_number':string,'validate_key':string,'validate_code':string}
		var url = Base.serverUrl + "message/sendValidateCodeMessage";
		var condi = {};
		condi.phone = $("#inputphone").val();
		/* condi.validate_key = g.guid; */
		/* condi.validate_code = imgCode; */

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
				/* console.log("sendGetCodeHttp",data); */
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


	//注册
	function regUser(evt){
		var phone = $("#inputphone").val() || "";
		var name = $("#name").val() || "";
		var subsidiaryId = $("#company").val() || "";
		var inviterCode = $("#inviterCode").val() || "";
		var reg = /^1[3,4,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(reg.test(phone)){
				var pwd1 = $("#inputpwd").val() || "";
				var pwd2 = $("#inputcpwd").val() || "";
				if(pwd1 !== ""){
					if(pwd2 !== ""){
						if(pwd1 === pwd2){
							/* if(inviterCode !== ""){ */
								var code = $("#inputcode").val() || "";
								if(code !== ""){
										var condi = {};
										condi.phone = phone;
										condi.password = pwd2;
										condi.validateCode = code;
										condi.name = name;
										condi.subsidiaryId = subsidiaryId;
										condi.inviterCode = inviterCode;
										sendRegHttp(condi);
									
								}
								else{
									alert("请输入验证码");
									
								}
							/* }
							else{
								alert("请输入邀请码");
								
							} */
							
						}
						else{
							alert("两次密码输入不一致");
							$("#inputcpwd").val("");
							
						}
					}
					else{
						alert("请输入确认密码");
						
					}
				}
				else{
					alert("请输入密码");
					
				}
			}
			else{
				alert("手机号输入错误");
				
			}
		}
		else{
			alert("请输入手机号");
			
		}
	}

	//注册
	function sendRegHttp(condi){
		var url = Base.serverUrl + "user/register";
		g.httpTip.show();
		$.ajax({
			url:url,
			type:"POST",
			data:condi,
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					alert('恭喜你！提交成功,请等候审核');
					location.href = "../html/login.html";
					/* var userInfo = data.obj || "";
					if(userInfo !== ""){
						g.customerId = userInfo.customerId || "";
						
						userInfo = JSON.stringify(userInfo);
						//保存用户数据
						Utils.offLineStore.set("userinfo",userInfo,false);
						var token = data.token || "";
						g.login_token = token;
						Utils.offLineStore.set("token",token,false);
						
					} */
				}
				else{
					var msg = data.message || "手机号注册失败";
					alert(msg);

					//重新请求图形验证码
					//sendGetImgCodeHttp();
					$("#inputcode").val("");
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}


});