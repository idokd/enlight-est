$(document).ready(function(){
  // common
   // Show referred popup window
   $('.showPopup').on('click', function() {
    $($(this).data('root')).fadeOut();
    $($(this).data('target')).fadeIn();
  });
  // Hide referred popup window
  $('.hidePopup').on('click', function() {
    $($(this).data('root')).fadeOut();
    $($(this).data('target')).fadeIn();
  });
   // Show referred popup window
   $('.showPopupDelayBtn').on('click', function() {
    $($(this).data('root')).fadeOut();
    $($(this).data('target')).delay(1000).fadeIn();
  });
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
    // Toggle Plug Page
    $('#plugBtn').on('click', function() {
      $('#firstPage').fadeOut();
      $('#plugPage').fadeIn();
    });
    $('#plugPage #cancelBtn').on('click', function() {
      $('#firstPage').fadeIn();
      $('#plugPage').fadeOut();
    });
  }
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
  /* Situation
  **************************************************/
 if ($('body').data('title') == 'dashboardPage') {
    //  Hide CFE document
   $('.hidePopupBtn').on('click', function() {
     $($(this).data('target')).hide();
    });
    $('.showPopupBtn').on('click', function() {
    $($(this).data('target')).show();
   });
   // Enable carousel swipe left/right
   $('#anualCarousel').carousel().swipeCarousel({
      sensitivity: 'high'
    });
    $('#settingCarousel').carousel().swipeCarousel({
      sensitivity: 'high'
    });
 }
   /* Solution
  **************************************************/
 if ($('body').data('title') == 'solutionPage') {
    // Enable carousel swipe left/right
    $('#anualCarousel').carousel().swipeCarousel({
      sensitivity: 'high'
    });
    $('#settingCarousel').carousel().swipeCarousel({
      sensitivity: 'high'
    });
    // Show referred popup window
    $('.showPopupDelayBtn').on('click', function() {
      $($(this).data('root')).fadeOut();
      $($(this).data('target')).delay(1000).fadeIn();
    });
    //  show popup and hide
    $('.hidePopupBtn').on('click', function() {
      $($(this).data('target')).fadeOut();
    });
    $('.showPopupBtn').on('click', function() {
      $($(this).data('target')).fadeIn();
    });
  }
});

window.addEventListener("load", function() {
  /* Situation
  **************************************************/
  if ($('body').data('title') == 'dashboardPage') {
    var svgObject = document.getElementById('svg-object').contentDocument;
    var bimestral = svgObject.getElementById("bimestral");
    var bimestral_active = svgObject.getElementById("bimestral_active");
    var anual = svgObject.getElementById("anual");
    var anual_active = svgObject.getElementById("anual_active");
    var anos10 = svgObject.getElementById("anos10");
    var anos10_active = svgObject.getElementById("anos10_active");
    var anos25 = svgObject.getElementById("anos25");
    var anos25_active = svgObject.getElementById("anos25_active");
    var cursor_anos25 = svgObject.getElementById("cursor_anos25");
    var cursor_anos10 = svgObject.getElementById("cursor_anos10");
    var cursor_anual = svgObject.getElementById("cursor_anual");
    var cursor_bimestral = svgObject.getElementById("cursor_bimestral");
    // Active bimestral when init
    init();
    function init() {
      $(bimestral).hide();
      $(anual_active).hide();
      $(anos10_active).hide();
      $(anos25_active).hide();
      $(cursor_anos25).hide();
      $(cursor_anos10).hide();
      $(cursor_anual).hide();
    }
    // Show all svg elements
    function showAll() {
      $(bimestral).show();
      $(bimestral_active).show();
      $(anual).show();
      $(anual_active).show();
      $(anos10).show();
      $(anos10_active).show();
      $(anos25).show();
      $(anos25_active).show();
      $(cursor_anos25).show();
      $(cursor_anos10).show();
      $(cursor_anual).show();
      $(cursor_bimestral).show();
    }
    var environmental = $('#settingCarousel #environmental .bigContent');
    var spending = $('#settingCarousel #spending .bigContent');
    var consumption = $('#settingCarousel #consumption .bigContent');
    // clicks bimestral
    bimestral.addEventListener('click', function() {
      showAll();
      init();
      // Init Carousel data
      spending[0].innerText = "$4,862";
      consumption[0].innerHTML = "<div class='bigContent font-40 font-regular text'>884<label class='font-20 text'>kWh</div>";
      environmental[0].innerText = "Equivale a talar 9 árboles";
      // Show Contents
      $('.bimonthly').fadeIn();
      $('.anual').css('display', 'none');
      $('.anos10').css('display', 'none');
      $('.anos25').css('display', 'none');
    });

    // clicks anual
    anual.addEventListener('click', function() {
      showAll();
      $(bimestral_active).hide();
      $(anual).hide();
      $(anos10_active).hide();
      $(anos25_active).hide();
      $(cursor_anos25).hide();
      $(cursor_anos10).hide();
      $(cursor_bimestral).hide();
      // Init Carousel data
      spending[0].innerText = "$29,172";
      consumption[0].innerHTML = "<div class='bigContent font-40 font-regular text'>5,304<label class='font-20 text'>kWh</div>";
      environmental[0].innerText = "Equivale a talar 54 árboles";
      // Show contents
      $('.anual').fadeIn();
      $('.bimonthly').css('display', 'none');
      $('.anos10').css('display', 'none');
      $('.anos25').css('display', 'none');
    });
    // clicks anos10
    anos10.addEventListener('click', function() {
      showAll();
      $(bimestral_active).hide();
      $(anual_active).hide();
      $(anos10).hide();
      $(anos25_active).hide();
      $(cursor_anos25).hide();
      $(cursor_anual).hide();
      $(cursor_bimestral).hide();
      // Init carousel data
      spending[0].innerText = "$291,720";
      consumption[0].innerHTML = "<div class='bigContent font-40 font-regular text'>53,040<label class='font-20 text'>kWh</div>";
      environmental[0].innerText = "Equivale a quemar 812 barriles de petróleo";
      $('.anual').css('display', 'none');
      $('.bimonthly').css('display', 'none');
      $('.anos10').fadeIn();
      $('.anos25').css('display', 'none');
    });
    // clicks annos25
    anos25.addEventListener('click', function() {
      showAll();
      $(bimestral_active).hide();
      $(anual_active).hide();
      $(anos10_active).hide();
      $(anos25).hide();
      $(cursor_anos10).hide();
      $(cursor_anual).hide();
      $(cursor_bimestral).hide();
      // Init carousel data
      spending[0].innerText = "$729,300";
      consumption[0].innerHTML = "<div class='bigContent font-40 font-regular text'>132,600<label class='font-20 text'>kWh</div>";
      environmental[0].innerText = "Emitirás 1,622 toneladas de CO2";
      $('.anual').css('display', 'none');
      $('.bimonthly').css('display', 'none');
      $('.anos10').css('display', 'none');
      $('.anos25').fadeIn();
    });
  }
   /* Solution
  **************************************************/
 if ($('body').data('title') == 'solutionPage') {
  var svgObject = document.getElementById('svg-object').contentDocument;
  var bimestral = svgObject.getElementById("bimestral");
  var bimestral_active = svgObject.getElementById("bimestral_active");
  var anual = svgObject.getElementById("anual");
  var anual_active = svgObject.getElementById("anual_active");
  var anos10 = svgObject.getElementById("anos10");
  var anos10_active = svgObject.getElementById("anos10_active");
  var anos25 = svgObject.getElementById("anos25");
  var anos25_active = svgObject.getElementById("anos25_active");
  var cursor_anos25 = svgObject.getElementById("cursor_anos25");
  var cursor_anos10 = svgObject.getElementById("cursor_anos10");
  var cursor_anual = svgObject.getElementById("cursor_anual");
  var cursor_bimestral = svgObject.getElementById("cursor_bimestral");
  // Active bimestral when init
  init();
  function init() {
    $(bimestral).hide();
    $(anual_active).hide();
    $(anos10_active).hide();
    $(anos25_active).hide();
    $(cursor_anos25).hide();
    $(cursor_anos10).hide();
    $(cursor_anual).hide();
  }
  // Show all svg elements
  function showAll() {
    $(bimestral).show();
    $(bimestral_active).show();
    $(anual).show();
    $(anual_active).show();
    $(anos10).show();
    $(anos10_active).show();
    $(anos25).show();
    $(anos25_active).show();
    $(cursor_anos25).show();
    $(cursor_anos10).show();
    $(cursor_anual).show();
    $(cursor_bimestral).show();
  }
  var environmental = $('#settingCarousel #environmental .bigContent');
  var spending = $('#settingCarousel #spending .bigContent');
  var consumption = $('#settingCarousel #consumption .bigContent');
  // clicks bimestral
  bimestral.addEventListener('click', function() {
    showAll();
    init();
    // Init Carousel data
    spending[0].innerText = "$340";
    consumption[0].innerHTML = "<div class='bigContent font-30 font-regular text'>574<label class='font-20 text'>kWh</div>";
    environmental[0].innerText = "Equivalente a sembrar 9 árboles";
    // Show Contents
    $('.bimonthly').fadeIn();
    $('.anual').css('display', 'none');
    $('.anos10').css('display', 'none');
    $('.anos25').css('display', 'none');
  });
  // clicks anual
  anual.addEventListener('click', function() {
    showAll();
    $(bimestral_active).hide();
    $(anual).hide();
    $(anos10_active).hide();
    $(anos25_active).hide();
    $(cursor_anos25).hide();
    $(cursor_anos10).hide();
    $(cursor_bimestral).hide();
    // Init Carousel data
    spending[0].innerText = "$2,040";
    consumption[0].innerHTML = "<div class='bigContent font-30 font-regular text'>5,704<label class='font-20 text'>kWh</div>";
    environmental[0].innerText = "Equivalente a sembrar 54 árboles";
    // Show contents
    $('.anual').fadeIn();
    $('.bimonthly').css('display', 'none');
    $('.anos10').css('display', 'none');
    $('.anos25').css('display', 'none');
  });
  // clicks anos10
  anos10.addEventListener('click', function() {
    showAll();
    $(bimestral_active).hide();
    $(anual_active).hide();
    $(anos10).hide();
    $(anos25_active).hide();
    $(cursor_anos25).hide();
    $(cursor_anual).hide();
    $(cursor_bimestral).hide();
    // Init carousel data
    spending[0].innerText = "$20,400";
    consumption[0].innerHTML = "<div class='bigContent font-30 font-regular text'>57,040<label class='font-20 text'>kWh</div>";
    environmental[0].innerText = "Evitarás la quema de 3,400 toneladas de carbón";
    $('.anual').css('display', 'none');
    $('.bimonthly').css('display', 'none');
    $('.anos10').fadeIn();
    $('.anos25').css('display', 'none');
  });
  // clicks annos25
  anos25.addEventListener('click', function() {
    showAll();
    $(bimestral_active).hide();
    $(anual_active).hide();
    $(anos10_active).hide();
    $(anos25).hide();
    $(cursor_anos10).hide();
    $(cursor_anual).hide();
    $(cursor_bimestral).hide();
    // Init carousel data
    spending[0].innerText = "$51,000";
    consumption[0].innerHTML = "<div class='bigContent font-30 font-regular text'>142,600<label class='font-20 text'>kWh</div>";
    environmental[0].innerText = "Evitarás la emisión de 1,622 toneladas de carbón";
    $('.anual').css('display', 'none');
    $('.bimonthly').css('display', 'none');
    $('.anos10').css('display', 'none');
    $('.anos25').fadeIn();
  });
  // Increase panel number when clicks plusBtn on footer
  $('#plusBtn').on('click', plus);
  $('#plusBtn1').on('click', plus);
  function plus() {
    var Cnt = $('#cardsCnt')[0].innerText;
    if (Cnt < 12) {
      Cnt++;
      $('#cardsCnt')[0].innerText = Cnt;
    }
    changeAllData(Cnt);
  }
  // Decrease panel number when clicks plusBtn on footer
  $('#minusBtn').on('click', minus);
  $('#minusBtn1').on('click', minus);
  function minus() {
    var Cnt = $('#cardsCnt')[0].innerText;
    if (Cnt > 7) {
      Cnt--;
      $('#cardsCnt')[0].innerText = Cnt;
    }
    changeAllData(Cnt);
  }
  // click smallDocument
  $('#monthlySBtn').on('click', function() {
    console.log(123);
  });
  var smallDocument = document.getElementById('smallDocument').contentDocument;
  var s_main_energy = smallDocument.getElementById("main_energy");
  var s_discount_energy = smallDocument.getElementById("discount_energy");
  var s_box_label = smallDocument.getElementById("box_label");
  var s_box_content = smallDocument.getElementById("box_content");
  var s_main_price = smallDocument.getElementById("main_price");
  var s_Rect = smallDocument.getElementById("smallRect");
  var mediumDocument = document.getElementById('mediumDocument').contentDocument;
  var m_main_energy = mediumDocument.getElementById("main_energy");
  var m_discount_energy = mediumDocument.getElementById("discount_energy");
  var m_box_label = mediumDocument.getElementById("box_label");
  var m_box_content = mediumDocument.getElementById("box_content");
  var m_main_price = mediumDocument.getElementById("main_price");
  var m_Rect = mediumDocument.getElementById("mediumRect");
  var bigDocument = document.getElementById('bigDocument').contentDocument;
  var b_main_energy = bigDocument.getElementById("main_energy");
  var b_discount_energy = bigDocument.getElementById("discount_energy");
  var b_box_label = bigDocument.getElementById("box_label");
  var b_box_content = bigDocument.getElementById("box_content");
  var b_main_price = bigDocument.getElementById("main_price");
  var b_Rect = bigDocument.getElementById("bigRect");
  var jsonArray = [
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "534 kWh", "m_discount_energy" : "- 224 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "310 kWh", "m_main_price" : "$1,702",
      "b_main_energy" : "534 KWh", "b_discount_energy" : "- 224 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "310 kWh", "b_main_price" : "$341",
      "spending_light" : "$340", "savings" : "Ahorro: 93%", "consumption_covered" : "65%", "price" : "$104,526",
      "power_num" : "2.31", "roof_space_num" : "21", "radio_label" : "Bajar de tarifa de la forma más económica." }, 
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "556 kWh", "m_discount_energy" : "- 326 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "230 kWh", "m_main_price" : "$1,265",
      "b_main_energy" : "556 KWh", "b_discount_energy" : "- 326 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "230 kWh", "b_main_price" : "$194",
      "spending_light" : "$194", "savings" : "Ahorro: 96%", "consumption_covered" : "74%", "price" : "$119,458",
      "power_num" : "2.64", "roof_space_num" : "24", "radio_label" : "(Sin objetivo seleccionado)" }, 
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "556 kWh", "m_discount_energy" : "- 406 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "150 kWh", "m_main_price" : "$827",
      "b_main_energy" : "556 KWh", "b_discount_energy" : "- 406 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "150 kWh", "b_main_price" : "$97",
      "spending_light" : "$97", "savings" : "Ahorro: 98%", "consumption_covered" : "83%", "price" : "$134,390",
      "power_num" : "2.97", "roof_space_num" : "27", "radio_label" : "Bajar de tarifa en 2 bimestres." }, 
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "556 kWh", "m_discount_energy" : "- 485 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "71 kWh", "m_main_price" : "$500",
      "b_main_energy" : "556 KWh", "b_discount_energy" : "- 485 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "71 kWh", "b_main_price" : "$48",
      "spending_light" : "$48", "savings" : "Ahorro: 99%", "consumption_covered" : "92%", "price" : "$149,322",
      "power_num" : "3.30", "roof_space_num" : "30", "radio_label" : "(Sin objetivo seleccionado)" }, 
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "556 kWh", "m_discount_energy" : "- 556 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "0 kWh", "m_main_price" : "$500",
      "b_main_energy" : "556 KWh", "b_discount_energy" : "- 556 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "0 kWh", "b_main_price" : "$46",
      "spending_light" : "$46", "savings" : "Ahorro: 100%", "consumption_covered" : "101%", "price" : "$164,254",
      "power_num" : "3.63", "roof_space_num" : "33", "radio_label" : "Pagar lo mínimo posible a CFE ($46/bimestre)" }, 
    {
      "s_main_energy" : "406 KWh", "s_discount_energy" : " ", "s_box_label" : "Tarifa DAC", "s_box_content" : " ", "s_main_price" : "$4,862",
      "m_main_energy" : "556 kWh", "m_discount_energy" : "- 556 kWh", "m_box_label" : "Tarifa DAC", "m_box_content" : "0 kWh", "m_main_price" : "$46",
      "b_main_energy" : "556 KWh", "b_discount_energy" : "- 556 kWh", "b_box_label" : "Tarifa 01", "b_box_content" : "0 kWh", "b_main_price" : "$46",
      "spending_light" : "$46", "savings" : "Ahorro: 110%", "consumption_covered" : "110%", "price" : "$179,186",
      "power_num" : "3.96", "roof_space_num" : "36", "radio_label" : "Cubrir un porcentaje adicional" }, 
  ];  
  // Reset all data when you change panel number
  function changeAllData(Cnt) {
    if (Cnt == 7) {
      $('#minusBtn').attr('src', 'assets/images/icons/circle_minus_disable.png');
      $('#minusBtn1').attr('src', 'assets/images/icons/circle_minus_disable.png');
    }
    if (Cnt > 7) {
      $('#minusBtn').attr('src', 'assets/images/icons/circle_minus.png');
      $('#minusBtn1').attr('src', 'assets/images/icons/circle_minus.png');
    }
    if (Cnt < 12) {
      $('#plusBtn').attr('src', 'assets/images/icons/circle_plus.png');
      $('#plusBtn1').attr('src', 'assets/images/icons/circle_plus.png');
    }
    if (Cnt == 12) {
      $('#plusBtn').attr('src', 'assets/images/icons/circle_plus_disable.png');
      $('#plusBtn1').attr('src', 'assets/images/icons/circle_plus_disable.png');
    }
    $(s_main_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].s_main_energy;
    $(s_discount_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].s_discount_energy;
    $(s_box_label).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].s_box_label;
    $(s_box_content).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].s_box_content;
    $(s_main_price).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].s_main_price;
    $(m_main_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].m_main_energy;
    $(m_discount_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].m_discount_energy;
    $(m_box_label).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].m_box_label;
    $(m_box_content).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].m_box_content;
    $(m_main_price).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].m_main_price;
    $(b_main_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].b_main_energy;
    $(b_discount_energy).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].b_discount_energy;
    $(b_box_label).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].b_box_label;
    $(b_box_content).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].b_box_content;
    $(b_main_price).find('tspan')[0].innerHTML = jsonArray[Cnt - 7].b_main_price;
    $('#consumption_value')[0].innerHTML = jsonArray[Cnt - 7].consumption_covered;
    $('#price_value')[0].innerHTML = jsonArray[Cnt - 7].price;
    $('#spending .bigContent')[0].innerHTML = jsonArray[Cnt - 7].spending_light;
    $('#spending .savingContent')[0].innerHTML = jsonArray[Cnt - 7].savings;
    $('#panel_number')[0].innerHTML = Cnt;
    $('#opt_number')[0].innerHTML = Cnt;
    $('#power_num')[0].innerHTML = jsonArray[Cnt - 7].power_num;
    $('#roof_space_num')[0].innerHTML = jsonArray[Cnt - 7].roof_space_num;
    $('#consumption_value1')[0].innerHTML = jsonArray[Cnt - 7].consumption_covered;
    $('#price_value1')[0].innerHTML = jsonArray[Cnt - 7].price;
    $('#cardsCnt1')[0].innerHTML = Cnt;
    if (Cnt == 8 || Cnt == 10) {
      $('#objective_radio').removeClass('color-teal');
      $('#objective_radio')[0].innerHTML = '<input type="radio"><span class="checkmark"></span>' + jsonArray[Cnt - 7].radio_label;
    }
    else {
      $('#objective_radio').addClass('color-teal');
      $('#objective_radio')[0].innerHTML = '<input type="radio" checked><span class="checkmark"></span>' + jsonArray[Cnt - 7].radio_label;
    }
  }
  // active radio button
  $('.customRadioBtn').on('click', function() {
    $('.item-content').each(function() {
      $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
    changeAllData($(this).data('select'));
    $('#object_setting').fadeOut();
    $('#solution_setting').fadeIn();
  });
  // Click small document
  $(s_Rect).on('click', function() {
    console.log('small');
    $('#smallDocument').css('height', '30vh');
    $('#mediumDocument').css('height', '20vh');
    $('#bigDocument').css('height', '15vh');
  });
  // Click medium document
  $(m_Rect).on('click', function() {
    console.log('medium');
    $('#smallDocument').css('height', '20vh');
    $('#mediumDocument').css('height', '30vh');
    $('#bigDocument').css('height', '20vh');
  });
  // Click big document
  $(b_Rect).on('click', function() {
    console.log('big');
    $('#smallDocument').css('height', '15vh');
    $('#mediumDocument').css('height', '20vh');
    $('#bigDocument').css('height', '30vh');
  });
  }
});