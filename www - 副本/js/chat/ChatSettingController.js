angular.module('starter.ChatSettingControllers',[])
.controller('settingCtrl',function(Informations,$scope,$stateParams,$ionicHistory,$ionicActionSheet,$window){
    $ionicHistory.backView()
    $scope.information = Informations.get($stateParams.informationId);
    console.log($scope.information)
    $scope.informations = Informations.all();
    console.log($scope.informations)
    $scope.pushNotification = { checked: false };
    $scope.top = { checked: false };
    $scope.top1 = function(information){
      if($scope.top.checked == true){
        $scope.myTitle = "确认置顶？"
      }else{
        $scope.myTitle= "取消置顶？"
      }
      var hideSheet = $ionicActionSheet.show({
        buttons: [
            {text: "确定" }
        ],
        titleText:$scope.myTitle,
        cancelText: '取消',
        cancel: function() {
          if($scope.top.checked==true){
            $scope.top = { checked: false };
  
          }else{
            $scope.top = { checked: true };
          }
          
        },
     buttonClicked: function(index) {
       if(index===0){
        Informations.zhiding(information);
       }
       return true;
     }
    })
    }
    $scope.pushNotificationChange = function() {
      if($scope.pushNotification.checked==true){
        $scope.myVar="确认屏蔽？";
      }else{
        $scope.myVar="取消屏蔽？";
      }
       
      var hideSheet = $ionicActionSheet.show({
        buttons: [
            {text: "确定" }
        ],
        titleText:$scope.myVar,
        cancelText: '取消',
        cancel: function() {
          if($scope.pushNotification.checked==true){
            $scope.pushNotification = { checked: false };
          }else{
            $scope.pushNotification = { checked: true };
          }
          
        },
     buttonClicked: function(index) {
       return true;
     }
    })
  }
  })