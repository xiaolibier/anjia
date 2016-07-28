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
		sendGetCitys();
		//数据字典
		sendGetUserInfoDicHttp();

		queryOrderList();
	}

	$("#querybtn").bind("click",queryOrderList);

	function queryOrderList(){
		g.currentPage = 1;
		sendQueryOrderListHttp();
	}

	

	function sendQueryOrderListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "pc/customerCollect/findByQuery";
		var condi = {};
		condi.login_token = g.login_token;
		condi.status = $("#status").val() || "";
		condi.currentPageNum = g.currentPage;
		condi.userName = $("#applicantName").val() || "";
		condi.userPhone = $("#applicantPhone").val() || "";
		condi.createTimeBegin = $("#createTimeBegin").val() || "";
		condi.createTimeEnd = $("#createTimeEnd").val() || "";
		condi.activity = $("#activity").val() || "";
		condi.userCity = $("#userCity").val() || "";
		//condi.companyId = $("#company").val() || "";

		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendQueryOrderListHttp",data);
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
		html.push('<th>提交时间</th>');
		html.push('<th>客户姓名</th>');
		html.push('<th>客户电话</th>');
		html.push('<th>所在城市</th>');
		html.push('<th>设计师姓名</th>');
		html.push('<th>设计师电话</th>');
		html.push('<th>运营人员</th>');
		html.push('<th>投放渠道</th>');
		html.push('<th>活动名称</th>');
		html.push('<th>状态</th>');
		html.push('<th>操作</th>');
		html.push('<th>取消/拒绝原因</th>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var status = d.status || "";
			var id = d.id || "";

			html.push('<tr>');
			html.push('<td>' + (d.createTime || "") + '</td>');
			html.push('<td>' + (d.userName || "") + '</td>');
			html.push('<td>' + (d.userPhone || "") + '</td>');
			html.push('<td>' + (d.userCityDesc || "") + '</td>');
			html.push('<td>' + (d.designName || "") + '</td>');
			html.push('<td>' + (d.designPhone || "") + '</td>');
			html.push('<td>' + (d.operate || "") + '</td>');
			html.push('<td>' + (d.channel || "") + '</td>');
			html.push('<td>' + (d.activity || "") + '</td>');
			html.push('<td>' + (d.statusDesc || "") + '</td>');

			if(status == "103404"){
				html.push('<td><a href="javascript:void(0)" onclick="confir(' + id +')">确认</a></td>');
			}else if(status == "103402"){
				html.push('<td><a href="javascript:void(0)" index="1" onclick="ShowCancelWin(' + id +')">取消</a>&nbsp&nbsp<a  index="2" href="javascript:ShowCancelWin(\'' + id + '\')">拒绝</a></td>');
			}else{
				html.push('<td></td>');
			}
			html.push('<td>' + (d.remark || "") + '</td>');
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
	
	window.confir = function(id){
		if(!confirm("确认该用户合同已回收？")){return;}
        if(id==""){
            alert("订单号非法请检查！");
            return false;
        }
        var url = Base.serverUrl + "pc/customerCollect/finishCustomerCollect";
        var condi = {};
        condi.login_token = g.login_token;
        condi.id = id;
        $.ajax({
            url: url, data: condi,type: "POST", dataType: "json", context: this,
            success: function (data) {
				var msg = data.message || "确认失败！";
                Utils.alert(msg);
            }
        });
	}
	 //显示取消订单窗口
    window.ShowCancelWin = function(id){
        $("#cancelReason").attr("id",id);
        $('#CancelWin').modal('show');
    };
    window.SaveCancel = function(id){
        if(!confirm("您确定要取消/拒绝此订单吗?")){return;}
        var id = $("#cancelReason").attr("id");
        var cancelReason = $("#cancelReason").val();
        if(id==""){
            alert("订单号非法请检查！");
            return false;
        }
        if(cancelReason==""){
            alert("取消原因不能为空！");
            return false;
        }
        var url = $(this).attr('index') == '1' ? Base.serverUrl + "pc/customerCollect/cancelCustomerCollect" : Base.serverUrl + "pc/customerCollect/refuseCustomerCollect";
        var condi = {};
        condi.login_token = g.login_token;
        condi.id = id;
        condi.remark = cancelReason;
        $.ajax({
            url: url, data: condi,type: "POST", dataType: "json", context: this,
            success: function (data) {
                $('#CancelWin').modal('hide');
                var msg = data.message || "取消订单失败！";
                Utils.alert(msg);
            }
        });
    };
/* 获取所在城市 */
	function sendGetCitys(){
		g.httpTip.show();
		var url = Base.serverUrl + "common/city/findCitys";
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
					change(obj);
				}
				else{
					var msg = data.message || "获取数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function change(obj){
		var data = obj || {};
		var option = [];
		option.push('<option value="">请选择</option>');
		for(var i = 0,len = data.length; i < len; i++){
			var d = data[i];
			var id = d.id || "";
			var name = d.name || "";
			option.push('<option value="' + id + '">' + name + '</option>');
			
		}
		$("#userCity").html(option.join(''));
	}

	//获取用户信息字典信息
	function sendGetUserInfoDicHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "common/dic/findByParents";
		var condi = {};
		condi.parents = "1034";
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
		var parents = ["1034"];
		var ids = ["status"];
		for(var i = 0,len = parents.length; i < len; i++){
			var data = obj[parents[i]] || {};
			var option = [];
			option.push('<option value="">请选择</option>');
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

			var url = Base.serverUrl + "pc/order/deleteOrderByOrderId";//order/deleteOrderById
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

});