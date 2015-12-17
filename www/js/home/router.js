'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/home/menu.html",
        controller: 'HomeCtrl'
    })
    .state('app.tabs', {
        url: "/tab",
        views: {
            'menuContent': {
                templateUrl: "templates/home/tabs.html"
            }
        }
    })
    .state('app.tabs.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/home/tab-dash.html'
            }
        }
    })

    .state('app.tabs.friends', {
        url: '/friends',
        views: {
            'tab-friends': {
                templateUrl: 'templates/home/tab-friends.html',
                controller: 'FriendsCtrl'
            }
        }
    })    
    .state('app.tabs.account', {
        url: '/account',
        views: {
            'tab-friend-request': {
                templateUrl: 'templates/home/tab-account.html'
            }
        }
    });
});