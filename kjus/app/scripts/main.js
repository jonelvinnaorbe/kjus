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

    $('.menu-toggle').click(function(){
        $(".main-menu").slideToggle();
    });

    $('.product-info, .holder-3d__point--1').connections();
    //$('.holder-3d__point--2,.product-info').connections();

    $('.holder-3d__point').click(function(){
      var content = $(this).find('.holder-3d__text').html();
      var id = $(this).attr('id');
      $('.product-info').html('');
      $('.product-info').html(content);
      $('.product-info').connections('remove');
      $('#' + id + ',.product-info').connections();
    });

    var isDragging = false;
    $("#image-reel")
    .mousedown(function() {
        isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
     })
    .mouseup(function() {
        var wasDragging = isDragging;
        isDragging = false;
        var original = $('#image-reel img').attr('data-original');
        var img = $('#image-reel img').attr('src');
        


        if (!wasDragging) {
          //not dragging
          if (img.indexOf(original) > -1)
          {
            $('.holder-3d__point').show();
            //$('.product-info').connections('remove');
          }else{
            $('.holder-3d__point').hide();
            $('.product-info').connections('remove');
          }
          
        }else{
          //dragging
          if (img.indexOf(original) > -1)
          {
            $('.holder-3d__point').show();
            //$('.product-info').connections('remove');
          }else{
            $('.holder-3d__point').hide();
            $('.product-info').connections('remove');
          }
        }
    });
});