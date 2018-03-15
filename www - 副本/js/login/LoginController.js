angular.module('starter.LoginControllers',[])
.controller('LoginCtrl', function($scope,$location,$interval,$ionicPopup,$timeout) {
    $('button.loginBtn').on('click',function(){
      var name = $('.user input[name=name]').val();
      var psw = $('.user input[name=psw]').val();
      var user={
        name:name,
        psw:psw
      };
      // console.log(user);
  $.getJSON("http://192.168.137.247:8080/get?location='+a'&today_date='b'");
      $.getJSON('http://106.15.231.33:3000/user/findByName?name='+name,function(data){
        //console.log(data[0])
        if(data[0] == undefined){
          var confirmPopup = $ionicPopup.confirm({
            title: '',
            template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有此用户'
          });
        }else{
          var pswDB = data[0].psw;
          if(psw==pswDB){
              var confirmPopup = $ionicPopup.confirm({
                title: '',
                template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录成功'
              });
              confirmPopup.then(function(res) {
                console.log(res);
                if(res) {
                    $location.path('/tab/user');
                    // var curUrl = $location.absUrl();
                    // console.log(curUrl)
                  //console.log('You are  sure');
                } else {
                  console.log('You are not sure');
                }
              })            
           // window.location='http://localhost:8100/#/tab/user';
          }else{
            var confirmPopup = $ionicPopup.confirm({
              title: '',
              template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号或者密码有误'
            });
            //alert("密码错误");
          }
        }
      }); 
    });
   
  })