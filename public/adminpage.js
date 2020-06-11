

const onLoad = ()=>{

    
    fetch('/api/index',{
        method : 'GET',
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then(response => response.json())
    .then(response =>{
       
        if(response){
            let i=0;
            response.response.forEach(element => {
                
                const newRow = document.createElement('div')
                newRow.classList.add('row')

                const colID = document.createElement('div')
                const colName =document.createElement('div')
                const colEmail = document.createElement('div')
                const colPass = document.createElement('div')
                const colEdit = document.createElement('div') 

                const editButton = document.createElement('button')
                editButton.title = 'Edit'
                const destroyButton = document.createElement('button')
                destroyButton.title = 'Delete'
                const saveButton = document.createElement('button')
                saveButton.title = 'Save'

                const inputId = document.createElement('input')
                inputId.setAttribute('readonly',true)
                const inputName = document.createElement('input')
                inputName.setAttribute('readonly',true)
                const inputEmail = document.createElement('input')
                inputEmail.setAttribute('readonly',true)
                const inputPass = document.createElement('input')
                inputPass.setAttribute('readonly',true)
                
                

                colID.classList.add('data-field')
                colName.classList.add('data-field')
                colEmail.classList.add('data-field')
                colEdit.classList.add('edit-field') 
                colPass.classList.add('data-field')
                
                editButton.classList.add('edit-button')
                editButton.classList.add('btn-info')
                editButton.innerHTML = '&#9998;'
                destroyButton.classList.add('btn-danger')
                destroyButton.innerHTML = 'X'
                saveButton.classList.add('btn-success')
                saveButton.innerHTML = '&#10003;'
                colEdit.style.visibility = 'hidden'





                editButton.id = i
                editButton.addEventListener("click", onClickPencil)
                i++
                inputId.id = i
                i++
                inputName.id =i
                i++
                inputEmail.id = i
                i++
                inputPass.id = i
                i++
                colEdit.id = i
                i++
                saveButton.id = i
                i++
                destroyButton.id = i
                i++

               

                inputId.setRangeText(element._id)
                colID.appendChild(inputId)
                inputName.setRangeText(element.name)
                colName.append(inputName)
                inputEmail.setRangeText(element.email)
                colEmail.append(inputEmail)
                inputPass.setRangeText(element.password)
                colPass.append(inputPass)
               
                
               
                colEdit.appendChild(destroyButton)
                colEdit.appendChild(saveButton)


                newRow.appendChild(colID)
                newRow.appendChild(colName)
                newRow.appendChild(colEmail)
                newRow.appendChild(colPass)
                newRow.appendChild(colEdit)
                newRow.appendChild(editButton)
                
                



                container.appendChild(newRow)
                
            });
        }
        else{
            alert(response.status)
        }
    })
    .catch((error) => {
       console.log(error)
      });
}

function onClickPencil() {
    if(flag){
    let buttonId = parseInt(event.target.id) 
    
    const eventButton = document.getElementById(`${buttonId}`)
    
    const name = document.getElementById(`${buttonId+2}`)
    const email = document.getElementById(`${buttonId+3}`)
    const pass = document.getElementById(`${buttonId+4}`)
    const edit = document.getElementById(`${buttonId+5}`)
    const saveButton = document.getElementById(`${buttonId+6}`)
    const destroyButton = document.getElementById(`${buttonId+7}`)
    
    
    name.removeAttribute('readonly')
    email.removeAttribute('readonly')
    pass.removeAttribute('readonly')
    eventButton.innerHTML = '&#10154'
    eventButton.removeEventListener('click',onClickPencil)
    eventButton.addEventListener('click',onClickArrow)
    saveButton.style.visibility = 'visible'
    destroyButton.style.visibility = 'visible'
    edit.style.visibility = 'visible'
    
    saveButton.addEventListener('click',onSave)
    destroyButton.addEventListener('click',onDestroy)
    thisUsername = name.value
    thisEmail = email.value
    flag = false
    }
    
    

    

}
function onClickArrow(){
    flag = true
    let buttonId = parseInt(event.target.id) 
    const eventButton = document.getElementById(`${buttonId}`)
    const saveButton = document.getElementById(`${buttonId+6}`)
    const destroyButton = document.getElementById(`${buttonId+7}`)
    const edit = document.getElementById(`${buttonId+5}`)
    edit.style.visibility = 'hidden'
    saveButton.style.visibility = 'hidden'
    destroyButton.style.visibility = 'hidden'
    eventButton.removeEventListener('click',onClickArrow)
    eventButton.addEventListener('click',onClickPencil)
    eventButton.innerHTML = '&#9998;'
   
}

function onDestroy(){
    let buttonId = parseInt(event.target.id) 
    const userIDField = document.getElementById(`${buttonId-6}`)
    const userID = userIDField.value

    fetch('/api/destroy',{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body : JSON.stringify({
            userID
        })  
    
    })
    .then(response => response.json())
    .then(response =>{
        if(response.status){
            
            setTimeout(function(){
                window.location.href = '/admin'
              },600)
        }
        else{
            alert(message)
        }
    })
    

}

function onSave(){
    let buttonId = parseInt(event.target.id) 
    const userID = document.getElementById(`${buttonId-5}`).value
    const name =  document.getElementById(`${buttonId-4}`).value
    const email =  document.getElementById(`${buttonId-3}`).value
    const password =  document.getElementById(`${buttonId-2}`).value
    
    fetch('/api/update',{
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body : JSON.stringify({
            userID,name,email,password,thisUsername,thisEmail
        })  


    })
    .then(response => response.json())
    .then(response =>{
        if(response.status){
            
            setTimeout(function(){
                window.location.href = '/admin'
              },600)
        }
        else{
            alert(response.message)
        }
    })
    


}

// 2.Na lysoyme to wtf error ths mongoose 


 
function onSubmit() {
    event.preventDefault()
    const name = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmpassword = document.querySelector('#password').value
    let adminStatus = false
    if(document.getElementById('admin').checked) {
         adminStatus = true
        
      }else if(document.getElementById('notAdmin').checked) {
         adminStatus = false
      }
      else{
          return alert('Select Admin Status!')
      }
      fetch('/api/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name,email,password,confirmpassword,adminStatus
          }
        ),
      })
      .then(response => response.json())
      .then(response => {
        if(response.status){
            
            
            setTimeout(function(){
                window.location.href = 'adminpage.html'
            },1000)
          
        }
        else{
          alert(response.message)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

let flag = true;
const buttonSubmit = document.getElementById('btn-submit')
buttonSubmit.addEventListener('click',onSubmit)
const container = document.getElementById('container')
