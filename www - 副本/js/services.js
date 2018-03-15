angular
  .module("starter.services", [])
  .directive("wminfo", function() {
    return {
      restrict: "AE",
      replace: true,
      scope: {
        infostr: "@",
        size: "@",
        color: "@"
      },
      template: "<div id='qrcanvas'></div>",
      link: function(scope, element, attrs) {
        (function($) {
          var q = $("#qrcanvas");
          var draw = function() {
            var colorIn = "#191970";
            var colorOut = "#cd5c5c";
            var colorFore = scope.color;
            var options = {
              cellSize: Number(scope.size),
              foreground: [
                // 背景颜色
                { style: colorFore },
                // outer squares of the positioner
                { row: 0, rows: 7, col: 0, cols: 7, style: colorOut },
                { row: -7, rows: 7, col: 0, cols: 7, style: colorOut },
                { row: 0, rows: 7, col: -7, cols: 7, style: colorOut },
                // inner squares of the positioner
                { row: 2, rows: 3, col: 2, cols: 3, style: colorIn },
                { row: -5, rows: 3, col: 2, cols: 3, style: colorIn },
                { row: 2, rows: 3, col: -5, cols: 3, style: colorIn }
              ],
              data: scope.infostr,
              typeNumber: 1
            };
            q.innerHTML = "";
            q.appendChild(qrgen.canvas(options));
          };
          draw(); //自动调用画图方法
        })(document.querySelector.bind(document));
      }
    };
  })
  .directive("infiniteScroll", [
    function() {
      return {
        controller: "infiniteScroll_controller"
      };
    }
  ])
  .directive("hmsPctSelect", function() {
    var TAG = "hmsPCTSelectDirective";
    return {
      restrict: "EA",
      scope: {
        default: "=defaultdata"
      },
      replace: true,
      transclude: true,
      template:
        '<div class="col" style="font-size: 14px;" ng-click="toSetDefaultPosition();">' +
        "{{selectedAddress.province+selectedAddress.city+selectedAddress.town}}" +
        "</div>",
      controller: function(
        $scope,
        $element,
        $attrs,
        $ionicModal,
        $http,
        $ionicSlideBoxDelegate,
        $timeout,
        $rootScope,
        $ionicScrollDelegate
      ) {
        var selectedAddress = {};
        var addressData;
        this.$onInit = function() {
          selectedAddress = {};
          $scope.selectedAddress = {};

          $http
            .get("data/Area_Datas_v2.json")
            .success(function(res) {
              addressData = res;
              $scope.provincesData = addressData["86"];
            })
            .error(function(err) {
              console.log("area_datas err = " + angular.toJson(err));
            });

          $ionicModal
            .fromTemplateUrl("hmsPCTSelect-modal.html", {
              scope: $scope,
              animation: "slide-in-up"
            })
            .then(function(modal) {
              $scope.PCTModal = modal;
            });
        };

        $scope.lockSlide = function() {
          $ionicSlideBoxDelegate
            .$getByHandle("PCTSelectDelegate")
            .enableSlide(false);
        };

        $scope.$watch("default", function(newValue) {
          if (newValue) {
            $scope.selectedAddress = newValue;
          }
        });

        $scope.toSetDefaultPosition = function() {
          $scope.showBackBtn = false;
          $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").slide(0);
          $ionicScrollDelegate.$getByHandle("PCTSelectProvince").scrollTop();
          $scope.PCTModal.show();
        };

        //选择省
        $scope.chooseProvince = function(selectedProvince) {
          var selectedProvinceIndex;

          angular.forEach($scope.provincesData, function(item, index) {
            if (item === selectedProvince) {
              selectedProvinceIndex = index;
              return;
            }
          });

          selectedAddress = {};
          $scope.showBackBtn = true;
          $scope.citiesData = addressData["" + selectedProvinceIndex + ""];

          $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").next();
          $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").update();
          $ionicScrollDelegate.$getByHandle("PCTSelectCity").scrollTop();
          selectedAddress.province = selectedProvince;
        };

        //选择市
        $scope.chooseCity = function(selectedCity) {
          var selectedCityIndex;

          angular.forEach($scope.citiesData, function(item, index) {
            if (item === selectedCity) {
              selectedCityIndex = index;
              return;
            }
          });

          $scope.townData = addressData["" + selectedCityIndex + ""];

          selectedAddress.city = selectedCity;
          if (!$scope.townData) {
            selectedAddress.town = "";
            $scope.selectedAddress = selectedAddress;

            $rootScope.$broadcast("PCTSELECT_SUCCESS", {
              result: $scope.selectedAddress
            });

            $timeout(function() {
              $scope.PCTModal.hide();
            }, 200);
          } else {
            $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").next();
            $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").update();
            $ionicScrollDelegate.$getByHandle("PCTSelectTown").scrollTop();
          }
        };

        //选择县
        $scope.chooseTown = function(selectedTown) {
          selectedAddress.town = selectedTown;
          $scope.selectedAddress = selectedAddress;

          $rootScope.$broadcast("PCTSELECT_SUCCESS", {
            result: $scope.selectedAddress
          });

          $timeout(function() {
            $scope.PCTModal.hide();
          }, 200);
        };

        //slide返回上一级
        $scope.goBackSlide = function() {
          var currentIndex = $ionicSlideBoxDelegate
            .$getByHandle("PCTSelectDelegate")
            .currentIndex();
          if (currentIndex > 0) {
            $ionicSlideBoxDelegate.$getByHandle("PCTSelectDelegate").previous();
          }
          if (currentIndex === 1) {
            $scope.showBackBtn = false;
          }
        };

        $scope.$on("$destroy", function() {
          $scope.PCTModal.remove();
        });
      }
    };
  })
  .directive("star", function() {
    return {
      template:
        '<ul class="rating" ng-mouseleave="leave()">' +
        '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
        "\u2605" +
        "</li>" +
        "</ul>",
      scope: {
        ratingValue: "=",
        max: "="
      },
      controller: function($scope) {
        $scope.ratingValue = $scope.ratingValue || 0;
        $scope.max = $scope.max || 5;
        $scope.click = function(val) {
          console.log(val);
          // if(val==1){
          //   $scope.ratingValue = "很差"
          // }else if(val==2){
          //   $scope.ratingValue = "hao"
          // }else if(val==3){
          //   $scope.ratingValue = "haohao"
          // }else if(val==4){
          //   $scope.ratingValue = "haohaohao"
          // }else{
          //   $scope.ratingValue = "haohaohaohao"
          // }
          $scope.ratingValue = val;
        };
      },

      link: function(scope, elem, attrs) {
        console.log(scope);
        elem.css("text-align", "center");
        var updateStars = function() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };
        updateStars();

        scope.$watch("ratingValue", function(oldVal, newVal) {
          if (oldVal) {
            updateStars();
          }
        });
        scope.$watch("max", function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    };
  })
  .directive("slideScroll", function($window, $timeout) {
    return {
      restrict: "AE",
      link: function(scope, element, attr) {
        var itsWatch = scope.$watch("its", function(newvalue, oldvalue) {
          itsWatch();
          var i = 1; //element是ul
          var length = element[0].children.length;
          var widthwindow = $window.innerWidth - 20;
          var firstwidth = element[0].children[0].children[0].offsetWidth;
          setInterval(function() {
            if (i == length) {
              i = 0; //初始位置
              element[0].style.top = "0px";
            }
            var topscorll = -(i * 30);
            var widthself = element[0].children[i].children[0].offsetWidth; //widthself：292

            feeltoTop(topscorll);
            i++;
          }, 3000);
          //向上滚动
          function feeltoTop(topscorll) {
            //console.log(topscorll):topscorll是top值
            var buchang = -10;
            var feelTimer = setInterval(function() {
              element[0].style.top =
                parseInt(element[0].style.top) + buchang + "px";
              if (parseInt(element[0].style.top) <= topscorll) {
                element[0].style.top = topscorll + "px";
                window.clearInterval(feelTimer);
              }
            }, 100);
          }
        });
      }
    };
  })
  .service("jsonToStr", function() {
    this.transform = function(jsonData) {
      var string = "";

      for (str in jsonData) {
        string = string + str + "=" + jsonData[str] + "&";
      }

      var _last = string.lastIndexOf("&");

      string = string.substring(0, _last);

      return string;
    };
  })
  .factory("Zhuanfa", function($http, $q) {
    var saveZhuanfa = function(data) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http({
        method: "post",
        data: data,
        headers: { "Content-Type": "application/json" },
        url: "http://106.15.231.33:3000/allpinglun/save"
      }).success(function(resp) {
        console.log(resp);
        deferred.resolve(resp);
      });
      return promise;
    };
    return {
      saveZhuanfa: saveZhuanfa
    };
  })
  .factory("Shouyes", function() {
    var shouyes = [
      {
        id: 1,
        name: "触手直播平台",
        data: "13分钟前",
        content: "今天你是第几个签到的",
        content2: "触手直播转发微博",
        img: "img/34.png",
        select1: "6",
        select2: "78",
        select3: "59",
        data: "11-28  10:08",
        guanzhu: "159",
        fensi: "35万",
        renzheng: "杭州开迅科技有限公司",
        bimg: "img/70.JPG"
      },
      {
        id: 2,
        name: "微博赛事",
        data: "45分钟前   来自iPhone X",
        content:
          "NBA新赛季已经开始一个月的事件，周琦的NBA生涯场次已经来到10场，共计收入9分，9篮板，5封盖，1抢断和场均4.9分钟出场时间。",
        content2: "触手直播转发微博",
        img: "img/31.png",
        select1: "166",
        select2: "69",
        select3: "233",
        data: "11-28  10:06",
        guanzhu: "1425",
        fensi: "1849万",
        renzheng: "新浪微博体育赛事官方",
        bimg: "img/71.JPG"
      },
      {
        id: 3,
        name: "爱奇艺影视",
        data: "4小时前  来自weibo.com",
        content:
          "今天11时05分进入 “小雪”节气，届时，我国北方大部分地区气温逐步降到0℃以下，黄淮地区可以期待初雪的到来，长江中下游地区已呈初冬景象。你知道“小雪”名字的由来吗？",
        content2: "触手直播转发微博",
        img: "img/41.JPG",
        select1: "55",
        select2: "66",
        select3: "88",
        data: "11-11 11:11",
        guanzhu: "1445",
        fensi: "1019万",
        renzheng: "爱奇艺官方微博",
        bimg: "img/71.JPG"
      }
    ];
    return {
      all: function() {
        return shouyes;
      },
      remove: function(shouye) {
        console.log(shouye);
        shouyes.splice(shouyes.indexOf(shouye), 1);
      },
      get: function(shouyeId) {
        for (var i = 0; i < shouyes.length; i++) {
          console.log(shouyeId);
          if (shouyes[i].id === parseInt(shouyeId)) {
            return shouyes[i];
          }
        }
        return null;
      }
    };
  })
  .factory("Informations", function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var informations = [
      {
        id: 1,
        key: "0",
        name: "订阅",
        content: "万能的大熊：全面屏之战......",
        img: "img/37.png"
      },
      {
        id: 2,
        key: "1",
        name: "新浪新闻",
        content:
          "人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。......",
        img: "img/31.png"
      },
      {
        id: 3,
        key: "2",
        name: "新浪微博",
        content: "城市味蕾之战开启，为家乡打call领红包！",
        img: "img/32.png"
      },
      {
        id: 4,
        key: "3",
        name: "美团",
        content: "感谢你关注我",
        img: "img/33.png"
      },
      {
        id: 5,
        key: "4",
        name: "触手",
        content:
          "已成功加入了触手大家庭！这里不仅有技术高超的手游大触陪你炫酷吊炸天，还有帅气逗比的船长大大，萌萌哒的小触妹纸陪你叨逼叨！",
        img: "img/34.png"
      },
      {
        id: 6,
        key: "5",
        name: "有道",
        content:
          "谢谢你关注有道词典！词典君会每天发布一到三条英语微博，如果想看更多的内容",
        img: "img/35.png"
      },
      {
        id: 7,
        key: "6",
        name: "知乎",
        content:
          "您还可以在 App Store 和各大安卓市场下载 @知乎 和 @知乎日报 客户端，获取更多精彩内容",
        img: "img/36.png"
      }
    ];

    return {
      all: function() {
        return informations;
      },
      remove: function(information) {
        console.log(information);
        informations.splice(informations.indexOf(information), 1);
      },
      zhiding: function(information) {
        informations.splice(informations.indexOf(information), 1);
        informations.unshift(information);
      },
      get: function(informationId) {
        for (var i = 0; i < informations.length; i++) {
          console.log(informationId);
          if (informations[i].id === parseInt(informationId)) {
            return informations[i];
          }
        }
        return null;
      }
    };
  });
