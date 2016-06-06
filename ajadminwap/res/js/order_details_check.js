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
		var url = Base.serverUrl + "common/dic/getBaseCodeByParents";
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
			option.push('<option value=""></option>');
			for(var k in data){
				var id = k || "";
				var name = data[k] || "";
				option.push('<option value="' + name + '">' + name + '期</option>');
			}
			$("#fenQiTimes").html(option.join(''));
			$("#applyFenQiTimes").html(option.join(''));
			$('#fenQiTimes').val(g.fenQiTimes);
			$('#applyFenQiTimes').val(g.applyFenQiTimes);
		}

	}
	
	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "md/order/findOrderByOrderId";
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
					var msg = data.message || "获取订单列表数据失败";
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
		var deleted = d.deleted - 0 || 0;

		var orderId = d.orderId || "";
		g.orderId = orderId;
		var company = d.company || "";
		var subsidiary = d.subsidiary || "";
		var packageName = d.packageName || "";
		var monthInterestRate = d.monthInterestRate || 0;
		var designer = d.designer || "";
		var designerPhone = d.designerPhone || "";
		var contractMoney = d.contractMoney || "";
		var applyPackageMoney = d.applyPackageMoney || "";
		var applyFenQiTimes = d.applyFenQiTimes || "";
		var packageMoney = d.packageMoney || 0;
		var poundageRepaymentTypeDesc = d.poundageRepaymentTypeDesc || "";
		var repaymentTypeDesc = d.repaymentTypeDesc || "";
		var poundage = d.poundage || 0;
		var fenQiTimes = d.fenQiTimes || "";
		g.fenQiTimes = fenQiTimes;
		g.applyFenQiTimes = applyFenQiTimes;
		html.push('<tr><td class="left">所属公司</td><td class="right"><input readonly type="text" id="company" value="'+company+'"/></td></tr>');
		html.push('<tr><td class="left">合作商家</td><td class="right"><input readonly type="text" id="subsidiary" value="'+subsidiary+'"/></td></tr>');
		html.push('<tr><td class="left">产品类型</td><td class="right"><input readonly type="text" id="packageName" value="'+packageName+'"/></td></tr>');
		html.push('<tr><td class="left">订单编号</td><td class="right"><input readonly type="text" id="orderId" value="'+orderId+'"/></td></tr>');
		html.push('<tr><td class="left">设计师姓名</td><td class="right"><input readonly type="text" id="designer" value="'+designer+'"/></td></tr>');
		html.push('<tr><td class="left">设计师电话</td><td class="right"><input readonly type="text" id="designerPhone" value="'+designerPhone+'"/></td></tr>');
		html.push('<tr><td class="left">合同金额</td><td class="right"><input readonly type="text" id="contractMoney" value="'+contractMoney+'"/></td></tr>');
		html.push('<tr><td class="left">申请分期金额</td><td class="right"><input readonly type="text" id="applyPackageMoney" value="'+applyPackageMoney+'"/></td></tr>');
		html.push('<tr><td class="left">申请分期期数</td><td class="right"><select disabled="disabled" id="applyFenQiTimes"></select></td></tr>');
		html.push('<tr><td class="left">审批分期金额</td><td class="right"><input readonly type="text" id="packageMoney" value="'+packageMoney+'"/></td></tr>');
		html.push('<tr><td class="left">审批分期期数</td><td class="right"><select disabled="disabled" id="fenQiTimes"></select></td></tr>');
		html.push('<tr><td class="left">还款方式</td><td class="right"><input readonly type="text" id="repaymentTypeDesc" value="'+repaymentTypeDesc+'"/></td></tr>');
		html.push('<tr><td class="left">服务费支付方式</td><td class="right"><input readonly type="text" id="poundageRepaymentTypeDesc" value="'+poundageRepaymentTypeDesc+'"/></td></tr>');
		html.push('<tr><td class="left">月服务费率</td><td class="right"><input readonly type="text" id="monthInterestRate" value="'+monthInterestRate+'%"/></td></tr>');
		html.push('<tr><td class="left">服务费</td><td class="right"><input readonly type="text" id="poundage" value="'+poundage+'"/></td></tr>');

		$("#orderMessage").html(html.join(''));
		sendGetUserInfoDicHttp();
	}


	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
});