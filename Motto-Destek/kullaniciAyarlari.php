<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');


$duzenle = $DB->qry("SELECT * FROM adm WHERE id=1",1);

if(k($_POST['formislem'],"kullaniciAyarlari")){
	if($_POST['kullaniciAdi'] == ""){
		hatavar("Kullanıcı Adı Boş Kalamaz");
	}else if($_POST['eskiSifre'] == ""){
		hatavar("Eski Şifrenizi Yazmadiniz !");
	}else if($_POST['eskiSifre'] != $duzenle[0]['sfr']){
		hatavar("Eski Şifreniz Yanlış !");
	}else if($_POST['yeniSifre'] == ""){
		hatavar("Yeni Şifrenizi Yazmadiniz !");
	}else if($_POST['yeniSifre'] != $_POST['sifreTekrar']){
		hatavar("Yeni Şifreniz Tekrarı İle Aynı Değil !");
	}else{
		$DB->kln('kad',$_POST['kullaniciAdi'],"text","Kullanıcı Adı Boş Kalamaz !");
		$DB->kln('sfr',$_POST['yeniSifre'],"text","Şifreyi Yazmadınız !");
		$DB->whr('id','1');
		$DB->upt('adm','','klncOk');
		$hata = $DB->hataGoster();
	}
}

if($_SESSION['KAYIT'] == 'klncOk'){
	$kytDurum = '<div class="ok">Bilgileriniz Değiştirildi </div>';
	$_SESSION['KAYIT'] = NULL;
}

?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?php echo $title; ?></title>
<link href="admin.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="admin.js"></script>
<style>
#list ul li {
	width:844px;
}
</style>
</head>
<body>
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" class="tablo">
  <tr>
    <th height="0" align="left" valign="top" scope="col"><?php include('inc/banner.php'); ?></th>
  </tr>
  <tr>
    <td height="61" align="center" valign="middle"><?php echo $kytDurum.$hata.hataGoster(); ?></td>
  </tr>
  <tr>
    <td height="174" align="center" valign="middle"><form id="form1" name="form1" method="post" action="">
      <table width="331" height="126" border="0" cellpadding="0" cellspacing="3">
        <tr>
          <th width="108" align="left" class="k" scope="col">Kullan&#305;c&#305; Ad&#305;n&#305;z</th>
          <th width="214" align="left" scope="col"><input name="kullaniciAdi" type="text" class="kutu" id="kullaniciAdi" value="<?php echo $duzenle[0]['kad']; ?>"></th>
        </tr>
        <tr>
          <th align="left" class="k">Eski &#350;ifreniz</th>
          <th align="left"><input name="eskiSifre" type="password" class="kutu" id="eskiSifre"></th>
        </tr>
        <tr>
          <td align="left" class="k">Yeni &#350;ifre</td>
          <td align="left"><input name="yeniSifre" type="password" class="kutu" id="yeniSifre"></td>
        </tr>
        <tr>
          <td align="left" class="k">Yeni &#350;ifre Tekrar</td>
          <td align="left"><input name="sifreTekrar" type="password" class="kutu" id="sifreTekrar"></td>
        </tr>
        <tr>
          <td height="42" align="center" valign="middle"><input name="formislem" type="hidden" id="formislem" value="kullaniciAyarlari"></td>
          <td height="42" align="center" valign="middle"><input name="button" type="submit" class="button" id="button" value="   Değişiklikleri Kaydet   "></td>
        </tr>
      </table>
    </form></td>
  </tr>
  <tr>
    <td height="0" align="left" valign="middle"><?php include('inc/footer.php'); ?></td>
  </tr>
</table>
</body>
</html>