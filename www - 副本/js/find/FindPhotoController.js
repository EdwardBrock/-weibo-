angular.module('starter.FindPhotoControllers',[])
.controller('photoCtrl',function($scope,$ionicActionSheet,$http,$timeout,$ionicLoading,$location,$ionicSlideBoxDelegate){
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
    $scope.show3=function(){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
            {text: "刷新" },
            {text: "返回"},
        ],
        buttonClicked: function(index) {
          //console.log(index);
          if(index==0){
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
            $timeout(function () {
              $ionicLoading.hide();
            }, 2000)
            return true;
          }else{
            //return true;
            function guan() { 
              $location.path('/tab/user');
              var curUrl = $location.absUrl();
              console.log(curUrl)
            }
            guan();
            return true;
          }
                     
                      // console.log(index);
                      // return true;
                    },
                    cancelText: "取消",
                    cancel: function() { 
                      return true;
                      // console.log($scope.modal);
                      // $scope.modal.hide()
                      
                    },
                  });
                  $timeout(function() {
                  }, 1000);
  
  
   };
   $scope.items=[
    {
        "name":"HTML5"
    },
    {
        "name":"JavaScript"
    },
    {
        "name":"Css3"
    }
  ];
  
  $scope.doRefresh = function() {
    $http.get('data/item.json')   //本站地址，不然会有跨域问题
        .success(function(newItems) {
            $scope.items = newItems;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
  };
  })