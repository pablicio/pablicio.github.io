$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                },
                    500);
                return false;
            }
        }
    });
});

// Overlay to show the full size of the screenshot thumbs
$("figure").on("click", function () {
    $("body").toggleClass("noscroll");
    $(this).toggleClass("overlay");
});




$('.carousel-control.left').click(function () {
    $('#myCarousel').carousel('prev');
});

$('.carousel-control.right').click(function () {
    $('#myCarousel').carousel('next');
});



$(window).scroll(function () {
    if ($(this).scrollTop() > 100)  /*height in pixels when the navbar becomes non opaque*/ {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

$('.navbar-nav a').on('click', function () {
    $('.navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});