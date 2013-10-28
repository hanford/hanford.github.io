$(document).ready(function() {
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).hide();
    $(".toppadd").hide();
    // $(".profilePic").hide();
  });

	function slideSwitch() {
    	var $active = $('#slideshow img.active');

    	if ( $active.length == 0 ) $active = $('#slideshow img:last');

    	var $next =  $active.next().length ? $active.next()
        	: $('#slideshow img:first');

    	$active.addClass('last-active');
        
    	$next.css({opacity: 0.0})
        	.addClass('active')
        	.animate({opacity: 1.0}, 1000, function() {
            	$active.removeClass('active last-active');
        	});
		}

		$(function() {
    		setInterval( "slideSwitch()", 1000 );
	});
});