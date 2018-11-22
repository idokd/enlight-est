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
    // Enable carousel swipe left/right
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
  /* Characteristic
  **************************************************/
  // Change contents when clicks 20%
  if ($("body").data("title") === "characteristicPage") {
    $('#consume20').on('click', function() {
      $('.current-consumption div')[0].innerHTML = "6,365 kWh";
      $('.current-consumption p')[0].innerHTML = "Tu consumo anual actual + 20%";
      $('#consume-6').css('opacity', '1');
      $('#consume-5').css('opacity', '1');
    });
  // Change contents when clicks 10%
    $('#consume10').on('click', function() {
      $('.current-consumption div')[0].innerHTML = "5,304 kWh";
      $('.current-consumption p')[0].innerHTML = "Tu consumo anual actual";
      $('#consume-6').css('opacity', '0');
      $('#consume-5').css('opacity', '0');
    });
  }
  // Toggle Plug Page
  $('#plugBtn').on('click', function() {
    $('#firstPage').toggle();
    $('#plugPage').toggle();
  });
  $('#plugPage #cancelBtn').on('click', function() {
    $('#firstPage').toggle();
    $('#plugPage').toggle();
  });
  /* Payment
  **************************************************/
 if ($("body").data("title") == "paymentPage") {
    // Enable carousel swipe left/right
    $('#paymentCarousel').carousel().swipeCarousel({
      // options here
      sensitivity: 'high'
    });
    // Show dialog in Part2 when clicks chooseBtn
    $('#chooseBtn2').on('click', function() {
      $('.chooseForm').toggle();
    });
    // Show dialog in Part 1 when clicks logoBtn in footer 54 page
    $('#logoBtn').on('click', function() {
      $('.discountForm').toggle();
    });
    // Show 42 page
    $('#freePanel').on('click', function() {
      if ($(this).hasClass('step2')) {
        $('.discountForm').toggle();
        $('.discount-step1').toggle();
        $('.discount-step2').toggle();
        $(this).removeClass('step2');
        $('#chooseBtn1').removeClass('step2');
        $('#chooseBtn1').addClass('step3');
      }
      else {
        $('.discountForm').toggle();
        $('#item-1').toggle();
        $('.discount-step1').toggle();
        $('#chooseBtn1').addClass('step2');
      }
    });
    // 
    $('#chooseBtn1').on('click', function() {
      if ($(this).hasClass('step2')) {
        $('.discountForm').toggle();
        $('#freePanel').addClass('step2');
      }
      else if ($(this).hasClass('step3')) {
        $('.discountFinal').toggle();
      }
      else {
        console.log('Choose Payment');
      }
    });
    $('#goPaymentBtn').on('click', function() {
      $('.discountFinal').toggle();
      $('.discount-step2').toggle();
      $('#chooseBtn1').removeClass('step3');
      $('#freePanel').removeClass('step3');
      $('#item-1').toggle();
    })
  }
});
