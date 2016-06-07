


$(document).ready(function(){
	$('.biznes-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true,
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings:{
  					slidesToShow: 1,
  					slidesToScroll: 1
  				}
  			},
  			{
  				breakpoint: 900,
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
  				breakpoint: 1024,
  				settings:{
  					slidesToShow: 1,
  					slidesToScroll: 1
  				}
  			},
  			{
  				breakpoint: 950,
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