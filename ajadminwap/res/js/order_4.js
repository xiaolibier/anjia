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
		sendGetUserInfoDicHttp();
		queryOrderList(false);
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(sys){
		g.currentPage = 1;
		sendQueryOrderListHttp(sys);
	}

	//获取用户信息字典信息
	function sendGetUserInfoDicHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "common/dic/findByCodes";
		var condi = {};
		condi.codes = "100513,100508,100507,100512,100510";
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
					alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function changeSelectHtml(obj){
		var parents = ["1005"];
		var ids = ["status"];
		for(var i = 0,len = parents.length; i < len; i++){
			var data = obj || {};
			var option = [];
			option.push('<option value="">全部订单</option>');
			for(var k in data){
				var id = k || "";
				var name = data[k] || "";
				option.push('<option value="' + id + '">' + name + '</option>');
			}
			$("#" + ids[i]).html(option.join(''));
		}
		if(g.orderStatus !== ""){
			$("#orderstatus").val(g.orderStatus);
		}
	}

	function sendQueryOrderListHttp(sys){
		g.httpTip.show();
		var url = Base.serverUrl + "md/order/findRepaymentOrder";
		var condi = {};
		condi.login_token = g.login_token;
		condi.currentPageNum = g.currentPage;
		condi.pageSize = g.pageSize;
		if(sys){
			condi.applicantName = $("#applicantName").val() || "";
			condi.status = $("#status").val() || "";
		}
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
		
		html.push('<table>');
		html.push('<tr class="title">');
		html.push('<td>订单编号</td>');
		html.push('<td>客户姓名</td>');
		html.push('<td>订单状态</td>');
		html.push('<td width=80>操作</td>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			var orderId = d.orderId || "";
			var contractNo = d.contractNo || "";
			var subsidiary = d.subsidiary || "";//所属公司
			var packageName = d.packageName || "";
			var packageMoney = d.packageMoney || "";
			var statusDes = d.statusDes || "";
			var status = d.status || "";

			var applicantName = d.applicantName || "";
			var applicantPhone = d.applicantPhone || "";
			
			var fenQiTimes = d.fenQiTimes || "";
			var totalCurrentBalance = d.totalResidueBalance || 0;
			var currentBalance = d.residueBalance || 0;

			html.push('<tr>');
			html.push('<td>' + orderId + '</td>');
			html.push('<td>' + applicantName + '</td>');
			html.push('<td>' + statusDes + '</td>');
			if(status == '100507'){//还款中
				html.push('<td><a href="javascript:TerminationContract(\''+orderId+'\')" class="common_a_btn">终止合同</a> <a href="javascript:oncePaid(\''+orderId+'\',\''+totalCurrentBalance+'\')" class="common_a_btn">一次还清</a> <a href="javascript:checkInstallment(\''+orderId+'\')" class="common_a_btn">查看分期</a></td>');
			}else if(status == '100510'){//已逾期
				html.push('<td><a href="javascript:TerminationContract(\''+orderId+'\')" class="common_a_btn">终止合同</a> <a href="javascript:reimbursementPay(\''+orderId+'\',\''+currentBalance+'\')" class="common_a_btn">代还款</a> <a href="javascript:checkInstallment(\''+orderId+'\')" class="common_a_btn">查看分期</a></td>');
			}else if(status == '100508' || status == '100512' || status == '100513'){//已还清 逾期已还清 违约已还清
				html.push('<td><a href="javascript:checkInstallment(\''+orderId+'\')" class="common_a_btn">查看分期</a></td>');
			}else{//其他
				html.push('<td><a href="javascript:checkInstallment(\''+orderId+'\')" class="common_a_btn">查看分期</a></td>');
			}
			html.push('</tr>');
		}
		html.push('</table>');
		

		var pobj = data.obj || {};

		if(obj.length > 0){
			var page = countListPage(pobj);
			html.push(page);
		}
		else{
			Utils.alert("没有订单数据");
		}

		$("#orderlist").html(html.join(''));

		$("#orderlistpage li").bind("click",pageClick);
	}
	//终止合同
	function TerminationContract(orderId){
		var orderId = orderId || "";
		var html='';
			html += '<div style="text-align:left;">终止合同原因：</div>';
			html += '<div style="text-align:left;margin-top:5px;"><textarea id="finishContractReason" style="border:1px solid #dfdfdf;width:100%;height:60px;"></textarea></div>';
		_alert(html,function(){
			var finishContractReason = $("#finishContractReason").val();	
			var poundage = poundage || 0;			
			var customerId = customerId || "";
			var url = Base.serverUrl + "md/order/finishContract";
			var condi = {};
			condi.login_token = g.login_token;
			condi.orderId = orderId;
			condi.finishContractReason = finishContractReason;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('终止合同成功！',function(){location.reload();},function(){});					
					}
					else{
						var msg = data.message || "终止合同失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
	}
	//一次还清
	function oncePaid(orderId,money){
		var orderId = orderId || "";
		var myDate = new Date();
		var date = myDate.toLocaleDateString() || "";
		var money = money || 0;
		var html='';
			html += '<div style="text-align:left;">代还金额：'+money+'元</div>';
			html += '<div style="text-align:left;margin-top:5px;">代还日期：<input type="date" placeholder="'+date+'" id="realRepaymentTime" style="display:inline-block;border:1px solid #dfdfdf;width:60%;height:20px;line-height:20px;"/></div>';
		_alert(html,function(){
			var realRepaymentTime = $("#realRepaymentTime").val();	
			var poundage = poundage || 0;				
			var customerId = customerId || "";
			var url = Base.serverUrl + "md/order/helpPayFinish";
			var condi = {};
			condi.login_token = g.login_token;
			condi.orderId = orderId;
			condi.realRepaymentTime = realRepaymentTime;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('一次性还清成功！',function(){window.location.reload(true);},function(){});						
					}
					else{
						var msg = data.message || "还款失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
	}
	//代还款
	function reimbursementPay(orderId,money){
		var orderId = orderId || "";
		var money = money || 0;
		var html='';
			html += '<div style="text-align:left;">代还金额：'+money+'元</div>';
			html += '<div style="text-align:left;margin-top:5px;"><input type="date" id="realRepaymentTime2" style="border:1px solid #dfdfdf;width:100%;height:20px;line-height:20px;"/></div>';
		_alert(html,function(){
			var realRepaymentTime = $("#realRepaymentTime2").val();	
			var poundage = poundage || 0;				
			var customerId = customerId || "";
			var url = Base.serverUrl + "md/order/helpPayOverdue";
			var condi = {};
			condi.login_token = g.login_token;
			condi.orderId = orderId;
			condi.realRepaymentTime = realRepaymentTime;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('代还款成功！',function(){location.reload();},function(){});						
					}
					else{
						var msg = data.message || "还款失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
	}
	//查看分期
	function checkInstallment(orderId){
		var orderId = orderId || "";
		var money = money || 0;
		location.href="../html/order_4_1.html?orderId="+orderId;
	}
	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		//g.totalPage = 1;
		//g.currentPage = 1;
		html.push('<div id="orderlistpage" class="page_p">');
		html.push('<ul>');
		if(g.currentPage <= 1){//当前是第一页
			html.push('<li class="page-pre-end un">首页</li>');
			html.push('<li class="page-pre color un">上一页</li>');
		}else{
			html.push('<li class="page-pre-end">首页</li>');
			html.push('<li class="page-pre color">上一页</li>');
		}
		html.push('<li>'+g.currentPage+'/'+g.totalPage+'</li>');
		if(g.currentPage >= g.totalPage){//当前是最后一页
			html.push('<li class="page-next color un">下一页</li>');
			html.push('<li class="page-next-end un">尾页</li>');
		}else{
			html.push('<li class="page-next color">下一页</li>');
			html.push('<li class="page-next-end">尾页</li>');
		}
		html.push('</ul>');
		html.push('</div>');

		return html.join('');
	}

	function pageClick(evt){
		var cn = $(this)[0].className.split(" ")[0];
		switch(cn){
			case "page-pre-end":
				//第一页
				if(g.currentPage == 1){
					alert("当前是第一页");
					return;
				}
				else{
					g.currentPage = 1;
				}
			break;
			case "page-pre":
				//前一页
				if(g.currentPage > 1){
					g.currentPage--;
				}
				else{
					Utils.alert("当前是第一页");
					return;
				}
			break;
			case "page-next":
				//后一页
				g.currentPage++;
			break;
			case "page-next-end":
				//最后一页
				g.currentPage = g.totalPage;
			break;
		}
		if(g.currentPage <= g.totalPage){
			sendQueryOrderListHttp(true);
		}
		else{
			Utils.alert("当前是最后一页");
		}
	}
	window.reimbursementPay =reimbursementPay;
	window.checkInstallment = checkInstallment;
	window.oncePaid =oncePaid;
	window.TerminationContract =TerminationContract;
	window.pageClick = pageClick;
	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

});