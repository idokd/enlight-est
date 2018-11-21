$(document).ready(function(){
  /* Intro
  **************************************************/
  // Init Carousel
  // $("#intro .owl-carousel").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   animateOut: 'fadeOut',
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //       0: { items: 1 }
  //   }
  // });
  /* Enlight
  **************************************************/
  // Show garranty popup window
  $('.garranty-item').on('click', function() {
    $('#enlight').css('display', 'none');
    $('#popups .garranty-popup').css('display', 'block');
  });
});
