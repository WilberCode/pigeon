
jQuery(function($){
	$('.slide').bxSlider({
		auto:true,
		mode:'fade',
		controls:false,
		pause:5000,
		speed:1000
	});
  $('.js-popup-movie').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  !function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){t(1),t(2),e.exports=t(7)},function(e,n){function t(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=Array.prototype.slice.call(document.querySelectorAll(".wph-datasearch li,.navs-list li,.menu-inner ul li")),o=document.querySelector(".search-input"),a=document.querySelector(".form-area"),u=[],l=[];function i(){r.map((function(e,n){u.push({name:e.getElementsByTagName("a")[0].textContent,link:e.getElementsByTagName("a")[0].href})})),l=function(e,n){return t(new Map(e.map((function(e){return[n(e),e]}))).values())}(u,(function(e){return e.link})),console.log(l)}$(window).on("load",(function(){i(),o.addEventListener("keyup",(function(e){if(""!=e.target.value){var n=l.filter((function(n){return n.name.toLowerCase().match(e.target.value.toLowerCase())})),t="";$(".inner-form > ul").html(""),$(".navs-search> ul").html(""),n.map((function(e){t+=' <li><a href="'.concat(e.link,' " >').concat(e.name,"</a></li> ")})),0==$(".inner-form > ul,.navs-search > ul").length?($(".inner-form").append('<ul class="wph-search-results" >'.concat(t," </ul>")),$(".navs-search").append('<ul class="wph-search-results" >'.concat(t," </ul>"))):($(".inner-form > ul").html(t),$(".navs-search> ul").html(t)),1==n.length&&(a.action=n[0].link)}else $(".inner-form > ul").html(""),$(".navs-search> ul").html(""),a.action=""}))}))},function(e,n){},,,,,function(e,n){}]);
});

