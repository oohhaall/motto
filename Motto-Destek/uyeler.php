<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');
//require_once('../inc.class/functions.php');

$tablo = 'uyeler';

if(b($_GET['y'])){
	$ssra = $DB->qry("SELECT sra FROM ".$tablo." WHERE id=".STR($_GET['y'], "int"),1);
	$yukari = $DB->qry("UPDATE ".$tablo." SET sra=sra+1 WHERE sra > 0 AND sra=".STR(($ssra[0]['sra']-1), "int"),0);
	$yukari2 = $DB->qry("UPDATE ".$tablo." SET sra=sra-1 WHERE sra > 1 AND id=".STR($_GET['y'], "int"),0);
	header('Location: '.$self.'?s='.$_GET['y']);	exit;
}
if(b($_GET['a'])){
	$ssra = $DB->qry("SELECT sra FROM ".$tablo." WHERE id=".STR($_GET['a'], "int"),1);
	$ssys = $DB->qry("SELECT sra FROM ".$tablo."",3);
	$asagi = $DB->qry("UPDATE ".$tablo." SET sra=sra-1 WHERE sra < ".($ssys+1)." AND sra=".STR(($ssra[0]['sra']+1), "int"),0);
	$asagi2 = $DB->qry("UPDATE ".$tablo." SET sra=sra+1 WHERE sra < ".$ssys." AND id=".STR($_GET['a'], "int"),0);
	header('Location: '.$self.'?s='.$_GET['a']);	exit;
}

if($_GET['durum'] != ""){
	$DB->qry("UPDATE ".$tablo." SET drm=IF(drm=0,1,0) WHERE id=".STR($_GET['durum'],"int"),0);
	header('Location: '.$self);	exit;
}

if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Bu Üyeli Silmek İstiyormusunuz ?
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
		$silSra = $DB->qry("SELECT sra, resim, pdf FROM ".$tablo." WHERE id=".STR($_GET['sil'], "int"),1);
		$silSraDuzenle = $DB->qry("UPDATE ".$tablo." SET sra=sra-1 WHERE sra>".STR($silSra[0]['sra'], "int"),0);
		$DB->dosyaDel(array('../resim/'.$silSra[0]['resim'],'../kataloglar/'.$silSra[0]['pdf']));
		$DB->qry("DELETE FROM ".$tablo." WHERE id=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self);	exit;
	}
}


$veriler = $DB->qry("SELECT *, DATE_FORMAT(tarih, '%d %M %Y') as trh FROM ".$tablo." ORDER BY tarih DESC",1);
$sira = 0;
foreach($veriler as $k){
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':(($k['drm']=="0")?' id="deaktif"':'');
	$stl = (($_GET['y']==$k['id']) || ($_GET['a']==$k['id']) || ($_GET['duzenle']==$k['id']) || ($_GET['s']==$k['id']))?' id="yesil"':$stl;
	$sira++;
	//$ykr = ($sira>1)?'<a href="'.$self.'?a='.$k['id'].'" title="Üste Taşı"><li class="btn"><img src="images/up.png" width="24" height="24" border="0" /></li></a>':'<li class="btnD"></li>';
	//$asg = (count($veriler)==$sira)?'<li class="btnD"></li>':'<a href="'.$self.'?y='.$k['id'].'" title="Alta Taşı"><li class="btn"><img src="images/down.png" width="24" height="24" border="0" /></li></a>';

	//$pdfBtn = ($k['pdf'])?'<a href="../kataloglar/'.$k['pdf'].'" target="_blank" title="Kataloğu Aç"><li class="btn"><img src="images/pdf.png" width="24" height="24" border="0" /></li></a>':'<li class="btn"><img src="images/pdf2.png" width="24" height="24" border="0" /></li>';
		
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
			
				<li><strong>'.$k['eposta'].'</strong></li>
				<li><strong>'.$k['sifre'].'</strong></li>
				<li><strong>'.$k['adSoyad'].'</strong></li>
				<li><strong>'.$k['tel'].'</strong></li>
				
				<a href="'.$self.'?sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>
				
				<a href="'.$self.'?durum='.$k['id'].$sUrl.'" title="Aktif/Deaktif"><li class="btn"><img src="images/durum'.$k['drm'].'.png" width="24" height="24" border="0" /></li></a>

				
				
				'.$ykr.'
				'.$asg.'
			  </ul>';		
}


$m19 = ' id="Clk"';
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
	$(document).ready(function() {$("a#resim").fancybox({'overlayShow'	: true,	'transitionIn': 'fade','transitionOut': 'fade'});});
</script>
<style>
#list #icerik ul{
	height:74px;
}
#list ul li {
	
	width:203px;
	height:74px;
}
#list ul .rsm {
	width:74px;
	height:74px;
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
	  	<a href="<?php echo $tablo; ?>.php"><li id="Clk">Üyeler</li></a>
       
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:10px 5px;">
		Üye Sayısı : <?php echo count($veriler); ?>        
      </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
                  
                  <li>E-Posta</li>
                  <li>Şifre</li>
                  <li>Ad</li>
                  <li>Soyad</li>
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