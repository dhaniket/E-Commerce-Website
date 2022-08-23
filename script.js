let searchform = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    cartform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let cartform = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cartform.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    cartform.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartform.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    cartform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:false,
    spaceBetween: 10, 
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:false,
    spaceBetween: 10, 
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });