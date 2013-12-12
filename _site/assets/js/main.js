$(document).ready(function() {
  $('.tip').tipr();
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).fadeOut("fast")
    $(".toppadd").slideUp();
  });

  $(document).ready(function() {
    $('.slideshow img:gt(0)').fadeOut();
      setInterval(function(){
        $('.slideshow :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow');},
        3000);
    });

  $('#contact').click(function() {
    $('#contactInfo').slideDown(function() {
      $('#contact').slideUp('fast');
    });
  });


  $('.resumetoggle').click(function() {
    $('.resume').toggle();
  });

  $('.BringEmAll').click(function() {
    $(".tlink").mouseenter();
    $(".flink").mouseenter();
    $(".elink").mouseenter();
  });
});