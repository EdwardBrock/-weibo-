angular.module('starter.XiaoXiControllers',[])
.controller('xiaoxiCtrl', function($scope) {
    $scope.clientSideList = [
      { text: "所有人", value: "底部“消息”显示所有人通知的数字提醒，并且在锁屏时显示" },
      { text: "关注人", value: "底部“消息”显示关注人通知的数字提醒，并且在锁屏时显示" },
      { text: "关闭", value: "关闭后，将不再锁屏时显示通知" },
    ];
  
    $scope.serverSideList = [
      { text: "Go", value: "go" },
      { text: "Python", value: "py" },
      { text: "Ruby", value: "rb" },
      { text: "Java", value: "jv" }
    ];
    
    $scope.data = {
      clientSide: '底部“消息”显示所有人通知的数字提醒，并且在锁屏时显示'
    };
    $scope.emailNotification = "'开启接收他人动态'"
    
    $scope.serverSideChange = function(item) {
      console.log("Selected Serverside, text:", item.text, "value:", item.value);
    };
  })