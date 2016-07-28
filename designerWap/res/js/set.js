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
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		ready_();
		sendGetIndexMessage();
	}

	$("#bankCard").bind('click',function(){location.href="../html/bankCard.html"});
	$("#myPrivilege").bind('click',function(){location.href="../html/myPrivilege.html"});
	$(".changeInfo").bind('click',function(){location.href="../html/changeInfo.html"});
	function ready_(){
		$("#code").html(g.code+'（同事注册时填写）');
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

});

