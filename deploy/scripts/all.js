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

var sumir = $(".menu-link").click(function (){
  $(".menu-escondido").slideToggle('fast');
});
var fechar = $(".fechar-menu").click(function(){
  $(".menu-escondido").slideToggle('slow');
});
$( ".menu-retratil" ).click(function() {
  $(".menu-escondido").slideToggle('slow');
});
function myMap(){
    var mapProp= {
        center:new google.maps.LatLng(-12.938435, -38.488164),
        zoom:15,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
};