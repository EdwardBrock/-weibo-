angular.module('starter.DianPingDetailControllers',[])
.controller('dianpingDetailCtrl', function($scope,$stateParams,$http) {
    $scope.service = [false, false, false, false, false];
    $scope.satisfaction = [false, false, false, false, false];
    //点击一个，看他是否被选中，如果他被选中，他上面也被选中，那么就把上面的全去掉，如果上面的没选中，那就把之前的全去掉
    //点击一个，如果他没被选中，那就到他这为止都选中
    $scope.val = "评分"
    $scope.chooseService = function (index) {
      if(index==4){
        $scope.val = "怒赞"
      }
      if(index==3){
        $scope.val = "不错"
      }
      if(index==2){
        $scope.val = "还行"
      }
      if(index==1){
        $scope.val = "一般"
      }
      if(index==0){
        $scope.val = "很差"
      }
      console.log(index)
        if (index == 4)//选中最后一个
  
        {
            if ($scope.service[index]) {
                for (var i = 0; i < 5; i++)
                    $scope.service[i] = false;
            }
            else     //如果没有选中
            {
                for (var i = 0; i < 5; i++)
                    $scope.service[i] = true;
            }
        }
        else {
            if ($scope.service[index])   //当前选中
            {
                if ($scope.service[index + 1]) //如果后面是选中的话
                {
                    for (var i = index + 1; i < 5; i++)
                        $scope.service[i] = false;    //往更高的地方全部不选中
                }
                else                             //如果后面没有选中
                {
                    for (var i = 0; i <= index; i++)
                        $scope.service[i] = false;
                }
            }
            else {
                for (var i = 0; i <= index; i++)
                    $scope.service[i] = true;
            }
        }
    };
    $http.get("data/movies.json").then(function(response){
      for(var i=0;i<=response.data.length;i++){
        var idx = response.data[i].id
        if(idx===$stateParams.id){
          $scope.movie = response.data[i]
        }
      }    
    }); 
  })