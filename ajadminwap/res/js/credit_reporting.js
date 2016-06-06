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
		sendQueryOrderListHttp();
	}


	function queryOrderList(){
		g.currentPage = 1;
		sendQueryOrderListHttp();
	}

	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "md/credit/findByOrderId";
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
					var msg = data.message || "获取列表数据失败";
					c_alert(msg,function(){},function(){});
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
		html.push('<td>借款状态</td>');
		html.push('<td>借款金额</td>');
		html.push('<td>批款期数</td>');
		html.push('<td>还款状态</td>');
		html.push('<td>欠款金额</td>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			var orderId = d.orderId || "";
			var borrowAmount = d.borrowAmount || 0;
			var borrowStateDesc = d.borrowStateDesc || "";
			var repayStateDesc = d.repayStateDesc || "";
			var loanPeriod = d.loanPeriod || "";
			var arrearsAmount = d.arrearsAmount || 0;

			html.push('<tr>');
			html.push('<td>' + borrowStateDesc + '</td>');
			html.push('<td>' + borrowAmount + '</td>');
			html.push('<td>' + loanPeriod + '</td>');
			html.push('<td>' + repayStateDesc + '</td>');
			html.push('<td>' + arrearsAmount + '</td>');
			html.push('</tr>');
		}
		html.push('</table>');
		html.push('</div>');
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
		$("#list_totol").html(g.totalRowNum);

	}
	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		g.totalRowNum = data.totalRowNum || 0;
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

	window.pageClick = pageClick;


});