angular.module('starter.UserWoControllers',[])
.controller('woCtrl',function($scope,$cordovaCamera,$timeout,$ionicActionSheet){
    $scope.add = function(){
      var hideSheet = $ionicActionSheet.show({
        buttons: [{
            text: "从手机相册选择"
          },
          {
            text: "拍摄"
          },
        ],
        buttonClicked: function (index) {
          //console.log(index);
          if (index == 0) {
  
  
  
            //从手机相册选择
            var options = {
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: 2, //设为0或2，调用的就是系统的图库
              quality: 50,
              allowEdit: true,
              targetWidth: 200,
              targetHeight: 200
            };
            $cordovaCamera.getPicture(options).then(function (imageURI) {
              // $scope.data.imageSrc=imageURI;
              $scope.imgSrc = imageURI;
            }, function (err) {
              //error
            }); //$cordovaCamera.cleanup().then();//onlyforFILE_URI
  
  
  
  
          } else {
  
            $scope.takephoto = function () {
              var options = {
                //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
                quality: 100,
                //相片质量0-100
                destinationType: Camera.DestinationType.FILE_URI,
                //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
                sourceType: Camera.PictureSourceType.CAMERA,
                //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
                allowEdit: true,
                //在选择之前允许修改截图
                encodingType: Camera.EncodingType.JPEG,
                //保存的图片格式： JPEG = 0, PNG = 1
                targetWidth: 200,
                //照片宽度
                targetHeight: 200,
                //照片高度
                mediaType: 2,
                //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
                cameraDirection: 0,
                //枪后摄像头类型：Back= 0,Front-facing = 1
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: true
                //保存进手机相册
              };
              $cordovaCamera.getPicture(options).then(function (imageData) {
                image = document.getElementById('imageFile');
                console.log("imageData", imageData);
                image.src = imageData;
                $scope.imgSrc = imageData;
                console.log("$scope.imgSrc", $scope.imgSrc);
  
  
                //  $scope.imgsrc=imageData;
                // $scope.data.imageSrc = "data:image/jpeg;base64," + imageData;
              }, function (err) {
                // error
              });
              //....
  
            }
            $scope.takephoto();
          }
  
  
  
        },
        cancelText: "取消",
        cancel: function () {
          return true;
  
        },
      });
      $timeout(function () {}, 1000)
    }
  })