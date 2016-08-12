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
		getStatic();
		
	}

	$(".acc_div1").bind('click',function(){
		location.href="../html/customerStatus.html";
	});

	function getStatic(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "privilege/findByDesigner";
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
						var money = d.money || 0;
						var createTime = d.createTime || '';
						var recvTypeDesc = d.recvTypeDesc || '';
						var status = d.status || "";
						var remark = d.remark || "";
						var expireDate = d.expireDate || 0;
						var statusDesc = d.statusDesc || "";
						var id = d.id || "";
						if(status == "102602" || status == "102603"){
							html += '<table class="list used">';
						}else if(status == "102601"){
							html += '<table class="list">';
						}else{
							html += '<table class="list">';
						}
						
						html += '<tr>';
						html += '<td>'+createTime+'<br>'+recvTypeDesc+'：'+remark+'</td>';
						html += '<td>'+statusDesc+'<br>免息特权'+money+'元</td>';
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

