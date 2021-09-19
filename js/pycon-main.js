var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){

    // Place background menu so it extends to one side of the page only.
    function positionBackground(){
        var position = $('.nav').offset();
        var height = $('.nav').height();
        var width = $('html').width() - position.left -20;

        $('.nav-bg').height(height).css({
            left: position.left + 20,
            width: width
        });
    }

    positionBackground();


    // Place dark footer

    function positionFooter(){
        var position = $('.cc-credit').offset();
        var width = $('html').width() - position.left - 40;

        $('.dark-bottom-footer').css({
            left: position.left + 40,
            width: width
        });
    }

    positionFooter();


    $(window).resize(function(){
        positionBackground();
        positionFooter();
    });


    // Toggle mobile menu

    $('.toggle-mobile-menu').click(function(e){
        e.preventDefault();
        $('.mobile-nav').slideToggle();
    });


    // Enable Carousels

    $("#speakers").owlCarousel({
        items: 4,
        autoPlay: 3000
    });

    $("#sponsors").owlCarousel({
        items: 5,
        autoPlay: 3000
    });



    // Embed Google Map

    function initialize() {

        var myLatLng = new google.maps.LatLng(-27.476341,153.018298);

        var mapOptions = {
            zoom: 14,
            center: myLatLng
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var infowindow = new google.maps.InfoWindow({
            content: 'Brisbane Convention & Exhibition Centre'
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Brisbane Convention & Exhibition Centre'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

    google.maps.event.addDomListener(window, 'resize', initialize);
    google.maps.event.addDomListener(window, 'load', initialize);

});



}
/*
     FILE ARCHIVED ON 21:53:21 Aug 15, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:02:39 Sep 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 145.58
  exclusion.robots: 0.267
  exclusion.robots.policy: 0.247
  RedisCDXSource: 2.18
  esindex: 0.022
  LoadShardBlock: 118.11 (3)
  PetaboxLoader3.datanode: 110.798 (4)
  CDXLines.iter: 21.498 (3)
  load_resource: 43.323
  PetaboxLoader3.resolve: 38.818
*/