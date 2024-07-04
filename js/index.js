$(document).ready(function () {


    var accordion_head = $('.accordion > li > a'),
        accordion_body = $('.accordion li > .sub-menu');


    accordion_head.first().addClass('active').next().slideDown('normal');

  

    accordion_head.on('click', function (event) {

        
        event.preventDefault();


        if ($(this).attr('class') != 'active') {
            accordion_body.slideUp('normal');
            $(this).next().stop(true, true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }

    });

});

var accordion_head = $('.accordion > li > a'),
    accordion_body = $('.accordion li > .sub-menu');

accordion_head.first().addClass('active').next().slideDown('normal');
if ($(this).attr('class') != 'active') {
    accordion_body.slideUp('normal');
    $(this).next().stop(true, true).slideToggle('normal');
    accordion_head.removeClass('active');
    $(this).addClass('active');
}



var countDownDate = new Date("Jan 5, 2025 22:20").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    console.log(days);
    document.getElementById("days").innerHTML = days + "d " ;
    document.getElementById("hours").innerHTML =  hours + "h ";
    document.getElementById("minutes").innerHTML =  minutes + "m ";
    document.getElementById("seconds").innerHTML =  seconds + "s ";
      
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);