<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$MSID = 'anasayfaslayt';
$tablo = 'anasayfaslayt';

$sira = $DB->qry('SELECT id FROM '.$MSID,3);

if(k($_POST['formislem'],"ekle")){
	$DB->kln('sra',($sira + 1),'int');
	$DB->dsy("resim","resim","../resim/","2000");
	$DB->dsy("profil","profil","../resim/","2000");
	$DB->kln('baslik',$_POST['baslik'],'text','Lütfen Başlık Giriniz.');
	$DB->kln('icerik',$_POST['icerik'],'text','Lütfen Başlık Giriniz.');
	//$DB->kln('link',$_POST['link'],'text');
	//$DB->kln('target',$_POST['target']);
	$DB->ins($MSID,$MSID.'.php');
	$hata = $DB->hataGoster();
}
$formText = 'ekle';

$m2 = ' id="Clk"';
?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?php echo $title; ?></title>
<link href="admin.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="editor/ckeditor.js"></script>

<script src="editor/sample.js" type="text/javascript"></script>

<link href="editor/sample.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="admin.js"></script>


<style>
#list ul li {
	width:560px;
}
#list ul .tl {
	width:100px;
}
#list ul .sa {
	width:90px;
}
#list ul .sra {
	width:30px;
}
#ekleTablo td {
	border-top:1px solid #EEE;
}
#ekleTablo th {
	border-top:1px solid #EEE;
}

.selekt {
	width:120px;
}
.kutu {
	width:800px;
}
.area {
	width:830px;
	min-width:830px;
	max-width:830px;
	height:300px;
}
</style>
</head>
<body>
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" class="tablo">
  <tr>
    <th height="0" align="left" valign="top" scope="col"><?php include('inc/banner.php'); ?></th>
  </tr>
  <tr>
    <td height="0" align="left" valign="top">
	 <div class="banAltMenu">
	  	<a href="<?php echo $tablo; ?>.php"><li>Slaytlar</li></a>
        <a href="<?php echo $tablo; ?>Ekle.php"><li id="Clk">Slayt Ekle</li></a>
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <form action="<?php $self; ?>" method="post" enctype="multipart/form-data" name="form1" id="form1">



	  <table id="ekleTablo" width="100%" border="0" cellpadding="5" cellspacing="0">
		  <tr>
		    <td class="k">Arka Plan</td>
		    <td><input name="resim" type="file" class="selekt" id="resim">
		    <span style="margin-left:50px; margin-top:10px; display:inline-block;">Boyutlar <strong>1920</strong> x <strong>520</strong> px olmalıdır.</span></td>
	      </tr>
          
          <tr>
		    <td class="k">Profil</td>
		    <td><input name="profil" type="file" class="selekt" id="profil">
		    <span style="margin-left:50px; margin-top:10px; display:inline-block;">Boyutlar <strong>422</strong> x <strong>496</strong> px olmalıdır.</span></td>
	      </tr>
		  <!--<tr>
		    <td width="127" class="k">Link</td>
		    <td width="851"><input name="link" type="text" class="kutu"></td>
	      </tr>-->
		<!-- <tr>
		    <td valign="top" class="k">Pencere</td>
		    <td>
		      <select name="target" class="selekt">
		        <option value="_self">Aynı pencere</option>
		        <option value="_blank">Yeni pencere</option>
            </select></td>
	      </tr>-->

<tr>
		    <td width="127" class="k">Slayt Başlık</td>
		    <td width="851"><input name="baslik" type="text" class="kutu" id="baslik"></td>
	      </tr>
		 <tr>
		    <td valign="top" class="k">İçerik</td>
		    <td><textarea class="ckeditor" name="icerik" id="icerik"></textarea></td>
	      </tr>

			  
          <tr>
		    <td colspan="2" align="center" class="k"><input name="button" type="submit" class="button" id="button2" value="     Kaydet     " /></td>
	      </tr>
      </table>
    <input type="hidden" name="formislem" id="formislem" value="<?php echo $formText ?>" />
    </form></td>
  </tr>
  <tr>
    <td height="0" align="left" valign="middle"><?php include('inc/footer.php'); ?></td>
  </tr>
</table>
</body>
</html>