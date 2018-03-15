angular
  .module("starter.controllers", [])
  .run(function($ionicPlatform) {
   // $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
     // if (window.cordova && window.cordova.plugins.Keyboard) {
    //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
   //   }
    //  if (window.StatusBar) {
      //  StatusBar.styleDefault();
     // }
    //});
  })

  .directive("input", function($timeout) {
    return {
      restrict: "E",
      scope: {
        returnClose: "=",
        onReturn: "&",
        onFocus: "&",
        onBlur: "&"
      },
      link: function(scope, element, attr) {
        element.bind("focus", function(e) {
          if (scope.onFocus) {
            $timeout(function() {
              scope.onFocus();
            });
          }
        });
        element.bind("blur", function(e) {
          if (scope.onBlur) {
            $timeout(function() {
              scope.onBlur();
            });
          }
        });
        element.bind("keydown", function(e) {
          if (e.which == 13) {
            if (scope.returnClose) element[0].blur();
            if (scope.onReturn) {
              $timeout(function() {
                scope.onReturn();
              });
            }
          }
        });
      }
    };
  })
  .controller("QiandaoApprovalCtrl", function($scope) {

  })
  .controller("QiandaoApprovedCtrl", function($scope) {
    
  });