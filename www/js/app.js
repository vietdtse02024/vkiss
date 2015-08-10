'use strict'
angular.module('fyviapp', ['ionic', 'pascalprecht.translate', 'ngCordova'])

.run(function ($ionicPlatform, $rootScope, IConstants, $http, $state) {
    document.addEventListener("deviceready", function () {
        $cordovaPlugin.someFunction().then(success, error);
    }, false);

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    var device = ionic.Platform.device();
    var uuid = device.uuid;
    $rootScope.checkAccountExist = function () {
        $http.get(IConstants.CHECK_ACCOUNT_EXIST_URL+'/0975938499').success(function (response) {
            var isAccountExist = response.account;
            if (isAccountExist || isAccountExist == null) {
                $state.go('login');
            } else {
                $state.go('app.tabs');
            }
        });
    };
})

.config(function ($urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/starter');
});
