(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.count = 0;
  $scope.message = "";

  $scope.check2Much = function () {
    var items = $scope.list.split(',');
    $scope.count = items.length;
    if ($scope.list == "") {
      $scope.message = "Please enter data first";
    } else if ($scope.count < 4) {
      $scope.message = "Enjoy!";
    } else if ($scope.count > 3) {
      $scope.message = "Too much!";
    };
  };
}

})();
