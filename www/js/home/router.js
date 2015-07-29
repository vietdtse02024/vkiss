'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/home/menu.html",
        controller: 'HomeCtrl'
    })
});