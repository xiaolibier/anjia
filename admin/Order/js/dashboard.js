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
	g.groupBy = 'date';
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
		//sendGetcompanys();
		//sendGetCompanyInfoHttp();
		//获取订单状态
		//sendGetUserInfoDicHttp();
		queryOrderInfor();
		queryOrderInfor2();
		queryOrderInfor3();
		//queryOrderList();
	}

	$("#querybtn").bind("click",queryOrderList);
	$(".charts .c_right .choise .a_btn").bind("click",abtn_click);
	$('#beginDate,#endDate').bind('keyup',function(){ queryOrderInfor3(); });
	
	function abtn_click(){
		$(this).addClass('active').siblings('.a_btn').removeClass('active');
		g.groupBy = $(this).attr('value');
		queryOrderInfor3();
	}
	
	/* 走势图 */
	function queryOrderInfor3(){
		var url = Base.serverUrl + "pc/report/getChartByDate";
		var condi = {};
		condi.login_token = g.login_token;
		condi.beginDate = $("#beginDate").val() || "";
		condi.endDate = $("#endDate").val() || "";
		condi.groupBy = g.groupBy || "";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var d = data.obj || [];
					var editCompleteCount = [],loanCount = [],riskCount = [],time = [];
					for(var i=0,len=d.length;i<len;i++){
						time[i] = d[i].editCompleteTime || "";
						editCompleteCount[i] = d[i].editCompleteCount || 0;//申请量
						loanCount[i] = d[i].loanCount || 0;//签约量
						riskCount[i] = d[i].riskCount || 0;//批核量
					}
					
			$('#container').highcharts({
				chart: {
					backgroundColor: '#edeef2',
					type: 'line'
				},
				title: {//走势图标题
					text: '',
					x: 20 ,
					style:{display:"none"}
				},
				subtitle: {//走势图来源
					text: 'Source: www.jstxdm.com',
					x: 20,
					style:{display:"none"}//可隐藏
				},
				xAxis: {//X轴分类
					categories: time
				},
				yAxis: {//Y轴会根据series的data数值自动分格并划分上下限
					title: {
						text: '(个)',//Y轴表示的文本
						//style:{display:"none"}可隐藏
					}
				},
				tooltip: {
					valueSuffix: '(个)'//数据的后辍
				},
				legend:{//线条所表示的品种分类
					enabled:1,//0为隐藏1为显示
					layout: 'vertical',
					align: 'center',
					verticalAlign: 'bottom',
					borderWidth: 0
				},
				credits:{//制作人；可作为本站水印
					text:"http://www.jstxdm.com",
					href:"http://www.jstxdm.com",
					position:{x:-250,y:-180},
					style:{"z-index":"999",'display':'none'}
				},
				series: [{//可以为多个品种
					name: '客户申请量',
					data: editCompleteCount
				},{
					name: '批核量',
					data: riskCount
				},{
					name: '签约量',
					data: loanCount
				}]
			});
					
				}
				else{
					var msg = data.message || "获取订单列表失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}	

	/* 订单数据统计 */
	function queryOrderInfor(){
		var url = Base.serverUrl + "pc/report/getOrderStatistics";
		var condi = {};
		condi.login_token = g.login_token;
		/* condi.dateTimeBegin = $("#dateTimeBegin").val() || ""; */
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var o = data.obj || [];
					var d = o.chartByStatus[0] || [];
					var applyPackageCount = d.applyPackageCount || 0;//申请量
					var applyPackageMoney = d.applyPackageMoney || 0;//申请金额
					var packageCount = d.packageCount || 0;//审批量
					var packageMoney = d.packageMoney || 0;//审批金额
					var fenqiPoundage = d.fenqiPoundage || 0;//分期服务费
					var oncePoundage = d.oncePoundage || 0;//一次性支付服务费
					var repaymentCount = d.repaymentCount || 0;//还款量
					var realRepaymentMoney = d.realRepaymentMoney || 0;//还款金额
					var overdueCount = d.overdueCount || 0;//逾期量
					var overdueMoney = d.overdueMoney || 0;//逾期金额
					var breakCount = d.breakCount || 0;//违约量
					var breakMoney = d.breakMoney || 0;//违约金额
					var id = ['applyPackageCount','applyPackageMoney','packageCount','packageMoney','fenqiPoundage','oncePoundage','repaymentCount','realRepaymentMoney','overdueCount','overdueMoney','breakCount','breakMoney'];
					
					for(var i=0,len=id.length;i<len;i++){
						var er =  i%2 ==0 ? "个" : "元";
						$('#'+id[i]).html(eval(id[i])+er);
					}
					/* 城市排名 */
					var dw = o.chartByCity || [];
					var html = '';
					html+= '<table class="paihang">';
					html+= '<tr class="th">';
					html+= '<td>城市</td><td>数量</td><td>百分比</td>';
					html+= '</tr>';
					for(var i=0,len=dw.length;i<len;i++){
						var city = dw[i].city || "";
						var provinceCode = dw[i].provinceCode || "";
						//var p = eval(provinceCode) || {};
						var color = i > 3 ? 'ffac89' : 'ff773e';
						if(i == 0)color = 'ff4c00';
						html+= '<tr>';
						html+= '<td>'+city+'</td><td>'+(dw[i].cityCount || 0)+'</td><td>'+(dw[i].cityProportion || 0)+'%</td>';
						html+= '</tr>';
						//console.log(chinaMapConfig.names.p);
						console.log(chinaMapConfig['names'][provinceCode]);
						chinaMapConfig['names']['yunnan'].color=color;
						
					}
					$("#city_list").html(html);

						/* 地图 */
					$('#ChinaMap').SVGMap({
							mapWidth: 806,
							mapHeight: 636
						});
				}
				else{
					var msg = data.message || "获取订单列表失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}
		/* 用户数据 */
	function queryOrderInfor2(){
		var url = Base.serverUrl + "pc/report/getOrderStatistics";
		var condi = {};
		condi.login_token = g.login_token;
		/* condi.dateTimeBegin = $("#dateTimeBegin").val() || ""; */
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var o = data.obj || [];
					var d1 = o.chartByAge[0] || [];
					var d2 = o.chartByStudy || [];
					var d3 = o.chartByWage[0] || [];
					var d4 = o.chartByJob || [];
					/* var applyPackageCount = d.applyPackageCount || 0;//申请量 */
					var data2 = [];
					for(var i=0,len=d2.length;i<len;i++){
						data2[i]= [d2[i].education,d2[i].eduCount];
					}
					var data4 = [];
					for(var i=0,len=d4.length;i<len;i++){
						data4[i]= [d4[i].job,d4[i].jobCount];
					}
					/* 用户数据1 */
					$('.pie_row').highcharts({
						title: {//走势图标题
							text: '<span class="title">'+d1.avgAge+'</span><br><span class="size2">平均年龄</span>',
							y: -18 ,
							verticalAlign:'middle',
							useHTML:true
						},
						chart: {
							backgroundColor: '#edeef2',
							type: 'pie'
						},
						plotOptions:{
							pie:{
								size:170,
								innerSize:'90%',//饼状图内径大小，也可以配置为20%的百分比形式
								colors:[
									'#20ade4',
									'#51c7f5',
									'#b2eaff',
									'#dfe0e4'
								],
							datalabels:{
								distance:15,//数据标签距离饼图边缘的距离，为负数就越靠近饼图圆心
								formatter:function(){
									return this.y + '%';
								},
								style:{
									fontWeight:'bold',
									color:'fff'
								},
								enabled:true
								}
							}
						},
						series: [{//可以为多个品种
							data:[
								['20-30岁',d1.c1],
								['30-40岁',d1.c2],
								['40-50岁',d1.c3],
								['其他',d1.c4]
							]
						}],
						subtitle: {//走势图来源
							text: 'Source: www.jstxdm.com',
							x: 20,
							style:{display:"none"}//可隐藏
						},
						credits:{//制作人；可作为本站水印
							text:"http://www.jstxdm.com",
							href:"http://www.jstxdm.com",
							position:{x:-250,y:-180},
							style:{"z-index":"999",'display':'none'}
						}
					});
					/* 用户数据2 */
			$('.pie_row2').highcharts({
				title: {//走势图标题
					text: '<span class="title">'+d2[0].education+'</span><br><span class="size2">平均学历</span>',
					y: -18 ,
					verticalAlign:'middle',
					useHTML:true
				},
				chart: {
					backgroundColor: '#edeef2',
					type: 'pie'
				},
				plotOptions:{
					pie:{
						size:170,
						innerSize:'90%',//饼状图内径大小，也可以配置为20%的百分比形式
						colors:[
							'#e51600',
							'#ff240a',
							'#ff503e',
							'#ff6e5e',
							'#ff8172',
							'#ffb9b1',
							'#ffd3ce'
						],
					datalabels:{
						distance:15,//数据标签距离饼图边缘的距离，为负数就越靠近饼图圆心
						formatter:function(){
							return this.y + '%';
						},
						style:{
							fontWeight:'bold',
							color:'fff'
						},
						enabled:true
						}
					}
				},
				series: [{//可以为多个品种
					data:data2
				}],
				subtitle: {//走势图来源
					text: 'Source: www.jstxdm.com',
					x: 20,
					style:{display:"none"}//可隐藏
				},
				credits:{//制作人；可作为本站水印
					text:"http://www.jstxdm.com",
					href:"http://www.jstxdm.com",
					position:{x:-250,y:-180},
					style:{"z-index":"999",'display':'none'}
				}
			});
			/* 用户数据3 */
			$('.pie_row3').highcharts({
				title: {//走势图标题
					text: '<span class="title">'+d3.avgWages+'</span><br><span class="size2">平均收入</span>',
					y: -18 ,
					verticalAlign:'middle',
					useHTML:true
				},
				chart: {
					backgroundColor: '#edeef2',
					type: 'pie'
				},
				plotOptions:{
					pie:{
						size:170,
						innerSize:'90%',//饼状图内径大小，也可以配置为20%的百分比形式
						colors:[
							'#f4c700',
							'#f8d746',
							'#fde990',
							'#dfe0e4'
						],
					datalabels:{
						distance:15,//数据标签距离饼图边缘的距离，为负数就越靠近饼图圆心
						formatter:function(){
							return this.y + '%';
						},
						style:{
							fontWeight:'bold',
							color:'fff'
						},
						enabled:true
						}
					}
				},
				series: [{//可以为多个品种
					data:[
						['5000以下',d3.c1],
						['5000-15000',d3.c2],
						['15000以上',d3.c3],
					]
				}],
				subtitle: {//走势图来源
					text: 'Source: www.jstxdm.com',
					x: 20,
					style:{display:"none"}//可隐藏
				},
				credits:{//制作人；可作为本站水印
					text:"http://www.jstxdm.com",
					href:"http://www.jstxdm.com",
					position:{x:-250,y:-180},
					style:{"z-index":"999",'display':'none'}
				}
			});
			/* 用户数据4 */
			$('.pie_row4').highcharts({
				title: {//走势图标题
					text: '<span class="title">'+d4[0].job+'</span><br><span class="size2">工作性质</span>',
					y: -18 ,
					verticalAlign:'middle',
					useHTML:true
				},
				chart: {
					backgroundColor: '#edeef2',
					type: 'pie'
				},
				plotOptions:{
					pie:{
						size:170,
						innerSize:'90%',//饼状图内径大小，也可以配置为20%的百分比形式
						colors:[
							'#66b500',
							'#7edd00',
							'#a1e34c',
							'#c1ef83',
							'#dbf1bf'
						],
					datalabels:{
						distance:15,//数据标签距离饼图边缘的距离，为负数就越靠近饼图圆心
						formatter:function(){
							return this.y + '%';
						},
						style:{
							fontWeight:'bold',
							color:'fff'
						},
						enabled:true
						}
					}
				},
				series: [{//可以为多个品种
					data:data4
				}],
				subtitle: {//走势图来源
					text: 'Source: www.jstxdm.com',
					x: 20,
					style:{display:"none"}//可隐藏
				},
				credits:{//制作人；可作为本站水印
					text:"http://www.jstxdm.com",
					href:"http://www.jstxdm.com",
					position:{x:-250,y:-180},
					style:{"z-index":"999",'display':'none'}
				}
			});
					
				}
				else{
					var msg = data.message || "获取订单列表失败";
					Utils.alert(msg);
				}
				g.httpTip.hide();
			},
			error:function(data){
				g.httpTip.hide();
			}
		});
		
	}
	
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
		var url = Base.serverUrl + "order/queryOrdersController";
		var condi = {};
		condi.login_token = g.login_token;
		condi.status = $("#status").val() || "";
		condi.currentPageNum = g.currentPage;
		condi.applicantName = $("#applicantName").val() || "";
		condi.applicantPhone = $("#applicantPhone").val() || "";
		condi.createTimeBegin = $("#createTimeBegin").val() || "";
		condi.createTimeEnd = $("#createTimeEnd").val() || "";
		condi.orderId = $("#orderId").val() || "";
		condi.subsidiaryId = $("#subsidiaryId").val() || "";
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
		html.push('<th>订单编号</th>');
		html.push('<th>合同编号</th>');
		html.push('<th>合同金额</th>');
		html.push('<th>所属公司</th>');
		html.push('<th>产品名称</th>');
		html.push('<th>申请分期金额</th>');
		html.push('<th>申请分期期数</th>');
		html.push('<th>审批分期金额</th>');
		html.push('<th>审批分期期数</th>');
		html.push('<th>订单状态</th>');
		html.push('<th>真实姓名</th>');
		//html.push('<th>联系电话</th>');
		html.push('<th>未还期数</th>');
		html.push('<th>操作</th>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			if(deleted !== 0){continue;}

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
			var noRepaymentTimes = d.noRepaymentTimes || 0;

			html.push('<tr>');
			html.push('<td>' + orderId + '</td>');
			html.push('<td>' + contractNo + '</td>');
			html.push('<td>' + d.contractMoney + '元</td>');
			html.push('<td>' + subsidiary + '</td>');//所属公司
			html.push('<td>' + packageName + '</td>');
			html.push('<td>' + d.applyPackageMoney + '元</td>');
			html.push('<td>' + d.applyFenQiTimes + '期</td>');
			html.push('<td>' + (packageMoney==0?"":packageMoney + "元") +  '</td>');
			html.push('<td>' + (fenQiTimes==0?"":fenQiTimes + "期") + '</td>');
			html.push('<td>' + statusDes + '</td>');
			html.push('<td>' + applicantName + '</td>');
			//html.push('<td>' + applicantPhone + '</td>');

			html.push('<td>' + noRepaymentTimes + '期</td>');

			if(status != "100504"){
				html.push('<td><a href="javascript:void(0)" onclick="ViewOrder(' + orderId +')">查看</a>&nbsp&nbsp<a href="javascript:deleteOrderById(\'' + orderId + '\')">删除</a></td>');
			}
			else{
				html.push('<td><a href="javascript:void(0)" onclick="ViewOrder(' + orderId +')">查看</a>&nbsp&nbsp</td>');
			}
			if(status == "100501"){
				//html.push('<td><a href="/anjia/mystaging.html?orderid=' + orderId + '">编辑</a><a href="javascript:deleteOrderById(\'' + orderId + '\')">删除</a></td>');
			}
			else if(status == "100502"){
				//100502: "商家审核中"
				//html.push('<td><a href="detail.html?orderid=' + orderId + '">查看</a>&nbsp&nbsp<a href="seller.html?orderid=' + orderId + '">审批</a></td>');
			}
			else if(status == "100503"){
				//100503: "风控审核中
			}
			else if(status == "100504" || status == "100508" || status == "100509"){
				//html.push('<td><a href="javascript:deleteOrderById(\'' + orderId + '\')">删除</a></td>');
			}
			else if(status == "100505"){
				//100505: "待缴手续费"
				//html.push('<td><a href="/anjia/orderdetail.html">查看</a></td>');
			}
			else if(status == "100506"){
				//100506: "待放款"
				//html.push('<td><a href="/anjia/orderdetail.html">查看</a></td>');
			}
			else if(status == "100507"){
				//100506: "待放款"
				//html.push('<td><a href="/anjia/orderdetail.html">查看</a></td>');
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

});