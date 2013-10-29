$(document).ready(function() {
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).hide();
    $(".toppadd").hide();
  });
$(document).ready(function() {
  $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.slideshow');},
      4000);
  });
});

