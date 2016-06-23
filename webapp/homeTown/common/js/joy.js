$(function(){
	var g = {};
	g.zan = 0;//点赞数
	g.fangwen = 0;
	var gs = "{	'obj':[{'title':'二师弟开发网站','text':'','list':[{'id':'1','sell':'1','title':'网站开发 电脑网站 手机网站 微信微官网等','img':'1447321487.jpg','img2':'1-16022915514N15.jpg','price':'10.00'},{'id':'2','sell':'2','title':'app开发 ios app开发 android app开发等(上海复大医院案例)','img':'wei15.gif','img2':'1-150R9135K80-L.jpg','price':'10.00'},{'id':'3','sell':'5','title':'微信开发 微网站开发 商城开发','img':'u421994179.jpg','img2':'201403171657254045.jpg','price':'10.00'}]}]}";
	var goods_id = Utils.getQueryString("id") || "";
	//set_video();
	
	//$('.mod-nav.no-icon').bind('click',write_zan);
	
	/* 配置视频参数 */
	function set_video(){
		var flashvars = '';
		flashvars += 'vid=q030330lgha&amp;';
		flashvars += 'tpid=0&amp;';
		flashvars += 'showend=1&amp;';
		flashvars += 'searchbar=1&amp;';
		flashvars += 'pic=http://shp.qpic.cn/qqvideo_ori/0/q030330lgha_496_280/0&amp;';
		flashvars += 'skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&amp;';
		flashvars += 'shownext=1&amp;';
		flashvars += 'list=2&amp;';
		flashvars += 'autoplay=0';
		var src = 'http://imgcache.qq.com/tencentvideo_v1/player/TPout.swf?max_age=86400&amp;v=20140714';
		var width1 = $('html').width();
		var width = (width1*90/100).toFixed(0);
		
		//$('#video_id').attr('flashvars',flashvars);
		$('#playVideo').attr('src',src);
		$('#playVideo').attr('height',width);
	}
	
	/* end */
});