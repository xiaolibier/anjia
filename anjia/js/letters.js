/**
 * file:个人资料
 * author:chenxy
*/
//页面初始化
$(function(){
	var g = {};
	g.customerId = "";
	g.login_token = Utils.offLineStore.get("token",false) || "";
	//g.page = Utils.getQueryString("p") - 0;
	g.httpTip = new Utils.httpTip({});

	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 15;

	g.qorderstatus = "";
	g.orderInfo = {};
	g.uploadIndex = 0;
	g.orderStatus = Utils.getQueryString("ostatus") || "";

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../login/login.html");
	}
	else{
		sendGetLetters();
		sendGetNum();
	}
	
	$('#send_btn').bind('click',sendLettersText);
	
		/* 进入页面清零数字 */
	function sendGetNum(){
		var url = Base.serverUrl + "communication/openCommunication";
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

				}
				else{
					var msg = data.message || "获取信息失败";
					Utils.alert(msg);
				}

			},
			error:function(data){

			}
		});
	}

	
	/* 发送文本信息 */
	function sendLettersText(){
		var url = Base.serverUrl + "communication/sendText";
		var condi = {};
		condi.login_token = g.login_token;
		condi.content = $('#letter_text').val() || '';
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					sendGetLetters();
				}
				else{
					var msg = data.message || "获取信息失败";
					Utils.alert(msg);
				}

			},
			error:function(data){

			}
		});
	}
	
	/* 获取信息列表 */
	function sendGetLetters(){
		var url = Base.serverUrl + "communication/findCommunicationByCustomer";
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
					var d = data.list || [];
					var html = "";
					for(var i=0,len=d.length;i<len;i++){
						var s = d[i] || [];
						var direct = s.direct || "";
						var type = s.type || "";
						var picUrl = s.picUrl || "";
						var content = s.content || "";
						var createTime = s.createTime || "";
						var sUrl = s.url || "";
						var di = direct == '0' ? '' : 'answer';
						if(sUrl != ""){
							html += '<a href="'+(s.url || "")+'"><div class="letter_list '+di+'">';
						}else{
							html += '<div class="letter_list '+di+'">';
						}
						
						html += '<i class="letter_ico"></i>';
						html += '<div class="letter_text">';
						html += '<i class="ico"></i>';
						if(sUrl != ''){
						html += '<p style="color:#444;" class="text">[链接]';
						}else{
						html += '<p class="text">';	
						}
						html += ''+content+'<br>';
						if(sUrl != ''){
						html += '<img art="图片" style="max-width:60px;max-height:60px;" src="'+picUrl+'"/>';
						}else if(picUrl != ''){
							html += '<img art="图片" style="" src="'+picUrl+'"/>';
						}
						html += '</p>';
						html += '<span class="date">'+createTime+'</span>';
						html += '</div>';
						if(sUrl != ""){
						html += '</div></a>';
						}else{
						html += '</div>';
						}
					}
					$("#coupons_list").html(html);
					
				}
				else{
					var msg = data.message || "获取信息失败";
					Utils.alert(msg);
				}

			},
			error:function(data){

			}
		});
	}

});





