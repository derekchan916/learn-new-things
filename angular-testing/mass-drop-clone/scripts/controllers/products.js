(function() {
  'use strict';

  angular.module('mdClone.controller.productList', [])

  .controller('productList', function($http, $scope){
    $http.get('products.json').success(function(data) {
      $scope.products = data;
    });
  });
})();
