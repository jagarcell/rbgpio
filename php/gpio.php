<?php
	$portn = $_REQUEST["portn"];
	$mode = $_REQUEST["mode"];
	$value = $_REQUEST["value"];
	$retval = "";

	system("echo $portn > /sys/class/gpio/export", $retval);
	system("echo $mode > /sys/class/gpio/gpio$portn/direction", $retval);
	system("echo $value > /sys/class/gpio/gpio$portn/value", $retval);
?>
