'use strict'
angular.module('fyviapp')
.controller('HomeCtrl', function ($scope, $state) {
    $scope.doLogin = function () {
        $state.go('login');
    };
});