<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');
//require_once('../inc.class/functions.php');

$tablo = 'organizasyon';
/*
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
*/


$kategoriler = $DB->qry("SELECT * FROM kategori ORDER BY sra ASC",1);
$kid = $kategoriler[0]['id'];
foreach($kategoriler as $k){ 
	$slkt = ($_GET['k'] == $k['id'])?' selected':'';
	if($_GET['k'] == $k['id']){ $kid =  $k['id'];}
	$katOpt.= '<option value="'.$k['id'].'"'.$slkt.'>'.$k['baslik'].'</option>';
}

$self .= '?k='.$kid;

$altKategoriler = $DB->qry("SELECT * FROM akategori WHERE kid=".$kid." ORDER BY baslik ASC",1);
foreach($altKategoriler as $ak){ 
	$altKat[$ak['id']] = $ak['baslik'];
	$slkt = ($_GET['ak'] == $ak['id'])?' selected':'';
	if($_GET['ak'] == $ak['id']){ 
		$whrStr = ' AND akid='.$ak['id'];
		$self .= '&ak='.$ak['id'];
	}
	$aKatOpt.= '<option value="'.$kid.'&ak='.$ak['id'].'"'.$slkt.'>'.$ak['baslik'].'</option>';
}





////////////////////////////////////////

if($_GET['durum'] != ""){
	$DB->qry("UPDATE ".$tablo." SET drm=IF(drm=0,1,0) WHERE id=".STR($_GET['durum'],"int"),0);
	header('Location: '.$self);	exit;
}

if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Organizasyonu silmek istiyormusunuz ?
			<li>
				<form id="form1" name="form1" method="post" action="'.$self.'&sil='.$_GET['sil'].'">
					<input id="silOnay" name="silOnay" type="checkbox" value="onaylandi" style="margin-top:6px;" />
					<label for="silOnay">Silme İşlemini Onayliyorum  </label>
					<input name="sil" type="submit" class="button" id="sil" value="   Sil  " />
					<input name="vazgec" type="button" class="button" id="vazgec" onclick="git(\''.$self.'\');" value="   Vazgeç   " />
				</form>
			</li>
			');
	if($_POST['silOnay'] == "onaylandi"){		
		$silSra = $DB->qry("SELECT sra, resim FROM ".$tablo." WHERE id=".STR($_GET['sil'], "int"),1);
		$silSraDuzenle = $DB->qry("UPDATE ".$tablo." SET sra=sra-1 WHERE sra>".STR($silSra[0]['sra'], "int"),0);
		$DB->dosyaDel(array('../resim/'.$silSra[0]['resim']));
		$DB->qry("DELETE FROM ".$tablo." WHERE id=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self);	exit;
	}
}

$veriler = $DB->qry("SELECT * FROM ".$tablo." WHERE kid=".$kid.$whrStr." ORDER BY id DESC",1);
$sira = 0;
foreach($veriler as $k){
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':(($k['drm']=="0")?' id="deaktif"':'');
	$stl = (($_GET['y']==$k['id']) || ($_GET['a']==$k['id']) || ($_GET['duzenle']==$k['id']) || ($_GET['s']==$k['id']))?' id="yesil"':$stl;
	$sira++;
	//$ykr = ($sira>1)?'<a href="'.$self.'?y='.$k['id'].'" title="Üste Taşı"><li class="btn"><img src="images/up.png" width="24" height="24" border="0" /></li></a>':'<li class="btnD"></li>';
	//$asg = (count($veriler)==$sira)?'<li class="btnD"></li>':'<a href="'.$self.'?a='.$k['id'].'" title="Alta Taşı"><li class="btn"><img src="images/down.png" width="24" height="24" border="0" /></li></a>';

	if($k['tip'] == '1'){
		$resVidSes = '<a id="resim" href="../resim/'.$k['resim'].'"><img src="../resim/'.$k['resim'].'" width="60" height="60" border="0" /></a>';
		$bbSlk = 'Resim';
	}
	if($k['tip'] == '2'){
		$resVidSes = '<a id="video" href="http://www.youtube.com/embed/'.$k['video'].'?rel=0"><img src="http://img.youtube.com/vi/'.$k['video'].'/0.jpg" width="60" height="60" border="0" /></a>';
		$bbSlk = 'Video';
	}

		
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
				<li class="rsm">'.$resVidSes.'</li>
				<li class="tp"><strong>'.$bbSlk.'</strong></li>
				<li><strong>'.$altKat[$k['akid']].'</strong><br>'.$k['baslik'].'</li>
				<a href="'.$self.'&sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>
				<a href="'.$tablo.'Duzenle.php?duzenle='.$k['id'].'" title="Düzenle"><li class="btn"><img src="images/edit.png" width="24" height="24" border="0" /></li></a>
				<a href="'.$self.'&durum='.$k['id'].$sUrl.'" title="Aktif/Deaktif"><li class="btn"><img src="images/durum'.$k['drm'].'.png" width="24" height="24" border="0" /></li></a>
				'.$ykr.'
				'.$asg.'
			  </ul>';		
}


$m13 = ' id="Clk"';
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
$(document).ready(function(e) {
   		$("a#video").fancybox({'overlayShow'	: true, type:'iframe',	'transitionIn': 'fade','transitionOut': 'fade'});
		$("a#resim").fancybox({'overlayShow'	: true, 'transitionIn': 'fade','transitionOut': 'fade'});
 
});


function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='<?php echo $tablo; ?>.php?k="+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
</script>
<style>
#list #icerik ul{
	height:50px;
}
#list ul li {
	width:720px;
	height:50px;
}
#list ul .rsm {
	width:60px;
	height:50px;
	padding-right:0px;
	padding-left:0px;
}
#list #icerik ul .rsm {
	padding:0px;
}
#list ul .tp {
	width:50px;
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
	  	<a href="<?php echo $tablo; ?>.php"><li id="Clk">Organizasyonlar</li></a>
        <a href="<?php echo $tablo; ?>Ekle.php"><li>Organizasyon Ekle</li></a>
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:10px 5px;">
		<select class="selekt" onChange="MM_jumpMenu('parent',this,0)">
			<?php echo $katOpt; ?>         
		</select>
      
		<select class="selekt" onChange="MM_jumpMenu('parent',this,0)">
        	<option value="<?php echo $kid; ?>">Alt kategoriye göre filtrele</option>
			<?php echo $aKatOpt; ?>         
		</select>
      
		<span class="fr">Organizasyon Sayısı : <?php echo count($veriler); ?> </span>   
        
        <div class="fc"></div>    
      </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
                  <li class="rsm">Görsel</li>
                  <li class="tp">Tip</li>
                  <li>Başlık</li>
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