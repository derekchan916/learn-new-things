(function() {
  var app = angular.module('mdClone', [
    'mdClone.controller.productList'
  ])

  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider
  //   .when('/products/:productId', {
  //     templateUrl: '../views/product-detail.html'
  //   })
  //   .otherwise({
  //     redirectTo: '/'
  //   })
  // }])
})();

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
