

    function googleMap(mapWrap){
        function initialize() {
            var myLatlng = new google.maps.LatLng(cordX,cordY);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                disableDefaultUI: true

                };
            
            var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

            var contentString = '<div class="marker-test">'+googleText+'</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
           var image = 'images/marker.png';

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                icon: image

            });

            /*анимация при клике на маркер*/
            marker.addListener('click', toggleBounce);
            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
            /*/анимация при клике на маркер*/

            /*По клику открываеться инфоблок*/
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

        }
        initialize();
    }


$(document).ready(function(){
    googleMap('map');
});

$(window).load(function(){

});