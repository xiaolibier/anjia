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
		title[0] = '大哥跑这来嘚瑟 师傅机智';//标题
		title[1] = '美女的回答同伴都听不下去';
		title[2] = '大师最后也是自作自受哈哈';
		title[3] = '两个二货斗舞画面太搞笑';
		title[4] = '';
		title[5] = '';
		title[6] = '';
		title[7] = '';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/i03159hurqx_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/z0315w9gmc5_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/x0316u3gby5_496_280/0';
		poster[3] = 'http://shp.qpic.cn/qqvideo_ori/0/r0316v73f0x_496_280/0';
		poster[4] = '';
		poster[5] = '';
		poster[6] = '';
		poster[7] = '';
		//视频地址
		src[0] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/i03159hurqx.m701.mp4?vkey=EC887348E4F8E45664914654D6D70F687563B56787F4DE928D8AAE7B54CC1D3189A39DFCD03FD8A56ADD15A8D21FBFAA6345136A3AFE5D557AA995A1C472755DA48A30E2F051C842E564D6549B5740B73F8247F505CDEC34&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/z0315w9gmc5.m701.mp4?vkey=5F0520FCA34B51C19188D9B16FDC74E801EBA87CB050E34D26FC1AAE6FF181F78728F07D40A0899032B994F2160AEBF58E1105EB5B1B29F0214BC85BE3D795E24499FDC643AE5A6584A5C120A91C33429E6D1A8D2EA39516&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://123.125.86.30/vhot2.qqvideo.tc.qq.com/x0316u3gby5.m701.mp4?vkey=1110F1BB4B900A90881C995103A80145281B5E14CF1134CF1253BE1C8E951E4C7653256738EB0F51FF8A8246F5F84774FC6ABA269A7C883925B4F9D374EAA47EA751D626375AFA2F56BB445891CE4F0B2E20DD9C885AEA22&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = 'http://123.125.86.16/vhot2.qqvideo.tc.qq.com/r0316v73f0x.m701.mp4?vkey=04B271AE329B84DB13C0465FFD8EA81351E4B87D4801BA8C807E21C86168562846975E6C161DE949F0FDDA894EC9DBA9C913226D9AC40B1375F94AAF20C7E06D007063210FC6EBA561F821C729882D01A5BF2A5581603650&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
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