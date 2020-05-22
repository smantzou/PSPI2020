<?php require 'navbar.php'; ?>
<link rel="stylesheet" href="./style.css?v=<?php echo time(); ?>">
  <div class="box"></div>
  <hr class="my-4">
  <div class="carousel-box">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="color: white;">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="b2">
            <a href="categories/fitness/burning-fat-workout.php">
              <img src="./images/burn_fat_carouzel.jpg" class="d-block w-100" alt="Image of scale"></div>
            </a>
          <div class="carousel-caption d-none d-block">

            <h1 class="bg-success "><a class="nav-link" href="categories/fitness/burning-fat-workout.php">Most efficient way to burn fat through working out</a>
            </h1>
            <blockquote class="blockquote ">
              <p class="bg-success">Have you tried everything and still nothing worked for you? Here are some tips for you to lose weight effectively.</p>
            </blockquote>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="b2">
            <a href="categories/diet/waterbenefits.php"><img src="./images/glass_of_water2_carouzel.jpg" class="d-block w-100"
                alt="glass of water"></a>
          </div>
          <div class="carousel-caption d-none d-block">
            <h1 class="bg-success"><a class="nav-link" href="categories/diet/waterbenefits.php">The Health Benefits of Water</a></h1>
            <blockquote class="blockquote">
              <p class="lead bg-success"> We all need water to survive, but how exactly does it help?</p>
            </blockquote>
          </div>
        </div>

        <div class="carousel-item ">
          <div class="b2">
            <a href="bmi-calculator.php"><img src="./images/bmi_img_carouzel.jpg" class="d-block w-100"
                alt="Image of scale"></a>
          </div>
          <div class="carousel-caption d-none d-block">
            <h1 class="bg-success"><a class="nav-link" href="bmi-calculator.php">BMI Calculator</a></h1>
            <blockquote class="blockquote">
              <p class="lead bg-success"> The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass and height.</p>
            </blockquote>
          </div>
        </div>
        
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>  
    <hr class="my-4">
    <div class="container">
      <div class="row">
          <div class="col-md-3">
            <h1 class="display-4">
              Diet
            </h1>
            <div class="b2">
              <a href="categories/diet/fruits.php">
                <img src="./images/fruits.jpg" class="img-fluid" alt="Image of fruits">
              </a>
            </div>
            <h2><a href="categories/diet/fruits.php">Top 10 healthful fruits</a></h2>
                    <p class="small">
                      Eating more fruit is an excellent way to improve overall health and reduce the risk of disease.
                    </p>
                    <p class="writer">By Beth Sissons</p>
          </div>
          <div class="col-md-3">
            <h1 class="display-4">
              Fitness
            </h1>
            <div class="b2">
              <a href="categories/fitness/daily-planking.php">
                <img src="./images/plank.jpg" class="img-fluid" alt="Image of girl lifting weights">
              </a>
            </div>
            <h2 class="display-4"><a href="categories/fitness/daily-planking.php">Benefits of doing plank in daily basis</a></h2>
                    <p class="small">
                      Plank, an easy exercise everyone can do, everywhere. Did you know how beneficial it is for your health?
                    </p>
                    <p class="writer">By Healthy Life</p>
          </div>
          <div class="col-md-3">
            <h1 class="display-4">
              Health
            </h1>
            <div class="b2">
              <a href="./categories/health/How to Protect Yourself & Others.php">
                <img src="./images/coronavirus.jpg" class="img-fluid" alt="Image of girl wearing a mask">
              </a>
            </div>
            <h2><a href="./categories/health/How to Protect Yourself & Others.php">Coronavirus Disease (COVID-19)</a></h2>
                    <p class="small">
                      How to protect yourself and others
                    </p>
                    <p class="writer">By CDC</p>
          </div>
          <div class="col-md-3">
            <h1 class="display-4">
              Psychology
            </h1>
            <div class="b2">
              <a href="./categories/psychology/overcoming-depression.php">
                <img src="./images/depression.jpg" class="img-fluid" alt="Image of sad girl">
              </a>
            </div>
            <h2><a href="./categories/psychology/overcoming-depression.php">Overcoming depression</a></h2>
                    <p class="small">
                      How psychologists help with depressive disorders.
                    </p>
                    <p class="writer">By American Psychological Association</p>
          </div>
      </div>
     </div>
     <?php require 'footer.php'; ?>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"></script>
</body>
</html>
