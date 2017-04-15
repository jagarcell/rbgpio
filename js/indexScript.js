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
}
