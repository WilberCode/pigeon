
$(function () {

	// マップ
	var mapbg = $('[data-top-map]').attr('class');
	$('[data-top-mapbtn]').hover(function(){
		area = $(this).data('top-mapbtn');
		area = 'bg-'+area;
		$('[data-top-map]').addClass(area);
	},function(){
		$('[data-top-map]').attr('class',mapbg);
	});


	//メインビジュアル


	$('[data-mainv-button]').on('click',function(){
		if(SETTING.DEVICE != 'pc'){
			$this = $(this);

			$this.parents('[data-mainv-item]').toggleClass(SETTING.ACTIVE);

			$this.parents('[data-mainv-item]').find('[data-mainv-body]').slideToggle(800);

		}

	});
});

$(window).on('load', function(){
	// ローディング

	FUNC.getUA();
	if( !SETTING.UA.isMSIE ){
		FUNC.getDevice(1);
		if(SETTING.DEVICE == 'pc'){
			function topopening_fade(){
				if($(window).width() * 0.70 < $(window).height()){
					$('.loading-bg').addClass('is-vert');
				}
				setTimeout(function() {
					$('.loading-pre').css('opacity',0);
				},300);
				setTimeout(function() {
					$('.u-top-loading-fade').fadeOut(1500);
				},3000);
			}
			// ↓cookie使う時は1にする
			usecookie = 1;
			if(usecookie == 0){
				if( $('.u-top-loading-fade').length ){
					topopening_fade();
				}
			}else{
				if( $.cookie('pigeontop') == 'visited' ){
					$('.u-top-loading-fade').fadeOut(300);
				}else{
					if( $('.u-top-loading-fade').length ){
						topopening_fade();
					}
				}
				$.cookie('pigeontop', 'visited', { expires: 1 });
			}
		}
	}else{
		$('.u-top-loading').hide();
		$('.u-top-loading-fade').hide();
	}

	// スライダー
	if(SETTING.DEVICE == 'sp'){
		actspace = 15;
	}else{
		actspace = 60;
	}
	if(SETTING.DEVICE != 'pc'){
		var actionbg = new Swiper('[data-top-actionbg-sp]',{
			loop: false,
			slidesPerView: 1,
			effect: 'fade'
		});

		var actionbtn = new Swiper('[data-top-actionbtn]',{
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: actspace,
			centeredSlides: true
		});

		actionbg.controller.control = actionbtn;
		actionbtn.controller.control = actionbg;
	}else{
		var actionbg_PC = new Swiper('[data-top-actionbg-pc]',{
			loop: false,
			slidesPerView: 1,
			effect: 'fade'
		});
		// たまごボタン PC
		$('[data-top-actbtnpc]').hover(function(){
			act = $(this).data('top-actbtnpc');
			actionbg_PC.slideTo(Number(act) - 1,300);

			$('[data-top-actbtnpc]').removeClass('is-active');
			$(this).addClass('is-active');
		},function(){});

		$('[data-top-actbtnpc]').on('click',function(event){
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

	function spmainvslide(){
		if(SETTING.DEVICE != 'pc'){
			if( $('.u-box-mainv_sp .mainv-slider').length ){

				var mainvslide_loop = true;

				if( $('[data-top-mainv] .swiper-slide').length <= 1){
					$('[data-top-mainv]').parents('.mainv-slider').find('.ctrl-button').hide();
					$('[data-top-mainv]').parents('.mainv-slider').find('.ctrl-pagination').hide();
					mainvslide_loop = false;
				}

				var mainvslide = new Swiper('[data-top-mainv]',{
					loop: mainvslide_loop,
					effect: 'fade',
					allowTouchMove:mainvslide_loop,
					speed:300,
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					pagination: {
						el: '[data-top-mainvnav]',
						clickable: true,
					},
					navigation: {
						nextEl: '[data-top-mainvnxt]',
						prevEl: '[data-top-mainvprv]'
					},
					slidesPerView: 1,
					spaceBetween: 0
				});
			}
		}
	}


	function featureslide(){

		var featureslide_loop = true;
		if(SETTING.DEVICE == 'sp'){
			if( $('[data-top-featuer] .swiper-slide').length <= 1){
				$('[data-top-featuer]').parents('.featuer-slider').find('.ctrl-button').hide();
				$('[data-top-featuer]').parents('.featuer-slider').find('.ctrl-pagination').hide();
				featureslide_loop = false;
			}

		}else{
			if( $('[data-top-featuer] .swiper-slide').length <= 3){
				$('[data-top-featuer]').parents('.featuer-slider').find('.ctrl-button').hide();
				$('[data-top-featuer]').parents('.featuer-slider').find('.ctrl-pagination').hide();
				featureslide_loop = false;
			}
		}

		var featureslide = new Swiper('[data-top-featuer]',{
			loop: featureslide_loop,
			pagination: {
				el: '[data-top-featuernav]',
				clickable: true,
			},
			navigation: {
				nextEl: '[data-top-featuernxt]',
				prevEl: '[data-top-featuerprv]'
			},
			slidesPerView: 3,
			spaceBetween: 20,
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	}

	function pickupslide(){

		var pickupslide_loop = true;
		if(SETTING.DEVICE == 'sp'){
			if( $('[data-top-pickup] .swiper-slide').length <= 1){
				$('[data-top-pickup]').parents('.pickup-slider').find('.ctrl-button').hide();
				$('[data-top-pickup]').parents('.pickup-slider').find('.ctrl-pagination').hide();
				pickupslide_loop = false;
			}

		}else{
			if( $('[data-top-pickup] .swiper-slide').length <= 2){
				$('[data-top-pickup]').parents('.pickup-slider').find('.ctrl-button').hide();
				$('[data-top-pickup]').parents('.pickup-slider').find('.ctrl-pagination').hide();
				pickupslide_loop = false;
			}
		}
		var pickupslide = new Swiper('[data-top-pickup]',{
			loop: pickupslide_loop,
			pagination: {
				el: '[data-top-pickupnav]',
				clickable: true,
			},
			navigation: {
				nextEl: '[data-top-pickupnxt]',
				prevEl: '[data-top-pickupprv]'
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

	function mainvPcAnim(){
		var timecheck;
		$('.u-box-mainv .mainv-list .list-item').on({
			'mouseenter' : function(){
				$target = $(this);
				timecheck = setTimeout(function(){
					$target.addClass('is-active');
				},300);
			},
			'mouseleave' : function(){
				$(this).removeClass('is-active');
				clearTimeout(timecheck);

			}
		});
	}

	featureslide();
	pickupslide();
	FUNC.modal();
	mainvPcAnim();
	spmainvslide();
});
