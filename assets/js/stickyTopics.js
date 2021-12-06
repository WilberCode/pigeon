<<<<<<< HEAD
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/stickyTopics.js":
/*!***************************************!*\
  !*** ./src/assets/js/stickyTopics.js ***!
  \***************************************/
/***/ (() => {

$(window).on('load', function () {
  var stickyTopics = $('#faqs-topics-wrap').offset().top;

  function stickyTopicsTop() {
    if (window.pageYOffset > stickyTopics) {
      $('.faqs-topics-wrap').addClass('faqs-topics-sticky');
    } else {
      $('.faqs-topics-wrap').removeClass('faqs-topics-sticky');
    }
  }

  window.onscroll = function () {
    stickyTopicsTop();
  };
});

/***/ }),

/***/ "./src/assets/scss/pages/products.scss":
/*!*********************************************!*\
  !*** ./src/assets/scss/pages/products.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scss/pages/tiendaslatam.scss":
/*!*************************************************!*\
  !*** ./src/assets/scss/pages/tiendaslatam.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scss/pages/frequentquestions.scss":
/*!******************************************************!*\
  !*** ./src/assets/scss/pages/frequentquestions.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/stickyTopics": 0,
/******/ 			"assets/css/app": 0,
/******/ 			"assets/css/frequentquestions": 0,
/******/ 			"assets/css/tiendaslatam": 0,
/******/ 			"assets/css/products": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpigeon"] = self["webpackChunkpigeon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/app","assets/css/frequentquestions","assets/css/tiendaslatam","assets/css/products"], () => (__webpack_require__("./src/assets/js/stickyTopics.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/app","assets/css/frequentquestions","assets/css/tiendaslatam","assets/css/products"], () => (__webpack_require__("./src/assets/scss/pages/products.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/app","assets/css/frequentquestions","assets/css/tiendaslatam","assets/css/products"], () => (__webpack_require__("./src/assets/scss/pages/tiendaslatam.scss")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/app","assets/css/frequentquestions","assets/css/tiendaslatam","assets/css/products"], () => (__webpack_require__("./src/assets/scss/pages/frequentquestions.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/app","assets/css/frequentquestions","assets/css/tiendaslatam","assets/css/products"], () => (__webpack_require__("./src/assets/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
=======
(()=>{var o,r={350:()=>{$(window).on("load",(function(){var o=$("#faqs-topics-wrap").offset().top;window.onscroll=function(){window.pageYOffset>o?$(".faqs-topics-wrap").addClass("faqs-topics-sticky"):$(".faqs-topics-wrap").removeClass("faqs-topics-sticky")}}))},276:()=>{},904:()=>{},458:()=>{},970:()=>{}},e={};function s(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return r[o](i,i.exports,s),i.exports}s.m=r,o=[],s.O=(r,e,a,i)=>{if(!e){var n=1/0;for(f=0;f<o.length;f++){for(var[e,a,i]=o[f],t=!0,p=0;p<e.length;p++)(!1&i||n>=i)&&Object.keys(s.O).every((o=>s.O[o](e[p])))?e.splice(p--,1):(t=!1,i<n&&(n=i));t&&(o.splice(f--,1),r=a())}return r}i=i||0;for(var f=o.length;f>0&&o[f-1][2]>i;f--)o[f]=o[f-1];o[f]=[e,a,i]},s.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),(()=>{var o={484:0,464:0,661:0,798:0,10:0};s.O.j=r=>0===o[r];var r=(r,e)=>{var a,i,[n,t,p]=e,f=0;for(a in t)s.o(t,a)&&(s.m[a]=t[a]);if(p)var v=p(s);for(r&&r(e);f<n.length;f++)i=n[f],s.o(o,i)&&o[i]&&o[i][0](),o[n[f]]=0;return s.O(v)},e=self.webpackChunkpigeon=self.webpackChunkpigeon||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),s.O(void 0,[464,661,798,10],(()=>s(350))),s.O(void 0,[464,661,798,10],(()=>s(276))),s.O(void 0,[464,661,798,10],(()=>s(904))),s.O(void 0,[464,661,798,10],(()=>s(458)));var a=s.O(void 0,[464,661,798,10],(()=>s(970)));a=s.O(a)})();
>>>>>>> dev
