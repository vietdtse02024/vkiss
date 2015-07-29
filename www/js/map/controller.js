angular.module('fyviapp')
.controller('MapCtrl', function ($scope, $ionicLoading, MapService) {
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };

    $scope.createMarker = function (latLng) {
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