$('.sidenav').sidenav();


$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
    $('nav').css('background', '#0083B0');
}
else{
        $('nav').css('background', 'transparent');
    }
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});