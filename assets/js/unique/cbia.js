
$(function () {


	function cbiaswiper(){
		let $this = $('[data-swiper="image"]');

		let swiperModelsSlider = new Swiper($this.find('.swiper-container'), {
			effect: 'slide',
			slidesPerView: 'auto',
			centeredSlides: true,
			autoHeight: false,
			spaceBetween: 0,
			loop:true,
			speed:750,
			pagination: {
				el: $this.find('.ctrl-pagination'),
				clickable: true,
			},
			navigation: {
				nextEl: $this.find('[data-cbia-swiper-next]'),
				prevEl: $this.find('[data-cbia-swiper-prev]')
			},
			on: {
				init: function () {
					$this.find('[data-cbia-swiper-now]').text(( '00' + (this.realIndex + 1) ).slice( -2 ));
					$this.find('[data-cbia-swiper-all]').text(( '00' + this.loopedSlides ).slice( -2 ));
				},
				slideChange: function () {
					$this.find('[data-cbia-swiper-now]').text(( '00' + (this.realIndex + 1) ).slice( -2 ));
				}
			}
		});
	}


	function cbiamainswiper(){
		let $thisMain = $('[data-swiper="mainv"]');
		let $thisThumb = $('[data-swiper="mainv-thumb"]');

		let mainvCount = $thisMain.find('.swiper-wrapper').find('.swiper-slide').length;

		let swiperModelsSliderThumb = new Swiper( $thisThumb.find('.swiper-container') , {
			direction: 'vertical',
			spaceBetween: 0,
			loop: true,
			freeMode: false,
			autoHeight: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			speed:800,
			simulateTouch:false
		});

		let swiperModelsSliderMain = new Swiper($thisMain.find('.swiper-container'), {
			effect: 'fade',
			simulateTouch:false,
			slidesPerView: 'auto',
			centeredSlides: true,
			autoHeight: false,
			spaceBetween: 0,
			loop:true,
			speed:800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: $thisMain.find('[data-cbia-swiper-next]'),
				prevEl: $thisMain.find('[data-cbia-swiper-prev]')
			},
			on: {
				init: function () {
					$thisMain.find('[data-cbia-swiper-now]').text( this.realIndex + 1 );
					$thisMain.find('[data-cbia-swiper-all]').text( mainvCount );
					$thisMain.find('.progress-wrap2').addClass(SETTING.ACTIVE);
				},
				slideChange: function () {
					$thisMain.find('[data-cbia-swiper-now]').text( this.realIndex + 1 );
				},
				slideChangeTransitionStart: function () {
					$thisMain.find('.progress-wrap2').removeClass(SETTING.ACTIVE);
				},
				slideChangeTransitionEnd: function () {
					$thisMain.find('.progress-wrap2').addClass(SETTING.ACTIVE);
				}
			},
			thumbs: {
				swiper: swiperModelsSliderThumb,
			},
		});


	}


	function share(){

		if( SETTING.DEVICE != 'sp') {
			var $win = $(window);
			var $shareBtn = $('.u-box-sns');
			$win.on('scroll', function(){
				var snsPosBottom = $win.scrollTop() + ( window.parent.screen.height / 2 )  + ( $shareBtn.find('.sns-inner').innerHeight() / 2); //ドキュメントの高さ
				var footerPos = $("#l-footer").offset().top; //現在地



				if ( snsPosBottom > footerPos) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
					$shareBtn.css({
						"position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
						"top": "auto",
						"bottom": "10px"
					});
				}else{ //それ以外の場合は
					$shareBtn.css({
						"position":"fixed", //固定表示
						"top": "50%",
						"bottom": 'auto' //下から20px上げた位置に
					});
				}
			});
		}

	}
	cbiaswiper();
	cbiamainswiper();
	share();

});
