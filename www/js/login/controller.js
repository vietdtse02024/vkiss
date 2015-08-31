'use strict'
angular.module('fyviapp')
.controller('LoginCtrl', function ($scope, $state, $http, $cordovaDevice, IConstants) {

    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $scope.uuid = $cordovaDevice.getUUID();
    };

    $scope.regist = function (registData) {
    	if (!registData) {
    		$scope.showAlert('', 'regist.info.required');
    		return;
    	}
    	if (!$scope.validateInput(registData)) {
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
    $scope.validateInput = function(registData){
    	var phoneNo = registData.phoneNumber;
    	var password = registData.password;
    	if(!phoneNo || phoneNo.trim() == "") {
    		$scope.showAlert('popup.cofirm', 'regist.phoneno.required');
    		return false;
    	} else if (registData.phoneNumber.length < 10){
    		$scope.showAlert('popup.cofirm', 'search.friend.phone.not_valid');
    		return false;
    	} else if (!password || password.trim() == "") {
    		$scope.showAlert('popup.cofirm', 'regist.password.required');
    		return false;
    	}
    	return true;
    }
});