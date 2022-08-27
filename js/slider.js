new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  touchRation: 5,

  keyboard: {
    enablet: true,
  },

  mousewheel: {
    sensitivity: 5,
  },

  slidesPerView: 5,

  slidesPerGroup: 1,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
