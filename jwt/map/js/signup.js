//submit signupdata

const signupForm=document.getElementById('signup_form')

signupForm.addEventListener('submit',submitSignupData)

function submitSignupData(e){
    e.preventDefault()
    let formData=new FormData(signupForm)

    let data={
        username:formData.get('username'),
        email:formData.get('email'),
        firstname:formData.get('firstname'),
        lastname:formData.get('lastname'),
        company:formData.get('company'),
        checked:formData.get('ischecked'),
        password:formData.get('password')
    }
    console.log(data)
    
    fetch('api route',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        //ONSUCCESS HANDLER
    })
    .catch(err=>{
        //error handling
       
    })
}