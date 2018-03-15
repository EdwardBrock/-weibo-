angular.module('starter.DianPingControllers', [])
.controller('dianpingCtrl', function($scope,$state,$http,$ionicActionSheet,$ionicLoading,$timeout) {
    $http.get("data/movies.json").then(function(response){
      console.log(response);
      $scope.movies = response.data;
    }); 
    $scope.dian = function(movie){
      var id = movie.id;
      $state.go('dianping-detail',{id:id})
    }
    $scope.show = function(){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
            {text: "按评分排序" },
            {text: "返回"},
        ],
        buttonClicked: function(index) {
          //console.log(index);
          if(index==0){
            var movies = $scope.movies;
            $scope.date = movies;
            $scope.desc = true;
            $scope.sort = 'score';
            $scope.sortByType = function(type){
              console.log(type)
              $scope.sort = type;
              $scope.desc = !scope.desc;
            }
            return true;
        }
      }
    })
    }
  })