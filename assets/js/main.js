$(document).ready(function() {
  $('.tip').tipr();

  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about").addClass('animated fadeInRightBig').fadeIn();
    $(this).addClass('animated fadeOutLeftBig').fadeOut();
    $(".toppadd").slideUp();
    $('.slideshow img:gt(0)').fadeOut();
    setInterval(function(){
      $('.slideshow :first-child').fadeIn()
      .next('img').fadeOut()
      .end().appendTo('.slideshow');},
      3000);
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
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

});