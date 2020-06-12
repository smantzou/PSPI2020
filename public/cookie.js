function onLoad(){
    if(document.cookie!=""){
        const signInButton = document.getElementById('signin')
        signInButton.style.display = 'none'
        const toEditLi = document.getElementById('toEdit')
        const nameTag = document.createElement('p')

        const cookie = document.cookie
        let fields = cookie.split('=')

        nameTag.innerHTML = fields[1]
        
        toEditLi.appendChild(nameTag)

        
        toEditLi.classList.add('nav-item')
        toEditLi.classList.add('dropdown')
        
        const aTag = document.createElement('a')
        aTag.classList.add('nav-link')
        aTag.classList.add('dropdown-toggle')
        aTag.href = '#'
        aTag.setAttribute('role','button')
        aTag.setAttribute('data-toggle','dropdown')
        aTag.setAttribute('aria-haspopup','true')
        aTag.setAttribute('aria-expanded','false')
        
        const newDiv = document.createElement('div')
        newDiv.classList.add('dropdown-menu')
        newDiv.setAttribute('aria-labelledby','navbarDropdown')
       
        const settingsTag = document.createElement('a')
        settingsTag.classList.add('dropdown-item')
        settingsTag.addEventListener('click',onProfile)
        settingsTag.innerHTML = 'go to profile'
       
        const logoutTag = document.createElement('a')
        logoutTag.classList.add('dropdown-item')
        logoutTag.innerHTML = 'Sign out'
        logoutTag.addEventListener('click',onClick)

        newDiv.appendChild(logoutTag)

        newDiv.appendChild(settingsTag)
        aTag.appendChild(newDiv)
        toEditLi.appendChild(aTag)
       
    }
    else{
       return
    }


}

function onClick(){

    const cookietoEat = document.cookie
    let fields = cookietoEat.split('=')
    document.cookie = `username=${fields[1]}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    setTimeout(function(){
        window.location.href = '/'
      },100)
}
function onProfile(){
    setTimeout(function(){
        window.location.href = '/profile'
      },100)
}