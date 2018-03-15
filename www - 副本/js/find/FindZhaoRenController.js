angular.module('starter.FindZhaoRenControllers',[])
.controller('zhaorenCtrl',function($scope,$ionicSlideBoxDelegate,Informations){
    $scope.informations = Informations.all();
    $scope.tabNames=['首页','上海','明星','直播','教育','视频'];
    $scope.slectIndex=0;
    $scope.activeSlide=function(index){//点击时候触发
     $scope.slectIndex=index;
     $ionicSlideBoxDelegate.slide(index);
    };
    $scope.slideChanged=function(index){//滑动时候触发
     $scope.slectIndex=index;
    };
    $scope.pages=["templates/tab01.html","templates/tab02.html","templates/tab03.html"];
  })