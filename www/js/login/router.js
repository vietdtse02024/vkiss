'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: "templates/login/login.html",
        controller: 'LoginCtrl'
    }).state('starter', {
        url: "/starter",
        templateUrl: "templates/login/starter.html",
        controller: 'LoginCtrl'
    }).state('register', {
        url: "/register",
        templateUrl: "templates/login/register.html",
        controller: 'LoginCtrl'
    });
});