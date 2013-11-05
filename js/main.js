$(document).ready(function() {
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").toggle().addClass('slideleft');
    $(this).hide();
    $(".toppadd").hide();
  });
$(document).ready(function() {
  $('.tip').tipr();
  $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child').fadeIn()
         .next('img').fadeOut()
         .end().appendTo('.slideshow');},
      3000);
  });
});