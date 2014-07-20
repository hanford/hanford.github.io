$(document).ready(function() {
	$(document).scrollTop(0);
  $('.tip').tipr();

  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $('.trans').addClass('animated-padding');
    $(".about").fadeIn('fast');
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

  	setTimeout(function () {
  	$('.picture-title').css('visibility', 'visible')
		$('.picture-title').addClass('animated bounceInUp');
	}, 200)

	setTimeout(function () {
		$('.bttn-deck').css('visibility', 'visible')
		$('.bttn-deck').addClass('animated bounceInUp');
	}, 300)

	setTimeout(function () {
		$('#jbtn').css('visibility', 'visible')
		$('#jbtn').addClass('animated bounceInUp');
	}, 400)

});


// Play with in the future ?

// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   var minscrollLength = 280;
//   var maxscrollLength = 340;
//   if (scroll >= minscrollLength && maxscrollLength >= scroll) {
//     $('a').css('padding', '10px');
//   }   else    {
//     console.log('ew');
//   }
// });