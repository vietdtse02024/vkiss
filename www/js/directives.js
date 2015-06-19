angular.module('starter.directives', ['starter.services'])

.directive('map', function (MapService) {
    return {
        restrict: 'E',
        scope: {
            onCreate: '&'
        },
        link: function ($scope, $element, $attr) {
            function initialize() {
                var lat = MapService.getLat();
                var lng = MapService.getLng();
                var mapOptions = {
                    center: new google.maps.LatLng(lat, lng),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map($element[0], mapOptions);

                $scope.onCreate({ map: map });

                // Stop the side bar from dragging when mousedown/tapdown on the map
                google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                    e.preventDefault();
                    return false;
                });

                google.maps.event.addListener(map, 'click', function (event) {
                    marker = new google.maps.Marker({
                        position: event.latLng,
                        map: map
                    });
                });
            }

            if (document.readyState === "complete") {
                initialize();
            } else {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
        }
    }
});
