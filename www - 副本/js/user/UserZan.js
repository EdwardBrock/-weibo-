angular.module('starter.UserZanControllers',[])
.controller('zanCtrl', function($scope,$rootScope) {
    $scope.save = $rootScope.save;
    //数据
$scope.content = [{'name':'张春玲','age':28},{'name':'王晰','age':26},{'name':'吴正青','age':66}];

/** 拖拽成功触发方法
*   index 拖拽后落下时的元素的序号（下标）
*   obj 被拖动数据对象
*/
$scope.dropComplete = function(index, obj){
        var idx = $scope.content.indexOf(obj); 
        $scope.content[idx] = $scope.content[index];
        $scope.content[index] = obj;           
};
  })