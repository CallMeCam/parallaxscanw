$(document).ready(function() {
    var backAudio = $('#mediaplayer');
    var muted = false;
  
    $('.mute').mouseover(function() {
      var video = $(this);
      if (!muted) {
        video.attr("disabled", "");
        backAudio.animate({
          volume: 0
        }, 1000, function() {
          muted = true;
        });
      } else {
        video.attr("disabled", "");
        backAudio.animate({
          volume: 1
        }, 1000, function() {
          muted = false;
        });
      }
    });
  });