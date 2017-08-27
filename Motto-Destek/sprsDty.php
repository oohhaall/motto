<?php 
require_once('inc/genel.php');
require_once('inc/guvenlik.php');

$veri = $DB->qry("SELECT *, DATE_FORMAT(tarih, '%d.%m.%Y / %H:%i') as trh FROM siparis WHERE id=".STR($_GET['sid'],'int'),4);

$il = $DB->qry('SELECT * FROM iller WHERE id='.$DB->str($veri['sehir'],'int'),4);

$ilce = $DB->qry('SELECT * FROM ilceler WHERE id='.$DB->str($veri['ilce'],'int'),4);


?>
<table id="ekleTablo" width="800" border="0" cellspacing="1" cellpadding="2">
  <tr>
    <td colspan="2" align="left"><strong>Sipariş Bilgileri</strong></td>
  </tr>
   
  <tr>
    <td width="151" align="left">Üye Bilgisi</td>
    <td align="left"><?php echo $veri['adSoyad']; ?></td>
  </tr>
  <tr>
    <td align="left">Üye Adresi</td>
    <td align="left"><?php echo $veri['adres']; ?></td>
  </tr>
  
  <tr>
    <td align="left">Üye Mail Adresi</td>
    <td width="638" align="left"><?php echo $veri['mail']; ?> </td>
  </tr>

<tr>
    <td width="151" align="left">Üye Telefon</td>
    <td align="left"><?php echo $veri['telefon']; ?></td>
  </tr>
  <tr>
    <td colspan="2" align="left"><strong>Üye Sipariş Bilgileri</strong></td>
  </tr>
  
  
  <tr>
    <td align="left">Metin Girişi</td>
    <td align="left"><?php echo $veri['ceviri_text']; ?></td>
  </tr>
  <tr>
    <td align="left">Ek Hizmet</td>
    <td align="left"><?php echo $veri['serviceTypeId']; ?></td>
  </tr>
  <tr>
    <td align="left">Dil Şeçimi</td>
    <td align="left"><?php echo $veri['fileLanguageId']; ?></td>
  </tr>
  <tr>
    <td align="left">Uzmanlık Alanı</td>
    <td align="left"><?php echo $veri['qualityTypeId']; ?></td>
  </tr>
  <tr>
    <td align="left">Sipariş Türü</td>
    <td align="left"><?php echo $veri['categoryTypeId']; ?></td>
  </tr>
  <tr>
    <td align="left">Teslimat Hızı</td>
    <td align="left"><?php echo $veri['durationTypeId']; ?></td>
  </tr>
  <tr>
    <td align="left">Ek Hizmetler 1 </td>
    <td align="left"><?php echo $veri['extraService_1']; ?></td>
  </tr>
   <tr>
   <tr>
    <td align="left">Ek Hizmetler 2 </td>
    <td align="left"><?php echo $veri['extraService_2']; ?></td>
  </tr>
   <tr>
   <tr>
    <td align="left">Ek Hizmetler 3</td>
    <td align="left"><?php echo $veri['extraService_3']; ?></td>
  </tr>
   <tr>
    <td align="left">Tercümana İletilecek Not</td>
    <td align="left"><?php echo $veri['description']; ?></td>
  </tr>
    <tr>
    <td align="left">Fiyat</td>
    <td align="left"><?php echo $veri['fiyat']; ?></td>
  </tr>
   <tr>
    <td align="left">Sipariş Tarihi / Saati</td>
    <td align="left"><?php echo $veri['tarih']; ?></td>
  </tr>
</table>
