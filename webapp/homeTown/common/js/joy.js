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
		title[0] = '大哥这演的也太拼了';//标题
		title[1] = '看美女半天 一开口懵了';
		title[2] = '大姐这言语太犀利 笑趴了';
		title[3] = '男子这样做不合适呀哈哈';
		title[4] = '妹子你这有点为难哥们了';
		title[5] = '电影院碰到这货也真是够了';
		title[6] = '拥有这样的家庭太幸福';
		title[7] = '妹子洗头弄半天是这样 晕';
		title[8] = '大哥相亲这要求让妹子无奈';
		title[9] = '这节奏太可爱 被萌一脸';
		title[10] = '相亲心仪对象真面目太意外';
		title[11] = '大哥别怂啊 不是很嚣张么';
		title[12] = '家有一妻太霸气 老公被揍怕';
		title[13] = '让你瞧不起捡破烂的 糗了';
		title[14] = '这一刻简直了 迷之尴尬啊';
		title[15] = '小小年纪这么能耐 看服了';
		title[16] = '就这样做个快乐的吃货多好';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/u03015zr6wv_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/l0301f317td_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/c0300pkv8q2_496_280/0';
		poster[3] = 'http://shp.qpic.cn/qqvideo_ori/0/i03001mqakz_496_280/0';
		poster[4] = 'http://shp.qpic.cn/qqvideo_ori/0/z0318608rhp_496_280/0';
		poster[5] = 'http://shp.qpic.cn/qqvideo_ori/0/r03019v7fwy_496_280/0';
		poster[6] = 'http://shp.qpic.cn/qqvideo_ori/0/b0319g8tksw_496_280/0';
		poster[7] = 'http://shp.qpic.cn/qqvideo_ori/0/y0319vp20ly_496_280/0';
		poster[8] = 'http://shp.qpic.cn/qqvideo_ori/0/g0319r3co6m_496_280/0';
		poster[9] = 'http://shp.qpic.cn/qqvideo_ori/0/y0319zd85rx_496_280/0';
		poster[10] = 'http://shp.qpic.cn/qqvideo_ori/0/v0319u9opil_496_280/0';
		poster[11] = 'http://shp.qpic.cn/qqvideo_ori/0/e0320lhdt6t_496_280/0';
		poster[12] = 'http://shp.qpic.cn/qqvideo_ori/0/s0320xmnvvv_496_280/0';
		poster[13] = 'http://shp.qpic.cn/qqvideo_ori/0/v0151snhuqp_496_280/0';
		poster[14] = 'http://shp.qpic.cn/qqvideo_ori/0/j0317zv7uzo_496_280/0';
		poster[15] = 'http://shp.qpic.cn/qqvideo_ori/0/z0317l7rac4_496_280/0';
		poster[16] = 'http://shp.qpic.cn/qqvideo_ori/0/o0145n4jksc_496_280/0';
		poster[17] = '';
		//视频地址
		src[0] = 'http://111.202.98.153/vhot2.qqvideo.tc.qq.com/u03015zr6wv.m701.mp4?vkey=B8D53C37E678C393DF67BF671AA1E202776E9FA5A304A7CF8D570D8B4E4A92DEAB28923387DA7AA08594EB595BE5D58FC578DD82F9397FC2D034C5C6F62DACD7AC81FD00E4CC88770BDEDE6599CB8B09166A1CEBEF24D2F1&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://111.202.85.150/vhot2.qqvideo.tc.qq.com/l0301f317td.m701.mp4?vkey=2DDEFD55B8BD507C0E52F87C9EA9B9A93FC993599AC9C8C4AD03694243607D1A0818DB87BB73951BBFDAFEF48E84C5EFA3DCF1FC0A0C913692A837215890102E3554E198B26922188AAD4351E0D6DAE59EC0747E4ABA9510&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://111.202.85.153/vhot2.qqvideo.tc.qq.com/c0300pkv8q2.m701.mp4?vkey=D9EC6B1A5F523C3639FBB1EF56007AD46AE9825E94E77D4807BDE9248D9613287D96E2BEB8419871830A660C280AAEF5CA2850572719606BCF404A69C668FBDBB79D7D42FF108143557A0557ADB9ED40E6B1FA0F7CB02FA3&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = 'http://123.125.110.147/vhot2.qqvideo.tc.qq.com/i03001mqakz.m701.mp4?vkey=1E966C7F9515C5C9CF5D941B5D34CDEB9A66BC891AE753DC080B41C053F512985A02860543A9CFB1F656A0068CD7A492FE0FA7604F9E4EB2FFEB13CD94BC7D71221AC1D7CE4687D32DAD3EC322F1CC97EF9D33E108C4DFB2&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[4] = 'http://111.202.85.151/vhot2.qqvideo.tc.qq.com/z0318608rhp.m701.mp4?vkey=7A053A01A5580B303A0D4F0EE23E17BDE60B2E57878A5C2C3FEF0FAC19342EDFAF640609595E15EC6CB15830C22B3C43FEE59366588E0E1EC9EB4DA0DC084698C5C2936139D002C10E4A1F7D175B87627C01318509A42F98&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[5] = 'http://111.202.98.150/vhot2.qqvideo.tc.qq.com/r03019v7fwy.m701.mp4?vkey=22E9807012AFB84AC389A06D1B100A6437612518E6626934A0D48039F7F3F07CF29BA1165B79FFADE6B25BD0A74C1304FCE49341FD4ABAA3DC0BD34A053592B0AEDF87C41B6C9B488A97B1B3981B06CE7B7A0DCA9724FFC6&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[6] = 'http://123.125.110.148/vhot2.qqvideo.tc.qq.com/b0319g8tksw.m701.mp4?vkey=D4A6CD36CA0FAB2AC6F15AF42348F6E5087B6D484B45D5A28E68DC131C6E5E5C001C6B3BEC9B3CBCEA77A3F1E2A6DAD7B3FAED1D16DB0119841D2DC7EE2AE5BE8F146B803ACB97230DCFAC6D1FBFF6713A4DA3AC14EEC922&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[7] = 'http://111.202.85.151/vhot2.qqvideo.tc.qq.com/y0319vp20ly.m701.mp4?vkey=66B5DDF704861F62EB7A9516F8608548EAA34AF53CF779AFE8CCA92625567F9E307E5DAD51A440B6B42055509589880E95F70599EF04FB55047EE32BD4C2A772D6EEF4CF4B7389931CD6C93555B54DA35F350FFEA52FF23D&br=27&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[8] = 'http://111.202.85.156/vhot2.qqvideo.tc.qq.com/g0319r3co6m.m701.mp4?vkey=6E3DBBA708A1F91D101066A7B6C107E37E725D25726A05A04D033B797D002B4CC4B2BBC9F4BC8AD9AA454F5D1ED0D6E3DBB79FE6C132E3D454358C92A479244BE02B9D881A36F1E5B4EFD483A71AD18A3EF7496B9D86257F&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[9] = 'http://123.125.86.21/vhot2.qqvideo.tc.qq.com/y0319zd85rx.m701.mp4?vkey=99EB3E695A51F45EC8CAFED2B0C2FF86ADB20B5E529A1D5AA1AFE97C5215DB9DE76D6BF313637C95F84A17755586661B2532F65B6B850B5F68F37DDF0C160FC8E0AD9EF117E0E306A25C6C94D4943C1AB43C4E66D0898DFA&br=26&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[10] = 'http://123.125.110.143/vhot2.qqvideo.tc.qq.com/v0319u9opil.m701.mp4?vkey=3CDD9E0AD1D3D058427E96355DE17AB0770638FAD3FEAB32D3698702C3E1E44096BED246A9A5F92BCB74E266E38881F5B53D80C1008F89C56824130FD84EDBBF3DBFCE99C7AD36E140EDA48E4DD3692D85538CF9FBE90CC3&br=26&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[11] = 'http://111.202.98.154/vhot2.qqvideo.tc.qq.com/e0320lhdt6t.m701.mp4?vkey=ACE7F15E0BAF6C1636C77B884E8C1649CD171B1C5E6109E0089258B9A1527237FF808D5263AD60951254A9642C024D093EE1105AAF31413AC47815BE91F86FA9BEBC1B898C445EEE82C2C5E4260118DF9E4650EEB7B87870&br=25&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[12] = 'http://111.202.98.143/vhot2.qqvideo.tc.qq.com/s0320xmnvvv.m701.mp4?vkey=B4219B335F5840C1748F278C1F0FC52CF3B2EDEF609AE6CCE3EC46769B0D4BB41885AF9D19DD3D8B7150E5D1F0FECD7CFB4C0E3A9BAD671F69E9F1BFACEF794ECE162B41155734E47D68572AF657434EABDED4C47F439D81&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[13] = 'http://111.202.85.151/vhot2.qqvideo.tc.qq.com/v0151snhuqp.mp4?vkey=959B1387F9ABB4A2F0695909D6CD9C1E3FF00DF0FFFCEF81E4CE75A90BC91DCD35B6CAABF2FBCB407086A073EC1D888D728FEA943BA921590356C277F62CE4CCCD203184BE2078B3399C049CA4C427C7270A9490D25E7C0F&br=60&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[14] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/j0317zv7uzo.m701.mp4?vkey=5118093F394F285A4C238C0FAE46D8D35158F17F7732984EA62811FA9DF1D189E196B707EF20DD88B863E7C105E733C486902633BB70D8984913FFFC23C8E6A9F87196A85566071AADBEB2AE0372CDC4BF5740B97C670279&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[15] = 'http://123.125.110.145/vhot2.qqvideo.tc.qq.com/z0317l7rac4.m701.mp4?vkey=703796BB7079E60A4B7D77412424838CE3DD21536214F7750F42737E6BEF296F645828281F2FB2CBF75AE6F00759D0F6516553962F20C45481DC1194278A2B5762382249348320661839C61D71AC7888F86E218A31E7D493&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[16] = 'http://123.125.86.18/vhot2.qqvideo.tc.qq.com/o0145n4jksc.m701.mp4?vkey=569DC6A0A6A0C8DBE2CC2DA0C52733A37421D1BE5D4068194B1FC8F6C3746D65B46EFFA608E2494C39F274C97D2C8A7D7BB7F8CA003A5D7A0ADB75CD47D4FDAA32A6DD727A92B10CC4B332144C90A552EC5F4826FEF5E3AD&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[17] = '';
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