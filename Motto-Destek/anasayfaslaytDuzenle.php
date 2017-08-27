<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$MSID = 'anasayfaslayt';
$tablo = 'anasayfaslayt';

$duzenle = $DB->qry('SELECT * FROM '.$MSID.' WHERE id='.STR($_GET['duzenle'],'int'),4);
if($duzenle['id'] == ''){header('Location: '.$MSID.'.php'); exit;}


if($_GET['resim'] == "sil"){		
	$DB->dosyaDel(array('../resim/'.$duzenle['resim']));
	$DB->qry("UPDATE ".$tablo." SET resim=NULL WHERE id=".STR($duzenle['id'], "int"),0);
	header('Location: '.$self.'?duzenle='.$duzenle['id']);	exit;
}


if(k($_POST['formislem'],"ekle")){
	$DB->dsy("resim","resim","../resim/","2000", "../resim/".$duzenle['resim']);
	$DB->dsy("profil","profil","../resim/","2000", "../resim/".$duzenle['profil']);
	$DB->kln('baslik',$_POST['baslik'],'text');
	$DB->kln('icerik',$_POST['icerik'],'text');
	//$DB->kln('target',$_POST['target']);
	$DB->whr('id',$duzenle['id']);
	$DB->upt($MSID);
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
<script type="text/javascript" src="admin.js"></script>
<script type="text/javascript" src="editor/ckeditor.js"></script>

<script src="editor/sample.js" type="text/javascript"></script>

<link href="editor/sample.css" rel="stylesheet" type="text/css" />


<script>!window.jQuery && document.write('<script src="../fancybox/jquery-1.4.3.min.js"><\/script>');</script>
<script type="text/javascript" src="../fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="../fancybox/jquery.fancybox-1.3.4.css" media="screen" />
<script type="text/javascript">	
	$(document).ready(function() {$("a#resim").fancybox({'overlayShow'	: true,	'transitionIn': 'fade','transitionOut': 'fade'});});
</script>


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
        <a href="<?php echo $tablo; ?>Ekle.php"><li>Slayt Ekle</li></a>
        <li id="Clk">Slayt Düzenle</li>
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <form action="<?php $self; ?>" method="post" enctype="multipart/form-data" name="form1" id="form1">

	  <table id="ekleTablo" width="100%" border="0" cellpadding="5" cellspacing="0">
          <tr>
		    <td class="k">Resim</td>
		    <td><input name="resim" type="file" class="selekt" id="resim">
		    <span style="margin-left:50px; margin-top:10px; display:inline-block;">Boyutlar <strong>1920</strong> x <strong>520</strong> px olmalıdır.</span></td>
	      </tr>
          <?php if($duzenle['resim']){?>
		  <tr>
		    <td class="k">&nbsp;</td>
		    <td><a id="resim" href="../resim/<?php echo $duzenle['resim']; ?>"><img src="../resim/<?php echo $duzenle['resim']; ?>" height="74" border="0" /></a> <img title="Sil" onClick="Sil('<?php echo $self.'?duzenle='.$duzenle['id'].'&resim=sil'; ?>',1);" style="margin-left:10px; cursor:pointer;" src="images/delete.png" width="24" height="24" border="0" /> </td>
	      </tr>
          <?php } ?>
          
          
          <tr>
		    <td class="k">Profik</td>
		    <td><input name="resim" type="file" class="selekt" id="resim">
		    <span style="margin-left:50px; margin-top:10px; display:inline-block;">Boyutlar <strong>422</strong> x <strong>496</strong> px olmalıdır.</span></td>
	      </tr>
          <?php if($duzenle['profil']){?>
		  <tr>
		    <td class="k">&nbsp;</td>
		    <td><a id="resim" href="../resim/<?php echo $duzenle['profil']; ?>"><img src="../resim/<?php echo $duzenle['profil']; ?>" height="74" border="0" /></a> <img title="Sil" onClick="Sil('<?php echo $self.'?duzenle='.$duzenle['id'].'&resim=sil'; ?>',1);" style="margin-left:10px; cursor:pointer;" src="images/delete.png" width="24" height="24" border="0" /> </td>
	      </tr>
          <?php } ?>
          
          
          
        <tr>
		    <td width="127" class="k">Baslık</td>
		    <td width="851"><input name="baslik" type="text" class="kutu" value="<?php echo $duzenle['baslik']; ?>"></td>
	      </tr>
          
          <tr>
		    <td valign="top" class="k">İçerik</td>
		    <td><textarea class="ckeditor" name="icerik" id="icerik"><?php echo $duzenle['icerik']; ?></textarea>
            </td>
	      </tr>
		 <!--<tr>
		    <td valign="top" class="k">Pencere</td>
		    <td><select name="target" class="selekt">
		        <option value="_self" <?php if($duzenle['target'] == '_self'){echo ' selected';}; ?>>Aynı pencere</option>
		        <option value="_blank" <?php if($duzenle['target'] == '_blank'){echo ' selected';}; ?>>Yeni pencere</option>
            </select>
            </td>
	      </tr>		-->  


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