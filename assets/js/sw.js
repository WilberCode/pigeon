/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/assets/js/sw.js ***!
  \*****************************/
; //asignar un nombre y versión al cache

var CACHE_NAME = 'pigeon_v1',
    urlsToCache = ['./', './assets/css/common.css', './assets/css/header_footer.css', './assets/css/top.css', './assets/js/library.js', './assets/js/function.js', './assets/js/datasearch.json', './index.php']; //durante la fase de instalación, generalmente se almacena en caché los activos estáticos

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(urlsToCache).then(function () {
      return self.skipWaiting();
    });
  })["catch"](function (err) {
    return console.log('Falló registro de cache', err);
  }));
}); //una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión

self.addEventListener('activate', function (e) {
  var cacheWhitelist = [CACHE_NAME];
  e.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cacheName) {
      //Eliminamos lo que ya no se necesita en cache
      if (cacheWhitelist.indexOf(cacheName) === -1) {
        return caches["delete"](cacheName);
      }
    }));
  }) // Le indica al SW activar el cache actual
  .then(function () {
    return self.clients.claim();
  }));
}); //cuando el navegador recupera una url

self.addEventListener('fetch', function (e) {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(caches.match(e.request).then(function (res) {
    if (res) {
      //recuperar del cache
      return res;
    } //recuperar de la petición a la url


    return fetch(e.request);
  }));
});
/******/ })()
;