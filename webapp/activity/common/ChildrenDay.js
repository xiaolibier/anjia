﻿
$(document).ready(function(){
	/*  */	
	var myCity = new BMap.LocalCity();
		myCity.get(myFun);
		
	var g = {};
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	
	$("#submit_a_btn").bind("click",submit_form);
	$("#submit_a_btn2").bind("click",submit_form2);
	$("#backTop").bind("click",back_top);
	$("#text_link").bind("click",tel_link);
	
	/* 拨打电话 */
	function tel_link(){
		location.href = "tel://4006616896";
	}
	/* 返回顶部 */
	function back_top(){
		$('html,body').animate({scrollTop:0},900);
	}
	//百度定位
	function myFun(result){
		var cityName = result.name;
		g.userCity = cityName;
		Utils.offLineStore.set("userCity",cityName,false);
		sendGetUserInfoDicHttp();
	}
	/* 太原活动页面 */
	function submit_form2(){
		var condi = {};
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
						location.href="ok.html";
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
	
	function submit_form(){
		var condi = {};
		condi.userCity = $("#userCity").val() || "";
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
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
						alert('恭喜，预约成功！');
						$("#userName").val('');
						$("#userPhone").val('');
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
	
	//获取城市列表
	function sendGetUserInfoDicHttp(){
		var url = Base.serverUrl + "city/getCitys";
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
					changeSelectHtml(data);
				}
				else{
					var msg = data.message || "获取城市列表失败";
					alert(msg);
				}				
			},
			error:function(data){
			}
		});
	}

	function changeSelectHtml(obj){
			var data = obj.list || {};
			var option = [];
			option.push('<option value="">请选择</option>');
			var city = g.userCity.split("市")[0] || "";
			for(var i=0;i<data.length;i++){
				var name = data[i].name;
				var id = data[i].id || "";
					if(city == name){
						option.push('<option selected="selected" value="' + id + '">' + name + '</option>');
					}else{
						option.push('<option value="' + id + '">' + name + '</option>');
					}	
			}
			$("#userCity").html(option.join(''));
	}
	
	window.submit_form = submit_form;
	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
	window.validPhone = validPhone;
/*  */
})


