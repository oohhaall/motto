<?php
error_reporting(0);
if (!isset($_SESSION)){session_start();}
    abstract class Database_Object
    {
        protected static $DB_Name;
        protected static $DB_Open;
        protected static $DB_Conn;

        protected function __construct($database, $hostname, $hostport, $username, $password)
        {
            self::$DB_Name = $database;
            self::$DB_Conn = mysql_connect($hostname . ":" . $hostport, $username, $password);
            if (!self::$DB_Conn) { die('Veritabaný Baðlantý Hatasý <br />' . mysql_error()); }
            mysql_select_db(self::$DB_Name, self::$DB_Conn);
        }

        private function __clone() {}

        public function __destruct()
        {
            mysql_close(self::$DB_Conn);  
			//<-- commented out due to current shared-link close 'feature'.  If left in, causes a warning that this is not a valid link resource.
        }
    }

    final class DB extends Database_Object
    {
     //   public static function Open($database = "motto", $hostname = "89.19.29.114", $hostport = "3306", $username = "motto", $password = "NOrd51U0")
	    public static function Open($database = "motto", $hostname = "localhost", $hostport = "3306", $username = "root", $password = "")
        {
            if (!self::$DB_Open)
            {
                self::$DB_Open = new self($database, $hostname, $hostport, $username, $password);
            }
            else
            {
                self::$DB_Open = null;
                self::$DB_Open = new self($database, $hostname, $hostport, $username, $password);
            }
			mysql_query('SET NAMES utf8', self::$DB_Conn);
            return self::$DB_Open;
			
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////
public	function str($SgDgr, $SgTip, $SgBln = "", $SgBlm = "") {
		if (PHP_VERSION < 6) { $SgDgr = get_magic_quotes_gpc() ? stripslashes($SgDgr) : $SgDgr;} $SgDgr = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($SgDgr) : mysql_escape_string($SgDgr); switch ($SgTip) { case "text": $SgDgr = ($SgDgr != "") ? "'" . $SgDgr . "'" : "NULL"; break; case "long": case "int": $SgDgr = ($SgDgr != "") ? intval($SgDgr) : "NULL"; break; case "double": $SgDgr = ($SgDgr != "") ? doubleval($SgDgr) : "NULL"; break; case "date": $SgDgr = ($SgDgr != "") ? "'" . $SgDgr . "'" : "NULL"; break; case "defined": $SgDgr = ($SgDgr != "") ? $SgBln : $SgBlm; break; } return $SgDgr; 
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
private $SQLAR = array();
private $DHATA = false;
private $DHATALAR = array();
private $sayfaStr = '';
///////////////////////////////////////////////////////////////////////////////////////////////////////
        public function qry($sql, $format = 0, $tip=false) {
            $query = mysql_query($sql, self::$DB_Conn) OR die(mysql_error());
            switch ($format)
            {
                case 1:// Array dönüþ
                    while ($rr[]=mysql_fetch_assoc($query)){$rr[0]++;}
       				mysql_free_result($query);
					array_pop($rr);
      				return $rr;
                    break;
                case 2:// Verilen tipe (Veritabaý Alaný) göre arraye at
                    while ($rv=mysql_fetch_assoc($query)){$rr[$rv[$tip]][] = $rv;}
       				mysql_free_result($query);
					//array_pop($rr);
      				return $rr;
                    break;
                case 3:// Satýr Sayýsý Dönüþ
                    $query = mysql_num_rows($query);
                    return $query;
					break;
                case 4:// Tek Kayýt Dönüþü
                    $query = mysql_fetch_assoc($query);
                    return $query;
					break;
				case 5:// Direk Array Dönüþ
				    while ($rw=mysql_fetch_row($query)){
						foreach($rw as $r){$rr[]=$r;}
						}
       				mysql_free_result($query);
					return $rr;
				case 6:// Son Kayit
					return mysql_insert_id(self::$DB_Conn);
                default:
                    return $query;
            }
			mysql_close(self::$DB_Conn);  
        }
//////////////////////////////////////////////////////////////////////////////////////Sayfaki Dönüþ
		public function syf($sql, $strSys, $syfUrl, $syfNo) {
			$syfNo = $this->str($syfNo,"int");
			$kytSys = $this->qry($sql,3);
			if($kytSys > $strSys){
				$syfTplm = ceil($kytSys/$strSys)+1;
				if($syfNo < 1){$syfNo=1;} 
				if($syfNo > $syfTplm){$syfNo=($syfTplm-1);} 
				$syfBsl = ($syfNo-1) * $strSys;
				$qStrL = sprintf('%s LIMIT %d, %d', $sql, $syfBsl, $strSys);
				if($syfTplm>2){
					$syfNoStr = '<div class="sayfaNo">'.(($syfNo > 1)?'<a href="'.$syfUrl.($syfNo - 1).'"><span>Önceki</span></a>':'');
					for($syfN=1; $syfN < $syfTplm; $syfN++){
						$syfC=($syfNo==$syfN)?' id="C"':'';
						$syfCls=($syfNo==$syfN)?' class="c"':'';
						$syfNoStr.='<a href="'.$syfUrl.$syfN.'"'.$syfCls.'><span'.$syfC.'>'.$syfN.'</span></a>';
					}
					$syfNoStr.=((($syfNo + 1) != $syfTplm)?'<a href="'.$syfUrl.($syfNo + 1).'"><span>Sonraki</span></a>':'').'</div>';
				}
				$this->sayfaStr = $syfNoStr;
			}else{
				$qStrL = $sql;
			}
			return $this->qry($qStrL,1);
		}
		////////////////////////////////Sayfa Numaralarý Dönüþ
		public function syfNo() {
			return $this->sayfaStr;
			$this->sayfaStr = '';
		}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        public function kln($alan,$deger,$tur="text",$bos=false) {
			if(($deger=="")&&($bos!=false)){$this->DHATA = true; $this->DHATALAR[]=$bos;}
			$this->SQLAR[0][]=$alan;
			$this->SQLAR[1][]=$this->str($deger,$tur);
        }
		public function whr($alan,$deger,$tur="int",$sart="=") {
			$this->SQLAR[3][]=$alan.$sart.$this->str($deger,$tur);
        }
		public function ins($tbl,$lct='',$drm='ok',$mins=false) {
			if($this->DHATA == false){
				$insStr = 'INSERT INTO '.$tbl.' ('.implode(', ',$this->SQLAR[0]).') VALUES ('.implode(', ',$this->SQLAR[1]).')';
				$this->SQLAR = NULL;
				$query = mysql_query($insStr, self::$DB_Conn) OR die(mysql_error());
				$miId = mysql_insert_id();
				mysql_close(self::$DB_Conn); 
				$_SESSION['KAYIT'] = $drm;
				if($lct!==false){
					$lctUrl = ($lct=='')?$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']:$lct;
					if($mins){$lctUrl .= $miId;}
					header('Location: '.$lctUrl); exit;
				}

			//return $insStr;
			}
        }
		public function upt($tbl,$lct='',$drm='ok') {
			if($this->DHATA == false){
				function bir($a1, $a2){	return $a1.' = '.$a2;}
				$bir = array_map("bir", $this->SQLAR[0], $this->SQLAR[1]);
				$whrStr = (count($this->SQLAR[3])>0)?' WHERE '.implode(' AND ', $this->SQLAR[3]):'';
				$uptStr = 'UPDATE '.$tbl.' SET '.implode(', ', $bir).$whrStr;
				$this->SQLAR = NULL;
				$query = mysql_query($uptStr, self::$DB_Conn) OR die(mysql_error());
				mysql_close(self::$DB_Conn); 
				$_SESSION['KAYIT'] = $drm;
				if($lct!==false){
					$lctUrl = ($lct=='')?$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']:$lct;
					header('Location: '.$lctUrl); exit;
				}
			//return $uptStr;
			}
        }
		public function dsy($alanAdi, $fieldAdi, $path, $maxSize, $eski=false){
				$userfile = $_FILES[$fieldAdi]['name'];
				$file_size = $_FILES[$fieldAdi]['size'];
				$file_temp = $_FILES[$fieldAdi]['tmp_name'];
				$file_err = $_FILES[$fieldAdi]['error'];
				$file_type = explode('.',$userfile);
				$file_type = end($file_type);
			//////////////////////////////////////////////////////7
				//$maxSize = 2; //MB
				do{
				$randName = mt_rand();
				$file_name = $randName.'.'.$file_type;
				} while(file_exists($path.$file_name));
			////////////////////////////////////////
					$file_type = strtolower($file_type);
					$files = array();
					$files[] = 'jpeg';
					$files[] = 'jpg';
					$files[] = 'gif';
					$files[] = 'png';
					$files[] = 'pdf';
					$files[] = 'zip';
					$files[] = 'rar';
					$files[] = 'xls';
					$files[] = 'xlsx';
					$files[] = 'doc';
					$files[] = 'docx';
					$files[] = 'ppt';
					$key = array_search($file_type, $files);
					$error_count = count($file_error);
			/////////////////////////////////////////
				if(!empty($userfile)) {
					if($file_size > ($maxSize*1000)) {
						$this->DHATA = true;
						$this->DHATALAR[] = ($maxSize>=1000)?'Dosya Boyutu '.($maxSize/1000).' MB dan Fazla Olamaz !':'Dosya Boyutu '.$maxSize.' KB dan Fazla Olamaz !';
					}else if($key === FALSE) {
						$this->DHATA = true;
						$this->DHATALAR[] = 'Geçersiz Dosya !';
					} else if($error_count > 0) {
						$this->DHATA = true;
						for($i = 0; $i <= $error_count; ++$i) {
							$this->DHATALAR[] = 'Dosya Yüklenemedi hata > '.$_FILES['userfile']['error'][$i];
						}
					} else {
						if(move_uploaded_file($file_temp, $path.$file_name)) {
							$dosyaDurum = 'yuklendi';
							if($eski!=false){if(is_file($path.$eski)){unlink($path.$eski);}}
							$this->kln($alanAdi, $file_name);
						} else {
							$this->DHATA = true;
							$this->DHATALAR[] = 'Dosya Yüklenemedi !';
						}
				   }
				}
			}
		public function dosyaDel($dosya,$dizin=""){foreach($dosya as $d){if(is_file($dizin.$d)){unlink($dizin.$d);}}}
		public function hataGoster(){
				if(count($this->DHATALAR)>0){
					$hStr = '<div class="hata">';
					foreach($this->DHATALAR as $hno=>$h){$hStr .= '<li>'.($hno+1).' : '.$h.'</li>';}
					$hStr .= '</div>';
					return $hStr;
				}
			}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////		
    }

?>