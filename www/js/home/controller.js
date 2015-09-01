'use strict'
angular.module('fyviapp')
.controller('HomeCtrl', function ($scope, $state, IConstants, $http, $rootScope) {
    $scope.doLogin = function () {
        $state.go('login');
    };
    
    $scope.initDash = function(){
    	$http.get(IConstants.GET_LIST_FRIENDS + '/' + $scope.frontUserOnline.accountId).success(function (response) {
    		$scope.model = response;
        });
    };
    
    $scope.goToDash = function() {
    	$scope.initDash();
    	$state.go('app.tabs.dash');
    };
    
    $scope.initDash();
});