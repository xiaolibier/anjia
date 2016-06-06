/**
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
	g.orderId = Utils.getQueryString("orderId") || "";
	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 10;


	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
	}
	else{
		sendQueryOrderListHttp();
		
	}

	//获取用户信息字典信息
	function sendGetUserInfoDicHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "common/dic/findByParents";
		var condi = {};
		condi.parents = "1031";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendGetUserInfoDicHttp",data);
				var status = data.success || false;
				if(status){
					var obj = data.obj || {};
					changeSelectHtml(obj);
				}
				else{
					var msg = data.message || "获取用户信息字典数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function changeSelectHtml(obj){
		var parents = ["1031"];
		var ids = ["status"];
		for(var i = 0,len = parents.length; i < len; i++){
			var data = obj[parents[i]] || {};
			var option = [];
			option.push('<option value="">请选择</option>');
			for(var k in data){
				var id = k || "";
				var name = data[k] || "";
				option.push('<option value="' + name + '">' + name + '期</option>');
			}
			$("#fenQiTimes").html(option.join(''));
			$('#fenQiTimes').val(g.fenQiTimes);
		}

	}
	/* 复审 */
	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "md/order/secondApproveOrderReport";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = g.orderId;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					changeOrderListHtml(data);
				}
				else{
					var msg = data.message || "获取失败";
					alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function changeOrderListHtml(data){

		var html = [];
		var d = data.obj || [];
		var firstApproveRemarks = d.firstApproveRemarks || "";
		var fenQiTimes = d.fenQiTimes || "";
		var packageMoney = d.packageMoney || 0;
		var firstApproveReport = d.firstApproveReport || "";
		var firstApproveRemarks = d.firstApproveRemarks || "";
		var secondApproveReport = d.secondApproveReport || "";
		g.fenQiTimes = fenQiTimes;
		
		html.push('<div><span class="text">审批金额</span><input  id="packageMoney" value="'+packageMoney+'" class="common_input" type="text"/></div>');
		html.push('<div><span class="text">审批期数</span><select id="fenQiTimes" class="common_select"></select></div>');
		html.push('<div><span class="text">初审报告</span><textarea disabled="disabled" id="firstApproveReport" class="common_area">'+firstApproveReport+'</textarea></div>');
		html.push('<div><span class="text">初审意见</span><textarea disabled="disabled" id="firstApproveRemarks" class="common_area">'+firstApproveRemarks+'</textarea></div>');
		html.push('<div class="rca_textarea_1" ><span class="text">复审报告</span><textarea id="secondApproveReport" class="common_area">'+secondApproveReport+'</textarea></div>');
		html.push('<div class="rca_textarea_1" style="display:none;"><span class="text">终审报告</span><textarea id="fk3_approve_report" class="common_area"></textarea></div>');
		html.push('<div class="align"><a href="javascript:first_approveOrder(\'0\')" class="common_a yes">通过</a><a href="javascript:first_approveOrder(\'1\')" class="common_a no">拒绝</a><a href="javascript:first_approveOrder(\'2\')" class="common_a cancel">退回</a></div>');
		
		$("#orderAuditMessage").html(html.join(''));
		sendGetUserInfoDicHttp();//获取分期列表
	}
	/* 操作 */
	window.first_approveOrder = function(approveResult){
		var url = Base.serverUrl + "md/order/secondApproveOrder";
		var condi = {};
		condi.packageMoney = $("#packageMoney").val() || 0;
		condi.fenQiTimes = $("#fenQiTimes").val() || "";
		condi.approveReport = $("#secondApproveReport").val() || "";
		condi.orderId = g.orderId;
		condi.login_token = g.login_token;
		condi.approveResult = approveResult || "";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					c_alert('审核成功',function(){history.go(-1);},function(){});
				}
				else{
					var msg = data.message || "审核失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	} 
	
	
	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
});