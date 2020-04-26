//Submit Button Pressed 
document.getElementById('calbtn').addEventListener('click',dualFunction);

function dualFunction(){
    calCalc();
    putValuesInTable();
} 


// calCalc needed
const box = document.getElementById('show-result');
const resultp = document.createElement('p');
var foodcalInput = document.getElementById('foodcalories');
var foodquantityInput = document.getElementById('foodquantity');
let showhelpvariable = 0;
// Adds up the total calories to the bottom of the page
function calCalc(){
    document.getElementById('show-result').style.visibility = 'visible';
    let foodcal = parseFloat(foodcalInput.value);
    let foodquant = parseFloat(foodquantityInput.value);
    showhelpvariable = showhelpvariable + foodcal*foodquant;

    resultp.style.margin = '0px';
    resultp.style.color = 'white';
    resultp.style.fontSize = '20px';
    resultp.style.textAlign = 'center';
    resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
    resultp.style.backgroundColor = 'rgba(0, 128, 0, 0.904)';
    
    box.appendChild(resultp);

}

//Adds the food with its information to the proper timezone-table
var table = document.getElementById('calctable');
let rowcounterbreakfast = 0;
let rowcountermidmorningsnack = 0;
let rowcounterlunch = 0;
let rowcounterafternoonsnack = 0;
let rowcounterdinner = 0;
function putValuesInTable(){
  var foodInput = document.getElementById('food').value;
  var foodcalInput = document.getElementById('foodcalories').value;
  var foodquantityInput = document.getElementById('foodquantity').value;
  var timezoneInput = document.getElementById('timezones').value;

  var tableHelp = [foodInput , foodcalInput*foodquantityInput , foodquantityInput,"del"];

 
  if(timezoneInput=="breakfast"){
    rowcounterbreakfast++;
    if(rowcounterbreakfast<=5){
      var table = document.getElementById('calctablebreakfast');
      var row = table.insertRow();
      for (var i of tableHelp){
          var cell = row.insertCell();
          cell.innerHTML = i;
          if(cell.innerHTML=="del"){
            cell.addEventListener("click", function(){
              showhelpvariable = showhelpvariable - tableHelp[1];
              resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
              box.appendChild(resultp);
              table.deleteRow(1);
               if(rowcounterbreakfast>1){
                 rowcounterbreakfast--;
               }
            });
          }
      }
    }
  }

  if(timezoneInput=="mid-morning-snack"){
    rowcountermidmorningsnack++;
    if(rowcountermidmorningsnack<=5){
      var table = document.getElementById('calctablemid-morning-snack');
      var row = table.insertRow();
      for (var i of tableHelp){
          var cell = row.insertCell();
          cell.innerHTML = i;
          if(cell.innerHTML=="del"){
            cell.addEventListener("click", function(){
              showhelpvariable = showhelpvariable - tableHelp[1];
              resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
              box.appendChild(resultp);
              table.deleteRow(1);
              if(rowcountermidmorningsnack>1){
                rowcountermidmorningsnack--;
              }
            });
          }
      }
    }
  }
  if(timezoneInput=="lunch"){
    rowcounterlunch++;
    if(rowcounterlunch<=5){
      var table = document.getElementById('calctablelunch');
      var row = table.insertRow();
      for (var i of tableHelp){
          var cell = row.insertCell();
          cell.innerHTML = i;
          if(cell.innerHTML=="del"){
            cell.addEventListener("click", function(){
              showhelpvariable = showhelpvariable - tableHelp[1];
              resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
              box.appendChild(resultp);
              table.deleteRow(1);
              if(rowcounterlunch>1){
                rowcounterlunch--;
              }
            });
          }
      }
    }
  }
  if(timezoneInput=="afternoon-snack"){
    rowcounterafternoonsnack++;
    if(rowcounterafternoonsnack<=5){
      var table = document.getElementById('calctableafternoon-snack');
      var row = table.insertRow();
      for (var i of tableHelp){
          var cell = row.insertCell();
          cell.innerHTML = i;
          if(cell.innerHTML=="del"){
            cell.addEventListener("click", function(){
              showhelpvariable = showhelpvariable - tableHelp[1];
              resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
              box.appendChild(resultp);
              table.deleteRow(1);
              if(rowcounterafternoonsnack>1){
                rowcounterafternoonsnack--;
              }
            });
          }
      }
    }
  }
  if(timezoneInput=="dinner"){
    rowcounterdinner++;
    if(rowcounterdinner<=5){
      var table = document.getElementById('calctabledinner');
      var row = table.insertRow();
      for (var i of tableHelp){
          var cell = row.insertCell();
          cell.innerHTML = i;
          if(cell.innerHTML=="del"){
            cell.addEventListener("click", function(){
              showhelpvariable = showhelpvariable - tableHelp[1];
              resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(1)}`;
              box.appendChild(resultp);
              table.deleteRow(1);
              if(rowcounterdinner>1){
                rowcounterdinner--;
              }
            });
          }
      }
    } 
  }
}

