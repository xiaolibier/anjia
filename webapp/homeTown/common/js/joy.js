$(function(){
	var g = {};
	g.zan = 0;//点赞数
	g.fangwen = 0;
	var page_id = Utils.getQueryString("page") || "";
	g.channel = '76543210';
	read_database();
	set_video();
	$('.mod-nav.no-icon').bind('click',write_zan);
	
	/* 配置视频参数 */
	function set_video(){
		var title = [],poster = [],src = [];
		title[0] = '这是个秀长腿的季节悠着点';
		title[1] = '这就是这个季节，说多是泪';
		title[2] = '公交车上遇到这样的女乘客';
		title[3] = '';
		title[4] = '';
		title[5] = '';
		title[6] = '';
		title[7] = '';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/q030330lgha_496_280/0';
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/h0303y6e36l_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/y0303mdvdm8_496_280/0';
		poster[3] = '';
		poster[4] = '';
		poster[5] = '';
		poster[6] = '';
		poster[7] = '';
		src[0] = 'http://111.202.85.153/vhot2.qqvideo.tc.qq.com/q030330lgha.m701.mp4?vkey=6F7AA6352A5780040DA366FF27D7589113F855EDB97572CC303F75A456EF12024F9FAA0ABE8275209FD1F938C4BC9A4872B6245B4A6A465C54551756BA17FB9C85C61CDDCB3002FCD87E27624A6059498D31F2256B9716A2&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://111.202.98.150/vhot2.qqvideo.tc.qq.com/h0303y6e36l.m701.mp4?vkey=90E56A2F6CC176533CDACB39AAD1FF1AF80A38C45445FFBFEB1B4FEF997B378F0B0769EF42F6AD403382780C141731B6BF3711EF1B73168AEF0A1B38E00DCEEAE82D4823D1841212226B7F90F94EC95B5C2C9A76AFA9AC8E&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://123.125.86.25/vhot2.qqvideo.tc.qq.com/y0303mdvdm8.m701.mp4?vkey=CE86346C9902BD514D2716C76E56F2DDB2CAF077E545E576939C5705B50BC5E0F64DDFE8745552991E91F014399FF75BFC898CC9C57666B22CE1542FE3627A7613A79C8A89271422898F06893F52094591BA4A357CE4EB21&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = '';
		src[4] = '';
		src[5] = '';
		src[6] = '';
		src[7] = '';
		$('#playVideo').attr('poster',poster[page_id]);
		//$('.zhuan_img img').attr('src',poster[page_id]);
		$('#playVideo source').attr('src',src[page_id]);
		$('.title_title,.j_title').html(title[page_id]);
		
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