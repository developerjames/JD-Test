$(function() {


    // Sticky Nav
    var stickyRibbonTop = $('.header-container').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyRibbonTop ) {
            $('.header-container').addClass('sticky-header');
        } else {
            $('.header-container').removeClass('sticky-header');
        }
    });







});