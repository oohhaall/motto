<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');


if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Etkinliği Silmek İstiyormusunuz ?
			<li>
				<form id="form1" name="form1" method="post" action="'.$self.'?sil='.$_GET['sil'].'">
					<input id="silOnay" name="silOnay" type="checkbox" value="onaylandi" style="margin-top:6px;" />
					<label for="silOnay">Silme İşlemini Onayliyorum  </label>
					<input name="sil" type="submit" class="button" id="sil" value="   Sil  " />
					<input name="vazgec" type="button" class="button" id="vazgec" onclick="git(\''.$self.'\');" value="   Vazgeç   " />
				</form>
			</li>
			');
	if($_POST['silOnay'] == "onaylandi"){

		$urunslayt = $DB->qry("SELECT resim FROM ornekprojegaleri WHERE uid=".STR($_GET['sil'], "int"),5);
		if(count($urunslayt)>0){
		$DB->dosyaDel($urunslayt,'../resim/');
		$DB->qry("DELETE FROM ornekprojegaleri WHERE uid=".STR($_GET['sil'], "int"),0);
		}


		$DB->qry("DELETE FROM ornekproje WHERE id=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self);	exit;
	}
}



$formText = 'yeni';
$btnText = 'Ekle';

$veriler = $DB->qry("SELECT *, DATE_FORMAT(tarih, '%d.%m.%Y') as trh, DATE_FORMAT(tarih, '%d %M %Y') as trhAy FROM ornekproje ORDER BY tarih DESC",1);
$sira = 0;
foreach($veriler as $k){
	if(b($_GET['duzenle']) && k($_GET['duzenle'],$k['id'])){$formText = 'duzenle';	$btnText = 'Kaydet'; 
		$inpText[0] = $k['baslik'];
		$inpText[1] = $k['trh'];
		$duzenle = $k;
	}
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':'';
	$stl = (($_GET['y']==$k['id']) || ($_GET['a']==$k['id']) || ($_GET['duzenle']==$k['id']) || ($_GET['s']==$k['id']))?' id="yesil"':$stl;
	$sira++;

		
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
				<li><strong>'.$k['baslik'].'</strong></li>
				<a href="'.$self.'?sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>
				<a href="ornekprojeDuzenle.php?duzenle='.$k['id'].'" title="Düzenle"><li class="btn"><img src="images/edit.png" width="24" height="24" border="0" /></li></a>
				<a class="frmPop" href="ornekprojeGaleri.php?k='.$k['id'].'"><li class="btn"><img title="Fotoğraf Ekle" src="images/img.png" width="24" height="24" border="0" /></li></a>
				
			  </ul>';		
}




$m5 = ' id="Clk"';
?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?php echo $title; ?></title>
<link href="admin.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="admin.js"></script>
<script>!window.jQuery && document.write('<script src="../fancybox/jquery-1.4.3.min.js"><\/script>');</script>
<script type="text/javascript" src="../fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="../fancybox/jquery.fancybox-1.3.4.css" media="screen" />
<script type="text/javascript">	
	$(document).ready(function() {$("a#resim").fancybox({'overlayShow'	: true,	'transitionIn': 'elastic','transitionOut': 'elastic'});});
</script>
<style>
#list ul li {
	width:803px;
}
#list ul .rsm {
	width:74px;
	padding-right:0px;
	padding-left:0px;
}
#list #icerik ul .rsm {
	padding:0px;
}
#list ul .sa {
	width:90px;
}
#list ul .sra {
	width:30px;
}
form label {
	width:85px;
}
.kutu {
	width:400px;
}
.area {
	width:870px;
	min-width:870px;
	max-width:870px;
	height:30px;
	margin-top:5px;
}
small a:hover{
	color:#06C;
	text-decoration:underline;
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
	  	<a href="<?php echo $tablo; ?>.php"><li id="Clk">Örnek Proje Menüler</li></a>
        <a href="<?php echo $tablo; ?>ornekprojeEkle.php"><li>Örnek Proje Ekle</li></a> 
         
        
        
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:10px 5px;">
		Menü Sayısı : <?php echo count($veriler); ?>        
      </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
                  <li>Menü</li>
                  <li style="width:50px; border-right:none;">Seçenekler</li>
                </ul>
        	</div>
            <div id="icerik">
				<?php echo $kStr; ?>
       	  </div>
      </div>	
    </td>
  </tr>
  <tr>
    <td height="0" align="left" valign="middle"><?php include('inc/footer.php'); ?></td>
  </tr>
</table>
</body>
</html>