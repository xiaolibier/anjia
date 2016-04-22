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
	g.couponId = Utils.getQueryString("id") || "";
	g.BK = Utils.getQueryString("BK") || "";
	g.repaymentRecordId = Utils.getQueryString("recordId") || "";
	g.price = Utils.getQueryString("p") - 0 || 0;	
	g.breakUp = false;
	g.codeImg = $("#imgcodebtn")[0];
	g.guid = Utils.getGuid();
	g.customerId = "";
	g.bindBankCardId = "";
	g.playCondi = {};
	g.payId = "";
	g.paidMoney = 0;
	g.codelist = [];
	g.nowPayMoney = "";

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("/anjia/login.html");
	}
	else{
		bindClick();
		getUserInfo();
		changeOrderInfoHtml();
	}

	$("#choise_btn").bind("click",nextBtnFunc);

	/* 选择支付方式 */
	function bindClick(){
		$(".card_pay_box.item-box ul.ul li").each(function(n){
			$(this).click(function(){
				$(this).addClass("active").siblings("li").removeClass("active");
				if(n == 0){
					$("#choise_V1").attr("value","1");
				}else if(n == 1){
					$("#choise_V1").attr("value","2");
				}
			});
		});
	}
	/* 点击下一步 */
	
	function nextBtnFunc(){
		var C = $("#choise_V1").attr("value") || "";
		if(C == "1"){
			if(g.BK == "1"){
				location.href = "/anjia/card-pay2.html?recordId=" + g.repaymentRecordId + "&p=" + g.price+"&id=" + g.couponId;
			}else if(g.BK == "2"){
				location.href = "/anjia/bind-card.html?recordId=" + g.repaymentRecordId + "&p=" + g.price+"&id=" + g.couponId;
			}
		}else if(C == "2"){
			ebankUrl();
		}
		
		
	}
	/* 请求网银支付url */
	function ebankUrl(){
		var url = Base.serverUrl + "ebank/pay";
		var condi = {};
		condi.customerId = g.customerId;
		condi.repaymentRecordId = g.repaymentRecordId;
		condi.couponId = g.couponId;
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
					var url = data.obj || "";
					location.href = url;
				}
				else{
					var msg = data.message || "跳转失败";
					Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	

	//获取个人资料
	function getUserInfo(){
		var info = Utils.offLineStore.get("userinfo",false) || "";
		if(info !== ""){
			var obj = JSON.parse(info) || {};
			g.customerId = obj.customerId || "";
			g.userPhone = obj.phoneNumber || "";
		}
	}
	
	function changeOrderInfoHtml(){
		var p = g.price.toFixed(2);
		var id = g.repaymentRecordId;
		var html = '<label style="margin-right:100px;">应付金额：<em class="highlight-red">' + p + '</em> 元</label>分期订单编号：<em class="highlight">' + id + '</em>';
		$("#orderinfo").html(html);
	}

});