var _phone = "";
(function($){
	var g = {};
	g.login_token = Utils.offLineStore.get("token",false) || "";
	timeout_func();
	
	$("#back_btn").bind("click",backHistory);
	$("#out").bind("click",function(){
		location.href="../html/login.html";
	});
		/* 公共头部返回 */
	function backHistory(){
		history.go(-1);
	}
	sendGetIndexMessage();
	function sendGetIndexMessage(){
		if(!$('.user_info')){return false;}
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
					_phone = d.phone || "";
					var html = [];
					$("#name").html(d.name || "");
					$("#phone").html(d.phone || "");
					$("#canDrawMoney").html("￥"+(d.canDrawMoney || 0));
					$("#expectRevenue").html("￥"+(d.expectRevenue || 0));
					$("#totalRevenue").html("￥"+(d.totalRevenue || 0));
					$("#privilegeMoney").html(d.privilegeMoney || 0);
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
	/* 页面超时 */
	function timeout_func(){
		var _time;
		$("body").click(function () {
			clearTimeout(_time);
			if (Utils.offLineStore.get("token", false) != "") {
				_time = setTimeout(function () {
					Utils.offLineStore.remove("token", false);
					c_alert('页面超时，请重新登录！',function(){location.reload();},function(){});
				}, 10800000);//超时3个小时10800000
			}
		});
	}
	
	
	/* 弹窗 */
	function _alert(showMsg,sureClickCallBack,cancelClickCallBack){
		if(typeof showMsg === 'undefined' || typeof sureClickCallBack !== 'function' || typeof cancelClickCallBack !== 'function') return;
		layer.open({
			content: showMsg,
			btn: ['确定','取消'],
			yes: function(index){
				sureClickCallBack();
				layer.close(index);
			},
			no: function(index){
				cancelClickCallBack();
				layer.close(index);
			}
		});
	}
	
	function c_alert(showMsg,sureClickCallBack,cancelClickCallBack){
		if(typeof showMsg === 'undefined' || typeof sureClickCallBack !== 'function' || typeof cancelClickCallBack !== 'function') return;
		layer.open({
			content: showMsg,
			btn: ['确定'],
			yes: function(index){
				sureClickCallBack();
				layer.close(index);
			},
			no: function(index){
				cancelClickCallBack();
				layer.close(index);
			}
		});
	}

	window._alert =_alert;
	window.c_alert =c_alert;
})(jQuery);
