$(document).ready(function () {
    $('.choose-eng').on('click', function () {
        $('.lang-rus').addClass('lang-hide');
        $('.wrapper-hover').addClass('display-none');
    });
    $('.choose-rus').on('click', function () {
        $('.lang-eng').addClass('lang-hide');
        $('.wrapper-hover').addClass('display-none');
    });
});
