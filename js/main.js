$(document).ready(function() {
  $('.tip').tipr();
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).fadeOut("fast")
    $(".toppadd").slideUp();
  });
  $(document).ready(function() {
    $('.slideshow img:gt(0)').hide();
      setInterval(function(){
        $('.slideshow :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow');},
        3000);
    });
});
