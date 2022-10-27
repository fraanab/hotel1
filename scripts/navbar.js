const navbtn = document.querySelector('#nav-btn')
const navbar = document.querySelector('#nav-bar')

// function openNavbar(){

// }


navbtn.addEventListener('click', ()=>{
    if(navbar.style.top === '-999px'){
        navbar.style.top = '0'
    }else{navbar.style.top = '-999px'}
})