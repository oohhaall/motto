<?php 

function read_text($file){
$text = "";
	$myfile = fopen($file, "r") or die("Dosya okunamiyor");
	// Output one line until end-of-file
	while(!feof($myfile)) {
	  $text .=(fgets($myfile) . "\n");
	}
	fclose($myfile);
	return $text;
}
?>