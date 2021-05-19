var FUNC = {};

FUNC.pageLoad = function (){
	$(window).on('load', function () {
		// var userAgent = window.navigator.userAgent.toLowerCase();
		// if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
		// 	$('body').addClass('is-ie');
		// }

		$('body').addClass('ready');
	});


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


//レイアウト初期化
FUNC.layoutReset = function () {
	//header
	$('[data-header-area-sp]').hide();
	$('.u-top-loading').hide();
	$('[data-header-subbtn-pc]').removeClass('is-open');
	$('[data-header-subarea-pc]').removeClass('is-active').hide();



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

		if( SETTING.DEVICE != 'pc' ){
			$('body').css( 'padding-top' , $('#l-header .header-sp').outerHeight() );

		}else{
			$('body').css( 'padding-top' , $('#l-header .header-pc').outerHeight() + 20  );

			setTimeout( function(){
				$('body').css( 'padding-top' , $('#l-header .header-pc').outerHeight() + 20  );
			}, 200 );

		}
	}

};


/*---------------------------------------------------------------------
	pageTop (ページトップへ戻るボタンの初期化)

	isFade:
		true = スクロールしたらフェードで表示する
		false = 常に表示
	isFixed:
		true = フッターにめり込まないようにする
		false = 常にfixed状態、フッター位置に影響されない
---------------------------------------------------------------------*/
FUNC.pageTop = function (isFade,isFixed){
	if(typeof isFade === 'undefined') isFade = true;
	if(typeof isFixed === 'undefined') isFixed = true;
	var $win = $(window);
	var $pagetop = $('[data-pagetop]');
	var $pagetopBtn = $pagetop.find('.pagetop-btn');

	if(isFade){
		$win.on('scroll',  function(){
			var scrollTop = $win.scrollTop();

			if ( scrollTop > 50 ) {
				$pagetop.fadeIn(200);
			}
			else {
				$pagetop.fadeOut(200);
			}
		});
	}else{
		$pagetop.show();
	}


	if(isFixed){
		$win.on('scroll', function(){
			var scrollHeight = $(document).height(); //ドキュメントの高さ
			var scrollPosition = $win.height() + $win.scrollTop(); //現在地
			var footHeight = $("#l-footer").innerHeight(); //footerの高さ（＝止めたい位置
			var abjustPosY = 18;

			if( SETTING.DEVICE != 'sp') {
				abjustPosY = 23;
			}

			if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
				$pagetopBtn.css({
					"position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
					"bottom": footHeight + abjustPosY //下からfooterの高さ + 20px上げた位置に配置
				});
			}else{ //それ以外の場合は
				$pagetopBtn.css({
					"position":"fixed", //固定表示
					"bottom": abjustPosY //下から20px上げた位置に
				});
			}
		});
	}
};





/*---------------------------------------------------------------------
	jsPnav （自動アンカーリンクナビ）
---------------------------------------------------------------------*/
FUNC.jsPnav =function () {
	$("[data-js-autoanchor]").each(function() {
		var selector = $(this).data("selector");
		var units = $(this).parent();
		var target = $(this).nextUntil("[data-js-autoanchor][data-selector='" + selector + "'],.js-autoauchor-end").filter(selector);
		var template = $(this).find("[data-js-autoanchor-tmpl]").html();
		var view = $(this).find("ul");
		var stash = [];

		target.each(function() {
			var id = $(this).attr("id");
			var label = $(this).html();
			// var isImage = $(this).find("img").length;

			// if ( isImage ) {
			// 	label = $(this).find("img").attr("alt");
			// }
			var isImage = $(this).find("img").length;
			if ( isImage ) {
				$(this).find("img").remove();
				label = $(this).html();
			}

			stash.push(
				template
				.replace("{{url}}", "#" + id)
				.replace("{{label}}", label)
			);
		});

		view.append(stash);

		$(this).find('script').remove();
		FUNC.smoothScroll();
	});
}


/*---------------------------------------------------------------------
	ローカルナビ カレント表示 初期化
---------------------------------------------------------------------*/
FUNC.lNavCurrentInit = function () {
	//第1階層
	if($('#l-header').length){

		if ( SETTING.DEVICE == 'PC' ) {
		}
	}
	//第2階層
	if($('.content-nav').length){
		$.navCurrent({
			Selector	: '.content-nav .nav-list > li > a',
			addClass	: 'is-current',
			exception	: ''
		});
	}
	//第3階層
	if($('.content-nav').length){
		$.navCurrent({
			Selector	: '.content-nav .nav-list > li > a.is-current + ul > li > a',
			addClass	: 'is-current',
			exception	: ''
		});
	}
	//第4階層
	if($('.content-nav').length){
		$.navCurrent({
			Selector	: '.content-nav .nav-list > li > ul > li > a.is-current + ul > li > a',
			addClass	: 'is-current',
			exception	: ''
		});
	}

	//フッターナビのコンテンツ高さ揃え
	if( $('#l-content .content-nav .nav-list > li > a').length){
		$('#l-content .content-nav .nav-list > li > a').tile(4);
	}
}



/*---------------------------------------------------------------------
	アンカーリンク位置調整
---------------------------------------------------------------------*/
FUNC.currentCheck = function () {
	var hash = location.hash;

	// 現在のスクロール位置を取得
	$(window).on("load",function (e) {

		//アンカーリンクがあった場合
		if($(hash).length){
			e.preventDefault();
			var abjustY = 0;

			if( SETTING.DEVICE == 'sp' ){
				abjustY = $('#l-header .header-sp').outerHeight();

			}else{
				abjustY = $('#l-header .header-pc').outerHeight() + 20;

			}

			//アンカーリンクの位置取得
			var position = $(hash).offset().top;

			//IE判別
			var ua = window.navigator.userAgent.toLowerCase();
			var isIE = (ua.indexOf('msie') >= 0 || ua.indexOf('trident') >= 0);
			//IEだった場合
			if (isIE) {
				setTimeout(function(){
					$("html, body").scrollTop(Number(position) - abjustY - 20);
				},500);
			//IE以外
			} else {
				//アンカーリンクの位置まで移動
				$("html, body").scrollTop(Number(position) - abjustY - 20);
			}
		}
	});
};



/*---------------------------------------------------------------------
	pluginTileJs
---------------------------------------------------------------------*/
FUNC.pluginTileJs = function () {
	//デバイス判定
	$('[data-tile]').each(function(){
		var $this = $(this);
		var tileItems = $this.attr('data-tile').split(',');

		var tileItem = '';
		var widthP = $this.width();

		tileItems.forEach(function(val) {
			tileItem = val

			//アイテムの指定がなければ、直下の子要素の高さを揃える
			if ( tileItem.length ) {
				var widthC = $this.find(tileItem).outerWidth();
				var tile = Math.floor( widthP / widthC );

				if( tile < 1){
					tile = 1;
				}

				$this.find(tileItem).tile(tile).addClass('is-addTile');
			} else {
				var widthC = $this.children().outerWidth();
				var tile = Math.floor( widthP / widthC );

				$this.children().tile(tile).addClass('is-addTile');

			}
		});



	});
}



FUNC.pluginTileJsInit = function (){
	$(window).on('load', function () {
		FUNC.pluginTileJs();


	});
}



/*---------------------------------------------------------------------
	transTableScroll (テーブルをスクロールさせる)
---------------------------------------------------------------------*/
FUNC.transTableScroll = function (){
	var $table = $('table:not(.noScroll)'),
		$wrap  = '<div class="m-table-scroll"></div>',
		$scrollwrap  = '<div class="scroll-wrap"></div>',
		$mark  = '<div class="scroll-mark"><span></span></div>',
		maxWidth = $('[data-fixed]').width() - 40;

		$table.each(function(){
			var $this  = $(this);

			var is_wrap = false;
			$column = $this.find('tr').each(function(){
				var $this  = $(this);
				if($this.find('>th,>td').length > 2){
					is_wrap = true;
				}
			});

			if(is_wrap){
				$this.wrap($wrap);
				$this.before($mark);
				$this.wrap($scrollwrap);
			}
		});
	$('.m-table-scroll .scroll-wrap').on('scroll',  function(){
		var $this   = $(this),
			$target = $this.closest('.m-table-scroll').find('.scroll-mark');

		if( 0 < $this.scrollLeft() ){
			$target.fadeOut("fast");
		}
		else if( 0 == $this.scrollLeft() ){
			$target.fadeIn("fast");
		}
	});
};





// URLに記載されたパラメータを配列で返す
FUNC.getUrlVars = function () {
	var vars = [], hash;
	var hashes = decodeURI(window.location.href.replace(location.hash,"")).slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++){
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}




/*---------------------------------------------------------------------
	accordion（アコーディオン）
---------------------------------------------------------------------*/
FUNC.accordion = function () {
	$('[data-accordion] [aria-controls]').each(function(){
		var $this = $(this);

			$this.on('click', function(e){
				var $this = $(this);
				if(
					$this.closest('[data-accordion]').data('accordion') == "" ||
					( $this.closest('[data-accordion]').data('accordion').match(/sp/) && SETTING.DEVICE == 'sp') ||
					( $this.closest('[data-accordion]').data('accordion').match(/tab/) && SETTING.DEVICE == 'tab') ||
					( $this.closest('[data-accordion]').data('accordion').match(/pc/) && SETTING.DEVICE == 'pc')

				){
					e.preventDefault();

					var $this = $(this);
					var $parent = $this.closest('[data-accordion]');
					var $target = $parent.find('[aria-hidden]');

					if ( $parent.hasClass(SETTING.ACTIVE) ) {
						$target.stop().slideUp();
						$parent.removeClass(SETTING.ACTIVE);

						$this.attr('aria-expanded',false );
						$target.attr('aria-hidden',true );

					} else {
						$parent.addClass(SETTING.ACTIVE);
						$target.stop().slideDown();
						$this.attr('aria-expanded',true );
						$target.attr('aria-hidden',false );
					}
				}
			});

	});
};



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

// FUNC.imageModal = function (){
// 	let externalFlg = false;
// 	let selectDomain = ''; // リンク元ドメイン

// 	if( $('[data-modal-image]').length > 0 ){

// 		$('body').append(
// 			'<div class="m-box-modal">' +
// 				'<div class="modal-overlay"></div>' +
// 				'<div class="modal-inner">' +
// 					'<p class="modal-img">' +
// 						'<img src="" alt="">' +
// 					'</p>' +
// 					'<p class="modal-close">' +
// 						'<button type="button" class="close-btn"><span class="btn-wrap">閉じる</span></button>' +
// 					'</p>' +
// 				'</div>' +
// 			'</div>'
// 		);

// 	}

// 	//モーダル表示
// 	function modalShow(url){
// 		$('.m-box-modal .modal-img img').attr('src',url);
// 		$('.m-box-modal').addClass('is-active').attr('style','');
// 		FUNC.bodyFixed(true);
// 	}

// 	//モーダル非表示
// 	function modalHide(){
// 		$('.m-box-modal .modal-img img').attr('src','');
// 		$('.m-box-modal').removeClass('is-active').attr('style','');
// 		FUNC.bodyFixed(false);
// 	}

// 	$('[data-modal-image]').on('click',function(e){
// 		const $this = $(this);
// 		e.preventDefault();

// 		modalShow($this.attr('href'));

// 	});

// 	$('.m-box-modal .modal-close .close-btn,.m-box-modal .modal-overlay').on('click',function(e){
// 		modalHide();
// 	});


// }




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



/*---------------------------------------------------------------------
	bodyFixed (スクロール禁止設定)

	isFixed:
		true = スクロール禁止
		false = スクロール禁止の解除
---------------------------------------------------------------------*/
FUNC.bodyFixed = function (isFixed){
	if(typeof isFixed === 'undefined') isFixed = true;

	if(isFixed){
		if( SETTING.isbodyFixed == false){
			SETTING.bodyFixedY = $(window).scrollTop();

			$( '#l-wrap' ).css( {
				position: 'fixed',
				width: '100%',
				top: -1 * SETTING.bodyFixedY
			} );

			SETTING.isbodyFixed = true;
			$('body').addClass('isbodyFixed');
		}
	}else{
		$( '#l-wrap' ).attr( { style: '' } );
		$( 'html, body' ).prop( { scrollTop: SETTING.bodyFixedY } );

		SETTING.isbodyFixed = false;
		$('body').removeClass('isbodyFixed');

	}
};



//タブ切り替え
FUNC.tab = function () {

	if ( location.search.indexOf("tab") != -1 ) {
		area = location.search.split("=").pop();
		initNo = $('[data-tab-wrap]').find('[data-tab-btn][href="#' + area + '"]').closest('li').index();

		if( initNo > -1){
			const $targetTab = $('[data-tab-wrap]').find('[data-tab-btn][href="#' + area + '"]');
			const $parent = $targetTab.closest('[data-tab]');
			const $tabAc = $targetTab.closest('li').siblings().find('[data-tab-btn]');
			const $tabContent = $parent.closestOpposite('[data-content]').find(' > *');

			$tabAc.removeClass(SETTING.ACTIVE);
			$targetTab.addClass(SETTING.ACTIVE);

			$tabContent.hide();
			$tabContent.eq(initNo).fadeIn();
		}
	}


	$('[data-tab-btn]').on('click', function (e) {
		e.preventDefault();
		const $this = $(this);
		const $parent = $this.closest('[data-tab]');
		const $tabAc = $this.closest('li').siblings().find('[data-tab-btn]');
		const $tabContent = $parent.closestOpposite('[data-content]').find(' > *');
		const NUM = $this.closest('li').index();


		if ( $this.hasClass(SETTING.ACTIVE) ) {

		}else {
			$tabAc.removeClass(SETTING.ACTIVE);
			$this.addClass(SETTING.ACTIVE);

			$tabContent.hide();
			$tabContent.eq(NUM).fadeIn();

			// deSVG('[data-svg]', true);
		}
	});



	$('.m-box-tabhead .item-select').each(function(){
		$this = $(this);

		if( $this.closest('.m-box-tab[data-tab]').length > 0 ){
			$this.find('select').on('change', function (e) {
				const $this = $(this);
				const $parent = $this.closest('[data-tab]');
				const $tabContent = $parent.closestOpposite('[data-content]').find(' > *');


				$tabContent.hide();
				$('#' + $this.val()).fadeIn();

				e.preventDefault();
			});
		}else{
			$this.find('select').on('change', function (e) {
				location.href=this.value;
			});
		}

	});

};


/*---------------------------------------------------------------------
	直近の子要素を取得する関数
	jquery plugin
---------------------------------------------------------------------*/
$.fn.closestOpposite = function(selector) {
	// 1階層下の子要素を取得
	var children = this.children();

	// 子要素がないときは探索終了
	if (children.length === 0) return $();

	// 現在の要素が探索するクラス名を持っていたとき
	if (this.filter(selector).length) {
		return this.filter(selector);
	}

	// それ以外のときはさらに下層を再帰的に探索
	return children.closestOpposite(selector);
};





FUNC.selectChangeLocation = function () {
	$('[data-select-change]').on('change',function(e){

		const $this = $(this)
		location.href = $this.val();
		e.preventDefault();
	});
};





FUNC.smoothScroll = function ( options ) {
	var c	= $.extend ( {
		target: $( 'a[href^="#"]' ),
		speed: 300
	}, options );

	var $anchors = c.target;

	var $doc = $('html,body');

	$anchors.each( function () {
		var _this		= $(this);
		var anchorID	= _this.attr( 'href' );
		var $target;

		// 例外処理
		if ( _this.closest('[data-scroll-not]').length ) {
			return true;
		}
		if ( _this.closest('[data-tab]').length ) {
			return true;
		}

		if ( anchorID !='#' ) {
			$target	= $( anchorID );
		}
		else {
			$target	= $('body');
		}

		_this.click( function (e) {


			if( SETTING.DEVICE == 'sp' ){
				abjustY = $('#l-header .header-sp').outerHeight();

			}else{
				abjustY = $('#l-header .header-pc').outerHeight() + 20;

			}
			var targetPositionTop	= $target.offset().top - abjustY - 20;


			$doc.stop().animate({
				scrollTop	: targetPositionTop
			},
			{
				duration	: c.speed,
				complete	: function () {
				}
			});

			return false;
		});
	});
}



FUNC.globalnetwork = function () {

	function mapSelect(num){
		$('[data-map-target]').hide();
		$('[data-map-target="' + num + '"]').slideDown(0);
		$('.m-box-map').find('[data-mapbtn]').each(function(index, el) {
			var $this = $(this);
			$('[data-map]').removeClass('bg-' + $this.data('mapbtn'));
		});
		$('[data-map]').addClass( 'bg-' + num );

	}

	if( $('.m-box-map').length ){
		//初期項目の設定
		$('[data-map-target]').hide();
		$('[data-map-target="01').slideDown(0);

		mapSelect('01');



		//初回表示の設定変更がある場合
		const urlParam = FUNC.getUrlVars();

		if( urlParam.cat != undefined ){
			// $('[data-map-target]').hide();
			// $('[data-map-target="' + urlParam.cat.slice( 1 ) + '"').slideDown(0);

			mapSelect( urlParam.cat.slice( 1 ) );

		}

		//マップ操作時
		$('[data-mapbtn]').on('click',function(e){
			e.preventDefault();
			let $this = $(this);


			mapSelect($this.data('mapbtn'));


			var $doc = $('html,body');
			let $target = $('#map-target');

			var abjustY = 0;

			if( SETTING.DEVICE == 'sp' ){
				abjustY = $('#l-header .header-sp').outerHeight();

			}else{
				abjustY = $('#l-header .header-pc').outerHeight() + 20;

			}
			var targetPositionTop	= $target.offset().top - abjustY - 20;

			$doc.stop().animate({
				scrollTop	: targetPositionTop
			},
			{
				duration	: 300,
				complete	: function () {
				}
			});
		});

	}

};








FUNC.fadeAnim = function(){
	function isScrolledIntoView(elem) {
		let docViewTop = $(window).scrollTop();
		let abjustHeight = 0;

		if( ( $(window).height() / 4 ) > 100){
			abjustHeight = 100;
		}else{
			abjustHeight = $(window).height() / 4;
		}




		let docViewBottom = docViewTop + $(window).height() - abjustHeight;

		let elemTop = $(elem).offset().top;
		let elemBottom = elemTop + $(elem).height();


		return ( docViewBottom > elemTop);
	}
	function fadeAnim() {
		$('[data-anim]').each(function() {
			let $this = $(this);
			if( $this.attr('data-anim') == ""){
				if (isScrolledIntoView(this) === true) {
					$this.attr("data-anim","on");
				}
			}
		});
	}


	$(window).on('load', function(){
		fadeAnim();
	});

	$(window).on('scroll', function(){
		fadeAnim();
	});

}





FUNC.cookie = function () {

	/***プライバシーポリシー同意のお願い***/
	const period = 365; // 有効期限日数

	// 1回目のアクセス
	if (!$.cookie('use_cookie') || $.cookie('use_cookie') == '0') {


		// メッセージの表示
		if( $('html').prop('lang') == "en") {
			$('<div class="m-box-policy"><div data-fixed><div class="policy-col"><div class="col-item item-left"><p class="m-txt-p">英語 ダミーテキスト 当Webサイトでは、サービスに関連する情報の提供や調査・分析等のため、Cookieを使用しています。</p></div><div class="col-item item-right"><p class="policy-btnwrap"><button class="btn-consent m-btn-simple"><span>Agree</span></button></p></div></div></div></div>').appendTo('body');
		}else{
			$('<div class="m-box-policy"><div data-fixed><div class="policy-col"><div class="col-item item-left"><p class="m-txt-p">日本語 ダミーテキスト 当Webサイトでは、サービスに関連する情報の提供や調査・分析等のため、Cookieを使用しています。</p></div><div class="col-item item-right"><p class="policy-btnwrap"><button class="btn-consent m-btn-simple"><span>同意する</span></button></p></div></div></div></div>').appendTo('body');
		}

		// メッセージの削除
		$(document).on('click', '.m-box-policy .policy-btnwrap button', function() {



			/*!
			 * jQuery Cookie Plugin v1.4.1
			 * https://github.com/carhartl/jquery-cookie
			 *
			 * Copyright 2006, 2014 Klaus Hartl
			 * Released under the MIT license
			 */
			(function (factory) {
				if (typeof define === 'function' && define.amd) {
					// AMD (Register as an anonymous module)
					define(['jquery'], factory);
				} else if (typeof exports === 'object') {
					// Node/CommonJS
					module.exports = factory(require('jquery'));
				} else {
					// Browser globals
					factory(jQuery);
				}
			}(function ($) {

				var pluses = /\+/g;

				function encode(s) {
					return config.raw ? s : encodeURIComponent(s);
				}

				function decode(s) {
					return config.raw ? s : decodeURIComponent(s);
				}

				function stringifyCookieValue(value) {
					return encode(config.json ? JSON.stringify(value) : String(value));
				}

				function parseCookieValue(s) {
					if (s.indexOf('"') === 0) {
						// This is a quoted cookie as according to RFC2068, unescape...
						s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
					}

					try {
						// Replace server-side written pluses with spaces.
						// If we can't decode the cookie, ignore it, it's unusable.
						// If we can't parse the cookie, ignore it, it's unusable.
						s = decodeURIComponent(s.replace(pluses, ' '));
						return config.json ? JSON.parse(s) : s;
					} catch(e) {}
				}

				function read(s, converter) {
					var value = config.raw ? s : parseCookieValue(s);
					return $.isFunction(converter) ? converter(value) : value;
				}

				var config = $.cookie = function (key, value, options) {

					// Write

					if (arguments.length > 1 && !$.isFunction(value)) {
						options = $.extend({}, config.defaults, options);

						if (typeof options.expires === 'number') {
							var days = options.expires, t = options.expires = new Date();
							t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
						}

						return (document.cookie = [
							encode(key), '=', stringifyCookieValue(value),
							options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
							options.path    ? '; path=' + options.path : '',
							options.domain  ? '; domain=' + options.domain : '',
							options.secure  ? '; secure' : ''
						].join(''));
					}

					// Read

					var result = key ? undefined : {},
						// To prevent the for loop in the first place assign an empty array
						// in case there are no cookies at all. Also prevents odd result when
						// calling $.cookie().
						cookies = document.cookie ? document.cookie.split('; ') : [],
						i = 0,
						l = cookies.length;

					for (; i < l; i++) {
						var parts = cookies[i].split('='),
							name = decode(parts.shift()),
							cookie = parts.join('=');

						if (key === name) {
							// If second argument (value) is a function it's a converter...
							result = read(cookie, value);
							break;
						}

						// Prevent storing a cookie that we couldn't decode.
						if (!key && (cookie = read(cookie)) !== undefined) {
							result[name] = cookie;
						}
					}

					return result;
				};

				config.defaults = {};

				$.removeCookie = function (key, options) {
					// Must not alter options, thus extending a fresh object...
					$.cookie(key, '', $.extend({}, options, { expires: -1 }));
					return !$.cookie(key);
				};

			}));
			/* =================================== */










			// cookie追加
			$.cookie('use_cookie', 'on', { path:'/', expires: period });

			$('.m-box-policy').addClass('use_cookie');
			setTimeout( function(){
				$('.m-box-policy').remove();

			},1000);

			return false;
		});

	}



};
