angular.module('starter.AccountControllers',[])
.controller('AccountCtrl', function($scope,$http) {
    $scope.flag = 1;
    $scope.changeA = function(){
      $scope.flag = 1;
    };
    $scope.changeB = function(){
      $scope.flag = 2;
    };
    $scope.changeC = function(){
      $scope.flag = 3;
    };
    $scope.changeD = function(){
      $scope.flag = 4;
    };
    $http.get("data/find.json").then(function(response){
      $scope.find = response.data;
    })
  });