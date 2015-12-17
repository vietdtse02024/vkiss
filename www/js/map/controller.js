angular.module('fyviapp')
.controller('MapCtrl', function ($scope, $ionicLoading, MapService, $stateParams, IConstants, $http) {
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };

    $scope.createMarker = function (latLng, entity) {
    	var name = entity.fullName;
    	if (entity.fullName == null) {
    		name = entity.phoneNumber;
    	}
        $scope.marker = new MarkerWithLabel({
            position: latLng,
            draggable: false,
            raiseOnDrag: true,
            animation: google.maps.Animation.DROP,
            map: $scope.map,
            labelContent: '<img src="img/ionic.png" style="width:30px; height: 30px"></img>' 
            	+ '<br />' + '<b>'+ name +'</b>',
            labelAnchor: new google.maps.Point(25, 100),
            labelClass: "marker-labels", // the CSS class for the label
            labelStyle: { opacity: 0.75 }
        });
    }

    $scope.createDirections = function (curPos, pos2) {
        // Create a renderer for directions and bind it to the map.
        $scope.rendererOptions = {
            map: $scope.map
        }
        $scope.directionsService = new google.maps.DirectionsService();
        $scope.directionsDisplay = new google.maps.DirectionsRenderer($scope.rendererOptions);
        $scope.directionsDisplay.setMap($scope.map);
        $scope.directionsDisplay.setOptions ( { suppressMarkers: true } );
        var selectedMode = 'DRIVING';
        var request = {
            origin: curPos,
            destination: pos2,
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode]
        };
        $scope.directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
            	$scope.directionsDisplay.setDirections(response);
            }
        });
    }

    $scope.centerOnMe = function (isDirect) {
    	if ($scope.marker) {
    		$scope.marker.setMap(null);
    	}
    	if ($scope.directionsDisplay) {
    		$scope.directionsDisplay.setMap(null);
    	}
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
            var pos2 = new google.maps.LatLng($scope.locationHistory[0].latitude, $scope.locationHistory[0].longtitude);
            $scope.createMarker(pos2, $scope.locationHistory[0]);
            if (isDirect) {
	            $scope.createMarker(curPos, $scope.frontUserOnline);
	            $scope.createDirections(curPos, pos2);
	            $scope.map.setCenter(curPos);
            } else {
            	$scope.map.setCenter(pos2);
            }
            $ionicLoading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };
    
    $scope.getLocation = function(accountId) {
    	var friendId = accountId;
    	var isDirect = false;
    	if (accountId == null) {
    		friendId = $stateParams.friendId;
    		isDirect = true;
    	}
    	$http.get(IConstants.GET_LOCATION + '/' + friendId).success(function (response) {
    		$scope.locationHistory = response.listLocationHistory;
    		$scope.centerOnMe(isDirect);
        });
    };
});