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
    
    .state('app.tabs.friend-detail', {
    	url: '/friends/:friendSelect',
    	views: {
    		'tab-friends': {
    			templateUrl: 'templates/friends/friend-detail.html',
    			controller: 'FriendsCtrl'
    		}
    	}
    })
    .state('app.tabs.add-friend', {
    	url: '/add-friend',
    	views: {
    		'tab-friends': {
    			templateUrl: 'templates/friends/add-friend.html',
    			controller: 'FriendsCtrl'
    		}
    	}
    })

    .state('app.tabs.account', {
        url: '/account',
        views: {
            'tab-friend-request': {
                templateUrl: 'templates/friends/tab-account.html'
            }
        }
    });
});