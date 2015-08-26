angular.module('fyviapp')
.controller('FriendsCtrl', function ($scope, Chats, $http, IConstants, $stateParams) {
    $scope.remove = function (accountIdFriend) { 
    	$http.get(IConstants.REMOVE_FRIENDS + '/' + $scope.frontUserOnline.accountId + '/' + accountIdFriend).success(function (response) {
    		$scope.model = response;
        });
    }
    
    $scope.initDetail = function() {
		$scope.friendSelect = $stateParams.friendSelect;
    };
});