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
	g.orderId = Utils.getQueryString("orderid") || "";
	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 10;


	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{
		//sendGetUserInfoDicHttp();
		sendGetRepayOrderInfoListHttp(g.orderId);
	}



		//获取放款列表
	function sendGetRepayOrderInfoListHttp(orderId){
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = orderId;
		var url = Base.serverUrl + "md/order/findLoanRecordByOrderId";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
			
				var status = data.success || false;
				if(status){
					repayListHtml(data,orderId);
				}
				else{
					var msg = data.message || "获取用户放款订单失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}

	function repayListHtml(data,orderId){

		var html = [];
		var obj = data.list || [];

		var one = false;
		var two = false;
		var three = false;
		var four = false;
		var max = 0;

		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i] || {};
			var loanRecordId = d.loanRecordId || "";
			var loanTimes = d.loanTimes - 0;
			var packageMoney = d.packageMoney - 0 || 0;
			var loanMoney = d.loanMoney - 0 || 0;
			var realLoanTime = d.realLoanTime || "";
			var loanResidueMoney = d.contractMoney || 0;
			var loanMaxMoney = d.loanMaxMoney - 0 || 0;
			var expectLoanTime = d.expectLoanTime || "";
			//var now = new Date().format("yyyy-MM-dd");
			var status = d.status;
			var now  =  data.other || "";
			var days = 100000;
			if(expectLoanTime !== ""){
				days = getDays(now,expectLoanTime);
			}
			max = max + loanMoney;
			//(102401 待放款,102402以放款)

			if(status == "102401"){
				//待放款
				if(loanTimes == 1){
					html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
					html.push('<input id="' + loanRecordId + '" type="text" placeholder="最大付款金额' +loanMaxMoney + '元" class="common_input" />');
					html.push('<a class="common_a" href="javascript:loanByLoanRecord(\'' + loanRecordId + '\',\'' + loanMaxMoney + '\',\'' + loanResidueMoney + '\')">收款</a>');
				}
				else if(loanTimes == 2){
					if(one == true){
						html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
						html.push('<input id="' + loanRecordId + '" type="text" placeholder="最大付款金额' +loanMaxMoney + '元" class="common_input" />');
						html.push('<a class="common_a" href="javascript:loanByLoanRecord(\'' + loanRecordId + '\',\'' + loanMaxMoney + '\',\'' + loanResidueMoney + '\')">收款</a>');
					}
					else{
						html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
						html.push('<input id="' + loanRecordId + '" type="text" placeholder="最大付款金额' +loanMaxMoney + '元" class="common_input"/>');
						html.push('<a class="common_a" href="javascript:alert(\'请先申请第一期\')">收款</a></td>');
					}
				}
				else if(loanTimes == 3){
					if(two == true && days >= 0){
						html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
						html.push('<input id="' + loanRecordId + '" type="text" placeholder="最大付款金额' +loanMaxMoney + '元" class="common_input" />');
						html.push('<a class="common_a" href="javascript:loanByLoanRecord(\'' + loanRecordId + '\',\'' + loanMaxMoney  + '\',\'' + loanResidueMoney + '\')">收款</a>');
					}
					else{
						var days2=Math.abs(days);
						if(days === 100000){
							/* html.push('<td>不能超过合同金额35%</td>'); */
							html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
							html.push('<input type="text" placeholder="不能超过合同金额35%" class="common_input" />');
							
						}
						else{
							/* html.push('<td>还剩' + days2 + '天再付款,不能超过合同金额35%</td>'); */
							html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
							html.push('<input type="text" placeholder="还剩' + days2 + '天再付款,不能超过合同金额35%" class="common_input" />');
						}
						html.push('<a class="common_a" >收款</a>');
					}
				}
				else if(loanTimes == 4){
					if(two == true && days >= 0){
						html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
						html.push('<input id="' + loanRecordId + '" type="text" placeholder="最大付款金额' +loanMaxMoney + '" class="common_input" />');
						html.push('<a class="common_a" href="javascript:loanByLoanRecord(\'' + loanRecordId + '\',\'' + loanMaxMoney + '\',\'' + loanResidueMoney + '\',4)">收款</a>');
					}
					else{
						var days2=Math.abs(days);
						if(days === 100000){
							/* html.push('<td>不能超过合同金额5%</td>'); */
							html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
							html.push('<input type="text" placeholder="不能超过合同金额5%" class="common_input" />');
						}
						else{
							/* html.push('<td>还剩' + days2 + '天再付款,不能超过合同金额5%</td>'); */
							html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
							html.push('<input type="text" placeholder="还剩' + days2 + '天再付款,不能超过合同金额5%" class="common_input" />');
						}
						html.push('<a class="common_a" >收款</a>');
					}
				}
			}
			else if(status == "102402"){
				if(loanTimes === 1){
					one = true;
				}
				if(loanTimes === 2){
					two = true;
				}
				if(loanTimes === 3){
					three = true;
				}
				html.push('<div><span class="text">第'+loanTimes+'笔支付</span>');
				html.push('<input type="text" placeholder="' + loanMoney + '元" class="common_input" />');
				html.push('<a class="common_a old" href="javascript:;">已收款</a>');
			}

			html.push('</div>');
		}
		
		$("#pay_list_box").html(html.join(''));

	}
	function getDays(strDateStart,strDateEnd){
		var strSeparator = "-"; //日期分隔符
		var oDate1;
		var oDate2;
		var iDays;
		oDate1= strDateStart.split(strSeparator);
		oDate2= strDateEnd.split(strSeparator);
		var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
		var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
		iDays = parseInt((strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
		return iDays ;
	}

	function loanByLoanRecord(loanRecordId,loanMaxMoney, loanResidueMoney,loanTimes){
		var condi = {};
		condi.login_token = g.login_token;
		condi.loanRecordId = loanRecordId;
		condi.loanMoney = $("#" +loanRecordId).val() - 0 || 0;
		if(loanResidueMoney < condi.loanMoney){
			alert("申请不能大于" +loanResidueMoney + "元");
			return;
		}
		if(loanMaxMoney < condi.loanMoney){
			alert("最多只能申请" +loanMaxMoney + "元");
			return;
		}
		if(condi.loanMoney == 0){
			alert("申请额度必须大于0元");
			return;
		}
		if(loanTimes == "4" && loanMaxMoney > condi.loanMoney){
			alert("为了避免支付结余，请填写"+loanMaxMoney+"元");
			return;
		}
		var url = Base.serverUrl + "md/order/merchantCollectFund";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				
				var status = data.success || false;
				if(status){
					alert("申请付款成功");
					sendGetRepayOrderInfoListHttp(g.orderId);
				}
				else{
					var msg = data.message || "申请付款失败";
					alert(msg);
				}
			},
			error:function(data){

			}
		});
	}

	
	window.loanByLoanRecord = loanByLoanRecord;

});