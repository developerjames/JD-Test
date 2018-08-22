$('.js-modal-open').click(function () {
    var modalID = $(this).attr('data-modal-id');
    $('.js-modal-popup').fadeOut();
    $('#' + modalID).fadeIn();
});

$('.js-modal-close').click(function () {
    $('.js-modal-popup').fadeOut();
});