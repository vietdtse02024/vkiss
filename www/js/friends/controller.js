﻿angular.module('fyviapp')
.controller('FriendsCtrl', function ($scope, Chats, $http, IConstants, $stateParams) {
    $scope.remove = function (accountIdFriend) { 
    	$http.get(IConstants.REMOVE_FRIENDS + '/' + $scope.frontUserOnline.accountId + '/' + accountIdFriend).success(function (response) {
    		$scope.model = response;
        });
    }
    
    $scope.initDetail = function() {
		$scope.friendSelect = $stateParams.friendSelect;
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
    
});