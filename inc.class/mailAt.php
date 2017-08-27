<?php
function mailAt($alan,$konu,$siteEmail,$mesajHtml,$mesajTxt=""){
	$siteEmail = "bilgi@kiraliksamdan.com";
	require_once("class.phpmailer.php");
	$mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->From     = $siteEmail; 
    //$mail->Sender   = $siteEmail;  
    //$mail->ReplyTo  = $siteEmail;  
    $mail->FromName = $konu;  
    $mail->Host     = "mail.kiraliksamdan.com"; 
    $mail->SMTPAuth = true;  
    $mail->Username = "bilgi@kiraliksamdan.com"; 
    $mail->Password    = "B12345b";
    $mail->WordWrap = 50;  
    $mail->IsHTML(true); 
	$mail->CharSet = 'utf-8';
    $mail->Subject  = $konu;      
    $mail->Body = $mesajHtml;
    $mail->AltBody = $mesajTxt;
	if(!empty($_FILES['resim']['name'])){
		$File = fopen($_FILES['resim']['tmp_name'], "r");
		$FileContent = fread($File,filesize($_FILES['resim']['tmp_name']));
		fclose($File);
		$mail->AddStringAttachment($FileContent,$_FILES['resim']['name']);
	}  
	$alanlar = explode(',',$alan);
	foreach($alanlar as $aln){$mail->AddAddress($aln); }
	if(!$mail->Send()){echo 'Mail Gönderilemedi : '.$mail->ErrorInfo;  exit; }
    $mail->ClearAddresses();  

}

?>