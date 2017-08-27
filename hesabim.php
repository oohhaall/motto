<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');

if(!$GRS){ header('Location: giris.php?l=hesabim'); exit; }

if($_POST['islem'] == 'hesabim'){

	if(!empty($_POST['eposta']) && !empty($_POST['sifre']) && !empty($_POST['adSoyad'])){
		$uye = $DB->qry('SELECT * FROM uyeler WHERE id!='.$DB->str($UB['id'],'int').' AND eposta='.$DB->str($_POST['eposta'],'text'),4);
		if(empty($uye['id'])){
						
			$DB->kln('eposta',$_POST['eposta']);
			$DB->kln('sifre',$_POST['sifre']);
			$DB->kln('adSoyad',$_POST['adSoyad']);
			$DB->kln('tel',$_POST['tel']);
			$DB->kln('cep',$_POST['cep']);
			$DB->kln('sehir',$_POST['il'],'int');
			$DB->kln('ilce',$_POST['ilce'],'int');
			$DB->kln('adres',$_POST['adres']);
			$DB->whr('id',$UB['id'],'int');
			$DB->upt('uyeler','','uyeGncOk');			
			
		}else{
			$hata = 'Girdiğiniz eposta adresi kullanımda!';
		}
		
	}else{
		 $hata = 'Lütfen tüm bilgileri giriniz!';
	}

}

if($_SESSION['KAYIT'] == 'uyeGncOk'){
	$uye = $DB->qry('SELECT * FROM uyeler WHERE id='.$DB->str($UB['id'],'int'),4);
	$_SESSION['UBLG'] = $uye;
	$UB = $uye;
}

$iller = $DB->qry('SELECT * FROM iller ORDER BY il ASC',1);
foreach($iller as $il){ $slkt=($UB['sehir']==$il['id'])?' selected':''; $illerOpt .= '<option value="'.$il['id'].'"'.$slkt.'>'.$il['il'].'</option>'; }

$ilceler = $DB->qry('SELECT * FROM ilceler WHERE ilid='.$DB->str($UB['sehir'],'int').' ORDER BY sira DESC',1);
foreach($ilceler as $ilce){ $slkt=($UB['ilce']==$ilce['id'])?' selected':''; $ilcelerOpt .= '<option value="'.$ilce['id'].'"'.$slkt.'>'.$ilce['ilce'].'</option>'; }



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
<div class="container">

<div class="sayfa golge">
	<br /><br />

<p>Merhaba; hesabım sayfasındasınız.<br /><br />
Şifreninizi, fatura bilgilerinizi ve kullanıcı adınızı bu sayfadan değiştire bilirisiniz. <br /><br />

Sisteme üye değilseniz hemen şimdi <SPAN style="text-decoration:underline;"><a href="index.php?page=giris">buraya tıklayarak üye ola bilirsiniz</a>.</SPAN> <br /><br />Üyeliğiniz varsa aşağıda belirtilen bilgileri eksiksiz doldurmanız gerekmektedir.<br /> Her hangi bir problem yaşıyorsanız <span style="text-decoration:underline;">+90 0216 305 01 25</span> nolu telefonu araya bilir yada <strong style="text-decoration:underline; color:#039;"><a href="mailto:destek@mottotranslation.com">destek@mottotranslation.com</a></strong> adresine 7/24 mail atabilirsiniz.</p><br /><br />
	<div >
    	<form action="" method="post" style="    line-height: 50px;">
        	<?php if($hata){ echo '<div class="alert alert-danger">'.$hata.'</div>'; }?>
    
    <?php  if($_SESSION['KAYIT'] == 'uyeGncOk'){ echo '<div class="alert alert-success" align="center">
				<h2>Bilgileiniz Güncellendi!</h2>
				</div>';	$_SESSION['KAYIT'] = NULL;}?>
			
            <label>Adınız Soyadınız</label>
        	<input class="form-control" name="adSoyad" type="text" placeholder="Adınız Soyadınız..." value="<?php echo $UB['adSoyad']; ?>">

            <label>Telefon Numaranız</label>
        	<input class="form-control" name="tel" type="text" placeholder="Tel..." value="<?php echo $UB['tel']; ?>">

            <label>Cep Numaranız</label>
        	<input class="form-control" name="cep" type="text" placeholder="Cep..." value="<?php echo $UB['cep']; ?>">

            <label>Şehir</label>
            <select class="form-control" name="il" id="il"><?php echo $illerOpt; ?></select>

            <label>İlçe</label>
	        <select class="form-control" name="ilce" id="ilce"><?php echo $ilcelerOpt; ?></select>
			
            <label>Adres</label>
            <textarea class="form-control" name="adres" cols="" rows=""><?php echo $UB['adres']; ?></textarea>
            
            <h2 align="center" style="margin-top:50px; font-size:20px;">Giriş Bilgileriniz</h2>
        	
            <label>Eposta Adresiniz</label>
        	<input class="form-control" name="eposta" type="email" placeholder="Eposta Adresiniz..." value="<?php echo $UB['eposta']; ?>">
        	
            <label style="margin-top:20px;">Şifreniz</label>
        	<input class="form-control" name="sifre" type="password" placeholder="Şifreniz..." value="<?php echo $UB['sifre']; ?>">
            
            <input name="islem" type="hidden" value="hesabim">
            <div style="margin-top:10px;" align="CENTER">
                <input class="btn" type="submit" value="KAYDET VE GÖNDER">
                
            </div>
            
        </form>
    </div>
</div>
<BR />







</div>


<?php include('inc/ust.php')?>