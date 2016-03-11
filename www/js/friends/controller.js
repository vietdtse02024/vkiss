angular.module('fyviapp')
.controller('FriendsCtrl', function ($scope, Chats, $http, IConstants, $stateParams, $state, $ionicLoading) {
    $scope.remove = function (accountIdFriend) { 
    	$http.get(IConstants.REMOVE_FRIENDS + '/' + $scope.frontUserOnline.accountId + '/' + accountIdFriend).success(function (response) {
    		$scope.model = response;
        });
    }
    
    $scope.initDetail = function() {
    	$scope.accountIdSelected = $stateParams.friendSelect
    	$http.get(IConstants.GET_ACCOUNT_BY_ID + '/' + $scope.accountIdSelected).success(function (response) {
    		$scope.accountInfo = response.accountInfo;
        });
    };
    
    $scope.initSearchFriend = function() {
    	$scope.model.userFriendsView = null;
    };
    
    $scope.searchFriend = function(searchData) {
    	if(!searchData) {
    		$scope.showAlert('popup.cofirm', 'regist.phoneno.required');
    		return;
    	} else if (searchData.phoneNumber.length < 10){
    		$scope.showAlert('popup.cofirm', 'search.friend.phone.not_valid');
    		return;
    	}
    	$scope.showLoading();
    	$http.get(IConstants.SEARCH_FRIEND_BY_PHONE + '/' + searchData.phoneNumber).success(function (response) {
    		$scope.hideLoading();
    		$scope.model = response;
    		if ($scope.model.userFriendsView == null) {
    			$scope.showAlert('popup.cofirm', 'search.friend.phone.not_regist');
    		}
        });
    };
    
    $scope.startDirection = function(accountIdSelected) {
    	$state.go('app.map', {'friendId' : accountIdSelected});
    };
    
    $scope.addFriend = function(friendId) {
    	$scope.showLoading();
    	$http.get(IConstants.ADD_FRIEND + '/' + $scope.frontUserOnline.accountId + '/' + friendId).success(function (response) {
    		$scope.hideLoading();
        });
    };
    
    $scope.checkStatusRelation = function(accountIdFriend) {
    	
    };
});