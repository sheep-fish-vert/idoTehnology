var currentVideoPlaceholder;
/* click play button on video */

    /* added video by not doc ready AHTUNG */

        /* initialized youtube_api */

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        /* /initialized youtube_api */

        /* initialized youtube video */

            var player;

            function onYouTubeIframeAPIReady() {

                player = new YT.Player('player',{
                    height:'410',
                    widht:'730',
                    videoId:playerId,
                    events:{
                        'onStateChange':videoPause
                    }
                });

                player1 = new YT.Player('player0',{
                    height:'410',
                    widht:'730',
                    videoId:playerId,
                    events:{
                        'onStateChange':videoPause
                    }
                });

                player2 = new YT.Player('player1',{
                    height:'410',
                    widht:'730',
                    videoId:playerId,
                    events:{
                        'onStateChange':videoPause
                    }
                });

                player3 = new YT.Player('player2',{
                    height:'410',
                    widht:'730',
                    videoId:playerId,
                    events:{
                        'onStateChange':videoPause
                    }
                });

            };
            

        /* /initialized youtube video */

        /* initialized event pause/play video */

            function videoPause(event){
                if(event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED){
                    currentVideoPlaceholder.removeClass('active');
                }
                if(event.data == YT.PlayerState.PLAYING){
                 currentVideoPlaceholder.addClass('active');
                }
            }

        /* /initialized event pause video */

    /* /added video by not doc ready AHTUNG */

    function clickPlayButton(){

        $(document).on('click', '.video-placeholder', function(){
            console.log('hi');
            $(this).addClass('active');
            currentVideoPlaceholder = $(this).data('current')
            if(currentVideoPlaceholder == 1){
            player1.playVideo();
          }else if(currentVideoPlaceholder == 2){
            player2.playVideo();
          }else if(currentVideoPlaceholder == 3){
            player3.playVideo();
          } else{
            player.playVideo();
          }

        });

    };

/* /click play button on video */

$(document).ready(function(){
	$('.biznes-slider').slick({
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

  clickPlayButton();
});

$(window).load(function(){

});

$(window).resize(function(){

});