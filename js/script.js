const thumbsSwiper = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4,
});

thumbsSwiper.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
});

const mainSwiper = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 4,
});

thumbsSwiper.controller.control = mainSwiper;
mainSwiper.controller.control = thumbsSwiper;


  