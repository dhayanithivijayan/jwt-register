/*Account menu toggler*/
let menuIsOpen=false;
let accountIcon=document.querySelector('#accounticon');

let dropDown=document.querySelector('.dropdown')

accountIcon.addEventListener('click',accountMenuToggler)

function accountMenuToggler(){
   if(menuIsOpen===false){
        dropDown.style.display='block'
        menuIsOpen=true
        return
    }
     dropDown.style.display='none'
     menuIsOpen=false
}