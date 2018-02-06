$('a[href*="http"]').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	
	$('body').fadeOut(5000, function(){
		window.location.href = url;
	});
});



$(window).scroll(function() {
	
	var scrollTop = $(this).scrollTop();
	
	/* Menu change color */
	if( scrollTop > 70 ) {
		$('.navbar').addClass('scroll');
	} else {
		$('.navbar').removeClass('scroll');
	}
	
	
	
	 
});

$('a[href*="#"]').click(function() {
	var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 74
    }, 800);
});















































$(window).on('scroll', function(){
	
})