// calCalc needed
const box = document.getElementById("show-result");
const resultp = document.createElement("p");
var foodcalInput = document.getElementById("foodcalories");
var foodquantityInput = document.getElementById("foodquantity");

const form = document.getElementById("forma");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const { foodInput, foodcalInput, foodquantityInput } = getCaloriesFormData();

  fetch("/api/addCal", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      totalCal: showhelpvariable,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(showhelpvariable);
    });
});
let showhelpvariable = 0;
flag3 = false;
// Adds up the total calories to the bottom of the page
function calCalc() {
  document.getElementById("show-result").style.visibility = "visible";
  let foodcal = parseFloat(foodcalInput.value);
  let foodquant = parseFloat(foodquantityInput.value);
  showhelpvariable = showhelpvariable + foodcal * foodquant;

  resultp.style.margin = "0px";
  resultp.style.color = "rgba(0, 128, 0, 0.904)";
  resultp.style.fontSize = "20px";
  resultp.style.textAlign = "center";
  resultp.style.backgroundColor = "white";
  box.appendChild(resultp);
}

//Adds the food with its information to the proper timezone-table

function getCaloriesFormData() {
  var foodInput = document.getElementById("food").value;
  var foodcalInput = document.getElementById("foodcalories").value;
  var foodquantityInput = parseFloat(
    document.getElementById("foodquantity").value
  );

  return {
    foodInput,
    foodcalInput,
    foodquantityInput,
  };
}

function putValuesInTable() {
  var daily = document.querySelector(".timezone-box");

  const { foodInput, foodcalInput, foodquantityInput } = getCaloriesFormData();

  var timezoneInput = document.getElementById("timezones").value;
  var deleteButton = document.createElement("BUTTON");
  deleteButton.innerText = "x";
  deleteButton.style.color = "#fff";
  deleteButton.style.fontWeight = "400";
  deleteButton.style.width = "2em";
  deleteButton.style.fontFamily = "Arial, sans-serif";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.marginLeft = "33%";
  deleteButton.style.textAlign = "center";
  deleteButton.style.textDecoration = "none";
  deleteButton.style.borderRadius = "4px";
  deleteButton.style.border = "1px solid black";
  deleteButton.style.cursor = "pointer";

  var tableHelp = [
    foodInput,
    foodcalInput * foodquantityInput,
    foodquantityInput,
    timezoneInput,
    deleteButton.outerHTML,
  ];

  var table = document.getElementById("table");
  var i,
    row,
    cell,
    k,
    flag = false,
    flag2 = false;
  if (table.rows.length > 0) {
    for (i = 1, row; (row = table.rows[i]); i++) {
      var foodExists = row.cells[0].innerHTML;
      var zoneExists = row.cells[3].innerHTML;

      if (foodInput == foodExists) {
        var caloriesSame = row.cells[1].innerHTML / row.cells[2].innerHTML;
        if (caloriesSame != foodcalInput && flag3 == false) {
          if (
            confirm(
              "Your " +
                foodInput +
                " has " +
                caloriesSame +
                " calories so far. Press OK if you want to keep theese new calories. "
            )
          ) {
            flag2 = false;
            if (confirm("Don't show again. Ignore it the next time ")) {
              flag3 = true;
            }
          } else {
            flag2 = true;
          }
        }
        resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(
          1
        )}`;
      }
      if (
        foodInput == foodExists &&
        timezoneInput == zoneExists &&
        flag2 == false
      ) {
        flag = true;
        table.rows[i].cells[1].innerHTML =
          parseInt(table.rows[i].cells[1].innerHTML) +
          foodcalInput * foodquantityInput;
        table.rows[i].cells[2].innerHTML =
          parseInt(table.rows[i].cells[2].innerHTML) + foodquantityInput;
      }
    }
  }

  if (flag == false && flag2 == false) {
    row = table.insertRow();
    for (k of tableHelp) {
      cell = row.insertCell();
      cell.innerHTML = k;
      if (cell.innerText == "x") {
        cell.addEventListener("click", function () {
          deleteRow(this);
        });
      }
    }
    resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(
      1
    )}`;
    sortTable();
  }

  if (table.rows.length > 3) {
    daily.style.marginTop = "43em";
    if (table.rows.length > 9) {
      daily.style.marginTop = "48em";
      if (table.rows.length > 13) {
        daily.style.marginTop = "58em";
        if (table.rows.length > 21) {
          daily.style.marginTop = "68em";
          if (table.rows.length > 29) {
            daily.style.marginTop = "78em";
            if (table.rows.length > 37) {
              daily.style.marginTop = "93em";
            }
          }
        }
      }
    }
  }
}

function deleteRow(r) {
  var i = r.parentNode.rowIndex;
  showhelpvariable = showhelpvariable - table.rows[i].cells[1].innerHTML;
  resultp.textContent = `Your Calories for today are: ${showhelpvariable.toFixed(
    1
  )}`;
  table.deleteRow(i);
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  first = 0;
  second = 0;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      if (x.innerHTML == "Breakfast") {
        x = 1;
      }
      if (y.innerHTML == "Breakfast") {
        y = 1;
      }
      if (x.innerHTML == "Mid Morning Snack") {
        x = 2;
      }
      if (y.innerHTML == "Mid Morning Snack") {
        y = 2;
      }
      if (x.innerHTML == "Lunch") {
        x = 3;
      }
      if (y.innerHTML == "Lunch") {
        y = 3;
      }
      if (x.innerHTML == "Afternoon Snack") {
        x = 4;
      }
      if (y.innerHTML == "Afternoon Snack") {
        y = 4;
      }
      if (x.innerHTML == "Dinner") {
        x = 5;
      }
      if (y.innerHTML == "Dinner") {
        y = 5;
      }
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function dualFunction() {
  calCalc();
  putValuesInTable();
}

//Submit Button Pressed
document.getElementById("calbtn").addEventListener("click", dualFunction);
