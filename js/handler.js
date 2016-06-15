$(document).ready(function() {

  $("section.menu-bar").css("background-color", "rgba(237,237,237," + (0.5 + $(document).scrollTop()) + ")");

  $(document).on("scroll", function(){
    $("section.menu-bar").css("background-color", "rgba(237,237,237," + (0.5 + $(document).scrollTop()) + ")");
  });

  var newsSwiper = new Swiper('.swiper-news',{
        loop: true,
        speed: 1000,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        grabCursor: false,
        direction: 'horizontal'
    });

  var knowledgeSwiper = new Swiper('.swiper-knowledge',{ 
        loop: true,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        grabCursor: false,
        direction: 'horizontal',
        nextButton: '.right',
        prevButton: '.left'
    });

  map = new GMaps({
    div: '#gmap',
    lat: 53.9100393,
    lng: 27.5751724,
    zoom: 17
  });

  map.addMarker({
    lat: 53.91075,
    lng: 27.574886
  });
});


