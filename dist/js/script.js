const mobileMenu = document.querySelector('.mobile-menu');
const btnMobileMenu = document.querySelector('.btn-mobile-menu');
const body = document.querySelector('body');
function mobileMenuAction(){
    btnMobileMenu.addEventListener('click',function (){
        checkBodyOverflow ();
        btnMobileMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
}
function checkBodyOverflow (){
    if(body.style.overflow != "hidden"){
        body.style.overflow = "hidden";
    }else{
        body.style.overflow = "initial";
    }
}

mobileMenuAction();
