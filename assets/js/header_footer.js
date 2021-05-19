$(function () {
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

});