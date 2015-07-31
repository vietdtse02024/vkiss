'use strict'
angular.module('fyviapp', ['ionic', 'pascalprecht.translate'])

.run(function ($ionicPlatform, $rootScope, IConstants, $http) {
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
    $rootScope.checkAccountExist = function () {
        $http.get(IConstants.CHECK_ACCOUNT_EXIST_URL+'/0975938499').success(function (response) {
            $rootScope.isAccountExist = response.account;
        });
    };
    $rootScope.checkAccountExist();
})

.config(function ($urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});
