/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/assets/js/validateForm.js":
/*!***************************************!*\
  !*** ./src/assets/js/validateForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var validateForm = function validateForm($) {
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
          $('#envioPigeon')[0].reset();
          $("#envioPigeon").hide();
          localStorage.setItem('suscrito', 'true');
        }, 1000);
        setTimeout(function () {
          activeMessage("#modal-message");
        }, 2000);
        setTimeout(function () {
          $('#modal-wrap').removeClass('modal-wrap-active');
          $('html, body').css({
            overflow: 'auto',
            height: 'auto'
          });
        }, 5000);
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
    function valiteCheck(valor) {
      if ($("#mama").is(':checked')) {
        $(".modal-options-date [type=text]").addClass('required');

        if ($("#day").attr('id') == 'day') {
          if (!(parseInt($("#day").val()) <= 31)) {
            valor = valor + parseInt(1);
            $("#day").addClass('requerido');
          }
        }

        if ($("#month").attr('id') == 'month') {
          if (parseInt($("#year").val()) < new Date().getFullYear() && !(parseInt($("#month").val()) <= 12)) {
            valor = valor + parseInt(1);
            $("#month").addClass('requerido');
          } else {
            if (parseInt($("#year").val()) === new Date().getFullYear() && !(parseInt($("#month").val()) <= new Date().getMonth() + 1)) {
              valor = valor + parseInt(1);
              $("#month").addClass('requerido');
            }

            if (parseInt($("#year").val()) === new Date().getFullYear() && !(parseInt($("#day").val()) <= new Date().getDate())) {
              valor = valor + parseInt(1);
              $("#day").addClass('requerido');
              console.log($("#day").val());
            }
          }

          if (!parseInt($("#month").val())) {
            valor = valor + parseInt(1);
            $("#month").addClass('requerido');
          }
        }

        if ($("#year").attr('id') == 'year') {
          if (!(parseInt($("#year").val()) <= new Date().getFullYear()) || !(parseInt($("#year").val()) >= 1980)) {
            valor = valor + parseInt(1);
            $("#year").addClass('requerido');
          }
          /*  if(!(parseInt($("#month").val()) <=(new Date().getMonth() + 1))){
               valor = valor + parseInt(1);
               $("#month").addClass('requerido');
           }  */

          /*   if(parseInt($("#year").val()) < new Date().getFullYear() && !(parseInt($("#month").val())<= 12) ){
                valor = valor + parseInt(1);
                $("#month").addClass('requerido');
            }  */

        }

        $('.modal-options-date input').each(function (index, el) {
          if (parseInt($(this).val()) === 0) {
            valor = valor + parseInt(1);
            $(this).addClass('requerido');
          }
        });
      } else {
        $(".modal-options-date [type=text]").removeClass('required');
        $(".modal-options-date [type=text]").removeClass('requerido');
      }

      return valor;
    }

    $("#mama").click(function () {
      valiteCheck(0);
    });
    $(".modal-options-date [type=text]").click(function () {
      $("#mama").prop('checked', true);
    });
    $(".form").on('submit', function (event) {
      event.preventDefault();
      $("input").removeClass('requerido');
      var nombrefrm = $(this).data("nombre");
      var destino = $(this).data("destino");
      var formData = new FormData(document.getElementById(nombrefrm));
      var valor = 0;
      $(".form").find(".required").each(function (index, el) {
        var required = $(this).val();

        if (required == "" || required == 'PAÍS') {
          valor = valor + parseInt(1);
          $(this).addClass('requerido');
        } else {
          $(this).removeClass('requerido');
        }
      });

      if (!valida_email(".email")) {
        valor = valor + parseInt(1);
        $(".email").addClass('requerido');
      }

      if (valiteCheck(0) !== 0) {
        valor = valiteCheck(0);
      } //validar campos comparados

      /*      $(".form").find(".compare").each(function(index, el) {
               var compare_input_data = $(this).data("compare_input_class");
               var compare_input = $(this).val();
               var compared_input = $("."+compare_input).val();
                 //Campo a comparar vacío
               if (compared_input == "") {
                   valor = valor + parseInt(1);
                   $("."+compare_input).addClass('requerido');
               }
               //campo comparado vacío
               if (compare_input == "") {
                   valor = valor + parseInt(1);
                   $(this).addClass('requerido');
               }
               // Si el valor de los campos son iguales
               if (compare_input != compared_input) {
                   valor = valor + parseInt(1);
                   $(this).addClass('requerido');
               }
             }); */


      if (valor == 0) {
        formulario_envio(destino, formData);
        $("#modal-send").attr("disabled", true);
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
    $(id).addClass('modal-message-active');
  };

  $(document).ready(function () {
    //Cargamos la funcion de restricción de caracteres
    $(".email").casiano("abcdefghijklmnopqrstuvwxyz1234567890@._-");
    $(".texto").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ ");
    $(".number").casiano("1234567890");
    $(".alfanumerico").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ ");
    $(".numerico").casiano("1234567890"); //Cargamos la funcion del formulario  

    formulario();

    if (window.location.pathname == '/') {
      var suscrito = localStorage.getItem('suscrito');

      if (suscrito == null) {
        setTimeout(function () {
          $('#modal-wrap').addClass('modal-wrap-active');
        }, 2000);
        $('html, body').css({
          overflow: 'hidden',
          height: '100%'
        });
      }
    } else {
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
    }

    if (window.matchMedia('(max-width: 640px)').matches) {
      $("[for='embarazada']").remove().clone().insertBefore(".nacimiento");
    } //--
    //Cargamos la funcion del ancla

    /*  ancla(); */
    //--
    //Cargamos los tag principales y màs utilizadas para el maxwidth y minwidth almacenando en un Array los nombres de los tags

    /*  var tagsHTML = ["a", "article", "aside", "button", "div", "figcapion", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "img", "input", "label", "li", "legend", "nav", "ol", "p", "section", "select", "span", "strong", "textarea", "ul"];
       for (var i = 0; i < tagsHTML.length; i++) {
         max_min_width(tagsHTML[i]);
     }
    */


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
    }); // alert($(window).width());
    //--
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);

/***/ }),

/***/ "./src/assets/js/validateFormLista.js":
/*!********************************************!*\
  !*** ./src/assets/js/validateFormLista.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        }, 5000);
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

      if (!valida_email(".email")) {
        valor = valor + parseInt(1);
        $(".email").addClass('requerido');
      }

      $(".formlista").find(".required").each(function (index, el) {
        var required = $(this).val();

        if (required == "" || required == 'País') {
          valor = valor + parseInt(1);
          $(this).addClass('requerido');
        } else {
          $(this).removeClass('requerido');
        }
      });
      /*   if( $("#embarazo").attr('value') > 10){ 
                valor = valor + parseInt(1);
                $("#embarazo").addClass('requerido');   
                $("#embarazo").attr('required', null);
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
    $(".email").casiano("abcdefghijklmnopqrstuvwxyz1234567890@._-");
    $(".texto").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ ");
    $(".number").casiano("1234567890");
    $(".alfanumerico").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ ");
    $(".numerico").casiano("1234567890"); //Cargamos la funcion del formulario  

    formulario();
    /*  if ( window.location.pathname == '/' ){ 
       let suscrito = localStorage.getItem('suscrito')
         if(suscrito == null){ 
             setTimeout(function(){
                 $('#modal-wrap').addClass('modal-wrap-active');
             },2000)
             $('html, body').css({
                 overflow: 'hidden',
                 height: '100%'
             });
         }
     } else{  
         $('html, body').css({
             overflow: 'auto',
             height: 'auto'
         });
     }  */

    /*  if(window.matchMedia('(max-width: 640px)').matches) {
         $( "[for='embarazada']" ).remove().clone().insertBefore( ".nacimiento" );
        
      } */
    //--
    //Cargamos la funcion del ancla

    /*  ancla(); */
    //--
    //Cargamos los tag principales y màs utilizadas para el maxwidth y minwidth almacenando en un Array los nombres de los tags

    /*  var tagsHTML = ["a", "article", "aside", "button", "div", "figcapion", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "img", "input", "label", "li", "legend", "nav", "ol", "p", "section", "select", "span", "strong", "textarea", "ul"];
           for (var i = 0; i < tagsHTML.length; i++) {
         max_min_width(tagsHTML[i]);
     }
    */

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
    }); // alert($(window).width());
    //--
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateFormLista);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateForm */ "./src/assets/js/validateForm.js");
/* harmony import */ var _validateFormLista__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateFormLista */ "./src/assets/js/validateFormLista.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var wphDatasearch = Array.prototype.slice.call(document.querySelectorAll('.wph-datasearch li,.navs-list li,.menu-inner ul li,.tl-countries li'));
var searchBtn = document.querySelector('.search-input');
var formArea = document.querySelector('.form-area');
var wphalldatali = [];
var wphdataforsearch = [];

function getDataForSearch() {
  wphDatasearch.map(function (li, i) {
    wphalldatali.push({
      name: li.getElementsByTagName('a')[0].textContent,
      link: li.getElementsByTagName('a')[0].href
    });
  });
  wphdataforsearch = uniqByKeepLast(wphalldatali, function (a) {
    return a.link;
  });
}

function uniqByKeepLast(a, key) {
  return _toConsumableArray(new Map(a.map(function (x) {
    return [key(x), x];
  })).values());
}

var products = Array.prototype.slice.call(document.querySelectorAll('.subcat .subcat-header'));
var dataProducts = [];

function getDataForSearchProducts() {
  products.map(function (span, index) {
    dataProducts.push({
      name: span.getElementsByTagName('span')[0].textContent,
      link: "".concat(location.origin + location.pathname, "#").concat(index + 1)
    });
  });
}

function filterSearch() {
  return _filterSearch.apply(this, arguments);
}
/*   function lowercaseAndRemoveAccent(text){
    return text.toLowerCase().replace(new RegExp("[áéíóú'´]", 'g'), "aeiou")
} */


function _filterSearch() {
  _filterSearch = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var dataJson, dataCategories, wphalldataforsearch;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/assets/js/categories.json');

          case 2:
            dataJson = _context.sent;
            _context.next = 5;
            return dataJson.json();

          case 5:
            dataCategories = _context.sent;
            wphalldataforsearch = wphdataforsearch.concat(dataCategories.results, dataProducts);
            searchBtn.addEventListener('keyup', function (e) {
              if (e.target.value != '') {
                var wphsearchfiltered = wphalldataforsearch.filter(function (data) {
                  return data.name.toLowerCase().includes(e.target.value.toLowerCase());
                });
                var li = '';
                $('.inner-form > ul').html('');
                $('.navs-search> ul').html('');
                wphsearchfiltered.map(function (data) {
                  li += " <li><a href=\"".concat(data.link, "\"   >").concat(data.name, "</a></li> ");
                });

                if ($('.inner-form > ul,.navs-search > ul').length == 0) {
                  $('.inner-form').append("<ul class=\"wph-search-results\" >".concat(li, " </ul>"));
                  $('.navs-search').append("<ul class=\"wph-search-results\" >".concat(li, " </ul>"));
                } else {
                  $('.inner-form > ul').html(li);
                  $('.navs-search> ul').html(li);
                }

                if (wphsearchfiltered.length == 1) {
                  formArea.action = wphsearchfiltered[0].link;
                }

                $('.wph-search-results li a').click(function (e) {
                  window.history.pushState('products', 'Products', "".concat(location.origin));
                });
              } else {
                $('.inner-form > ul').html('');
                $('.navs-search> ul').html('');
                formArea.action = '';
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _filterSearch.apply(this, arguments);
}

var gTag = function gTag() {
  setTimeout(function () {
    var scriptGtag = $("   \n            <!-- Global site tag (gtag.js) - Google Analytics -->  \n            <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-199275406-1\"></script>\n            <script>\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'UA-199275406-1');\n            </script>\n        ");
    $('head').prepend(scriptGtag);
  }, 2000);
};

var toogleModal = function toogleModal() {
  $('#open-modal').click(function () {
    $('#modal-wrap').toggleClass('modal-wrap-active');
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  });
  $('#modal-close').click(function () {
    $('#modal-wrap').removeClass('modal-wrap-active');
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  });
  $('#modal-close-wrap').click(function () {
    $('#modal-wrap').removeClass('modal-wrap-active');
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  });
};

var toogleFormlistaModal = function toogleFormlistaModal() {
  $('#open-formlista-modal').click(function () {
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

$(window).on('load', function () {
  setTimeout(function () {
    getDataForSearch();
    getDataForSearchProducts();
    filterSearch();
  }, 4000);
  gTag();
  toogleModal();
  (0,_validateForm__WEBPACK_IMPORTED_MODULE_1__.default)($);
  /*Pertenece a la pagina de lista - Start */

  toogleFormlistaModal();
  (0,_validateFormLista__WEBPACK_IMPORTED_MODULE_2__.default)($);
  /* End */
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('assets/js/sw.js').then(function (reg) {
    return console.log('Registro de SW exitoso', reg);
  })["catch"](function (err) {
    return console.warn('Error al tratar de registrar el sw', err);
  });
}
})();

/******/ })()
;