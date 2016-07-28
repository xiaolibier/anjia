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

	$(".getMoney").bind('click',function(){location.href="../html/getMoney.html"});
	$("#activityShare").bind('click',function(){location.href="../html/activityShare.html"});
	$("#earnings").bind('click',function(){location.href="../html/earnings.html"});
	$("#accumulatedEarnings").bind('click',function(){location.href="../html/accumulatedEarnings.html"});

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
					$("#canDrawMoney").html("￥"+(d.canDrawMoney || 0));
					$("#expectRevenue").html("￥"+(d.expectRevenue || 0));
					$("#totalRevenue").html("￥"+(d.totalRevenue || 0));
					$("#privilegeMoney").html(d.privilegeMoney || 0);
					var width = (d.privilegeMoney || 0)/100000*100 ;
					$(".process_div .pro_s").css('width',width+"%");
					$(".set").bind('click',function(){location.href="../html/set.html?Y="+code});
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

