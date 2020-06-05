<?php require 'navbar.php'; ?>
<link rel="stylesheet" href="./bmi-style.css?v=<?php echo time(); ?>">
          <div class="categories">
            <h1>Welcome to the BMI Calculator tool.</h1>
            <img src="images/bmi_img.jpg" class="img-fluid" alt="Image of mesure">
            <p class="lead">Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.</p>
            <hr class="my-4">
            <p>The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. That categorization is the subject of some debate about where on the BMI scale the dividing lines between categories should be placed. Commonly accepted BMI ranges are underweight (under 18.5 kg/m2), normal weight (18.5 to 25), overweight (25 to 30), and obese (over 30).</p>
            <hr class="my-4">
            <div class="container-fluid">
                <div class="container" id="bmibox">
                  
                  <h3>BMI Calculator</h3>

                    <form id="bmiform">
                      <label>Height (cm)</label>
                      <input id='height' type="number" min="1" step="10">
                      <label>Weight (kg)</label>
                      <input id='weight' type="number" min="1">
                      <input id="bmibtn" type="button" name value="Calculate">
                    </form>
                    
                    <table id="bmitable">
                      <tr>
                        <th>BMI</th>
                        <th>Weight Status</th>
                      </tr>
                      <tr>
                        <td>Below 18.5</td>
                        <td>Underweight</td>
                      </tr>
                      <tr>
                        <td>18.5 – 24.9</td>
                        <td>Normal or Healthy Weight</td>
                      </tr>
                      <tr>
                        <td>25.0 – 29.9</td>
                        <td>Overweight</td>
                      </tr>
                      <tr>
                        <td>30.0 and Above</td>
                        <td>Obese</td>
                      </tr>
                    </table> 
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
            <script type="text/javascript" src="./bmi.js"></script>
    </body>
</html>