const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const confInput = document.querySelector('#confirm-password');

const mainbtnInput = document.querySelector('#btn-submit');
const btn1Input = document.querySelector('#button1');
const btn2Input = document.querySelector('#button2');

const message = document.querySelector('.msg');


btn1Input.addEventListener('click', (e) => {
    e.preventDefault();
    message.style.visibility = "hidden";
    if(document.getElementById("button1").innerText == "Don't have an account?"){
        
        document.querySelector('.formbox').style.padding = "20px";
        emailInput.style.display = "inline";
        confInput.style.display = "inline";
        nameInput.style.visibility = "visible";
        passInput.style.visibility = "visible";
        confInput.style.visibility = "visible";
        document.querySelector('#Heading').innerText = "Create an account";
        mainbtnInput.value = "Sign Up";
        btn1Input.innerText = "Sign In";
        btn2Input.style.display = "none";
        document.querySelector('#text-lost').style.visibility = "hidden";
        document.querySelector('#remember').style.visibility = "hidden";
    }else if(document.getElementById("button1").innerText == "Sign In"){
        document.querySelector('.formbox').style.padding = "65px 0px 20px";
        emailInput.style.display = "none";
        confInput.style.display = "none";
        nameInput.style.visibility = "visible";
        passInput.style.visibility = "visible";
        document.querySelector('#Heading').innerText = "Log in to your account";
        mainbtnInput.value = "Sign In";
        btn1Input.innerText = "Don't have an account?";
        btn2Input.style.display = "inline";
        document.querySelector('#text-lost').style.visibility = "hidden";
        document.querySelector('#remember').style.visibility = "hidden";
    }
});

btn2Input.addEventListener("click",forgot);

function forgot(){
    message.style.visibility = "hidden";
    emailInput.style.display = "inline";
    nameInput.style.visibility = "hidden";
    passInput.style.visibility = "hidden";
    confInput.style.visibility = "hidden";
    btn1Input.innerText = "Sign In";
    btn2Input.style.display = "none";
    mainbtnInput.value = "Send Email";
    document.querySelector('#Heading').innerText = "Regain Password";
    document.querySelector('#text-lost').style.visibility = "visible";
    document.querySelector('#remember').style.visibility = "visible";
}

mainbtnInput.addEventListener("click", onSubmit);
    
function onSubmit(e){
    e.preventDefault();
    if(mainbtnInput.value == "Sign In"){
        if(nameInput.value == '' || passInput.value == '' ){
            if(message.style.visibility == "hidden"){
                message.style.visibility = "visible";
            }
            message.classList.add('error');
            message.innerHTML = 'Please enter all fields';

        }else{
            message.style.visibility = "hidden";
            nameInput.value = '';
            passInput.value = '';
        }
    } 
    if(mainbtnInput.value == "Sign Up"){
        if(nameInput.value == '' || passInput.value == ''  || emailInput.value == '' || confInput.value == ''){
            message.style.visibility = "visible";
            message.classList.add('error');
            message.innerHTML = 'Please enter all fields';

        }else{
            message.style.visibility = "hidden";
            nameInput.value = '';
            passInput.value = '';
            confInput.value = '';
            emailInput.value = '';
        }
    } 
    if(mainbtnInput.value == "Send Email"){
        if(emailInput.value == ''){
            message.style.visibility = "visible";
            message.classList.add('error');
            message.innerHTML = 'Please enter all fields';

        }else{
            message.style.visibility = "hidden";
            emailInput.value = '';
        }
    } 
}