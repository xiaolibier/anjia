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
	g.totalRowNumC2 = Utils.offLineStore.get("totalRowNumC",false) || 0;
	g.totalRowNumC = 0;
	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 10;
	g.interval = '';

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{
		//sendGetUserInfoOperate();
		//sendGetUserInfoChannel();
		queryOrderList(false);
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(sys){
		g.currentPage = 1;
		sendQueryOrderListHttp(sys);
	}

	//获取运营人员列表
	function sendGetUserInfoOperate(){
		var url = Base.serverUrl + "city/getCitys";
		var condi = {};
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var data = data.list || {};
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var i=0;i<data.length;i++){
						var name = data[i].name;
						var id = data[i].id || "";
							option.push('<option value="' + id + '">' + name + '</option>');
					}
					$("#operate").html(option.join(''));
				}
				else{
					var msg = data.message || "获取列表失败";
					alert(msg);
				}				
			},
			error:function(data){
			}
		});
	}

		//获取投放渠道列表
	function sendGetUserInfoChannel(){
		var url = Base.serverUrl + "city/getCitys";
		var condi = {};
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var data = data.list || {};
					var option = [];
					option.push('<option value="">请选择</option>');
					for(var i=0;i<data.length;i++){
						var name = data[i].name;
						var id = data[i].id || "";
							option.push('<option value="' + id + '">' + name + '</option>');
					}
					$("#channel").html(option.join(''));
				}
				else{
					var msg = data.message || "获取列表失败";
					alert(msg);
				}				
			},
			error:function(data){
			}
		});
	}

	function sendQueryOrderListHttp(sys){
		g.httpTip.show();
		var url = Base.serverUrl + "user/getCustomerCollect";
		var condi = {};
		condi.login_token = g.login_token;
		condi.currentPageNum = g.currentPage;
		if(sys){
			condi.operate = $("#operate").val() || "";
			condi.channel = $("#channel").val() || "";
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

		html.push('<table class="table table-bordered table-hover definewidth m10" >');
		html.push('<tr>');
		html.push('<th>提交时间</th>');
		html.push('<th>客户姓名</th>');
		html.push('<th>转发次数</th>');
		html.push('<th>客户电话</th>');
		html.push('<th>所在城市</th>');
		html.push('<th>设计师姓名</th>');
		html.push('<th>设计师电话</th>');
		html.push('<th>运营人员</th>');
		html.push('<th>投放渠道</th>');
		html.push('<th>活动名称</th>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			if(deleted !== 0){continue;}

			var createTime = d.createTime || "";
			var userName = d.userName || "";
			var num = d.num || 0;
			var userPhone = d.userPhone || "";
			var userCity = d.userCity || "";
			var designName = d.designName || "";
			var designPhone = d.designPhone || "";
			var operate = d.operate || "";
			var channel = d.channel || "";
			var activity = d.activity || "";
			var isRead = d.isRead || "";
			html.push('<tr>');
			html.push('<td>' + createTime + '</td>');
			html.push('<td>' + userName + '</td>');
			html.push('<td>' + num + '次</td>');
			html.push('<td>' + userPhone + '</td>');
			html.push('<td>' + userCity + '</td>');
			html.push('<td>' + designName + '</td>');
			html.push('<td>' + designPhone + '</td>');
			html.push('<td>' + operate + '</td>');
			html.push('<td>' + channel + '</td>');
			if(isRead == '1'){
				var _class = 'asc_ico'+i;
				html.push('<td class="w">' + activity + '<a onclick="javascript:asc_click(\'' + userPhone + '\',\'' + activity + '\',\'' + _class + '\')" class="asc_ico '+_class+'"></a></td>');
			}else{
				html.push('<td>' + activity + '</td>');
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
		$("#orderlistpage a").bind("click",pageClick);
	}

	/* new图标绑定click事件 */
	window.asc_click = function(userPhone,activity,_class){
		if(confirm('确认标记为已读？')){}else{return false;}
		var url = Base.serverUrl + "user/updateIsRead";
		var condi = {};
		condi.login_token = g.login_token;
		condi.userPhone = userPhone || '';
		condi.activity = activity || '';
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					$('.'+_class).fadeOut(300);
				}
				else{
					var msg = data.message || "获取订单列表数据失败";
					Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		//g.totalPage = 1;
		//g.currentPage = 1;
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
			sendQueryOrderListHttp(true);
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

			var url = Base.serverUrl + "order/deleteOrderByOrderIdController";
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
	window.OutXls = function(){
        var ParamObj={};
        ParamObj.login_token = g.login_token;
        Hmgx.serializeDownload(Base.serverUrl  + "user/getCustomerCollectExport","CX",ParamObj);
    }
	window.deleteOrderById = deleteOrderById;

	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

});