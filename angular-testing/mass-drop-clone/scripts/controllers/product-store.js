(function() {
  'use strict';

  angular.module('mdClone.controller.productStore', [])

  .controller('ProductStoreCtrl', function($http, $scope){
    $http.get('products.json').success(function(data) {
      $scope.products = data;
    });
  });
})();


// <body ng-controller="productStore">
//   <!-- Store Header -->
//   <header>
//     <h1>Products List</h1>
//   </header>
//   <!-- Products Container -->
//   <div class="products-list">
//     <div class="list-item" ng-repeat="product in products">
//       <a href="#/product/{{product.id}}">{{product.name}}</a>
//       <p>{{product.msrp}}</p>
//     </div>
//   </div>
//   <!-- Script Files -->
//   <script src="scripts/app.js"></script>
//   <script src="scripts/controllers/product-store.js"></script>
// </body>
