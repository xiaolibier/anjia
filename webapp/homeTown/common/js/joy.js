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
		title[3] = '街上遇高手 耍的太厉害';
		title[4] = '开门遇到女神问这样的问题';
		title[5] = '女友呆萌的可爱 笑喷了';
		title[6] = '男友这么体贴最后女友气疯';
		title[7] = '妹子叫你悠着点这下好玩不';
		title[8] = '姑娘感觉很无语吧哈哈';
		title[9] = '大妈学车爆笑百出 太逗了';
		title[10] = '开业仪式妹子这样也太拼了';
		title[11] = '老师上医院打针结果笑趴了';
		title[12] = '家长不得不防 孩子太能闹';
		title[13] = '让你瞧不起捡破烂的 糗了';
		title[14] = '这一刻简直了 迷之尴尬啊';
		title[15] = '小小年纪这么能耐 看服了';
		title[16] = '就这样做个快乐的吃货多好';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/i03159hurqx_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/z0315w9gmc5_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/x0316u3gby5_496_280/0';
		poster[3] = 'http://shp.qpic.cn/qqvideo_ori/0/u03168oi7vl_496_280/0';
		poster[4] = 'http://shp.qpic.cn/qqvideo_ori/0/i03172u2tsu_496_280/0';
		poster[5] = 'http://shp.qpic.cn/qqvideo_ori/0/l0317mebf4n_496_280/0';
		poster[6] = 'http://shp.qpic.cn/qqvideo_ori/0/w0317jw4m4r_496_280/0';
		poster[7] = 'http://shp.qpic.cn/qqvideo_ori/0/z03169pi9jp_496_280/0';
		poster[8] = 'http://shp.qpic.cn/qqvideo_ori/0/c0317ibrtot_496_280/0';
		poster[9] = 'http://shp.qpic.cn/qqvideo_ori/0/s0319ec4our_496_280/0';
		poster[10] = 'http://shp.qpic.cn/qqvideo_ori/0/y0317z21knb_496_280/0';
		poster[11] = 'http://shp.qpic.cn/qqvideo_ori/0/d0317z8cpmb_496_280/0';
		poster[12] = 'http://shp.qpic.cn/qqvideo_ori/0/z0317j1wy4r_496_280/0';
		poster[13] = 'http://shp.qpic.cn/qqvideo_ori/0/v0151snhuqp_496_280/0';
		poster[14] = 'http://shp.qpic.cn/qqvideo_ori/0/j0317zv7uzo_496_280/0';
		poster[15] = 'http://shp.qpic.cn/qqvideo_ori/0/z0317l7rac4_496_280/0';
		poster[16] = 'http://shp.qpic.cn/qqvideo_ori/0/o0145n4jksc_496_280/0';
		poster[17] = '';
		//视频地址
		src[0] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/i03159hurqx.m701.mp4?vkey=EC887348E4F8E45664914654D6D70F687563B56787F4DE928D8AAE7B54CC1D3189A39DFCD03FD8A56ADD15A8D21FBFAA6345136A3AFE5D557AA995A1C472755DA48A30E2F051C842E564D6549B5740B73F8247F505CDEC34&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/z0315w9gmc5.m701.mp4?vkey=5F0520FCA34B51C19188D9B16FDC74E801EBA87CB050E34D26FC1AAE6FF181F78728F07D40A0899032B994F2160AEBF58E1105EB5B1B29F0214BC85BE3D795E24499FDC643AE5A6584A5C120A91C33429E6D1A8D2EA39516&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://123.125.86.30/vhot2.qqvideo.tc.qq.com/x0316u3gby5.m701.mp4?vkey=1110F1BB4B900A90881C995103A80145281B5E14CF1134CF1253BE1C8E951E4C7653256738EB0F51FF8A8246F5F84774FC6ABA269A7C883925B4F9D374EAA47EA751D626375AFA2F56BB445891CE4F0B2E20DD9C885AEA22&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = 'http://111.202.98.150/vhot2.qqvideo.tc.qq.com/u03168oi7vl.m701.mp4?vkey=86F5C1393AE064EBDDDA2DA39C9FA8AE90EDC0F6319C08F9F1B7C673499FE34BCA6D9ABF402CD101C1BCECF7DADA136298E48E763DE662479184D80221774F78FC1FE9A98CB947A99596BAB05841735BD541D2198717B24B&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[4] = 'http://111.202.85.143/vhot2.qqvideo.tc.qq.com/i03172u2tsu.m701.mp4?vkey=A45372B7C1968A37DF8E5F5A2ED81691F2C6D53DBC00428AD595818BD918FE9CA17E2E69F2A4E655EB7CD20540765ED1FE5E58299929E441E54877D79668F74A6F0E3C913FA38F807B0995F4DB8B7895CADCB77869FABEAD&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[5] = 'http://111.202.85.147/vhot2.qqvideo.tc.qq.com/l0317mebf4n.m701.mp4?vkey=8889F3CA0FD0C92EBA6AAC6535AF7E56AE2D669E982C08D18C7F339C919625F891403287A10C157B5049157972347BE398F1561FF84A35A524156374DDCC27F836AC3935E336A29CE7B98BE1A224B381F76EDC4A9ED1A7D6&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[6] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/w0317jw4m4r.m701.mp4?vkey=EFB1D20A4DB20096D14845508654A455CC1C812AEFF34817697A51002B53795BCEFAC59E8E90D4F89B101A6F471CFD54F1E89FE757D7060C459913D1CCC732B14E376496D9E589BD66B77311812B5DFB89D2914E66C80D94&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[7] = 'http://111.202.85.150/vhot2.qqvideo.tc.qq.com/z03169pi9jp.m701.mp4?vkey=B2BF7F044B876F22A7F0AC1FF1722717F368131488C5C80E960212AE925E37A4D4D30DF9F3BC0B1B745AD769CFD4208DD5BF4EA17A03D59A4DD218BFA227E76CAAFDF766AFE20F2B907F285B68FDB914F99CBB21484A7A6C&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[8] = 'http://123.125.110.148/vhot2.qqvideo.tc.qq.com/c0317ibrtot.m701.mp4?vkey=04ADE87A1BDAB71D6BE4537CA666ECAFB8B52F63FEC24265C2E6868D5994F5CE05E0C78392AD03F48BED13E2F09B6B479EB891AEF0F6580E9DEF4BEF56168DDF3D40E045770EF7840E672EEBFF31BFC0B494A5B54BDF24E0&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[9] = 'http://111.202.85.145/vhot2.qqvideo.tc.qq.com/s0319ec4our.m701.mp4?vkey=6EC15C47C71612151309BBCD26179EA688B58B10B0A0D4CB297943F103AA8E9BA7A0C3FF2F2704E7907E3224E10BEFA686E5F4FC01237F5E35D274C501B902EB26269C9645D11AB9196A7C0DD06CD4F5FF05B488D9C17D33&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[10] = 'http://111.202.85.150/vhot2.qqvideo.tc.qq.com/y0317z21knb.m701.mp4?vkey=A385DF80B10C922E04472C00833A62538CD820321D790BA39D314164657A50D70751DF0F86C821ED052A2AE4079723ACAA8AD3DDA55CFF6F4454AEB53033BEB92660FA92F8A0570C670F604A7AACCAF336E500D6CC52112F&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[11] = 'http://123.125.110.142/vhot2.qqvideo.tc.qq.com/d0317z8cpmb.m701.mp4?vkey=61ACE121F43EC11E6553509DF1D9E046AA7E57794B1B94D1987252F57DD8CBFC0CB5EA86DD578115ED3D826CD7C35D2AD69FC86388AB738A731C25A1EAC4288D0EE5F0D5B289E848149718629E9F343B10F30138FDB98A84&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[12] = 'http://111.202.85.143/vhot2.qqvideo.tc.qq.com/z0317j1wy4r.m701.mp4?vkey=74717037ED2C7D0C50443633C5A2BE9B10E8C16273DC3EC9EF450661A9EEF0553D143C54869C2B2E117C169D27C36D5C4E6AC265D9E577C3B989386ADDCC27FA0A1E010C2D9A8D8F678DFA7198D977404196FB9A91293EC9&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
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