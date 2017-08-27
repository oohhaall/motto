<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$kid = $_GET['k'];

$self.='?k='.$kid;

if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Resmi Silmek İstiyormusunuz ?
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
		$silSra = $DB->qry("SELECT sra, resim FROM ornekprojegaleri WHERE id=".STR($_GET['sil'], "int"),1);
		$silSraDuzenle = $DB->qry("UPDATE ornekprojegaleri SET sra=sra-1 WHERE uid=".$kid." AND sra>".STR($silSra[0]['sra'], "int"),0);
		$DB->dosyaDel(array('../resim/'.$silSra[0]['resim']));
		$sil = $DB->qry("DELETE FROM ornekprojegaleri WHERE id=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self);	exit;
	}
}



if(b($_GET['y'])){
	$ssra = $DB->qry("SELECT sra FROM ornekprojegaleri WHERE uid=".$kid." AND id=".STR($_GET['y'], "int"),1);
	$yukari = $DB->qry("UPDATE ornekprojegaleri SET sra=sra+1 WHERE uid=".$kid." AND sra > 0 AND sra=".STR(($ssra[0]['sra']-1), "int"),0);
	$yukari2 = $DB->qry("UPDATE ornekprojegaleri SET sra=sra-1 WHERE uid=".$kid." AND sra > 1 AND id=".STR($_GET['y'], "int"),0);
	header('Location: '.$self.'&s='.$_GET['y']);	exit;
}
if(b($_GET['a'])){
	$ssra = $DB->qry("SELECT sra FROM ornekprojegaleri WHERE uid=".$kid." AND id=".STR($_GET['a'], "int"),1);
	$ssys = $DB->qry("SELECT sra FROM ornekprojegaleri WHERE uid=".$kid,3);
	$asagi = $DB->qry("UPDATE ornekprojegaleri SET sra=sra-1 WHERE uid=".$kid." AND sra < ".($ssys+1)." AND sra=".STR(($ssra[0]['sra']+1), "int"),0);
	$asagi2 = $DB->qry("UPDATE ornekprojegaleri SET sra=sra+1 WHERE uid=".$kid." AND sra < ".$ssys." AND id=".STR($_GET['a'], "int"),0);
	header('Location: '.$self.'&s='.$_GET['a']);	exit;
}



$formText = 'yeni';
$btnText = 'Ekle';

$veriler = $DB->qry("SELECT * FROM ornekprojegaleri WHERE uid=".$DB->str($_GET['k'],'int')." ORDER BY sra ASC",1);
$sira = 0;
foreach($veriler as $k){
	if(b($_GET['duzenle']) && k($_GET['duzenle'],$k['id'])){$formText = 'duzenle';	$btnText = 'Kaydet'; 
		$inpText[0] = $k['baslik'];
		$inpText[1] = $k['aciklama'];
	}
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':'';
	$stl = (($_GET['y']==$k['id']) || ($_GET['a']==$k['id']) || ($_GET['duzenle']==$k['id']) || ($_GET['s']==$k['id']))?' id="yesil"':$stl;
	$sira++;
	$ykr = ($sira>1)?'<a href="'.$self.'&y='.$k['id'].'" title="Üste Taşı"><li class="btn"><img src="images/up.png" width="24" height="24" border="0" /></li></a>':'<li class="btnD"></li>';
	$asg = (count($veriler)==$sira)?'<li class="btnD"></li>':'<a href="'.$self.'&a='.$k['id'].'" title="Alta Taşı"><li class="btn"><img src="images/down.png" width="24" height="24" border="0" /></li></a>';

		
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
				<li class="rsm"><a class="fxRsm" href="../resim/'.$k['resim'].'"><img src="../resim/'.$k['resim'].'" width="70" height="50" border="0" /></a></li>

				<li>'.$k['baslik'].'</li>
				<a href="'.$self.'&sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>		
				'.$ykr.'
				'.$asg.'
			  </ul>';		
}

if(k($_POST['formislem'],"yeni")){
	$DB->kln('uid',$kid,'int');
	$DB->kln('sra',(count($veriler) + 1),'int');
	$DB->dsy("resim","resim","../resim/","2000");	
	$DB->ins('ornekprojegaleri');
	$hata = $DB->hataGoster();
}


$m2 = ' id="Clk"';
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
	$(document).ready(function() {$("a.fxRsm").fancybox({'overlayShow'	: true,	'transitionIn': 'fade','transitionOut': 'fade'});});
</script>
<style>
#list #icerik ul{
	height:50px;
}
#list ul li {
	width:199px;
	height:50px;
	line-height:normal;
}
#list ul .rsm {
	padding-left:0px;
	padding-right:0px;
	text-align:center;
	width:70px;
	height:50px;
}
#icerik ul .rsm {
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
	width:200px;
}
.area {
	width:870px;
	min-width:870px;
	max-width:870px;
	height:30px;
	margin-top:5px;
}
</style>
</head>
<body style="background-color:#FFF; padding:0px;">
<table width="430" border="0" align="center" cellpadding="0" cellspacing="0" class="tablo">
  <tr>
    <td height="0" align="left" valign="top">
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:10px 5px;">
		      
        <form action="<?php $self; ?>" method="post" enctype="multipart/form-data" name="form1" id="form1">
        <label for="baslik">Resim : </label>
   		<input name="resim" type="file" style="padding:0px; height:26px;" class="selekt" id="resim">


		<input name="button" type="submit" class="button" id="button" value="  <?php echo $btnText; ?>  " />
        <?php if($_GET['duzenle']){ ?>
        <input name="button" type="button" class="button" id="button" value="  Vazgeç  " onClick="git('<?php echo $self; ?>');" />
        <?php } ?>

        <input type="hidden" name="formislem" id="formislem" value="<?php echo $formText ?>" />
        </form>
      </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
                  <li class="rsm">Resim</li>
                  <li> </li>
                  <li style="width:50px; border-right:none;">Seçenekler</li>
                </ul>
        	</div>
            <div id="icerik">
				<?php echo $kStr; ?>
       	  </div>
      </div>	
    </td>
  </tr>
</table>
</body>
</html>