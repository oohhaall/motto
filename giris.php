<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');
ini_set('display_errors', 1);
if($GRS){ header('Location: ./'); exit; }

if($_POST['islem'] == 'giris'){

	if(!empty($_POST['eposta']) && !empty($_POST['sifre'])){
		$giris = $DB->qry('SELECT * FROM uyeler WHERE eposta='.$DB->str($_POST['eposta'],'text').' AND sifre='.$DB->str($_POST['sifre'],'text'),4);
		if($giris['id']){
			$_SESSION['UGIRIS'] = TRUE;
			$_SESSION['UBLG'] = $giris;
			header('Location: ./'.((!empty($_GET['l']))?$_GET['l'].'.php':'')); exit;
		}else{
			$hata = 'Eposta adesinizi veya şifrenizi yanlış girdiniz!';
		}
		
	}else{
		 $hata = 'Lütfen eposta adesinizi ve şifrenizi girin!';
	}

}
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
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


<br /><br />

<p>Merhaba; sisteme giriş sayfasındasınız.<br /><br />
Daha önce üyelik oluştururken doldurmuş olduğunuz mail adresi ve şifre ile giriş yapmayı unutmayınız. <br /><br />

Sisteme üye değilseniz hemen şimdi <SPAN style="text-decoration:underline;"><a href="index.php?page=giris">buraya tıklayarak üye ola bilirsiniz</a>.</SPAN> <br /><br />Üyeliğiniz varsa aşağıda belirtilen bilgileri eksiksiz doldurmanız gerekmektedir.<br /> Her hangi bir problem yaşıyorsanız <span style="text-decoration:underline;">+90 0216 305 01 25</span> nolu telefonu araya bilir yada <strong style="text-decoration:underline; color:#039;"><a href="mailto:destek@mottotranslation.com">destek@mottotranslation.com</a></strong> adresine 7/24 mail atabilirsiniz.</p><br /><br />
	




<form action="" method="post">
        	<?php if($hata){ echo '<div class="alert alert-danger">'.$hata.'</div>'; } ?>
        	<label>Eposta Adresiniz</label>
        	<input class="form-control" name="eposta" type="email" placeholder="E posta Adresiniz...">
        	<label style="margin-top:20px;">Şifreniz</label>
        	<input class="form-control" name="sifre" type="password" placeholder="Şifreniz...">
            <input name="islem" type="hidden" value="giris">
            <div style="margin-top:10px;">
                <a href="sifremiunuttum.php" class="blink fl">Şifremi Unuttum!</a> - 
                <a href="yenihesap.php" class="blink fl" style="margin-left:10px;">Hesap Oluştur</a>
               
               <br />
                <div align="center"><input  class="btn fr" type="submit" value="KAYDET VE GİRİŞ YAP"></div>
                
            	<div class="fc"></div>
            </div>
        </form>
 <br /> <br />









</div>

<?php include('inc/alt.php')?>
