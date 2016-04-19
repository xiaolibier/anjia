/**
 * author:hmgx
 * function:订单时间节点
 * data:2016-3-9
 */

//页面初始化
$(function () {
    var g = {};
    g.phone = "";
    g.imgCodeId = "";
    g.sendCode = false;
    g.sendTime = 60;
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
        //getBranchCompany();
        queryOrderList();
    }

    $("#querybtn").bind("click", queryOrderList);

    function queryOrderList() {
        g.currentPage = 1;
        sendQueryOrderListHttp();
    }

    function getBranchCompany() {
        g.httpTip.show();
        var url = Base.serverUrl + "subsidiary/getSubsidiarys";
        var condi = {};
        condi.pageSize = 1000;
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                var list = data.list || {};
                var option = [];
                option.push('<option value="">全部</option>');
                for (var i = 0; i < list.length; i++) {
                    var d = list[i];
                    option.push('<option value="' + d.id + '">' + d.name + '</option>');
                }
                $("#subsidiaryId").html(option.join(''));
                g.httpTip.hide();
            }, error: function (data) {
                g.httpTip.hide();
            }
        });
    }

    function sendQueryOrderListHttp() {
        g.httpTip.show();
        var url = Base.serverUrl + "oplog/getOperateLogByReportName";
        var condi = {};
        condi.login_token = g.login_token;
        condi.currentPageNum = g.currentPage;
        condi.pageSize = g.pageSize;
        condi.reportName = "selectOrderTimeFrame";
        condi = Hmgx.getQueryParamet("CX", condi);
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                //console.log("sendQueryOrderListHttp",data);
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
        html.push('<th>申请人姓名</th>');
        html.push('<th> 订单编号</th>');
        html.push('<th> 进件时间</th>');
        html.push('<th> 风控初审时间</th>');
        html.push('<th> 风控复审时间</th>');
        html.push('<th> 风控终审时间</th>');
        html.push('<th> 用户确认时间</th>');
        html.push('<th> 缴纳服务费时间</th>');
        html.push('<th> 财务放款时间</th>');
        html.push('<th> 终止合同时间</th>');
        html.push('<th> 操作</th>');
        html.push('</tr>');
        var obj = data.list || [];
        for (var i = 0, len = obj.length; i < len; i++) {
            var d = obj[i];
            html.push('<tr>');
            html.push('<td>' + (d.applicantName || "") + '</td>');
            html.push('<td>' + (d.orderId || "") + '</td>');
            html.push('<td>' + (d.editCompleteTime || "") + '</td>');
            html.push('<td>' + (d.t1 || "") + '</td>');
            html.push('<td>' + (d.t2 || "") + '</td>');
            html.push('<td>' + (d.t3 || "") + '</td>');
            html.push('<td>' + (d.confirmTime || "") + '</td>');
            html.push('<td>' + (d.realRepaymentTime || "") + '</td>');
            html.push('<td>' + (d.loanTime || "") + '</td>');
            html.push('<td>' + (d.finishContractTime || "") + '</td>');
            html.push('<td><button onclick="modal1(' + d.orderId + ')" class="btn btn-success" type="button">支付时间点</button>&nbsp;&nbsp;<button onclick="modal2(' + d.orderId + ')" class="btn btn-success" type="button">还款时间点</button></td>');
            html.push('</tr>');
        }
        html.push('</table>');
        var pobj = data.obj || {};
        if (obj.length > 0) {
            var page = countListPage(pobj);
            html.push(page);
        } else {
            Utils.alert("没有订单数据");
        }
        $("#orderlist").html(html.join(''));
        $("#orderlistpage a").bind("click", pageClick);
    }

    function countListPage(data) {
        var html = [];
        g.totalPage = Math.ceil(data.totalRowNum / data.pageSize);
        //g.totalPage = 1;
        //g.currentPage = 1;
        html.push('<div id="orderlistpage" class="inline pull-right page">');
        html.push(data.totalRowNum + ' 条记录' + g.currentPage + '/' + g.totalPage + ' 页');
        html.push('<a href="javascript:void(0);" class="page-pre">上一页</a>');
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

            } else {
                for (var i = 0; i < 10; i++) {
                    var css = (i + 1) == g.currentPage ? "color: #ff0000;" : "";
                    html.push('<a href="javascript:void(0)" style="' + css + '">' + (i + 1) + '</a>');
                }
            }
        } else {
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
        } else {
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

    //导出
    window.OutXls = function () {
        var ParamObj = {};
        ParamObj.login_token = g.login_token;
        Hmgx.serializeDownload(Base.serverUrl + "order/getUserConsumptionControllerExport", "CX", ParamObj);
    };

    //用户申请支付
    window.modal1 = function(orderId){
        g.httpTip.show();
        var url = Base.serverUrl + "/oplog/getOperateLogByReportName";
        var condi = {};
        condi.login_token = g.login_token;
        condi.orderId = orderId;
        condi.reportName = "selectOrderTimeByPayTrade";
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                var status = data.success || false;
                if (status) {
                    var html = [];
                    html.push('<table class="table table-bordered table-hover definewidth" ><thead>');
                    html.push('<tr>');
                    html.push('<th>放款顺序</th>');
                    html.push('<th>放款时间</th>');
                    html.push('</tr>');
                    var obj = data.list || [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        var d = obj[i];
                        html.push('<tr>');
                        html.push('<td>' + (d.description || "") + '</td>');
                        html.push('<td>' + (d.realLoanTime || "") + '</td>');
                        html.push('<tr>');
                    }
                    $("#modal1List").html(html.join(''));
                    $('#modal1').modal('show');
                } else {
                    var msg = data.message || "获取用户申请支付数据失败!";
                    Utils.alert(msg);
                }
                g.httpTip.hide();
            },
            error: function (data) {
                g.httpTip.hide();
            }
        });
    };

    //还款时间点
    window.modal2 = function(orderId){
        g.httpTip.show();
        var url = Base.serverUrl + "/oplog/getOperateLogByReportName";
        var condi = {};
        condi.login_token = g.login_token;
        condi.orderId = orderId;
        condi.reportName = "selectOrderTimeByPayRecord";
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                var status = data.success || false;
                if (status) {
                    var html = [];
                    html.push('<table class="table table-bordered table-hover definewidth" ><thead>');
                    html.push('<tr>');
                    html.push('<th>订单期数</th>');
                    html.push('<th>还款时间点</th>');
                    html.push('</tr>');
                    var obj = data.list || [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        var d = obj[i];
                        html.push('<tr>');
                        html.push('<td>' + (d.repaymentTimes || "") + '期</td>');
                        html.push('<td>' + (d.realRepaymentTime || "") + '</td>');
                        html.push('<tr>');
                    }
                    $("#modal2List").html(html.join(''));
                    $('#modal2').modal('show');
                } else {
                    var msg = data.message || "获取用户申请支付数据失败!";
                    Utils.alert(msg);
                }
                g.httpTip.hide();
            },
            error: function (data) {
                g.httpTip.hide();
            }
        });
    };
});