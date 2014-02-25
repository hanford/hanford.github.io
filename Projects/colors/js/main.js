$(document).ready(function(){
  $.cookie.json = true;
  cookie = $.cookie("color");
  fadebtn = $('.fade-in-bttn');

  if (cookie != undefined) {
    $('.favorite-box').toggle();
    var color = Color(cookie);
    treat(cookie);
  };

  $("#bck-grabber").keyup(function(){
    original = $('#bck-grabber').val();
    var background = $("#bck-grabber").val();
    $(".background").css("background-color", background);
    valuecheck();
  });

  $(document).keypress(function(e) {
    if (colorLength === 4 || colorLength === 7) {
      if(e.keyCode == 13) {
        e.preventDefault();
        $('.box').empty();
        $('.remove-cookie').fadeIn();
        fadebtn.fadeIn();
        $('.favorite-box').show();
        $.cookie("color", original);
        treat(original);
      }
    }
  });

  $('.hella-dark').click(function(){
    for (var i = 0; i < 5; i++) {
      darken();
    }
  });

  $('.hella-light').click(function(){
    for (var i = 0; i < 20; i++) {
      lighten();
    }
  });

  $('.remove-cookie').click(function(){
    $.removeCookie('color');
    fadebtn.fadeOut();
    $('.box').removeClass('shadow').slideUp(400).empty();
    $('.favorite').empty();
    $('.favorite-text').toggle();
    $('.remove-cookie').fadeOut(402);
  });

  $(".background").css("background-color", "#123");
  valuecheck();
});

function treat(original) {
  color = Color(original);
  $('.box').fadeIn();
  $('<div class="bg">' + original + '</div>')
  .css("background-color", original)
  .appendTo('.box');
};

function lighten() {
  var lighter = color.lighten(0.2);
  if (lighter.hexString() === "#FFFFFF"){

  } else {
    $('<div class="bg">' + lighter.hexString() + '</div>')
    .css("background-color", lighter.hexString())
    .appendTo('.box');
  }
}

function darken() {
  var darker = color.darken(0.2);
  if (darker.hexString() === "#040404"){

  } else {
    $('<div class="bg">' + darker.hexString() + '</div>')
    .css("background-color", darker.hexString())
    .appendTo('.box');
  }
}


function valuecheck() {
  colorLength = $('#bck-grabber').val().toString().length;
  if (colorLength != 4 && colorLength != 7) {
    $('#bck-grabber').addClass('error');
    $('.title').text("Insert a Color Code below");
  } else {
    $('.title').text("Press Enter to save");
    $('#bck-grabber').removeClass('error');
  }
  if ($('#bck-grabber').val()[0] != "#" ) {
    $('.hexi-text').fadeIn();
  } else {
    $('.hexi-text').fadeOut();
  };
}