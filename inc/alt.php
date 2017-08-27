<footer>
<?php include('inc/referanslar.php') ?>





<div class="footer" id="">
	<div class="container">
    
<div class="child">    
    	<div class="f_box">
        	<img src="images/f_logo.png" />
            <p>İşinizin gereksinimlerinizi anlıyor olmamız, 
işimize olan bağlılığımız, farklı kültürlere olan 
hassasiyetimiz ve "yapabiliriz" ilkemiz bizi diğer 
firmalardan ayrıcalıklı kılıyor.<br />
Yenilikçi, kaliteli ve çözüm odaklı olma 
özelliklerimiz ile bu zorlu süreçte 
sizi yalnız bırakmıyoruz…</p>
        	
        </div>
    
 
    	<div class="f_box">
			<h3>E - Bülten Üyeliği</h3>
            <p>Takipte kalın ve şimdi e-bültenimize üye olun!
İlk üyelikte %10 İNDİRİM fırsatı!</p>

                <form action="" method="post" role="form">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <input style="    font-size: 12px;" class="form-control" type="text" id="" name="" placeholder="E-posta adresinizi yazıp, hemen katılın">
                    </div>
                    <input type="submit" value="GÖNDER" class="btn btn-large btn-primary" />
              </form>

        	
        </div> 
 
 
    	<div class="f_box">
            <h3>Sosyal Medya</h3>
            <p>MoTTo Çeviri Firması olarak sosyal medyanın
en sık kullanılan mecralarında 
kulanıcılarla bir araya geliyoruz. <br /><br />

Bizi;  Facebook‘ta beğenebilir,
Twitter‘da takip edebilir,Instagram‘da 
fotoğraflarımıza göz gezdirebilir,
Linkedin'da firmamızı takip edebilirsiniz, 
</p>
  

<a href="#"><img src="images/f.png" /></a>
<a href="#"><img src="images/t.png" /></a>
<a href="#"><img src="images/l.png" /></a>
<a href="#"><img src="images/i.png" /></a>

        </div>
        
        
</div>         
    
 <div class="clear"></div>   
    
<div class="border"></div>


<div class="footer_m">
        	<a class="active" href="index.php?page=index">Anasayfa</a>
            <a href="index.php?page=hakkimizda">Hakkımızda</a>
            <a href="index.php?page=hizmetler">Hizmetler</a>
            <a href="index.php?page=neden_motto">Neden MOTTO</a>
            <a href="index.php?page=ceviri_alanlari_ve_dilleri">Çeviri Alanları ve Dilleri</a>
            <a href="index.php?page=iletisim">İletişim</a>
 <div class="clear"></div>  
</div>
  <div class="clear"></div>     
    
  
  
  <p class="copy">Copyright 2014 - 2017 © Site içerisinde kullanılan tüm materyallerin kullanım hakkı MoTTo Translation'a aittir. İzinsiz kopyalanamaz ve kullanılamaz.</p>
  
  
    
    </div>  
</div>

</footer>











<!-- Latest compiled and minified JavaScript -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>


    <script src="js/app.min.js"></script>
    <!--<script src="js/jquery.fileuploader.min.js"></script>-->
    <script src="js/jquery.fileuploader.js"></script>
        
                
    <script type="text/javascript">
        jQuery(document).ready(function() {
            /*Order.init({
                selectedTargetLanguages: '0',
                displayThanksModal: 0
            });*/
        });
    </script>
<script src="js/bootstrap.min.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/select2.min.js"></script>
<script src="js/waitMe.min.js"></script>

<script src="js/script.js"></script>
<script src="js/jquery.fancybox.min.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/2.1.6/jquery.cycle2.min.js'></script>


    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		 effect: 'fade',
		 autoplay:3000,
		 direction: 'vertical'

    });
	

$('.text-slider').cycle({
  speed: 600,
  slides: '> .item',
  fx: 'none'
});


$('.text-slider').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
  $(outgoingSlideEl).removeClass('active').addClass('hidden');
});

$('.text-slider').on('cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
  $(incomingSlideEl).removeClass('hidden').addClass('active');
});	
	
	
	
    </script>
    

</body>
</html>