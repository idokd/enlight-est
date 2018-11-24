$(document).ready(function(){
  /* Intro
  **************************************************/
  if ($("body").data("title") === "introPage") {
    // Enable carousel swipe left/right
    $('#introCarousel').carousel().swipeCarousel({
      // options here
      sensitivity: 'high'
    });
    // Init Google Map
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
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
    // Clicks Ok Btn
    $('#okBtn').on('click', function() {
      $('.chooseForm').toggle();
    });
    // 
    $('#chooseBtn1').on('click', function() {
      // Goes Page 51
      if ($(this).hasClass('step2')) {
        $('.discountForm').toggle();
        $('#freePanel').addClass('step2');
      }
      // Goes Page 54
      else if ($(this).hasClass('step3')) {
        $('.discountFinal').toggle();
      }
      else {
        console.log('Choose Payment');
      }
    });
    // Go to Payment page when clicks image (Page 50)
    $('#goPaymentBtn').on('click', function() {
      $('.discountFinal').toggle();
      $('.discount-step2').toggle();
      $('#chooseBtn1').removeClass('step3');
      $('#freePanel').removeClass('step3');
      $('#item-1').toggle();
    });
    // Mess Count Change 
    var mesesCnt = $('#mesesCnt')[0].innerText;
    // Clicks up count button
    $('.upBtn').on('click', function() {
      if (mesesCnt < 12 ) {
        // Enable downBtn
        if (mesesCnt == 0) $('.downBtn img').attr('src', 'assets/images/icons/arrow_down_big.png');

        mesesCnt ++;
        if (mesesCnt == 12) {
          $('.upBtn img').attr('src', 'assets/images/icons/arrow_up_big_disabled.png');
        } 
        $('#mesesCnt')[0].innerText = mesesCnt;
      }
    });
    // Clicks down btn
    $('.downBtn').on('click', function() {
      if (mesesCnt > 0) {
        // Enable upBtn
        if (mesesCnt == 12) $('.upBtn img').attr('src', 'assets/images/icons/arrow_up_big.png');

        mesesCnt --;
        if (mesesCnt == 0) $('.downBtn img').attr('src', 'assets/images/icons/arrow_down_big_disabled.png');
        $('#mesesCnt')[0].innerText = mesesCnt;
      }
    });
  }
    /* Next Steps
  **************************************************/
  if ($('body').data('title') == 'nextstepPage') {
    // Next Page Btn
    $('.activePageBtn').on('click', function() {
      var parent =  $($(this).data('parent'));
      var target =  $($(this).data('target'));
      parent.removeClass("active");
      target.addClass("active");
      $(document).scrollTop(0);
    });
  }
  /* Gratitude
  **************************************************/
 if ($('body').data('title') == 'gratitudePage') {
  //  Go to thanks Page
  $('.requestBtn').on('click', function() {
    $('#mainPage').toggle();
    $('#thanksPage').toggle();
  });
 }
});

