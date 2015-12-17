'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    // Each tab has its own nav history stack:
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

});