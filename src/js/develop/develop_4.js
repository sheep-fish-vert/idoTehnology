function showHeaderMenu(){
    $('header .navigation>nav>ul>li').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).addClass('active');
        $(this).find('>ul').stop().slideDown(500);
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('header .navigation>nav>ul>li').removeClass('active');
        $('header .navigation>nav>ul>li>ul').stop().slideUp(200);
    });

    $(document).on('click', '.header-mobile-tell-img', function(event) {
        $(this).toggleClass('active');
        $('.header-mobile-tell-modal').toggleClass('active');
    });
}

function servicesSlider() {
    $('.service-slider-prev-button').click(function(event) {
        $('.service-bottom-reviews-slider').slick('slickPrev');
    });
    $('.service-slider-next-button').click(function(event) {
        $('.service-bottom-reviews-slider').slick('slickNext');
    });
    $('.service-bottom-reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 666,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}


$(document).ready(function(){
    showHeaderMenu();
    servicesSlider();
});

$(window).load(function(){

});

$(window).resize(function(){
    if( $(window).width()>=479 ){
        $('.header-mobile-tell-modal').removeClass('active');
        $('.header-mobile-tell-img').removeClass('active');
    }
});
