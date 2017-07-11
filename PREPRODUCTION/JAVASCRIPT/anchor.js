var x = 0;
var anchor = document.getElementById('anchor');

function moveable(){
	var anchor = document.getElementById('anchor');
	var pin1 = document.getElementById('pin1');
	var pin2 = document.getElementById('pin2');
	var pin3 = document.getElementById('pin3');
	anchor.style.fill = "none";
	anchor.style.stroke = "#f71735";
	pin1.className ="pin draggable";
	pin2.className ="pin draggable";
	pin3.className ="pin draggable";
	$( ".draggable" ).draggable();
	$('#pin1').draggable( "enable" );
	$('#pin2').draggable( "enable" );
	$('#pin3').draggable( "enable" );
	x = 1;

	if (x == 1){
	anchor.addEventListener('click', notmoveable);
	}
}
function notmoveable(){
	anchor.style.fill = "#f71735";
	anchor.style.stroke = "none";
	$('#pin1').draggable( "disable" );
	$('#pin2').draggable( "disable" );
	$('#pin3').draggable( "disable" );
	anchor.removeEventListener('click', notmoveable);
}