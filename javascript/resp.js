burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
nav-list = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-class-resp');
    
})