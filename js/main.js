const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  speed: 700,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiperRecomended = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  speed: 700,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const swiperSubscription = new Swiper('.subscription-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  speed: 700,

  // Navigation arrows
  navigation: {
    nextEl: '.subscription-button-next',
    prevEl: '.subscription-button-prev',
  },

});