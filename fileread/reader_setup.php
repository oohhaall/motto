<?php 

require_once "word/class.filetotext.php";
require_once 'pdf/autoload.php';
require_once 'excel/php-excel-reader/excel_reader2.php';
require_once 'excel/SpreadsheetReader.php';
require_once 'text/function.php';




$son_text = "";
function words_imp($value, $key)
{
	global $son_text;
    $son_text .=" ".$value;
}
function word_count($file){
$inf = pathinfo($file);

switch ($inf["extension"]) { /// formatlarına göre okuyoruz dosyaları arttırılabilir
		case 'doc':
		case 'docx':
			$docObj = new Filetotext($file);
			$return = $docObj->convertToText();
			$return =  explode("Y, EliH.0a", $return);
			return str_word_count($return["0"]);
		break;
		
		case "pdf":
			$parser = new \Smalot\PdfParser\Parser();
			$pdf    = $parser->parseFile($file);
			$text = $pdf->getText();
			return  str_word_count($text);
		break;

		case "xls":
		case "xlsx":
			$son_text = "";
			$Reader = new SpreadsheetReader($file);
			foreach ($Reader as $Row)
			{
				array_walk_recursive($Row, 'words_imp');
			}
			return str_word_count($son_text);
		break;

		case "txt":
			return str_word_count(read_text($file));
		break;
	}

}


?>