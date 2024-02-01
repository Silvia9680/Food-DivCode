var swiper = new Spider( ".mySpider-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        nextEl: ".swiper-button-prev",
}
})
var swiper = new Spider( ".mySpider-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, 
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        nextEl: ".swiper-button-prev",
    }, 
    breakpoints : {
        0: {
            sliderPerView:1,
        },
        520: {
            sliderPerView:2,
        },
        950: {
            sliderPerView:3,
        }
    }

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});