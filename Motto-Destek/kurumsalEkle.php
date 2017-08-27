<?php require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$MSID = 'kurumsal';
$tablo = 'kurumsal';

$sira = $DB->qry('SELECT id FROM '.$MSID,3);

if(k($_POST['formislem'],"ekle")){
	$DB->kln('baslik',$_POST['baslik'],'text','Lütfen Başlık Giriniz.');
	$DB->kln('icerik',$_POST['icerik'],'text','Lütfen Açıklama Giriniz.');
	$DB->whr('id',$duzenle['id']);
	$DB->ins($MSID,$MSID.'.php');
	$hata = $DB->hataGoster();
}
$formText = 'ekle';

$m4 = ' id="Clk"';
?><!DOCTYPE HTML>
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><?php echo $title; ?></title>
<link href="admin.css" rel="stylesheet" type="text/css">

<script src="../js/jquery-1.8.2.min.js"></script>

<script type="text/javascript" src="admin.js"></script>



<link href="../takvim/css/ui-lightness/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="../takvim/js/jquery-1.7.1.min.js"></script>

<script type="text/javascript" src="../takvim/js/jquery-ui-1.8.18.custom.min.js"></script>

<script type="text/javascript" src="../takvim/js/jquery.ui.datepicker-tr.js"></script>

<script>

$(document).ready(function(e) {

    $(".takvim").datepicker({showOn: "both",  buttonImage: "images/takvim.png", buttonImageOnly: true});

});

</script>



<script type="text/javascript" src="editor/ckeditor.js"></script>

<script src="editor/sample.js" type="text/javascript"></script>

<link href="editor/sample.css" rel="stylesheet" type="text/css" />




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
	width:300px;
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
	  	<a href="<?php echo $tablo; ?>.php"><li id="Clk">Kurumsal Menüler</li></a>
        <a href="<?php echo $tablo; ?>Ekle.php"><li>Kurumsal Menü Ekle</li></a> 
        
        <div class="fc"></div>
      </div>
      <?php echo $hata.hataGoster(); ?>
      <form action="<?php $self; ?>" method="post" enctype="multipart/form-data" name="form1" id="form1">



	  <table id="ekleTablo" width="100%" border="0" cellpadding="5" cellspacing="0">
		  <tr>
		    <td width="127" class="k">Menü Başlık</td>
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