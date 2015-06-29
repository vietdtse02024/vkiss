angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $ionicLoading) {
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $ionicLoading.show({
            template: '<ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
            duration: 1000
        });
    };

    $scope.checkLogin = function () {
        var check = 2;
        if (check == 1) {
            console.log('Got login', check);
            $state.go('app.tabs');
        } else if (check == 2) {
            $state.go('login');
        }
    }
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
})
.controller('ChatsDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})
.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})
.controller('MapCtrl', function ($scope, $ionicLoading, MapService) {
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };

    $scope.createMarker = function(latLng) {
        var marker = new MarkerWithLabel({
            position: latLng,
            draggable: true,
            raiseOnDrag: true,
            animation: google.maps.Animation.DROP,
            map: $scope.map,
            labelContent: "Hey. You here!",
            labelAnchor: new google.maps.Point(80, 100),
            labelClass: "marker-labels", // the CSS class for the label
            labelStyle: { opacity: 0.75 }
        });
        var iw1 = new google.maps.InfoWindow({
            content: "Home For Sale"
        });
        google.maps.event.addListener(marker, "click", function (e) { iw1.open(map, this); });
    }

    $scope.createDirections = function (curPos, pos2) {
        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
            map: $scope.map
        }
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
        directionsDisplay.setMap($scope.map);
        var selectedMode = 'DRIVING';
        var request = {
            origin: curPos,
            destination: pos2,
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode]
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }

    $scope.centerOnMe = function () {
        console.log("Centering");
        if (!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });
        
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('Got pos', pos);
            var curPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var pos2 = new google.maps.LatLng(MapService.getLat(), MapService.getLng());
            var LatLngArr = [curPos, pos2];
            $scope.createMarker(curPos);
            //$scope.createMarker(pos2);
            $scope.createDirections(curPos, pos2);
            $scope.map.setCenter(curPos);
            $ionicLoading.hide()
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };
});