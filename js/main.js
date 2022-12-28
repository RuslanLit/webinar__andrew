function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
}
if (getWindowWidth() >= 1154) {
    console.log(1154);
    const screenImages = document.getElementById("swiper");
    screenImages.classList.add("screen__images");
}

if (getWindowWidth() <= 1153) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
}

