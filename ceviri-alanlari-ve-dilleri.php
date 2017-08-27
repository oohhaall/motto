<?php
require_once('inc/ayar.php');
//require_once('inc.class/qryClass.php');
$Menu5 = ' class="active';
?><!--PAGE TITLE-->

<?php $km = $DB->qry('SELECT * FROM ceviri  WHERE id='.$DB->str($_GET['pno'],'int'),4);?>

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

<div class="page-title page-title-four"></div>




<div class="container padding">



  <div class="accordion mobil-sol-menu">
    <div class="menu-head">
      <h3>Çeviri Dilleri</h3>
      <div class="plus-minus">
       <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
    		<div class="data">
        	 <?php echo $ceviriMenuStr; ?>
            </div>
  </div>


  	<div class="left_menu menu_list_none">
    	<h3>Çeviri Dilleri</h3>
        <div class="menu_list">
        	 <?php echo $ceviriMenuStr; ?>
        </div>
    </div>
    
    
    <div class="right_content">
    
        <div class="page_name">
            <a href="#">Ana sayfa</a> >
            <a href="#">Çevri Alanları ve Dilleri</a> >
             <a href="#"><?php echo $km['baslik']; ?></a>
        </div>
    	
        <div class="page-ics">

<?php echo $km['icerik']; ?>
        
        
        
        </div>
        
        
    </div>



      	
</div>



<?php include('inc/alt.php')?>


<!--PAGE TITLE-->