angular.module('starter.ChatsControllers',[])
.controller('ChatsCtrl', function($scope,$http,Informations,$ionicPopup,$ionicPopover,$stateParams) {
    $ionicPopover.fromTemplateUrl("my-popover.html",{
      scope:$scope
    })
    .then(function(popover){
      $scope.popover = popover;
    })
    $scope.openPopover = function($event){
      $scope.popover.show($event);
    };
    $scope.closePopover = function(){
      $scope.popover.hide();
    };
    $scope.$on("destroy",function(){
      $scope.popover.remove();
    });
    $scope.informations = Informations.all();
    $scope.remove = function(information) {
      Informations.remove(information);
    };
    $scope.share  = function(information){
      Informations.zhiding(information);
    }
    $http.get("data/tzmessages.json").then(function(response){
      $scope.tzmessages = response.data;
    })
    $scope.onHold = function() {
      var alertPopup = $ionicPopup.alert({
        templateUrl: 'templates/popup.html'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };
  
    // $http.get("../data/messages.json").then(function(response){
    //   $scope.messages = response.data;
    // });
    // $scope.edit = function(message) {
    //   console.log($scope.messages);
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置.
      //如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
      //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目,该方法会改变原始数组。
    //   console.log(message);
    //    var idx = $scope.messages.indexOf(message);
    //    $scope.messages.splice(idx,1);
  
    // };
    $scope.delete = function(tz) {
      console.log($scope.tzmessages);
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置.
      //如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
      //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目,该方法会改变原始数组。
      console.log(tz);
       var idx2 = $scope.tzmessages.indexOf(tz);
       console.log(idx2)
       $scope.tzmessages.splice(idx2,1);
  
    };
    $scope.data={
      criteria:'',
      search:function(){
        console.log(this);
        this.criteria=''
        if(this.name 
  
  ){ 
          this.criteria=this.name 
          console.log(this.criteria)
  
  ;
        }else{
          this.criteria='';
        }
      }
    }
  })