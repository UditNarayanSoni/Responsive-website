burger = document.querySelector('.burger');
navBar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
  rightNav.classList.toggle('visibility-class-resp');
  navList.classList.toggle('visibility-class-resp');
  navBar.classList.toggle('height-nav-resp');
})