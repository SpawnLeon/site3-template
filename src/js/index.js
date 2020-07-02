'use strict';

// import Vue from 'vue';
// window.Vue = Vue;

import $ from 'jquery';
import jQuery from 'jquery';

import '@fancyapps/fancybox';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  // Vue init
  // const app = new Vue({
  //   //el: '#app',
  // });

  new Swiper('.main-slider__container', {
    loop: true,
  });

});
