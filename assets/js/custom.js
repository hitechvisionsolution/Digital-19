// Add event on document ready
$(document).ready(function() {


        var a = 0;
        $(window).scroll(function() {

          var oTop = $('#home-counter-content-section').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
        function startCounter(){
            $('.counter').each(function (index) {
                var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(parseFloat(now).toFixed(size));
                    }
                });
            });
        }	

        startCounter();
            a = 1;
          }

        }); 
}); 
