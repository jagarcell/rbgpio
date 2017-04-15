<?php
	$portn = $_REQUEST["portn"];
	$mode = $_REQUEST["mode"];
	$value = $_REQUEST["value"];

	system("echo $portn > /sys/class/gpio/export", $retval);
?>