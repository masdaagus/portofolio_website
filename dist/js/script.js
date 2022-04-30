const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');

});

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;
    

    if (window.pageYOffset>fixnav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}