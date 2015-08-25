angular.module('fyviapp')
.controller('FriendsCtrl', function ($scope, Chats, $http, IConstants) {
    $scope.chats = Chats.all();
    
    $scope.remove = function (accountIdFriend) { 
    	$http.get(IConstants.REMOVE_FRIENDS + '/' + $scope.frontUserOnline.accountId + '/' + accountIdFriend).success(function (response) {
    		$scope.model = response;
        });
    }
});