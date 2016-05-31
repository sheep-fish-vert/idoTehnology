function showHeaderMenu(){
    $('header .navigation li').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).addClass('active');
        $(this).find('>ul').stop().slideDown(500);

    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('header .navigation li').removeClass('active');
        $('header .navigation li ul').stop().slideUp(200);
    });
}


$(document).ready(function(){
    showHeaderMenu();
});

$(window).load(function(){

});

$(window).resize(function(){

});
