angular.module('starter.UserAllWzControllers',[])
.controller('WzCtrl', function($scope) {
    $scope.todoList = [{todoText:'第一天计划', done:false,todoText2:'学习ionic',done:true,}];
    $scope.data={
      todoText:"",
      todoText2:"",
    };
        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.data.todoInput,todoText2:$scope.data.todoInput2,done:$scope.data.done});
            $scope.data.todoInput = "";
            $scope.data.todoInput2 = "";
        };
    
        $scope.remove = function() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
              console.log(x);
                if (!x.done) $scope.todoList.push(x);
            });
        };
  })