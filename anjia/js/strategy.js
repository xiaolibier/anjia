/**
 * file:个人资料
 * author:chenxy
*/
//页面初始化
$(function(){
	var g = {};
	g.customerId = "";
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.articleId = Utils.getQueryString("articleId") || "";
	g.httpTip = new Utils.httpTip({});

	g.totalPage = 1;
	g.currentPage = 1;
	g.pageSize = 15;

	g.qorderstatus = "";
	g.orderInfo = {};
	g.orderStatus = Utils.getQueryString("ostatus") || "";

	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
		//location.replace("../anjia/login.html");
	}
	else{
			
	}
	//获取全部列表
	if(g.articleId == ""){
		sendGetPaperList();
	}else{
		sendGetPaperContent();
	}

	//获取文章
	function sendGetPaperContent(){
		g.httpTip.show();
		var url = Base.serverUrl + "article/getArticleById";
		var condi = {};
		condi.articleId = g.articleId;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.obj || {};
					var html = "";
						var d = obj || [];
						var articleId = d.articleId || "";
						var articleTitle = d.articleTitle || "";
						var articleContent = d.articleContent || "";
						var articleKey = d.articleKey || "";
						var createTime = d.createTime || "";
						var picUrl = d.picUrl || "";
						var articleDescr = d.articleDescr || "";
						var articleType = d.articleType || "";
						var Atitle = articleType != '103801'? '装修知识' : '分期知识';
						var At = articleType != '103801'? 's2' : '';
						
						html+='<div class="sta_title '+At+'">'+Atitle+'</div>';
						html+='<div class="sta_list '+At+'">';
						html+='<div class="img_div"><img class="img" src="'+picUrl+'" /></div>';
						html+='<div class="content_t">';
						html+='<h4 class="t">'+articleTitle+'<span class="date">'+createTime+'</span></h4>';
						html+='<p class="text">';
						html+=articleContent+"";
						html+='</p>';
						html+='</div>';
						html+='</div>';
					
					$('#sta_text_content').html(html);
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
	
	//获取文章列表
	function sendGetPaperList(){
		g.httpTip.show();
		var url = Base.serverUrl + "article/queryArticle";
		var condi = {};
		//condi.login_token = g.login_token;
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success: function(data){
				var status = data.success || false;
				if(status){
					var obj = data.list || {};
					var html2='',html3='',h2=0,h3=0;
					html2+='<div class="sta_title">分期知识</div>';
					html3+='<div class="sta_title s2">装修知识</div>';
					for(var i=0,len=obj.length;i<len;i++){
						var  html = "";
						var d = obj[i] || [];
						var articleId = d.articleId || "";
						var articleTitle = d.articleTitle || "";
						var articleContent = d.articleContent || "";
						var articleKey = d.articleKey || "";
						var createTime = d.createTime || "";
						var articleDescr = d.articleDescr || "";
						var picUrl = d.picUrl || "";
						var articleType = d.articleType || "";
						var At = articleType != '103801'? 's2' : '';

						html+='<div class="sta_list '+At+'">';
						html+='<div class="img_div"><img class="img" art="缩略图" src="'+picUrl+'" /></div>';
						html+='<div class="content_t">';
						html+='<h4 class="t"><a href="javascript:;" onclick="checkMore('+articleId+')" class="more_btn">'+articleTitle+'</a><span class="date">'+createTime+'</span></h4>';
						html+='<p class="text">';
						html+=articleDescr+"";
						html+='</p>';
						html+='</div>';
						html+='</div>';
						if(articleType != '103801'){
							h3++;
							html3 += html;
						}else{
							h2++;
							html2 += html;
						}
						
					}
					html2 = h2 == 0 ? "" : html2;
					html3 = h3 == 0 ? "" : html3;
					$('#sta_text_list').html(html2+html3);
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
	
	window.checkMore = function(articleId){
		window.open('strategy_text.html?articleId='+articleId);
	}
	

});





