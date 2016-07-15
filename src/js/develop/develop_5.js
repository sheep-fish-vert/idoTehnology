var map;

    function googleMap(mapWrap){
        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX, cordY);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                disableDefaultUI: true
            };
            map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: image
            });

            function CenterControl(controlDiv, map) {
                var controlToFullScreen = document.createElement('div');
                controlToFullScreen.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlToFullScreen.style.cursor = 'pointer';
                controlToFullScreen.style.width = '40px';
                controlToFullScreen.style.height = '40px';
                controlToFullScreen.style.backgroundImage = 'url(images/z_out.jpg)';
                controlToFullScreen.style.backgroundPosition = 'center';
                controlToFullScreen.style.backgroundRepeat = 'no-repeat';



                controlToFullScreen.title = 'Click to fullscreen';
                controlDiv.appendChild(controlToFullScreen);

                var controlFromFullScreen = document.createElement('div');
                controlFromFullScreen.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlFromFullScreen.style.cursor = 'pointer';
                controlFromFullScreen.style.width = '40px';
                controlFromFullScreen.style.height = '40px';
                controlFromFullScreen.style.backgroundImage = 'url(images/z_in.jpg)';
                controlFromFullScreen.style.backgroundPosition = 'center';
                controlFromFullScreen.style.backgroundRepeat = 'no-repeat';


                controlFromFullScreen.style.display = 'none';

                controlFromFullScreen.title = 'Click to fullscreen';

                controlDiv.appendChild(controlFromFullScreen);

                controlToFullScreen.addEventListener('click', function() {
                    $('.main').addClass('fullscreen');
                    map.setOptions({disableDefaultUI:false});
                    google.maps.event.trigger(map, 'resize');
                    controlToFullScreen.style.display = 'none';
                    controlFromFullScreen.style.display = 'block';
                });
                controlFromFullScreen.addEventListener('click', function() {
                    $('.main').removeClass('fullscreen');
                    map.setOptions({disableDefaultUI:true});
                    google.maps.event.trigger(map, 'resize');
                    controlToFullScreen.style.display = 'block';
                    controlFromFullScreen.style.display = 'none';
                });
            }
            var FullAndBackDiv = document.createElement('div');
            var centerControl = new CenterControl(FullAndBackDiv, map);
            FullAndBackDiv.index = 1;
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(FullAndBackDiv);
        }
        initialize();
    }

$(document).ready(function(){
    if($('#map').length>0){googleMap('map');}
});

$(window).load(function(){

});