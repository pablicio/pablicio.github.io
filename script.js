var navBarHeight = $("nav").height();
var origFooterHeight = $("footer").height();
var origDocumentHeight = $(document).height();



//Define look of navbar when scrolling

var animateNavbar = function () {
    var scrollHeight = $(window).scrollTop();
    if (scrollHeight > 5) {
        //change nav to opaque look
        $(".navbar-nav").animate({
            marginRight: "0px"
        });

        $(".navbar").animate({
            padding: "0px",
            margin: "0px"
        });

        $(".navbar").css("background-color", "rgba(255,255,255,1)");
    } else {
        //change nav to transparent look
        $(".navbar-nav").animate({
            marginRight: "40px"
        });

        $(".navbar").animate({
            padding: "20px",
            margin: "20px"
        });

        $(".navbar").css("background-color", "rgba(255,255,255,.5)");

    }
};

$(window).scroll(_.throttle(animateNavbar, 500)); //limits function calls to 4x/sec with underscore-min.js throttle method



//Create function to allow for complete top-aligned section scrolling even if page is not long enough

function adjustFooterHeight() {

    var currDocumentHeight = $(document).height();
    var nextScrollPosition = $("#section-3").offset().top - navBarHeight;
    var currViewportHeight = $(window).innerHeight();

    if (currViewportHeight > origDocumentHeight - nextScrollPosition) {
        //add footer height to compensate
        var newFooterHeight = origFooterHeight + (currViewportHeight - (origDocumentHeight - nextScrollPosition));
        $("footer").height(newFooterHeight);
        alert("The footer height was increased by: " + (newFooterHeight - origFooterHeight) + "px\n\nCurrent Scroll Position Value = " + nextScrollPosition);
    } else {
        $("footer").height(origFooterHeight);
        alert("The footer height is set at its original size of: " + origFooterHeight + "px");
    }
};



//Navigate to each section using scroll animation

$("#nav-opt-1").click(function () {
    //adjustFooterHeight();
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top - navBarHeight
    },
        500);
});

$("#nav-opt-2").click(function () {
    //adjustFooterHeight();
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top - navBarHeight
    },
        500);
});

$("#nav-opt-3").click(function () {
    // adjustFooterHeight();
    $('html, body').animate({
        scrollTop: $("#section-3").offset().top - navBarHeight
    },
        500);
});

$("#nav-opt-4").click(function () {
    // adjustFooterHeight();
    $('html, body').animate({
        scrollTop: $("#section-4").offset().top - navBarHeight
    },
        500);
});
//# sourceURL=pen.js

$('.navbar-nav a').on('click', function () {
    $('.navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});