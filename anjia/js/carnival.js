
$(document).ready(function(){
	/*  */	
		
	var g = {};
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	g.customerCollectId = Utils.getQueryString("cus") || "";//获取用户标识
	
	$("#submit_a_btn").bind("click",submit_form);
	$("#chakan_inf").bind("click",chakan_inf_func);
	$(".c_childrenDay_ico .common_btn.btn2").bind("click",url_go);
	
	erWeiMa_func();
	/* 动态生成二维码 */
	function erWeiMa_func(){
		if(g.customerCollectId != ""){
			$("#img_span").empty();
			var str = 'http://m.yanzianjia.com/weixin/authorize?cus='+g.customerCollectId+"";
			$("#img_span").qrcode({
				render: "table",
				width:256,
				height:256,
				text: str
			});
		}
	}
	function toUtf8(str) {   
		var out, i, len, c;   
		out = "";   
		len = str.length;   
		for(i = 0; i < len; i++) {   
			c = str.charCodeAt(i);   
			if ((c >= 0x0001) && (c <= 0x007F)) {   
				out += str.charAt(i);   
			} else if (c > 0x07FF) {   
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
				out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
				out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
			} else {   
				out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
				out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
			}   
		}   
		return out;   
	}  
	/* 跳转页面 */
	function url_go(){
		location.href='carnival.html';
	}
	/* 查看详情 */
	function chakan_inf_func(){
		alert('6.18活动期间，预约报名参加活动，并支付1元订金，最终签约生活家装饰任意家装产品并选择燕子安家分期支付，每满5万元，即可享受5千元免息。如：申请分期10万元，36期，其中1万元为免息金额。最终只需支付(10万-1万)*16%=14400的服务费。相比起原先10万*16%=16000的服务费，直接优惠了1600元！');
	}
	function submit_form(){
		var index = $(this).attr('index') || "";
		if(index == 1){
			g.channel = '1';
			g.activity = '618'
		}else if(index == 2){
			g.channel = '2';
			g.activity = '618'
		}
		var condi = {};
		condi.userCity = $("#userCity").val() || "";
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		condi.designName = $("#designName").val() || "";
		condi.designPhone = $("#designPhone").val() || "";
		if(condi.userName == ""){alert("姓名不能为空","提示");return;}
		if(!validPhone()){return;}		
		condi.operate = escape(g.operate) || "";
		condi.channel = escape(g.channel) || "";
		condi.activity = escape(g.activity) || "";
		var url = Base.serverUrl + "user/insertCustomerCollect";
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				global:false,
				success: function(data){
					var success = data.success || "";
					if(success){
						/* alert('恭喜，预约成功！');
						$("#userName").val('');
						$("#userPhone").val(''); */
						var d = data.obj || {};
						var c = d.customerCollect || {};
						var customerCollectId = c.id || "";
						location.href="carnivalOK.html?cus="+customerCollectId;
					}
					else{
						var msg = data.message || "预约失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			})
		
		
	}
	
		//验证手机号
	function validPhone(){
		var phone = $("#userPhone").val() || "";
		var reg = /^1[3,5,7,8]\d{9}$/g;
		if(phone !== ""){
			if(!reg.test(phone)){
				alert("手机号输入错误");
				return false;
			}else{
				return true;
			}
		}else{
			alert("请输入电话");
		}
	}
	
	window.validPhone = validPhone;
/*  */
})


