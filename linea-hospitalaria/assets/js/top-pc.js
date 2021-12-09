jQuery(function($){
	jQuery('.product-nav').masonry({
		itemSelector: '.product-nav section',
		columnWidth: 306,
		gutter: 31
	});
  var myHash = location.hash;
  if(!myHash){return;}
  console.log('find a hashtag');
  var go2Num = jQuery(myHash).offset().top - jQuery("header#l-header").height() - 20;
  jQuery('html,body').animate({scrollTop: go2Num});
  return false;
});