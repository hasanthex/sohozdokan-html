$(document).ready(function(){
    // alert slider
    $("#slider-alert").owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        dots:false,
        loop:true,
        margin:100
    });

    // primary slider
    $("#slider-primary").owlCarousel({
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        dots:true,
        loop:true,
        margin:0
    });

  

});