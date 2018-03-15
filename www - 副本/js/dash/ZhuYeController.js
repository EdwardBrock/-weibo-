angular
  .module("starter.ZhuYeControllers", [])
  .controller("zhuyeCtrl", function($scope, $stateParams, Shouyes) {
    var shouyes = Shouyes.all();
    var shouyeId = $stateParams.shouyeId;
    for (var i = 0; i < shouyes.length; i++) {
      console.log(shouyeId);
      if (shouyes[i].id === parseInt(shouyeId)) {
        $scope.shouye = shouyes[i];
      }
    }
    $scope.flag = 1;
    $scope.changeA = function() {
      $scope.flag = 1;
    };
    $scope.changeB = function() {
      $scope.flag = 2;
    };
    $scope.changeC = function() {
      $scope.flag = 3;
    };
    $scope.changeD = function() {
      $scope.flag = 4;
    };
  });
