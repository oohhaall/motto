<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');
//require_once('../inc.class/qryClass.php');

$tarih = array(array('id'=>'1','baslik'=>'Kiralama'),array('id'=>'2','baslik'=>'Satın Alma'));
$_GET['k'] = ($_GET['k'] == '')?'0':$_GET['k'];
$self .= '?k='.$_GET['k'];

foreach($tarih as $k){ 
	$slkt = ($_GET['k'] == $k['id'])?' selected':'';
	if($_GET['k'] == $k['id']){$kid = $k['id'];}
	$katOpt.= '<option value="'.$k['id'].'"'.$slkt.'>'.$k['baslik'].'</option>';
}

$self .= '&sayfa='.$_GET['sayfa'];


if($_GET['durum'] != ""){
	$DB->qry("UPDATE siparis SET drm=IF(drm='0','1','0') WHERE id=".STR($_GET['durum'],"int"),0);
	header('Location: '.$self);	exit;
}
if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Bu Siparişi Silmek İstiyormusunuz ?
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
		$sil = $DB->qry("DELETE FROM siparis WHERE id=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self);	exit;
	}
}

if($kid){
	$whrStr = " WHERE tip=".STR($_GET['k'], "int");
}



$veriler = $DB->syf("SELECT *, DATE_FORMAT(tarih,'%d.%m.%Y %H:%i') as trh FROM siparis".$whrStr." ORDER BY id DESC",20,'siparisler.php?sayfa=',$_GET['sayfa']);
$sayfaNoStr = $DB->syfNo();
$sira = 0;
foreach($veriler as $k){
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':(($k['drm']=="0")?' id="deaktif"':'');
	$sira++;	
	$k['aktg'] = ($k['aktg'])?$k['aktg']:'Yok';
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
				<li class="kt">'.$k['adSoyad'].'</li>
				<li class="kt">'.$k['mail'].'</li>	
				
				<li class="kt">'.$k['tel'].'</li>
				<li class="kt">'.$k['trh'].'</li>
				<li class="kt">'.(($k['tip'] == '2')?$k['fiyat']:'-').'</li>
				<a href="'.$self.'&sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>
				<a href="'.$self.'&durum='.$k['id'].$sUrl.'" title="Aktif/Deaktif"><li class="btn"><img src="images/durum'.$k['drm'].'.png" width="24" height="24" border="0" /></li></a>
			  	<li no="'.$k['id'].'" rel="dty" class="btn" title="Göster"><img src="images/goster.png" width="24" height="24" border="0" /></li>
			  </ul>';		
}

$m13 = ' id="Clk"';
?><!DOCTYPE HTML>
<html><head>
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
<script type="text/javascript">
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='siparisler.php?k="+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
</script>
<script src="popup.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('.btn[rel="dty"]').click(function(){
		var htmlDty = $.ajax({url:"sprsDty.php?sid="+$(this).attr("no"), async:false}).responseText;
		popAc('Sipariş Detayı',htmlDty,0,$("table").first().offset().left+90);
	});
});
</script>
<style>

#list ul li {
	width:246px;
}
#list ul .sa {
	width:80px;
}
#list ul .kt {
	width:110px;
}
#list ul .ad {
	width:50px;
}
#list ul .sra {
	width:30px;
}
#ekleTablo {
	font-size:12px;
	background-color:#FFF;
}
#ekleTablo td {
	border-top:1px solid #EEE;
	padding:5px;
}
#ekleTablo th {
	border-top:1px solid #EEE;
	padding:5px;
}
.ince{
	font-weight:normal;
}
#ekleTablo tr:hover {
	background-color:#F7F7F7;
}
#popDiv div {
	padding:0px;
}
</style>

</style>
</head>
<body>
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" class="tablo">
  <tr>
    <th height="0" align="left" valign="top" scope="col"><?php include('inc/banner.php'); ?></th>
  </tr>
  <tr>
    <td height="0" align="left" valign="top">
	 
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:5px;">
      
         </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
                  <li class="kt">Gönderenin Bilgileri</li>
                 
                  <li class="kt">Telefon</li>
                  <li class="kt">Mail</li>
                 
                  <li class="kt">Tarih</li>
                  <li class="kt">Tutar</li>
                  <li style="width:50px; border-right:none;">Seçenekler</li>
                </ul>
        	</div>
            <div id="icerik">
				<?php echo $kStr; ?>
                <div style="border-top:1px solid #EEE;"><?php echo $sayfaNoStr; ?></div>
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