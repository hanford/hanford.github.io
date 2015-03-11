$(document).ready(function() {
  $('.takemetop').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  setTimeout(function() {
    $('.picture-title').css('visibility', 'visible')
    $('.picture-title').addClass('animated fadeInUpBig');
  }, 300)

  setTimeout(function() {
    $('.bttn-deck').css('visibility', 'visible')
    $('.bttn-deck').addClass('animated fadeInUpBig');
  }, 400)

  setTimeout(function() {
    $('.bttn-primary').css('visibility', 'visible')
    $('.bttn-primary').addClass('animated fadeInUpBig');
  }, 500)

  setTimeout(function() {
    $('.bttn-primary').removeClass('animated fadeInUpBig');
  }, 1500)
});