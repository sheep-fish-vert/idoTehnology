
/* services show-hide left-column nav */

    function showHideServicesLeft(){

        $(document).on('click', function(event){

            if((!$(event.target).is('.column-nav') && !$(event.target).parents('.column-nav').length) || $(event.target).is('li.active.show') || $(event.target).parents('li.active').is('show')){
                $('.column-nav li.active').removeClass('show');
                $('.left-column-main li:not(.active)').stop().slideUp(300);
            }else{
                $('.column-nav li.active').addClass('show');
                $('.left-column-main li:not(.active)').stop().slideDown(300);
            }

        });

        function leftTopAdaptHeight(){

            if($(window).width() < 992){

                var columnActiveHeight = $('.column-nav li.active').outerHeight();
                $('.column-nav').css({'padding-top':columnActiveHeight+'px'});

            }else{

                $('.column-nav, .column-nav li').removeAttr('style');
                $('.column-nav li.active').removeClass('show');

            }

        }

        leftTopAdaptHeight();

        $(window).resize(function(){

            leftTopAdaptHeight();

        });

    }

/* /services show-hide left-column nav */

/* show menu blue-block */

    function headerButterNav(arrow, content){

        if(content.is('.active')){
            content.stop().slideDown(300);
        }else{
            content.stop().slideUp(300);
        }

    };

/* /show menu blue-block */

$(document).ready(function(){

    showHideServicesLeft();

});

$(window).load(function(){

});

$(window).resize(function(){

});