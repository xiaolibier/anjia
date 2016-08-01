/**
 * file:登录
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
		//getStatic();
		sendGetUsable();
		sendGetActivity();
		sendGetBackTime();
		activitys();
	}

	
	$(".sbox_tips").bind('click',function(){$('.sbox_tips').fadeOut();});
	$("#slideTo").bind("click",slideTo_func);
	$("#toShare").bind("click",toShare_func);

	/* 获取活动banner图 及内容等 */
	function activitys(){
		var url = Base.serverUrl + "bannerImage/findBannerImageByKey";
		var condi = {};
		//condi.login_token = g.login_token;
		condi.navigationKey = 'DESIGNER_SHARE';
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.list || [];
					var data = obj || {};
					var option = [];
					for(var i = 0,len = data.length; i < len; i++){
						var d = data[i];
						var bmUrl = d.bmUrl || "";
						var bmTitle = d.bmTitle || "";
						var bmTextDesc = d.bmTextDesc || "";
						var bmClickUrl = d.bmClickUrl || "";
						option.push('<div class="logo">');
						option.push('<img class="logo_img" src="'+bmUrl+'"/>');
						option.push('</div>');
						option.push('<div class="body_message">');
						option.push('<h4 class="title">'+bmTitle+'：</h4>');
						option.push('<p class="text">'+bmTextDesc+'</p>');
						option.push('<div class="div"><a aUrl="'+bmClickUrl+'" aTitle="'+bmTitle+'" imgUrl="'+bmUrl+'" class="a_btn show_tip">分享活动赚现金</a></div>');
						option.push('</div>');
					}
					$("#activity_list").html(option.join(''));
					$(".a_btn.show_tip").bind('click',share_btn_f);
				}
				else{
					var msg = data.message || "";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}
	
	/* 配置微信参数 */
	function share_weixin(aUrl,aTitle,imgUrl){
		var condi = {};
		condi.url = window.location.href || '';
		var url = Base.serverUrl + "weixin/getJsSdkConfig";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			global:false,
			success: function(data){	
				var d = data || {};
				var appId = d.appId || "";
				var signature = d.signature || "";
				var nonceStr = d.nonceStr || "";
				var timestamp = d.timestamp || "";
				
				wx.config({
					debug: '', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: appId, // 必填，公众号的唯一标识
					timestamp:timestamp, // 必填，生成签名的时间戳
					nonceStr: nonceStr, // 必填，生成签名的随机串
					signature: signature,// 必填，签名，见附录1
					jsApiList: ['onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				wx.ready(function(){
					wx.onMenuShareTimeline({
						title: aTitle, // 分享标题
						link: aUrl, // 分享链接
						imgUrl: imgUrl, // 分享图标
						success: function () { 
							// 用户确认分享后执行的回调函数
							alert('分享成功！');
							Share_back();
						},
						cancel: function () { 
						alert('分享失败！');
							// 用户取消分享后执行的回调函数
						}
					});
					// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				});
			},
			error:function(data){
			}
		});
		
	}
	
	/* 判断是不是微信浏览器 */
	function isWeiXin(){
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){
			return true;
		}else{
			return false;
		}
	}	
	/* 活动分享点击 */
	function share_btn_f(){
		var aUrl = $(this).attr('aUrl') || "";
		var aTitle = $(this).attr('aTitle') || "";
		var imgUrl = $(this).attr('imgUrl') || "";
		if(!isWeiXin()){
			$('.sbox_tips').fadeIn();
		}else{
			$('.sbox_tips').fadeIn();
			share_weixin(aUrl,aTitle,imgUrl);
		}
	}
	
	/* 微信分享成功后 */
	function Share_back(){
		alert('分享回调！');
		var url = Base.serverUrl + "activity/shareActivityCallBack";
		var condi = {};
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					alert('恭喜您，分享成功！新特权已经发送到您的账户');
				}
				else{
					var msg = data.message || "";
					alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}
	
	/* 提交 */
	function toShare_func(){
		var url = Base.serverUrl + "customerCollect/helpApply";
		var condi = {};
		condi.login_token = g.login_token;
		condi.userName = $("#userName").val() || "";
		condi.userPhone = $("#userPhone").val() || "";
		condi.activity = $("#activity").val() || "";
		condi.designerPrivilegeId = $("#designerPrivilegeId").val() || "";
		condi.visitTime = $("#visitTime").val() || "";
		
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					alert('恭喜您，提交成功！请耐心等待,我们会在第一时间与您的客户取得联系.');
					$("#userName,#userPhone,#activity,#designerPrivilegeId,#visitTime").val('');
				}
				else{
					var msg = data.message || "";
					alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}
	function slideTo_func(){
		$(".a_bottom .a_content").slideToggle(300);
		$(".a_bottom .a_text .ico").toggleClass('up');
		setTimeout(function(){$(".bg").height($(".a_bottom").height());},300);
	}
	/* 获取活动列表 */
	function sendGetActivity(){
		var url = Base.serverUrl + "activity/findActivitys";
		var condi = {};
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.list || [];
					var data = obj || {};
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var i = 0,len = data.length; i < len; i++){
						var d = data[i];
						var id = d.code || "";
						//var cid = d.companyId || "";
						var name = d.name || "";
						option.push('<option value="' + id + '">' + name + '</option>');
					}
					$("#activity").html(option.join(''));
				}
				else{
					var msg = data.message || "";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}
	/* 获取回访时间 */
	function sendGetBackTime(){
		var url = Base.serverUrl + "dic/findByParents";
		var condi = {};
		condi.parents = 1035;
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.obj || [];
					var parents = ["1035"];
					var ids = ["status"];
					for(var i = 0,len = parents.length; i < len; i++){
						var data = obj[parents[i]] || {};
						var option = [];
						option.push('<option value="">请选择</option>');
						for(var k in data){
							var id = k || "";
							var name = data[k] || "";
							option.push('<option value="' + id + '">' + name + '</option>');
						}
						$("#visitTime").html(option.join(''));
					}
				}
				else{
					var msg = data.message || "";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}
/* 获取特权列表 */
	function sendGetUsable(){
		var url = Base.serverUrl + "privilege/findUsableByDesigner";
		var condi = {};
		condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.list || [];
					var data = obj || {};
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var i = 0,len = data.length; i < len; i++){
						var d = data[i];
						var id = d.id || "";
						var useLeastMoney = d.useLeastMoney || 0;
						var money = d.money || "";
						option.push('<option value="' + id + '">' + money + '（满'+useLeastMoney+'可用）</option>');
					}
					$("#designerPrivilegeId").html(option.join(''));
				}
				else{
					var msg = data.message || "";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function getStatic(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "customerCollect/findActivitys";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var data = data.list;
					var html='';
					for(var i=0,len=data.length;i<len;i++){
						var d = data[i] || {};
						var statusDesc = d.statusDesc || "";
						var packageMoney = d.packageMoney || 0;
						var fenQiTimes = d.fenQiTimes || 0;
						var userPhone = d.userPhone || "";
						var contractMoney = d.contractMoney || 0;
						var userName = d.userName || "";
						var status = d.status || "";
						var date = d.date || "";
						var ti = fenQiTimes <= 12 ? 0.6 : 0.4;
						var sts = status == '103402' ? 'before' : 'after';
						html += '<table class="acc_div1">';
						html += '<tr>';
						html += '<td class="acc_left">'+date+'<br>'+statusDesc+'</td>';
						html += '<td class="acc_right">';
						html += '<span class="lable">'+userName+'</span>1380001152<br>';
						html += '<span class="lable">合同金额：'+contractMoney+'</span>申请分期：'+packageMoney+'<br>';
						html += '<span class="lable">分期期数：'+fenQiTimes+'期</span>提成比例：'+ti+'%';
						html += '</td>';
						html += '</tr>';
						html += '</table>';
					}
					$('#acc_body_list').html(html);
					
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