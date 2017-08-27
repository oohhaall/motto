<?php
function myError(){return mysql_error();}
if (!isset($_SESSION)){session_start();}
function STR($SgDgr, $SgTip, $SgBln = "", $SgBlm = "") {if (PHP_VERSION < 6) { $SgDgr = get_magic_quotes_gpc() ? stripslashes($SgDgr) : $SgDgr;} $SgDgr = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($SgDgr) : mysql_escape_string($SgDgr); switch ($SgTip) { case "text": $SgDgr = ($SgDgr != "") ? "'" . $SgDgr . "'" : "NULL"; break; case "long": case "int": $SgDgr = ($SgDgr != "") ? intval($SgDgr) : "NULL"; break; case "double": $SgDgr = ($SgDgr != "") ? doubleval($SgDgr) : "NULL"; break; case "date": $SgDgr = ($SgDgr != "") ? "'" . $SgDgr . "'" : "NULL"; break; case "defined": $SgDgr = ($SgDgr != "") ? $SgBln : $SgBlm; break; } return $SgDgr; }

function git($u){header('Location: '.$u); exit();}
function dgs($s){$s = str_replace(" ","",$s);$s = str_replace("ð","g",$s);$s = str_replace("Ð","g",$s);$s = str_replace("ü","u",$s);$s = str_replace("Ü","u",$s);$s = str_replace("ý","i",$s);$s = str_replace("Ý","i",$s);$s = str_replace("þ","s",$s);$s = str_replace("Þ","s",$s);$s = str_replace("ç","c",$s);$s = str_replace("Ç","c",$s);$s = str_replace("ö","o",$s);$s = str_replace("Ö","o",$s);$s = str_replace("'","-",$s);return $s;}
function b($s){return ($s=="")?false:true;}
function k($s,$d){return ($s==$d)?true:false;}
function kis($s,$k){if(mb_strlen($s,'utf-8')>$k){return mb_substr($s,0,$k,'utf-8').'...';}else{return $s;}}
function rsk($r,$y,$d=''){return (is_file($d.'resim/'.$r))?$r:$y;}
function rkm($r){return str_replace(',','.',number_format($r));}
function urlKnt($url) {return (($fp = @fopen($url, 'r')) === false) ? false : @fclose($fp);}
function trhGun($t){
	$t = str_replace('Sunday','Pazar',$t);
	$t = str_replace('Monday','Pazartesi',$t);
	$t = str_replace('Tuesday','Salı',$t);
	$t = str_replace('Wednesday','Çarşamba',$t);
	$t = str_replace('Thursday','Perşembe',$t);
	$t = str_replace('Friday','Cuma',$t);
	$t = str_replace('Saturday','Cumartesi',$t);	
	return $t;
}
function trhAy($t){ return str_replace(array('January','February','March','April','May','June','July','August','September','October','November','December'),array('Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'),$t);}


function trhDon($t,$a='.'){return implode('-',array_reverse(explode($a,$t)));}
function trhBcm($t){
	$e = explode('-',$t);
	$y = explode('-',date('Y-m-d'));
	//global $aylar;
	if($e[0] == $y[0]){
		if(intval($e[1]) < intval($y[1])){
				//return (intval($y[1]) - intval($e[1])).' Ay Önce';
				return implode('.',array_reverse($e));
			}else if(intval($e[2]) < intval($y[2])){
				$f = intval($y[2]) - intval($e[2]);
				return ($f==1)?'Dün':$f.' Gün Önce';
				}else{
					return 'Bu Gün';
					}
	}else{
		return implode('.',array_reverse($e));
	}

}
/////////////Errey ve Fankþýn/////
$HATALAR = array();
function hatavar($h){global $HATALAR; $HATALAR[] = $h;}
function hataGoster(){
	global $HATALAR;
	if(count($HATALAR)>0){
		$hStr = '<div class="hata">';
		foreach($HATALAR as $hNo=>$h){$hStr .= '<li>'.$h.'</li>';}
		$hStr .= '</div>';
		return $hStr;
	}else{
		return false;	
	}	
}
function mailAt($alan,$konu,$siteEmail,$mesajHtml,$mesajTxt=""){
/*	require_once("class.phpmailer.php");
	$mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->From     = $siteEmail; 
    $mail->Sender   = $siteEmail;  
    $mail->ReplyTo  = $siteEmail;  
    $mail->FromName = $konu;  
    $mail->Host     = "mail.pistonapps.com"; 
    $mail->SMTPAuth = true;  
    $mail->Username = "bilgi@pistonapps.com"; 
    $mail->Password    = "b123456b";
    $mail->WordWrap = 50;  
    $mail->IsHTML(true); 
	$mail->CharSet = 'utf-8';
    $mail->Subject  = $konu;      
    $mail->Body = $mesajHtml;
	if(!empty($_FILES['dosya']['name'])){
		$File  = fopen($_FILES['dosya']['tmp_name'], "r");
		$FileContent = fread($File,filesize($_FILES['dosya']['tmp_name']));
		fclose($File);
		$mail->AddStringAttachment($FileContent,$_FILES['dosya']['name']);
	}
	if(!empty($_FILES['vesikalik']['name'])){
		$File  = fopen($_FILES['vesikalik']['tmp_name'], "r");
		$FileContent = fread($File,filesize($_FILES['vesikalik']['tmp_name']));
		fclose($File);
		$mail->AddStringAttachment($FileContent,$_FILES['vesikalik']['name']);
	}
	if(!empty($_FILES['boydan']['name'])){
		$File2  = fopen($_FILES['boydan']['tmp_name'], "r");
		$FileContent2 = fread($File2,filesize($_FILES['boydan']['tmp_name']));
		fclose($File2);
		$mail->AddStringAttachment($FileContent2,$_FILES['boydan']['name']);
	}
    $mail->AltBody = $mesajTxt;  
    $mail->AddAddress($alan);  
	if(!$mail->Send()){echo 'Mail Gönderilemedi : '.$mail->ErrorInfo;  exit; }
    $mail->ClearAddresses();  

	
	ini_set('sendmail_from', $siteEmail);
	$htmlFormat = $mesajHtml;
	$headers  = 'MIME-Version: 1.0'."\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-9'."\r\n";
	$headers .= 'To: '.$_POST['ad'].' '.$_POST['soyad'].' <'.$alan.'>' . "\r\n";
	$headers .= 'From: www.seranit.com.tr <'.$siteEmail.'> '."\r\n";
	//$headers .= 'Cc: '.$siteEmail. '' . "\r\n";
	//$headers .= 'Bcc: '.$siteEmail.'' . "\r\n";
	mail($alan,$konu,$htmlFormat,$headers);
	
*/	

ini_set('sendmail_from', $siteEmail);	

// subject
$subject = 'Birthday Reminders for August';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Additional headers
$headers .= 'To: Mary <mary@example.com>' . "\r\n";
$headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";

// Mail it
mail($alan, $konu, $mesajHtml, $headers);	
	
}

?>