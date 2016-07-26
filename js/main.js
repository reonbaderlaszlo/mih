$(function(){

    $('.order svg').on('click', function (e) {

    	e.preventDefault();

    	$('.order svg').removeClass('active');

    	$(this).addClass('active');

    	if($('.grid').hasClass('active')){

    		$('.category .card-wrapper').addClass('custom-sort');

    	}else{
    		$('.category .card-wrapper').removeClass('custom-sort');
    	}
    });

    $('.buttons .read').on('click', function (e) {

        $('.overlay').fadeIn('fast');

        $('.read.popup').fadeIn('fast');

    });

    $('.overlay, .popup .close').on('click', function (e) {

        e.preventDefault();

        $('.overlay').fadeOut('fast');

        $('.popup').fadeOut('fast');

    });

    $('.edit-1').on('click', function (e) {

        e.preventDefault();
        
        $(this).parent().hide();

        $('.profile-data').hide();

        $('.profile-data-edit').show();

    });

    $('.profile-data-edit .close').on('click', function (e) {

        e.preventDefault();

        $(this).parent().parent().hide();

        $('.profile-data').show();

        $('.p-d').show();
    });

    $('.edit-2').on('click', function (e) {


        e.preventDefault();

        $(this).parent().hide();

        $('.introduction').hide();

        $('.introduction-edit').show();

    });

    $('.introduction-edit .close').on('click', function (e) {

        e.preventDefault();

        $(this).parent().parent().hide();

        $('.introduction').show();

        $('.i-e').show();
    });

    $('.edit-3').on('click', function (e) {


        e.preventDefault();

        $(this).parent().hide();

        $('.contact').hide();

        $('.contact-edit').show();

    });

    $('.contact-edit .close').on('click', function (e) {

        e.preventDefault();

        $(this).parent().parent().hide();

        $('.contact').show();

        $('.c-e').show();
    });

    $('.choose-category a').on('click', function (e) {

        e.preventDefault();
        
        $('.choose-category img').removeClass('active');
        
        $(this).find('img').addClass('active'); 

    });

});
