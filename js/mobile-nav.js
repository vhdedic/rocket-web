/* jQuery mobile navigation */

$(document).ready(function(){
	$('.mobile').click(function(){
		$('nav#primary ul').slideToggle();
	});

	$(window).resize(function(){
		if($(window).width() <= 1024){
			$('nav#primary ul').removeAttr('style');
		}
	});
});