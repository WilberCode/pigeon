(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(q([])));x&&x!==r&&n.call(x,a)&&(w=x);var k=g.prototype=v.prototype=Object.create(w);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function q(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:E}}function E(){return{value:e,done:!0}}return y.prototype=k.constructor=g,g.constructor=y,y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},$(C.prototype),C.prototype[i]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new C(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},$(k),c(k,s,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(757),e=r.n(t);const n=function(t){var e;(e=jQuery).fn.casiano=function(t){e(this).on({keypress:function(e){var r=e.which,n=e.keyCode,o=String.fromCharCode(r).toLowerCase();(-1!=t.indexOf(o)||9==n||37!=r&&37==n||39==n&&39!=r||8==n||46==n&&46!=r)&&161!=r||e.preventDefault()}})};var r=function(){function e(e){return t("#mama").is(":checked")?(t(".modal-options-date [type=text]").addClass("required"),"day"==t("#day").attr("id")&&(parseInt(t("#day").val())<=31||(e+=parseInt(1),t("#day").addClass("requerido"))),"month"==t("#month").attr("id")&&(parseInt(t("#year").val())<(new Date).getFullYear()&&!(parseInt(t("#month").val())<=12)?(e+=parseInt(1),t("#month").addClass("requerido")):(parseInt(t("#year").val())!==(new Date).getFullYear()||parseInt(t("#month").val())<=(new Date).getMonth()+1||(e+=parseInt(1),t("#month").addClass("requerido")),parseInt(t("#year").val())!==(new Date).getFullYear()||parseInt(t("#day").val())<=(new Date).getDate()||(e+=parseInt(1),t("#day").addClass("requerido"),console.log(t("#day").val()))),parseInt(t("#month").val())||(e+=parseInt(1),t("#month").addClass("requerido"))),"year"==t("#year").attr("id")&&(parseInt(t("#year").val())<=(new Date).getFullYear()&&parseInt(t("#year").val())>=1980||(e+=parseInt(1),t("#year").addClass("requerido"))),t(".modal-options-date input").each((function(r,n){0===parseInt(t(this).val())&&(e+=parseInt(1),t(this).addClass("requerido"))}))):(t(".modal-options-date [type=text]").removeClass("required"),t(".modal-options-date [type=text]").removeClass("requerido")),e}t("#mama").click((function(){e(0)})),t(".modal-options-date [type=text]").click((function(){t("#mama").prop("checked",!0)})),t(".form").on("submit",(function(r){r.preventDefault(),t("input").removeClass("requerido");var o=t(this).data("nombre"),a=t(this).data("destino"),i=new FormData(document.getElementById(o)),s=0;t(".form").find(".required").each((function(e,r){var n=t(this).val();""==n||"PAÍS"==n?(s+=parseInt(1),t(this).addClass("requerido")):t(this).removeClass("requerido")})),function(e){t(e).removeClass(".requerido");var r=t(e).val();return!!/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(r.trim())}(".email")||(s+=parseInt(1),t(".email").addClass("requerido")),0!==e(0)&&(s=e(0)),0==s&&(!function(e,r){t.ajax({url:e,type:"POST",dataType:"HTML",data:r,cache:!1,contentType:!1,processData:!1,beforeSend:function(){},success:function(e){setTimeout((function(){t("#envioPigeon")[0].reset(),t("#envioPigeon").hide(),localStorage.setItem("suscrito","true")}),1e3),setTimeout((function(){n("#modal-message")}),2e3),setTimeout((function(){t("#modal-wrap").removeClass("modal-wrap-active"),t("html, body").css({overflow:"auto",height:"auto"})}),5e3)},error:function(){},complete:function(){}})}(a,i),t("#modal-send").attr("disabled",!0))}))},n=function(e){t(e).addClass("modal-message-active")};t(document).ready((function(){(t(".email").casiano("abcdefghijklmnopqrstuvwxyz1234567890@._-"),t(".texto").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ "),t(".number").casiano("1234567890"),t(".alfanumerico").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ "),t(".numerico").casiano("1234567890"),r(),"/"==window.location.pathname)?null==localStorage.getItem("suscrito")&&(setTimeout((function(){t("#modal-wrap").addClass("modal-wrap-active")}),2e3),t("html, body").css({overflow:"hidden",height:"100%"})):t("html, body").css({overflow:"auto",height:"auto"});window.matchMedia("(max-width: 640px)").matches&&t("[for='embarazada']").remove().clone().insertBefore(".nacimiento");var e=!0;t(".check").on("click",(function(r){r.preventDefault(),e?(t(this).removeClass("check_on"),e=!1,t("#txtcheck").val("No")):(t(this).addClass("check_on"),e=!0,t("#txtcheck").val("Si"))}))}))};const o=function(t){var e;(e=jQuery).fn.casiano=function(t){e(this).on({keypress:function(e){var r=e.which,n=e.keyCode,o=String.fromCharCode(r).toLowerCase();(-1!=t.indexOf(o)||9==n||37!=r&&37==n||39==n&&39!=r||8==n||46==n&&46!=r)&&161!=r||e.preventDefault()}})};var r=function(){t(".formlista").on("submit",(function(e){e.preventDefault(),t("input").removeClass("requerido");var r=t(this).data("nombre"),o=t(this).data("destino"),a=new FormData(document.getElementById(r)),i=0;(function(e){t(e).removeClass(".requerido");var r=t(e).val();return!!/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(r.trim())})(".email_lista")||(i+=parseInt(1),t(".email_lista").addClass("requerido")),t(".formlista").find(".required_lista").each((function(e,r){var n=t(this).val();""==n||"País"==n?(i+=parseInt(1),t(this).addClass("requerido")):t(this).removeClass("requerido")})),0==i&&(!function(e,r){t.ajax({url:e,type:"POST",dataType:"HTML",data:r,cache:!1,contentType:!1,processData:!1,beforeSend:function(){},success:function(e){setTimeout((function(){t("#envioFormLista")[0].reset(),t("#envioFormLista").hide()}),1e3),setTimeout((function(){n("#formlista-modal-message")}),1100),setTimeout((function(){t("#formlista-modal-wrap").removeClass("formlista-modal-wrap-active"),t("html, body").css({overflow:"auto",height:"auto"}),window.location.reload()}),3e3)},error:function(){},complete:function(){}})}(o,a),t("#formlista-modal-send").attr("disabled",!0))}))},n=function(e){t(e).addClass("formlista-modal-message-active")};t(document).ready((function(){t(".email_lista").casiano("abcdefghijklmnopqrstuvwxyz1234567890@._-"),t(".texto_lista").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ "),t(".number").casiano("1234567890"),t(".alfanumerico_lista").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ "),t(".numerico_lista").casiano("1234567890"),r();var e=!0;t(".check").on("click",(function(r){r.preventDefault(),e?(t(this).removeClass("check_on"),e=!1,t("#txtcheck").val("No")):(t(this).addClass("check_on"),e=!0,t("#txtcheck").val("Si"))}))}))};function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}function s(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=Array.prototype.slice.call(document.querySelectorAll(".wph-datasearch li,.navs-list li,.menu-inner ul li,.tl-countries li")),u=document.querySelector(".search-input"),f=document.querySelector(".form-area"),h=[],d=[];function p(){var t;l.map((function(t,e){h.push({name:t.getElementsByTagName("a")[0].textContent,link:t.getElementsByTagName("a")[0].href})})),t=function(t){return t.link},d=s(new Map(h.map((function(e){return[t(e),e]}))).values())}var m=Array.prototype.slice.call(document.querySelectorAll(".subcat .subcat-header")),v=[];function y(){return(y=i(e().mark((function t(){var r,n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/assets/js/categories.json");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,o=d.concat(n.results,v),u.addEventListener("keyup",(function(t){if(""!=t.target.value){var e=o.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())})),r="";$(".inner-form > ul").html(""),$(".navs-search> ul").html(""),e.map((function(t){r+=' <li><a href="'.concat(t.link,'"   >').concat(t.name,"</a></li> ")})),0==$(".inner-form > ul,.navs-search > ul").length?($(".inner-form").append('<ul class="wph-search-results" >'.concat(r," </ul>")),$(".navs-search").append('<ul class="wph-search-results" >'.concat(r," </ul>"))):($(".inner-form > ul").html(r),$(".navs-search> ul").html(r)),1==e.length&&(f.action=e[0].link),$(".wph-search-results li a").click((function(t){window.history.pushState("products","Products","".concat(location.origin))}))}else $(".inner-form > ul").html(""),$(".navs-search> ul").html(""),f.action=""}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}$(window).on("load",(function(){setTimeout((function(){p(),m.map((function(t,e){v.push({name:t.getElementsByTagName("span")[0].textContent,link:"".concat(location.origin+location.pathname,"#").concat(e+1)})})),function(){y.apply(this,arguments)}()}),4e3),$("#open-modal").click((function(){$("#modal-wrap").toggleClass("modal-wrap-active"),$("html, body").css({overflow:"hidden",height:"100%"})})),$("#modal-close").click((function(){$("#modal-wrap").removeClass("modal-wrap-active"),$("html, body").css({overflow:"auto",height:"auto"})})),$("#modal-close-wrap").click((function(){$("#modal-wrap").removeClass("modal-wrap-active"),$("html, body").css({overflow:"auto",height:"auto"})})),n($),$(".open-formlista-modal").on("click",(function(){$("#formlista-modal-wrap").toggleClass("formlista-modal-wrap-active"),$("html, body").css({overflow:"hidden",height:"100%"})})),$("#formlista-modal-close").click((function(){$("#formlista-modal-wrap").removeClass("formlista-modal-wrap-active"),$("html, body").css({overflow:"auto",height:"auto"})})),$("#formlista-modal-close-wrap").click((function(){$("#formlista-modal-wrap").removeClass("formlista-modal-wrap-active"),$("html, body").css({overflow:"auto",height:"auto"})})),o($),"pigeonlatam.com"==window.location.hostname&&setTimeout((function(){var t=$("   \n                \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e  \n                <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-199275406-1\"><\/script>\n                <script>\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n    \n                gtag('config', 'UA-199275406-1');\n                <\/script>\n            ");$("head").prepend(t)}),2e3),$(".form-products").submit((function(t){var e=$(this).serialize(),r=$(this).find("button[type=submit]");r.html("Agregando..."),$.ajax({url:"cart_process.php",type:"POST",dataType:"json",data:e}).done((function(t){$("#cart-info").html(t.items),r.replaceWith('<span class="flex items-center h-[29px]" ><img src="./images/check.svg" class="w-[21.38px]" ></span>'),"block"==$(".shopping-cart-box").css("display")&&$(".cart-box").trigger("click")})),t.preventDefault()})),$(".cart-box").click((function(t){t.preventDefault(),$(".shopping-cart-box").fadeIn(),$("#shopping-cart-results").html('<img src="images/ajax-loader.gif">'),$("#shopping-cart-results").load("cart_process.php",{load_cart:"1"})})),$(".close-shopping-cart-box").click((function(t){t.preventDefault(),$(".shopping-cart-box").fadeOut()})),$("#shopping-cart-results").on("click","a.remove-item",(function(t){t.preventDefault();var e=$(this).attr("data-code");$(this).parent().fadeOut(),$.getJSON("cart_process.php",{remove_code:e},(function(t){$("#cart-info").html(t.items),$(".cart-box").trigger("click")})),$("#product-".concat(e,"  span")).replaceWith('   <button class="border-2 border-white border-solid bg-transparent px-2 py-1 leading-8 text-middle " type="submit">Elegir</button>')})),$("#shopping-cart-results").on("click","button.register-from-cart",(function(t){t.preventDefault(),$("#formlista-modal-wrap").toggleClass("formlista-modal-wrap-active"),$("html, body").css({overflow:"hidden",height:"100%"})}))})),"serviceWorker"in navigator&&navigator.serviceWorker.register("assets/js/sw.js").then((function(t){return console.log("Registro de SW exitoso",t)})).catch((function(t){return console.warn("Error al tratar de registrar el sw",t)}))})()})();