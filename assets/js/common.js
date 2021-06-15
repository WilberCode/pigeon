$(function () {
	/*
		init
	*/
	// FUNC.pageTop(true,true);
	FUNC.smoothScroll();
	FUNC.getUA();
	FUNC.getDevice(1);
	FUNC.jsPnav();
	FUNC.lNavCurrentInit();
	FUNC.accordion();
	FUNC.modal();
	FUNC.viewHeightFixed();
	FUNC.header();
	deSVG('[data-svg]', true);
	FUNC.tab();
	FUNC.selectChangeLocation();
	FUNC.globalnetwork();
    // FUNC.cookie(); 

	if( SETTING.DEVICE == 'sp' ) {
		FUNC.transTableScroll();
	} 
});
  
FUNC.pageLoad();
FUNC.currentCheck();
FUNC.pluginTileJsInit();
FUNC.fadeAnim();