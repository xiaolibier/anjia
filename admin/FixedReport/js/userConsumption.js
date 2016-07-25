/**
 * author:hmgx
 * function:用户消费画像
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
        getBranchCompany();
        queryOrderList();
    }

    $("#querybtn").bind("click", queryOrderList);

    function queryOrderList() {
        g.currentPage = 1;
        sendQueryOrderListHttp();
    }

    function getBranchCompany(){
        g.httpTip.show();
        var url = Base.serverUrl + "common/subsidiary/findSubsidiarys";
        var condi = {};
        condi.pageSize = 1000;
        $.ajax({
            url: url, data: condi, type: "POST", dataType: "json", context: this,
            success: function (data) {
                var list = data.list || {};
                var option = [];
                option.push('<option value="">全部</option>');
                for(var i = 0;i< list.length;i++){
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
        var url = Base.serverUrl + "pc/report/getUserConsumptionByPcAction";//order/getUserConsumptionController
        var condi = {};
        condi.login_token = g.login_token;
        condi.currentPageNum = g.currentPage;
        condi.pageSize = g.pageSize;
        condi = Hmgx.getQueryParamet("CX",condi);
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
        var obj = data.list || [];
        for (var i = 0, len = obj.length; i < len; i++) {
            var d = obj[i];
            html.push('<tr>');
			if(i == 0){
				 for (var a = 0, len2 = d.length; a < len2; a++) {
					 html.push('<th>' + d[a] + '</th>');
				 }
			}else{
				for (var b = 0, len3 = d.length; b < len3; b++) {
					 html.push('<td>' + d[b] + '</td>');
				 }
			}
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

    window.OutXls = function(){
        var ParamObj={};
        ParamObj.login_token = g.login_token;
        Hmgx.serializeDownload(Base.serverUrl  + "pc/report/getUserConsumptionExportAction","CX",ParamObj);//order/getUserConsumptionControllerExport
    }
});