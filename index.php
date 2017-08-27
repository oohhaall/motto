<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');

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
<?php include('inc/ust.php'); ?>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        
        
            
            
              <?php echo $slaytStr; ?>






        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>


	<div class="slider_alt">
    	<div class="container">
    		<div class="left_title">


<div class="text-slider animate-fluid-elements">

  <div class="item active">
  <p>MoTTo Müşteri Yorumları :  <a href="musteri-yorumlari.php">MoTTo ile çalışmaktan memnunuz herkese de tavsiye ediyoruz.</a></p>
  </div>
  <div class="item hidden">
  <p>MoTTo Müşteri Yorumları :  <a href="musteri-yorumlari.php">MoTTo ile çalışmaktan memnunuz herkese de tavsiye ediyoruz.</a></p>
  </div>
</div>
            </div>
            
            
            
            <div class="right_title">Kalite Sertifikalarımız:<a src="images/profil.png">ISO 9001-2000 </a> <a href="#">EN15038-2009</a></div>
    	</div>
<div class="clear"></div>    
    </div>

  
<!--SLAYT-->  





<!--HİZMETLERİMİZ-->

<div class="gnl">
	<div class="container">
    	<div class="hzmt">
    	<h3 class="gnl_title">HİZMETLERİMİZ</h3>
        <p class="title_content">Sizi dinliyoruz... Çeviri ihtiyacınızı doğru şekilde<br /> 
		belirlemenize yardımcı oluyoruz… 
        </p>
        </div>
        
        <img class="hz_bg" src="images/hz_bg.png" />
		<div class="clear"></div>
        
<div class="child">        
        <div class="hz_box">
        	<img src="images/icon.png" />
            <h4>Sizi Dinliyoruz...</h4>
            <p>Çeviri ihtiyacınızı doğru şekilde belirlemenize yardımcı oluyoruz.<br > 
Böylece doğru hizmeti uygun ücrete.<br >  almanızı sağlıyoruz. </p>
        </div>
        
         <div class="hz_box">
        	<img src="images/icon_2.png" />
            <h4>Teknolojiyi seviyoruz! </h4>
            <p>Bilgisayar Destekli Çeviri Araçları'nı (CAT) kullanmadan çeviri yapmıyoruz! Gelişen teknolojiyi takip ederek sadece tek bir<br >  çeviri aracına bağlı kalmıyoruz</p>
        </div>
        
        <div class="hz_box">
        	<img src="images/icon_3.png" />
            <h4>İşinizi benimsiyoruz! </h4>
            <p>Zamanınızın ne kadar değerli olduğunun bilincindeyiz. Belirttiğimiz sürelerde dosyalarınızı teslim ediyoruz. Unutmayın ki işinizi aksatmak için değil kolaylaştırmak </p>
        </div> 
<div class="clear"></div>               
</div>        
               
              
    </div>
</div>


 <!--HİZMETLERİMİZ-->   
 
 
 
 
 
<!--MAVİ ALAN -->
 
 
<?php include('inc/calisma.php')?> 
 

<!--MAVİ ALAN -->
 




<!--BİZ SİZİ ARAYALIM-->

<div class="cont">
		<div class="container">
    	<div class="hzmt">
    	<h3 class="gnl_title">Biz sizi arayalım...</h3>
        <p class="title_content">İletişim bilgilerinizi bırakın, müşteri temsilcilerimiz<br /> 
sizi arayarak dilediğiniz konuda yardımcı olsun
        </p>
        </div>
		<div class="clear"></div>  
        
        <section class="contact-wrap">
          <form action="" class="contact-form">
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">ADINIZ</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">SOYADINIZ</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">E-POSTA</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">TELEFON</label>
                <input type="text" class="form-control">
              </div>
            </div>    
            
            <div class="col-sm-12">
              <div class="input-block">
              <input type="file" id="file" name="myfiles[]" multiple />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="input-block textarea">
                <label for="">MESAJINIZ</label>
                <textarea rows="3" type="text" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <button class="square-button">KADET VE GÖNDER</button>
            </div>
          </form>
        </section>
        
        
 		        
        
		</div>
        
        
        <div class="clear"></div> 
</div>

<?php include('inc/alt.php')?>


<!--BİZ SİZİ ARAYALIM-->
           