(function() {
  'use strict';

  angular.module('mdClone.controller.productDetail', [])

  .controller('ProductDetailCtrl', function($scope, $http, $routeParams) {
    $http({
      url: 'products.json',
      method: 'GET'
      // params: { product_id: $routeParams.productId}
    }).success(function(data) {
      $scope.product = data[$routeParams.productId - 1]
    });
  });
})();
