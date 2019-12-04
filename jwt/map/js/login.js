//handling form data
const loginForm=document.getElementById('login_form')
loginForm.addEventListener('submit',submitLoginData)

function submitLoginData(e){
    e.preventDefault()
    let formData= new FormData(e.target)
    let data={
        username:formData.get('username'),
        password:formData.get('password')
    }
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
        if(data.response==="ok"){
            let id=data.id;
            document.cookie("userid",id)
            window.location("http://localhost/jwt/map/account.html")
        }else{
            alert("login failed")
        }
    }) 
    .catch(err=>{
        //error handling
        alert("something went wrong")
    })
}

