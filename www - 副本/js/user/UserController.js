angular.module('starter.UserControllers',[])
.controller('userCtrl', function($scope,$http, $ionicModal,$ionicActionSheet,$timeout,$ionicLoading,$location,$ionicPopup) {
    $http.get("data/infos.json").then(function(response){
       $scope.infos = response.data;
     });
     $ionicModal.fromTemplateUrl('templates/modal.html', {
       scope: $scope
     }).then(function(modal) {
       $scope.modal = modal;
     });  
     $http.get("data/user1.json").then(function(response){
       console.log(response);
       $scope.user1 = response.data;
     });
     $http.get("data/user2.json").then(function(response){
       console.log(response);
       $scope.user2 = response.data;
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
     $scope.show=function(){
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
               console.log($scope.modal);
               $scope.modal.hide()
               
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
    $scope.show2 = function(){
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
             console.log($scope.modal);
             $scope.modal.hide()
             
           }
           guan();
           return true;
         }
                    
                     // console.log(index);
                     // return true;
                   },
                   cancelText: "退出当前账号",
                   cancel: function () { 
                       var confirmPopup = $ionicPopup.confirm({
                         title: '',
                         template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认退出当前账号？'
                       });
                       confirmPopup.then(function(res) {
                         console.log(res);
                         if(res) {
                           $location.path('/tab/user/login');
                           var curUrl = $location.absUrl();
                           console.log(curUrl)
                         } else {
                           console.log('You are not sure');
                         }
                       });                
                     //return true;
                     // console.log($scope.modal);
                     // $scope.modal.hide()
                    // return jump('/dash')
                   },
                 });
                 // $timeout(function() {
                 // }, 1000);
   
   
   };
   
   })