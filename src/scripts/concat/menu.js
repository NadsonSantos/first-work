
var sumir = $(".links").click(function (){
	$(".menu-escondido").removeClass("expandir");
});
var fechar = $(".fechar-menu").click(function(){
  $(".menu-escondido").removeClass("expandir");
});
$( ".menu-retratil" ).click(function() {
  $(".menu-escondido").toggleClass( "expandir");
});