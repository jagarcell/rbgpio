$(document).ready(function()
{

}
);

function turnOn()
{
	$.get("../php/gpio.php",
		{
			portn: 17,
			mode: 'out',
			value:1
		},
		function(data, status){

		}
	);
	document.getElementById('start').style.color = 'blue';
	document.getElementById('stop').style.color = 'black';
}

function turnOff()
{
	$.get("../php/gpio.php",
		{
			portn: 17,
			mode: 'out',
			value:0
		},
		function(data, status){
		}
	);
	document.getElementById('start').style.color = 'black';
	document.getElementById('stop').style.color = 'blue';
}
