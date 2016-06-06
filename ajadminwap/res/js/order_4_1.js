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
	g.oox = true;//判断第一个还款中

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		location.replace("../html/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{
		queryOrderList();
	}


	function queryOrderList(){
		g.currentPage = 1;
		sendQueryOrderListHttp();
	}

	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "md/order/findRepaymentRecordByOrderId";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = g.orderId;
		condi.currentPageNum = g.currentPage;
		condi.pageSize = g.pageSize;
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
		html.push('<div class="scroll_div">');
		html.push('<table>');
		html.push('<tr class="title">');
		html.push('<td>还款日期</td>');
		html.push('<td>应还金额</td>');
		html.push('<td>还款状态</td>');
		html.push('<td>操作</td>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			var orderId = d.orderId || "";
			var expectRepaymentTime = d.expectRepaymentTime || "";
			var currentBalance = d.currentBalance || 0;
			var statusDes = d.statusDes || "";
			var status = d.status || "";
			var repaymentRecordId = d.repaymentRecordId || "";

			html.push('<tr>');
			html.push('<td>' + expectRepaymentTime + '</td>');
			html.push('<td>' + currentBalance + '</td>');
			html.push('<td>' + statusDes + '</td>');
			if(status == '101902'){//已还款
				html.push('<td></td>');
			}else if(status == '101901'){//还款中
				if(g.oox){//还款中第一个
					g.oox = false;
					html.push('<td><a href="javascript:remind(\''+repaymentRecordId+'\')" class="common_a_btn">提醒</a> <a href="javascript:reimbursement(\''+repaymentRecordId+'\',\''+currentBalance+'\')" class="common_a_btn">代还款</a></td>');
				}else{
					html.push('<td><a href="javascript:remind(\''+repaymentRecordId+'\')" class="common_a_btn">提醒</a></td>');
				}
			}else if(status == '101903'){//已逾期
				g.oox = false;
				html.push('<td><a href="javascript:remind(\''+987+'\')" class="common_a_btn">提醒</a></td>');
			}
			html.push('</tr>');
		}
		html.push('</table>');
		html.push('</div>');
		if(obj.length > 0){
		}
		else{
			Utils.alert("没有订单数据");
		}
		$("#orderlist").html(html.join(''));

	}
	//提醒
	function remind(repaymentRecordId){
		var repaymentRecordId = repaymentRecordId || "";
		var html='';
			html += '<div>确认发送提醒短信！</div>';
		_alert(html,function(){
			var url = Base.serverUrl + "md/message/sendRepaymentMessage";
			var condi = {};
			condi.login_token = g.login_token;
			condi.repaymentRecordId = repaymentRecordId;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('提醒发送成功！',function(){},function(){});						
					}
					else{
						var msg = data.message || "提醒失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
	}
	//代还款
	function reimbursement(repaymentRecordId,money){
		var repaymentRecordId = repaymentRecordId || "";
		var myDate = new Date();
		var date = myDate.toLocaleDateString() || "";
		var money = money || 0;
		var html='';
			html += '<div style="text-align:left;">代还金额：'+money+'元</div>';
			html += '<div style="text-align:left;margin-top:5px;">代还日期：<input type="date" value="'+date+'" id="realRepaymentTime" style="display:inline-block;border:1px solid #dfdfdf;width:60%;height:20px;line-height:20px;"/></div>';
		_alert(html,function(){
			var realRepaymentTime = $("#realRepaymentTime").val();	
			var url = Base.serverUrl + "md/order/helpPayFenqi";
			var condi = {};
			condi.login_token = g.login_token;
			condi.realRepaymentTime = realRepaymentTime;
			condi.repaymentRecordId = repaymentRecordId;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('代还款成功！',function(){window.location.reload(true);},function(){});				
					}
					else{
						var msg = data.message || "代还款失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
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
	window.remind =remind;
	window.reimbursement =reimbursement;
	window.pageClick = pageClick;
	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

});