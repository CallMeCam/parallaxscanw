$(document).ready(function(){
var backAudio = $('#mediaplayer');
var muted = true;
backAudio[0].volume = 0;

 $('.mute').hover(function(){
     var video = $(this);
     if (muted) {
         video.attr("disabled", "");
         backAudio.animate({volume: 1}, 1000, function () {
             muted = false;
         });
     }
     else {
         video.attr("disabled", "");
         backAudio.animate({volume: 0}, 1000, function () {
             muted = true;
         });
     }
 });
});
