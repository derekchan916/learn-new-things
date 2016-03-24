(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', ['$scope', function($scope){
    $scope.name = "bob";

  }]);
})();
