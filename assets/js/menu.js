$(document).ready(function(){
    
 //On scroll make menu fixed
//    $(window).scroll(function(){
//        if($(this).scrollTop() >500){   
//           $('.header-top').addClass('activeScroll'); 
//        } else {
//           $('.header-top').removeClass('activeScroll');
//        }
//    });

//Contact Page Redirections    
    $(".scroll-contact-us-direction").click(function() {
        $('html, body').animate({
            scrollTop: $(".fifth-contact-section").offset().top
        }, 500);
    });
    
    if ($(window).width() < 960) {
        //On click scroll to the div
        $(".scroll-about-us").click(function() {
            $('html, body').animate({
                scrollTop: $(".About-details-section").offset().top
            }, 500);
        });    
    }
    else {
        //On click scroll to the div
      $(".scroll-about-us").click(function() {
          $('html, body').animate({
            scrollTop: $(".third-home-section").offset().top
          }, 500);
      });    
    }
    
             $('#nav-icon2').click(function(){
		
                if($(this).hasClass('open')){
                  $('.custom-nav-menu').hide('slide', {direction: 'down'}, 500);
                  $(this).removeClass('open');
                }
                else{
                  $(this).addClass('open');
                  $('.custom-nav-menu').show('slide', {direction: 'down'}, 500);
                }
            }); 
           //on lcick the ancor close the menu 
           $('.nav-menu ol li a').on('click',function(){
                             
               if($(this).hasClass('open')){
                   
                  $('#nav-icon2').addClass('open');
                  $('.custom-nav-menu').show('slide', {direction: 'down'}, 500);   

                }
                else{
                  $('.custom-nav-menu').hide('slide', {direction: 'down'}, 500);
                  $('#nav-icon2').removeClass('open');
                }  
           })    
});