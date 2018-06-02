
var sumir = $(".menu-link").click(function (){
  $(".menu-escondido").slideToggle('fast');
});
var fechar = $(".fechar-menu").click(function(){
  $(".menu-escondido").slideToggle('slow');
});
$( ".menu-retratil" ).click(function() {
  $(".menu-escondido").slideToggle('slow');
});