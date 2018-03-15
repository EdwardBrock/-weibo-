angular.module('starter.ReviewControllers',[])
.controller('reviewCtrl',function($scope, $stateParams,Shouyes,$http,$rootScope,$timeout,$ionicPopup,$interval){
    // $scope.id=$stateParams.id;
    // console.log($scope.id);
    $scope.now = new Date();
    var timer = $interval(function () {
        $scope.now = new Date();
    }, 1000);
    $scope.todoList = [{todoText:'可以的', done:false}];
    $scope.addcomment = function() {
      $scope.data = {
        todoText:" "
      }
      var myPopup = $ionicPopup.show({
        template: '<textarea placeholder="写点东西" ng-model="data.todoInput" rows="10" cols="30"></textarea>',
        scope: $scope,
        buttons: [
            { text: '取消' },
            {
                text: '<b>发送</b>',
                type: 'button-positive',
                onTap: function() {
                  $ionicPopup.show({
                    text:'OK',
                    templateUrl:'templates/popup4.html',
                    buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                      text: 'OK',
                      type: 'button-default',
                      onTap: function() {
                        $scope.todoList.push({todoText:$scope.data.todoInput});
                        $scope.shouye.select2=$scope.shouye.select2*1+1;
                      }
                    }]                  
                  });
                  console.log( $scope.shouye.select2)
                  // $scope.data.todoInput = "";
                  //   return $scope.data.todoInput;
                }
            }
        ]
    });
      myPopup.then(function(res) {
          console.log('Tapped!', res);
      });
  }
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
    $scope.changeE = function(){
      $scope.flag = 5;
    };
      $http.get("data/dashs.json").then(function(response){
      console.log(response);
      $scope.dashs = response.data;
    });
    // console.log($stateParams.shouyeId)
    // $scope.shouye = Shouyes.get($stateParams.shouyeId);
    // console.log($scope.shouye)
    var shouyes = Shouyes.all();
    var shouyeId = $stateParams.shouyeId;
    for (var i = 0; i < shouyes.length; i++) {
      console.log(shouyeId)
      if (shouyes[i].id === parseInt(shouyeId)) {
        $scope.shouye =  shouyes[i]
      }
     
    }
  })