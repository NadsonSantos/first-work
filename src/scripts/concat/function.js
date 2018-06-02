var $doc = $('html, body');
	$('.links').click(function() {
	$doc.animate({
		 scrollTop: $( $.attr(this, 'href') ).offset().top
	 }, 500);
    return false;
});
$('.menu-link').click(function() {
	$doc.animate({
		 scrollTop: $( $.attr(this, 'href') ).offset().top
	 }, 500);
    return false;
});