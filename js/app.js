var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.querySelector('.help');
if (isMobile) {
    element.style.display = 'flex';
} else {
    element.style.display = 'none';
}