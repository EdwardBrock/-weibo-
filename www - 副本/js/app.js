// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
 'ionic',
 'starter.addControllers',
 'starter.QianDaoControllers',
 'starter.controllers',
 'starter.DianPingDetailControllers',
 'starter.ChatsControllers',
 'starter.ChatDetailControllers',
 'starter.ChatSettingControllers',
 'starter.LiaoTianControllers',
 'starter.ReviewControllers',
 'starter.XiaoXiControllers',
 'starter.UserAllControllers',
 'starter.UserControllers',
 'starter.UserFriendsControllers',
 'starter.UserAllSpControllers',
 'ngCordova',
 'starter.UserWoControllers',
 'starter.UserAllWzControllers',
 'starter.UserZanControllers',
 'starter.LoginControllers',
 'starter.RegisterControllers',
 'starter.AccountControllers',
 'starter.FindPhotoControllers',
 'starter.FindZhaoRenControllers',
 'starter.GameControllers',
 'starter.SaiShiControllers',
 'starter.MoreControllers',
 'starter.ShangHaiControllers',
 'starter.FansControllers',
 'starter.DianPingControllers',
 'starter.DianPingDetailControllers',
 'starter.DashControllers',
 'starter.ZhuanFaControllers',
 'starter.ZhuYeControllers',
 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  
  
    
      $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('standard');
    
      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    
      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    
      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');
    
    $stateProvider

      // setup an abstract state for the tabs directive
      .state("tab", {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      // Each tab has its own nav history stack:
      .state("add", {
        url: "/tab/add",
        cache: false,
        templateUrl: "templates/tab-add.html",
        controller: "addCtrl"
      })
      .state("dianping", {
        url: "/tab/add/dianping", // cache:false,
        templateUrl: "templates/add-dianping.html",
        controller: "dianpingCtrl"
      })
      .state("question", {
        url: "/tab/add/question", // cache:false,
        templateUrl: "templates/add-question.html",
        controller: "questionCtrl"
      })
      .state("dianping-detail", {
        params: { id: null },
        url: "/tab/add/dianping/:id",
        templateUrl: "templates/dianping-detail.html",
        controller: "dianpingDetailCtrl"
      })
      .state("tab.dash", {
        url: "/dash",
        views: {
          "tab-dash": {
            templateUrl: "templates/tab-dash.html",
            controller: "DashCtrl"
          }
        }
      })
      .state("liaotian", {
        url: "/tab/dash/liaotian",
        templateUrl: "templates/dash-liaotian.html",
        controller: "liaotianCtrl"
      })

      .state("tab.user", {
        url: "/user",
        views: {
          "tab-user": {
            templateUrl: "templates/tab-user.html",
            controller: "userCtrl"
          }
        }
      })
      .state("friends", {
        url: "/tab/user/friends",
        templateUrl: "templates/user-friends.html",
        controller: "friendsCtrl"
      })
      .state("photo", {
        url: "/tab/user/photo",
        templateUrl: "templates/user-photo.html",
        controller: "photoCtrl"
      })
      .state("all", {
        url: "/tab/user/all",
        cache: false,
        templateUrl: "templates/user-all.html",
        controller: "AllCtrl"
      })
      .state("wo", {
        url: "/tab/user/wo",
        cache: false,
        templateUrl: "templates/user-wo.html",
        controller: "woCtrl"
      })
      .state("zan", {
        url: "/tab/user/zan",
        cache: false,
        templateUrl: "templates/user-zan.html",
        controller: "zanCtrl"
      })
      .state("fensi", {
        url: "/tab/user/fensi", // cache:false,
        templateUrl: "templates/user-fensi.html",
        controller: "fensiCtrl"
      })
      .state("login", {
        url: "/tab/user/login",
        templateUrl: "templates/user-login.html",
        controller: "LoginCtrl"
      })
      .state("register", {
        url: "/tab/user/register",
        templateUrl: "templates/user-register.html",
        controller: "RegisterCtrl"
      })
      .state("wz", {
        url: "/tab/user/all/wz",
        templateUrl: "templates/all-wz.html",
        controller: "WzCtrl"
      })
      .state("sp", {
        url: "/tab/user/all/sp",
        templateUrl: "templates/all-sp.html",
        controller: "spCtrl"
      })
      .state("tab.chats", {
        url: "/chats",
        views: {
          "tab-chats": {
            templateUrl: "templates/tab-chats.html",
            controller: "ChatsCtrl"
          }
        }
      })
      .state("xiaoxi", {
        url: "/tab/chats/xiaoxi",
        templateUrl: "templates/chat-xiaoxi.html",
        controller: "xiaoxiCtrl",
        cache: false
      })
      .state("tab.chat-detail", {
        url: "/chats/:informationId",
        views: {
          "tab-chats": {
            templateUrl: "templates/chat-detail.html",
            controller: "ChatDetailCtrl"
          }
        }
      })
      // .state('tab.dash-review', {
      //   url: '/dash/:shouyeId',
      //   views:{
      //     'tab-dash':{
      //       templateUrl: 'templates/dash-review.html',
      //       controller: 'reviewCtrl'
      //     }
      //   }
      // })
      .state("setting", {
        url: "/tab/chats/:informationId",
        templateUrl: "templates/chat-setting.html",
        controller: "settingCtrl"
      })
      .state("review", {
        url: "tab/dash/:shouyeId",
        templateUrl: "templates/dash-review.html",
        controller: "reviewCtrl"
      })
      .state("zhuanfa", {
        url: "tab/dash/:shouyeId",
        templateUrl: "templates/dash-zhuanfa.html",
        controller: "zhuanfaCtrl"
      })
      .state("zhuye", {
        url: "tab/dash/:shouyeId",
        templateUrl: "templates/dash-zhuye.html",
        controller: "zhuyeCtrl"
      })
      // .state('dashReview', {
      //   url:'/dash/dashReview',
      //   params:{id:null},
      //   templateUrl: 'templates/dash-review.html',
      //   controller: 'reviewCtrl'
      // })
      .state("shanghai", {
        url: "/tab/find/shanghai",
        templateUrl: "templates/find-shanghai.html",
        controller: "shanghaiCtrl"
      })
      .state("game", {
        url: "/tab/find/game",
        templateUrl: "templates/find-game.html",
        controller: "gameCtrl"
      })
      .state("saishi", {
        url: "/tab/find/saishi",
        templateUrl: "templates/find-saishi.html",
        controller: "saishiCtrl"
      })
      .state("zhaoren", {
        url: "/tab/find/zhaoren",
        templateUrl: "templates/find-zhaoren.html",
        controller: "zhaorenCtrl"
      })
      //  .state('qiandao', {
      //   url:'/tab/add/qiandao',
      //   templateUrl: 'templates/add-qiandao.html',
      //   controller: 'QianDaoCtrl'
      //  })

      .state("qiandao", {
        url: "/qiandao",
        template: "<ion-nav-view></ion-nav-view>"
      })
      .state("qiandao.tabs", {
        url: "/tabs",
        templateUrl: "templates/qiandao-tabs.html"
      })
      .state("qiandao.tabs.approval", {
        url: "/approval",
        views: {
          "tab-approval": {
            templateUrl: "templates/qiandao-approval.html",
            controller: "QiandaoApprovalCtrl"
          }
        }
      })
      .state("qiandao.tabs.approved", {
        url: "/approved",
        views: {
          "tab-approved": {
            templateUrl: "templates/qiandao-approved.html",
            controller: "QiandaoApprovedCtrl"
          }
        }
      })

      .state("more", {
        url: "/tab/find/more",
        templateUrl: "templates/find-more.html",
        controller: "MoreCtrl"
      })
      .state("tab.find", {
        url: "/find",
        views: {
          "tab-find": {
            templateUrl: "templates/tab-find.html",
            controller: "AccountCtrl"
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
