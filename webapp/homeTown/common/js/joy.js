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
		title[0] = '这把路人整的都懵了 太逗';//标题
		title[1] = '电梯里遇到个奇葩 笑喷了';
		title[2] = '懵圈中 美女太糗了哈哈';
		title[3] = '';
		title[4] = '';
		title[5] = '';
		title[6] = '';
		title[7] = '';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/m0316atspo0_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/j0316xlw68d_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/o03159ltmne_496_280/0';
		poster[3] = '';
		poster[4] = '';
		poster[5] = '';
		poster[6] = '';
		poster[7] = '';
		//视频地址
		src[0] = 'http://123.125.86.26/vhot2.qqvideo.tc.qq.com/m0316atspo0.m701.mp4?vkey=2A04A2F41204274EA8A81C638594A2F17B42146C24CB812F4C00CB4364DE7849B64A81005FD5CF7FDFC3DB1854A43914AF862E40EBF9EE882A3C9201EE972D400561BB16A22CB13C8140DE7C16CE929D8891500A163A790E&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://111.202.98.150/vhot2.qqvideo.tc.qq.com/j0316xlw68d.m701.mp4?vkey=3A05ACA5BD47CD9086AB33C9F4D704599976CA3E69746AA010F95814FA0951C48C563C249DF54D7CC6A7F54AD40A11137B1CB56613C039E08CFC7D54637FDC5D2EBDF3374221D295C6E6DC09803F8F9B235E7241518E7EE4&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://123.125.110.143/vhot2.qqvideo.tc.qq.com/o03159ltmne.m701.mp4?vkey=727FCCD2A2CE39E28EFCFAAC23A2781420064BEE36EFCE72D2C7A08BDCC58F6259E172AA7674521AED67BC39D03E2F9AF7D52EFFC39F01BF778A31DE30BFDE736282F1B4DE5EE7C953E6436A85D92258FF10D6B823E290CF&br=27&platform=2&fmt=auto&level=0&sdtfrom=v3010';
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
					var myDate = new Date();    
					var date = myDate.toLocaleDateString();//可以获取当前日期
					var num = d[0].question1 || 0;//记录访问量
					var num2 = d[0].question2 || 1;//记录点赞数
					$('.count_user_get').html('阅读 '+num);
					$('.count_zan_num').html(num2);
					$('#date_').html(date);
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