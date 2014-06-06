$(document).ready(function() {
  $('.tip').tipr();

  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about").show().addClass('animated fadeInUp');
    $('body').css('overflow', 'visible');
    $(this).hide();
    $(".toppadd").hide();
  });

  $('.resumetoggle').click(function() {
    $('.resume').toggle();
  });

  $('.BringEmAll').click(function() {
    $(".fa-twitter").mouseenter();
    $(".fa-envelope").mouseenter();
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  $('.takemetop').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

});