$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  $(window).bind('scroll', function () {
      var windowHeight = $(window).height();   // returns height of browser viewport
      var windowWidth = $(window).width();
      var cueFixed = $('#intro').height();
      if ($(window).scrollTop() > cueFixed) {
          $('#nav').addClass('fixed');
      } 
      else {
          $('#nav').removeClass('fixed');
      } 
  });

});	