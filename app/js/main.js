$(function () {
    $('.slider__box').slick({
        dots:true,
        arrows:true,
        fade:true,
        autoplay:true,
        prevArrow: '<button type="button" class="slider__arrow slider__arrowleft"><img src="images/slider-arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrowright"><img src="images/slider-arrow-right.svg" alt="arrow"></button>',
    });
    $(".footer__scroll-btn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });    
})