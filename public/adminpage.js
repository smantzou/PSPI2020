

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
                const destroyButton = document.createElement('button')
                const saveButton = document.createElement('button')
                const inputId = document.createElement('input')
                inputId.setAttribute('readonly',true)
                const inputName = document.createElement('input')
                inputName.setAttribute('readonly',true)
                
                const inputEmail = document.createElement('input')
                inputEmail.setAttribute('readonly',true)
                
                const inputPass = document.createElement('input')
                inputPass.setAttribute('readonly',true)
                
                
                

                colID.classList.add('col-1-sm')
                colName.classList.add('col-2')
                colEmail.classList.add('col-2')
                colEdit.classList.add('col-1')
                colPass.classList.add('col-2')
                editButton.classList.add('col-1')
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
    let buttonId = parseInt(event.target.id) 
    console.log(buttonId+1)
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
    eventButton.style.visibility = 'hidden'
    edit.style.visibility = 'visible'
    
    saveButton.addEventListener('click',onSave)
    destroyButton.addEventListener('click',onDestroy)
    

    

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
            userID,name,email,password
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
          alert(message)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

const buttonSubmit = document.getElementById('btn-submit')
buttonSubmit.addEventListener('click',onSubmit)
const container = document.getElementById('container')
