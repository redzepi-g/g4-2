    
      function initMap() {
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


      }

      function loadMap(){
        var showMap = document.getElementById("map");
        var historyDiv = document.getElementById("historyDiv");
        var photosDiv = document.getElementById("morePhotos");

         if (showMap.style.display === "none") {
          showMap.style.display = "block";
          
          //smooth scrolling
          document.querySelector('#map').scrollIntoView({ 
            behavior: 'smooth' 
          });
          
          // hide the history div and photos div
          historyDiv.style.display = "none";
          photosDiv.style.display = "none";
        } else {
          showMap.style.display = "none";
        }
      }
      function loadHistory(){
        var showHistory = document.getElementById("historyDiv");
        var mapDiv = document.getElementById("map");
        var photosDiv = document.getElementById("morePhotos");

        if (showHistory.style.display === "none") {
          showHistory.style.display = "block";

            //smooth scrolling
            document.querySelector('#historyDiv').scrollIntoView({ 
                behavior: 'smooth' 
            });
          
          //hide the photos and map div
          mapDiv.style.display = "none";
          photosDiv.style.display = "none";
        } else {
          showHistory.style.display = "none";
        }
      }
      
      function loadPhotos(){
        var showPhotos = document.getElementById("morePhotos");
        var mapDiv = document.getElementById("map");
        var historyDiv = document.getElementById("historyDiv");

        if (showPhotos.style.display === "none") {
          showPhotos.style.display = "block";

            //smooth scrolling
            document.querySelector('#morePhotos').scrollIntoView({ 
                behavior: 'smooth' 
            });

          //hide the history and map div
          mapDiv.style.display = "none";
          historyDiv.style.display = "none";
        } else {
          showPhotos.style.display = "none";
        }
      }