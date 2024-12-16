/* 비주얼영역 슬라이드 */
var swiper = new Swiper(".mySlide01", {
  // autoplay:{
  //   delay:1000, //시간설정
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    type : 'bullets',
  },
});
/* sec6 슬라이드 */
var swiper = new Swiper(".mySwiper02", {
  pagination: {
    el: ".swiper-pagination",
  },
});
/* sec7 슬라이드 */
var swiper = new Swiper(".mySwiper03", {
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});