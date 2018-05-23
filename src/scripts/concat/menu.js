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