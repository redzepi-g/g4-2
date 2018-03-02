function initMap(){
    // Create a map object and specify the DOM element for display.
    var myLatlng = {lat: 41.0297, lng: 21.3292};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatlng,
      zoom: 13
    });
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Click to zoom'
    });

    map.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });

    marker.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });

    // Create a map object and specify the DOM element for display.
    var myLatlng2 = {lat: 41.0297, lng: 21.3292};
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: myLatlng2,
      zoom: 13
    });
    var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map2,
      title: 'Click to zoom'
    });

    map2.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
        map2.panTo(marker2.getPosition());
      }, 3000);
    });

    marker2.addListener('click', function() {
      map2.setZoom(8);
      map2.setCenter(marker2.getPosition());
    });

}