<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$kategori = $DB->qry("SELECT * FROM kategori ORDER BY sra ASC",1);
$_GET['k'] = ($_GET['k'] == '')?$kategori[0]['id']:$_GET['k'];
$kid = $kategori[0]['id'];

foreach($kategori as $k){ 
	$slkt = ($_GET['k'] == $k['id'])?' selected':'';
	if($_GET['k'] == $k['id']){$kid = $k['id'];}
	$katOpt.= '<option value="'.$k['id'].'"'.$slkt.'>'.$k['baslik'].'</option>';
}



if(b($_GET['sil'])){
	$self .= (isset($_GET['sayfa']))?'?sayfa='.$_GET['sayfa']:'';
	hatavar('
			Bu Alt Katgoriyi Silmek İstiyormusunuz ?
			<li>
				<form id="form1" name="form1" method="post" action="'.$self.'?k='.$kid.'&sil='.$_GET['sil'].'">
					<input id="silOnay" name="silOnay" type="checkbox" value="onaylandi" style="margin-top:6px;" />
					<label for="silOnay">Silme İşlemini Onayliyorum  </label>
					<input name="sil" type="submit" class="button" id="sil" value="   Sil  " />
					<input name="vazgec" type="button" class="button" id="vazgec" onclick="git(\''.$self.'?k='.$kid.'\');" value="   Vazgeç   " />
				</form>
			</li>
			');
	if($_POST['silOnay'] == "onaylandi"){
		
		$DB->qry("DELETE FROM akategori WHERE id=".STR($_GET['sil'], "int"),0);
		//$urnRsmSil = $DB->qry("SELECT kresim, bresim FROM urunler WHERE aid=".STR($_GET['sil'], "int"),5);
		//$DB->dosyaDel($urnRsmSil, '../resim/');
		//$DB->qry("DELETE FROM urun WHERE aid=".STR($_GET['sil'], "int"),0);
		header('Location: '.$self.'?k='.$kid); exit;
	}
}


$formText = 'yeni';
$btnText = 'Ekle';

$veriler = $DB->qry("SELECT * FROM akategori WHERE kid=".$kid." ORDER BY id ASC",1);
$sira = 0;
foreach($veriler as $k){
	if(b($_GET['duzenle']) && k($_GET['duzenle'],$k['id'])){$formText = 'duzenle';	$btnText = 'Kaydet'; 
		$inpText[0] = $k['baslik'];
	}
	$stl = ($_GET['sil']==$k['id'])?' id="kirmizi"':'';
	$stl = (($_GET['y']==$k['id']) || ($_GET['a']==$k['id']) || ($_GET['duzenle']==$k['id']) || ($_GET['s']==$k['id']))?' id="yesil"':$stl;
	$sira++;
		
	$kStr .= '<ul'.$stl.'>
				<li class="sra">'.$sira.'</li>
				<li>'.$k['baslik'].'</li>
				<a href="'.$self.'?k='.$k['kid'].'&sil='.$k['id'].'" title="Sil"><li class="btn" style="border:none;"><img src="images/delete.png" width="24" height="24" border="0" /></li></a>
				<a href="'.$self.'?k='.$k['kid'].'&duzenle='.$k['id'].'" title="Düzenle"><li class="btn"><img src="images/edit.png" width="24" height="24" border="0" /></li></a>
			  </ul>';		
}

if(k($_POST['formislem'],"yeni")){
	$DB->kln('kid', $kid);
	$DB->kln('baslik',$_POST['baslik'],'text','Alt Kategori adını yazın.');
	$DB->ins('akategori',$self.'?k='.$kid);
	$hata = $DB->hataGoster();
}

if(k($_POST['formislem'],"duzenle") && b($_GET['duzenle'])){
	$DB->kln('baslik',$_POST['baslik'],'text','Alt Kategori adını yazın.');
	$DB->whr('id',$_GET['duzenle'],"int");
	$DB->upt('akategori',$self.'?k='.$kid);
	$hata = $DB->hataGoster();
}

$m3 = ' id="Clk"';
?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?php echo $title; ?></title>
<link href="admin.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="admin.js"></script>
<script type="text/javascript">
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='altKategoriler.php?k="+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
</script>
<style>
#list #icerik ul{
}
#list ul li {
	width:876px;
}
#list ul .rsm {
	width:100px;
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
	  	<a href="kategoriler.php"><li>Kategoriler</li></a>
        <a href="altKategoriler.php"><li id="Clk">Alt Kategoriler</li></a>
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <div style="padding:10px 5px;">
		      
        <form action="<?php echo $self.'?k='.$kid.'&duzenle='.$_GET['duzenle']; ?>" method="post" enctype="multipart/form-data" name="form1" id="form1">
        
        <label for="kategori">Kategori seç</label>
      	<select name="kategori" class="selekt" id="kategori" onChange="MM_jumpMenu('parent',this,0)">
			<?php echo $katOpt; ?>         
		</select>
        
        <label for="baslik">Alt kategori adı : </label>
   		<input name="baslik" type="text" class="kutu" id="baslik" style="width:400px;" value="<?php echo $inpText[0]; ?>" />

		<input name="button" type="submit" class="button" id="button" value="  <?php echo $btnText; ?>  " />
        <?php if($_GET['duzenle']){ ?>
        <input name="button" type="button" class="button" id="button" value="  Vazgeç  " onClick="git('<?php echo $self; ?>');" />
        <?php } ?><br>
        <input type="hidden" name="formislem" id="formislem" value="<?php echo $formText ?>" />
        </form>
      </div>
      <div id="list">
  <div id="baslik">
                <ul>
                  <li style="width:30px;">S&#305;ra</li>
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