<?php
error_reporting(0);
session_start();
if(!$DB){
	require_once('inc.class/qryClass.php');
	$DB = DB::Open();
}
$self = $_SERVER['PHP_SELF'];

if(isset($_GET['cikis'])){
	$_SESSION['UGIRIS'] = FALSE;
	$_SESSION['UBLG'] = NULL;
	unset($_SESSION['UGIRIS'], $_SESSION['UBLG']);
}
$GRS = ($_SESSION['UGIRIS'] == true)?true:false;
$UB = $_SESSION['UBLG'];

////////////////////////////////////////////////////////////
function buyut($s){return mb_convert_case(str_replace('i','İ',$s),MB_CASE_UPPER,'UTF-8');}
function kucult($s){return mb_convert_case(str_replace('I','ı',$s),MB_CASE_TITLE,'UTF-8');}
if(!function_exists('kis')){function kis($s,$k=28){if(mb_strlen($s,'utf-8')>$k){return mb_substr($s,0,$k,'utf-8').'...';}else{return $s;}}}
function trhAy($t){ return str_replace(array('January','February','March','April','May','June','July','August','September','October','November','December'),array('Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'),$t);}
if(!function_exists('trhGun')){function trhGun($t){return str_replace(array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'),array('Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'),$t);}}

if(!function_exists('dgs')){function dgs($s){$s = str_replace(" ","-",$s);$s = str_replace(",","",$s);$s = str_replace("ğ","g",$s);$s = str_replace("Ğ","G",$s);$s = str_replace("ü","u",$s);$s = str_replace("Ü","U",$s);$s = str_replace("İ","I",$s);$s = str_replace("ı","i",$s);$s = str_replace("ş","s",$s);$s = str_replace("Ş","S",$s);$s = str_replace("ç","c",$s);$s = str_replace("Ç","C",$s);$s = str_replace("ö","o",$s);$s = str_replace("Ö","O",$s);$s = str_replace("'","_",$s);return $s;}}




/*if ($_GET['page'] == 'index') {
	$Menu1 = ' class="active';
}

if ($_GET['page'] == 'hakkimizda') {
	$Menu2 = ' class="active';
}

if ($_GET['page'] == 'hizmetler') {
	$Menu3 = ' class="active';
}

if ($_GET['page'] == 'neden-motto') {
	$Menu4 = ' class="active';
}

if ($_GET['page'] == 'ceviri_alanlari_ve_dilleri') {
	$Menu5 = ' class="active';
}

if ($_GET['page'] == 'iletisim') {
	$Menu6 = ' class="active';
}*/


///////////////////////////////////////////////////////////////////////////////



$ceviri = $DB->qry('SELECT id, baslik FROM ceviri ORDER BY baslik ASC',1);
foreach($ceviri as $m){ 
$m2='menuClk';
$ceviri = ($m['id'] == $_GET['pno'])?' ':'';
if($m['id'] == $_GET['pno'])
 
$ceviriMenuStr .= '
<a class="menu_list_a '.$m2.'" href="ceviri-alanlari-ve-dilleri.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   else
				   
$ceviriMenuStr .= '
<a class="menu_list_a" href="ceviri-alanlari-ve-dilleri.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   }

////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////


$musteri = $DB->qry('SELECT * FROM musteri WHERE drm=1 ORDER BY sra ASC',1);
foreach($musteri as $s){ 
$musteriStr.='<div class="yrm-box">
    	<div class="trh">'.$s['tarih'].'</div>
    	<h3>'.$s['baslik'].'</h3>
        <p> '.$s['icerik'].' </p>
    	<span>'.$s['imza'].'</span>
        <div class="clear"></div>
    </div>
';}




///////////////////////////////////////////////////////////////////////////////



$kurumsal = $DB->qry('SELECT id, baslik FROM kurumsal ORDER BY sra DESC',1);
foreach($kurumsal as $m){ 
$m2='menuClk';
$kurumsal = ($m['id'] == $_GET['pno'])?' ':'';
if($m['id'] == $_GET['pno'])
 
$kurumsalMenuStr .= '
<a class="menu_list_a '.$m2.'" href="hakkimizda.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   else
				   
$kurumsalMenuStr .= '
<a class="menu_list_a" href="hakkimizda.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   }

////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////



$hizmetler = $DB->qry('SELECT id, baslik FROM hizmetler ORDER BY sra DESC',1);
foreach($hizmetler as $m){ 
$m2='menuClk';
$kurumsal = ($m['id'] == $_GET['pno'])?' ':'';
if($m['id'] == $_GET['pno'])
 
$hizmetlerMenuStr .= '
<a class="menu_list_a '.$m2.'" href="hizmetler.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   else
				   
$hizmetlerMenuStr .= '
<a class="menu_list_a" href="hizmetler.php?pno='.$m['id'].'&b='.dgs($m['baslik']).'">  '.$m['baslik'].'</a>';
				   }

////////////////////////////////////////////////////////////////////////


$slayt = $DB->qry('SELECT * FROM anasayfaslayt WHERE drm=1 ORDER BY sra ASC',1);
foreach($slayt as $s){ 
$slaytStr.='<div class="swiper-slide" style="background-image:url(resim/'.$s['resim'].'); background-repeat:no-repeat; background-size:cover;">
<div class="container">
                    <div class="slider_content animated fadeInLeft">
                        <h2>'.$s['baslik'].'</h2>
                        <p> '.$s['icerik'].'
                        </p>
                    </div>
                    <img class="profil animated fadeInRight" src="images/profil.png" />                   
            	</div>
</div></a>';}




///////////////////////////////////////////////////////////////////////////////



$orn = $DB->qry('SELECT * FROM ornekproje WHERE id='.$DB->str($_GET['pno'],'int'),4);

if(!empty($orn['id'])){
	$resimlers = $DB->qry('SELECT resim FROM ornekprojegaleri WHERE uid='.$orn['id'].' ORDER BY sra ASC',1);
	foreach($resimlers as $rsms){
		$resimlersstr .= '
		
		<div class="r_box">
                	<a data-fancybox="gallery" data-src="resim/'.$rsms['resim'].'" ><img src="resim/'.$rsms['resim'].'" /></a>
                </div>
		
		
		
		';
		
		
	}
	
	
}




$ornekproje = $DB->qry('SELECT id, baslik FROM ornekproje ORDER BY sra DESC',1);
foreach($ornekproje as $m){ 
$m2='active';
$ornekproje = ($m['id'] == $_GET['pno'])?' ':'';
if($m['id'] == $_GET['pno'])
 
$ornekprojeMenuStr .= '
<a class="page_a '.$m2.'" href="index.php?page=referanslar&pno='.$m['id'].'&b='.dgs($m['baslik']).'"> > '.$m['baslik'].'</a>';
				   else
				   
$ornekprojeMenuStr .= '
<a class="page_a" href="index.php?page=referanslar&pno='.$m['id'].'&b='.dgs($m['baslik']).'"> > '.$m['baslik'].'</a>';
				   }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$orns = $DB->qry('SELECT * FROM paketlerimiz WHERE id='.$DB->str($_GET['pno'],'int'),4);

if(!empty($orns['id'])){
	$resimlerss = $DB->qry('SELECT resim FROM paketlerimizgaleri WHERE uid='.$orns['id'].' ORDER BY sra ASC',1);
	foreach($resimlerss as $rsmss){
		$resimlerssstr .= '
		
		<div class="r_box">
                	<a data-fancybox="gallery" data-src="resim/'.$rsmss['resim'].'" ><img src="resim/'.$rsmss['resim'].'" /></a>
                </div>
		
		
		
		
		';
		
		
	}
	
	
}




$paketlerimiz = $DB->qry('SELECT id, baslik FROM paketlerimiz ORDER BY sra DESC',1);
foreach($paketlerimiz as $m){ 
$m2='active';
$paketlerimiz = ($m['id'] == $_GET['pno'])?' ':'';
if($m['id'] == $_GET['pno'])
 
$paketlerimizMenuStr .= '
<a class="page_a '.$m2.'" href="index.php?page=paketlerimiz&pno='.$m['id'].'&b='.dgs($m['baslik']).'"> > '.$m['baslik'].'</a>';
				   else
				   
$paketlerimizMenuStr .= '
<a class="page_a" href="index.php?page=paketlerimiz&pno='.$m['id'].'&b='.dgs($m['baslik']).'"> > '.$m['baslik'].'</a>';
				   }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






$altKategoriler = $DB->qry('SELECT * FROM akategori ORDER BY id ASC',1);
foreach($altKategoriler as $aKtg){
	if($_GET['grup'] == $aKtg['id']){ 
		$whrStr = ' AND akid='.$aKtg['id'];
		$baslik = ' - '.$aKtg['baslik']; 
		$link = ' / '.$aKtg['baslik']; 
	}
	$altMenuStr[$aKtg['kid']] .= '<div class="kMnu"><a href="index.php?page=ekstralar&kategori='.$aKtg['kid'].'&grup='.$aKtg['id'].'">'.$aKtg['baslik'].'</a></div>';
}
$kategoriler = $DB->qry('SELECT * FROM kategori ORDER BY sra ASC',1);
foreach($kategoriler as $ktg){
	if($altMenuStr[$ktg['id']]){
		$ktgCls = ' alm';
		$altMenu = '<div class="aMnu">'.$altMenuStr[$ktg['id']].'</div>';	
	}else{
		$ktgCls = '';
		$altMenu = '';
	}
	if($_GET['kategori'] == $ktg['id']){ 
		$whrStr = ' AND kid='.$ktg['id'].$whrStr;
		$baslik = $ktg['baslik'].$baslik; 
		$link = ($link)?' / <a href="ndex.php?page=ekstralar&kategori='.$ktg['id'].'">'.$ktg['baslik'].'</a>'.$link:' / '.$ktg['baslik']; 
	}
	$m2='active';
if($m['id'] == $_GET['pno'])
	
	$menuStr .= '
<a class="page_a '.$m2.'" href="index.php?page=ekstralar&kategori='.$ktg['id'].'">'.$ktg['baslik'].'</a>';
				   else
				   
$menuStr .= '
<a class="page_a" href="index.php?page=ekstralar&kategori='.$ktg['id'].'">'.$ktg['baslik'].'</a>';
	
	
	
	
}


$ktgMenuStr = ''.$menuStr.'';


