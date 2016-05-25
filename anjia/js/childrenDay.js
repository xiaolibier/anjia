/**
 * author:chenxy
*/

//页面初始化
$(function(){
	var g = {};
	g.login_token = Utils.offLineStore.get("token",false) || "";
	g.sbox = Utils.offLineStore.get("sbox",false) || '0';
	//验证登录状态
	var loginStatus = Utils.getUserInfo();
	if(!loginStatus){
		//未登录
	}
	else{
	}
	sbox_show();
	scroll_position();
	$("#tianMao").bind("click",_click);
	//$(".c_childrenDay_ico .a_btn").bind("click",btn_click);
	$(".c_childrenDay_sbox .a_btn,.c_childrenDay_sbox .content .session").bind("click",btn_click2);
	$(".c_childrenDay_sbox .content .session .img,.c_childrenDay_ico .common_btn.btn2").bind("click",url_go);
	/* 跳转页面 */
	function url_go(){
		location.href='ChildrenDay.html';
	}
	/* 判断底部位置 */
	function scroll_position(){
		var _obj = $('.c_childrenDay_ico') || false;
		if(_obj){
			$(window).scroll(function(){
				var scrollTop = $(this).scrollTop();
			　　var scrollHeight = $(document).height();
			　　var windowHeight = $(this).height();
			　　var _height = $('.ui-bottom').outerHeight()+12;
				if(scrollTop + windowHeight == scrollHeight){
			　　　　$('.c_childrenDay_ico,.c_childrenDay_ico .bg').css({'bottom':_height});
			　　}else{
					$('.c_childrenDay_ico,.c_childrenDay_ico .bg').css({'bottom':'0'});
				}
			});
		}
		
	}
	/* 判断是不是第一次加载 */
	function sbox_show(){
		var html = '';
			html += '<div class="c_childrenDay_sbox">';
			html += '<div class="content">';
			html += '<div class="session">';
			html += '<div class="img">';
			html += '<a class="a_btn"></a>';
			html += '</div></div></div>';
			html += '<div class="bg"></div>';
			html += '</div>';
		if(g.sbox == '0'){
			$('body').append(html);
			$(".c_childrenDay_sbox").fadeIn(100);
		}else{
			$(".c_childrenDay_sbox").fadeOut(0);
		}
		return false;
	}
	/* 关闭悬浮弹窗 */
	function btn_click2(){
		$(this).parents('.c_childrenDay_sbox').fadeOut(300);
		Utils.offLineStore.set("sbox",'1',false);
		return false;
	}
	/* 关闭右侧悬浮窗 */
	/* function btn_click(e){
		$(this).parents('.c_childrenDay_ico').fadeOut(300);
		return false;
	} */
	/* 点击查看活动详情 */
	function _click(){
		window.open('https://shjzs.tmall.com/');
		return false;
	}
	

})









