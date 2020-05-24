        <?php require 'navbar.php';?>

        <link rel="stylesheet" type="text/css" href="style.css">

        <h1 class="text-center" id="taheader">Welcome to our training assistant tool. Click on the muscle you wanna learn how to train.</h1>

        <div class="container mb-5">

            <div class="row">

                <div class="col-fluid-4">

                    <img src="./images/muscle-anatomy-chart.jpg" alt="Human muscle anatomy chart" usemap="#workmap">

                    <map name="workmap">
                    
                        <area alt="shoulder_FL" title="Shoulders" coords="149,75,171,96" shape="rect" onclick="execute('shoulder workout')">
                        <area alt="shoulder_FR" title="Shoulders" coords="235,96,256,75" shape="rect" onclick="execute('shoulder workout')">
                        <area alt="shoulder_RL" title="Shoulders" coords="35,489,53,515" shape="rect" onclick="execute('shoulder workout')">
                        <area alt="shoulder_RR" title="Shoulders" coords="124,488,142,514" shape="rect" onclick="execute('shoulder workout')">
                        <area alt="shoulders_text_F" title="" coords="40,63,100,77" shape="rect" onclick="execute('shoulder workout')">
                        <area alt="shoulders_text_R" title="" coords="190,448,252,465" shape="rect" onclick="execute('shoulder workout')">
                    
                        <area alt="forearm_FL" title="Forearms" coords="132,174,161,139" shape="rect" onclick="execute('forearms workout')">
                        <area alt="forearm_FR" title="Forearms" coords="245,141,273,177" shape="rect" onclick="execute('forearms workout')">
                        <area alt="forearm_RL" title="Forearms" coords="19,563,47,593" shape="rect" onclick="execute('forearms workout')">
                        <area alt="forearm_RR" title="Forearms" coords="132,560,160,591" shape="rect" onclick="execute('forearms workout')">
                        <area alt="forearms_text_F" title="" coords="44,149,100,165" shape="rect" onclick="execute('forearms workout')">
                        <area alt="forearms_text_R" title="" coords="190,546,250,563" shape="rect" onclick="execute('forearms workout')">            
                        
                        <area alt="calve_FL" title="Calves" coords="162,290,193,330" shape="rect" onclick="execute('calves workout')">
                        <area alt="calve_FR" title="Calves" coords="206,290,239,330" shape="rect" onclick="execute('calves workout')">
                        <area alt="calve_RL" title="Calves" coords="53,692,85,736" shape="rect" onclick="execute('calves workout')">
                        <area alt="calve_RR" title="Calves" coords="98,692,129,736" shape="rect" onclick="execute('calves workout')">
                        <area alt="calves_text_F" title="" coords="60,257,102,274" shape="rect" onclick="execute('calves workout')">
                        <area alt="calves_text_R" title="" coords="190,694,234,677" shape="rect" onclick="execute('calves workout')">
                        
                        <area alt="trap_FL" title="Traps" coords="174,59,192,75" shape="rect" onclick="execute('trapezius workout')">
                        <area alt="trap_FR" title="Traps" coords="216,60,234,75" shape="rect" onclick="execute('trapezius workout')">
                        <area alt="traps_R" title="Traps" coords="54,472,123,497" shape="rect" onclick="execute('trapezius workout')">
                        <area alt="traps_text_F" title="" coords="66,32,100,47" shape="rect" onclick="execute('trapezius workout')">
                        <area alt="traps_text_R" title="" coords="191,416,228,433" shape="rect" onclick="execute('trapezius workout')">

                        <area alt="hamstring_L" title="Hamstrings" coords="48,629,89,685" shape="rect" onclick="execute('hamstrings workout')">
                        <area alt="hamstring_R" title="Hamstrings" coords="93,629,134,685" shape="rect" onclick="execute('hamstrings workout')">
                        <area alt="hamstrings_text" title="" coords="190,662,258,645" shape="rect" onclick="execute('hamstrings workout')">

                        <area alt="tricep_L" title="Triceps" coords="27,516,52,558" shape="rect" onclick="execute('triceps workout')">
                        <area alt="tricep_R" title="Triceps" coords="124,515,151,555" shape="rect" onclick="execute('triceps workout')">
                        <area alt="triceps_text" title="" coords="190,512,235,530" shape="rect" onclick="execute('triceps workout')">

                        <area alt="quadricep_L" title="Quadriceps" coords="157,200,198,265" shape="rect" onclick="execute('quadriceps workout')">
                        <area alt="quadricep_R" title="Quadriceps" coords="203,200,244,265" shape="rect" onclick="execute('quadriceps workout')">
                        <area alt="quadriceps_text" title="" coords="32,228,100,244" shape="rect" onclick="execute('quadriceps workout')">

                        <area alt="bicep_L" title="Biceps" coords="137,100,167,136" shape="rect" onclick="execute('biceps workout')">
                        <area alt="bicep_R" title="Biceps" coords="237,100,265,135" shape="rect" onclick="execute('biceps workout')">
                        <area alt="biceps_text" title="" coords="59,119,100,135" shape="rect" onclick="execute('biceps workout')">
                        
                        <area alt="abs" title="Abs" coords="172,168,231,113" shape="rect" onclick="execute('abs workout')">
                        <area alt="abs_text" title="" coords="75,199,102,216" shape="rect" onclick="execute('abs workout')">

                        <area alt="chest" title="Chest" coords="172,81,233,110" shape="rect" onclick="execute('chest workout')">
                        <area alt="chest_text" title="" coords="64,93,100,107" shape="rect" onclick="execute('chest workout')">

                        <area alt="neck" title="Neck" coords="194,57,214,77" shape="rect" onclick="execute('neck workout')">
                        <area alt="neck_text" title="" coords="67,2,100,17" shape="rect" onclick="execute('neck workout')">

                        <area alt="upper_back" title="Upper back" coords="53,498,123,552" shape="rect" onclick="execute('upper back workout')">
                        <area alt="upper_back_text" title="" coords="190,479,262,497" shape="rect" onclick="execute('upper back workout')">

                        <area alt="lower_back" title="Lower back" coords="61,553,121,583" shape="rect" onclick="execute('lower back workout')">
                        <area alt="lower_back_text" title="" coords="190,578,263,595" shape="rect" onclick="execute('lower back workout')">

                        <area alt="glutes" title="Glutes" coords="55,586,127,623" shape="rect" onclick="execute('glutes workout')">
                        <area alt="glutes_text" title="" coords="190,629,232,611" shape="rect" onclick="execute(' glutes workout')">
                    
                    </map>

                </div>

                <div class="col-8" id="video_container"></div>

            </div>

        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script type="text/javascript" src="./training-assistant.js"></script>
        <script async="" defer="" onload="this.onload=function(){};init()" src="https://apis.google.com/js/api.js?"></script>
       
        <?php require 'footer.php';?>

    </body>

</html>