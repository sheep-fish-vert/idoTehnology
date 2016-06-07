


$(document).ready(function(){
	$('.biznes-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true,
  		responsive: [
  			{
  				breakpoint: 1124,
  				settings:{
  					slidesToShow: 2,
  					slidesToScroll: 2
  				}
  			},
  			{
  				breakpoint: 680,
  				settings:{
  					slidesToShow: 1,
  					slidesToScroll: 1
  				}
  			}
  		]
	});
	$('.home-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows: false,
  		dots: true,
  		responsive: [
  			{
  				breakpoint: 1124,
  				settings:{
  					slidesToShow: 2,
  					slidesToScroll: 2
  				}
  			},
  			{
  				breakpoint: 680,
  				settings:{
  					slidesToShow: 1,
  					slidesToScroll: 1
  				}
  			}
  		]
	});
});

$(window).load(function(){

});

$(window).resize(function(){

});