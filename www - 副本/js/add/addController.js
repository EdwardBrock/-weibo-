angular.module('starter.addControllers', [])
.controller('addCtrl', function($scope,$ionicPopup,$timeout,$ionicModal,$interval, $http,$rootScope,$location) {
  $http.get('https://api.seniverse.com/v3/weather/now.json?key=daphygjf1r5n5925&location=shanghai&language=zh-Hans&unit=c').then(function(response){
  console.log(response.data)  
  $scope.weather1=response.data.results[0].now.temperature
  $scope.weather2=response.data.results[0].now.text
  $scope.weather3= response.data.results[0].now.code
 console.log($scope.weather3)
    $http.get('data/weather.json').then(function(response){
      console.log(response.data)
      for(var i =0;i<=response.data.length;i++){
        if($scope.weather3==response.data[i].code){
          $scope.img = response.data[i].code
        }
      }
    })
  })
    // $http.get('http://192.168.137.247:8080/get?location="' + $scope.name + '"&today_date="' + $scope.today_date + '"&next_date="' + $scope.next_date + '"&next_event="'+$scope.next_event+'"').then(function(resp){

    // })  
  //   $http.get('/get?location="' + $scope.name + '"&today_date="'+$scope.today_date+'"');
  // });
      $scope.fasong1 = function() {
            $scope.zf=false;
             var content2 = $("#fenxiang").val();
             var pl={
               content2:content2
             }
        var confirmPopup = $ionicPopup.confirm({
          title: '',
          template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发送成功'
        });
        confirmPopup.then(function(res) {
          console.log(res);
          if(res) {
              $location.path('tab/user/all');
              $scope.modal.hide()
          } else {
            console.log('You are not sure');
          }
        })    
        //return $scope.data.todoInput;        
      }  
    $scope.now = new Date();
    console.log($scope.now)
    $scope.xingqi = "星期" + "日一二三四五六".charAt($scope.now.getDay())
    console.log($scope.now)
    var timer = $interval(function () {
        $scope.now = new Date();
    }, 1000);
    $scope.fan = function(){
      $location.path('/tab/dash');
    var curUrl = $location.absUrl();
    console.log(curUrl);
    }
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });  
    //return $scope.modal;
  })