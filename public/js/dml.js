function initMap() {
    console.log("anything");
    $(() => {
        $.ajax({
            type: "GET",
            url: "http://localhost/g4-2/public/api/destinations",
            dataType: "json",
            success: function (data) {
                console.log(data);
                onSuccess(data);
            },
            error: function () {
                console.log("Couldn't get data from API.");
            }
        });

        function onSuccess(data) {
            let unsortedMaps = [];
            for (let i = 0; i < data.length; i++) {
                let mapInfo = [{
                    lat: parseFloat(data[i].lat),
                    lng: parseFloat(data[i].lon)
                }, {
                    img: data[i].img_1.toString(),
                    info: data[i].about
                }]
                unsortedMaps.push(mapInfo);
            }
            console.log(unsortedMaps);
            // ---------------------GEOLOCATION---------------------------        
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var userPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    console.log("whatever");
                    console.log(userPos);
                    //--------------INITIAL MAP WITH USER LOCATION---------------
                    for (let i = 0; i < unsortedMaps.length; i++) {
                        //LEFT-SIDE MAP RIGHT-SIDE INFO
                        var mapRow = $(`<div class="row extra-padding" id="mapRow-${i}" />`);
                        var colLeft = $(`<div class="col-xs-12 col-sm-6" />`);
                        var mapDiv = $(`<div id="map-${i}" />`);
                        mapDiv.css("height", "500px");

                        colLeft.append(mapDiv);
                        mapRow.append(colLeft);
                        $('#mainCol').append(mapRow);
                        var destinationPos = unsortedMaps[i][0];
                        console.log(userPos);
                        console.log(destinationPos);
                        if (i === 0) {
                            var map = new google.maps.Map(document.getElementById(`map-${i}`), {
                                center: userPos,
                                zoom: 16
                            });
                            var infoWindow = new google.maps.InfoWindow;
                            infoWindow.setPosition(userPos);
                            infoWindow.setContent('Your location.');
                            infoWindow.open(map);

                            var directionsDisplay = new google.maps.DirectionsRenderer({
                                map: map
                            });

                            // Set destination, origin and travel mode.
                            var request = {
                                destination: destinationPos,
                                origin: userPos,
                                travelMode: 'DRIVING'
                            };

                            // Pass the directions request to the directions service.   
                            var directionsService = new google.maps.DirectionsService();
                            directionsService.route(request, function (response, status) {
                                if (status == 'OK') {
                                    // Display the route on the map.
                                    directionsDisplay.setDirections(response);
                                }
                            });
                        }
                    }

                    var infoWindow = new google.maps.InfoWindow;
                    infoWindow.setPosition(userPos);
                    infoWindow.setContent('Your location.');
                    infoWindow.open(map);
                    //-------------INITIAL MAP WITH USER LOCATION---------------        
                    // var posResult = pos.lat + pos.lng;
                    // var sortedMapPositions = mapPositions.sort((a, b) => sortingCoordinatesFunction(a, b, posResult));
                    // for (let i = 0; i < sortedMapPositions.length; i++) {
                    //     let index = i + 2;
                    //     var map1 = new google.maps.Map(document.getElementById(`map-${index}`), {
                    //         center: sortedMapPositions[i],
                    //         zoom: 17
                    //     });
                    //     var marker1 = new google.maps.Marker({
                    //         position: sortedMapPositions[i],
                    //         map: map1
                    //     });
                    // }

                }, function () {
                    console.log("Location not given.");
                    for (let i = 0; i < mapPositions.length; i++) {
                        let index = i + 1;
                        var map1 = new google.maps.Map(document.getElementById(`map-${index}`), {
                            center: mapPositions[i],
                            zoom: 17
                        });
                        var marker1 = new google.maps.Marker({
                            position: mapPositions[i],
                            map: map1
                        })
                    }

                });
            } else {
                // Browser doesn't support Geolocation
                console.log("Browser doesn't support Geolocation.");
            }
        }
            

        function sortingCoordinatesFunction(a, b, pos) {
            let posResult = pos;
            let aResult = a.lat + a.lng;
            let bResult = b.lat + b.lng;
            //if 1 of the sums is positive but the other is negative
            if ((aResult < 0 && bResult > 0) || (aResult > 0 && bResult < 0)) {
                let posResultPositive;
                if (posResult < 0)
                    posResultPositive = posResult * -1;
                else
                    posResultPositive = posResult;

                if (aResult < 0) {
                    let aResultPositive = aResult * -1;
                    if (aResultPositive > posResultPositive) {
                        if (bResult > posResultPositive) {
                            if (aResultPositive - posResultPositive < bResult - posResultPositive)
                                return -1;
                            else
                                return 1;
                        } else {
                            if (aResultPositive - posResultPositive < posResultPositive - bResult)
                                return -1;
                            else
                                return 1;
                        }
                    } else {
                        if (bResult > posResultPositive) {
                            if (posResultPositive - aResultPositive < bResult - posResultPositive)
                                return -1;
                            else
                                return 1;
                        } else {
                            if (posResultPositive - aResultPositive < posResultPositive - bResult)
                                return -1;
                            else
                                return 1;
                        }
                    }
                } else {
                    let bResultPositive = bResult * -1;
                    if (aResult > posResultPositive) {
                        if (bResultPositive > posResultPositive) {
                            if (aResult - posResultPositive < bResultPositive - posResultPositive)
                                return -1;
                            else
                                return 1;
                        } else {
                            if (aResult - posResultPositive < posResultPositive - bResultPositive)
                                return -1;
                            else
                                return 1;
                        }
                    } else {
                        if (bResultPositive > posResultPositive) {
                            if (posResultPositive - aResult < bResultPositive - posResultPositive)
                                return -1;
                            else
                                return 1;
                        } else {
                            if (posResultPositive - aResult < posResultPositive - bResultPositive)
                                return -1;
                            else
                                return 1;
                        }
                    }
                }
            }
            //if position is negative and both of the sums are negative OR positive
            if (posResult < 0) {
                if (aResult > 0 && bResult > 0) {
                    if (aResult < bResult)
                        return -1;
                    else
                        return 1;
                } else if (aResult < 0 && bResult < 0) {
                    let aResultPositive = aResult * -1;
                    let bResultPositive = bResult * -1;
                    let posResultPositive = posResult * -1;
                    if (aResultPositive > posResultPositive) {
                        if (bResultPositive > posResultPositive) {
                            if (aResultPositive - posResultPositive < bResultPositive - posResultPositive)
                                return -1;
                            else
                                return 1
                        } else {
                            if (aResultPositive - posResultPositive < posResultPositive - bResultPositive)
                                return -1;
                            else
                                return 1;
                        }
                    } else {
                        if (bResultPositive > posResultPositive) {
                            if (posResultPositive - aResultPositive < bResultPositive - posResultPositive)
                                return -1;
                            else
                                return 1;
                        } else {
                            if (posResultPositive - aResultPositive < posResultPositive - bResultPositive)
                                return -1;
                            else
                                return 1;
                        }
                    }
                }
            }
            //if position is positive and both sums are positive
            if (aResult > posResult) {
                if (bResult > posResult) {
                    if (aResult - posResult < bResult - posResult)
                        return -1;
                    else
                        return 1;
                }
                else {
                    if (aResult - posResult < posResult - bResult)
                        return -1;
                    else
                        return 1;
                }
            } else {
                if (bResult > posResult) {
                    if (posResult - aResult < bResult - posResult)
                        return -1;
                    else
                        return 1;
                }
                else {
                    if (posResult - aResult < posResult - bResult)
                        return -1;
                    else
                        return 1;
                }
            }
        }
    });
}