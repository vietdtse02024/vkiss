angular.module('fyviapp')
.controller('LoginCtrl', function ($scope, $state) {
    $scope.doLogin = function () {
        $scope.name = "Mr. Viet";
        var check = 1;
        if (check == 1) {
            console.log('Got login', check);
            $state.go('app.tabs');
        } else if (check == 2) {
            $state.go('app.playlists');
        }
    }
});