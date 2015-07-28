'use strict'

angular.module('fyviapp').config(function($stateProvider){
    $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/home/menu.html",
        controller: 'HomeCtrl'
    })

    // Each tab has its own nav history stack:
    .state('app.tabs', {
        url: "/tab",
        views: {
            'menuContent': {
                templateUrl: "templates/tabs.html"
            }
        }
    })
    .state('app.tabs.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html'
            }
        }
    })

    .state('app.tabs.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('app.tabs.chat-detail', {
          url: '/chats/:chatId',
          views: {
              'tab-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatsDetailCtrl'
              }
          }
      })

    .state('app.tabs.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })
});