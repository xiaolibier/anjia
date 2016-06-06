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
		sendGetIndexMessage();
	}

	function sendGetIndexMessage(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "md/order/findOrderStatusCount";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var list = data.obj || [];
					var html = [];
					for(var i = 0, len = list.length; i < len; i++){
						var n = i+1;
						var d = list[i] || {};
						var name = d.name || "";
						var count = d.count || 0;
						html.push('<a href="rca_'+n+'.html"><div class="common_list_div div'+n+'"><i class="i1"></i>风控初审<i class="i2"></i></div></a>');

					}
					$("#IndexMessage").html(html.join(''));
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

