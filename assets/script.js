$(document).ready(function(){
  /* Intro
  **************************************************/
  if ($("body").data("title") === "introPage") {
    //  Init Carousel
    $("#intro .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 1 }
      }
    });  
  }
  /* Enlight
  **************************************************/
  if ($("body").data("title") == "enlightPage") {
    $('#enlightCarousel').carousel().swipeCarousel({
      // options here
      sensitivity: 'high'
    });
     // Show referred popup window
    $('.showPopup').on('click', function() {
      $($(this).data('root')).css('display', 'none');
      $($(this).data('target')).css('display', 'block');
    });
    // Hide referred popup window
    $('.hidePopup').on('click', function() {
      $($(this).data('root')).css('display', 'none');
      $($(this).data('target')).css('display', 'block');
    });
  }
});
