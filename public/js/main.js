var swiper = new Swiper(".slider-wrapper", {
    loop:true,
    grabCursor:true,
    spaceBetween:30,

    pagination:{
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });

// Menu Sticky
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
});
// Menu responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("ul");
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}