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
        $('.header-mobile-tell-modal').toggleClass('active');
    });
}


$(document).ready(function(){
    showHeaderMenu();
});

$(window).load(function(){

});

$(window).resize(function(){

});
