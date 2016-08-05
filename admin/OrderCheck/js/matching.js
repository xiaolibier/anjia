/**
 * function:风控初审列表
 * author:hmgx
 * date:2015-12-15
*/

//页面初始化
$(function(){

	var g = {};
	g.phone = "";
	g.imgCodeId = "";
	g.sendCode = false;
	g.sendTime = 60;
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.orderId = Utils.getQueryString("orderId") || "";
	g.httpTip = new Utils.httpTip({});

	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 10;

	//window.DataList = []; //存放可以申请的订单列表数据
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("/login.html");
		//window.parent.location.href = "../Public/login.html";
	}else{
		//获取数据列表
		setTimeout(sendQueryRiskOrderListHttp(),500);
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(){
		g.currentPage = 1;
		sendQueryRiskOrderListHttp();
	}

	//获取订单数据
	function sendQueryRiskOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "pc/order/findOrderByMatch";
		var condi = {};
		condi.login_token = g.login_token;
		condi.currentPageNum = g.currentPage;
		condi.orderId = g.orderId;
		//condi = getQueryParameters1(condi,"CX");
		//console.log(condi);
		$.ajax({
			url:url, data:condi,type:"POST",	dataType:"json",context:this,
			success: function(data){
				//console.log("sendQueryRiskOrderListHttp",data);
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
		html.push('<th>订单编号</th>');
		html.push('<th>客户姓名</th>');
		html.push('<th>证件号码</th>');
		html.push('<th>本人手机号</th>');
		html.push('<th>公司名称</th>');
		html.push('<th>装修地址</th>');
		html.push('<th>单位电话</th>');
		html.push('<th>配偶手机号</th>');
		html.push('<th>亲属手机号</th>');
		html.push('<th>同事手机号</th>');
		html.push('<th>朋友手机号</th>');
		html.push('</tr>');

		var obj = data.list || [];
		var s = data.other || [];
		var cc = {"aa":1,"bb":2};
		var cp = [s.applicantPhone,s.applicantCompanyPhone,s.familyPhone,s.familyTwoPhone,s.workmatePhone,s.friendPhone];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			html.push('<tr>');
			if(s.orderId == d.orderId && s.orderId != ""){
				html.push('<td class="td1 bg">' + (d.orderId || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.orderId || '') + '</td>');
			}
			if(s.applicantName == d.applicantName && s.applicantName != ""){
				html.push('<td class="bg">' + (d.applicantName || '') + '</td>');
			}else{
				html.push('<td class="">' + (d.applicantName || '') + '</td>');
			}
			if(s.applicantIdentity == d.applicantIdentity && s.applicantIdentity != ""){
				html.push('<td class="td1 bg">' + (d.applicantIdentity || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.applicantIdentity || '') + '</td>');
			}
			if(cp.indexOf(d.applicantPhone) != -1 && s.applicantPhone != ""){//
				html.push('<td class="td1 bg">' + (d.applicantPhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.applicantPhone || '') + '</td>');
			}
			if(s.applicantCompany == d.applicantCompany && s.applicantCompany != ""){
				html.push('<td class="td1 bg">' + (d.applicantCompany || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.applicantCompany || '') + '</td>');
			}
			if(s.decorateAddress == d.decorateAddress && s.decorateAddress != ""){
				html.push('<td class="td1 bg">' + (d.decorateAddress || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.decorateAddress || '') + '</td>');
			}
			if(cp.indexOf(d.applicantCompanyPhone) != -1 && d.applicantCompanyPhone != ""){
				html.push('<td class="td1 bg">' + (d.applicantCompanyPhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.applicantCompanyPhone || '') + '</td>');
			}
			if(cp.indexOf(d.familyPhone) != -1 && d.familyPhone != ""){
				html.push('<td class="td1 bg">' + (d.familyPhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.familyPhone || '') + '</td>');
			}
			if(cp.indexOf(d.familyTwoPhone) != -1 && d.familyTwoPhone != ""){
				html.push('<td class="td1 bg">' + (d.familyTwoPhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.familyTwoPhone || '') + '</td>');
			}
			if(cp.indexOf(d.workmatePhone) != -1 && d.workmatePhone != ""){
				html.push('<td class="td1 bg">' + (d.workmatePhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.workmatePhone || '') + '</td>');
			}
			if(cp.indexOf(d.friendPhone) != -1  && d.friendPhone != ""){
				html.push('<td class="td1 bg">' + (d.friendPhone || '') + '</td>');
			}else{
				html.push('<td class="td1">' + (d.friendPhone || '') + '</td>');
			}
		}
		html.push('</table>');

		var pobj = data.obj || {};
		if(obj.length > 0){
			var page = countListPage(pobj);
			html.push(page);
		}else{
			Utils.alert("没有订单数据");
		}

		$("#orderlist").html(html.join(''));

		$("#orderlistpage a").bind("click",pageClick);
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

});
