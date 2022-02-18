// Бургер меню
const burger = document.querySelector('.burger'),
navigation = document.querySelector('.navigation'),
navigationClose = document.querySelector('.navigation_close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active');
});

// Фоновая музыка
try {
  const mute = document.querySelector('.mute__checkbox'),
  audio = new Audio('assets/audio/waterTower.mp3');

  const checkMute = () => {
    if (mute.checked) {
      audio.play().catch(() => {
        mute.checked = false;
      });
    } else {
      audio.pause();
    }
  };

  checkMute();

  if (mute) {
    setTimeout(checkMute, 2000);
  }

  mute.addEventListener('change', checkMute);
} catch {
  console.log('На этой странице нет музыки');
}

// Слайдер
try {
  const pagination = document.querySelector('.pagination'),
  paginationVideo = document.querySelector('.pagination_video'),
  paginationButton = document.querySelector('.pagination__arrow');

  const thumbsSwiper = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
  });

  thumbsSwiper.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
    paginationVideo.classList.toggle('pagination_active')
  });

  const mainSwiper = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
  });

  thumbsSwiper.controller.control = mainSwiper;
  mainSwiper.controller.control = thumbsSwiper;

  const videos = document.querySelectorAll('video');

  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].pause();
    }
  });

// Пагинация
  paginationButton.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active')
  });

} catch {
  console.log('На этой странице нет слайдера');
}