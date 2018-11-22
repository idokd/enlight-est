$(document).ready(function(){
  /* Intro
  **************************************************/
 
  /* Enlight
  **************************************************/
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
  
});
