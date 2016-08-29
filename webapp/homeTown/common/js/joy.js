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
		title[0] = '女生的准备工作看着都累';//标题
		title[1] = '见网友还需谨慎呐哈哈';
		title[2] = '这小屁孩太精明 坑货哈哈';
		title[3] = '吃个饭把旁边的美女都盯上';
		title[4] = '男子这样对待妻子说不过去';
		title[5] = '小孩也太厉害了 开拖拉机';
		title[6] = '男子的要求妹子居然答应了';
		title[7] = '美女面对搭讪回应太机智';
		title[8] = '小姑娘这么做生意真不一般';
		title[9] = '大哥遇上碰瓷这样处理太牛';
		title[10] = '相亲心仪对象真面目太意外';
		title[11] = '大哥别怂啊 不是很嚣张么';
		title[12] = '家有一妻太霸气 老公被揍怕';
		title[13] = '摊主说出身份后笑喷了';
		title[14] = '坑货一张嘴太欠揍了 笑喷';
		title[15] = '这次旅途遇到这空姐也是醉';
		title[16] = '你们这样捉弄客服真的好嘛';
		poster[0] = 'http://shp.qpic.cn/qqvideo_ori/0/s03216vmzcy_496_280/0';//背景图片地址
		poster[1] = 'http://shp.qpic.cn/qqvideo_ori/0/e0320owvq08_496_280/0';
		poster[2] = 'http://shp.qpic.cn/qqvideo_ori/0/e0321d07udy_496_280/0';
		poster[3] = 'http://shp.qpic.cn/qqvideo_ori/0/o03203k1etd_496_280/0';
		poster[4] = 'http://shp.qpic.cn/qqvideo_ori/0/j0322gwcbx0_496_280/0';
		poster[5] = 'http://shp.qpic.cn/qqvideo_ori/0/p0321gyquln_496_280/0';
		poster[6] = 'http://shp.qpic.cn/qqvideo_ori/0/y0322ag3007_496_280/0';
		poster[7] = 'http://shp.qpic.cn/qqvideo_ori/0/e0320wu2u3i_496_280/0';
		poster[8] = 'http://shp.qpic.cn/qqvideo_ori/0/u03227ha4zw_496_280/0';
		poster[9] = 'http://shp.qpic.cn/qqvideo_ori/0/v0321sfw5r5_496_280/0';
		poster[10] = 'http://shp.qpic.cn/qqvideo_ori/0/v0319u9opil_496_280/0';
		poster[11] = 'http://shp.qpic.cn/qqvideo_ori/0/e0320lhdt6t_496_280/0';
		poster[12] = 'http://shp.qpic.cn/qqvideo_ori/0/s0320xmnvvv_496_280/0';
		poster[13] = 'http://shp.qpic.cn/qqvideo_ori/0/c0319frvv3y_496_280/0';
		poster[14] = 'http://shp.qpic.cn/qqvideo_ori/0/i0320e2874v_496_280/0';
		poster[15] = 'http://shp.qpic.cn/qqvideo_ori/0/x0320mezeys_496_280/0';
		poster[16] = 'http://shp.qpic.cn/qqvideo_ori/0/q03205terv4_496_280/0';
		poster[17] = '';
		//视频地址
		src[0] = 'http://111.202.85.151/vhot2.qqvideo.tc.qq.com/s03216vmzcy.m701.mp4?vkey=EDA71E5E62B528705A9C7CE400C9EFC7F4A107414F0BBF23DEC75D8D60BF065452B60D352FD5DF91AA182133D38B17E2A5A2DEDD92452D8300A2BD3F39664C208E07C43857EBEE2DC0A6D56DB1CE9185D39F56601E1893B1&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[1] = 'http://111.202.85.150/vhot2.qqvideo.tc.qq.com/e0320owvq08.m701.mp4?vkey=72B64D3157A280971AC30A719FBAF29A706A1AF012438D68A01A74F8B6A28981277EB22F8E32544412A6D335353465CDD0E9E6A35FF1EE02412B030A616C4CBF8D527BCC0CF9D58A61F329691779BEEAD041FD2CF4C4112C&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[2] = 'http://123.125.110.144/vhot2.qqvideo.tc.qq.com/e0321d07udy.m701.mp4?vkey=1DA85152E359207A0BF778B72AB348FC3E9D4AEDCD5D569039E72119EEDF38ED970E44D36BFC12BF27DEF42D50B7DB0FCDF15FAF01D2FCE5FEC63D1D7FF7380EB4E7652C83F719545CE29E0A6DA0C9A617D4C6FAC982D23C&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[3] = 'http://111.202.98.149/vhot2.qqvideo.tc.qq.com/o03203k1etd.m701.mp4?vkey=17DB1B557F125F8A9333A1CDD01E716F5E75FDBDD79B44E19AD64A55E635D1B0EC5B75E7A0D80C1EA6D66D8166AF4715848D14D6B3A865468242ACEAC5741437B2CA8B44E854889DB48CB2E2AD6909B8B36BCC021C2381B7&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[4] = 'http://111.202.85.145/vhot2.qqvideo.tc.qq.com/j0322gwcbx0.m701.mp4?vkey=4F961DE92087101DBFD6E21552022BA0FC93B8A711B6B6621B1C558F4EC7743925C2E00565FE22AC65BA2A05D5C159732AFB1673212E5951EF11A869CFEA86EB02638C457CFAB2866EF5D172E3FBA1C8057BC8712277AAFF&br=27&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[5] = 'http://111.202.98.144/vhot2.qqvideo.tc.qq.com/p0321gyquln.m701.mp4?vkey=632F1FA6C339A0904E726B62CB03693C44BEAFFC78BE79294049BAB928BAA6E734F97D20618EA8E3722C9D45BB87BE9A7112DBCE31142EC714A541E5FF4FEC3BE647F6D54B74D0895FC307F5E51C4A92C894B594D0563F73&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[6] = 'http://123.125.86.25/vhot2.qqvideo.tc.qq.com/y0322ag3007.m701.mp4?vkey=C1EFA3AABA34F02C1F8DF432183CB9942BA94842F3C528DCE2160A8389EE7CD8BF05643E97BC4E14A2FED98CA9064A70B5F0A92F6EF698B9BB9D92710F698189BFA32BE015E8C7136F0A1DB18421111FEE8D63D7276C7326&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[7] = 'http://111.202.98.148/vhot2.qqvideo.tc.qq.com/e0320wu2u3i.m701.mp4?vkey=E086BAAE3A52C5A9F093AFD64DE4395A58B2777199AAA62B19CF980932A972484FF99A63B0C26DEC7B406A7BDBEC514AA153DAE4C6BF08E54EAFEF24208FEEE05140E47A87A6AAA6B319B07DD50718085AD9BB94E3713756&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[8] = 'http://123.125.86.23/vhot2.qqvideo.tc.qq.com/u03227ha4zw.m701.mp4?vkey=324A72963EBB97F14CBDF6E4AB7D6149BF296FF353FB4F984BAD9BA552B81BE7DC20B5FEE265CFA818D92C0BC965A77AA8443DD45AD81E62CFC6F6E6A08C61D3EC7425902BCA5E757D7C17A9F10993076FA49EEC0649767C&br=24&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[9] = 'http://123.125.86.23/vhot2.qqvideo.tc.qq.com/v0321sfw5r5.m701.mp4?vkey=DE3CF8034A12C76317D2CE029BAFD0EF2CA6AFB1BA3663BF27D325271FAC86B8729B1DF031A10BAE9F89D047887C9A5628EA29CB18A46981E22D3D20ADBB5A7CA2004F114CA86E196B78B62340CF70842846503829EDEB62&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[10] = 'http://123.125.110.143/vhot2.qqvideo.tc.qq.com/v0319u9opil.m701.mp4?vkey=3CDD9E0AD1D3D058427E96355DE17AB0770638FAD3FEAB32D3698702C3E1E44096BED246A9A5F92BCB74E266E38881F5B53D80C1008F89C56824130FD84EDBBF3DBFCE99C7AD36E140EDA48E4DD3692D85538CF9FBE90CC3&br=26&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[11] = 'http://111.202.98.154/vhot2.qqvideo.tc.qq.com/e0320lhdt6t.m701.mp4?vkey=ACE7F15E0BAF6C1636C77B884E8C1649CD171B1C5E6109E0089258B9A1527237FF808D5263AD60951254A9642C024D093EE1105AAF31413AC47815BE91F86FA9BEBC1B898C445EEE82C2C5E4260118DF9E4650EEB7B87870&br=25&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[12] = 'http://111.202.98.143/vhot2.qqvideo.tc.qq.com/s0320xmnvvv.m701.mp4?vkey=B4219B335F5840C1748F278C1F0FC52CF3B2EDEF609AE6CCE3EC46769B0D4BB41885AF9D19DD3D8B7150E5D1F0FECD7CFB4C0E3A9BAD671F69E9F1BFACEF794ECE162B41155734E47D68572AF657434EABDED4C47F439D81&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[13] = 'http://111.202.98.150/vhot2.qqvideo.tc.qq.com/c0319frvv3y.m701.mp4?vkey=93DE451472B6C40207D4411BFB441AE856AC58E5BA29F296A5A4DA4468C2831FD139159161744E1DDC7572DDB053D2755FCF98CB10F8590DE1674AFAB3652ECB814BF8F3180567D2B86FEE573845EB0639CD916ACFD5FB86&br=22&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[14] = 'http://111.202.98.155/vhot2.qqvideo.tc.qq.com/i0320e2874v.m701.mp4?vkey=402673FBD7A1535D7E3124355D7D6405EA160204A1F7F7F503C64EC4C4F37C6AD511FF0694608AA14B073E42A5CB60FD5A2694DFACECFADD813AAD66ADC374C90695A18287BEE516C559A99A31A75FEA1B0A75083738718F&br=29&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[15] = 'http://123.125.86.15/vhot2.qqvideo.tc.qq.com/x0320mezeys.m701.mp4?vkey=CAD156878A40EB68CFD5C8B1C672AE050C549E8BDA3E87C1F5CDC96D69FE00F7F626A73967754B56F19A4F6B2C2076236A61DF44C73F3306C282C9A0E56EA0B80A321205AD3FFF21986E6615D94D0F1B4359E9296ACE23C7&br=28&platform=2&fmt=auto&level=0&sdtfrom=v3010';
		src[16] = 'http://123.125.86.22/vhot2.qqvideo.tc.qq.com/q03205terv4.m701.mp4?vkey=BB8087FE93145802D0BAB18E1AE63FDEE90386C61FE4FCB146846E0CCCBB8542094A614D7F8C61483191C5C556320B247A7306C36DD371E82B1DB9BDF54684BA933D7D9943BBD9DB40153D8C6D80267602710BE51B002F62&br=27&platform=2&fmt=auto&level=0&sdtfrom=v3010';
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