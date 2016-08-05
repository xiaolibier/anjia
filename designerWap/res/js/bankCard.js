/**
 * file:绑定银行卡
 * author:chenxy
*/

//页面初始化
$(function(){
	var g = {};
	g.phone = "";
	g.imgCodeId = "";
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.httpTip = new Utils.httpTip({});

	g.bindBankCardId = "";
	g.bindCondi = {};
	g.codelist = [];
	g.bbcId = "";
	//获取图形验证码
	/* sendGetImgCodeHttp(); 11-16*/

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		sendGetIndexMessage();
		sendGetBankListHttp();
		sendGetBindBankCardId();
		
	}

	$("#getcodebtn").bind("click",getValidCode);
	$("#bindcardbtn").bind("click",bindUserCardBtnUp);
	$("#change_bank,.messa .text.noCard").bind("click",change_bank_func);
	$(".a_content .common_abtn.cancel").bind("click",function(){$(".sbox_show").fadeOut();});

	function change_bank_func(){
		$(".sbox_show").fadeIn();
	}
	
	/* 获取绑定的银行卡 */
	function sendGetBindBankCardId(){
		var url = Base.serverUrl + "bankCard/findBankCardByDesigner";
		var condi = {};
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
					var d = data.obj || "";
					if(d == ""){//没有绑卡
						$("#addBindCard").html('').addClass('noCard');
						$("#change_bank").html('');
					}else{
						var html = "";
						html+= '<span class="size1">'+(d.bankTypeDesc || "" )+'</span>';
						html+= '<span class="size2">'+(d.bankCard || "" )+'</span><br>';
						html+= '<span class="size3">（'+(d.username || "" )+'）</span>';
						$("#change_bank").html('修改信息');
						$("#addBindCard").html(html).removeClass('noCard');
						$("#inputphone").val(d.phone || "");
						$("#bankName").val(d.bankName || "");
						$("#bankCode").val(d.bankType || "");
						$("#username").val(d.username || "");
						$("#idcardno").val(d.idcard || "");
						$("#cardno").val(d.bankCard || "");
						$("#bindcardbtn").attr('info','addBtn');
						g.bbcId = d.bbcId || "";
					}
				}
				else{
					var msg = data.message || "获取银行卡失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}


	function sendGetIndexMessage(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "user/findById";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var d = data.obj || [];
					var code = d.code || "";
					var html = [];
					$("#name").html(d.name || "");
					$("#phone").html(d.phone || "");
					$(".set").bind('click',function(){location.href="../html/set.html?Y="+code;});
					g.phone = d.phone || "";
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

	//获取银行信息
	function sendGetBankListHttp(){
		var url = Base.serverUrl + "common/findBanks";
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
					changeBankSelectHtml(data);
				}
				else{
					var msg = data.message || "获取银行代码失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}

	function changeBankSelectHtml(obj){
		var data = obj.list || {};
		var option = [];
		option.push('<option value="" >请选择发卡银行</option>');
		for(var i = 0,len = data.length;i<len;i++){
			var d = data[i];
			var code = d.code || "";
			var name = d.name || "";
			option.push('<option value="' + code + '">' + name + '</option>');
		}
		$("#bankCode").html(option.join(''));
	}


	//获取绑定验证码
	function getValidCode(){
		var p = $("#inputphone").val() || "";
		var bankCode = $("#bankCode").val() || "";
		var username = $("#username").val() || "";
		var idcardno = $("#idcardno").val() || "";
		var cardno = $("#cardno").val() || "";
		var phone = $("#inputphone").val() || "";
		var bankName = $("#bankName").val() || "";
		if(bankCode == ""){
			alert("请选择发卡银行");
			return;
		}
		if(bankName == ""){
			alert("请输入开户行信息");
			return;
		}
		if(!sendValidNoEmpty(username,$("#username"))){
			alert("请输入客户姓名");return;
		}
		if(!sendValidNoEmpty(idcardno,$("#idcardno"))){
			alert("请输入身份证号");return;
		}
		if(!sendValidNoEmpty(cardno,$("#cardno"))){
			alert("请输入银行卡号");return;
		}
		if(!sendValidNoEmpty(phone,$("#phone"))){
			alert("请输入手机号码");return;
		}
		if(g.sendCode){
			return;
		}

		var condi = {};
		condi.login_token = g.login_token;
		condi.bankType = bankCode
		condi.username = username;
		condi.bankCard = cardno;
		condi.idcard = idcardno;
		condi.phone = phone;
		condi.bankName = bankName;
		g.bindCondi = condi;
		sendInvokeBindBanCardHttp(condi);
	}

	function sendInvokeBindBanCardHttp(condi){
		var url = Base.serverUrl + "message/sendValidateCodeMessage";
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
					alert("验证码已发送,请注意查收");
					g.sendCode = true;
					$("#getcodebtn").val("60秒后重新发送");
					setTimeout(function(){
						resetGetValidCode();
					},1000);
				}
				else{
					var msg = data.message || "获取验证码失败";
					alert(msg);
					
					//重新请求图形验证码
					/* sendGetImgCodeHttp(); 11-16*/
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
			/* sendGetImgCodeHttp(); 11-16*/
		}
	}


	function bindUserCardBtnUp(){
		var validate_code = $("#validcode").val() || "";
		if(validate_code == ""){
			alert("请输入短信验证码");
			return false;
		}
		var condi = g.bindCondi;
		
		sendConfirmBindBankHttp(condi);
	}

	//确认绑定银行卡
	function sendConfirmBindBankHttp(condi){
		var condi = condi || {};
		var bankCode = $("#bankCode").val() || "";
		var username = $("#username").val() || "";
		var idcardno = $("#idcardno").val() || "";
		var cardno = $("#cardno").val() || "";
		var phone = $("#inputphone").val() || "";
		var bankName = $("#bankName").val() || "";
		condi.validateCode = $("#validcode").val() || "";
		condi.login_token = g.login_token;
		condi.bankType = bankCode
		condi.username = username;
		condi.bankCard = cardno;
		condi.idcard = idcardno;
		condi.phone = phone;
		condi.bankName = bankName;
		var url = Base.serverUrl + "bankCard/addBankCard";
		if($("#bindcardbtn").attr('info') == 'addBtn'){
			url = Base.serverUrl + "bankCard/updateBankCard";
			condi.bbcId = g.bbcId || '';
		}
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
				
					//绑定成功
					alert('绑定成功！');
					$(".sbox_show").fadeOut();
					
				}
				else{
					var msg = data.message || "银行卡绑定失败";
					alert(msg);
					$("#validcode").val("");
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
		var reg = /^1[3,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("手机号输入错误");
				$("#inputphone").focus();
			}
		}
	}

	//验证密码6-16
	function validPwd(){
		var pwd = $("#inputpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("密码输入错误:请输入字符6-16位");
			$("#inputpwd").focus();
		}
	}

	function validCPwd(){
		var pwd = $("#inputcpwd").val() || "";
		if((pwd.length < 6 || pwd.length > 16) && pwd !== ""){
			alert("确认密码输入错误:请输入字符6-16位");
			$("#inputcpwd").focus();
		}
		else{
			var pwd1 = $("#inputpwd").val() || "";
			if(pwd !== pwd1){
				alert("两次密码输入不一致.");
				//$("#inputcpwd").focus();
			}
		}
	}



	//请求验证码
	function sendGetCodeHttp(imgCode){
		var url = Base.serverUrl + "message/sendValidateCodeMessage";
		var condi = {};
		condi.phone = g.phone;

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
					/* sendGetImgCodeHttp(); 11-16*/
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	

	function validNoEmpty(evt){
		var t = $(this).val() || "";
		var id = this.id || "";
		var next = $(this).next();
		if(t !== ""){
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>不能为空');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
	}

	function validIsNumber(evt){
		var t = $(this).val() || "";
		var reg = /^\d+$/g;
		var next = $(this).next();
		if(reg.test(t)){
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>只能填写数字');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
	}

	function validIsPhone(evt){
		var t = $(this).val() || "";
		var reg = /^1[3,5,7,8]\d{9}$/;
		var next = $(this).next();
		if(t !== ""){
			if(reg.test(t)){
				$(next).html('<i class="common-ico validate-ico"></i>填写正确');
				$(next).removeClass("validate-error");
				$(next).addClass("validate-success");
				$(next).show();
			}
			else{
				$(next).html('<i class="common-ico validate-ico"></i>手机号码输入错误');
				$(next).removeClass("validate-success");
				$(next).addClass("validate-error");
				$(next).show();
			}
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>不能为空');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
	}

	function validIsIdentity(evt){
		var txt = $(this).val() || "";
		var valid = new ValidCard({txt:txt});
		var b = valid.valid();
		var next = $(this).next();
		if(b){
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>身份证号码输入错误');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
	}

	function sendValidNoEmpty(txt,dom){
		var b = false;
		var next = dom.next();
		if(txt !== ""){
			b = true;
			/* $(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show(); */
		}
		else{
			
			/* $(next).html('<i class="common-ico validate-ico"></i>不能为空');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show(); */
		}
		return b;
	}
	function sendValidIsNumber(txt,dom){
		var b = false;
		var reg = /^\d+$/g;
		var next = dom.next();
		if(reg.test(txt)){
			b = true;
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>只能填写数字');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
		return b;
	}
	function sendValidIsPhone(txt,dom){
		var b = false;
		var reg = /^1[3,5,7,8]\d{9}$/;
		var next = dom.next();
		if(reg.test(txt)){
			b = true;
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>手机号码输入错误');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
		return b;
	}
	function sendValidIsIdentity(txt,dom){
		var valid = new ValidCard({txt:txt});
		var b = valid.valid();
		var next = dom.next();
		if(b){
			$(next).html('<i class="common-ico validate-ico"></i>填写正确');
			$(next).removeClass("validate-error");
			$(next).addClass("validate-success");
			$(next).show();
		}
		else{
			$(next).html('<i class="common-ico validate-ico"></i>身份证号码输入错误');
			$(next).removeClass("validate-success");
			$(next).addClass("validate-error");
			$(next).show();
		}
		return b;
	}


});