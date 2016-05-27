
$(document).ready(function(){
	/*  */	
	var myCity = new BMap.LocalCity();
		myCity.get(myFun);
		
	var g = {};
	g.page_now = Utils.offLineStore.get("nowPage",false) || "1";
	g.userCity = Utils.offLineStore.get("userCity",false) || "请选择";
	g.operate = Utils.getQueryString("O") || "";//获取运营人员
	g.channel = Utils.getQueryString("C") || "";//获取渠道
	g.activity = Utils.getQueryString("A") || "";//获取活动标识
	g.up = Utils.getQueryString("up") || "";//获取上一级电话
	
	page_now();
	window_scroll();
	$("#submit_a_btn").bind("click",submit_form);
	$("#common_a_btn_regist").bind("click",return_regist);
	$("#common_a_btn_tell").bind("click",return_tel);
	$(".back_up_btn").bind("click",function(){
		$("html, body").animate({
		  scrollTop: "0px"
		}, {
		  duration: 300,
		  easing: "swing"
		});	
	});
	
	/* 滑动一屏 */
	function window_scroll(){	
		back_top();
		$('.body_list').each(function(evt){
			var n1 = evt + 2,n2 = evt;
			$(this).touchwipe({
	 			min_move_y: 30, //纵向灵敏度
				wipeDown: function() { 
					$("html, body").animate({
					  scrollTop: $('.page'+n2).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				}, 
				wipeUp: function() { 
					$("html, body").animate({
					  scrollTop: $('.page'+n1).offset().top + "px"
					}, {
					  duration: 300,
					  easing: "swing"
					});	
					
				},
	 			preventDefaultEvents: true //阻止默认事件
	 		});
		});
	}
	/* 判断显示返回顶部 */
	function back_top(){
		$(window).scroll(function(){
			var _top = $(document).scrollTop() || 0;
			var s = $(window).height();
			if(_top >= s){
				$('.back_up_btn').fadeIn(0);
			}else{
				$('.back_up_btn').fadeOut(0);
			}
		});
	}
	
	/* 页面判断 */
	function page_now(){ 
		var n = g.page_now || "";
		if(n == "2"){
			$('.body_list_page1').fadeOut(0);
			$('.body_list_page2').fadeIn(0);
		}
		/* 页面定义高度 */
		var _height = $(window).height();
		$('.body_list,.body_list2').height(_height);
		
	}
	/* 跳转 */
	function return_regist(){
		alert('请点击微信右上角的发送给朋友或者分享朋友圈');
	}
	function return_tel(){
		location.href = "tel://4006616896";
	}
	
	//if(!isWeiXin()){alert("请使用微信");}
	//百度定位
	function myFun(result){
		var cityName = result.name;
		g.userCity = cityName;
		Utils.offLineStore.set("userCity",cityName,false);
		sendGetUserInfoDicHttp();
	}
	
	function submit_form(){
		var condi = {};
		condi.userCity = $("#userCity").val() || "";
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		if(condi.userName == ""){alert("姓名不能为空","提示");return;}
		if(!validPhone()){return;}		
		condi.designName = $("#designName").val() || "";
		condi.designPhone = $("#designPhone").val() || "";
		condi.operate = escape(g.operate) || "";
		condi.channel = escape(g.channel) || "";
		condi.activity = escape(g.activity) || "";
		var up = g.up.substring(0,5)+g.up.substring(6,g.up.length)+"";
		condi.sharedPhone = up;
		var url = Base.serverUrl + "user/insertCustomerCollect";
		//if(!isWeiXin()){alert("请使用微信");return;}
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
						Utils.offLineStore.set("nowPage",'2',false);
						var nub = Math.floor(Math.random()*10) || '5';
						var phone_nub = condi.userPhone.substring(0,5)+nub+condi.userPhone.substring(5,condi.userPhone.length);
						location.href="activity.html?O="+g.operate+"&C="+g.channel+"&A="+g.activity+"&up="+phone_nub;
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


