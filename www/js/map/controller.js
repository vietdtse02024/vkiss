﻿angular.module('fyviapp')
.controller('MapCtrl', function ($scope, $ionicLoading, MapService, $stateParams, IConstants, $http) {
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };

    var yourAvatar = document.createElement("img");
    yourAvatar.setAttribute("style","width:30px; height: 30px");
    yourAvatar.src = "http://google-maps-utility-library-v3.googlecode.com/svn-history/r150/trunk/markerwithlabel/examples/home.jpg";
    
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
//        var iw1 = new google.maps.InfoWindow({
//            content: "Home For Sale"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//        });
//        google.maps.event.addListener(marker, "click", function (e) { iw1.open(map, this); });
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

    $scope.centerOnMe = function () {
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
            var LatLngArr = [curPos, pos2];
            $scope.createMarker(curPos, $scope.frontUserOnline);
            $scope.createMarker(pos2, $scope.locationHistory[0]);
            $scope.createDirections(curPos, pos2);
            $scope.map.setCenter(curPos);
            $ionicLoading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };
    
    $scope.getLocation = function() {
    	$http.get(IConstants.GET_LOCATION + '/' + $stateParams.friendId).success(function (response) {
    		$scope.locationHistory = response.listLocationHistory;
    		$scope.centerOnMe();
        });
    };
});