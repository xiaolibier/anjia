
$(document).ready(function(){
	/*  */	
		
	var g = {};
	g.sbox = Utils.offLineStore.get("sbox",false) || '0';
	
	//sbox_show();//关闭活动自动弹窗
	
	$(".c_childrenDay_sbox .a_btn,.c_childrenDay_sbox .content .session").bind("click",btn_click2);
	$(".c_childrenDay_sbox .content .session .img,.c_childrenDay_ico .common_btn.btn2").bind("click",url_go);
	/* 关闭悬浮弹窗 */
	function btn_click2(){
		$(this).parents('.c_childrenDay_sbox').fadeOut(300);
		Utils.offLineStore.set("sbox",'1',false);
		return false;
	}
	/* 跳转页面 */
	function url_go(){
		location.href='carnival.html';
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
	
/*  */
})


