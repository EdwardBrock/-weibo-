angular
  .module("starter.ZhuanFaControllers", [])
  .controller("zhuanfaCtrl", function(
    $scope,
    Shouyes,
    $rootScope,
    $stateParams,
    $ionicPopup,
    $location,
    Zhuanfa
  ) {
    var shouyes = Shouyes.all();
    var shouyeId = $stateParams.shouyeId;
    for (var i = 0; i < shouyes.length; i++) {
      console.log(shouyeId);
      if (shouyes[i].id === parseInt(shouyeId)) {
        $scope.shouye = shouyes[i];
      }
    }
    $scope.fasong = function() {
      $scope.tj = true;
      var content = $scope.shouye.content;
      var name = $scope.shouye.name;
      var yijian = $("#zhuanfa").val();
      var data = {
        name: $scope.shouye.name,
        yijian: yijian,
        content: $scope.shouye.content
      };
      console.log(user);
      $.ajax("http://106.15.231.33:3000/allpinglun/save", {
        data: pl,
        method: "POST",
        "content-Type": "application/json",
        success: function(data) {
          console.log(data);
        }
      });
      var confirmPopup = $ionicPopup.confirm({
        title: "",
        template:
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享成功"
      });
      confirmPopup.then(function(res) {
        console.log(res);
        if (res) {
          $scope.shouye.select1 = $scope.shouye.select1 * 1 + 1;
          $location.path("tab/user/all");
        } else {
          console.log("You are not sure");
        }
      });
    };
  });
