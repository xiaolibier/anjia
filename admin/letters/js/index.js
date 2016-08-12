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

	g.navigationKeyObj = {};



	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("/login.html");
		//window.parent.location.href = "../Public/login.html";
	}
	else{
		
		queryList();
	}

	$("#querybtn").bind("click",queryList);
	$('#newbtn').bind('click',newItem);

	
	function newItem(){
		location.href = "add.html";
	}
	
	function queryList(){
		g.currentPage = 1;
		sendQueryListHttp();
	}

	function sendQueryListHttp(){
		g.httpTip.show();
		var url = Base.serverUrl + "pc/communication/findByQuery";
		var condi = {};
		condi.login_token = g.login_token;
		condi.pageSize = g.pageSize;
		condi.currentPageNum = g.currentPage;
		condi.createTimeBegin = $("#createTimeBegin").val() || "";
		condi.createTimeEnd = $("#createTimeEnd").val() || "";
		condi.content = $("#content").val() || "";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				//console.log("sendQueryListHttp",data);
				var status = data.success || false;
				if(status){
					changeListHtml(data);
				}
				else{
					var msg = data.message || "获取轮播图列表数据失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
	}

	function changeListHtml(data){

		var html = [];

		html.push('<table class="table table-bordered table-hover definewidth m10" ><thead>');
		html.push('<tr>');
		html.push('<th>发送时间</th>');
		html.push('<th>文字</th>');
		html.push('<th>标题图片</th>');
		html.push('<th>链接</th>');
		html.push('<th>订单状态</th>');
		html.push('<th>操作</th>');
		html.push('</tr>');

		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];

			html.push('<tr>');
			html.push('<td>' + (d.createTime || "") + '</td>');
			html.push('<td>' + (d.content || "") + '</td>');
			html.push('<td><img width=60 height=60 src="' + (d.picUrl || "") + '" /></td>');
			html.push('<td>' + (d.url || "") + '</td>');
			html.push('<td>' + (d.orderStatusDesc || "") + '</td>');
			html.push('<td><a href="javascript:changeBannerUsedFlag(\'' + (d.id || "") + '\');">撤回</a></td>');
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

		$("#list").html(html.join(''));

		$("#listpage a").bind("click",pageClick);
	}

	function countListPage(data){
		var html = [];
		g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
		//g.totalPage = 1;
		//g.currentPage = 1;
		html.push('<div id="listpage" class="inline pull-right page">');
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
			sendQueryListHttp();
		}
		else{
			Utils.alert("当前是最后一页");
		}
	}

	function changeBannerUsedFlag(bmId){
		var msg = "确认撤回消息吗?";
		if(confirm(msg)){
			g.httpTip.show();
			var condi = {};
			condi.id = bmId;
			condi.login_token = g.login_token;
			var url = Base.serverUrl + "pc/communication/cancelCommunication";
			$.ajax({
				url:url,
				data:condi,
				type:"POST",
				dataType:"json",
				context:this,
				success: function(data){
					//console.log("changeBannerUsedFlag",data);
					var status = data.success || false;
					if(status){
						alert('撤回成功！');
						sendQueryListHttp();
					}
					else{
						var msg = data.message || "失败";
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


	window.changeBannerUsedFlag = changeBannerUsedFlag;
	window.newItem = newItem;

});