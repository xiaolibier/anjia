/**
 * author:hmgx
 * date:2015-12-15
*/

//页面初始化
$(function(){
	/* if(typeof eui !== "undefined"){
		eui.calendar({
			startYear: 1900,
			input: document.getElementById('dateTimeBegin'),
			id:"dateTimeBegin"
		});
		eui.calendar({
			startYear: 1900,
			input: document.getElementById('dateTimeEnd'),
			id:"dateTimeEnd"
		});
	} */

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

	//加载订单方法
	//$.getScript("js/OrderFunction.js").done(function() {}).fail(function() {Utils.alert("@_@加载订单状态方法失败<br>请检查！");});

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){alert();
		//未登录
		//location.replace("/login.html");alert();
		//window.parent.location.href = "../Public/login.html";
	}else{
		//获取数据列表
		sendQueryRiskOrderListHttp();
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(){
		g.currentPage = 1;
		sendQueryRiskOrderListHttp();
	}

	//获取订单数据
	function sendQueryRiskOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "oplog/getReportByDay";
		var condi = {};
		condi.login_token = g.login_token;
		condi.dateTimeBegin = $('#dateTimeBegin').val() || "";
		condi.dateTimeEnd = $('#dateTimeEnd').val() || "";
		$.ajax({
			url:url, data:condi,type:"POST",	dataType:"json",context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					changeOrderListHtml(data);
				}else{
					var msg = data.message || "获取订单列表数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	//创建订单列表内容
	function changeOrderListHtml(data){
		var html = [];

		html.push('<table class="table table-bordered table-hover definewidth m10" ><thead>');
		html.push('<tr>');
		html.push('<th>日期\序列</th>');
		html.push('<th>客户申请量</th>');
		html.push('<th>申请额度</th>');
		html.push('<th>批核量</th>');
		html.push('<th>批核金额</th>');
		html.push('<th>签约量</th>');
		html.push('<th>签约金额</th>');
		html.push('<th>优惠券使用量</th>');
		html.push('<th>优惠券使用金额</th>');
		html.push('<th>应还款量</th>');
		html.push('<th>应还款（总）</th>');
		html.push('<th>实际还款数量</th>');
		html.push('<th>实还本金</th>');
		html.push('<th>实还分期服务费</th>');
		html.push('<th>一次性支付服务费</th>');
		html.push('</tr>');

		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len-1; i++){
			var d = obj[i];
			html.push('<tr>');
			html.push('<td>' + d.date + '</td>');
			html.push('<td>' + d.anjiaCount + '个</td>');
			html.push('<td>' + d.anjiaSum + '元</td>');
			html.push('<td>' + d.approveCount + '个</td>');
			html.push('<td>' + d.approveSum + '元</td>');
			html.push('<td>' + d.loanCount + '个</td>');
			html.push('<td>' + d.loanSum + '元</td>');
			html.push('<td>' + d.couponCount + '个</td>');
			html.push('<td>' + d.couponSum + '元</td>');
			html.push('<td>' + d.nextRepayCount + '个</td>');
			html.push('<td>' + d.nextRepaySum + '元</td>');
			html.push('<td>' + d.repayCount + '个</td>');
			html.push('<td>' + d.repaySum + '元</td>');
			html.push('<td>' + d.repayPounSum + '元</td>');
			html.push('<td>' + d.chargesSum + '元</td>');
			html.push('</tr>');
		}
		var d = obj[obj.length-1];
		html.push('<tr style="color:#006dcc">');
		html.push('<td>' + d.total + '</td>');
		html.push('<td>' + d.anjiaCountTotal + '个</td>');
		html.push('<td>' + d.anjiaSumTotal + '元</td>');
		html.push('<td>' + d.approveCountTotal + '个</td>');
		html.push('<td>' + d.approveSumTotal + '元</td>');
		html.push('<td>' + d.loanCountTotal + '个</td>');
		html.push('<td>' + d.loanSumTotal + '元</td>');
		html.push('<td>' + d.couponCountTotal + '个</td>');
		html.push('<td>' + d.couponSumTotal + '元</td>');
		html.push('<td>' + d.nextRepayCountTotal + '个</td>');
		html.push('<td>' + d.nextRepaySumTotal + '元</td>');
		html.push('<td>' + d.repayCountTotal + '个</td>');
		html.push('<td>' + d.repaySumTotal + '元</td>');
		html.push('<td>' + d.repayPounSumTotal + '元</td>');
		html.push('<td>' + d.chargesSumTotal + '元</td>');
		html.push('</tr>');
		html.push('</table>');

		/* var pobj = data.obj || {};
		if(obj.length > 0){
			var page = countListPage(pobj);
			html.push(page);
		}else{
			Utils.alert("没有订单数据");
		} */

		$("#orderlist").html(html.join(''));

		/* $("#orderlistpage a").bind("click",pageClick); */
	}

	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		html.push('<div id="orderlistpage" class="inline pull-right page">');
		html.push(data.totalRowNum + ' 条记录' + g.currentPage + '/' + g.totalPage + ' 页');
		html.push('<a href="javascript:void(0);" class="page-next">下一页</a>');

		if(g.totalPage > 10){
			if(g.currentPage >= 10){
				var css = "color: #ff0000;";

				if((g.totalPage - g.currentPage) >= 5){
					html.push('<a href="javascript:void(0)" >' + (g.currentPage - 4) + '</a>');
					html.push('<a href="javascript:void(0)" >' + (g.currentPage - 3) + '</a>');
					html.push('<a href="javascript:void(0)" >' + (g.currentPage - 2) + '</a>');
					html.push('<a href="javascript:void(0)" >' + (g.currentPage - 1) + '</a>');
					html.push('<a href="javascript:void(0)" style="' + css + '">' + (g.currentPage) + '</a>');
				}else{
					//末尾少于5页
					var len = 9 - (g.totalPage - g.currentPage);
					for(var j = len; j >= 0; j--){
						if(j == 0){
							html.push('<a href="javascript:void(0)" style="' + css + '">' + (g.currentPage) + '</a>');
						}else{
							html.push('<a href="javascript:void(0)" >' + (g.currentPage - j) + '</a>');
						}
					}
				}
				for(var i = 1; i < 6; i++){
					var np = g.currentPage + i;
					if(np <= g.totalPage){
						html.push('<a href="javascript:void(0)" >' + np + '</a>');
					}else{
						break;
					}
				}

			}else{
				for(var i = 0; i < 10; i++){
					var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
					html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
				}
			}
		}else{
			for(var i = 0; i < g.totalPage; i++){
				var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
				html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
			}
		}
		html.push('</div>');

		return html.join('');
	}

	function pageClick(evt){;
		var index = $(this).index();
		var text = $(this).text() - 0 || "";
		if(text !== ""){
			if(g.currentPage === text){
				Utils.alert("当前是第" + text + "页");
				return;
			}else{
				g.currentPage = text;
			}
		}else{
			var cn = $(this)[0].className;
			switch(cn){
				case "page-pre-end":
					//第一页
					if(g.currentPage == 1){
						Utils.alert("当前是第一页");
						return;
					}else{
						g.currentPage = 1;
					}
				break;
				case "page-pre":
					//前一页
					if(g.currentPage > 1){
						g.currentPage--;
					}else{
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
		}

		if(g.currentPage <= g.totalPage){
			sendQueryRiskOrderListHttp();
		}else{
			Utils.alert("当前是最后一页");
		}
	}

	window.OutXls = function(){
        var ParamObj={};
        ParamObj.login_token = g.login_token;
        Hmgx.serializeDownload(Base.serverUrl  + "oplog/getReportByDayExport","CX",ParamObj);
    }
});