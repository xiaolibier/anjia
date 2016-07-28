/**
 * author:chenxy
*/
//页面初始化
$(function(){
	
	var g = {};
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.httpTip = new Utils.httpTip({});
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		
		
	}

	$("#getMoney").bind('click',getMoney);

	function getMoney(){
		var money = $('#money').val() || 0;
		if(money <= 0){alert('提现金额需大于0');return false;}
		var condi = {};
		condi.login_token = g.login_token;
		condi.money = money;
		var url = Base.serverUrl + "draw/addDesignerDraw";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					alert('恭喜您，提现成功！,提现款项将在月底到账，请注意查收！');
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

