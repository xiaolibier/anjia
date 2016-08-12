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
	
	/* 输入框 */
	$('.answer_input .input').bind('click',function(){
		var height = $('.coupons_list').height();
		$('html,body').animate({scrollTop:height},900);
	});
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
					alert(msg);
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
					var height = $('.coupons_list').height();
					$('html,body').animate({scrollTop:height},900);
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


	//事件响应两次控制
	g.clicktwo = false;
	$(".upload-btn").bind("click",function(evt){
		var index = this.id.split("_")[1] - 0;
		if(index > 0){
			g.uploadIndex = index;
			g.clicktwo = false;
		}
		else{
			if(g.clicktwo){
				g.uploadIndex = index;
			}
			g.clicktwo = true;
		}
		document.getElementById('orderMaterialFile').click();
	});

	$(document).on("change","#orderMaterialFile",orderMaterialFileBtnUp);
	
	function orderMaterialFileBtnUp(){
		var orderMaterialFile = $("#orderMaterialFile").val() || "";
		if(orderMaterialFile !== ""){
			uploadBtnUp();
		}
	}
	function uploadBtnUp(){
		if(lastname()){
			g.httpTip.show();
			var url = Base.serverUrl + "communication/sendImage";
			var condi = {};
			condi.login_token = g.login_token;
			//condi.customerId = g.customerId;
			//condi.orderId = g.orderId;
			//condi.orderMaterialType  = g.uploadImgType[g.uploadIndex];

			//document.domain = "partywo.com";
			$.ajaxFileUpload({
				url: url, //用于文件上传的服务器端请求地址
				data:condi,
				secureuri: false, //一般设置为false
				fileElementId: 'orderMaterialFile', //文件上传空间的id属性  <input type="file" id="file" name="file" />
				dataType: 'jsonp', //返回值类型 一般设置为json
				success: function (data, status)  //服务器成功响应处理函数
				{
				g.httpTip.hide();sendGetLetters();
					if(data != null && data != ""){
						try{
							var obj = JSON.parse(data);
							//imgUploadCallBack(obj);
							sendGetLetters();
						}
						catch(e){
							alert("图片上传失败");
						}
					}

				},
				error: function (data, status, e)//服务器响应失败处理函数
				{
					alert("图片上传失败");
					g.httpTip.hide();
				}
			});
			return false;
		}
	}
	
	function lastname(){
		//获取欲上传的文件路径
		var filepath = document.getElementById("orderMaterialFile").value;
		//为了避免转义反斜杠出问题，这里将对其进行转换
		var re = /(\\+)/g;
		var filename=filepath.replace(re,"#");
		//对路径字符串进行剪切截取
		var one=filename.split("#");
		//获取数组中最后一个，即文件名
		var two=one[one.length-1];
		//再对文件名进行截取，以取得后缀名
		var three=two.split(".");
		//获取截取的最后一个字符串，即为后缀名
		var last=three[three.length-1];
		//添加需要判断的后缀名类型
		var tp ="jpg,gif,bmp,JPG,GIF,BMP,png,jpeg";
		//返回符合条件的后缀名在字符串中的位置
		var rs=tp.indexOf(last);
		//如果返回的结果大于或等于0，说明包含允许上传的文件类型
		if(rs>=0){
			return true;
		}else{
			alert("您选择的上传文件不是有效的图片文件！");
			return false;
		}
	}

});





