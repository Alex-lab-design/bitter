$(function(){
    $('.list__inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.list__inner').find('.tab-item').removeClass('active-tab').hide();
            $('.list__inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });$('.reviews__tab').on('click', function(event) {
            var id = $(this).attr('data-id');
                $('.reviews__inner').find('.reviews__content-item').removeClass('active-tabe').hide();
                $('.reviews__tabs').find('.reviews__tab').removeClass('activee');
                $(this).addClass('activee');
                $('#'+id).addClass('active-tabe').fadeIn();
                return false;
            });
});
