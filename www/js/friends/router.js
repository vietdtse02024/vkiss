'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    // Each tab has its own nav history stack:
    .state('app.tabs', {
        url: "/tab",
        views: {
            'menuContent': {
                templateUrl: "templates/friends/tabs.html"
            }
        }
    })
    .state('app.tabs.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/friends/tab-dash.html'
            }
        }
    })

    .state('app.tabs.friends', {
        url: '/friends',
        views: {
            'tab-friends': {
                templateUrl: 'templates/friends/tab-friends.html',
                controller: 'FriendsCtrl'
            }
        }
    })

    .state('app.tabs.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/friends/tab-account.html'
            }
        }
    });
});