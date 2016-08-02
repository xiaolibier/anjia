/**
 * author:chenxy
*/
//页面初始化
$(function(){
	
	var g = {};
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.status = Utils.getQueryString("status") || "";//
	g.httpTip = new Utils.httpTip({});
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		getStatic();
		
	}

	function getStatic(){
		var s = g.status || "";
		switch(s){
			case '103402': $(".left_line1").addClass('active'); break;
			case '10050301': $(".left_line2").addClass('active').find('.text').html('风控初审中');   break;
			case '10050302': $(".left_line2").addClass('active').find('.text').html('风控复审中'); break;
			case '10050303': $(".left_line2").addClass('active').find('.text').html('风控终审中'); break;
			case '100502': $(".left_line2").addClass('active').find('.text').html('商家审核中'); break;
			case '100515': $(".left_line3").addClass('active').find('.text').html('待确认'); break;
			case '100505': $(".left_line3").addClass('active').find('.text').html('待缴费'); break;
			case '100506': $(".left_line4").addClass('active').find('.text').html('待放款'); break;
			case '103404': $(".left_line5").addClass('active').find('.text').html('待回收合同'); break;
			case '103405': $(".left_line5").addClass('active').find('.text').html('完成'); break;
			default:break;
		}
	}


});

