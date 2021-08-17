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

    // hot deal slider
    $("#hot-deal").owlCarousel({
        items:4,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:4000000,
        autoplayHoverPause:false,
        dots:false,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items: 1
            },
            // breakpoint from 480 up
            480:{
                items:2
            },
            // breakpoint from 768 up
            768:{
                items: 4
            },
             // breakpoint from 1000 up
            1000:{
                items: 5
            }
        }
    });
  

});