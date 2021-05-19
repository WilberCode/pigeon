$(function () {
	const $win = $(window);
	const $fixedAncWrapObj = $('[data-fixed-anc-wrap]');
	const $fixedAncObj = $('[data-fixed-anc]');
	const $digestObj = $('[data-digest]');
	const $boxBackObj = $('.u-box-back');
	let firstAncTop_absolute = 0; //アンカーリンクの初期位置(windowの絶対位置)
	let firstAncTop_relative = 0; //アンカーリンクの初期位置([data-digest]からの相対位置)
	let headerHeight = 0; //ヘッダーの高さ
	let scrollTop = 0; //スクロールの位置


	$win.on('scroll', $.throttle ( 150, function(){

		if(SETTING.DEVICE != 'sp'){
			scrollTop = $win.scrollTop() + headerHeight;

			if( scrollTop + 100 > firstAncTop_absolute){

				if( scrollTop + headerHeight + $fixedAncObj.height() > $('.u-box-digest').innerHeight() + $('.u-box-digest').offset().top - 50  ){

					$fixedAncWrapObj.css('position','absolute');
					$fixedAncObj.css( 'top' , $('.u-box-digest').innerHeight() - $fixedAncObj.height());
				}else{

					$fixedAncWrapObj.css('position','fixed');
					$fixedAncObj.css( 'top' , headerHeight + 100 );
				}
			}else{
				$fixedAncWrapObj.css('position','absolute');
				$fixedAncObj.css( 'top' , firstAncTop_relative );
			}


			let $targetObj; //アンカーリンクのカレント状態
			$('[data-age]').each(function(){
				const $this = $(this);

				if( scrollTop + 100 > $this.offset().top) {
					$targetObj = $('[data-fixed-anc]').find('> .list-item > [href="#' + $this.attr('id') + '"]');
				}

			});



			$('[data-fixed-anc]').find('> .list-item > a').removeClass(SETTING.ACTIVE);
			if($targetObj){
				$targetObj.addClass(SETTING.ACTIVE);
			}
		}


		/* 年数のアニメーション */
		shuffleAnim ();

	// });
	}));

	$win.on('resize', $.throttle ( 150, function(){

		ancReset();
		settingReset();

	// });
	}));


	//アンカーリンク初期位置設定
	function ancReset (){
		firstAncTop_absolute = $('[data-first-anc]').offset().top + 200;
		firstAncTop_relative = $('[data-first-anc]').offset().top + 200 - $digestObj.offset().top;
		$fixedAncObj.css( 'top' , firstAncTop_relative );
	}

	function settingReset (){
		headerHeight = $('#l-header').innerHeight();

	}

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



	function shuffleAnim (){
		$('.u-box-digest .digest-list .list-item > .item-head .head-txt .txt-num').each(function() {
			if (isScrolledIntoView(this) === true) {
				if(!$(this).hasClass('is-shuffle')){
					$(this).addClass('is-shuffle');
					let ctarget = $(this),
					cend = ctarget.data('count-end'),
					cstart = cend - 1500,
					countTimer;
					ctarget.text(cstart);
					function timer(){
						countTimer = setInterval(function(){
							let plusNum = 30 + Math.floor( Math.random() * 100 );
							cstart += plusNum;
							let countNext = cstart;
							if(countNext > cend){
								countNext = cend;
							}

							ctarget.text(countNext);
							if(countNext == cend){
								clearInterval(countTimer);
							}
						},50);
					}
					timer();
				}
			}
		});
	}
	// function shuffleAnim (){

	// 	var agent = window.navigator.userAgent.toLowerCase();
	// 	var ie11 = (agent.indexOf('trident/7') !== -1);

	// 	if( ie11 == true){
	// 		$('.u-box-digest .digest-list .list-item > .item-head .head-txt .txt-num').each(function() {
	// 			let ctarget = $(this),
	// 			cend = ctarget.data('count-end'),
	// 			cstart = cend - 1500;
	// 			ctarget.text(cend);
	// 		});
	// 	}else{

	// 		function shuffleProc() {
	// 			$('.u-box-digest .digest-list .list-item > .item-head .head-txt .txt-num').each(function() {
	// 				if (isScrolledIntoView(this) === true) {
	// 					if(!$(this).hasClass('is-shuffle')){
	// 						$(this).addClass('is-shuffle');
	// 						let ctarget = $(this),
	// 						cend = ctarget.data('count-end'),
	// 						cstart = cend - 1500,
	// 						countTimer;
	// 						ctarget.text(cstart);
	// 						function timer(){
	// 							countTimer = setInterval(function(){
	// 								let plusNum = 30 + Math.floor( Math.random() * 100 );
	// 								cstart += plusNum;
	// 								let countNext = cstart;
	// 								if(countNext > cend){
	// 									countNext = cend;
	// 								}

	// 								ctarget.text(countNext);
	// 								if(countNext == cend){
	// 									clearInterval(countTimer);
	// 								}
	// 							},50);
	// 						}
	// 						timer();
	// 					}
	// 				}
	// 			});
	// 		}


	// 		$(window).on('load', function(){
	// 			shuffleProc();
	// 		});

	// 		$(window).on('scroll', function(){
	// 			shuffleProc();
	// 		});
	// 	}



	// }



	function fadeAnim (){

		var agent = window.navigator.userAgent.toLowerCase();
		var ie11 = (agent.indexOf('trident/7') !== -1);

		if( ie11 == true){
			$('[data-history-anim]').attr("data-history-anim","on");
		}else{

			function fadeProc() {
				$('[data-history-anim]').each(function() {
					let $this = $(this);
					if( $this.attr('data-history-anim') == ""){
						if (isScrolledIntoView(this) === true) {
							$this.attr("data-history-anim","on");
						}
					}
				});
			}


			$(window).on('load', function(){
				fadeProc();
			});

			$(window).on('scroll', function(){
				fadeProc();
			});
		}
	}







	ancReset();
	settingReset();
	shuffleAnim ();
	fadeAnim();



});
