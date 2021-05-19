

(function($){
	var FUNC = {};


	// browserの判定
	FUNC.getUA = function () {
		var ua = navigator.userAgent.toLowerCase();
		var ver = navigator.appVersion.toLowerCase();

		// IE(11以外)
		SETTING.UA.isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
		// IE6
		SETTING.UA.isIE6 = SETTING.UA.isMSIE && (ver.indexOf('msie 6.') > -1);
		// IE7
		SETTING.UA.isIE7 = SETTING.UA.isMSIE && (ver.indexOf('msie 7.') > -1);
		// IE8
		SETTING.UA.isIE8 = SETTING.UA.isMSIE && (ver.indexOf('msie 8.') > -1);
		// IE9
		SETTING.UA.isIE9 = SETTING.UA.isMSIE && (ver.indexOf('msie 9.') > -1);
		// IE10
		SETTING.UA.isIE10 = SETTING.UA.isMSIE && (ver.indexOf('msie 10.') > -1);
		// IE11
		SETTING.UA.isIE11 = (ua.indexOf('trident/7') > -1);
		// IE
		SETTING.UA.isIE = SETTING.UA.isMSIE || SETTING.UA.isIE11;
		// Edge
		SETTING.UA.isEdge = (ua.indexOf('edge') > -1);

		// Google Chrome
		SETTING.UA.isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
		// Firefox
		SETTING.UA.isFirefox = (ua.indexOf('firefox') > -1);
		// Safari
		SETTING.UA.isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
		// Opera
		SETTING.UA.isOpera = (ua.indexOf('opera') > -1);
	}



	/*---------------------------------------------------------------------
		getDevice (デバイス判定の取得)

		デバイスの切り替え時にリロードする場合
		changeFlg:
			0 = 切り替え時リロード無し
			1 = sp <-> tab pc 切り替え時リロード
			2 = sp <-> tab <-> pc 切り替え時リロード
	---------------------------------------------------------------------*/
	FUNC.getDevice = function (changeFlg){
		if(typeof changeFlg === 'undefined') changeFlg = 0;
		if( SETTING.DEVICE != ''){
			return
		}

		var $hideTab = $('.hide-tab[data-device]').eq(0);
		var $hidePc = $('.hide-pc[data-device]').eq(0);
		var deviceBefore = ''; //画面サイズ変更前のデバイス情報
		var deviceAfter = ''; //画面サイズ変更後のデバイス情報


		function refresh(){
			// デバイスサイズの設定
			if ( $hidePc.is(':hidden') ) {
				deviceAfter = 'pc';

			}else if( $hideTab.is(':hidden') ){
				deviceAfter = 'tab';

			}else{
				deviceAfter = 'sp';

			}

			// デバイスサイズ切り替え時の処理
			if( deviceBefore == '' ){
				//初回：設定のみ
				SETTING.DEVICE = deviceAfter;
				deviceBefore = deviceAfter;

			}else if( deviceAfter != deviceBefore){
				//デバイス設定更新
				SETTING.DEVICE = deviceAfter;

				//切り替え処理
				if( changeFlg != 0 && ( deviceAfter == 'sp' || deviceBefore == 'sp' ) ){
					//changeFlg 1 = sp <-> tab pc 切り替え時リロード
					location.reload();

				}else if( changeFlg == 2 ){
					//changeFlg 2 = sp <-> tab <-> pc 切り替え時リロード
					location.reload();

				}else{
					FUNC.layoutReset();
				}

				// 画面サイズ変更前のデバイス情報更新
				deviceBefore = deviceAfter;
			}
		}

		$(window).on(
			'resize',
			function(){
				refresh();
			}
		);


		refresh();
	};



	/*---------------------------------------------------------------------
		viewHeightFixed
	---------------------------------------------------------------------*/
	FUNC.viewHeightFixed = function (){
		$(window).on('load resize',function(){
			var vh = window.innerHeight * 0.01;
			// カスタム変数--vhの値をドキュメントのルートに設定
			document.documentElement.style.setProperty('--vh', vh + 'px');
		});
	};




	//レイアウト初期化
	FUNC.header = function () {
		// ヘッダー SP
		$('[data-header-btn-sp]').click(function(){
			$('[data-header-area-sp]').fadeIn(300);
			FUNC.bodyFixed(true);
		});
		$('[data-header-close-sp]').click(function(){
			$('[data-header-area-sp]').fadeOut(300);
			FUNC.bodyFixed(false);
		});
		$('[data-header-hassub-sp]').click(function(){
			if($(this).hasClass('is-open')){
				$(this).removeClass('is-open');
				$(this).next('ul').slideUp(300);
			}else{
				$(this).addClass('is-open');
				$(this).next('ul').slideDown(300);
			}
		});
		$('[data-header-searchbtn-sp]').click(function(){
			if($(this).hasClass('is-open')){
				$(this).removeClass('is-open');
				$('[data-header-searcharea-sp]').slideUp(300);
			}else{
				$(this).addClass('is-open');
				$('[data-header-searcharea-sp]').slideDown(300);
			}
		});
		// ヘッダー pc
		$('[data-header-searchbtn-pc]').click(function(){
			if($(this).hasClass('is-open')){
				$(this).removeClass('is-open');
				$('[data-header-searcharea-pc]').fadeOut(300);
			}else{
				$('[data-header-subbtn-pc]').each(function(){
					if($(this).hasClass('is-open')){
						$(this).click();
					}
				});
				$(this).addClass('is-open');
				$('[data-header-searcharea-pc]').fadeIn(300);
			}
		});
		$('[data-header-subbtn-pc]').click(function(){
			subarea = $(this).data('header-subbtn-pc');
			if($(this).hasClass('is-open')){
				$(this).removeClass('is-open');
				$('[data-header-subarea-pc="'+subarea+'"]').removeClass(SETTING.ACTIVE).slideUp(300);
			}else{
				if($('[data-header-searchbtn-pc]').hasClass('is-open')){
					$('[data-header-searchbtn-pc]').click();
				}
				if($('[data-header-subbtn-pc]').hasClass('is-open')){
					$('[data-header-subbtn-pc]').removeClass('is-open');
					$('[data-header-subarea-pc]').removeClass(SETTING.ACTIVE).fadeOut(0);
					$('[data-header-subarea-pc="'+subarea+'"]').addClass(SETTING.ACTIVE).fadeIn(0);
				}
				$(this).addClass('is-open');
				$('[data-header-subarea-pc="'+subarea+'"]').addClass(SETTING.ACTIVE).slideDown(300);
			}
		});
		$('[data-header-subclose-pc]').click(function(){
			closearea = $(this).data('header-subclose-pc');
			$('[data-header-subbtn-pc="'+closearea+'"]').click();
		});

		// 追従
		var startPos = 0;
		function headScroll(){
			var scrl_t = $(window).scrollTop();
			var scrollHeight = 100;

			if( SETTING.DEVICE == 'pc'){

				if( $('[data-mainv-pc]').length ){
					scrollHeight = $('[data-mainv-pc]').height();
				}

			}else{
				if( $('[data-mainv-sp]').length ){
					scrollHeight = $('[data-mainv-sp]').height();
				}
			}

			if( scrl_t > scrollHeight ){
				$('body').addClass('is-scrolled');
			}else{
				$('body').removeClass('is-scrolled');
			}
		}

		headScroll();
		$(window).scroll(function(){
			if( SETTING.isbodyFixed == false){

				var currentPos = $(this).scrollTop();
				if (currentPos > startPos) {
					if($(window).scrollTop() > 100){
						$('body').addClass('scroll-down');
					}
				}else{
					$('body').removeClass('scroll-down');
				}
				startPos = currentPos;
				headScroll();
			}
		});

		var scrtimer = false;
		$(window).scroll( function(){
			if( scrtimer !== false ){
				clearTimeout( scrtimer );
			}
			scrtimer = setTimeout( function(){
				$('body').removeClass('scroll-down');
			}, 300 );
		});

		if( SETTING.DEVICE == 'pc' ){
			$('[data-search-pc]').append($('[data-search-sp] #MF_form_phrase'));
		}

		//ヘッダーfixedの余白調整
		if( !$('body').hasClass('is-wave') ){

			if( SETTING.DEVICE == 'sp' ){
				$('body').css( 'padding-top' , $('#l-header .header-sp').outerHeight() );

			}else{
				$('body').css( 'padding-top' , $('#l-header .header-pc').outerHeight() + 20  );

				setTimeout( function(){
					$('body').css( 'padding-top' , $('#l-header .header-pc').outerHeight() + 20  );
				}, 200 );

			}
		}

	};

	FUNC.modal = function (){

		if( $('[data-modal="youtube"]').length > 0 ){

			if( $('.m-box-modal').length == 0 ){
				$('body').append(
					'<div class="m-box-modal l-reset">' +
						'<div class="modal-overlay"></div>' +
						'<div class="modal-inner">' +
							'<div class="modal-youtube">' +
								'<iframe src="" frameborder="0"></iframe>' +
							'</div>' +
							'<p class="modal-close">' +
								'<button type="button" class="close-btn"><span class="btn-wrap">閉じる</span></button>' +
							'</p>' +
						'</div>' +
					'</div>'
				);
			}

			//モーダル表示
			function modalShow(url){
				$('.m-box-modal .modal-youtube iframe').attr('src',url);
				$('.m-box-modal').addClass('is-active').attr('style','');
				FUNC.bodyFixed(true);
			}

			//モーダル非表示
			function modalHide(){
				$('.m-box-modal .modal-youtube iframe').attr('src','');
				$('.m-box-modal').removeClass('is-active').attr('style','');
				FUNC.bodyFixed(false);
			}

			$('[data-modal="youtube"]').on('click',function(e){
				if( SETTING.DEVICE == 'pc'){
					var $this = $(this);
					e.preventDefault();

					modalShow($this.attr('href'));
				}

			});

			$('.m-box-modal .modal-close .close-btn,.m-box-modal .modal-overlay').on('click',function(e){
				modalHide();
			});
		}



	}

	/*---------------------------------------------------------------------
		bodyFixed (スクロール禁止設定)

		isFixed:
			true = スクロール禁止
			false = スクロール禁止の解除
	---------------------------------------------------------------------*/
	FUNC.bodyFixed = function (isFixed){
		// if(typeof isFixed === 'undefined') isFixed = true;

		// if(isFixed){
		// 	if( SETTING.isbodyFixed == false){
		// 		SETTING.bodyFixedY = $(window).scrollTop();

		// 		$( '#l-wrap' ).css( {
		// 			position: 'fixed',
		// 			width: '100%',
		// 			top: -1 * SETTING.bodyFixedY
		// 		} );

		// 		SETTING.isbodyFixed = true;
		// 		$('body').addClass('isbodyFixed');
		// 	}
		// }else{
		// 	$( '#l-wrap' ).attr( { style: '' } );
		// 	$( 'html, body' ).prop( { scrollTop: SETTING.bodyFixedY } );

		// 	SETTING.isbodyFixed = false;
		// 	$('body').removeClass('isbodyFixed');

		// }
	};

	/*
		init
	*/
	FUNC.getUA();
	FUNC.getDevice(1);
	FUNC.viewHeightFixed();
	FUNC.header();
	FUNC.modal();
	deSVG('[data-svg]', true);

	$('[data-pagetop] .pagetop-btn').click(function () {
		$('body, html').animate({ scrollTop: 0 }, 300);
		return false;
	});
})($j3);
