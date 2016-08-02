$(document).ready(function(){
	var g = {};
	g.page_id = Utils.getQueryString("page") || "";
	set_video();
	g.zan = 0;//点赞数
	g.fangwen = 0;
	g.channel = '76543210';
	read_database();
	$('.mod-nav.no-icon').bind('click',write_zan);
	
	/* 配置视频参数 */
	function set_video(){
		
		var title = [],poster = [],src = [];
		title[0] = '乞丐也难当 太逗全场哄笑';//标题
		title[1] = '美女这身材比例 实属罕见';
		title[2] = '取了这老婆 大哥心里苦啊';
		title[3] = '';
		title[4] = '';
		title[5] = '';
		title[6] = '';
		title[7] = '';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/g0315ji2682_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/h0314l90ria_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/i031530k1y6_496_280/0';
		poster[3] = '';
		poster[4] = '';
		poster[5] = '';
		poster[6] = '';
		poster[7] = '';
		//视频地址
		src[0] = 'http://111.202.98.148/vhot2.qqvideo.tc.qq.com/g0315ji2682.m701.mp4?vkey=E49C6FBBAD40A17ED476436902B06AC5E3EFBC62BFE5A05A9412558CA1F370D3FA042238E990AE60070B8EE856AA53820C571C614C2E7062715DC6B97302830771320CC16E732DA1BE9416B0CCF31B5543DBF3AAFB40D7D1&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://123.125.110.147/vhot2.qqvideo.tc.qq.com/h0314l90ria.m701.mp4?vkey=0592D3E02625DC96456CED2BE382265693B6473C60C7B808CC06C93FCDA37ED2851E57D4D4F70DD95AB3ADDA0C36B03542CDA53FC6128B81DE2F0A74FE30F1E17FD8D128E8E04ACFE2CBDD26C889113E29FB30908B073248&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://111.202.85.147/vhot2.qqvideo.tc.qq.com/i031530k1y6.m701.mp4?vkey=24646434DCFD022DDEFF8D69FE4240910405CE0BBBDC916B99ACD6C9FA89E2DE805A29B87E5474094913224DDF28D687153238FC22DF59D371D3F4FA5FD434853B38E2FF8C1223104E6D846A37F975BA251F6CF52EC519FE&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = '';
		src[4] = '';
		src[5] = '';
		src[6] = '';
		src[7] = '';
		$('#playVideo').attr('poster',poster[g.page_id]);
		//$('.zhuan_img img').attr('src',poster[g.page_id]);
		$('#playVideo').attr('src',src[g.page_id]);
		$('.title_title,.j_title').html(title[g.page_id]);
	}
	
	/* 写入点赞 */
	function write_zan(){
		var condi = {};
		condi.channel = g.channel;
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
		condi.channel = g.channel;
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
		condi.channel = g.channel;
		condi.activityId = '1';
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
					$('.count_user_get').html('阅读 '+num);
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
	/* end */
});