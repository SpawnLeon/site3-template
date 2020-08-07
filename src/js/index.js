'use strict';

// import Vue from 'vue';
// window.Vue = Vue;

const jquery = require('jquery');
const $ = require('jquery');
const jQuery = require('jquery');
window.jQuery = $;
const fancybox = require('@fancyapps/fancybox');

import Swiper from 'swiper';


window.toCustomUrl = (url = window.location.search, addParams = {}, removeParams = []) => {
    const searchParams = new URLSearchParams(url);
    for (const p in addParams) {

      searchParams.set(p, addParams[p]);
    }
    for (const p of removeParams) {
      searchParams.delete(p);
    }
    const searchString = searchParams.toString();
    window.location.search = searchString;
  }

document.addEventListener('DOMContentLoaded', () => {
  // Vue init
  // const app = new Vue({
  //   //el: '#app',
  // });

  // new Swiper('.main-slider__container', {
  //   loop: true,
  // });

  Array.from(document.querySelectorAll('.item-form__field--text')).forEach((el, i) => {
    el.addEventListener('focus', function(event) {
      this.nextElementSibling.classList.add('item-form__name--focus');
    });
    el.addEventListener('blur', function(event) {
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
    document.addEventListener('click', function(event) {
      if (event.target !== input) {
        dropdown.classList.add('dropdown-form--hidden');
      }
    });
    input.addEventListener('focus', function(event) {
      dropdown.classList.remove('dropdown-form--hidden');
    });
    dropdown.querySelectorAll('.dropdown-form__item').forEach((el, i) => {
      el.addEventListener('mousedown', function(event) {
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
      });

      const target = this.dataset.tabTarget;
      const targetTab = document.querySelector(`[data-tab="${target}"]`);
      if (targetTab) {
        targetTab.hidden = false;
      }
    });
  });

  //detail order
  document.querySelectorAll('.personal-orders__item').forEach((el, i) => {

    el.addEventListener('click', function(event) {
      event.preventDefault();

      $.fancybox.open({
        src: '#personal-orders-order-detail',
        type: 'inline',
      });
    });
  });


  //write-us form
  document.querySelectorAll('.write-us-btn, .info-product__call-manager').forEach((el, i) => {

    el.addEventListener('click', function(event) {
      event.preventDefault();

      $.fancybox.open({
        src: '#modal-form',
        type: 'inline',
      });
    });
  });

  //warranty-block
  document.querySelectorAll('.icon-slide--warranty, .info-product__guarantee').forEach((el, i) => {

    el.addEventListener('click', function(event) {
      event.preventDefault();

      $.fancybox.open({
        src: '#warranty-block',
        type: 'inline',
      });
    });
  });

  // product slider
  const galleryThumbs = new Swiper('.images-product-thumbs__container', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    slidesPerColumnFill: 'column',
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


  if (typeof ymaps !== 'undefined') {
    //delivery map
    ymaps.ready(function() {
      const myMap = new ymaps.Map('delivery-page__map', {
          center: [55.0640345696626, 60.10216149999999],
          zoom: 17,
        }, {
          searchControlProvider: 'yandex#search',
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #fff; font-weight: bold;">$[properties.iconContent]</div>',
        ),
        myPlacemarkWithContent = new ymaps.Placemark([55.0640345696626, 60.10216149999999], {}, {

          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/svg/map.svg',
          iconImageSize: [60, 68],
          iconImageOffset: [-30, -66],
          iconContentLayout: MyIconContentLayout,
        });
      myMap.geoObjects
        .add(myPlacemarkWithContent);
    });

    //about map
    ymaps.ready(function() {
      const myMap = new ymaps.Map('about-map', {
          center: [55.0640345696626, 60.10216149999999],
          zoom: 17,
        }, {
          searchControlProvider: 'yandex#search',
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #fff; font-weight: bold;">$[properties.iconContent]</div>',
        ),
        myPlacemarkWithContent = new ymaps.Placemark([55.0640345696626, 60.10216149999999], {}, {

          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/svg/map.svg',
          iconImageSize: [60, 68],
          iconImageOffset: [-30, -66],
          iconContentLayout: MyIconContentLayout,
        });
      myMap.geoObjects
        .add(myPlacemarkWithContent);
    });
  }


  //product-list-filters-btn
  document.querySelectorAll('.product-list-filters-btn').forEach((el, i) => {

    el.addEventListener('click', function(event) {
      event.preventDefault();
      el.classList.toggle('product-list-filters-btn--open');


      const productListFilters = document.querySelector('.form-list-filters');
      if (productListFilters) {
        productListFilters.classList.toggle('form-list-filters--open');
      }

    });
  });

});




