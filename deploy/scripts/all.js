var $doc = $('html, body');
	$('.links').click(function() {
	$doc.animate({
		 scrollTop: $( $.attr(this, 'href') ).offset().top
	 }, 500);
    return false;
});
// var clicks = 0 ;
// $('.menu-retratil').click(function() {
//     if (clicks >= 0){
//         $(".menu-escondido").addClass("expandir");
//     } else{
//     	$(".menu-escondido").removeClass("expandir");
//     }
// });

var sumir = $(".links").click(function (){
	$(".menu-escondido").removeClass("expandir");
})
$( ".menu-retratil" ).click(function() {
  $(".menu-escondido").toggleClass( "expandir" );
});