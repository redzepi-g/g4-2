<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- custom style -->
    <link rel="stylesheet" href="{{asset('css/mainStyle.css')}}" />

    <title>Hello, world!</title>
  </head>
  <body>
   
    <!-- main container start -->
    <div class="container-fluid">
        <div class="row"> <!-- navigation bar-->
        <div class="col-xs-12 col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
  </div>
</nav>
        </div>

        </div><!-- end of navigation -->

        <!-- main row start -->
        <div class="row">
            <div class="col-xs-12 col-sm-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="{{asset('img/bitola_one.jpg')}}" class="d-block w-100 img-fixed" alt="Test">
            <div class="carousel-caption d-none d-md-block">
                <h5>This is epic.</h5>
                        <button type="button" class="btn btn-primary">Epic button.</button>
                        <button type="button" class="btn btn-success">Epic button.</button>
                        <button type="button" class="btn btn-danger">Epic button.</button>
            </div>
            </div>

            <div class="carousel-item">
                    <img src="{{asset('img/bitola_two.jpg')}}" class="d-block w-100 img-fixed" alt="Test">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>This is epic.</h5>
                        <button type="button" class="btn btn-primary">Epic button.</button>
                        <button type="button" class="btn btn-success">Epic button.</button>
                        <button type="button" class="btn btn-danger">Epic button.</button>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="{{asset('img/bitola_three.jpg')}}" class="d-block w-100 img-fixed" alt="Test">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>This is epic.</h5>
                        <button type="button" class="btn btn-primary">Epic button.</button>
                        <button type="button" class="btn btn-success">Epic button.</button>
                        <button type="button" class="btn btn-danger">Epic button.</button>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            </div>

            <div id="map"></div>


        </div>
    </div>


    
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQR0wQoH-VRKpplCisYo2LcWWXw8PjEFY&callback=initMap"
    async defer></script>

    <script>
      function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

    </script>


</body>
</html>