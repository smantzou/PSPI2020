document.getElementById('bmi').addEventListener('click', showForm);

var flag = false;
const box = document.getElementById('bmibox');
const resultp = document.createElement('p');
var heightInput = document.getElementById('height');
var weightInput = document.getElementById('weight');

function showForm() {
    
    document.getElementById('bmiform').style.visibility = 'visible';
    document.getElementById('bmitable').style.visibility = 'visible';
    document.getElementById('hideform').style.visibility = 'visible';
    document.getElementById('bmibtn').addEventListener('click', bmiCalc);
    document.getElementById('hideform').addEventListener('click', hideForm);
}

function hideForm() {

    if (flag == true) {box.removeChild(resultp);}     
    
    document.getElementById('bmiform').style.visibility = 'hidden';
    document.getElementById('bmitable').style.visibility = 'hidden';
    document.getElementById('hideform').style.visibility = 'hidden';
    document.getElementById('bmibtn').removeEventListener('click', bmiCalc);
    document.getElementById('hideform').removeEventListener('click', hideForm);
    
    flag = false;
}

function bmiCalc() {
    
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);
    let bmi = weight/(height*height);
    
    if (isNaN(bmi)) {

        resultp.style.margin = '0px';
        resultp.style.color = 'white';
        resultp.style.fontSize = '20px';
        resultp.style.textAlign = 'center';
        resultp.style.backgroundColor = 'rgba(0, 128, 0, 0.904)';
        resultp.textContent = `Please enter valid numbers before calculating`;
        
        box.appendChild(resultp);
        flag = true;
        return;
    }

    resultp.style.margin = '0px';
    resultp.style.color = 'white';
    resultp.style.fontSize = '20px';
    resultp.style.textAlign = 'center';
    resultp.textContent = `Your BMI is: ${bmi.toFixed(1)}%`;
    resultp.style.backgroundColor = 'rgba(0, 128, 0, 0.904)';
    
    box.appendChild(resultp);
    flag = true;
}