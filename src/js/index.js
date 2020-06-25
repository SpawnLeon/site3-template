'use strict';

//import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css';


// import Vue from 'vue';
// window.Vue = Vue;

import 'jquery';
//import '@fancyapps/fancybox';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  // Vue init
  // const app = new Vue({
  //   //el: '#app',
  // });

  new Swiper('.main-slider__container', {
    loop: true,
    pagination: {
      el: '.main-slider__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const galleryThumbs = new Swiper('.images-product-thumbs__container', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });
  const galleryTop = new Swiper('.images-product__container', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
});
