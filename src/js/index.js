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

  Array.from(document.querySelectorAll('.item-form__field--text')).forEach((el, i) => {
    el.addEventListener('focus', function (event) {
      this.nextElementSibling.classList.add('item-form__name--focus');
    });
    el.addEventListener('blur', function (event) {
      if (!this.value) {
        this.nextElementSibling.classList.remove('item-form__name--focus');
      }
    });
    if (el.value) {
      el.nextElementSibling.classList.add('item-form__name--focus');
    }
  });


  //custom select
  document.querySelectorAll('.item-form--select').forEach((el, i) => {
    const input = el.querySelector('.item-form__field');
    const inputHidden = el.querySelector('.dropdown-form__input');
    const dropdown = el.querySelector('.dropdown-form');
    document.addEventListener('click', function (event) {
      if (event.target !== input) {
        dropdown.classList.add('dropdown-form--hidden');
      }
    });
    input.addEventListener('focus', function (event) {
      dropdown.classList.remove('dropdown-form--hidden');
    });
    dropdown.querySelectorAll('.dropdown-form__item').forEach((el, i) => {
      el.addEventListener('mousedown', function (event) {
        const value = this.dataset.value;
        const title = this.textContent;
        inputHidden.value = value;
        input.value = title;
        input.focus();
      });
    });
  });


  //custom tabs

  document.querySelectorAll('[data-tab-target]').forEach((el, i) => {
    el.addEventListener('change', function(event) {
      event.preventDefault();
      document.querySelectorAll('[data-tab]').forEach((el, i) => {
        el.hidden = true;
      })

      const target = this.dataset.tabTarget;
      const targetTab = document.querySelector(`[data-tab="${target}"]`);
      if (targetTab) {
        targetTab.hidden = false;
      }
    })



  })
});


