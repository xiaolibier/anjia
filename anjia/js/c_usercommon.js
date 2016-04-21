/**
 * file:个人资料
 * author:chenxy
*/
//页面初始化
$(function(){
	var g = {};
	g.login_token = Utils.offLineStore.get("token",false) || "";		
	
	
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
	}
	else{
		checkGetUserInfoDicHttp();
		yuqi_message_fuc2();
	}
	
	/* 每次进个人中心实时监测是否有逾期 违约订单 然后控制我的额度 是否可用 */	
	function yuqi_message_fuc2(){
		var condi = {};
		condi.login_token = g.login_token;
		var url = Base.serverUrl + "order/selectCustomerOrderNextRepaymentRecords";//修改之前queryOrdersController
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var success = data.success || false;
				if(success){
					var obj = data.list || [];
					var yuqi = "",weiyue = "",j_yuqi = "";
					g.yuqi_weiyue = false;
					for(var i = 0,len = obj.length; i < len; i++){
						var d = obj[i];
						var orderStatus =d.orderStatus || "";
						var orderId = d.orderId || "";
						var repaymentTimes = d.repaymentTimes || "";
						var repayResidueDay = d.repayResidueDay || 0;
						
						if(orderStatus == "100510"){
							yuqi +='1';
						}
						else if(orderStatus == "100511"){
							weiyue += '1';
						}							
					}
					if(yuqi != "" || weiyue != ""){
						g.yuqi_weiyue = true;
					}
					if(g.yuqi_weiyue){
						$("#userleft_abtn").removeAttr("href").addClass("usercenter_a");
					}else{
						$("#userleft_abtn").attr("href","/anjia/usercenter.html?item=5&ostatus=100500").removeClass("usercenter_a");
					}
					
				}
				else{
					var msg = data.message || "获取逾期信息失败";
					//Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
	}

	
	//获取隐藏显示的菜单
	function checkGetUserInfoDicHttp(){
		var url = Base.serverUrl + "order/getOrderStatus";
		var condi = {};
		condi.parents = "1005";
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
					var obj = data.list || {};
					for(var i = 0,len = obj.length; i < len; i++){
						var list = obj[i] || {};
						var id = list.code || "";
						$("#M"+id).addClass("M_show");
					}
				}
				else{
					var msg = data.message || "获取用户信息字典数据失败";
				}
			},
			error:function(data){
			}
		});
	}

	
});