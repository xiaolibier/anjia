$(function(){
	var g = {};
	
	loding();
	
	/* 页面加载进度 */
	function loding(){
		var html = '';
		html += '<div class="common_loding_bg active">';
		html += '<div class="col-md-6">';
		html += '<div class="middle">';
		html += '<p>等一会儿</p>';
		html += '<div class="loader3">';
		html += '<span></span>';
		html += '<span></span>';
		html += '</div>';
		html += '</div>	';
		html += '</div>';
		html += '</div>';
		if(!$('.common_loding_bg').hasClass('active')){
			$('body').append(html);
		}else{
			$('.common_loding_bg').fadeIn(0);
		}
		setTimeout(function(){
			$('.common_loding_bg').fadeOut(300);
		},2000);
	}
	
	
	
	
	
	
	
	
	
	
	/* end */
});