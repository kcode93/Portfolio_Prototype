//set Initial State of Menu
let showMenu = false;

//selections
const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

//event listeners
btnMenu.addEventListener('click', toggleMenu);

//functions
function toggleMenu(){
    if(!showMenu){
        btnMenu.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuNav.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        //reset menu state
        showMenu = true;
    }else{
        btnMenu.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
         //reset menu state
        showMenu = false;
    }
}