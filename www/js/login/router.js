'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: "templates/login/login.html",
        controller: 'LoginCtrl'
    });
});