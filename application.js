$(document).ready(function(){
  $('#container').hide();
  $(".reveal").on('click',function(){
      $(this).hide();
      $('#container').fadeIn('slow');
      $('body').addClass('background');
  });
});
