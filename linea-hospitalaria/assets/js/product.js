jQuery(function($){
	setTimeout(function(){
		$('.product-slide').bxSlider({
			pagerCustom:'.product-pager'
		});
	},100);

	$('.js-popup-movie').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

});