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
    })
});
