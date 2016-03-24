'use strict';

var mdClone = angular.module('mdClone', [
  'ngRoute',
  // 'ngResource',

  'mdClone.controller.productStore',
  'mdClone.controller.productDetail'
])

.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/product-store.html',
    controller: 'ProductStoreCtrl'
  })
  .when('/product/:productId', {
    templateUrl: 'views/product-detail.html',
    controller: 'ProductDetailCtrl'
  })
})
//
// .factory('Product', function($resourceProvider) {
  // return $resource('product/:productId.json', {}, {
  //   query: {method:'GET', params:{productId:'product'}, isArray:true}
  // });
// });

// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//             document.getElementById("label").innerHTML = width * 1 + '%';
//         }
//     }
// }
