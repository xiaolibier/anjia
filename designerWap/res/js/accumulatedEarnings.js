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

	/* $(".acc_div1").bind('click',function(){
		location.href="../html/customerStatus.html";
	}); */

	function getStatic(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "revenue/findRealRevenueByDesigner";
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
						var createTime = d.createTime || "";
						var fenQiTimes = d.fenQiTimes || 0;
						var userPhone = d.userPhone || "";
						var contractMoney = d.contractMoney || 0;
						var userName = d.userName || "";
						var type = d.type || "";
						var typeDesc = d.typeDesc || "";
						var money = d.money || "";
						var recommendedDesignerName = d.recommendedDesignerName || "";
						var designerName = d.designerName || "";
						var ti = fenQiTimes <= 12 ? 0.6 : 0.4;
						if(type == "103703"){
						html += '<table class="acc_div1">';
						html += '<tr>';
						html += '<td class="acc_left">'+createTime+'<br>'+statusDesc+'</td>';
						html += '<td class="acc_right">';
						html += '<span class="lable">'+userName+'</span> '+userPhone+'<br>';
						html += '<span class="lable">合同金额：'+contractMoney+'</span> 申请分期：'+packageMoney+'<br>';
						html += '<span class="lable">分期期数：'+fenQiTimes+'期</span> 提成比例：'+ti+'%';
						html += '</td>';
						html += '</tr>';
						html += '</table>';
						}else if(type == "103701"){
						html += '<table class="acc_div2">';
						html += '<tr>';
						html += '<td>'+typeDesc+'</td>';
						html += '<td>'+money+'元</td>';
						html += '<td>'+recommendedDesignerName+'</td>';
						html += '<td>'+createTime+'</td>';
						html += '</tr>';
						html += '</table>';
						}
						else if(type == "103702"){
						html += '<table class="acc_div2">';
						html += '<tr>';
						html += '<td>'+typeDesc+'</td>';
						html += '<td>'+money+'元</td>';
						html += '<td>'+designerName+'</td>';
						html += '<td>'+createTime+'</td>';
						html += '</tr>';
						html += '</table>';
						}
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

