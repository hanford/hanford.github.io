function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function setFadeTimeout(remove, add, delay, elem) {
	setTimeout(function(){
		$(elem).delay(delay).removeClass(remove).addClass(add);
	}, delay);
}

function runFadeIn(remove, add) {
	var elems = $("."+remove);
	var delay = 0;
	for (var i = 0; i < elems.length; i++) {
		var elem = elems[i];
		if (isScrolledIntoView(elem))
		{
			setFadeTimeout(remove, add, delay, elem)
			delay = delay + 200;
		}
	}
}

$(document).scroll(function(e) {
  
});

// $(document).on("ready", function() {
//   runFadeIn("slide-in-right", "animated fadeInUp");
// });