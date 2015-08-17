﻿'use strict'
angular.module('fyviapp')
.controller('HomeCtrl', function ($scope, $state, IConstants, $http) {
    $scope.doLogin = function () {
        $state.go('login');
    };
    
    $scope.initDash = function(){
    	$http.get(IConstants.GET_LIST_FRIENDS + '/' + $scope.frontUserOnline.accountId).success(function (response) {
    		$scope.model = response;
        });
    };
});