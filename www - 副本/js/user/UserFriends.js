angular.module('starter.UserFriendsControllers',[])
.controller('friendsCtrl', function($scope,$http) {
    $http.get("data/friends.json").then(function(response){
      console.log(response)
      $scope.friends = response.data;
    });
    $scope.ChangeColor = function(friend){
      
      friend._selected = !friend._selected;
      console.log(friend._selected)
    };
  })