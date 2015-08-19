'use strict'
angular.module('fyviapp')
.controller('LoginCtrl', function ($scope, $state, $http, $cordovaDevice, IConstants) {

    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $scope.uuid = $cordovaDevice.getUUID();
    };

    $scope.regist = function (valid, registData) {
    	if (!valid) {
			console.log("validate fail");
			return;
    	}else {
	        registData["uuid"] = $scope.uuid;
	        $http({
	            url: IConstants.REGIST_ACCOUNT,
	            method: "POST",
	            data: registData,
	            headers: {
	                "Content-Type": "application/json",
	                "Accept": "application/json"
	            }
	        }).success(function (response) {
	            $scope.checkAccountExist();
	        });
    	}
    };
});