<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');

if($GRS){ header('Location: ./'); exit; }

if($_POST['islem'] == 'sifremiunuttum'){

	if(!empty($_POST['eposta'])){
		$bilgi = $DB->qry("SELECT * FROM uyeler WHERE eposta=".$DB->str($_POST['eposta'],'text'),4);
		if($bilgi['id']){
			$msjHtml ='
				Merhaba;<br>
				'.$bilgi['adSoyad'].'<br>
				Şifreniz : '.$bilgi['sifre'].'<br><br>
				
				<a href="http://www.kiraliksamdan.com/giris.php">Giriş yapmak için buraya tıklayın.</a>
				
			';
			require_once('inc.class/mailAt.php');
			mailAt($bilgi['eposta'],'Şifreniz - Kiralık Şamdan','bilgi@kiraliksamdan.com',$msjHtml,$msjHtml);	
			$gonderildi = 'Şifreniz eposta adresinize gönderilmiştir.';
		}else{
			$hata = 'Girdiğiniz eposta adesine bağlı hesap bulunmadı!';
		}
		
	}else{
		 $hata = 'Lütfen eposta adesinizi girin!';
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

<h3>Sisteme Giriş..</h3> 

<p>Merhaba, Sisteme Giriş Yaptıktan sonra fiyat teklifi ala bilir ve geçmiş döneme ait faturalarınızı göre bilir ayrıca teslim edilen işlerinizi direk sistem üzerinden teslim ala bilirsiniz.<br /><br />

Sisteme üye değilseniz hemen şimdi buraya tıklayarak üye ola bilirsiniz. üyeliğiniz varsa aşağıda belirtilen bilgileri eksiksiz doldurmanız gerekmektedir. her hangi bir problem yaşıyorsanız +90 0216 305 01 25 nolu telefonu araya bilir yada destek@mottotranslation.com adresine 7/24 mail atabilirsiniz.</p>

<h1>Şifremi Unuttum!</h1>
	
    	<form action="" method="post">
			<?php if($gonderildi){ echo '<div class="alert alert-success">'.$gonderildi.'</div>'; } ?>
        	<?php if($hata){ echo '<div class="alert alert-danger">'.$hata.'</div>'; } ?>
        	<label>Eposta Adresiniz</label>
        	<input class="form-control" name="eposta" type="email" placeholder="Eposta Adresiniz...">
            <input name="islem" type="hidden" value="sifremiunuttum">
            <div style="margin-top:10px;">
                <input class="btn" type="submit" value="Gönder">
            </div>
        </form>



 <br /> <br />









</div>


<?php include('inc/alt.php')?>