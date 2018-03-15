angular.module('starter.UserAllControllers',[])
.controller('AllCtrl', function($scope,$http,$ionicModal,$rootScope,Shouyes,$stateParams) {
    var shouyes = Shouyes.all();
    var shouyeId = $stateParams.shouyeId;
    for (var i = 0; i < shouyes.length; i++) {
      console.log(shouyeId)
      if (shouyes[i].id === parseInt(shouyeId)) {
        $scope.shouye =  shouyes[i]
      }
    }
    $scope.shouye = Shouyes.get($stateParams.shouyeId);
    $http.get('http://106.15.231.33:3000/allpinglun/findAll').then(function(response){
      console.log(response)
      $scope.allpinglun = response.data;
    })
    $http.get("data/infos.json").then(function(response){
      console.log(response);
      $scope.infos = response.data;
    });
  
    $http.get("data/user1.json").then(function(response){
      console.log(response);
      $scope.user1 = response.data;
    });
  $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });  
    $scope.data={
      criteria:'',
      search:function(){
        this.criteria=''
        if(this.name 
  
  ){
          this.criteria=this.name 
  
  ;
        }else{
          this.criteria='';
        }
      }
    }
    $scope.needShow = function(){
      for(var index in $scope.allpinglun) {
        console.log($scope.allpinglun[index].content2)
         if($scope.allpinglun[index].content2 =undefined){
             return true;
         }
      }
      return false;
     }
    //imgCtrl
      $scope.indexTitle = "图片浏览";
      $scope.imgUrl = "img/";
      $scope.Images = ["38.JPG", "39.JPG", "44.JPG"];
      $scope.Images.like=["88","88","66"];
      $scope.add = function(num,index){
        console.log(num)
        flag=0;
        if(flag==0){
          $scope.Images.like[0]=num+1;
          flag=1;
        }else{
          $scope.Images.like[0]=num-1;
          flag=0;
        }
      }
      $scope.bigImage = false;    //初始默认大图是隐藏的
      $scope.imageIndex = -1;//当前展示的图片
      $scope.hideBigImage = function () {
        $scope.bigImage = false;
      };
      //点击图片放大
      $scope.shouBigImage = function (imageName, imageIndex) {  //传递一个参数（图片的URl）
        $scope.imageIndex = imageIndex;
        $scope.Url = imageName;                   //$scope定义一个变量Url，这里会在大图出现后再次点击隐藏大图使用
        $scope.bigImage = true;                   //显示大图
      };
  })