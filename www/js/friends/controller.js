angular.module('fyviapp')
.controller('FriendsCtrl', function ($scope, Chats, $http) {
    $scope.chats = Chats.all();
    
    $scope.remove = function (chat) { 
        Chats.remove(chat);
    }

    $scope.getListFriends = function () {
        $http.get('http://localhost:8082/fyvi-ws/fyvi/account/get-list-friends').success(function (response) {
            $scope.model = response;
        });
    };
});