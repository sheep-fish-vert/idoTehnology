


$(document).ready(function(){
    
    console.log();

    if ($(window).width() < (768-$.scrollbarWidth()) ){
        
        $('.interest_stat .mobile-sd').slick({
            infinite: true,
            dots: true,
            arrows: false
        });
    }

});

$(window).load(function(){

});

$(window).resize(function(){

    if ( ($(window).width() < (768-$.scrollbarWidth()) ) && !$('.mobile-sd').hasClass('slick-slider') ){
        
        $('.interest_stat .mobile-sd').slick({
            infinite: true,
            dots: true,
            arrows: false
        });
    }
    
});