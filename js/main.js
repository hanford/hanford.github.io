$(document).ready(function() {
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).hide();
    $(".toppadd").hide();
  });
});

