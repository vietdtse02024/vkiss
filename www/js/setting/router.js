'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('app.setting', {
         url: "/setting",
         views: {
             'menuContent': {
                 templateUrl: "templates/setting/setting.html",
                 controller: 'SettingCtrl'
             }
         }
     })
});