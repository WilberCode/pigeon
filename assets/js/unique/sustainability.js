$(function () {

});
$(window).on('load', function(){
	// ローディング

	// スライダー
	if(SETTING.DEVICE == 'sp'){
		actspace = 15;
	}else{
		actspace = 60;
	}
	if(SETTING.DEVICE != 'pc'){
		var actionbg = new Swiper('[data-sus-actionbg-sp]',{
			loop: false,
			slidesPerView: 1,
			effect: 'fade',
			pagination: {
				el: '[data-sus-actionnav-sp]',
				clickable: true,
			}
		});

		var actionbtn = new Swiper('[data-sus-actionbtn]',{
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: actspace,
			centeredSlides: true
		});

		actionbg.controller.control = actionbtn;
		actionbtn.controller.control = actionbg;
	}else{
		var actionbg_PC = new Swiper('[data-sus-actionbg-pc]',{
			loop: false,
			slidesPerView: 1,
			effect: 'fade'
		});
		// たまごボタン PC
		$('[data-sus-actbtnpc]').hover(function(){
			act = $(this).data('sus-actbtnpc');
			actionbg_PC.slideTo(Number(act) - 1,300);

			$('[data-sus-actbtnpc]').removeClass('is-active');
			$(this).addClass('is-active');
		},function(){});

		$('[data-sus-actbtnpc]').on('click',function(event){
			event.preventDefault();
			act = $(this).data('sus-actbtnpc');
			actionbg_PC.slideTo(Number(act) - 1,300);

			$('[data-sus-actbtnpc]').removeClass('is-active');
			$(this).addClass('is-active');
		});

		 $('[data-sus-actbtnpc]').on('click',function(event){
		 	event.preventDefault();
		 	var linkUrl = $(this).attr('href');
		 	$(this).removeClass('is-active');
		 	$(this).addClass('is-anim');
		 	function action() {
		 		location.href = linkUrl;
		 	}
		 	$('#l-header').hide();
		 	setTimeout(action,1000);
		 });
	}

	function pickupslide(){

		var pickupslide_loop = true;
		if(SETTING.DEVICE == 'sp'){
			if( $('[data-sus-pickup] .swiper-slide').length <= 1){
				$('[data-sus-pickup]').parents('.pickup-slider').find('.ctrl-button').hide();
				$('[data-sus-pickup]').parents('.pickup-slider').find('.ctrl-pagination').hide();
				pickupslide_loop = false;
			}

		}else{
			if( $('[data-sus-pickup] .swiper-slide').length <= 2){
				$('[data-sus-pickup]').parents('.pickup-slider').find('.ctrl-button').hide();
				$('[data-sus-pickup]').parents('.pickup-slider').find('.ctrl-pagination').hide();
				pickupslide_loop = false;
			}
		}
		var pickupslide = new Swiper('[data-sus-pickup]',{
			loop: pickupslide_loop,
			pagination: {
				el: '[data-sus-pickupnav]',
				clickable: true,
			},
			navigation: {
				nextEl: '[data-sus-pickupnxt]',
				prevEl: '[data-sus-pickupprv]'
			},
			slidesPerView: 2,
			spaceBetween: 40,
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	}

	pickupslide();
});