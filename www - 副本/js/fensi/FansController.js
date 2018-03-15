angular.module('starter.FansControllers',[])
.controller('fensiCtrl', function($scope,$http,$ionicPopup,$timeout) {
    $scope.show22 = function(){
      var confirmPopup = $ionicPopup.confirm({
        title: '',
        template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;添加成功'
      });
      confirmPopup.then(function(res) {
        console.log(res);
        if(res) {
         //alert("添加成功")
        } else {
          console.log('You are not sure');
        }
      });                
  },
  $timeout(function() {
  }, 1000)
    $http.get('http://106.15.231.33:3000/weib/findAll').then(function(response){
      console.log(response)
      $scope.weib = response.data;
      console.log($scope.weib)
    })
    $http.get("data/fensi.json").then(function(response){
      console.log(response)
      $scope.fensi = response.data;
    });
    $scope.ChangeColor = function(fen){
        
      fen._selected = !fen._selected;
      console.log(fen._selected)
    };
    $http.get("data/friends.json").then(function(response){
      console.log(response)
      $scope.friends = response.data;
    });
      //  $scope.isActive=function(data){
      //    console.log(data)
      //   $scope.friends.active=data;
      // }
      $scope.ChangeColor = function(friend,$index){
        console.log(friend)
        console.log($index)
        console.log(friend._selected)
        friend._selected = !friend._selected;
      };
      $scope.string = 'dsadddddd'
  })