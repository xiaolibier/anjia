/**
 * author:chenxy
*/

//页面初始化
$(function(){
	var g = {};
	g.phone = "";
	g.imgCodeId = "";
	g.sendCode = false;
	g.sendTime = 60;

	//g.orderId = Utils.getQueryString("orderId") || "";
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.phoneNumber = Utils.offLineStore.get("user_phoneNumber",false) || "";
	g.usersId = Utils.offLineStore.get("user_usersId",false) || "";
	g.usersName = Utils.offLineStore.get("user_usersName",false) || "";
	g.customerPhone = Utils.getQueryString("customerPhone") || "";
	g.httpTip = new Utils.httpTip({});

	g.codeImg = $("#imgcodebtn")[0];
	g.guid = Utils.getGuid();

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{

	}

	$("#addform").bind("submit",validForm);



	$('#backid').click(function(){
		window.location.href="feedback.html";
	});

	function validForm(){
		if(!validNoEmpty("content")){
			layer.msg('回复内容不能为空');
			return false;
		}
		$('#customerPhone').val(g.customerPhone);
		
		var url = Base.serverUrl + "pc/communication/sendFeedback";
		$("#addform").attr("action",url);
		return true;
	}

	function validNoEmpty(id){
		var b = false;
		var txt = $("#" + id).val() || "";
		if(txt !== ""){
			b = true;
		}
		return b;
	}



});