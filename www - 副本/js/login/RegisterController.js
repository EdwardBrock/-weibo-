angular.module('starter.RegisterControllers',[])
.controller('RegisterCtrl', function($ionicPopup,$location) {
    $('button.registerBtn').on('click',function(){
        var name = $('.card input[name=number]').val();
        var psw = $('.card input[name=password]').val();
        var user={
            name:name,
            psw:psw
        };
        // console.log(user);
        if(user.name!=0 && user.psw!=0){
            $.ajax('http://106.15.231.33:3000/user/save',{
                data:user,
                method:"POST",
                'content-Type':'application/json',
                success:function(){
                    var confirmPopup = $ionicPopup.confirm({
                        title: '',
                        template: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册成功'
                      });
                      confirmPopup.then(function(res) {
                        console.log(res);
                        if(res) {
                            $location.path('/tab/user/login');
                        } else {
                          console.log('You are not sure');
                        }
                      })  
                }
            });
        }else{
            alert("请输入信息");
        } 
    })
   
  })