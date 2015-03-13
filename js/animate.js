$( "button" ).mouseover(function() {
  $( this ).addClass( "animated rubberBand");
});

$( "button" ).mouseleave(function() {
  $( this ).removeClass( "animated rubberBand");
});

function GitHub(){
	window.open('https://github.com/undersen/Cocina')
}