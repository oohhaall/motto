<?php 
	/// Dataları cekip kayit edilecegi bölüm
	require_once('inc/ayar.php');
	if($_POST){
			$var_list = json_decode($_POST["dosya_list"],true);

	$siparisler = $DB->qry("INSERT INTO siparis(dosya_list,ceviri_text,serviceTypeId,fileLanguageId,interpretLanguageId,qualityTypeId,categoryTypeId,durationTypeId,extraService_1,extraService_2,extraService_3,description) VALUES('".json_encode($var_list,true)."','".$_POST["ceviri_text"]."','".$_POST["serviceTypeId"]."','".$_POST["fileLanguageId"]."','".json_encode($_POST["interpretLanguageId"],true)."','".$_POST["qualityTypeId"]."','".$_POST["categoryTypeId"]."','".$_POST["durationTypeId"]."','".$_POST["extraService_1"]."','".$_POST["extraService_2"]."','".$_POST["extraService_3"]."','".$_POST["description"]."')",4);
		
}


?>