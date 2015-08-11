'use strict'
angular.module('fyviapp')
.controller('LoginCtrl', function ($scope, $state, $http, $cordovaDevice, IConstants) {

    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $scope.uuid = $cordovaDevice.getUUID();
    };

    $scope.regist = function (registData) {
        var phoneNo = registData.phoneNumber;
        var fullName = registData.fullName;
        var accountName = registData.accountName;
        var password = registData.password;
        $http.get(IConstants.REGIST_ACCOUNT + '/' + phoneNo + '/' + fullName + '/' + accountName + '/' + password).success(function (response) {
            $scope.model = response;
            $state.go('app.tabs');
        });
    };
});