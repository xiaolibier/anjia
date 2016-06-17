$(function(){
	var g = {};
	g.zan = 0;//点赞数
	g.fangwen = 0;
	
	loding();
	//read_txt();
	read_database();
	
	$('.mod-nav.no-icon').bind('click',write_zan);
	/* 写入点赞 */
	function write_zan(){
		var condi = {};
		condi.channel = "789456321";
		condi.userPhone = getNum();
		condi.question1 = g.fangwen;
		condi.question2 = parseInt(g.zan)+1;
		var url = Base.serverUrl + "questionnaire/gydcwj";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var status = data.success || false;
				if(status){
					window.location.reload(true);
				}
				else{
					var msg = data.message || "获取失败";
					Utils.alert(msg);
				}
				
			},
			error:function(data){
			}
		});
	}
	/* 获取日期时间 */
	function getNum(){
		var Num=""; 
		for(var i=0;i<11;i++) 
		{ 
		Num+=Math.floor(Math.random()*10); 
		}
		return Num;
	}
	/* 写入访问量 */
	function write_database(num){
		var condi = {};
		condi.channel = "789456321";
		condi.userPhone = getNum();
		condi.question1 = num;
		condi.question2 = parseInt(g.zan);
		var url = Base.serverUrl + "questionnaire/gydcwj";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var status = data.success || false;
				if(status){
					
				}
				else{
					var msg = data.message || "获取失败";
					Utils.alert(msg);
				}
				
			},
			error:function(data){
			}
		});
	}	
	/* 读取访问量 */
	function read_database(){
		var condi = {};
		condi.channel = "789456321";
		condi.activityId = '1'
		var url = Base.serverUrl + "questionnaire/queryQuestionnaires";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"json",
			context:this,
			success : function(data){
				var success = data.success || false;
				if(success){
					var d = data.obj || [];
					var num = d[0].question1 || 0;//记录访问量
					var num2 = d[0].question2 || 1;//记录点赞数
					$('.count_user_get').html(num);
					$('.count_zan_num').html(num2);
					g.zan = num2;
					num = parseInt(num)+1;
					g.fangwen = num;
					write_database(num);
				}else{
					var msg = data.message || "失败";
					Utils.alert(msg);
				}
			},
			error:function(data){
			}
		});
	}					
	/* 读取txt文件数据 */
	function read_txt(){
		var condi = {};
		var url = "base.txt";
		$.ajax({
			url:url,
			data:condi,
			type:"POST",
			dataType:"text",
			context:this,
			success : function(d){
				var data = eval('('+d + ')') || {};
				var obj = data.obj || {};
				var html = '';
				var count = 0;//新上的商品量
				for(var i=0,len=obj.length;i < len;i++){
					var d = obj[i] || [];
					var list = d.list || [];
					var title = d.title || '无名';
					html += '<div class="modules-text"><div><section class="mod-text"><p style="text-align: center;">';
					html += '<strong><span style="font-size:20px;"><span style="color:#FF0000;">'+title+'</span></span></strong>';
					html += '</p></section></div></div>';
					html += '<div class="modules-goods"><div><section class="mod-goods-list"><ul class="goods-list clearfix style-small">';
					for(var j=0 , len2=list.length; j < len2; j++){
						var b = list[j] || [];
						var t = b.title || '无名';
						var img = b.img || 'loading_img.gif';
						var price = b.price || '0';
						html += '<li><a><div class="goods-image">';
						html += '<img class="lazy" src="common/img/'+img+'" style="display: inline;" /></div>';
						html += '<div class="goods-info"><p class="goods-title">'+t+'</p>';
						html += '<p class="goods-price">￥'+price+'</p>';
						html += '</div></a></li>';
						if(list.length != 0){count++;}
					}
					html += '</ul></section></div></div>';
				}
				$('.os_list_out').html(html);
				$('.count_num_2').html(count);
			},
			error:function(data){
			}
		});
	}
	/* 页面加载进度 */
	function loding(){
		var html = '';
		html += '<div class="common_loding_bg active">';
		html += '<div class="col-md-6">';
		html += '<div class="middle">';
		html += '<p>等一会儿</p>';
		html += '<div class="loader3">';
		html += '<span></span>';
		html += '<span></span>';
		html += '</div>';
		html += '</div>	';
		html += '</div>';
		html += '</div>';
		if(!$('.common_loding_bg').hasClass('active')){
			$('body').append(html);
		}else{
			$('.common_loding_bg').fadeIn(0);
		}
		setTimeout(function(){
			$('.common_loding_bg').fadeOut(300);
		},2000);
	}
	
	
	
	
	
	
	
	
	
	
	/* end */
});