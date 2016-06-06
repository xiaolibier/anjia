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

	$("#submit_change").bind('click',approveOrderEdit);
	
	
	/* 改变服务费支付方式 */
	function repaymentTypechange(){
		var cv = $("#poundageRepaymentTypeDesc").val();
		if(cv == '103001'){
			$(".interestRate_tr1").fadeIn(0);
			$(".interestRate_tr2").fadeOut(0);
		}else if(cv == '103002'){
			$(".interestRate_tr1").fadeOut(0);
			$(".interestRate_tr2").fadeIn(0);
		}
	}
	
	//获取所属公司列表
	function sendGetCompanyInfoDicHttp(){
		var url = Base.serverUrl + "common/company/findCompanys";
		var condi = {};
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
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var k in data){
						var id = k || "";
						var name = data[k] || "";
						option.push('<option value="' + id + '">' + name + '期</option>');
					}
					$("#company").html(option.join(''));
				}
				else{
					var msg = data.message || "获取失败";
					Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
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
			option.push('<option value="">请选择</option>');
			for(var k in data){
				var id = k || "";
				var name = data[k] || "";
				option.push('<option value="' + name + '">' + name + '期</option>');
			}
			$("#fenQiTimes").html(option.join(''));
			$("#applyFenQiTimes").html(option.join(''));
			$('#fenQiTimes').val(g.fenQiTimes);
			$('#applyFenQiTimes').val(g.applyFenQiTimes);
			$('#poundageRepaymentType').val(g.poundageRepaymentType);
			repaymentTypechange();
			sendGetCompanyInfoDicHttp();//获取公司列表
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
		g.company = company;
		var subsidiary = d.subsidiary || "";
		var packageName = d.packageName || "";
		var interestRate = d.interestRate || 0;
		var designer = d.designer || "";
		var designerPhone = d.designerPhone || "";
		var contractMoney = d.contractMoney || "";
		var applyPackageMoney = d.applyPackageMoney || "";
		var applyFenQiTimes = d.applyFenQiTimes || "";
		var packageMoney = d.packageMoney || 0;
		var poundageRepaymentTypeDesc = d.poundageRepaymentTypeDesc || "";
		var repaymentTypeDesc = d.repaymentTypeDesc || "";
		var poundageRepaymentType = d.poundageRepaymentType || "";
		g.poundageRepaymentType = poundageRepaymentType;
		var poundage = d.poundage || 0;
		var fenQiTimes = d.fenQiTimes || "";
		var monthPoundage = d.monthPoundage || 0;
		var monthInterestRate = d.monthInterestRate || 0;
		g.fenQiTimes = fenQiTimes;
		g.applyFenQiTimes = applyFenQiTimes;
		html.push('<tr><td class="left">所属公司</td><td class="right"><select id="company"></select></td></tr>');
		html.push('<tr><td class="left">合作商家</td><td class="right"><select id="subsidiary"></select></td></tr>');
		html.push('<tr><td class="left">产品类型</td><td class="right"><input type="text" id="packageName" value="'+packageName+'"/></td></tr>');
		html.push('<tr><td class="left">订单编号</td><td class="right"><input type="text" id="orderId" value="'+orderId+'"/></td></tr>');
		html.push('<tr><td class="left">设计师姓名</td><td class="right"><input type="text" id="designer" value="'+designer+'"/></td></tr>');
		html.push('<tr><td class="left">设计师电话</td><td class="right"><input type="text" id="designerPhone" value="'+designerPhone+'"/></td></tr>');
		html.push('<tr><td class="left">合同金额</td><td class="right"><input typ e="text" id="contractMoney" value="'+contractMoney+'"/></td></tr>');
		html.push('<tr><td class="left">申请分期金额</td><td class="right"><input type="text" id="applyPackageMoney" value="'+applyPackageMoney+'"/></td></tr>');
		html.push('<tr><td class="left">申请分期期数</td><td class="right"><select id="applyFenQiTimes"></select></td></tr>');
		html.push('<tr><td class="left">审批分期金额</td><td class="right"><input type="text" id="packageMoney" value="'+packageMoney+'"/></td></tr>');
		html.push('<tr><td class="left">审批分期期数</td><td class="right"><select id="fenQiTimes"></select></td></tr>');
		html.push('<tr><td class="left">还款方式</td><td class="right"><input type="text" id="repaymentTypeDesc" value="'+repaymentTypeDesc+'"/></td></tr>');
		html.push('<tr><td class="left">服务费支付方式</td><td class="right"><select id="poundageRepaymentType"><option value="103001">一次性支付</option><option value="103002">分期支付</option></select></td></tr>');
		html.push('<tr class="interestRate_tr1"><td class="left">服务费率</td><td class="right"><input type="text" id="interestRate" value="'+interestRate+'%"/></td></tr>');
		html.push('<tr class="interestRate_tr1"><td class="left">服务费</td><td class="right"><input type="text" id="poundage" value="'+poundage+'"/></td></tr>');
		html.push('<tr class="interestRate_tr2"><td class="left">月服务费率</td><td class="right"><input type="text" id="interestRate" value="'+monthInterestRate+'%"/></td></tr>');
		html.push('<tr class="interestRate_tr2"><td class="left">月服务费</td><td class="right"><input type="text" id="poundage" value="'+monthPoundage+'"/></td></tr>');
		$("#orderMessage").html(html.join(''));
		sendGetUserInfoDicHttp();
		$("#poundageRepaymentType").bind('change',repaymentTypechange);
	}
	
	function approveOrderEdit(){
		var url = Base.serverUrl + "md/order/firstApproveOrderEdit";
		var condi = {};
		condi.orderId = g.orderId;
		condi.login_token = g.login_token;
		condi.company = $("#company").val() || "";
		condi.subsidiary = $("#subsidiary").val() || "";
		condi.packageName = $("#packageName").val() || "";
		condi.interestRate = $("#interestRate").val() || 0;
		condi.monthInterestRate = $("#monthInterestRate").val() || 0;
		condi.monthPoundage = $("#monthPoundage").val() || 0;
		condi.designer = $("#designer").val() || "";
		condi.designerPhone = $("#designerPhone").val() || "";
		condi.contractMoney = $("#contractMoney").val() || 0;
		condi.applyPackageMoney = $("#applyPackageMoney").val() || "";
		condi.applyFenQiTimes = $("#applyFenQiTimes").val() || "";
		condi.packageMoney = $("#packageMoney").val() || 0;
		condi.poundageRepaymentType = $("#poundageRepaymentType").val() || "";
		condi.repaymentTypeDesc = $("#repaymentTypeDesc").val() || "";
		condi.poundage = $("#poundage").val() || 0;
		condi.fenQiTimes = $("#fenQiTimes").val() || "";
		
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					c_alert('提交成功',function(){},function(){});
				}
				else{
					var msg = data.message || "提交失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
		
	}
	window.sendGetCompanyInfoDicHttp = sendGetCompanyInfoDicHttp;	
	window.repaymentTypechange = repaymentTypechange;
	window.sendGetUserInfoDicHttp = sendGetUserInfoDicHttp;
});