var $doc = $('html, body');
	$('.links').click(function() {
	$doc.animate({
		 scrollTop: $( $.attr(this, 'href') ).offset().top
	 }, 500);
    return false;
});

var sumir = $(".links").click(function (){
	$(".menu-escondido").removeClass("expandir");
});
var fechar = $(".fechar-menu").click(function(){
  $(".menu-escondido").removeClass("expandir");
});
$( ".menu-retratil" ).click(function() {
  $(".menu-escondido").toggleClass( "expandir");
});