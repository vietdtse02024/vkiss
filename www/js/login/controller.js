'use strict'
angular.module('fyviapp')
.controller('LoginCtrl', function ($scope, $state, $http, $cordovaDevice, IConstants) {

    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $scope.uuid = $cordovaDevice.getUUID();
    };

    $scope.regist = function (registData) {
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
            $scope.model = response;
            $state.go('app.tabs');
        });
    };
});