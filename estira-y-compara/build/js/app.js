/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_validateFormLista__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/validateFormLista */ "./assets/js/components/validateFormLista.js");

$(window).on('load', function () {
  Object(_components_validateFormLista__WEBPACK_IMPORTED_MODULE_0__["default"])($);

  var toogleFormlistaModal = function toogleFormlistaModal() {
    $('.open-formlista-modal').on('click', function () {
      $('#formlista-modal-wrap').toggleClass('formlista-modal-wrap-active');
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
    });
    $('#formlista-modal-close').click(function () {
      $('#formlista-modal-wrap').removeClass('formlista-modal-wrap-active');
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
    });
    $('#formlista-modal-close-wrap').click(function () {
      $('#formlista-modal-wrap').removeClass('formlista-modal-wrap-active');
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
    });
  };

  toogleFormlistaModal();
}); // JavaScript

var videos = document.querySelectorAll(".video");
var gifs = document.querySelectorAll(".gif");

function checkIfInView(video) {
  var rect = video.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var inView = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

  if (inView) {
    var data_src = video.dataset.src;

    if (video.src == '') {
      video.src = data_src;
    }

    video.play();
  } else {
    video.pause();
  }
}

function checkIfInViewGif(gif) {
  var rect = gif.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var inView = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

  if (inView) {
    var data_git_src = gif.dataset.gifsrc;
    gif.src = data_git_src;
  }
} // reproduce los videos cuando se carga la página


videos.forEach(function (video) {
  video.play();
  video.preload = 'metadata';
}); // revisa si cada video está en el viewport al desplazarse o cambiar el tamaño de la ventana

window.addEventListener("scroll", function () {
  videos.forEach(function (video) {
    checkIfInView(video);
  });
  gifs.forEach(function (gif) {
    checkIfInViewGif(gif);
  });
});
window.addEventListener("resize", function () {
  videos.forEach(function (video) {
    checkIfInView(video);
  });
  gifs.forEach(function (gif) {
    checkIfInViewGif(gif);
  });
});
document.getElementById('autoplay').play();

/***/ }),

/***/ "./assets/js/components/validateFormLista.js":
/*!***************************************************!*\
  !*** ./assets/js/components/validateFormLista.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var validateFormLista = function validateFormLista($) {
  /*================================================================================
  * max_min_width() Funcion que determina el ancho máximo y mínimo de una etiqueta*
  ==================================================================================*/

  /* var max_min_width = function( tag ){
      $(tag). each(function(index, el) {
          var maxwidth = $(this).data('maxwidth');
          var minwidth = $(this).data('minwidth');
  
          if (maxwidth != undefined) {
              $(this).css('max-width', maxwidth);
          }
          if (minwidth != undefined) {
              $(this).css('min-width', minwidth);
          }
      });
  }; */

  /*================================================================================
  * LimpiarForm() Funcion que limpia los campos de un formulario*
  ==================================================================================*/
  var LimpiarForm = function LimpiarForm(miForm) {
    $(':input', miForm).each(function () {
      var type = this.type;
      var tag = this.tagName.toLowerCase();
      if (type == 'text' || type == 'password' || tag == 'textarea') this.value = "";else if (type === 'checkbox' || type == 'radio') this.checked = false;else if (tag == 'select') this.selectedIndex = -1;
    });
  };
  /*================================================================================
  * casiano() Funciòn que establece los limites alphanumèricos o numericos en un
    campo del formulario sin importar cuales desee solo aceptarà los caracteres que
    se mencionen*
  ==================================================================================*/


  (function (a) {
    a.fn.casiano = function (b) {
      a(this).on({
        keypress: function keypress(a) {
          var c = a.which;
          var d = a.keyCode;
          var e = String.fromCharCode(c).toLowerCase();
          var f = b;
          (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault();
        }
      });
    };
  })(jQuery);
  /*================================================================================
  * formulario_envio() Funcion que hace el envío de información de un formulario
    mediante ajax*
  ==================================================================================*/


  var formulario_envio = function formulario_envio(destino, datafrm) {
    $.ajax({
      url: destino,
      type: "POST",
      dataType: "HTML",
      data: datafrm,
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function beforeSend() {},
      success: function success(data) {
        setTimeout(function () {
          $('#envioFormLista')[0].reset();
          $("#envioFormLista").hide();
        }, 1000);
        setTimeout(function () {
          activeMessage("#formlista-modal-message");
        }, 1100);
        setTimeout(function () {
          $('#formlista-modal-wrap').removeClass('formlista-modal-wrap-active');
          $('html, body').css({
            overflow: 'auto',
            height: 'auto'
          });
          window.location.reload();
        }, 3000);
      },
      error: function error() {},
      complete: function complete() {}
    });
  };

  var valida_email = function valida_email(tag) {
    $(tag).removeClass('.requerido');
    var validarMail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var valor_email = $(tag).val();

    if (!validarMail.test(valor_email.trim())) {
      return false;
    } else {
      return true;
    }
  };
  /*================================================================================
  * formulario() Funcion realiza la validación respectiva de un formulario antes de
    enviar sus datos*
  ==================================================================================*/


  var formulario = function formulario() {
    $(".formlista").on('submit', function (event) {
      event.preventDefault();
      $("input").removeClass('requerido');
      var nombrefrm = $(this).data("nombre");
      var destino = $(this).data("destino");
      var formData = new FormData(document.getElementById(nombrefrm));
      var valor = 0;

      if (!valida_email(".email_lista")) {
        valor = valor + parseInt(1);
        $(".email_lista").addClass('requerido');
      }

      $(".formlista").find(".required_lista").each(function (index, el) {
        var required_lista = $(this).val();

        if (required_lista == "" || required_lista == 'País') {
          valor = valor + parseInt(1);
          $(this).addClass('requerido');
        } else {
          $(this).removeClass('requerido');
        }
      });
      /*   if( $("#embarazo").attr('value') > 10){ 
                valor = valor + parseInt(1);
                $("#embarazo").addClass('requerido');   
                $("#embarazo").attr('required_lista', null);
        } */

      if (valor == 0) {
        formulario_envio(destino, formData);
        $("#formlista-modal-send").attr("disabled", true);
      }
    });
  };
  /*================================================================================
  * ancla() Funcion que permite anclar elementos posicionados en una pagina web *
  ==================================================================================*/

  /* var ancla = function(){
      $(".ancla").on('click',  function(event) {
          event.preventDefault();
          var href = $(this).attr('href');
          var bleed = $(this).data("ancla_bleed"); // Espacio en pixeles al top de la pantalla
          if (bleed != undefined) {
              $('html, body').animate({
                  scrollTop:bleed
              }, 2000);
              return false;
          }
          else{
              $('html, body').animate({
                  scrollTop: $(href).offset().top
              }, 1000);
          }
      });
  }; */

  /*================================================================================
  * close_modal() Funcion que permite cerrar los modals activos *
  ==================================================================================*/


  var close_modal = function close_modal() {
    $(".overflow").addClass('fadeOutOverflow').removeClass('fadeInOverflow');
    $(".mensaje_modal").addClass('fadeOutOverflowMensaje').removeClass('fadeInOverflowMensaje');
  };
  /*================================================================================
  * open_modal() Funcion que permite abrir un modal en específico *
  ==================================================================================*/


  var activeMessage = function activeMessage(id) {
    //$(".overflow").addClass('fadeInOverflow').removeClass('fadeOutOverflow');
    $(id).addClass('formlista-modal-message-active');
  };

  $(document).ready(function () {
    //Cargamos la funcion de restricción de caracteres
    $(".email_lista").casiano("abcdefghijklmnopqrstuvwxyz1234567890@._-");
    $(".texto_lista").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ ");
    $(".number").casiano("1234567890");
    $(".alfanumerico_lista").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ ");
    $(".numerico_lista").casiano("1234567890"); //Cargamos la funcion del formulario  

    formulario();
    var check = true;
    $(".check").on('click', function (event) {
      event.preventDefault();

      if (check) {
        $(this).removeClass("check_on");
        check = false;
        $("#txtcheck").val("No");
      } else {
        $(this).addClass("check_on");
        check = true;
        $("#txtcheck").val("Si");
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (validateFormLista);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\web\pigeonlanding\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\web\pigeonlanding\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });