<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');

if(!$GRS){ header('Location: index.php?page=giris.php?l=siparislerim'); exit; }

$il = $DB->qry('SELECT * FROM iller',2,'id');
$ilce = $DB->qry('SELECT * FROM ilceler',2,'id');

$toplamFiyat = 0;
$siparisler = $DB->qry('SELECT *, DATE_FORMAT(tarih,\'%d.%m.%Y %H:%i\') as trh FROM siparisler WHERE uyeid='.$DB->str($UB ['id'],'int'),1);
foreach($siparisler as $s){
	if($s['tip'] == '2'){
		$toplamFiyat = ($toplamFiyat + intval($s['fiyat']));
		$siparislerStlkStr .= '  
		<tr>
			<td>'.$s['id'].'</td>
			<td>'.(($s['tip'] == '1')?'Kiralama':'Satın Alma').'</td>
			<td>'.$s['urunAdi'].'</td>
			<td>'.$s['adet'].'</td>
			<td>'.$s['adres'].' '.$ilce[$s['ilce']][0]['ilce'].' / '.$il[$s['sehir']][0]['il'].'</td>
			<td>'.$s['trh'].'</td>
			<td align="right">'.$s['fiyat'].' TL</td>
		</tr>';
	}else{
		$siparislerKrlkStr .= '  
		<tr>
			<td>'.$s['id'].'</td>
			<td>'.(($s['tip'] == '1')?'Kiralama':'Satın Alma').'</td>
			<td>'.$s['urunAdi'].'</td>
			<td>'.$s['adet'].'</td>
			<td>'.$s['adres'].' '.$ilce[$s['ilce']][0]['ilce'].' / '.$il[$s['sehir']][0]['il'].'</td>
			<td>'.$s['trh'].'</td>
		</tr>';
	
	}
}


//$m2 = ' c';
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    
	<title>Motto</title>
<link rel="stylesheet" href="css/reset.css">   
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin-ext" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
 <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- Optional theme -->
<link rel="stylesheet" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/jquery.fancybox.min.css">
<link rel="stylesheet" href="css/animate.css"><!--SLAYT-->
<?php include('inc/ust.php')?>
<div class="page-title">

</div>

<div class="container padding">
  	<div class="left_menu">
    	<h3>Siparişlerim</h3>
        <div class="menu_list">
        <a class="menu_list_a" href="siparislerim.php">Siparişlerim</a>
        <a class="menu_list_a" href="faturalarim.php">Faturalarım</a>
        <a class="menu_list_a" href="fiyat-hesaplama.php">Fiyat Hesapla</a>
        	  <a class="menu_list_a" href="hesabim.php">Hesabım</a>
              <a class="menu_list_a" href="hesabim.php">Parola</a>
              <a class="menu_list_a" href="hesabim.php?cikis">Çıkış</a>
        </div>
    </div>
    
    
    <div class="right_content">
    
        <div class="page_name">
            <a href="#">Ana sayfa</a> >
            <a href="#">Hakkımızda</a> >
            <a href="#">Tüm Siparişlerim</a>
        </div>
    	
        <div class="page-ics">

<div class="clearfix">
                                                    <ul class="nav nav-pills pull-left orders">
                                <li class="active">
                                    <a href=""><span class="badge pull-right">(0)</span>Toplam</a>
                                </li>
                                <li>
                                    <a href="">
                                        <span class="badge pull-right">(0)</span>Tamamlanan
                                    </a>
                                </li>
                                                                <li>
                                    <a href="">
                                        <span class="badge pull-right">(0)</span>Bekleyen
                                    </a>
                                </li>
                                                            </ul>
                                                                    </div>

        
        
        
        </div>
        
        
    </div>



      	
</div>

<?php include('inc/alt.php')?>
