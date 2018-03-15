angular.module('starter.UserAllSpControllers',[])
.controller('spCtrl',function($scope,$ionicModal,UpLoad){
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });  
    
  })