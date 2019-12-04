    'use strict'
/*setting add url button and input*/
const addUrlButton=document.getElementById('addurlbtn')
addUrlButton.style.opacity=0.3
addUrlButton.addEventListener('click',addUrl)

const urlInput=document.getElementById('urlinput')
urlInput.addEventListener('input',verifyUrlInput)

//array to store all the urls
let urls=[]

//popup element
const confirmPasswordPopup=document.getElementById('confirmpswdpopup')
//adding url 

function addUrl(e){
    /*verify input*/
    const inputUrlvalue=urlInput.value;
    if(inputUrlvalue.length>3){
        const addUrlDiv=document.querySelector('.addurls')
        const newUrldiv=document.createElement('div')
        const newSpan=document.createElement('span')
        const newButton=document.createElement('button')
        
        newSpan.innerText=inputUrlvalue
        newButton.innerText='delete'
        newButton.setAttribute('type','button')
        
        newUrldiv.classList.add('newurl')
        newButton.classList.add('deleteurlbtn')
        newSpan.classList.add('url_data')

        newUrldiv.appendChild(newSpan)
        newUrldiv.appendChild(newButton)
        addUrlDiv.appendChild(newUrldiv)
        
        updateCount()
        //save the url into the urlarray
        urls.push(inputUrlvalue)
        
        addUrlButton.disabled=true;
        addUrlButton.style.opacity=0.3
        urlInput.value=''
        addEventToDeleteButton(newButton,newUrldiv)
    }
}

//update url counter



function updateCount(){
    let urls=document.querySelectorAll('.newurl')
    let noOfUrl=urls.length;
    document.querySelector('#urlcountvalue').innerText=noOfUrl
}

//verify the user entered url



function verifyUrlInput(e){
    let urlTestCondition=new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)   
    if(e.target.value.length>3 && urlTestCondition.test(e.target.value)){
        addUrlButton.disabled=false;
        addUrlButton.style.opacity=1
        return
    }
        addUrlButton.disabled=true;
        addUrlButton.style.opacity=0.3

    
}

function addEventToDeleteButton(button,parentDiv){
 
   button.addEventListener('click',()=>{
       deleteUrl(parentDiv)
   })
   
}

function deleteUrl(parentDiv){
    document.querySelector('.addurls').removeChild(parentDiv)

    //deleting the url from urls array
    let deletedUrl=parentDiv.children[0].innerText;
    let indexOfDeletedUrl=urls.indexOf(deletedUrl)
    urls.splice(indexOfDeletedUrl,1)
    
    //updating the urlcount
    updateCount()
}

//cancelling popup

const popupCancelBtn=document.querySelector('#popupcancelbtn')
popupCancelBtn.addEventListener('click',(e)=>{
    confirmPasswordPopup.style.display="none"
})

//handling token data

const tokenForm=document.getElementById('token_form')
tokenForm.addEventListener('submit',handleTokenData)

function handleTokenData(e){
    e.preventDefault();
    let formData=new FormData(tokenForm)
    let data={
        tokenname:formData.get('tokenname'),
        urls:urls
    }
    confirmPasswordPopup.style.display='flex'
    const confirmPasswordForm=document.getElementById('confirmpasswod_form')
    const confirmPasswordButton=document.getElementById('confirmpasswordbtn')

    confirmPasswordForm.addEventListener('submit',(e)=>{
        handleConfirmPassword(e,data)
    })
    
}

function handleConfirmPassword(e,data){
   
        e.preventDefault()
        let password=new FormData(e.target).get('confirmedpassword')
        data.password=password;
        data.username='username'  //localStorage.get('username')
        sendTokenData(data) 
        
}
function sendTokenData(data){
    console.log(data)
    fetch('/jwt/app/gettoken.php',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>{
        return res.text()     
    })
    .then(result=>{
        confirmPasswordPopup.style.display="none"
        let token=result;
        alert(token)
    })
    .catch(err=>{
        //handle err
        alert(err)
    })
}

//hide token popup

let tokenPopupCloseBtn=document.querySelector('#tokenpopupclosebtn')
tokenPopupCloseBtn.addEventListener('click',closeTokenPopup)


function closeTokenPopup(e){
    e.target.parentNode.parentNode.style.display="none"
}