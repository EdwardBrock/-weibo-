angular.module('starter.MoreControllers',[])
.controller('MoreCtrl',function($scope, $stateParams,$timeout,$window, $http,$state,$ionicPopup){
    // $http.get('http://106.15.231.33:3000/allpinglun/findAll').then(function(response){
    //   console.log(response)
    //   $scope.allpinglun = response.data;
    // })
$scope.items = [];
  $scope.loadMore = function() {
    $http.get('http://106.15.231.33:3000/allpinglun/findAll').success(function(items) {
        $scope.allpinglun = items.data;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
})