function initMap() {
  $(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost/g4-2/public/api/destinations",
      dataType: "json",
      success: function (data) {
        generateEventsForButtons(3, data);
      },
      error: function () {
        console.log("Couldn't get data from API.");
        return;
      }
    });

    //Back to top button when history is showing BUG HERE(FIX);
    $('#backToTop').on('click', () => {
      document.getElementById('landing').scrollIntoView({
        behavior: 'smooth'
      });
    });

    //Directions buttons logic starts here
    function directionsHandlerGenerator(directionsBtn, coordinates) {
      directionsBtn.on("click", (e) => {
        e.preventDefault();
        directionsBtn.blur();

        var map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 13
        });

        var marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: "Click to zoom"
        });

        map.addListener('center_changed', function () {
          window.setTimeout(function () {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener("click", function () {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });

        $('#historyDiv').css('display', 'none');
        $('#morePhotos').css('display', 'none');
        $('#map').css('display', 'block');
        document.getElementById('map').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    //Directions buttons logic ends here

    //History buttons logic starts here    
    function historyHandlerGenerator(historyBtn, historyData) {
      historyBtn.on('click', (e) => {
        e.preventDefault();
        historyBtn.blur();

        let about = $('#aboutP');
        let legacy = $('#legacyP');
        let present = $('#presentP');
        let trivia = $('#triviaP');

        $('#morePhotos').css('display', 'none');
        $('#map').css('display', 'none');
        about.html(historyData.about);
        legacy.html(historyData.legacy);
        present.html(historyData.present);
        trivia.html(historyData.trivia);
        $('#historyDiv').css('display', 'block');
        document.getElementById('historyDiv').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    //History buttons logic ends here    

    //More-Photos buttons logic starts here        
    function photosHandlerGenerator(photosBtn, imageSrcs) {
      photosBtn.on('click', (e) => {
        e.preventDefault();
        photosBtn.blur();

        let image0 = $('#xtra_image_0');
        let image1 = $('#xtra_image_0');
        let image2 = $('#xtra_image_0');

        $('#historyDiv').css('display', 'none');
        $('#map').css('display', 'none');
        image0.attr('src', imageSrcs[0]);
        image1.attr('src', imageSrcs[1]);
        image2.attr('src', imageSrcs[2]);
        $('#morePhotos').css('display', 'block');

        document.getElementById('morePhotos').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    //More-Photos buttons logic ends here            

    //This function is responsible for setting the events on all the buttons
    //using the functions above
    function generateEventsForButtons(numOfButtons, data) {
      for (let i = 0; i < numOfButtons; i++) {
        let coords = {
          lat: parseFloat(data[i].lat),
          lng: parseFloat(data[i].lon)
        }

        let history = {
          about: data[i].about,
          legacy: data[i].legacy,
          present: data[i].present,
          trivia: data[i].trivia,
        }

        let photos = [
          data[i].img_1.toString(),
          data[i].img_2.toString(),
          data[i].img_3.toString(),
        ]
        directionsHandlerGenerator($(`#show_map_${i}`), coords);
        historyHandlerGenerator($(`#load_history_content_${i}`), history);
        photosHandlerGenerator($(`#load_photos_${i}`), photos);
      }
    }

    //-COMMENT Create a map object and specify the DOM element for display.
    // var myLatlng = { lat: 41.0297, lng: 21.3292 };
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: myLatlng,
    //   zoom: 13
    // });
    // var marker = new google.maps.Marker({
    //   position: myLatlng,
    //   map: map,
    //   title: 'Click to zoom'
    // });

    // map.addListener('center_changed', function () {
    //-COMMENT 3 seconds after the center of the map has changed, pan back to the
    //-COMMENT marker.
    //   window.setTimeout(function () {
    //     map.panTo(marker.getPosition());
    //   }, 3000);
    // });

    // marker.addListener('click', function () {
    //   map.setZoom(8);
    //   map.setCenter(marker.getPosition());
    // });


    // function loadMap(){
    //   var showMap = document.getElementById("map");
    //   var historyDiv = document.getElementById("historyDiv");
    //   var photosDiv = document.getElementById("morePhotos");

    //    if (showMap.style.display === "none") {
    //     showMap.style.display = "block";

    //     //smooth scrolling
    // document.querySelector('#map').scrollIntoView({ 
    //   behavior: 'smooth' 
    // });

    //     // hide the history div and photos div
    //     historyDiv.style.display = "none";
    //     photosDiv.style.display = "none";
    //   } else {
    //     showMap.style.display = "none";
    //   }
    // }
    // function loadHistory(){
    //   var showHistory = document.getElementById("historyDiv");
    //   var mapDiv = document.getElementById("map");
    //   var photosDiv = document.getElementById("morePhotos");

    //   if (showHistory.style.display === "none") {
    //     showHistory.style.display = "block";

    //       //smooth scrolling
    //       document.querySelector('#historyDiv').scrollIntoView({ 
    //           behavior: 'smooth' 
    //       });

    //     //hide the photos and map div
    //     mapDiv.style.display = "none";
    //     photosDiv.style.display = "none";
    //   } else {
    //     showHistory.style.display = "none";
    //   }
    // }

    // function loadPhotos(){
    //   var showPhotos = document.getElementById("morePhotos");
    //   var mapDiv = document.getElementById("map");
    //   var historyDiv = document.getElementById("historyDiv");

    //   if (showPhotos.style.display === "none") {
    //     showPhotos.style.display = "block";

    //       //smooth scrolling
    //       document.querySelector('#morePhotos').scrollIntoView({ 
    //           behavior: 'smooth' 
    //       });

    //     //hide the history and map div
    //     mapDiv.style.display = "none";
    //     historyDiv.style.display = "none";
    //   } else {
    //     showPhotos.style.display = "none";
    //   }
    // }
  });
}