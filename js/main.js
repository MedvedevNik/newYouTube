const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  speed: 700,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiperRecomended = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  speed: 700,
  spaceBetween: 20,
  breakpoints: {
    1300: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const swiperSubscription = new Swiper('.subscription-slider', {
  // Optional parameters
  loop: true,
  speed: 700,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.subscription-button-next',
    prevEl: '.subscription-button-prev',
  },

});

const searchBtn = document.querySelector('.mobile-search'),
      mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open')
});

if(document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiperRecomended.destroy();
  swiperSubscription.destroy();
}

