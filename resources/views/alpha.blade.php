<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- custom style -->
    <link rel="stylesheet" href="{{asset('css/alphaStyle.css')}}" />

    <title>G4+2 SEDC Project</title>
  </head>
  <body>
   

    <div class="jumbotron jumbotron-fluid"> <!-- Jumbotron start / main container for full height page landing -->
        <div class="container-fluid"> <!-- container start -->

            <div class="row"><!-- row nav start -->
                <!-- navigation -->
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Library</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>

                    </ul>
                <!-- end of nav -->
            </div><!-- row nav end -->

            <div class="row"> <!-- row 1 start -->

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"> <!-- carousel indicator div start -->
                    <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                
                    <div class="carousel-inner"> <!-- div inner start -->
                        <div class="carousel-item active"> <!-- item div 1 start -->
                            <img src="{{asset('img/bitola_one.jpg')}}" class="d-block img-fluid" alt="Test">
                            <div class="carousel-caption d-none d-md-block"> <!-- caption div 1 start -->
                                <h5>Navigation bar</h5>
                                        <button onclick="loadMap()"   class="btn btn-primary" id="show_map">Directions </button>
                                        <button onclick="loadHistory()"  class="btn btn-success">History</button>
                                        <button onclick="loadPhotos()"  class="btn btn-danger">More Photos</button>
                            </div> <!-- caption div 1 end -->
                        </div> <!-- item div 1 end -->
    
                        <div class="carousel-item"> <!-- item div 2 start -->
                                <img src="{{asset('img/bitola_two.jpg')}}" class="d-block img-fluid" alt="Test">
                                <div class="carousel-caption d-none d-md-block"> <!-- caption div 2 start -->
                                    <h5>Navigation bar</h5>
                                    <button onclick="loadMap()"  type="button" class="btn btn-primary" id="show_map">Directions </button>
                                    <button onclick="loadHistory()" type="button" class="btn btn-success" id="load_history_content">History</button>
                                    <button onclick="loadPhotos()" type="button" class="btn btn-danger">More photos</button>
                                </div> <!-- caption div 2 end -->
                            </div> <!-- item div 2 end -->
    
                            <div class="carousel-item"> <!-- item 3 div start -->
                                <img src="{{asset('img/bitola_three.jpg')}}" class="d-block img-fluid" alt="Test">
                                <div class="carousel-caption d-none d-md-block"> <!-- caption div 3 start -->
                                    <h5>Navigation bar</h5>
                                    <button onclick="loadMap()"  type="button" class="btn btn-primary" id="show_map">Directions </button>
                                    <button onclick="loadHistory()"  type="button" class="btn btn-success">History</button>
                                    <button onclick="loadPhotos()" type="button" class="btn btn-danger">More photos</button>
                                </div> <!-- caption div 3 end -->
                            </div> <!-- item 3 div end -->
                        </div> <!-- div inner end -->
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                </div> <!-- carousel indicator div end -->

            </div> <!-- row 1 end -->
            
      </div> <!-- container end -->

    
      <!-- this is the content below that changes based on user input -->

        <div class="container-fluid"> <!-- container start -->
            <div class="row"> <!-- row start -->
                <div class="col-xs-12 col-sm-12"> <!-- col start -->
                    
                    <!-- history div -->
                    <div id="historyDiv">
                        <hr class="style2">
                        <h3 class="text-center">History</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet quo aperiam quam obcaecati iste, quae magni sed incidunt, nisi maxime adipisci veritatis porro. Laboriosam commodi esse provident voluptatibus ex.</p>
                          
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit, odit omnis quaerat odio sapiente et voluptate autem officiis. Numquam veniam obcaecati consequatur ducimus quaerat, eligendi dignissimos laudantium nulla similique.</p>
                          <br>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo amet, unde corporis libero repellendus molestiae iusto distinctio ex, minus tempora? Alias accusantium accusamus nemo maxime, possimus id quidem hic.</p>
                            <br>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus, eos earum illo alias culpa magni nostrum! Recusandae ut doloribus fugit minima temporibus consequatur. Similique ducimus ea atque hic. Iure.</p>
                    </div>
                    <!-- end of history div -->

                    <!-- more photos div -->
                    <div id="morePhotos">
                        <hr class="style2">
                        <h3 class="text-center">More photos</h3>
                       
                        <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></a><br>
                        <hr class="style2">
                        <a href="https://placeholder.com"><img src="http://via.placeholder.com/140x100"></a>
                        
                        <a href="https://placeholder.com"><img src="http://via.placeholder.com/200x100"></a>
                        <hr class="style2">
                    </div>
                    <!-- more phots div end -->

                    <!-- map div -->
                    <div id="map">

                    </div>
                    <!-- end of map div -->


                </div> <!-- col end -->
            </div><!-- row end -->
        </div><!-- container end-->


    </div> <!-- jumbotron end // all content should be inside the jumbotron -->


   
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    <!-- google maps api -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQR0wQoH-VRKpplCisYo2LcWWXw8PjEFY&callback=initMap" async defer></script>

    <!-- custom scripts here below -->
    <script src="{{asset('js/landingJs.js')}}"></script>

</body>
</html>