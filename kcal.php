<?php require 'navbar.php'; ?>
  <link rel="stylesheet" type="text/css" href="./kcalcalculatorstyle.css">

    <div class="container">
      <h1 class="header">Calculate your Calories</h1>
      <!-- Calculation formbox-->
      <form class="calcbox">
        <h2>Food Insertion</h2>
        <div class="form-group">
          <label id="foodlabel" for="foods">Food</label>
          <input id='food' type="text" name="" title="foods" pattern="[a-zA-Z]*">
        <div class="form-group">
          <label id="foodcalorieslabel">Calories</label>
          <input id='foodcalories' type="number" value="0" > 
        </div class="form-group">
          <label id="foodquantitylabel">Quantity</label>
          <input id='foodquantity' type="number" value="0">
        </div>
        <div class="form-row">
          <label id="timezoneslabel">Timezones</label>
          <select class="form-control" name="" id="timezones"> 
            <option value="Breakfast">Breakfast</option>
            <option value="Mid Morning Snack">Mid Morning Snack</option>
            <option value="Lunch">Lunch</option>
            <option value="Afternoon Snack">Afternoon Snack</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
          <button id="calbtn" type="button" class="btn btn-dark">Submit</button> 
      </form>
    </div>

    <div class="container">
      <div class="timezone-box">
        <h3>Daily Food</h3>
        <table class="table table-striped table-bordered" id="table">
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Quantity</th>
            <th>Timezone</th>
          </tr>
        </table>
      </div>
    </div>

    <!-- Shows the calculated calories on screen /calCalc -->
    <!--<div id="show-result"></div>-->
    <div class="footer" id="show-result"></div>

    <!-- Javascript code-->
    <script type="text/javascript" src="./kcal.js"></script>
  </body>
</html>
