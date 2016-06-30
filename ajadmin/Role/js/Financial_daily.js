/**
 * author:chenxy
*/

//页面初始化
$(function(){
	/* if(typeof eui !== "undefined"){
		eui.calendar({
			startYear: 1900,
			input: document.getElementById('createTimeBegin'),
			id:"createTimeBegin"
		});
		eui.calendar({
			startYear: 1900,
			input: document.getElementById('createTimeEnd'),
			id:"createTimeEnd"
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


	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{
		//获取公司信息
		sendGetcompanys();
		//sendGetCompanyInfoHttp();
		//获取订单状态
		sendGetUserInfoDicHttp();

		queryOrderList();
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(){
		g.currentPage = 1;
		sendQueryOrderListHttp();
	}

	function sendGetCompanyInfoHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "order/queryCompanyController";
		var condi = {};
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendGetCompanyInfoHttp",data);
				var status = data.success || false;
				if(status){
					var obj = data.list || [];
					changeSelectHtml(obj);

					sendQueryOrderListHttp();
				}
				else{
					var msg = data.message || "获取公司信息字典数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	/*
	function changeSelectHtml(obj){
		var data = obj || {};
		var option = [];
		for(var i = 0,len = data.length; i < len; i++){
			var d = data[i];
			var id = d.companyId || "";
			//var cid = d.companyId || "";
			var name = d.companyName || "";
			var deleted = d.deleted;
			if(deleted == 0){
				//id = id + "_" + cid;
				option.push('<option value="' + id + '">' + name + '</option>');
			}
		}
		$("#company").html(option.join(''));
	}
	*/

	/* 获取合作商户列表 */
	function sendGetcompanys(){
		g.httpTip.show();
		var url = Base.serverUrl + "subsidiary/getSubsidiarys";
		var condi = {};		
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendGetNavigationKeyHttp",data);
				var status = data.success || false;
				if(status){
					changeSelect(data);
				}
				else{
					var msg = data.message || "获取公司信息字典数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function changeSelect(obj){
		var data = obj.list || {};
		var option = [];
		option.push('<option value="">全部</option>');	
		for(var i=0;i<data.length;i++){
			var name = data[i].name;
			option.push('<option value="' + data[i].id + '">' + name + '</option>');			
		}
		$("#subsidiaryId").html(option.join(''));
	}
	//获取用户信息字典信息
	function sendGetUserInfoDicHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "baseCodeController/getBaseCodeByParents";
		var condi = {};
		condi.parents = "1005";
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
		var parents = ["1005"];
		var ids = ["status"];
		for(var i = 0,len = parents.length; i < len; i++){
			var data = obj[parents[i]] || {};
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




	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "oplog/financeWeekly";
		var condi = {};
		condi.login_token = g.login_token;
		/* condi.currentPageNum = g.currentPage; */
		condi.dateTimeBegin = $("#dateTimeBegin").val() || "";
		condi.dateTimeEnd = $("#dateTimeEnd").val() || "";
		condi.subsidiaryId = $("#subsidiaryId").val() || "";

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
					Utils.alert(msg);
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

		html.push('<table class="table table-bordered table-hover definewidth m10" ><thead>');
		html.push('<tr>');
		html.push('<th>分公司</th>');
		html.push('<th>业绩量</th>');
		html.push('<th>业绩金额</th>');
		html.push('<th>审批量</th>');
		html.push('<th>审批金额</th>');
		html.push('<th>放款额</th>');
		html.push('<th>审批服务费</th>');
		html.push('<th>一次性缴纳服务费</th>');
		html.push('<th>分期缴纳服务费</th>');
		html.push('<th>应收服务费</th>');
		html.push('<th>逾期金额</th>');
		html.push('</tr>');
		var obj = data.list || [];
		var loanCountTotal = 0;
		var loanSumTotal =  0;
		var approveCountTotal =  0;
		var approveSumTotal =  0;
		var recordSumTotal =  0;
		var repaySumTotal =  0;
		var repayFirstSumTotal =  0;
		var repaySecondSumTotal =  0;
		var residueRepaySumTotal =  0;
		var overdueSumTotal =  0;
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var subsidiaryName = d.subsidiaryName || "";
			var loanCount = d.loanCount || "";
			var loanSum = d.loanSum || 0;//所属公司
			var approveCount = d.approveCount || 0;
			var approveSum = d.approveSum || 0;
			var recordSum = d.recordSum || 0;
			var repaySum = d.repaySum || 0;
			var repayFirstSum = d.repayFirstSum || 0;
			var repaySecondSum = d.repaySecondSum || 0;
			var residueRepaySum = d.residueRepaySum || 0;
			var overdueSum = d.overdueSum || 0;
			loanCountTotal += loanCount;
			loanSumTotal += loanSum;
			approveCountTotal += approveCount;
			approveSumTotal += approveSum;
			recordSumTotal += recordSum;
			repaySumTotal += repaySum;
			repayFirstSumTotal += repayFirstSum;
			repaySecondSumTotal += repaySecondSum;
			residueRepaySumTotal += residueRepaySum;
			overdueSumTotal += overdueSum;

			html.push('<tr>');
			html.push('<td>' + subsidiaryName + '</td>');
			html.push('<td>' + loanCount + '</td>');
			html.push('<td>' + loanSum + '元</td>');
			html.push('<td>' + approveCount + '</td>');//所属公司
			html.push('<td>' + approveSum + '元</td>');
			html.push('<td>' + recordSum + '元</td>');
			html.push('<td>' + repaySum + '元</td>');
			html.push('<td>' + repayFirstSum +  '元</td>');
			html.push('<td>' + repaySecondSum + '元</td>');
			html.push('<td>' + residueRepaySum + '元</td>');
			html.push('<td>' + overdueSum + '元</td>');
			html.push('</tr>');
		}
		var d = obj[obj.length-1];
		html.push('<tr style="color:#006dcc">');
		html.push('<td>总计：</td>');
		html.push('<td>' + loanCountTotal + '</td>');
		html.push('<td>' + loanSumTotal + '元</td>');
		html.push('<td>' + approveCountTotal + '</td>');//所属公司
		html.push('<td>' + approveSumTotal + '元</td>');
		html.push('<td>' + recordSumTotal + '元</td>');
		html.push('<td>' + repaySumTotal + '元</td>');
		html.push('<td>' + repayFirstSumTotal +  '元</td>');
		html.push('<td>' + repaySecondSumTotal + '元</td>');
		html.push('<td>' + residueRepaySumTotal + '元</td>');
		html.push('<td>' + overdueSumTotal + '元</td>');
		html.push('</tr>');
		html.push('</table>');

		var pobj = data.obj || {};

		if(obj.length > 0){
			var page = countListPage(pobj);
			/* html.push(page); */
		}
		else{
			Utils.alert("没有订单数据");
		}

		$("#orderlist").html(html.join(''));

		$("#orderlistpage a").bind("click",pageClick);
	}

	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		//g.totalPage = 1;
		//g.currentPage = 1;
		html.push('<div id="orderlistpage" class="inline pull-right page">');
		html.push(data.totalRowNum + ' 条记录' + g.currentPage + '/' + g.totalPage + ' 页');
		html.push('<a href="javascript:void(0);" class="page-pre">上一页</a>');
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
				}
				else{
					//末尾少于5页
					var len = 9 - (g.totalPage - g.currentPage);
					for(var j = len; j >= 0; j--){
						if(j == 0){
							html.push('<a href="javascript:void(0)" style="' + css + '">' + (g.currentPage) + '</a>');
						}
						else{
							html.push('<a href="javascript:void(0)" >' + (g.currentPage - j) + '</a>');
						}
					}
				}
				for(var i = 1; i < 6; i++){
					var np = g.currentPage + i;
					if(np <= g.totalPage){
						html.push('<a href="javascript:void(0)" >' + np + '</a>');
					}
					else{
						break;
					}
				}

			}
			else{
				for(var i = 0; i < 10; i++){
					var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
					html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
				}
			}
		}
		else{
			for(var i = 0; i < g.totalPage; i++){
				var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
				html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
			}
		}
		html.push('</div>');

		return html.join('');
	}

	function pageClick(evt){
		var index = $(this).index();
		var text = $(this).text() - 0 || "";
		if(text !== ""){
			if(g.currentPage === text){
				Utils.alert("当前是第" + text + "页");
				return;
			}
			else{
				g.currentPage = text;
			}
		}
		else{
			var cn = $(this)[0].className;
			switch(cn){
				case "page-pre-end":
					//第一页
					if(g.currentPage == 1){
						Utils.alert("当前是第一页");
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
		}

		if(g.currentPage <= g.totalPage){
			sendQueryOrderListHttp();
		}
		else{
			Utils.alert("当前是最后一页");
		}
	}



	function deleteOrderById(id){
		if(confirm("你确认要删除该订单吗?")){
			g.httpTip.show();
			var condi = {};
			condi.orderId = id;
			condi.login_token = g.login_token;

			var url = Base.serverUrl + "order/deleteOrderById";
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					//console.log("deleteOrderById",data);
					var status = data.success || false;
					if(status){
						sendQueryOrderListHttp();
					}
					else{
						var msg = data.message || "删除订单数据失败";
						Utils.alert(msg);
					}
					g.httpTip.hide();
				},
				error:function(data){
					g.httpTip.hide();
				}
			});
		}
	}


	window.deleteOrderById = deleteOrderById;

	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

	window.OutXls = function(){
        var ParamObj={};
        ParamObj.login_token = g.login_token;
		ParamObj.dateTimeBegin = $('#dateTimeBegin').val() || '';
		ParamObj.dateTimeEnd = $('#dateTimeEnd').val() || '';
		ParamObj.subsidiaryId = $('#subsidiaryId').val() || '';
        Hmgx.serializeDownload(Base.serverUrl  + "oplog/financeWeeklyExport","CX",ParamObj);
    }
});