
$(document).ready(function () {
    $('.detail-gallery').lightGallery({
        download: false,
        share: false
    });

    $(".pools-list .slider").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        items: 1,
    });

    $('.available-pools .slider').owlCarousel({
        loop:false,
        nav:true,
        margin:32,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.top-pools .slider').owlCarousel({
        loop:false,
        nav:true,
        margin:32,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $(".owl-prev").html('<i class="fas fa-caret-left"></i>');
    $(".owl-next").html('<i class="fas fa-caret-right"></i>');
});

$(".filters .drop-t-open").on("click", function (e) {
    $(".filters .drop-t-open").not(this).parent().removeClass("open");
    $(this).parent().toggleClass("open");
    e.stopPropagation();
});



// $(".dropdown-wrap").on("click", function (e) {
//     e.stopPropagation();
// });

// $('html').click(function() {
//   $('.drop-t-open').removeClass('open');
// });

$('.gallery_b').on('click', function() {
	$('.detail-gallery div:first-child').click();
});

$('.temperature-guide li').on('click', function() {
    var attr = $(this).attr('rel');

    $('.temperature-guide li ,.temp-back li').removeClass('active');
    $(this).addClass('active');

    $('.reviews_wrap .item-wrap').hide();
    $('.' + attr).addClass('active');
});

$(document).on("click",".view-emperature-popup",function() {
	$('.temperature_popup').fadeIn();
	$('body').addClass('hidden-b')
});

$(document).on("click",".close-popup",function() {
	$('.popup').fadeOut();
	$('body').removeClass('hidden-b');
});

$(document).on("click",".m-lines",function() {
	$(this).toggleClass('open');

    if ($(this).hasClass("open")) {
        $('.menu ul').slideDown();
    }else{
        $('.menu ul').slideUp();
    }
}); 
