'use strict'
angular.module('fyviapp', ['ionic', 'pascalprecht.translate', 'ngCordova'])

.run(function ($ionicPlatform, $rootScope, IConstants, $http, $state, $cordovaDevice, $ionicPopup, $translate, $ionicLoading) {
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
    //$rootScope.uuid = $cordovaDevice.getUUID();
//    console.log(window.localStorage['name']);
    $rootScope.uuid = 'fmndbgvdfv564r5345f4x56v4x65v4';
    $rootScope.checkAccountExist = function () {
        $http.get(IConstants.CHECK_ACCOUNT_EXIST_URL + '/' + $rootScope.uuid).success(function (response) {
        	$rootScope.frontUserOnline = response.account;
            if (!$rootScope.frontUserOnline || $rootScope.frontUserOnline == null) {
                $state.go('register');
            } else {
                $state.go('app.tabs');
            }
        });
    };
    
    // An alert dialog
    $rootScope.showAlert = function(title, message) {
      var alertPopup = $ionicPopup.alert({
        title: $translate.instant(title),
        template: $translate.instant(message)
      });
    };
    
    // show spinner
    $rootScope.showLoading = function() {
    	$ionicLoading.show({
    		template: 'Loading...'
    	});
    };
    $rootScope.hideLoading = function() {
    	$ionicLoading.hide();
    };
})

.config(function ($urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/starter');
});
