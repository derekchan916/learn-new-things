(function() {
  'use strict';

  angular.module('mdClone.controller.productStore', [])

  .controller('ProductStoreCtrl', function($http, $scope){
    $http.get('products.json').success(function(data) {
      $scope.products = data;
    });
  });
})();
