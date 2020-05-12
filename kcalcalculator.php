<?php require 'navbar.php'; ?>
  <link rel="stylesheet" type="text/css" href="./kcalcalculatorstyle.css">
  <div>
    <h1>Calculate your Calories</h1>
  </div>

    <!-- Calculation formbox-->
    <form class="calcbox">
      <h2>Food Insertion</h2>
      <div class="form-group">
        <label id="foodlabel">Food</label>
        <input id='food' type="text" name="" >
      <div class="form-group">
        <label id="foodcalorieslabel">Calories</label>
        <input id='foodcalories' type="number" name="" > 
      </div class="form-group">
        <label id="foodquantitylabel">Quantity</label>
        <input id='foodquantity' type="number" name="">
      </div>
      <div class="form-row">
        <label id="timezoneslabel">Timezones</label>
        <select class="form-control" name="" id="timezones"> 
          <option value="breakfast">Breakfast</option>
          <option value="mid-morning-snack">Mid Morning Snack</option>
          <option value="lunch">Lunch</option>
          <option value="afternoon-snack">Afternoon Snack</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
        <button id="calbtn" type="button" class="btn btn-dark">Submit</button> 
    </form>
 


    <!-- Time zones with food  -->

    <div class="timezone-box" id="breakfast">
      <h3>Breakfast</h3>
      <table id="calctablebreakfast" class="table table-striped table-bordered">
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Quantity</th>
        </tr>
      </table>
    </div>
    <div class="timezone-box" id="mid-morning-snack">
      <h3>Mid Morning Snack</h3>
      <table id="calctablemid-morning-snack" class="table table-striped table-bordered">
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Quantity</th>
        </tr>
      </table>
    </div>
    <div class="timezone-box" id="lunch">
      <h3>Lunch</h3>
      <table id="calctablelunch" class="table table-striped table-bordered">
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Quantity</th>
        </tr>
      </table>
    </div>
    <div class="timezone-box" id="afternoon-snack">
      <h3>Afternoon Snack</h3>
      <table id="calctableafternoon-snack" class="table table-striped table-bordered">
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Quantity</th>
        </tr>
      </table>
    </div>
    <div class="timezone-box" id="dinner">
      <h3>Dinner</h3>
      <table id="calctabledinner" class="table table-striped table-bordered">
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Quantity</th>
        </tr>
      </table>
    </div>

    
    <!-- Shows the calculated calories on screen /calCalc -->
    <div id="show-result"></div>


    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"></script>

      <!-- Javascript code-->
      <script type="text/javascript" src="./kcalcalculator javascript.js"></script>
    </body>
    
</html>