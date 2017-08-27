<?php
error_reporting(0);
///////////////////////////GÝRÝÞ
if($_SESSION['AGIRIS'] != TRUE){
	header('Location: giris.php');
	exit;
}
///////////////////////////ÇIKIÞ
if($_GET['cikis'] == "true"){
	$_SESSION['AGIRIS'] = NULL;
	$_SESSION['AID'] = NULL;
	unset($_SESSION['AGIRIS']);
	unset($_SESSION['AID']);
	header('Location: giris.php');
	exit;
}
?>