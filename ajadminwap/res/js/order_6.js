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
	g.customerId = "";
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
		var url = Base.serverUrl + "md/order/findPoundagePayOrder";
		var condi = {};
		condi.login_token = g.login_token;
		condi.currentPageNum = g.currentPage;
		condi.pageSize = g.pageSize;
		if(sys){
			condi.applicantName = $("#applicantName").val() || "";
			condi.orderId = $("#orderId").val() || "";
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

		html.push('<table>');
		html.push('<tr class="title">');
		html.push('<td>订单编号</td>');
		html.push('<td>客户姓名</td>');
		html.push('<td>服务费</td>');
		html.push('<td>操作</td>');
		html.push('</tr>');
		var obj = data.list || [];
		for(var i = 0,len = obj.length; i < len; i++){
			var d = obj[i];
			var deleted = d.deleted - 0 || 0;

			var orderId = d.orderId || "";
			var contractNo = d.contractNo || "";
			var subsidiary = d.subsidiary || "";//所属公司
			var packageName = d.packageName || "";
			var packageMoney = d.packageMoney || "";
			var poundage = d.poundage || 0;
			var status = d.status || "";

			var applicantName = d.applicantName || "";
			var applicantPhone = d.applicantPhone || "";
			
			var fenQiTimes = d.fenQiTimes || "";
			var noRepaymentTimes = d.noRepaymentTimes || 0;
			var customerId = d.customerId || "";

			html.push('<tr>');
			html.push('<td>' + orderId + '</td>');
			html.push('<td>' + applicantName + '</td>');
			html.push('<td>' + poundage + '</td>');
			html.push('<td><a href="javascript:getUserCoupon(\''+orderId+'\',\''+customerId+'\',\''+poundage+'\')" class="common_a_btn">代缴费</a> <a href="javascript:getCoupon(\''+orderId+'\',\''+customerId+'\')" class="common_a_btn">发优惠券</a></td>');
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

		$("#orderlistpage li").bind("click",pageClick);
	}

		/* 获取用户优惠券列表 */
	function getUserCoupon(orderId,customerId,poundage){
		var poundage = poundage || 0;	
		var orderId = orderId || "";
		var customerId = customerId || "";
		var url = Base.serverUrl + "md/coupon/findUsableCoupons";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = orderId;
		condi.customerId = customerId;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var d = data.list || {};						
					var html='';
					html += '<div style="text-align:left;">代缴服务费&nbsp;&nbsp;'+poundage+'元</div>';
					html += '<div style="text-align:left;margin-top:5px;">使用优惠券：</div>';
					for(var i=0;i<d.length;i++){
						var obj = d[i] || {};
						var title = obj.title || "";
						var status = obj.status || "";
						var couponType = obj.couponType || "";
						var discount = obj.discount || 0;
						var money = obj.money || 0;
						var customerCouponId = obj.customerCouponId || "";
						var realMoney = couponType == "1" ? (discount+"折") : (money+"元");
						html+='<div style="text-align:left;padding-left:10px;"><input type="radio" class="radio1" name="radio1" value="'+customerCouponId+'" class="common_radio" />&nbsp;&nbsp;'+title+'&nbsp;&nbsp;'+realMoney+'</div>';
					}
					_alert(html,function(){
						var couponId = $("input[name='radio1']:checked").val();
						payPoundage(orderId,couponId);
					},function(){});
				}
				else{
					var msg = data.message || "获取优惠券失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	/* 代缴费 */
	function payPoundage(orderId,customerCouponId){
		var orderId = orderId || "";
		var customerCouponId = customerCouponId || "";
		var url = Base.serverUrl + "md/order/helpPayPoundage";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = orderId;
		condi.customerCouponId = customerCouponId;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					c_alert('缴费成功！',function(){location.reload();},function(){});
				}
				else{
					var msg = data.message || "缴费失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	/* 获取可用优惠券列表 */
	function getCoupon(orderId,customerId){
		var orderId = orderId || "";
		var customerId = customerId || "";
		var url = Base.serverUrl + "md/coupon/findReceivableCoupons";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = orderId;
		condi.customerId = customerId;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var d = data.list || {};					
					var html='';
					html += '<div style="text-align:left;margin-bottom:5px;">下发优惠券：</div>';
					html+='<div style="text-align:left;padding-left:10px;"><input type="radio" index=1 name="radio2" value="0" class="common_radio" />&nbsp;&nbsp;自定义&nbsp;&nbsp;<input id="setUserMoney"  type="text" style="width:50px;border:1px solid #dfdfdf;" />&nbsp;元</div>';
					for(var i=0;i<d.length;i++){
						var obj = d[i] || {};
						var title = obj.title || "";
						var status = obj.status || "";
						var couponType = obj.couponType || "";
						var discount = obj.discount || 0;
						var money = obj.money || 0;
						var id = obj.id || "";
						var realMoney = couponType == "1" ? (discount+"折") : (money+"元");
						html+='<div style="text-align:left;padding-left:10px;"><input type="radio" name="radio2" value="'+id+'" class="common_radio" />&nbsp;&nbsp;'+title+'&nbsp;&nbsp;'+realMoney+'</div>';
					}
					_alert(html,function(){
						var couponMoney = 0;
						var couponId = $("input[name='radio2']:checked").val();
						if($("input[name='radio2']:checked").attr('index') == 1){
							couponMoney = $('#setUserMoney').val() || 0;
						}
						sendCoupon(orderId,customerId,couponId,couponMoney);
					},function(){});
				}
				else{
					var msg = data.message || "获取优惠券失败";
					alert(msg);
				}
			},
			error:function(data){
			}
		});
	}
	/* 发放优惠券 */
	function sendCoupon(orderId,customerId,couponId,couponMoney){
		var orderId = orderId || "";
		var couponId = couponId || "";
		var couponMoney = couponMoney || 0;
		var customerId = customerId || "";
		var url = Base.serverUrl + "md/coupon/sendDownCoupon";
		var condi = {};
		condi.login_token = g.login_token;
		condi.orderId = orderId;
		condi.customerId = customerId;
		condi.couponId = couponId;
		condi.couponMoney = couponMoney;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					c_alert('发放成功！',function(){},function(){});
				}
				else{
					var msg = data.message || "发放失败";
					alert(msg);
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
	window.payPoundage =payPoundage;
	window.getUserCoupon =getUserCoupon;
	window.sendCoupon = sendCoupon;
	window.getCoupon =getCoupon;
	window.pageClick = pageClick;
	window.ViewOrder = function (OrderId){
		Hmgx.openWin("ViewOrderDetail.html?orderid=" + OrderId );
	}

});