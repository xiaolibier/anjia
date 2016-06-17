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
		//sendGetUserInfoDicHttp();
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
		var url = Base.serverUrl + "common/dic/getBaseCodeByParents";
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

	function sendQueryOrderListHttp(sys){
		g.httpTip.show();
		var url = Base.serverUrl + "md/op/getCustomerCollect";
		var condi = {};
		condi.login_token = g.login_token;
		condi.currentPageNum = g.currentPage;
		condi.pageSize = g.pageSize;
		if(sys){
			condi.activity = $("#activity").val() || "";
			condi.createTimeBegin = $("#createTimeBegin").val() || "";
			condi.createTimeEnd = $("#createTimeEnd").val() || "";
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
		html.push('<div class="scroll_div">');
		html.push('<table>');
		html.push('<tr class="title">');
		html.push('<td>提交时间</td>');
		html.push('<td>客户姓名</td>');
		html.push('<td>客户电话</td>');
		html.push('<td>所在城市</td>');
		html.push('<td>活动名称</td>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			var createTime = d.createTime || "";
			var contractNo = d.contractNo || "";
			var subsidiary = d.subsidiary || "";//所属公司
			var packageName = d.packageName || "";
			var userPhone = d.userPhone || "";
			var activity = d.activity || "";
			var status = d.status || "";

			var userName = d.userName || "";
			var applicantPhone = d.applicantPhone || "";
			
			var userCity = d.userCity || "";
			var noRepaymentTimes = d.noRepaymentTimes || 0;


			html.push('<tr>');
			html.push('<td>' + createTime + '</td>');
			html.push('<td>' + userName + '</td>');
			html.push('<td>' + userPhone + '</td>');
			html.push('<td>' + userCity + '</td>');
			html.push('<td>' + activity + '</td>');
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
	}
	//接受
	window.accept = function(orderId){
		var orderId = orderId || "";
		_alert('确认接受？',function(){	
			var poundage = poundage || 0;			
			var customerId = customerId || "";
			var url = Base.serverUrl + "md/order/confirmOrder";
			var condi = {};
			condi.login_token = g.login_token;
			condi.orderId = orderId;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('接受成功！',function(){location.reload();},function(){});					
					}
					else{
						var msg = data.message || "接受失败";
						alert(msg);
					}
				},
				error:function(data){
				}
			});
		},function(){});
	}
	//取消
	window.cancel = function(orderId){
		var orderId = orderId || "";
		var html='';
			html += '<div style="text-align:left;">请输入取消原因：</div>';
			html += '<div style="text-align:left;margin-top:5px;"><textarea id="cancelReason" style="border:1px solid #dfdfdf;width:100%;height:60px;"></textarea></div>';
		_alert(html,function(){
			var cancelReason = $("#cancelReason").val();	
			var poundage = poundage || 0;			
			var customerId = customerId || "";
			var url = Base.serverUrl + "md/order/cancelOrder";
			var condi = {};
			condi.login_token = g.login_token;
			condi.orderId = orderId;
			condi.cancelReason = cancelReason;
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					var status = data.success || false;
					if(status){
						c_alert('取消成功！',function(){location.reload();},function(){});					
					}
					else{
						var msg = data.message || "取消失败";
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
	window.pageClick = pageClick;
	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

});