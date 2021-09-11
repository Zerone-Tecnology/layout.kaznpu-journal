"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    334: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    712: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
}); // var closeIcon=document.getElementById("header-close");
// var hamburger=document.getElementById("header-burger");
// var menu=document.getElementById("header-menu");
// function displayMenu(){
//     closeIcon.style.display="flex";
//     hamburger.style.display="none";
//     closeIcon.classList.add('mobile')
//     hamburger.classList.add('mobile')
//     menu.classList.add('mobile')
// } 
// function closeMenu(){
//     closeIcon.style.display="none";
//     hamburger.style.display="flex";
//     closeIcon.classList.remove('mobile')
//     hamburger.classList.remove('mobile')
//     menu.classList.remove('mobile')
// }

var mmenu = document.querySelector('.mmenu');

mmenu.onclick = function () {
  document.querySelector('.main-menu').classList.toggle('show');
};

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (width >= 1024) {
  var nav = priorityNav.init({
    mainNavWrapper: ".main-menu",
    breakPoint: 0,
    throttleDelay: '50',
    navDropdownLabel: "&#8250;"
  });
}