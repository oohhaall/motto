<?php require_once('inc/genel.php'); 

if($_SESSION['AGIRIS'] == TRUE){
	header('Location: index.php');
	exit;
}
if(isset($_POST['kullaniciAdi'], $_POST['sifre'])){
	$giris = $DB->qry("SELECT id FROM adm WHERE kad=".STR($_POST['kullaniciAdi'],"text")." AND sfr=".STR($_POST['sifre'],"text"),1);
	if(count($giris)>0){
		$_SESSION['AGIRIS'] = TRUE;
		$_SESSION['AID'] = $giris['id'];
			header('Location: index.php');
			exit;
	}
}
?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Giriş</title>
<style type="text/css">
body {
	background-color: #EBEBEB;
	margin-left: 0px;
	margin-top: 200px;
	margin-right: 0px;
	margin-bottom: 5px;
	font-family:Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-weight: normal;
	color: #666;
}
.tablo {
	width: 468px;
	height: 150px;
	background-image: url(images/girisBg.png);
	background-repeat:no-repeat;
}
input {
	outline:none;
	font-family:Tahoma, Geneva, sans-serif;
	width: 250px;
	padding:10px 5px;
	margin:5px;
	font-weight:bold;
	font-size:14px;
	color:#333;
	border:1px solid #999;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
}
.btn {
	margin:0px;
	width:140px;
	height:88px;
}
.btn:hover {
	background-color:#CCC;
	border:1px solid #666;
}
.btn:active {
	color:#000;
	background-color:#FFA4A4;
	border:1px solid #FF5151;
}
</style></head>

<body>
<form id="giris" name="giris" method="post" action="">
  <table border="0" align="center" cellpadding="0" cellspacing="0" class="tablo">
    <tr>
      <td width="316" height="26" align="center" valign="bottom"><input name="kullaniciAdi" type="text" id="kullaniciAdi" value="Kullanıcı Adı"  onfocus="this.value=(this.value=='Kullanıcı Adı')?'':this.value;" onBlur="this.value=this.value=(this.value=='')?'Kullanıcı Adı':this.value;" tabindex="1"></td>
      <td width="152" rowspan="2" align="left" valign="middle"><input name="button" type="submit" class="btn" id="button" value="Giriş" tabindex="3"></td>
    </tr>
    <tr>
      <td height="26" align="center" valign="top"><input name="sifre" type="password" id="sifre" value="Şifre" onFocus="this.value=(this.value=='Şifre')?'':this.value;" onBlur="this.value=this.value=(this.value=='')?'Şifre':this.value;" tabindex="2"></td>
    </tr>
  </table>
</form>
</body>
</html>