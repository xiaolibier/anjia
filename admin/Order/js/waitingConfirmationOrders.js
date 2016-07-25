/**
 * author:hmgx
 * function:客户信息分析报表
 * data:2016-3-10
 */

//页面初始化
$(function () {
    /* if (typeof eui !== "undefined") {
        eui.calendar({
            startYear: 1900,
            input: document.getElementById('applicationTimeBegin'),
            id: "applicationTimeBegin"
        });
        eui.calendar({
            startYear: 1900,
            input: document.getElementById('applicationTimeEnd'),
            id: "applicationTimeEnd"
        });
    } */
    var g = {};
    g.login_token = Utils.offLineStore.get("token", false) || "";
    g.httpTip = new Utils.httpTip({});
    g.totalPage = 1;
    g.currentPage = 1;
    g.pageSize = 10;

    //验证登录状态
    var loginStatus = Utils.getUserInfo();
    if (!loginStatus) {
        alert("您未登陆！");
    } else {
        //sendGetUserInfoDicHttp();//订单状态
        //getBranchCompany();//分公司
        queryOrderList();//查询数据
    }

    $("#querybtn").bind("click", queryOrderList);

    function queryOrderList() {
        g.currentPage = 1;
        sendQueryOrderListHttp();
    }

    ////处理订单状态
    //function sendGetUserInfoDicHttp(){
    //    g.httpTip.show();
    //    var url = Base.serverUrl + "baseCodeController/getBaseCodeByParents";
    //    var condi = {};
    //    condi.parents = "1005";
    //    $.ajax({
    //        url:url,
    //        data:condi,
    //        type:"POST",
    //        dataType:"json",
    //        context:this,
    //        success: function(data){
    //            //console.log("sendGetUserInfoDicHttp",data);
    //            var status = data.success || false;
    //            if(status){
    //                var obj = data.obj || {};
    //                changeSelectHtml(obj);
    //            }
    //            else{
    //                var msg = data.message || "获取用户信息字典数据失败";
    //                Utils.alert(msg);
    //            }
    //            g.httpTip.hide();
    //        },
    //        error:function(data){
    //            g.httpTip.hide();
    //        }
    //    });
    //}
    //
    //function changeSelectHtml(obj){
    //    var parents = ["1005"];
    //    var ids = ["status"];
    //    for(var i = 0,len = parents.length; i < len; i++){
    //        var data = obj[parents[i]] || {};
    //        var option = [];
    //        option.push('<option value="">全部订单</option>');
    //        for(var k in data){
    //            var id = k || "";
    //            var name = data[k] || "";
    //            option.push('<option value="' + id + '">' + name + '</option>');
    //        }
    //        $("#" + ids[i]).html(option.join(''));
    //    }
    //    if(g.orderStatus !== ""){
    //        $("#orderstatus").val(g.orderStatus);
    //    }
    //}
    //
    ////获取分公司
    //function getBranchCompany() {
    //    g.httpTip.show();
    //    var url = Base.serverUrl + "subsidiary/getSubsidiarys";
    //    var condi = {};
    //    condi.pageSize = 1000;
    //    $.ajax({
    //        url: url, data: condi, type: "POST", dataType: "json", context: this,
    //        success: function (data) {
    //            var list = data.list || {};
    //            var option = [];
    //            option.push('<option value="">全部</option>');
    //            for (var i = 0; i < list.length; i++) {
    //                var d = list[i];
    //                option.push('<option value="' + d.id + '">' + d.name + '</option>');
    //            }
    //            $("#subsidiaryId").html(option.join(''));
    //            g.httpTip.hide();
    //        }, error: function (data) {
    //            g.httpTip.hide();
    //        }
    //    });
    //}

    //获取订单数据
    function sendQueryOrderListHttp() {
        g.httpTip.show();
        var url = Base.serverUrl + "pc/order/findWaitForConfirmOrder";//order/selectWaitingForConfirmationOrders
        var condi = {};
        condi.login_token = g.login_token;
        condi.currentPageNum = g.currentPage;
        condi.pageSize = g.pageSize;
        condi = Hmgx.getQueryParamet("CX", condi);
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                var status = data.success || false;
                if (status) {
                    changeOrderListHtml(data);
                } else {
                    var msg = data.message || "获取订单列表数据失败";
                    Utils.alert(msg);
                }
                g.httpTip.hide();
            },
            error: function (data) {
                g.httpTip.hide();
            }
        });
    }


    function changeOrderListHtml(data) {
        var html = [];
        html.push('<table class="table table-bordered table-hover definewidth m10" ><thead>');
        html.push('<tr>');
        html.push('<th>订单编号</th>');
        html.push('<th>合同编号</th>');
        html.push('<th>所属公司</th>');
        html.push('<th>产品名称</th>');
        html.push('<th>申请分期金额</th>');
        html.push('<th>申请分期期数</th>');
        html.push('<th>审批分期金额</th>');
        html.push('<th>审批分期期数</th>');
        html.push('<th>订单状态</th>');
        html.push('<th>用户姓名</th>');
        html.push('<th>手机号</th>');
        html.push('<th>服务费支付方式</th>');
        html.push('<th>服务费</th>');
        html.push('<th>月还款本金</th>');
        html.push('<th>月还款</th>');
        html.push('<th>操作</th>');
        html.push('</tr>');

        var obj = data.list || [];
        for (var i = 0, len = obj.length; i < len; i++) {
            var d = obj[i];
            html.push('<td>' + ( d.orderId || "" ) + '</td>');
            html.push('<td>' + ( d.contractNo || "" ) + '</td>');
            html.push('<td>' + ( d.subsidiary || "" ) + '</td>');
            html.push('<td>' + ( d.packageName || "" ) + '</td>');
            html.push('<td>' + ( d.applyPackageMoney || "" ) + '</td>');
            html.push('<td>' + ( d.applyFenQiTimes || "" ) + '</td>');
            html.push('<td>' + ( d.packageMoney || "" ) + '</td>');
            html.push('<td>' + ( d.fenQiTimes || "" ) + '</td>');
            html.push('<td>' + ( d.statusDes || "" ) + '</td>');
            html.push('<td>' + ( d.applicantName || "" ) + '</td>');
            html.push('<td>' + ( d.applicantPhone || "" ) + '</td>');
            html.push('<td>' + ( d.poundageRepaymentTypeDesc || "" ) + '</td>');
            html.push('<td>' + ( d.poundage || "" ) + '</td>');
            html.push('<td>' + ( d.moneyMonth   || "" ) + '</td>');
            html.push('<td>' + ( d.monthRepay   || "" ) + '</td>');

            var buttonStr = '<a class="" href="javascript:SaveAccept(' + d.orderId + ')">接受</a>  &nbsp;&nbsp;';
            buttonStr += '<a class="" href="javascript:ShowCancelWin(' + d.orderId + ')">取消</a>&nbsp;&nbsp;';
			buttonStr += '<a class="" href="javascript:SendWin(' + d.orderId +  ',\'' + d.customerId + '\',' +  d.poundage + ')">选择活动</a>';
            html.push('<td>' + buttonStr + '</td>');

            html.push('</tr>');
        }
        html.push('</table>');

        var pobj = data.obj || {};
        if (obj.length > 0) {
            var page = countListPage(pobj);
            html.push(page);
        } else {
            Utils.alert("数据为空");
        }
        $("#orderlist").html(html.join(''));
        $("#orderlistpage a").bind("click", pageClick);
    }

	    //显示下发优惠券窗口
    window.SendWin = function (orderId,customerId,poundage){//用户ID，订单手续费
        GetExistCoupon(orderId,customerId,poundage);//获取用户存在的优惠券数据
        $('#SendCoupon').modal('show');
    };
    //获取该用户存在的优惠券数据
    function GetExistCoupon(orderId,customerId,poundage){
        var url = Base.serverUrl + "pc/coupon/findReceivableCoupons";//coupon/getSelectableCoupons
        var condi = {};
        condi.login_token = g.login_token;
        condi.orderId = orderId;
        condi.customerId = customerId;
        condi.useMoney = poundage;
        $.ajax({
            url: url, data: condi,type: "POST", dataType: "json", context: this,
            success: function (data) {
                var status = data.success || false;
                if (status) {
                    var obj = data.list || [];
                    var RadioHtml = [];
                    for(var i = 0 ; i < obj.length ; i ++){
                        var rowData = obj[i];
                        if(rowData.couponType == "0"){
                            RadioHtml.push('<li><input name="sendCouponList" type="radio" id="couponId" value="' + rowData.id + '" />&nbsp;&nbsp;<label>名称:' + rowData.title + '</label></li>');
                        }else{
                            RadioHtml.push('<li><input name="sendCouponList" type="radio" id="couponId" value="' + rowData.id + '" />&nbsp;&nbsp;<label>名称:' + rowData.title + '</label></li>');
                        }
                    }
                    RadioHtml.push('<li><input name="sendCouponList" type="radio" id="couponId" value="0" /><label>&nbsp;&nbsp;自定义金额:</label><input style="margin-top: 10px;" type="text" id="couponMoney"></li>');
                    RadioHtml.push('<input type="hidden" id="customerId" value="' + customerId + '" />');
                    RadioHtml.push('<input type="hidden" id="poundage"  value="' + poundage + '" />');
					RadioHtml.push('<input type="hidden" id="orderId"  value="' + orderId + '" />');
                    $("#CoponUl").html(RadioHtml.join(''));
                } else {
                    var msg = data.message || "获取用户优惠券失败！";
                    Utils.alert(msg);
                }
            }
        });
    }
    //保存下发优惠券
    window.SaveSendCoupon=function(customerId){
        var condi = {};
        condi.orderId = $("#CoponUl > input[id='orderId']").val();
		condi.customerId = $("#CoponUl > input[id='customerId']").val();
        condi.couponId = $("#CoponUl li input[type='radio']:checked").val();
        condi.couponMoney = $("#CoponUl li input[id='couponMoney']").val();
        condi.poundage = $("#CoponUl > input[id='poundage']").val();
        condi.login_token = g.login_token;
        if(typeof(condi.couponId) === "undefined"){
            alert("请选择您要下发的优惠券！");
            return false;
        }
        if(condi.couponId == 0){
            if(condi.couponMoney == "") {
                alert("您选择的是自定义优惠券,请输入自定义金额！");
                return false;
            }
            if(isNaN(condi.couponMoney)){
                alert("自定义金额必须为数字,请重新输入！");
                $("li input[id='couponMoney']").focus();
                return false;
            }
        }
        if(confirm("你确认要执行下发优惠券操作吗?")) {
            g.httpTip.show();
            $('#SendCoupon').modal('hide');
            var url = Base.serverUrl + "pc/coupon/sendDownCoupon";//coupon/sendDownCoupon
            $.ajax({
                url: url, data: condi, type: "POST", dataType: "json", context: this,
                success: function (data) {
                    var status = data.success || false;
                    if (status) {
                        Utils.alert(data.message);
                    } else {
                        var msg = data.message || "下发优惠券失败";
                        Utils.alert(msg);
                    }
                    g.httpTip.hide();
                },
                error: function (data) {
                    g.httpTip.hide();
                }
            });
        }
    };
	
	
    //分页处理
    function countListPage(data) {
        var html = [];
        g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
        //g.totalPage = 1;
        //g.currentPage = 1;
        html.push('<div id="orderlistpage" class="inline pull-right page" style="position:fixed; right:30px;bottom: 30px;">');
        html.push(data.totalRowNum + ' 条记录' + g.currentPage + '/' + g.totalPage + ' 页');
        html.push('<a href="javascript:void(0);" class="page-next">下一页</a>');

        if (g.totalPage > 10) {
            if (g.currentPage >= 10) {
                var css = "color: #ff0000;";

                if ((g.totalPage - g.currentPage) >= 5) {
                    html.push('<a href="javascript:void(0)" >' + (g.currentPage - 4) + '</a>');
                    html.push('<a href="javascript:void(0)" >' + (g.currentPage - 3) + '</a>');
                    html.push('<a href="javascript:void(0)" >' + (g.currentPage - 2) + '</a>');
                    html.push('<a href="javascript:void(0)" >' + (g.currentPage - 1) + '</a>');
                    html.push('<a href="javascript:void(0)" style="' + css + '">' + (g.currentPage) + '</a>');
                }
                else {
                    //末尾少于5页
                    var len = 9 - (g.totalPage - g.currentPage);
                    for (var j = len; j >= 0; j--) {
                        if (j == 0) {
                            html.push('<a href="javascript:void(0)" style="' + css + '">' + (g.currentPage) + '</a>');
                        }
                        else {
                            html.push('<a href="javascript:void(0)" >' + (g.currentPage - j) + '</a>');
                        }
                    }
                }
                for (var i = 1; i < 6; i++) {
                    var np = g.currentPage + i;
                    if (np <= g.totalPage) {
                        html.push('<a href="javascript:void(0)" >' + np + '</a>');
                    }
                    else {
                        break;
                    }
                }

            }
            else {
                for (var i = 0; i < 10; i++) {
                    var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
                    html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
                }
            }
        }
        else {
            for (var i = 0; i < g.totalPage; i++) {
                var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
                html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
            }
        }
        html.push('</div>');

        return html.join('');
    }

    function pageClick(evt) {
        var index = $(this).index();
        var text = $(this).text() - 0 || "";
        if (text !== "") {
            if (g.currentPage === text) {
                Utils.alert("当前是第" + text + "页");
                return;
            }
            else {
                g.currentPage = text;
            }
        }
        else {
            var cn = $(this)[0].className;
            switch (cn) {
                case "page-pre-end":
                    //第一页
                    if (g.currentPage == 1) {
                        Utils.alert("当前是第一页");
                        return;
                    }
                    else {
                        g.currentPage = 1;
                    }
                    break;
                case "page-pre":
                    //前一页
                    if (g.currentPage > 1) {
                        g.currentPage--;
                    }
                    else {
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

        if (g.currentPage <= g.totalPage) {
            sendQueryOrderListHttp();
        }
        else {
            Utils.alert("当前是最后一页");
        }
    }

    //显示取消订单窗口
    window.ShowCancelWin = function(orderId){
        $("#cancelReason").attr("orderId",orderId);
        $('#CancelWin').modal('show');
    };
    window.SaveCancel = function(orderId){
        if(!confirm("您确定要取消此订单吗?")){return;}
        var orderId = $("#cancelReason").attr("orderId");
        var cancelReason = $("#cancelReason").val();
        if(orderId==""){
            alert("订单号非法请检查！");
            return false;
        }
        if(cancelReason==""){
            alert("取消原因不能为空！");
            return false;
        }
        var url = Base.serverUrl + "pc/order/cancelOrder";//order/cancelOrderController
        var condi = {};
        condi.login_token = g.login_token;
        condi.orderId = orderId;
        condi.cancelReason = cancelReason;
        $.ajax({
            url: url, data: condi,type: "POST", dataType: "json", context: this,
            success: function (data) {
                $('#CancelWin').modal('hide');
                var msg = data.message || "取消订单失败！";
                Utils.alert(msg);
            }
        });
    };

    //接受订单
    window.SaveAccept = function(orderId){
        if(!confirm("您确定要接受此订单吗?")){return;}
        if(orderId==""){
            alert("订单号非法请检查！");
            return false;
        }
        var url = Base.serverUrl + "pc/order/confirmOrder";//order/confirmOrder
        var condi = {};
        condi.login_token = g.login_token;
        condi.orderId = orderId;
        $.ajax({
            url: url, data: condi,type: "POST", dataType: "json", context: this,
            success: function (data) {
                var msg = data.message || "接受订单失败！";
                Utils.alert(msg);
            }
        });
    };
});