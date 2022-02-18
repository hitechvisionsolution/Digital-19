$(document).ready(function(){
    
    
    
    //Open Modal Wit Desired ScreenShot
     $('.view-full-report-button a').on('click',function(e){
        e.preventDefault();
        $('body').css({overflow:'hidden'}); 
        var dataslide = $(this).attr('data-slide');
        //hide any popup 
        $('.customised-popup-modal').hide();  
        //hide item under popup
        $('.custom-content-body-item').hide();
        //Show the desired Popup 
        $('#'+dataslide).addClass('activeSlide').fadeIn();
        //show the modal 
        $('#'+dataslide).parent().parent().fadeIn();

    });  
    
    //Closing Modal On clicking the Cross
    $('.closing-modal-section a').on('click',function(){
        $('.customised-popup-modal').fadeOut('slow');
        $('body').css({overflowX:'hidden'});
        $('body').css({overflowY:'scroll'});
    });
    //ESC to Close
    $(document).bind('keydown', function(e) { 
        if (e.which == 27) {
           $('.customised-popup-modal').fadeOut('slow');
           $('body').css({overflowX:'hidden'});
           $('body').css({overflowY:'scroll'});    
        }
    }); 
    //Navigation. On click Show next & Previous
    //on click show next
        var i = $(".custom-content-body-item").length,
        e = 1;
        $(".nav-modal-right-arrow a").on("click", function () {
        $(".custom-content-body-item.activeSlide").index() < $(".custom-content-body-item").length - 1
            ? (e++, $(".slide_image_counter a").html("" + e + "/" + i), 
            $(".custom-content-body-item.activeSlide").removeClass("activeSlide").hide().next(".custom-content-body-item").addClass("activeSlide").show())
            : ((e = 1),
              $(".slide_image_counter a").html("" + e + "/" + i),
              $(".custom-content-body-item").removeClass("activeSlide").hide(),
              $(".custom-content-body-item")
                  .eq(e - 1)
                  .addClass("activeSlide").show());
        }),
    //on click show Previous
        $(".nav-modal-left-arrow a").on("click", function () {
            $(".custom-content-body-item.activeSlide").index() > 0
                ? (e--, $(".slide_image_counter a").html("" + e + "/" + i), 
                $(".custom-content-body-item.activeSlide").removeClass("activeSlide").hide().prev(".custom-content-body-item").addClass("activeSlide").show())
                : ((e = $(".custom-content-body-item li").length),
                  $(".slide_image_counter a").html("" + e + "/" + i),
                  $(".custom-content-body-item").removeClass("activeSlide").hide(),
                  $(".custom-content-body-item")
                      .eq(e - 1)
                      .addClass("activeSlide").show());
        });    
      //change on swipe      
//      $(".custom-content-body-item").on('swipe',{
//            swipe: function (t, s, a, o, m, l) {
//                "left" == s &&
//                    ((e = $(".grid img").index(this) + 1),
//                    $(".custom-content-body-item li.activeSlide").index() < $(".custom-content-body-item li").length - 1
//                        ? (e++, $(".slide_image_counter a").html("" + e + "/" + i), $(".activeSlide").removeClass("activeSlide").hide().next(".custom-content-body-item li").addClass("activeSlide").show())
//                        : ((e = 1),
//                          $(".slide_image_counter a").html("" + e + "/" + i),
//                          $(".custom-content-body-item").removeClass("activeSlide").hide(),
//                          $(".custom-content-body-item")
//                              .eq(e - 1)
//                              .addClass("activeSlide").show())),
//                    "right" == s &&
//                        ($(".custom-content-body-item li.activeSlide").index() > 0
//                            ? (e--, $(".slide_image_counter a").html("" + e + "/" + i), $(".activeSlide").removeClass("activeSlide").hide().prev(".custom-content-body-item li").addClass("activeSlide").show())
//                            : ((e = $(".custom-content-body-item li").length),
//                              $(".slide_image_counter a").html("" + e + "/" + i),
//                              $(".custom-content-body-item").removeClass("activeSlide").hide(),
//                              $(".custom-content-body-item")
//                                  .eq(e - 1)
//                                  .addClass("activeSlide").show()));
//            },
//        });
});
                  
                  
                  
                  
                  
                  
        