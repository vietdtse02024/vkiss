'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('app.map', {
         url: "/map/:friendId",
         views: {
             'menuContent': {
                 templateUrl: "templates/map/map.html",
                 controller: 'MapCtrl'
             }
         }
     })
});