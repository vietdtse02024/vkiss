angular.module('fyviapp')
.controller('SettingCtrl', function ($scope, $ionicLoading, $stateParams, IConstants, $http) {
    $scope.edit = function(val) {
    	$scope.editProfile = val;
    };
});