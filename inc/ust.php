</head>
<body>


<!--MASAÜSTÜ HEADER-->
<header class="header">
	<div class="container"> 
    
    <a href="./"><img class="logo" src="images/logo.png"></a>
        
        <div class="ust_hd">
         <?php echo ($GRS)?'<a class="giris_uye" href="'.$self.'?cikis" >Çıkış</a>':'
		 <a class="giris_uye" href="giris.php">Giriş</a>'; ?>
        <?php if($GRS){ echo '<a class="giris_uye" href="hesabim.php">Merhaba: '.$UB['adSoyad'].'</a>';} ?>
        	
            <a  href="siparislerim.php" class="giris_uye" style="    margin-left: 14px;">Siparişlerim</a>
            
            
            <div class="select-style">
              <select>
                <option value="dilsec">DİL SEÇİMİ</option>
                
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
            </div>
            
            <a href="fiyat-hesaplama.php" class="fiyat_hesaplama">FİYAT HESAPLAMA</a>
                        
        </div>
        
        
        <div class="e_menu">
        	<a   <?php echo $Menu1 ?> href="./">Anasayfa</a>
            <a  <?php echo $Menu2 ?> href="hakkimizda.php">Hakkımızda</a>
            <a <?php echo $Menu3 ?>  href="hizmetler.php">Hizmetler</a>
            <a <?php echo $Menu4 ?> href="neden-motto.php">Neden MOTTO</a>
            <a <?php echo $Menu5 ?> href="ceviri-alanlari-ve-dilleri.php">Çeviri Alanları ve Dilleri</a>
            <a <?php echo $Menu6 ?> href="iletisim.php" style="border:none;">İletişim</a>
        </div>
        
        
     <div class="clear"></div>   
    </div>
</header>
<!--MASAÜSTÜ HEADER-->



<!--MOBİL MENU-->

<header class="m_header">
	
 <a href="index.php?page=index"> <img class="m_logo" src="images/logo.png">  </a>
  
  
            <div class="select-style_m">
              <select>
                <option value="volvo">TR</option>
                <option value="saab">TR</option>
                <option value="mercedes">EN</option>
                <option value="audi">RU</option>
              </select>
            </div>  
  
    
  <div class="button_container">
  <div class="name_container">
    <span id="menu_name">ME<br>NU</span>
    <span id="open_name">OP<br>EN</span>
  </div>
  <span id="line_one"></span>
  <span id="line_two"></span>
</div>

<div class="menu">
  <nav>
        	<a class="active" href="index.php?page=index">Anasayfa</a>
            <a href="index.php?page=hakkimizda">Hakkımızda</a>
            <a href="index.php?page=hizmetler">Hizmetler</a>
            <a href="index.php?page=neden_motto">Neden MOTTO</a>
            <a href="index.php?page=ceviri_alanlari_ve_dilleri">Çeviri Alanları ve Dilleri</a>
            <a href="index.php?page=iletisim">İletişim</a>
            <a href="index.php?page=fiyat-hesaplama">Fiyat Hesaplama</a>
            <a data-fancybox data-type="ajax" data-src="pages/ajax.html" href="javascript:;">Üye Girişi / Üye Ol</a>
  </nav>
  <span class="division_line"></span>
  <div class="icon_container">
    <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
    <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
    <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
  </div>
</div>


<div class="clear"></div> 
</header>



<!--MOBİL MENU-->















