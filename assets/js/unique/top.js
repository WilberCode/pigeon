$((function(){var t=$("[data-top-map]").attr("class");$("[data-top-mapbtn]").hover((function(){area=$(this).data("top-mapbtn"),area="bg-"+area,$("[data-top-map]").addClass(area)}),(function(){$("[data-top-map]").attr("class",t)})),$("[data-mainv-button]").on("click",(function(){"pc"!=SETTING.DEVICE&&($this=$(this),$this.parents("[data-mainv-item]").toggleClass(SETTING.ACTIVE),$this.parents("[data-mainv-item]").find("[data-mainv-body]").slideToggle(800))}))})),$(window).on("load",(function(){if(FUNC.getUA(),SETTING.UA.isMSIE)$(".u-top-loading").hide(),$(".u-top-loading-fade").hide();else if(FUNC.getDevice(1),"pc"==SETTING.DEVICE){function t(){.7*$(window).width()<$(window).height()&&$(".loading-bg").addClass("is-vert"),setTimeout((function(){$(".loading-pre").css("opacity",0)}),300),setTimeout((function(){$(".u-top-loading-fade").fadeOut(1500)}),3e3)}usecookie=1,0==usecookie?$(".u-top-loading-fade").length&&t():("visited"==$.cookie("pigeontop")?$(".u-top-loading-fade").fadeOut(300):$(".u-top-loading-fade").length&&t(),$.cookie("pigeontop","visited",{expires:1}))}if("sp"==SETTING.DEVICE?actspace=15:actspace=60,"pc"!=SETTING.DEVICE){var e=new Swiper("[data-top-actionbg-sp]",{loop:!1,slidesPerView:1,effect:"fade"}),a=new Swiper("[data-top-actionbtn]",{loop:!1,slidesPerView:"auto",spaceBetween:actspace,centeredSlides:!0});e.controller.control=a,a.controller.control=e}else{var i=new Swiper("[data-top-actionbg-pc]",{loop:!1,slidesPerView:1,effect:"fade"});$("[data-top-actbtnpc]").hover((function(){act=$(this).data("top-actbtnpc"),i.slideTo(Number(act)-1,300),$("[data-top-actbtnpc]").removeClass("is-active"),$(this).addClass("is-active")}),(function(){})),$("[data-top-actbtnpc]").on("click",(function(t){t.preventDefault();var e=$(this).attr("href");$(this).removeClass("is-active"),$(this).addClass("is-anim"),$("#l-header").hide(),setTimeout((function(){location.href=e}),1e3)}))}var n,o,p;n=!0,"sp"==SETTING.DEVICE?$("[data-top-featuer] .swiper-slide").length<=1&&($("[data-top-featuer]").parents(".featuer-slider").find(".ctrl-button").hide(),$("[data-top-featuer]").parents(".featuer-slider").find(".ctrl-pagination").hide(),n=!1):$("[data-top-featuer] .swiper-slide").length<=3&&($("[data-top-featuer]").parents(".featuer-slider").find(".ctrl-button").hide(),$("[data-top-featuer]").parents(".featuer-slider").find(".ctrl-pagination").hide(),n=!1),new Swiper("[data-top-featuer]",{loop:n,pagination:{el:"[data-top-featuernav]",clickable:!0},navigation:{nextEl:"[data-top-featuernxt]",prevEl:"[data-top-featuerprv]"},slidesPerView:3,spaceBetween:20,breakpoints:{767:{slidesPerView:1,spaceBetween:0}}}),o=!0,"sp"==SETTING.DEVICE?$("[data-top-pickup] .swiper-slide").length<=1&&($("[data-top-pickup]").parents(".pickup-slider").find(".ctrl-button").hide(),$("[data-top-pickup]").parents(".pickup-slider").find(".ctrl-pagination").hide(),o=!1):$("[data-top-pickup] .swiper-slide").length<=2&&($("[data-top-pickup]").parents(".pickup-slider").find(".ctrl-button").hide(),$("[data-top-pickup]").parents(".pickup-slider").find(".ctrl-pagination").hide(),o=!1),new Swiper("[data-top-pickup]",{loop:o,pagination:{el:"[data-top-pickupnav]",clickable:!0},navigation:{nextEl:"[data-top-pickupnxt]",prevEl:"[data-top-pickupprv]"},slidesPerView:2,spaceBetween:40,breakpoints:{767:{slidesPerView:1,spaceBetween:0}}}),FUNC.modal(),$(".u-box-mainv .mainv-list .list-item").on({mouseenter:function(){$target=$(this),p=setTimeout((function(){$target.addClass("is-active")}),300)},mouseleave:function(){$(this).removeClass("is-active"),clearTimeout(p)}}),function(){if("pc"!=SETTING.DEVICE&&$(".u-box-mainv_sp .mainv-slider").length){var t=!0;$("[data-top-mainv] .swiper-slide").length<=1&&($("[data-top-mainv]").parents(".mainv-slider").find(".ctrl-button").hide(),$("[data-top-mainv]").parents(".mainv-slider").find(".ctrl-pagination").hide(),t=!1);new Swiper("[data-top-mainv]",{loop:t,effect:"fade",allowTouchMove:t,speed:300,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:"[data-top-mainvnav]",clickable:!0},navigation:{nextEl:"[data-top-mainvnxt]",prevEl:"[data-top-mainvprv]"},slidesPerView:1,spaceBetween:0})}}()}));