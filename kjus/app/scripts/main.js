$(window).load(function(){    
    var vids = $("video"); 
    $.each(vids, function(){
           this.controls = false; 
    }); 

    $("video").click(function() {
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });

    $(".play-trigger").click(function(e) {
      e.preventDefault();
      var video = document.getElementById("header-video");
      $('.video-overlay').toggleClass('active');
      if (video.paused) {
        video.play();
        $(this).find('.fas').removeClass('fa-play').addClass('fa-pause');
      } else {
        video.pause();
        $(this).find('.fas').removeClass('fa-pause').addClass('fa-play');
      }
    });

    jQuery('.menu-toggle').click(function(){
        $("#main-nav").slideToggle();
    });
});