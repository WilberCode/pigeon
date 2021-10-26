//$pgaijq = $.noConflict(true);
jQuery.noConflict();
/*(function($){

	$(".scroll").on('click',function(event){
		event.preventDefault();
				  
		var url = this.href;
		
		var parts = url.split("#");
		var target = parts[1];
		   
		var target_offset = $("#"+target).offset();
		var target_top = target_offset.top;
		   
		$('html, body').animate({scrollTop:target_top}, 500);
	});

	$(window).on('scroll',function(){
		var wh = $(window).height();
		var scrt = $(window).scrollTop();
		var scrb = wh + scrt;
		var contentBottom = $('footer').offset().top;
		
		if(scrt > 150){
			$('.bt-back').fadeIn();
		} else {
			$('.bt-back').fadeOut();
		}

		if(scrb >= contentBottom){
			$('.bt-back').addClass('abs');
		} else {
			$('.bt-back').removeClass('abs');
		}
	});

//})($pgaijq);
})(jQuery);*/