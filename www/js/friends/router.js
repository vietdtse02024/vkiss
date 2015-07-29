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

    .state('app.tabs.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/friends/tab-chats.html',
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