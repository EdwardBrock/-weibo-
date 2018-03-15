angular.module('starter.DashControllers',[])
.controller('DashCtrl', function($scope,$http,$ionicPopover,$ionicModal,$timeout,$rootScope,Shouyes,$cordovaCamera,$ionicPopup,$ionicActionSheet,$state,$stateParams) {
    $scope.open=function(){
      var options = {
        //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
        quality: 100,                                            //相片质量0-100
        destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
        sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
        allowEdit: false,                                        //在选择之前允许修改截图
        encodingType:Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
        targetWidth: 200,                                        //照片宽度
        targetHeight: 200,                                       //照片高度
        mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
        cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true                                   //保存进手机相册
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        CommonJs.AlertPopup(imageData);
        var image = document.getElementById('myImage');
        image.src=imageData;
        //image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
        CommonJs.AlertPopup(err.message);
      });
    }
    var shouyes = Shouyes.all();
    $rootScope.save=[{name:'1',content:'2',img:'img/1.png'}];
    $scope.myVar="收藏"
    $scope.show = function(shouye,$index) {
    
        var hideSheet = $ionicActionSheet.show({
          buttons: [
           { text: $scope.myVar },
           { text: '不感兴趣' }
         ],
          scope: $scope,
          destructiveText: '举报',
          cancelText: '取消',
          cancel: function() {
                                 // add cancel code..
                               },
          buttonClicked: function(index) {
              console.log($index)
              if(index===0){
                console.log($scope.myVar)
                if($scope.myVar=="取消收藏"){
                  $scope.myVar = "收藏"
                  $rootScope.save.pop({name:shouye.name,content:shouye.content,img:shouye.img});
                  $ionicPopup.show({
                    text:'OK',
                    templateUrl:'templates/popup3.html',
                    buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                      text: 'OK',
                      type: 'button-default',
                      onTap: function() {
                        
                      }
                    }]                  
                  });
                  return true;
                }
                var name = shouye.name;
                var content = shouye.content;
                var img =shouye.img;
                $rootScope.save.push({name:shouye.name,content:shouye.content,img:shouye.img});
                $ionicPopup.show({
                    text:'OK',
                    templateUrl:'templates/popup2.html',
                    buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                      text: 'OK',
                      type: 'button-default',
                      onTap: function() { 
                        $scope.myVar="取消收藏"             
                      }
                    }]                  
                  });
              }
              if(index==1){  
                Shouyes.remove(shouye)
              }
              return true;
            }
     });
     
}
$scope.shouyes = Shouyes.all();
// $http.get("../data/shouye.json").then(function(response){
//   console.log(response)
//   $scope.shouye = response.data;
// });
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
})