-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 30 Tem 2017, 17:11:53
-- Sunucu sürümü: 10.1.21-MariaDB
-- PHP Sürümü: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `motto`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `adm`
--

CREATE TABLE `adm` (
  `id` int(11) NOT NULL,
  `kad` varchar(20) DEFAULT NULL,
  `sfr` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `adm`
--

INSERT INTO `adm` (`id`, `kad`, `sfr`) VALUES
(1, 'a', 'a');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `akategori`
--

CREATE TABLE `akategori` (
  `id` int(11) NOT NULL,
  `kid` int(11) DEFAULT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `anasayfaslayt`
--

CREATE TABLE `anasayfaslayt` (
  `id` int(11) NOT NULL,
  `drm` tinyint(1) DEFAULT '1',
  `sra` int(11) DEFAULT NULL,
  `resim` varchar(255) DEFAULT NULL,
  `link` blob,
  `target` varchar(10) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `profil` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `anasayfaslayt`
--

INSERT INTO `anasayfaslayt` (`id`, `drm`, `sra`, `resim`, `link`, `target`, `baslik`, `icerik`, `profil`) VALUES
(19, 1, 1, '1345580049.jpg', NULL, NULL, 'DOĞRU YERDESİNİZ', 'Sesinizi t&uuml;m d&uuml;nyaya duyurmak ve<br />\r\nbaşarıyı yakalamak i&ccedil;in<br />\r\nDOĞRU yerdesiniz...', '1691447733.png');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ceviri`
--

CREATE TABLE `ceviri` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `drm` tinyint(1) DEFAULT '1',
  `resim` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `ceviri`
--

INSERT INTO `ceviri` (`id`, `sra`, `baslik`, `icerik`, `drm`, `resim`) VALUES
(35, NULL, 'Almanca Çeviri', 'Almanca &Ccedil;eviri', 1, NULL),
(36, NULL, 'Arapça Çeviri', 'Arap&ccedil;a &Ccedil;eviri', 1, NULL),
(37, NULL, 'Arnavutça Çeviri', 'Arnavut&ccedil;a &Ccedil;eviri', 1, NULL),
(38, NULL, 'Azerice Çeviri', 'Azerice &Ccedil;eviri', 1, NULL),
(39, NULL, 'Bangladeşce Çeviri', 'Bangladeşce &Ccedil;eviri', 1, NULL),
(40, NULL, 'Boşnakça Çeviri', 'Boşnak&ccedil;a &Ccedil;eviri', 1, NULL),
(41, NULL, 'Bulgarca Çeviri', 'Bulgarca &Ccedil;eviri', 1, NULL),
(42, NULL, 'Çekçe Çeviri', '&Ccedil;ek&ccedil;e &Ccedil;eviri', 1, NULL),
(43, NULL, 'Çince Çeviri', '&Ccedil;ince &Ccedil;eviri', 1, NULL),
(44, NULL, 'Danca Çeviri', 'Danca &Ccedil;eviri', 1, NULL),
(45, NULL, 'Endonezce Çeviri', 'Endonezce &Ccedil;eviri', 1, NULL),
(46, NULL, 'Ermenice Çeviri', 'Ermenice &Ccedil;eviri', 1, NULL),
(47, NULL, 'Farsça Çeviri', 'Fars&ccedil;a &Ccedil;eviri', 1, NULL),
(48, NULL, 'Fince Çeviri', 'Fince &Ccedil;eviri', 1, NULL),
(49, NULL, 'Flemenkçe Çeviri', 'Flemenk&ccedil;e &Ccedil;eviri', 1, NULL),
(50, NULL, 'Fransızca Çeviri', 'Fransızca &Ccedil;eviri', 1, NULL),
(51, NULL, 'Gürcüce Çeviri', 'G&uuml;rc&uuml;ce &Ccedil;eviri', 1, NULL),
(52, NULL, 'Hırvatça Çeviri', 'Hırvat&ccedil;a &Ccedil;eviri', 1, NULL),
(53, NULL, 'İbranice Çeviri', 'İbranice &Ccedil;eviri', 1, NULL),
(54, NULL, 'İngilizce Çeviri', 'İngilizce &Ccedil;eviri', 1, NULL),
(55, NULL, 'İspanyolca Çeviri', 'İspanyolca &Ccedil;eviri', 1, NULL),
(56, NULL, 'İsveççe Çeviri', 'İsve&ccedil;&ccedil;e &Ccedil;eviri', 1, NULL),
(57, NULL, 'İtalyanca Çeviri', 'İtalyanca &Ccedil;eviri', 1, NULL),
(58, NULL, 'Japonca Çeviri', 'Japonca &Ccedil;eviri', 1, NULL),
(59, NULL, 'Katalanca Çeviri', 'Katalanca &Ccedil;eviri', 1, NULL),
(60, NULL, 'Kazakça Çeviri', 'Kazak&ccedil;a &Ccedil;eviri', 1, NULL),
(61, NULL, 'Kırgızca Çeviri', 'Kırgızca &Ccedil;eviri', 1, NULL),
(62, NULL, 'Korece Çeviri', 'Korece &Ccedil;eviri', 1, NULL),
(63, NULL, 'Kürtçe Çeviri', 'K&uuml;rt&ccedil;e &Ccedil;eviri', 1, NULL),
(64, NULL, 'Latince Çeviri', 'Latince &Ccedil;eviri', 1, NULL),
(65, NULL, 'Lehçe Çeviri', 'Leh&ccedil;e &Ccedil;eviri', 1, NULL),
(66, NULL, 'Letonca Çeviri', 'Letonca &Ccedil;eviri', 1, NULL),
(67, NULL, 'Macarca Çeviri', 'Macarca &Ccedil;eviri', 1, NULL),
(68, NULL, 'Makedonca Çeviri', 'Makedonca &Ccedil;eviri', 1, NULL),
(69, NULL, 'Moğolca Çeviri', 'Moğolca &Ccedil;eviri', 1, NULL),
(70, NULL, 'Moldovca Çeviri', 'Moldovca &Ccedil;eviri', 1, NULL),
(71, NULL, 'Norveççe Çeviri', 'Norve&ccedil;&ccedil;e &Ccedil;eviri', 1, NULL),
(72, NULL, 'Osmanlıca Çeviri', 'Osmanlıca &Ccedil;eviri', 1, NULL),
(73, NULL, 'Özbekçe Çeviri', '&Ouml;zbek&ccedil;e &Ccedil;eviri', 1, NULL),
(74, NULL, 'Portekizce Çeviri', 'Portekizce &Ccedil;eviri', 1, NULL),
(75, NULL, 'Romence Çeviri', 'Romence &Ccedil;eviri', 1, NULL),
(76, NULL, 'Rumca Çeviri', 'Rumca &Ccedil;eviri', 1, NULL),
(77, NULL, 'Rusça Çeviri', 'Rus&ccedil;a &Ccedil;eviri', 1, NULL),
(78, NULL, 'Sırpça Çeviri', 'Sırp&ccedil;a &Ccedil;eviri', 1, NULL),
(79, NULL, 'Slovakça Çeviri', 'Slovak&ccedil;a &Ccedil;eviri', 1, NULL),
(80, NULL, 'Slovence Çeviri', 'Slovence &Ccedil;eviri', 1, NULL),
(81, NULL, 'Süryanice Çeviri', 'S&uuml;ryanice &Ccedil;eviri', 1, NULL),
(82, NULL, 'Taice Çeviri', 'Taice &Ccedil;eviri', 1, NULL),
(83, NULL, 'Tatarca Çeviri', 'Tatarca &Ccedil;eviri', 1, NULL),
(84, NULL, 'Türkçe Çeviri', 'T&uuml;rk&ccedil;e &Ccedil;eviri', 1, NULL),
(85, NULL, 'Türkmence Çeviri', 'T&uuml;rkmence &Ccedil;eviri', 1, NULL),
(86, NULL, 'Ukraynaca Çeviri', 'Ukraynaca &Ccedil;eviri', 1, NULL),
(87, NULL, 'Urduca Çeviri', 'Urduca &Ccedil;eviri', 1, NULL),
(88, NULL, 'Vietnamca Çeviri', 'Vietnamca &Ccedil;eviri', 1, NULL),
(89, NULL, 'Yugoslavca Çeviri', 'Yugoslavca &Ccedil;eviri', 1, NULL),
(90, NULL, 'Yunanca Çeviri', 'Yunanca &Ccedil;eviri', 1, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hizmetler`
--

CREATE TABLE `hizmetler` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `drm` tinyint(1) DEFAULT '1',
  `resim` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `hizmetler`
--

INSERT INTO `hizmetler` (`id`, `sra`, `baslik`, `icerik`, `drm`, `resim`) VALUES
(35, NULL, 'Yazılı Çeviri', '<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<strong>MoTTo</strong>, deneyimli ve teknolojik altyapısı g&uuml;&ccedil;l&uuml; ekibiyle başta teknik, otomotiv, donanım, yazılım, medikal ve hukuk olmak &uuml;zere t&uuml;m alanlarda &ccedil;eviri hizmeti sunmaktadır.</p>\r\n<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	M&uuml;şterilerin kalite beklentilerini karşılayabilecek d&uuml;zeyde bilgi birikimine sahip, teknolojiye hakim &ccedil;evirmen ve redaksiyon ekibimizin yanı sıra, sıfır hata politikasına sahip kalite kontrol ekibimizle sorunsuz &ccedil;evirileri sunuyoruz.</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Uzman proje y&ouml;neticilerimizin başlıca g&ouml;revi sizin isteklerinizi eksiksiz, hatasız ve tam zamanında yerine getirmektir. En acil işlerinizi bile doğru zaman planlamasıyla ve projeye uygun &ccedil;evirmenlerle &ccedil;alışarak kaliteden ve aşağıdaki &ccedil;alışma prensibinden &ouml;d&uuml;n vermeden teslim etmektedirler.</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	&nbsp;</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<strong>Kalıplara bağlı kalmadan m&uuml;şteriye &ouml;zel hizmet politikasıyla genel işleyişimiz;</strong></p>\r\n<ul style=\"margin: 0px; padding-right: 0px; padding-left: 30px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;eviri i&ccedil;in gelen dosyaları inceleyerek, projeye &ouml;zel bir s&ouml;zl&uuml;k oluşturma ve m&uuml;şterinin onayına sunma</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		G&uuml;ncel dilbilgisi ve imla kurallarına uyarak ilerleme</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		Onaylanan s&ouml;zl&uuml;ğe uyarak metin tutarlılığı sağlama</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;eviriden gelen metnin alanına uygun edit&ouml;rler tarafından d&uuml;zenlenmesi</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;evirisi ve d&uuml;zenlemesi biten metinlerin Kalite Kontrol s&uuml;re&ccedil;lerinden ge&ccedil;irilerek başta sayısal hatalar, tutarsızlık, s&ouml;zl&uuml;k ile uyumsuzluk gibi kritik hatalar olmak &uuml;zere t&uuml;m hataların tespit edilerek d&uuml;zeltilmesidir.&nbsp;</li>\r\n</ul>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Size sağlayacağımız &ccedil;eviri hizmetiyle şirketinizi d&uuml;nya &ccedil;apında rahatlıkla temsil edin.<br />\r\n	<br />\r\n	<strong>Kullandığımız programlardan bazıları:</strong><br />\r\n	&nbsp;</p>\r\n<div class=\"clear\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; clear: both; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif;\">\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/1.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/2.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/3.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/4.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/5.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/6.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/7.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/8.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/9.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/10.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div>\r\n		&nbsp;</div>\r\n	<div class=\"clear\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; clear: both;\">\r\n		&nbsp;</div>\r\n	<br />\r\n	<br />\r\n	<p style=\"margin: 0px; padding: 0px; font-family: Ubuntu, sans-serif;\">\r\n		<strong>Hizmet verdiğimiz alanlardan bazıları;</strong></p>\r\n	<ul style=\"margin: 0px; padding-right: 0px; padding-left: 30px; font-family: Ubuntu, sans-serif;\">\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Noter yeminli belge &ccedil;evirileri</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Teknik belge &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Kullanım kılavuzu &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Web sitesi &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Pazarlama/reklam metinleri &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Anket &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Eğitim belgeleri &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Resmi belge &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Tıbbi rapor/epikriz &ccedil;evirisi vb.</li>\r\n	</ul>\r\n</div>\r\n<br />\r\n', 1, NULL),
(36, NULL, 'Sözlü Çeviri', '<div>\r\n	Hemen hemen her sekt&ouml;rde profesyonel hizmet veren s&ouml;zl&uuml; &ccedil;eviri ekibimiz farklı dillerde rahatlıkla iletişim kurabilmenizi sağlar. Sizin i&ccedil;in sağladığımız s&ouml;zl&uuml; &ccedil;evirmenlerin her biri eğitimli profesyonel &ccedil;evirmenlerdir ve &ccedil;alışmalarının kalitesi tescil edilmiştir. S&ouml;zl&uuml; &ccedil;eviri hizmeti bir&ccedil;ok kurumun işleyişi a&ccedil;ısından k&uuml;resel piyasada ve &ccedil;ok k&uuml;lt&uuml;rl&uuml; toplumlarda g&uuml;n ge&ccedil;tik&ccedil;e artan &ouml;nemli bir ihtiya&ccedil;tır. S&ouml;zl&uuml; &ccedil;eviri hizmetlerimiz Ardıl ve Simultane &Ccedil;eviri olmak &uuml;zere ikiye ayrılmaktadır.</div>\r\n<div>\r\n	&nbsp;</div>\r\n<div>\r\n	Ardıl &Ccedil;eviri hizmeti konuşmacının konuşmasına ara vererek terc&uuml;manın o ana kadar s&ouml;ylenenleri &ccedil;evirmesine olanak sağladığı &ccedil;eviri hizmetidir. &Ouml;zel ekipmanlar veya ek maliyetler gerektirmediği i&ccedil;in daha uygun fiyatlı olması nedeniyle k&uuml;&ccedil;&uuml;k toplantılar ve hukuki g&ouml;r&uuml;şmeler i&ccedil;in tercih edilmektedir.</div>\r\n<div>\r\n	Simultane &Ccedil;eviri hizmeti ise konuşmanın eşzamanlı olarak &ccedil;evirmen kabinleri, &ouml;zel ses sistemleri gibi &ouml;zel ekipmanlar kullanılmasıyla dinleyicilere aktarılmasıdır.</div>\r\n', 1, NULL),
(37, NULL, 'Yerelleştirme', '<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Yerelleştirme hizmeti, &ccedil;eviri s&uuml;re&ccedil;lerine ek olarak aşağıdaki adımları da kapsamaktadır;</p>\r\n<ul style=\"margin: 0px; padding-right: 0px; padding-left: 30px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		K&uuml;lt&uuml;rel ve politik olarak hassas metinlerin hedef &uuml;lke k&uuml;lt&uuml;r&uuml; g&ouml;z &ouml;n&uuml;nde bulundurularak &ouml;zenle ele alınması&nbsp;</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		K&uuml;lt&uuml;rel entegrasyon gerektiren metinlerde m&uuml;şteriye &ccedil;eviri alternatifleri sunulması, birlikte alınacak kararın uygulanması&nbsp;</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		Tarih/saat gibi zaman birimleri, para ve &ouml;l&ccedil;&uuml; birimleri, rakam, isim, adres ve benzer &ouml;ğelerin hedef dile uygun hale getirilmesi.</li>\r\n</ul>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	&nbsp;</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Yerelleştirme sayesinde yazılımlarınız ve uygulamalarınız ile bunlara ait dok&uuml;manlar hedef dilin k&uuml;lt&uuml;rel değerlerine uygun olarak yerel halk tarafından rahatlıkla uygulanmasını ve yazılımın kullanılmasına olanak verecek hale getirilir. Yerelleştirme ile k&uuml;resel piyasada daha geniş bir kitleye hitap edebilir, kullanım kolaylığı sağlayarak uygulamalarınız ve/veya yazılımlarınızın kullanılabilirliğini artırabilirsiniz.</p>\r\n<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Yerelleştirme alanında, Orta Doğu&#39;ya a&ccedil;ılan bir kapı olan &uuml;lkemiz jeopolitik olarak b&uuml;y&uuml;k &ouml;nem arz etmektedir. &Ouml;zellikle T&uuml;rk&ccedil;e, Arap&ccedil;a ve Yunanca dillerinde tecr&uuml;bemiz ve kalitemizle bu zorlu yolda size ışık tutan, hedeflerinize başarıyla ulaşmanızı sağlayan bir k&ouml;pr&uuml; olmaktan gurur duyuyoruz!</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<br />\r\n	<strong>Kullandığımız programlardan bazıları:</strong><br />\r\n	&nbsp;</p>\r\n<div class=\"clear\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; clear: both; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif;\">\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/1.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/2.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/3.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/4.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/5.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/6.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/7.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/8.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/9.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/10.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div>\r\n		&nbsp;</div>\r\n	<div class=\"clear\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; clear: both;\">\r\n		&nbsp;</div>\r\n	<br />\r\n	<br />\r\n	<p style=\"margin: 0px; padding: 0px; font-family: Ubuntu, sans-serif;\">\r\n		<strong>Hizmet verdiğimiz alanlardan bazıları:</strong></p>\r\n	<ul style=\"margin: 0px; padding-right: 0px; padding-left: 30px; font-family: Ubuntu, sans-serif;\">\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Yazılım yerelleştirme</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Makine ve te&ccedil;hizat ara y&uuml;z&uuml; yerelleştirme</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Kullanım kılavuzu yerelleştirme</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			İnternet sitesi yerelleştirme</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Pazarlama ve reklam yerelleştirme</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Terminoloji y&ouml;netimi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Stil kılavuzu hazırlanması</li>\r\n	</ul>\r\n</div>\r\n<br />\r\n', 1, NULL),
(38, NULL, 'Masaüstü Yayıncılık', '<span style=\"color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px; text-align: justify;\">Masa&uuml;st&uuml; Yayıncılık (DTP), &ccedil;evirilerinizin baskıya ve/veya kullanıma hazır hale getirilmesi i&ccedil;in genel g&ouml;r&uuml;nt&uuml;s&uuml;n&uuml;n ve bi&ccedil;iminin orijinaline uygun şekilde d&uuml;zenlenmesidir.</span><br />\r\n<br style=\"color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px; text-align: justify;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px; text-align: justify;\">DTP, &ccedil;eviri ve yerelleştirme s&uuml;re&ccedil;lerinin son ve en kritik aşamalarından biridir. DTP sırasında yapılacak en ufak bir yanlış, geri d&ouml;n&uuml;lemez yanlışlıklara yol a&ccedil;abileceği gibi, maliyetlerinizi artırıp s&uuml;re&ccedil;leri uzatabilmektedir. 16 farklı dilde &ccedil;eşitli ve zor programlarla DTP projesinin başarıyla &uuml;stesinden gelmiş DTP ekibimizle size hizmet vermekte, bu tarz endişelerinizden uzak durmanızı sağlamaktayız.</span>', 1, NULL),
(39, NULL, 'Kalite Kontrol', '<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<strong>MoTTo</strong>, kaliteyi &ouml;n planda tutarak &ccedil;eviri hizmetini en iyi şekilde teslim etmek ve uzun vadede m&uuml;şteri hizmetini s&uuml;rd&uuml;rebilmek amacıyla yoğun &ccedil;aba sarf etmektedir.</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	Kalite Kontrol s&uuml;recinin &ccedil;eviri ve/veya yerelleştirme hizmeti ile başından sonuna kadar bir b&uuml;t&uuml;n olduğu unutulmamalıdır.</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	&nbsp;</p>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<strong>MoTTo &ccedil;alışma prensibi:</strong></p>\r\n<ul style=\"margin: 0px; padding-right: 0px; padding-left: 30px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		Her&nbsp;<strong>projeye &ouml;zel</strong>&nbsp;s&ouml;zl&uuml;kler hazırlıyoruz</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;eviri ve Yerelleştirme&nbsp;<strong>metninin konusuna g&ouml;re uzman &ccedil;evirmenlerle</strong>&nbsp;&ccedil;alışmayı tercih ediyoruz</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;eviride en &ouml;nemli sorunlardan biri olan&nbsp;<strong>tutarsızlığın giderilmesi</strong>&nbsp;i&ccedil;in teknolojiyi en &uuml;st seviyede kullanıyoruz</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		B&uuml;y&uuml;k hacimli işlerde &ccedil;evirinin belirli bir kısmını en kısa s&uuml;rede teslim edip terimsel a&ccedil;ıdan herhangi bir aksaklık olup olmadığını&nbsp;<strong>m&uuml;şteriden onaylamasını</strong>&nbsp;rica ediyoruz</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;evirinin tamamlanmasının ardından&nbsp;<strong>edit&ouml;rler tarafından incelenmesini</strong>&nbsp;sağlıyoruz</li>\r\n	<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n		&Ccedil;eviri ve d&uuml;zenleme bittikten sonra teknolojiden faydalanarak dilbilgisel hataları, tutarsızlıkları, sayısal hataları, anlamsal bozuklukları, boşluk hataları gibi en kritik hatadan en k&uuml;&ccedil;&uuml;k hataya kadar&nbsp;<strong>t&uuml;m hataları temizliyoruz</strong></li>\r\n</ul>\r\n<p class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<br />\r\n	<strong>Kullandığımız programlardan bazıları:</strong><br />\r\n	&nbsp;</p>\r\n<div class=\"clear\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; clear: both; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif;\">\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/1.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/2.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/3.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<div class=\"referans_logolar\" style=\"box-sizing: border-box; margin: 10px 0px 0px 10px; padding: 0px; border: 1px solid rgb(51, 51, 51); outline: 0px; vertical-align: baseline; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 215px; height: 110px; float: left;\">\r\n		<img src=\"http://localhost/motto/images/logolar/4.jpg\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: middle; background: transparent;\" /></div>\r\n	<br />\r\n	<br />\r\n	<br />\r\n	<p style=\"margin: 0px; padding: 0px; font-family: Ubuntu, sans-serif;\">\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<br />\r\n		<strong>Hizmet verdiğimiz alanlardan bazıları;</strong></p>\r\n	<ul style=\"padding-right: 0px; padding-left: 30px; margin: 0px; font-family: Ubuntu, sans-serif;\">\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Noter yeminli belge &ccedil;evirileri</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Teknik belge &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Kullanım kılavuzu &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Web sitesi &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Pazarlama/reklam metinleri &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Anket &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Eğitim belgeleri &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Resmi belge &ccedil;evirisi</li>\r\n		<li class=\"rtejustify\" style=\"margin: 0px; padding: 0px; text-align: justify;\">\r\n			Tıbbi rapor/epikriz &ccedil;evirisi vb.</li>\r\n	</ul>\r\n</div>\r\n<br />\r\n', 1, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ilceler`
--

CREATE TABLE `ilceler` (
  `id` int(4) UNSIGNED NOT NULL,
  `ilid` int(4) UNSIGNED NOT NULL DEFAULT '0',
  `ilce` varchar(32) COLLATE utf8_turkish_ci NOT NULL DEFAULT '',
  `sira` int(4) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `ilceler`
--

INSERT INTO `ilceler` (`id`, `ilid`, `ilce`, `sira`) VALUES
(1, 1, 'Aladağ', 0),
(2, 1, 'Baraj Yolu', 0),
(3, 1, 'Cemalpaşa', 0),
(4, 1, 'Ceyhan', 0),
(5, 1, 'Çarşı', 0),
(6, 1, 'Çukurova', 0),
(7, 1, 'Feke', 0),
(8, 1, 'İmamoğlu', 0),
(9, 1, 'Karaisalı', 0),
(10, 1, 'Karataş', 0),
(11, 1, 'Kozan', 0),
(12, 1, 'Merkez', 1),
(13, 1, 'Pozantı', 0),
(14, 1, 'Saimbeyli', 0),
(15, 1, 'Seyhan', 0),
(16, 1, 'Tufanbeyli', 0),
(17, 1, 'Yumurtalık', 0),
(18, 1, 'Yüreğir', 0),
(19, 2, 'Besni', 0),
(20, 2, 'Çelikhan', 0),
(21, 2, 'Gerger', 0),
(22, 2, 'Gölbaşı', 0),
(23, 2, 'Kahta', 0),
(24, 2, 'Samsat', 0),
(25, 2, 'Sincik', 0),
(26, 2, 'Tut', 0),
(27, 3, 'Başmakçı', 0),
(28, 3, 'Bayat', 0),
(29, 3, 'Bolvadin', 0),
(30, 3, 'Çay', 0),
(31, 3, 'Çobanlar', 0),
(32, 3, 'Dazkırı', 0),
(33, 3, 'Dinar', 0),
(34, 3, 'Emirdağ', 0),
(35, 3, 'Evciler', 0),
(36, 3, 'Hocalar', 0),
(37, 3, 'İhsaniye', 0),
(38, 3, 'İscehisar', 0),
(39, 3, 'Kızılören', 0),
(40, 3, 'Merkez', 1),
(41, 3, 'Sandıklı', 0),
(42, 3, 'Sinanpaşa', 0),
(43, 3, 'Sincanlı', 0),
(44, 3, 'Sultandağı', 0),
(45, 3, 'Şuhut', 0),
(46, 4, 'Diyadin', 0),
(47, 4, 'Doğubayazıt', 0),
(48, 4, 'Eleşkirt', 0),
(49, 4, 'Hamur', 0),
(50, 4, 'Merkez', 1),
(51, 4, 'Patnos', 0),
(52, 4, 'Taşlıçay', 0),
(53, 4, 'Tutak', 0),
(54, 5, 'Gülağaç', 0),
(55, 5, 'Güzelyurt', 0),
(56, 5, 'Merkez', 1),
(57, 5, 'Ortaköy', 0),
(58, 5, 'Sarıyahşi', 0),
(59, 6, 'Göynücek', 0),
(60, 6, 'Gümüşhacıköy', 0),
(61, 6, 'Hamamözü', 0),
(62, 6, 'Merkez', 1),
(63, 6, 'Merzifon', 0),
(64, 6, 'Suluova', 0),
(65, 6, 'Taşova', 0),
(66, 7, 'Akköprü', 0),
(67, 7, 'Akyurt', 0),
(68, 7, 'Altındağ', 0),
(69, 7, 'Ayaş', 0),
(70, 7, 'Bala', 0),
(71, 7, 'Beypazarı', 0),
(72, 7, 'Çamlıdere', 0),
(73, 7, 'Çankaya', 0),
(74, 7, 'Çubuk', 0),
(75, 7, 'Elmadağ', 0),
(76, 7, 'Etimesgut', 0),
(77, 7, 'Evren', 0),
(78, 7, 'Gaziemir', 0),
(79, 7, 'Gölbaşı', 0),
(80, 7, 'Güdül', 0),
(81, 7, 'Haymana', 0),
(82, 7, 'Kalecik', 0),
(83, 7, 'Kazan', 0),
(84, 7, 'Keçiören', 0),
(85, 7, 'Kızılcahamam', 0),
(86, 7, 'Mamak', 0),
(87, 7, 'Nallıhan', 0),
(88, 7, 'Polatlı', 0),
(89, 7, 'Sincan', 0),
(90, 7, 'Şereflikoçhisar', 0),
(91, 7, 'Yenimahalle', 0),
(92, 8, 'Akseki', 0),
(93, 8, 'Alanya', 0),
(94, 8, 'Batı Vilayet', 0),
(95, 8, 'Elmalı', 0),
(96, 8, 'Finike', 0),
(97, 8, 'Gazipaşa', 0),
(98, 8, 'Gebriz (Serik)', 0),
(99, 8, 'Gündoğmuş', 0),
(100, 8, 'İbradi', 0),
(101, 8, 'Kale', 0),
(102, 8, 'Kaş', 0),
(103, 8, 'Kemer', 0),
(104, 8, 'Korkuteli', 0),
(105, 8, 'Kumköy', 0),
(106, 8, 'Kumluca', 0),
(107, 8, 'Mahmutlar', 0),
(108, 8, 'Manavgat', 0),
(109, 8, 'Merkez', 1),
(110, 8, 'Serik', 0),
(111, 9, 'Çıldır', 0),
(112, 9, 'Damal', 0),
(113, 9, 'Göle', 0),
(114, 9, 'Hanak', 0),
(115, 9, 'Merkez', 1),
(116, 9, 'Posof', 0),
(117, 10, 'Ardanuç', 0),
(118, 10, 'Arhavi', 0),
(119, 10, 'Borçka', 0),
(120, 10, 'Hopa', 0),
(121, 10, 'Merkez', 1),
(122, 10, 'Murgul', 0),
(123, 10, 'Şavşat', 0),
(124, 10, 'Yusufeli', 0),
(125, 11, 'Bozdoğan', 0),
(126, 11, 'Buharkent', 0),
(127, 11, 'Çine', 0),
(128, 11, 'Davutlar', 0),
(129, 11, 'Didim', 0),
(130, 11, 'Germencik', 0),
(131, 11, 'Güzelçamlı', 0),
(132, 11, 'Ilıca mevkii', 0),
(133, 11, 'İncirliova', 0),
(134, 11, 'Kadınlar Denizi', 0),
(135, 11, 'Karacasu', 0),
(136, 11, 'Karpuzlu', 0),
(137, 11, 'Koçarlı', 0),
(138, 11, 'Kuşadası', 0),
(139, 11, 'Kuyucak', 0),
(140, 11, 'Merkez', 1),
(141, 11, 'Nazilli', 0),
(142, 11, 'Sahil Siteleri', 0),
(143, 11, 'Söke', 0),
(144, 11, 'Sultanhisar', 0),
(145, 11, 'Yenihisar', 0),
(146, 11, 'Yenipazar', 0),
(147, 12, 'Akçay', 0),
(148, 12, 'Ayvalık', 0),
(149, 12, 'Balya', 0),
(150, 12, 'Bandırma', 0),
(151, 12, 'Bigadiç', 0),
(152, 12, 'Burhaniye', 0),
(153, 12, 'Dursunbey', 0),
(154, 12, 'Edremit', 0),
(155, 12, 'Erdek', 0),
(156, 12, 'Gömeç', 0),
(157, 12, 'Gönen', 0),
(158, 12, 'Havran', 0),
(159, 12, 'İvrindi', 0),
(160, 12, 'Kepsut', 0),
(161, 12, 'Manyas', 0),
(162, 12, 'Marmara', 0),
(163, 12, 'Merkez', 1),
(164, 12, 'Merkez', 1),
(165, 12, 'Savaştepe', 0),
(166, 12, 'Sındırgı', 0),
(167, 12, 'Susurluk', 0),
(168, 13, 'Amasra', 0),
(169, 13, 'Kuruçaşile', 0),
(170, 13, 'Merkez', 1),
(171, 13, 'Ulus', 0),
(172, 14, 'Beşiri', 0),
(173, 14, 'Gercüş', 0),
(174, 14, 'Hasankeyf', 0),
(175, 14, 'Kozluk', 0),
(176, 14, 'Merkez', 1),
(177, 14, 'Sason', 0),
(178, 15, 'Aydıntepe', 0),
(179, 15, 'Demirözü', 0),
(180, 15, 'Merkez', 1),
(181, 16, 'Bozüyük', 0),
(182, 16, 'Gölpazarı', 0),
(183, 16, 'İnhisar', 0),
(184, 16, 'Merkez', 1),
(185, 16, 'Osmaneli', 0),
(186, 16, 'Pazaryeri', 0),
(187, 16, 'Söğüt', 0),
(188, 16, 'Yenipazar', 0),
(189, 17, 'Adaklı', 0),
(190, 17, 'Genç', 0),
(191, 17, 'Karlıova', 0),
(192, 17, 'Kiğı', 0),
(193, 17, 'Merkez', 1),
(194, 17, 'Solhan', 0),
(195, 17, 'Yayladere', 0),
(196, 17, 'Yedisu', 0),
(197, 18, 'Adilcevaz', 0),
(198, 18, 'Ahlat', 0),
(199, 18, 'Güroymak', 0),
(200, 18, 'Hizan', 0),
(201, 18, 'Merkez', 1),
(202, 18, 'Mutki', 0),
(203, 18, 'Tatvan', 0),
(204, 19, 'Abant', 0),
(205, 19, 'Akçakoca', 0),
(206, 19, 'Akkaya', 0),
(207, 19, 'Ayrılık Çeşmesi', 0),
(208, 19, 'Bolu Dağı', 0),
(209, 19, 'Dörtdivan', 0),
(210, 19, 'Gerede', 0),
(211, 19, 'Gölcük', 0),
(212, 19, 'Göynük', 0),
(213, 19, 'Hendek', 0),
(214, 19, 'Karacasu', 0),
(215, 19, 'Kartalkaya', 0),
(216, 19, 'Kıbrısçık', 0),
(217, 19, 'Mengen', 0),
(218, 19, 'Merkez', 1),
(219, 19, 'Mudurnu', 0),
(220, 19, 'Seben', 0),
(221, 19, 'Yeniçağa', 0),
(222, 20, 'Ağlasun', 0),
(223, 20, 'Altınyayla', 0),
(224, 20, 'Bucak', 0),
(225, 20, 'Çavdır', 0),
(226, 20, 'Çeltikçi', 0),
(227, 20, 'Gölhisar', 0),
(228, 20, 'Karamanlı', 0),
(229, 20, 'Kemer', 0),
(230, 20, 'Merkez', 1),
(231, 20, 'Tefenni', 0),
(232, 20, 'Yeşilova', 0),
(233, 21, 'Büyükorhan', 0),
(234, 21, 'Gemlik', 0),
(235, 21, 'Gürsu', 0),
(236, 21, 'Harmancık', 0),
(237, 21, 'İnegöl', 0),
(238, 21, 'İznik', 0),
(239, 21, 'Karacabey', 0),
(240, 21, 'Keleş', 0),
(241, 21, 'Kestel', 0),
(242, 21, 'M.Kemalpaşa', 0),
(243, 21, 'Merkez', 1),
(244, 21, 'Mudanya', 0),
(245, 21, 'Nilüfer', 0),
(246, 21, 'Orhaneli', 0),
(247, 21, 'Orhangazi', 0),
(248, 21, 'Osmangazi', 0),
(249, 21, 'Yenişehir', 0),
(250, 21, 'Yıldırım', 0),
(251, 22, 'Assos', 0),
(252, 22, 'Ayvacık', 0),
(253, 22, 'Bayramiç', 0),
(254, 22, 'Behramkale', 0),
(255, 22, 'Biga', 0),
(256, 22, 'Bozcaada', 0),
(257, 22, 'Çan', 0),
(258, 22, 'Eceabat', 0),
(259, 22, 'Ezine', 0),
(260, 22, 'Gelibolu', 0),
(261, 22, 'Gökçeada', 0),
(262, 22, 'Güzelyalı', 0),
(263, 22, 'Kalkım', 0),
(264, 22, 'Küçükkuyu', 0),
(265, 22, 'Lapseki', 0),
(266, 22, 'Merkez', 1),
(267, 22, 'Yenice', 0),
(268, 23, 'Atkaracalar', 0),
(269, 23, 'Bayramören', 0),
(270, 23, 'Çerkeş', 0),
(271, 23, 'Eldivan', 0),
(272, 23, 'Eskipazar', 0),
(273, 23, 'Ilgaz', 0),
(274, 23, 'Kızılırmak', 0),
(275, 23, 'Korgun', 0),
(276, 23, 'Kurşunlu', 0),
(277, 23, 'Merkez', 1),
(278, 23, 'Orta', 0),
(279, 23, 'Ovacık', 0),
(280, 23, 'Şabanözü', 0),
(281, 23, 'Yapraklı', 0),
(282, 24, 'Alaca', 0),
(283, 24, 'Bayat', 0),
(284, 24, 'Boğazkale', 0),
(285, 24, 'Dodurga', 0),
(286, 24, 'İskilip', 0),
(287, 24, 'Kargı', 0),
(288, 24, 'Laçin', 0),
(289, 24, 'Mecitözü', 0),
(290, 24, 'Merkez', 1),
(291, 24, 'Oğuzlar', 0),
(292, 24, 'Ortaköy', 0),
(293, 24, 'Osmancık', 0),
(294, 24, 'Sungurlu', 0),
(295, 24, 'Uğurludağ', 0),
(296, 25, 'Acıpayam', 0),
(297, 25, 'Akköy', 0),
(298, 25, 'Babadağ', 0),
(299, 25, 'Baklan', 0),
(300, 25, 'Bekilli', 0),
(301, 25, 'Beyağaç', 0),
(302, 25, 'Bozkurt', 0),
(303, 25, 'Buldan', 0),
(304, 25, 'Çal', 0),
(305, 25, 'Çameli', 0),
(306, 25, 'Çardak', 0),
(307, 25, 'Çivril', 0),
(308, 25, 'Güney', 0),
(309, 25, 'Honaz', 0),
(310, 25, 'Kale', 0),
(311, 25, 'Merkez', 1),
(312, 25, 'Pamukkale', 0),
(313, 25, 'Sarayköy', 0),
(314, 25, 'Serinhisar', 0),
(315, 25, 'Tavas', 0),
(316, 26, 'Bismil', 0),
(317, 26, 'Çermik', 0),
(318, 26, 'Çınar', 0),
(319, 26, 'Çüngüş', 0),
(320, 26, 'Dicle', 0),
(321, 26, 'Eğil', 0),
(322, 26, 'Ergani', 0),
(323, 26, 'Hani', 0),
(324, 26, 'Hazro', 0),
(325, 26, 'Kocaköy', 0),
(326, 26, 'Kulp', 0),
(327, 26, 'Lice', 0),
(328, 26, 'Merkez', 1),
(329, 26, 'Silvan', 0),
(330, 27, 'Akçakoca', 0),
(331, 27, 'Cumayeri', 0),
(332, 27, 'Çilimli', 0),
(333, 27, 'Gölyaka', 0),
(334, 27, 'Gümüşova', 0),
(335, 27, 'Kaynaşlı', 0),
(336, 27, 'Merkez', 1),
(337, 27, 'Yığılca', 0),
(338, 28, 'Enez', 0),
(339, 28, 'Havsa', 0),
(340, 28, 'İpsala', 0),
(341, 28, 'Kapıkule', 0),
(342, 28, 'Keşan', 0),
(343, 28, 'Lalapaşa', 0),
(344, 28, 'Meriç', 0),
(345, 28, 'Merkez', 1),
(346, 28, 'Süloğlu', 0),
(347, 28, 'Uzunköprü', 0),
(348, 29, 'Ağın', 0),
(349, 29, 'Akçakaya', 0),
(350, 29, 'Alacakaya', 0),
(351, 29, 'Arıcak', 0),
(352, 29, 'Baskil', 0),
(353, 29, 'Karakoçan', 0),
(354, 29, 'Keban', 0),
(355, 29, 'Kovancılar', 0),
(356, 29, 'Maden', 0),
(357, 29, 'Merkez', 1),
(358, 29, 'Palu', 0),
(359, 29, 'Sivrice', 0),
(360, 30, 'Çayırlı', 0),
(361, 30, 'İliç', 0),
(362, 30, 'Kemah', 0),
(363, 30, 'Kemaliye', 0),
(364, 30, 'Merkez', 1),
(365, 30, 'Otlukbeli', 0),
(366, 30, 'Refahiye', 0),
(367, 30, 'Tercan', 0),
(368, 30, 'Üzümlü', 0),
(369, 31, 'Aşkale', 0),
(370, 31, 'Çat', 0),
(371, 31, 'Hınıs', 0),
(372, 31, 'Horasan', 0),
(373, 31, 'Ilıca', 0),
(374, 31, 'İspir', 0),
(375, 31, 'Karaçoban', 0),
(376, 31, 'Karayazı', 0),
(377, 31, 'Köprüköy', 0),
(378, 31, 'Merkez', 1),
(379, 31, 'Narman', 0),
(380, 31, 'Oltu', 0),
(381, 31, 'Olur', 0),
(382, 31, 'Palandöken', 0),
(383, 31, 'Pasinler', 0),
(384, 31, 'Pazaryolu', 0),
(385, 31, 'Şenkaya', 0),
(386, 31, 'Tekman', 0),
(387, 31, 'Tortum', 0),
(388, 31, 'Uzundere', 0),
(389, 32, 'Alpu', 0),
(390, 32, 'Beylikova', 0),
(391, 32, 'Çifteler', 0),
(392, 32, 'Günyüzü', 0),
(393, 32, 'Han', 0),
(394, 32, 'İnönü', 0),
(395, 32, 'Mahmudiye', 0),
(396, 32, 'Merkez', 1),
(397, 32, 'Mihalgazi', 0),
(398, 32, 'Mihalıççık', 0),
(399, 32, 'Sarıcakaya', 0),
(400, 32, 'Seyitgazi', 0),
(401, 32, 'Sivrihisar', 0),
(402, 33, 'Araban', 0),
(403, 33, 'İslahiye', 0),
(404, 33, 'Karkamış', 0),
(405, 33, 'Merkez', 1),
(406, 33, 'Nizip', 0),
(407, 33, 'Nurdağı', 0),
(408, 33, 'Oğuzeli', 0),
(409, 33, 'Şahinbey', 0),
(410, 33, 'Şehit Kamil', 0),
(411, 33, 'Yavuzeli', 0),
(412, 34, 'Alucra', 0),
(413, 34, 'Bulancak', 0),
(414, 34, 'Çamoluk', 0),
(415, 34, 'Çanakçı', 0),
(416, 34, 'Dereli', 0),
(417, 34, 'Doğankent', 0),
(418, 34, 'Espiye', 0),
(419, 34, 'Eynesil', 0),
(420, 34, 'Görele', 0),
(421, 34, 'Güce', 0),
(422, 34, 'Keşap', 0),
(423, 34, 'Merkez', 1),
(424, 34, 'Piraziz', 0),
(425, 34, 'Şebinkarahisar', 0),
(426, 34, 'Tirebolu', 0),
(427, 34, 'Yağlıdere', 0),
(428, 35, 'Kelkit', 0),
(429, 35, 'Köse', 0),
(430, 35, 'Kürtün', 0),
(431, 35, 'Merkez', 1),
(432, 35, 'Şiran', 0),
(433, 35, 'Torul', 0),
(434, 35, 'Zigana', 0),
(435, 36, 'Çukurca', 0),
(436, 36, 'Merkez', 1),
(437, 36, 'Şemdinli', 0),
(438, 36, 'Yüksekova', 0),
(439, 37, 'Altınözü', 0),
(440, 37, 'Antakya', 0),
(441, 37, 'Belen', 0),
(442, 37, 'Dörtyol', 0),
(443, 37, 'Erzin', 0),
(444, 37, 'Hassa', 0),
(445, 37, 'İskenderun', 0),
(446, 37, 'Kırıkhan', 0),
(447, 37, 'Kumlu', 0),
(448, 37, 'Merkez', 1),
(449, 37, 'Reyhanlı', 0),
(450, 37, 'Samandağı', 0),
(451, 37, 'Yayladağı', 0),
(452, 38, 'Aralık', 0),
(453, 38, 'Karakoyunlu', 0),
(454, 38, 'Merkez', 1),
(455, 38, 'Tuzluca', 0),
(456, 39, 'Aksu', 0),
(457, 39, 'Atabey', 0),
(458, 39, 'Eğirdir', 0),
(459, 39, 'Gelendost', 0),
(460, 39, 'Gönen', 0),
(461, 39, 'Keçiborlu', 0),
(462, 39, 'Merkez', 1),
(463, 39, 'Senirkent', 0),
(464, 39, 'Sütçüler', 0),
(465, 39, 'Şarkikaraağaç', 0),
(466, 39, 'Uluborlu', 0),
(467, 39, 'Yalvaç', 0),
(468, 39, 'Yenişarbademli', 0),
(469, 40, 'Anamur', 0),
(470, 40, 'Aydıncık', 0),
(471, 40, 'Bozkaya', 0),
(472, 40, 'Bozyazı', 0),
(473, 40, 'Çamlıyayla', 0),
(474, 40, 'Erdemli', 0),
(475, 40, 'Gülnar', 0),
(476, 40, 'Merkez', 1),
(477, 40, 'Mersin', 0),
(478, 40, 'Mut', 0),
(479, 40, 'Silifke', 0),
(480, 40, 'Tarsus', 0),
(481, 41, 'Adalar', 0),
(482, 41, 'Avcılar', 0),
(483, 41, 'Bağcılar', 0),
(484, 41, 'Bahçelievler', 0),
(485, 41, 'Bakırköy', 0),
(486, 41, 'Bayrampaşa', 0),
(487, 41, 'Beşiktaş', 0),
(488, 41, 'Beykoz', 0),
(489, 41, 'Beyoğlu', 0),
(490, 41, 'Büyükçekmece', 0),
(491, 41, 'Çatalca', 0),
(492, 41, 'Eminönü', 0),
(493, 41, 'Esenler', 0),
(494, 41, 'Esenyurt', 0),
(495, 41, 'Eyüp', 0),
(496, 41, 'Fatih', 0),
(497, 41, 'Gaziosmanpaşa', 0),
(498, 41, 'Güngören', 0),
(499, 41, 'Kadıköy', 0),
(500, 41, 'Kağıthane', 0),
(501, 41, 'Kartal', 0),
(502, 41, 'Küçükçekmece', 0),
(503, 41, 'Maltepe', 0),
(504, 41, 'Pendik', 0),
(505, 41, 'Sarıyer', 0),
(506, 41, 'Silivri', 0),
(507, 41, 'Sultanbeyli', 0),
(508, 41, 'Şile', 0),
(509, 41, 'Şişli', 0),
(510, 41, 'Tuzla', 0),
(511, 41, 'Ümraniye', 0),
(512, 41, 'Üsküdar', 0),
(513, 41, 'Zeytinburnu', 0),
(514, 42, 'Aliağa', 0),
(515, 42, 'Balçova', 0),
(516, 42, 'Bayındır', 0),
(517, 42, 'Bergama', 0),
(518, 42, 'Beydağ', 0),
(519, 42, 'Bornova', 0),
(520, 42, 'Buca', 0),
(521, 42, 'Çeşme', 0),
(522, 42, 'Çiğli', 0),
(523, 42, 'Dikili', 0),
(524, 42, 'Foça', 0),
(525, 42, 'Gaziemir', 0),
(526, 42, 'Güzelbahçe', 0),
(527, 42, 'Karaburun', 0),
(528, 42, 'Karşıyaka', 0),
(529, 42, 'Kemalpaşa', 0),
(530, 42, 'Kınık', 0),
(531, 42, 'Kiraz', 0),
(532, 42, 'Konak', 0),
(533, 42, 'Menderes', 0),
(534, 42, 'Menemen', 0),
(535, 42, 'Merkez', 1),
(536, 42, 'Narlıdere', 0),
(537, 42, 'Ödemiş', 0),
(538, 42, 'Seferihisar', 0),
(539, 42, 'Selçuk', 0),
(540, 42, 'Tire', 0),
(541, 42, 'Torbalı', 0),
(542, 42, 'Turgutlu', 0),
(543, 42, 'Urla', 0),
(544, 43, 'Afşin', 0),
(545, 43, 'Andırın', 0),
(546, 43, 'Elbistan', 0),
(547, 43, 'Göksun', 0),
(548, 43, 'Merkez', 1),
(549, 43, 'Pazarcık', 0),
(550, 44, 'Eflani', 0),
(551, 44, 'Eskipazar', 0),
(552, 44, 'Merkez', 1),
(553, 44, 'Ovacık', 0),
(554, 44, 'Safranbolu', 0),
(555, 44, 'Yenice', 0),
(556, 45, 'Ayrancı', 0),
(557, 45, 'Başyayla', 0),
(558, 45, 'Ermenek', 0),
(559, 45, 'Kazımkarabekir', 0),
(560, 45, 'Merkez', 1),
(561, 45, 'Sarıveliler', 0),
(562, 46, 'Akyaka', 0),
(563, 46, 'Arpaçay', 0),
(564, 46, 'Digor', 0),
(565, 46, 'Kağızman', 0),
(566, 46, 'Merkez', 1),
(567, 46, 'Sarıkamış', 0),
(568, 46, 'Selim', 0),
(569, 46, 'Susuz', 0),
(570, 47, 'Abana', 0),
(571, 47, 'Ağlı', 0),
(572, 47, 'Araç', 0),
(573, 47, 'Azdavay', 0),
(574, 47, 'Bozkurt', 0),
(575, 47, 'Cide', 0),
(576, 47, 'Çatalzeytin', 0),
(577, 47, 'Daday', 0),
(578, 47, 'Devrekani', 0),
(579, 47, 'Doğanyurt', 0),
(580, 47, 'Hanönü', 0),
(581, 47, 'Ilgaz Dağı', 0),
(582, 47, 'İhsangazi', 0),
(583, 47, 'İnebolu', 0),
(584, 47, 'Küre', 0),
(585, 47, 'Merkez', 1),
(586, 47, 'Pınarbaşı', 0),
(587, 47, 'Seydiler', 0),
(588, 47, 'Şenpazar', 0),
(589, 47, 'Taşköprü', 0),
(590, 47, 'Tosya', 0),
(591, 48, 'Akkışla', 0),
(592, 48, 'Bünyan', 0),
(593, 48, 'Develi', 0),
(594, 48, 'Erciyes', 0),
(595, 48, 'Felahiye', 0),
(596, 48, 'Gesi', 0),
(597, 48, 'Hacılar', 0),
(598, 48, 'İncesu', 0),
(599, 48, 'Kocasinan', 0),
(600, 48, 'Melikgazi', 0),
(601, 48, 'Merkez', 1),
(602, 48, 'Özvatan', 0),
(603, 48, 'Pınarbaşı', 0),
(604, 48, 'Sarıoğlan', 0),
(605, 48, 'Sarız', 0),
(606, 48, 'Talas', 0),
(607, 48, 'Tomarza', 0),
(608, 48, 'Ürgüp', 0),
(609, 48, 'Yahyalı', 0),
(610, 48, 'Yeşilhisar', 0),
(611, 49, 'Bahşili', 0),
(612, 49, 'Balışeyh', 0),
(613, 49, 'Çelebi', 0),
(614, 49, 'Delice', 0),
(615, 49, 'Karakeçili', 0),
(616, 49, 'Keskin', 0),
(617, 49, 'Merkez', 1),
(618, 49, 'Sulakyurt', 0),
(619, 49, 'Yahşihan', 0),
(620, 50, 'Babaeski', 0),
(621, 50, 'Demirköy', 0),
(622, 50, 'Kofçaz', 0),
(623, 50, 'Lüleburgaz', 0),
(624, 50, 'Merkez', 1),
(625, 50, 'Pehlivanköy', 0),
(626, 50, 'Pınarhisar', 0),
(627, 50, 'Vize', 0),
(628, 51, 'Akçakent', 0),
(629, 51, 'Akpınar', 0),
(630, 51, 'Boztepe', 0),
(631, 51, 'Çiçekdağı', 0),
(632, 51, 'Kaman', 0),
(633, 51, 'Merkez', 1),
(634, 51, 'Mucur', 0),
(635, 52, 'Elbeyli', 0),
(636, 52, 'Merkez', 1),
(637, 52, 'Musabeyli', 0),
(638, 52, 'Polateli', 0),
(639, 53, 'Derince', 0),
(640, 53, 'Gebze', 0),
(641, 53, 'Gölcük', 0),
(642, 53, 'İzmit', 0),
(643, 53, 'Kandıra', 0),
(644, 53, 'Karamürsel', 0),
(645, 53, 'Kartepe', 0),
(646, 53, 'Kefken', 0),
(647, 53, 'Körfez', 0),
(648, 53, 'Merkez', 1),
(649, 54, 'Ahırlı', 0),
(650, 54, 'Akören', 0),
(651, 54, 'Akşehir', 0),
(652, 54, 'Altınekin', 0),
(653, 54, 'Beyşehir', 0),
(654, 54, 'Bozkır', 0),
(655, 54, 'Cihanbeyli', 0),
(656, 54, 'Çeltik', 0),
(657, 54, 'Çumra', 0),
(658, 54, 'Derbent', 0),
(659, 54, 'Derebucak', 0),
(660, 54, 'Doğanhisar', 0),
(661, 54, 'Emirgazi', 0),
(662, 54, 'Ereğli', 0),
(663, 54, 'Güneysınır', 0),
(664, 54, 'Hadim', 0),
(665, 54, 'Halkapınar', 0),
(666, 54, 'Hüyük', 0),
(667, 54, 'Ilgın', 0),
(668, 54, 'Kadınhanı', 0),
(669, 54, 'Karapınar', 0),
(670, 54, 'Karatay', 0),
(671, 54, 'Kulu', 0),
(672, 54, 'Meram', 0),
(673, 54, 'Merkez', 1),
(674, 54, 'Sarayönü', 0),
(675, 54, 'Selçuklu', 0),
(676, 54, 'Seydişehir', 0),
(677, 54, 'Taşkent', 0),
(678, 54, 'Tuzlukçu', 0),
(679, 54, 'Yalıhöyük', 0),
(680, 54, 'Yunak', 0),
(681, 55, 'Altıntaş', 0),
(682, 55, 'Aslanapa', 0),
(683, 55, 'Çavdarhisar', 0),
(684, 55, 'Domaniç', 0),
(685, 55, 'Dumlupınar', 0),
(686, 55, 'Emet', 0),
(687, 55, 'Gediz', 0),
(688, 55, 'Hisarcık', 0),
(689, 55, 'Merkez', 1),
(690, 55, 'Pazarlar', 0),
(691, 55, 'Simav', 0),
(692, 55, 'Şaphane', 0),
(693, 55, 'Tavşanlı', 0),
(694, 55, 'Yoncalı', 0),
(695, 56, 'Yeni İskele', 0),
(696, 57, 'Akçadağ', 0),
(697, 57, 'Arapgir', 0),
(698, 57, 'Arguvan', 0),
(699, 57, 'Battalgazi', 0),
(700, 57, 'Darende', 0),
(701, 57, 'Doğanşehir', 0),
(702, 57, 'Doğanyol', 0),
(703, 57, 'Hekimhan', 0),
(704, 57, 'Kale', 0),
(705, 57, 'Kuluncak', 0),
(706, 57, 'Merkez', 1),
(707, 57, 'Pütürge', 0),
(708, 57, 'Yazıhan', 0),
(709, 57, 'Yeşilyurt', 0),
(710, 58, 'Ahmetli', 0),
(711, 58, 'Akhisar', 0),
(712, 58, 'Alaşehir', 0),
(713, 58, 'Demirci', 0),
(714, 58, 'Gölmarmara', 0),
(715, 58, 'Gördeş', 0),
(716, 58, 'Kırkağaç', 0),
(717, 58, 'Köprübaşı', 0),
(718, 58, 'Kula', 0),
(719, 58, 'Merkez', 1),
(720, 58, 'Salihli', 0),
(721, 58, 'Sarıgöl', 0),
(722, 58, 'Saruhanlı', 0),
(723, 58, 'Selendi', 0),
(724, 58, 'Soma', 0),
(725, 58, 'Turgutlu', 0),
(726, 59, 'Dergeçit', 0),
(727, 59, 'Derik', 0),
(728, 59, 'Kızıltepe', 0),
(729, 59, 'Mazıdağı', 0),
(730, 59, 'Merkez', 1),
(731, 59, 'Midyat', 0),
(732, 59, 'Nusaybin', 0),
(733, 59, 'Ömerli', 0),
(734, 59, 'Savur', 0),
(735, 59, 'Yenişehir', 0),
(736, 59, 'Yeşilli', 0),
(737, 60, 'Bodrum', 0),
(738, 60, 'Dalaman', 0),
(739, 60, 'Dalyan', 0),
(740, 60, 'Datça', 0),
(741, 60, 'Fethiye', 0),
(742, 60, 'Kavaklıdere', 0),
(743, 60, 'Köyceğiz', 0),
(744, 60, 'Marmaris', 0),
(745, 60, 'Merkez', 1),
(746, 60, 'Milas', 0),
(747, 60, 'Ortaca', 0),
(748, 60, 'Sarıgerme', 0),
(749, 60, 'Torba', 0),
(750, 60, 'Ula', 0),
(751, 60, 'Yatağan', 0),
(752, 61, 'Bulanık', 0),
(753, 61, 'Hasköy', 0),
(754, 61, 'Korkut', 0),
(755, 61, 'Malazgirt', 0),
(756, 61, 'Merkez', 1),
(757, 61, 'Varto', 0),
(758, 62, 'Acıgöl', 0),
(759, 62, 'Avanos', 0),
(760, 62, 'Derinkuyu', 0),
(761, 62, 'Göreme', 0),
(762, 62, 'Gülşehir', 0),
(763, 62, 'Hacıbektaş', 0),
(764, 62, 'Kapadokya', 0),
(765, 62, 'Kaymaklı', 0),
(766, 62, 'Kozaklı', 0),
(767, 62, 'Merkez', 1),
(768, 62, 'Mustafapaşa', 0),
(769, 62, 'Uçhisar', 0),
(770, 62, 'Ürgüp', 0),
(771, 62, 'Zelve', 0),
(772, 63, 'Altunhisar', 0),
(773, 63, 'Bor', 0),
(774, 63, 'Çamardı', 0),
(775, 63, 'Çiftlik', 0),
(776, 63, 'Merkez', 1),
(777, 63, 'Ulukışla', 0),
(778, 64, 'Akkuş', 0),
(779, 64, 'Aybastı', 0),
(780, 64, 'Çamaş', 0),
(781, 64, 'Çatalpınar', 0),
(782, 64, 'Çaybaşı', 0),
(783, 64, 'Fatsa', 0),
(784, 64, 'Gölköy', 0),
(785, 64, 'Gölyalı', 0),
(786, 64, 'Gürgentepe', 0),
(787, 64, 'İkizce', 0),
(788, 64, 'Kabadüz', 0),
(789, 64, 'Kabataş', 0),
(790, 64, 'Korgan', 0),
(791, 64, 'Kumru', 0),
(792, 64, 'Merkez', 1),
(793, 64, 'Mesudiye', 0),
(794, 64, 'Perşembe', 0),
(795, 64, 'Ulubey', 0),
(796, 64, 'Ünye', 0),
(797, 65, 'Bahçe', 0),
(798, 65, 'Düziçi', 0),
(799, 65, 'Hasanbeyli', 0),
(800, 65, 'Kadirli', 0),
(801, 65, 'Merkez', 1),
(802, 65, 'Sumbas', 0),
(803, 65, 'Toprakkale', 0),
(804, 66, 'Alipaşa köyü', 0),
(805, 66, 'Ardeşen', 0),
(806, 66, 'Çamlıhemşin', 0),
(807, 66, 'Çayeli', 0),
(808, 66, 'Derepazarı', 0),
(809, 66, 'Fındıklı', 0),
(810, 66, 'Güneysu', 0),
(811, 66, 'Hemşin', 0),
(812, 66, 'İkizdere', 0),
(813, 66, 'İyidere', 0),
(814, 66, 'Kalkandere', 0),
(815, 66, 'Merkez', 1),
(816, 66, 'Pazar', 0),
(817, 67, 'Adapazarı', 0),
(818, 67, 'Akyazı', 0),
(819, 67, 'Arifiye', 0),
(820, 67, 'Derbent', 0),
(821, 67, 'Dibektaş', 0),
(822, 67, 'Dilekli', 0),
(823, 67, 'Erdemli', 0),
(824, 67, 'Ferizli', 0),
(825, 67, 'Fevziye', 0),
(826, 67, 'Geyve', 0),
(827, 67, 'Güldibi', 0),
(828, 67, 'Hacımercan', 0),
(829, 67, 'Hendek', 0),
(830, 67, 'İlmiye', 0),
(831, 67, 'Karapürçek', 0),
(832, 67, 'Karasu', 0),
(833, 67, 'Kaynarca', 0),
(834, 67, 'Kırkpınar', 0),
(835, 67, 'Kocaali', 0),
(836, 67, 'Mahmudiye', 0),
(837, 67, 'Masukiye', 0),
(838, 67, 'Memnuniye', 0),
(839, 67, 'Pamukova', 0),
(840, 67, 'Sapanca', 0),
(841, 67, 'Söğütlü', 0),
(842, 67, 'Taraklı', 0),
(843, 67, 'Uzunkum', 0),
(844, 67, 'Yanıkköy', 0),
(845, 68, 'Adliye', 0),
(846, 68, 'Alaçam', 0),
(847, 68, 'Asarcık', 0),
(848, 68, 'Ayvacık', 0),
(849, 68, 'Bafra', 0),
(850, 68, 'Çarşamba', 0),
(851, 68, 'Havza', 0),
(852, 68, 'Kavak', 0),
(853, 68, 'Ladik', 0),
(854, 68, 'Merkez', 1),
(855, 68, 'Ondokuz Mayıs', 0),
(856, 68, 'Salıpazarı', 0),
(857, 68, 'Tekkeköy', 0),
(858, 68, 'Terme', 0),
(859, 68, 'Vezirköprü', 0),
(860, 68, 'Yakakent', 0),
(861, 69, 'Aydınlar', 0),
(862, 69, 'Baykan', 0),
(863, 69, 'Eruh', 0),
(864, 69, 'Kurtalan', 0),
(865, 69, 'Merkez', 1),
(866, 69, 'Pervari', 0),
(867, 69, 'Şirvan', 0),
(868, 70, 'Ayancık', 0),
(869, 70, 'Boyabat', 0),
(870, 70, 'Dikmen', 0),
(871, 70, 'Durağan', 0),
(872, 70, 'Erfelek', 0),
(873, 70, 'Gerze', 0),
(874, 70, 'Korucuk köyü', 0),
(875, 70, 'Merkez', 1),
(876, 70, 'Saraydüzü', 0),
(877, 70, 'Türkeli', 0),
(878, 71, 'Akıncılar', 0),
(879, 71, 'Altınyayla', 0),
(880, 71, 'Divriği', 0),
(881, 71, 'Doğanşar', 0),
(882, 71, 'Gemerek', 0),
(883, 71, 'Gölova', 0),
(884, 71, 'Gürün', 0),
(885, 71, 'Hafik', 0),
(886, 71, 'İmranlı', 0),
(887, 71, 'Kangal', 0),
(888, 71, 'Koyulhisar', 0),
(889, 71, 'Merkez', 1),
(890, 71, 'Suşehri', 0),
(891, 71, 'Şarkışla', 0),
(892, 71, 'Ulaş', 0),
(893, 71, 'Yıldızeli', 0),
(894, 71, 'Zara', 0),
(895, 72, 'Akçakale', 0),
(896, 72, 'Birecik', 0),
(897, 72, 'Bozova', 0),
(898, 72, 'Ceylanpınar', 0),
(899, 72, 'Halfeti', 0),
(900, 72, 'Harran', 0),
(901, 72, 'Hilvan', 0),
(902, 72, 'Merkez', 1),
(903, 72, 'Siverek', 0),
(904, 72, 'Suruç', 0),
(905, 72, 'Viranşehir', 0),
(906, 73, 'Beytüşşebap', 0),
(907, 73, 'Cizre', 0),
(908, 73, 'Güçlükonak', 0),
(909, 73, 'Habur', 0),
(910, 73, 'İdil', 0),
(911, 73, 'Merkez', 1),
(912, 73, 'Silopi', 0),
(913, 73, 'Uludere', 0),
(914, 74, 'Çerkezköy', 0),
(915, 74, 'Çorlu', 0),
(916, 74, 'Hayrabolu', 0),
(917, 74, 'Malkara', 0),
(918, 74, 'Marmara Ereğlisi', 0),
(919, 74, 'Merkez', 1),
(920, 74, 'Muratlı', 0),
(921, 74, 'Saray', 0),
(922, 74, 'Şarköy', 0),
(923, 75, 'Almus', 0),
(924, 75, 'Artova', 0),
(925, 75, 'Başçiftlik', 0),
(926, 75, 'Demirköprü', 0),
(927, 75, 'Erbaa', 0),
(928, 75, 'Merkez', 1),
(929, 75, 'Niksar', 0),
(930, 75, 'Pazar', 0),
(931, 75, 'Reşadiye', 0),
(932, 75, 'Sulusaray', 0),
(933, 75, 'Turhal', 0),
(934, 75, 'Yeşilyurt', 0),
(935, 75, 'Zile', 0),
(936, 76, 'Akçaabat', 0),
(937, 76, 'Araklı', 0),
(938, 76, 'Arsin', 0),
(939, 76, 'Beşikdözü', 0),
(940, 76, 'Çarşıbaşı', 0),
(941, 76, 'Çaykara', 0),
(942, 76, 'Dernekpazarı', 0),
(943, 76, 'Düzköy', 0),
(944, 76, 'Hayrat', 0),
(945, 76, 'Köprübaşı', 0),
(946, 76, 'Maçka', 0),
(947, 76, 'Merkez', 1),
(948, 76, 'Of', 0),
(949, 76, 'Sürmene', 0),
(950, 76, 'Şalpazarı', 0),
(951, 76, 'Tonya', 0),
(952, 76, 'Vakfıkebir', 0),
(953, 76, 'Yomra', 0),
(954, 77, 'Çemişgezek', 0),
(955, 77, 'Hozat', 0),
(956, 77, 'Mazgirt', 0),
(957, 77, 'Merkez', 1),
(958, 77, 'Nazımiye', 0),
(959, 77, 'Ovacık', 0),
(960, 77, 'Pertek', 0),
(961, 77, 'Pülümür', 0),
(962, 78, 'Banaz', 0),
(963, 78, 'Eşme', 0),
(964, 78, 'Karahallı', 0),
(965, 78, 'Merkez', 1),
(966, 78, 'Sivaslı', 0),
(967, 78, 'Ulubey', 0),
(968, 79, 'Bahçesaray', 0),
(969, 79, 'Başkale', 0),
(970, 79, 'Çaldıran', 0),
(971, 79, 'Çatak', 0),
(972, 79, 'Edremit', 0),
(973, 79, 'Erciş', 0),
(974, 79, 'Gevaş', 0),
(975, 79, 'Gürpınar', 0),
(976, 79, 'Merkez', 1),
(977, 79, 'Muradiye', 0),
(978, 79, 'Özalp', 0),
(979, 79, 'Saray', 0),
(980, 80, 'Altınova', 0),
(981, 80, 'Armutlu', 0),
(982, 80, 'Çınarcık', 0),
(983, 80, 'Çiftlikköy', 0),
(984, 80, 'Merkez', 1),
(985, 80, 'Termal', 0),
(986, 81, 'Akdağmadeni', 0),
(987, 81, 'Aydıncık', 0),
(988, 81, 'Boğazlıyan', 0),
(989, 81, 'Çamlık Milli Parkı', 0),
(990, 81, 'Çandır', 0),
(991, 81, 'Çayıralan', 0),
(992, 81, 'Çekerek', 0),
(993, 81, 'Kadışehri', 0),
(994, 81, 'Merkez', 1),
(995, 81, 'Saraykent', 0),
(996, 81, 'Sarıkaya', 0),
(997, 81, 'Sorgun', 0),
(998, 81, 'Şefaatli', 0),
(999, 81, 'Yenifakılı', 0),
(1000, 81, 'Yerköy', 0),
(1001, 82, 'Alaplı', 0),
(1002, 82, 'Çaycuma', 0),
(1003, 82, 'Devrek', 0),
(1004, 82, 'Ereğli', 0),
(1005, 82, 'Gökçebey', 0),
(1006, 82, 'Karabük', 0),
(1007, 82, 'Merkez', 1),
(1008, 82, 'Yedigöller', 0);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `iller`
--

CREATE TABLE `iller` (
  `id` int(4) UNSIGNED NOT NULL,
  `il` varchar(32) COLLATE utf8_turkish_ci NOT NULL DEFAULT '',
  `sira` int(4) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `iller`
--

INSERT INTO `iller` (`id`, `il`, `sira`) VALUES
(1, 'Adana', 0),
(2, 'Adıyaman', 0),
(3, 'Afyon', 0),
(4, 'Ağrı', 0),
(5, 'Aksaray', 0),
(6, 'Amasya', 0),
(7, 'Ankara', 0),
(8, 'Antalya', 0),
(9, 'Ardahan', 0),
(10, 'Artvin', 0),
(11, 'Aydın', 0),
(12, 'Balıkesir', 0),
(13, 'Bartın', 0),
(14, 'Batman', 0),
(15, 'Bayburt', 0),
(16, 'Bilecik', 0),
(17, 'Bingöl', 0),
(18, 'Bitlis', 0),
(19, 'Bolu', 0),
(20, 'Burdur', 0),
(21, 'Bursa', 0),
(22, 'Çanakkale', 0),
(23, 'Çankırı', 0),
(24, 'Çorum', 0),
(25, 'Denizli', 0),
(26, 'Diyarbakır', 0),
(27, 'Düzce', 0),
(28, 'Edirne', 0),
(29, 'Elazığ', 0),
(30, 'Erzincan', 0),
(31, 'Erzurum', 0),
(32, 'Eskişehir', 0),
(33, 'Gaziantep', 0),
(34, 'Giresun', 0),
(35, 'Gümüşhane', 0),
(36, 'Hakkari', 0),
(37, 'Hatay', 0),
(38, 'Iğdır', 0),
(39, 'Isparta', 0),
(40, 'İçel', 0),
(41, 'İstanbul', 1),
(42, 'İzmir', 0),
(43, 'KahramanMaraş', 0),
(44, 'Karabük', 0),
(45, 'Karaman', 0),
(46, 'Kars', 0),
(47, 'Kastamonu', 0),
(48, 'Kayseri', 0),
(49, 'Kırıkkale', 0),
(50, 'Kırklareli', 0),
(51, 'Kırşehir', 0),
(52, 'Kilis', 0),
(53, 'Kocaeli', 0),
(54, 'Konya', 0),
(55, 'Kütahya', 0),
(56, 'Magosa', 0),
(57, 'Malatya', 0),
(58, 'Manisa', 0),
(59, 'Mardin', 0),
(60, 'Muğla', 0),
(61, 'Muş', 0),
(62, 'Nevşehir', 0),
(63, 'Niğde', 0),
(64, 'Ordu', 0),
(65, 'Osmaniye', 0),
(66, 'Rize', 0),
(67, 'Sakarya', 0),
(68, 'Samsun', 0),
(69, 'Siirt', 0),
(70, 'Sinop', 0),
(71, 'Sivas', 0),
(72, 'Şanlıurfa', 0),
(73, 'Şırnak', 0),
(74, 'Tekirdağ', 0),
(75, 'Tokat', 0),
(76, 'Trabzon', 0),
(77, 'Tunceli', 0),
(78, 'Uşak', 0),
(79, 'Van', 0),
(80, 'Yalova', 0),
(81, 'Yozgat', 0),
(82, 'Zonguldak', 0);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `kategori`
--

INSERT INTO `kategori` (`id`, `sra`, `baslik`) VALUES
(14, 1, 'Ekstralar');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kurumsal`
--

CREATE TABLE `kurumsal` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `drm` tinyint(1) DEFAULT '1',
  `resim` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `kurumsal`
--

INSERT INTO `kurumsal` (`id`, `sra`, `baslik`, `icerik`, `drm`, `resim`) VALUES
(29, NULL, 'Biz Kimiz', '<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	<strong>Uluslararası başarıyı yakalamak i&ccedil;in doğru yerdesiniz!</strong><br />\r\n	&nbsp;</p>\r\n<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	&Ccedil;eviri ve yerelleştirme sekt&ouml;r&uuml;nde edindiğimiz tecr&uuml;benin pozitif enerjisini m&uuml;şterilerine sunmayı hedefleyen MoTTo&#39;nun temel amacı sekt&ouml;r eksikliklerini giderme ve kaliteyi &ouml;n planda tutmaktır. Sıfır hata politikası &ccedil;er&ccedil;evesinde başta &ccedil;eviri, yerelleştirme, masa&uuml;st&uuml; yayıncılık, ardıl ve sim&uuml;ltane &ccedil;eviri hizmetleri verebilen MoTTo sadece T&uuml;rk&ccedil;eye y&ouml;nelik değil, bulunduğu b&ouml;lgenin stratejisi a&ccedil;ısından Avrupa ve Orta Doğu dillerinde &ccedil;&ouml;z&uuml;m ortağınız olmayı ama&ccedil;lıyor.&nbsp;</p>\r\n<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	&nbsp;</p>\r\n<p style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: Ubuntu, sans-serif; font-size: 14px;\">\r\n	G&uuml;n&uuml;m&uuml;z&uuml;n şartlarına uyum sağlayarak d&uuml;nya &ccedil;apında yaygın şekilde kullanılan teknolojiyi &ccedil;eviri ve yerelleştirme kıstaslarıyla birleştirip ihtiya&ccedil;larınıza uygun şekilde hizmetinize sunuyoruz.&nbsp;</p>\r\n', 1, NULL),
(30, NULL, 'Şirket Profili', '<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	Şirketi&rsquo;nin &ouml;nemli bir par&ccedil;ası olarak 2005 yılında kurulduğumuz g&uuml;nden beri koşulsuz m&uuml;şteri memnuniyeti prensibi ile faaliyetlerimizi s&uuml;rd&uuml;r&uuml;yoruz.</p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	EDU &Ccedil;eviri olarak 45 &uuml;zeri ofis i&ccedil;inde kadrolu, 150&rsquo;si sadece EDU &Ccedil;eviri i&ccedil;in &ccedil;alışan 1000&rsquo;den fazla freelance terc&uuml;manımız aracılığıyla t&uuml;m d&uuml;nya dillerinde yazılı ve s&ouml;zl&uuml; &ccedil;eviri hizmeti sunan; 1100&rsquo;&uuml;n &uuml;zerinde sadık m&uuml;şteri portf&ouml;y&uuml; ve g&uuml;&ccedil;l&uuml; referanslara sahip profesyonel bir &ccedil;eviri ve lokalizasyon şirketiyiz.</p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	Avrupa ve Asya dilleri arasındaki k&uuml;lt&uuml;rel k&ouml;pr&uuml;y&uuml; sağlamlaştırmak adına EDU Grup b&uuml;nyesinde 2013 yılında D&uuml;sseldorf, Almanya&rsquo;da; İngilizce, T&uuml;rk&ccedil;e, Almanca dillerini kaynak alarak t&uuml;m dillere ve t&uuml;m dillerden bu dillere profesyonel &ccedil;eviri ve lokalizasyon hizmetleri sunan ilk şubemizi a&ccedil;tık.<br />\r\n	<br />\r\n	İşinize değer katıyoruz.</p>\r\n<ul>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		T&uuml;m &ccedil;evirileri 4 aşamalı kontrol s&uuml;recinden ge&ccedil;iriyoruz.</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		Kurumsal firmaların gizlilik ve g&uuml;venliğine uygun altyapıya sahibiz.</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		ISO 9001 ile &Ccedil;eviri ve Lokalizasyon Y&ouml;netimi alanında d&uuml;nya &ccedil;apında tek sertifika olan ISO 17100 Kalite Sertifikalarına sahibiz.</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		T&uuml;rkiye&rsquo;de 100.000 USD&rsquo;lik terc&uuml;me sigortası sunan ilk ve tek şirketiz.</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		Gold ve Premier m&uuml;şteri gruplarımızın t&uuml;m işlerini &ouml;zel proje y&ouml;neticilerimiz aracılığıyla y&ouml;netiyoruz.</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		Gold ve Premier m&uuml;şterilerimize, t&uuml;m işlerini bulut tabanlı sistemlerimiz &uuml;zerinden online takip etme imkanı sunuyoruz.</li>\r\n	<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px;\" />\r\n	<li>\r\n		<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px;\">Global pazarda &uuml;yesi olduğumuz birlik ve topluluklar:</span></li>\r\n	<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px;\" />\r\n	<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px;\" />\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		ATA (American Translators Association)</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		GALA (Globalization and Localization Association)</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		ELIA (European Language Industry Association)</li>\r\n	<li style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n		TAUS (Translation Automation User Society)</li>\r\n</ul>\r\n', 1, NULL),
(31, NULL, 'Tarihçe', '<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2005:</strong><br />\r\n	<br />\r\n	- İstanbul, T&uuml;rkiye&rsquo;de&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">kurulduk.</span></span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2008:</strong></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- EDU Grup iş kolları arasında&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">en başa yerleştik.</span></span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2009:</strong></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;İnsan Kaynağı alanında yatırımlarımızı s&uuml;rd&uuml;rd&uuml;k ve kadrolu &ccedil;alışan sayımızı artırdık.&nbsp;<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</span>&Uuml;retim ve Planlama Organizasyon&nbsp;Departmanlarımız kuruldu.</span>&nbsp;<br />\r\n	- Daha&nbsp;b&uuml;y&uuml;k bir ofise&nbsp;taşındık.<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2010:</strong></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Ciro bazında %44 b&uuml;y&uuml;me sağladık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">İnsan Kaynağı ve Teknoloji</span>&nbsp;alanında&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">200,000 TL&rsquo;nin &uuml;zerinde&nbsp;</span>yaptığımız yatırımlarla t&uuml;m sistemlerimizi yenileyerek&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">g&uuml;venli</span>&nbsp;altyapıya ge&ccedil;tik.</span>&nbsp;<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;Denizcilik M&uuml;steşarlığı ile t&uuml;m Denizcilik kanunlarının &ccedil;evirisi i&ccedil;in iki yıl aralıksız s&uuml;recek bir projeye imza attık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Kalite Kontrol departmanımızı kurarak T&uuml;rkiye&rsquo;de daha &ouml;nce uygulanmayan 4 (D&ouml;rt) aşamalı &Ccedil;eviri Kontrol s&uuml;recine ge&ccedil;iş yaptık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2011:&nbsp;</strong></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</span>Ciro bazında %33 b&uuml;y&uuml;me sağladık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">ISO 9001</span>&nbsp;ve&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">Avrupa Birliği&rsquo;nin</span>&nbsp;&Ccedil;eviri sekt&ouml;r&uuml;nde tek tanıdığı standart olan<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">&nbsp;EN 15038 Kalite&nbsp;</span><br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">Sertifikalarını</span>&nbsp;T&uuml;rkiye&rsquo;de ilk alanlardan biri olduk.</span>&nbsp;<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Kadrolu &ccedil;alışan&nbsp;sayımızı artırdık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;HSBC bankasının ilgisini &ccedil;ekerek, bankanın t&uuml;m departmanlarına hizmet verecek şekilde tek yetkili terc&uuml;me ofisi olarak anlaşma imzaladık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2012:</strong><br />\r\n	<br />\r\n	- Ciro bazında %42 b&uuml;y&uuml;me sağladık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</span>Anadolu Sağlık Merkezi&rsquo;nin tek yetkili terc&uuml;me ofisi olduk.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- İki katlı&nbsp;</span>bir ofise taşındık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</span>Kadrolu &ccedil;alışan&nbsp;sayımızı %50 artırdık.</span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</span>EDU Akademi programımızın temellerini attık ve T&uuml;rkiye&rsquo;de &ccedil;evirmenlerin pratik y&ouml;nde gelişebilmeleri i&ccedil;in bir ilki ger&ccedil;ekleştirdik.&nbsp;</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Yurt dışı pazarı i&ccedil;in&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">TTO - Turkish Translation Office</span>&nbsp;markasını yarattık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Know How ve Analizi tamamen kendimize ait olan &Ccedil;eviri ERP yazılımının temellerini attık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2013:</strong></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">- Ciro bazında %27 b&uuml;y&uuml;me sağladık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">300,000 TL&#39;nin &uuml;zerinde</span>&nbsp;bir yatırım yaparak sistemlerimizi geliştirdik ve<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">&nbsp;4 (d&ouml;rt) katlı bir ofise</span>&nbsp;taşındık.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;Kadrolu &ccedil;alışan sayımızı tekrar %35 artırarak T&uuml;rkiye&rsquo;nin ofis i&ccedil;inde en fazla &ccedil;evirmen &ccedil;alıştıran ofisi olduk.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">EDU Akademi Programı</span>nın ilk&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">mezunlarını verdik.</span></span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;Royal Bank of Scotland (RBS) ile s&ouml;zleşme imzalayarak RBS&#39;nin tek yetkili terc&uuml;me ofisi olduk.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2014:&nbsp;</strong><br />\r\n	<br />\r\n	-&nbsp;</span>ERP Yazılımını kullanmaya başlayarak, iş akışlarını, performans y&ouml;netimlerini, m&uuml;şteri y&ouml;netimi ve segmentasyonunu online platforma taşıdık ve belki de bu alanda T&uuml;rkiye&rsquo;nin en detaylı &ccedil;eviri yazılımını hayata ge&ccedil;irdik.</p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">İK&nbsp;</span>Departmanını kurduk.<br />\r\n	<br />\r\n	- D&uuml;sseldorf, Almanya ofisimizin a&ccedil;ılışını yaptık.<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2015:&nbsp;</strong></span><br />\r\n	<br />\r\n	- Ciro bazında %34,5 b&uuml;y&uuml;me sağladık.<br />\r\n	<br />\r\n	- Yapay zeka ile &ccedil;alışan makine &ccedil;evirisi ve kalite otomasyon hizmetleri alanında 2015 yılı Ocak ayında&nbsp;<strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">&ldquo;Transistent&rdquo;</strong>&nbsp;markamızı hayata ge&ccedil;irdik. Bu alanda T&uuml;rkiye ve Orta Doğu&rsquo;da ilk ve tek olma &ouml;zelliğini taşımaktayız.<br />\r\n	<br />\r\n	- 121 farklı dil &ccedil;iftinde toplam 4454 proje ger&ccedil;ekleştirdik.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</strong>Decathlon, KPMG, PwC, Michelin, Migros, Macro Center, Mapfre Sigorta, &Ccedil;in&rsquo;in ICBC Bankası, İtalya&rsquo;nın Intesa Sanpaolo Bankası gibi bir &ccedil;ok b&uuml;y&uuml;k firma ile senelik s&ouml;zleşmeler imzaladık.<br />\r\n	<br />\r\n	<strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">2016:</strong><br />\r\n	<br />\r\n	- Ciro bazında %51,6 b&uuml;y&uuml;me sağladık.<br />\r\n	<br />\r\n	<strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">-&nbsp;</strong>&Ccedil;eviri hizmetlerinde talep edilen kalite standartları ve gerekliliklerin karşılanması amacıyla uygulanan s&uuml;re&ccedil;ler, kaynak y&ouml;netimi ve diğer işlemlerin standardına y&ouml;nelik olarak T&uuml;rk Standartları Enstit&uuml;s&uuml;&rsquo;nden ISO 17100 belgesi alan ilk terc&uuml;me ofisi olduk.<br />\r\n	<br />\r\n	- 99 farklı dil &ccedil;iftinde toplam 5066 projeye imza attık.<br />\r\n	<br />\r\n	- AbbVie, Inditex Group, Asus, Burgan Bank, Vestel, DHL, Takasbank, Tırsan, TSA, IKEA gibi bir&ccedil;ok b&uuml;y&uuml;k firma ile senelik s&ouml;zleşmeler imzaladık.<br />\r\n	<br />\r\n	- T&uuml;rk Sinema Araştırmalar Derneği (TSA) ile imzalanan anlaşma sonrasında 7.300 sinema filmi, 30.000 sinema oyuncusunun hayatı ve bir&ccedil;ok akademik makaleyi i&ccedil;eren İngilizce y&ouml;n&uuml;ne &ccedil;eviri projesini başarıyla tamamladık. T&uuml;rk sinemasının yurt dışındaki sesi olacak bu projede yer almaktan dolayı &ccedil;ok mutlu ve onurluyuz.<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">EDU &Ccedil;eviri</strong>&nbsp;olarak ofis i&ccedil;inde 45&rsquo;in &uuml;zerinde kadrolu, sadece EDU &Ccedil;eviri i&ccedil;in &ccedil;alışan 100&rsquo;&uuml;n &uuml;zerinde s&ouml;zleşmeli ve 1000&rsquo;in &uuml;zerinde freelance &ccedil;alışanımız ile her yıl &ccedil;ift haneli y&uuml;zdelerle artış g&ouml;steren yıllık &uuml;retim hacmine sahibiz. 1000&rsquo;in &uuml;zerinde yurt i&ccedil;i ve yurt dışı sadık m&uuml;şteri portf&ouml;y&uuml;m&uuml;zle T&uuml;rkiye&rsquo;nin en b&uuml;y&uuml;k 3 (&uuml;&ccedil;) D&uuml;nyanın en b&uuml;y&uuml;k 200 (ikiy&uuml;z) &ccedil;eviri firmasından biri olmayı başardık.</span></span></p>\r\n<p style=\"margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0);\">\r\n	<strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">Hedeflerimiz;</strong>&nbsp;<br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">Yurt i&ccedil;i:</strong>&nbsp;T&uuml;rkiye i&ccedil;erisinde &ccedil;eviri sekt&ouml;r&uuml;nde terc&uuml;manların en &ccedil;ok &ccedil;alışmak istediği &ccedil;eviri firması olabilmek.</span><br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">Yurt dışı:</strong>&nbsp;T&uuml;m d&uuml;nyada T&uuml;rk&ccedil;e dendiğinde akla ilk gelen &ccedil;eviri firması olabilmek.&nbsp;</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\"><strong style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: baseline; letter-spacing: 0.003em;\">&Uuml;retim Hedefimiz:</strong>&nbsp;</span><br />\r\n	Kuruluşumuzdan bug&uuml;ne her yıl &ccedil;ift haneli y&uuml;zdelerle artış g&ouml;steren yıllık &ccedil;eviri &uuml;retim hacmimiz doğrultusunda yurt i&ccedil;i ve uluslararası pazarda 2020 yılı i&ccedil;in yıllık +100 milyon kelime &ccedil;evirmeyi hedeflemekteyiz.</p>\r\n', 1, NULL),
(32, NULL, 'Vizyon & Misyon', '<strong style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0); text-align: justify;\">Vizyon :</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">&nbsp;EDU &Ccedil;eviri&lsquo;nin vizyonu, gelişen teknoloji ve sağlam, deneyimli uzmanlar grubu ile terc&uuml;me sekt&ouml;r&uuml;nde T&uuml;rkiye&lsquo;de olduğu gibi t&uuml;m d&uuml;nyada da bilinen saygın bir marka olmayı başarmaktır.</span><br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">Sunduğumuz terc&uuml;me hizmetleri aracılığıyla, uluslararası platformlarda bağlantılarımızı g&uuml;&ccedil;lendirmeyi arzu etmekteyiz.</span><br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<strong style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0); text-align: justify;\">Misyon:</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">&nbsp;EDU &Ccedil;eviri olarak misyonumuz, terc&uuml;me ve belgeleme alanlarında Avrupa şirketleri tarafından sağlanan, ekonomik k&uuml;reselleşme ve T&uuml;rkiye ile Avrupa arasındaki g&uuml;&ccedil;lendirme ilişkilerinden doğan &ouml;nemli boyutlardaki iş akışını devam ettirmektir. Y&uuml;ksek kalitemizin, maliyet olarak uygun servislerimizin ve g&uuml;venilir iş etiğimizin karlılıklarına katkıda bulunacağını umuyoruz.</span><br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">M&uuml;şterilerimizin ihtiya&ccedil; ve memnuniyetini kendimize g&ouml;rev bilerek EDU &Ccedil;eviri olarak memnuniyetle, m&uuml;şterilerimize diller arası m&uuml;kemmel bir iletişim sağlamak i&ccedil;in &ccedil;alışıyoruz. EDU &Ccedil;eviri&lsquo;de, karlılığımızın, m&uuml;şterilerimizin karlılığına bağlı olduğuna inanıyor ve misyonumuzun bu basit ilke &uuml;zerine kurulu olduğunu &ccedil;ok iyi biliyoruz.</span>', 1, NULL),
(33, NULL, 'Ekibimiz', '<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">EDU &Ccedil;eviri&lsquo;de projeleri her aşamasıyla y&uuml;r&uuml;tmek i&ccedil;in kendi uzmanlık alanları olan profesyonellerden oluşan bir ekip bulunmaktadır. Bu da, hataları yok ederek y&uuml;ksek standartlarda, en iyi kalitede işler &uuml;rettiğimiz anlamına gelmektedir. Ofis i&ccedil;i terc&uuml;manlarımızın ayrı uzmanlık alanları bulunmaktadır. B&ouml;ylece, sizin bize iş getirmenize gerek kalmadan biz sizin iş hayatınıza ve d&uuml;nyanıza girmekteyiz ve metinleriniz &uuml;zerinde bu a&ccedil;ıdan &ccedil;alışmaktayız.</span><br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">Ayrıca d&uuml;zenli kontrol ve d&uuml;zeltme işlemleri i&ccedil;in deneyimli edit&ouml;rlerimiz ve kalite kontrol uzmanlarımız hazır bulunmaktadır. Bu da size her tarzda, ihtiya&ccedil;larınıza uygun şekilde, kontrol edilmiş, m&uuml;kemmel &ccedil;eviriler sunacağımız anlamına gelmektedir.</span><br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<br style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">Bir&ccedil;ok &uuml;lkeden&nbsp;</span><strong style=\"margin: 0px; padding: 0px; border: 0px; font-size: 14px; font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; vertical-align: baseline; letter-spacing: 0.042px; color: rgb(0, 0, 0); text-align: justify;\">1000&lsquo;in</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Myriad Pro&quot;, Arial, Helvetica; font-size: 14px; letter-spacing: 0.042px; text-align: justify;\">&nbsp;&uuml;zerinde terc&uuml;manımız olmasının ve en iyi terc&uuml;meleri &uuml;retmedeki &ouml;nemli rol&uuml;m&uuml;z&uuml;n yanı sıra g&uuml;ncel terc&uuml;me teknolojilerinden haberdar olduklarından emin olmak i&ccedil;in ofis i&ccedil;i terc&uuml;manlarımızı da eğitmekteyiz. Bir metnin terc&uuml;mesinde bir&ccedil;ok aşama vardır. Biz de &ccedil;eviri, masa&uuml;st&uuml; yayıncılık, redaksiyon ve kalite kontrol ekipleriyle bağlantı halinde olan proje y&ouml;netmenlerimizle bu aşamaların her birini s&uuml;rekli gelişen bir şekilde y&ouml;netmeye hazır bir ekibimiz olduğuna garanti vermekte ve bunların hepsini zamanında ve doğru bir şekilde yapmaktayız.</span>', 1, NULL),
(34, NULL, 'İş Akışı', 'Lorem Ipsum, dizgi ve baskı end&uuml;strisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak &uuml;zere bir yazı galerisini alarak karıştırdığı 1500&#39;lerden beri end&uuml;stri standardı sahte metinler olarak kullanılmıştır.', 1, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `musteri`
--

CREATE TABLE `musteri` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `drm` tinyint(1) DEFAULT '1',
  `resim` varchar(255) DEFAULT NULL,
  `tarih` text,
  `imza` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `organizasyon`
--

CREATE TABLE `organizasyon` (
  `id` int(11) NOT NULL,
  `kid` int(11) DEFAULT NULL,
  `akid` int(11) DEFAULT NULL,
  `drm` tinyint(1) DEFAULT '1',
  `sra` int(11) DEFAULT NULL,
  `tip` tinyint(1) DEFAULT '1',
  `baslik` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `resim` varchar(255) DEFAULT NULL,
  `video` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `fiyat` varchar(255) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `organizasyon`
--

INSERT INTO `organizasyon` (`id`, `kid`, `akid`, `drm`, `sra`, `tip`, `baslik`, `resim`, `video`, `fiyat`) VALUES
(21, 14, NULL, 1, 4, 1, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', '1615663332.JPG', NULL, '6.00 TL'),
(22, 14, NULL, 1, 5, 1, 'Gold Napolyon Sandalye (Kapitone Minderli)', '658540701.JPG', NULL, '6.00 TL'),
(23, 14, NULL, 1, 5, 1, 'Gümüs Napolyon Sandalye (Kapitone Minderli)', '855898054.JPG', NULL, '6.00 TL'),
(24, 14, NULL, 1, 6, 1, 'Pleksi Napolyon Sandalye (Kapitone Minderli)', '1898079790.jpg', NULL, '10.00 TL');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ornekproje`
--

CREATE TABLE `ornekproje` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `icerik_ar` text,
  `icerik_ru` text,
  `icerik_en` text,
  `baslik_ar` varchar(255) DEFAULT NULL,
  `baslik_ru` varchar(255) DEFAULT NULL,
  `baslik_en` varchar(255) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `resim` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `ornekproje`
--

INSERT INTO `ornekproje` (`id`, `sra`, `baslik`, `icerik`, `icerik_ar`, `icerik_ru`, `icerik_en`, `baslik_ar`, `baslik_ru`, `baslik_en`, `tarih`, `resim`) VALUES
(23, NULL, 'Wow Otel', '<div style=\"box-sizing: border-box; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif; font-size: 14px;\">\r\n	<div>\r\n		<div>\r\n			Lorem Ipsum, dizgi ve baskı end&uuml;strisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak &uuml;zere bir yazı galerisini alarak karıştırdığı 1500&#39;lerden beri end&uuml;stri standardı sahte metinler olarak kullanılmıştır.</div>\r\n		<div>\r\n			&nbsp;</div>\r\n		<div>\r\n			Beşy&uuml;z yıl boyunca varlığını s&uuml;rd&uuml;rmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sı&ccedil;ramıştır. 1960&#39;larda Lorem Ipsum pasajları da i&ccedil;eren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum s&uuml;r&uuml;mleri i&ccedil;eren masa&uuml;st&uuml; yayıncılık yazılımları ile pop&uuml;ler olmuştur.</div>\r\n	</div>\r\n</div>\r\n<br />\r\n', '<p>\r\n	Rumeli Hisarı Baltalimanı Caddesi&rsquo;nde bulunan, a&ccedil;ık b&uuml;fe kahvaltı ve steak house konseptlerinde hizmet veren İstanbul&rsquo;un en eski ve en prestijli mek&acirc;nlarından birisi olarak bilinen Oba Restoran&#39;ın g&uuml;nl&uuml;k 500 kişi kapasiteli mutfağının;</p>\r\n<ul>\r\n	<li>\r\n		Mutfak yerleşim projelendirmesi,</li>\r\n	<li>\r\n		Gaz, elektrik, su ve havalandırma tesisat projelendirmesi,</li>\r\n	<li>\r\n		T&uuml;m cihaz ve donanım &uuml;retim ve kurumlumları,</li>\r\n</ul>\r\n<br />\r\n<p>\r\n	Kayalar End&uuml;striyel Mutfak tarafından hazırlanmış, &uuml;retilmiş ve kurulumu yapılmıştır.</p>\r\n<p>\r\n	Proje dahilinde restorana aşağıda listelenen &uuml;r&uuml;nler uygulanmıştır:</p>\r\n', '<p>\r\n	Rumeli Hisarı Baltalimanı Caddesi&rsquo;nde bulunan, a&ccedil;ık b&uuml;fe kahvaltı ve steak house konseptlerinde hizmet veren İstanbul&rsquo;un en eski ve en prestijli mek&acirc;nlarından birisi olarak bilinen Oba Restoran&#39;ın g&uuml;nl&uuml;k 500 kişi kapasiteli mutfağının;</p>\r\n<ul>\r\n	<li>\r\n		Mutfak yerleşim projelendirmesi,</li>\r\n	<li>\r\n		Gaz, elektrik, su ve havalandırma tesisat projelendirmesi,</li>\r\n	<li>\r\n		T&uuml;m cihaz ve donanım &uuml;retim ve kurumlumları,</li>\r\n</ul>\r\n<br />\r\n<p>\r\n	Kayalar End&uuml;striyel Mutfak tarafından hazırlanmış, &uuml;retilmiş ve kurulumu yapılmıştır.</p>\r\n<p>\r\n	Proje dahilinde restorana aşağıda listelenen &uuml;r&uuml;nler uygulanmıştır:</p>\r\n', '<p>\r\n	Rumeli Hisarı Baltalimanı Caddesi&rsquo;nde bulunan, a&ccedil;ık b&uuml;fe kahvaltı ve steak house konseptlerinde hizmet veren İstanbul&rsquo;un en eski ve en prestijli mek&acirc;nlarından birisi olarak bilinen Oba Restoran&#39;ın g&uuml;nl&uuml;k 500 kişi kapasiteli mutfağının;</p>\r\n<ul>\r\n	<li>\r\n		Mutfak yerleşim projelendirmesi,</li>\r\n	<li>\r\n		Gaz, elektrik, su ve havalandırma tesisat projelendirmesi,</li>\r\n	<li>\r\n		T&uuml;m cihaz ve donanım &uuml;retim ve kurumlumları,</li>\r\n</ul>\r\n<br />\r\n<p>\r\n	Kayalar End&uuml;striyel Mutfak tarafından hazırlanmış, &uuml;retilmiş ve kurulumu yapılmıştır.</p>\r\n<p>\r\n	Proje dahilinde restorana aşağıda listelenen &uuml;r&uuml;nler uygulanmıştır:</p>\r\n', 'Oba Steak House', 'Oba Steak House', 'Oba Steak House', NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ornekprojegaleri`
--

CREATE TABLE `ornekprojegaleri` (
  `id` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `sra` int(11) DEFAULT NULL,
  `resim` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `ornekprojegaleri`
--

INSERT INTO `ornekprojegaleri` (`id`, `uid`, `sra`, `resim`) VALUES
(328, 32, 1, '1948148540.jpg'),
(329, 32, 2, '151808261.jpg'),
(330, 32, 3, '737433356.jpg'),
(331, 32, 4, '292364776.jpg'),
(332, 32, 5, '1280504871.jpg'),
(333, 32, 6, '423088749.jpg'),
(334, 33, 1, '1641496984.jpg'),
(335, 33, 2, '640148258.jpg'),
(336, 33, 3, '269673146.jpg'),
(337, 33, 4, '976321031.jpg'),
(338, 33, 5, '1562325997.jpg'),
(339, 34, 1, '471345590.jpg'),
(340, NULL, 1, '1875016305.jpg'),
(341, NULL, 1, '1301496209.jpg'),
(342, NULL, 1, '575688831.jpg'),
(343, NULL, 1, '670334207.jpg'),
(344, NULL, 1, '1558421597.jpg'),
(350, NULL, 1, '360280008.jpg'),
(351, NULL, 1, '643429983.jpg'),
(352, NULL, 1, '1967672355.jpg'),
(353, NULL, 1, '673986643.jpg'),
(354, NULL, 1, '1529066401.jpg'),
(355, NULL, 1, '1661343836.jpg'),
(356, NULL, 1, '341250212.jpg'),
(357, NULL, 1, '1977109907.jpg'),
(358, NULL, 1, '1243474299.jpg'),
(359, NULL, 1, '785262756.jpg'),
(360, NULL, 1, '989371410.jpg'),
(361, NULL, 1, '587018952.jpg'),
(393, 23, 1, '637981218.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `paketlerimiz`
--

CREATE TABLE `paketlerimiz` (
  `id` int(11) NOT NULL,
  `sra` int(11) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `icerik` text,
  `icerik_ar` text,
  `icerik_ru` text,
  `icerik_en` text,
  `baslik_ar` varchar(255) DEFAULT NULL,
  `baslik_ru` varchar(255) DEFAULT NULL,
  `baslik_en` varchar(255) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `fiyat` varchar(255) DEFAULT NULL,
  `paket` text,
  `resim` varchar(255) DEFAULT NULL,
  `uid` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `paketlerimiz`
--

INSERT INTO `paketlerimiz` (`id`, `sra`, `baslik`, `icerik`, `icerik_ar`, `icerik_ru`, `icerik_en`, `baslik_ar`, `baslik_ru`, `baslik_en`, `tarih`, `fiyat`, `paket`, `resim`, `uid`) VALUES
(29, NULL, 'Beyaz', '<em>Nisanmasasi.com</em> adres ve iletişim bilgilerine <a href=\"http://nisanmasasi.com/index.php?page=iletisim\">buraya tıklayarak</a> ulaşabilirsiniz.<br />\r\n<br />\r\nPaketlerimiz hakkında daha detaylı bilgi almak i&ccedil;in aşağıda belirtmiş olduğumuz<br />\r\ntelefon ve mail adreslerinden 7/24 ulaşa bilirsiniz.<br />\r\n<br />\r\nİrtibat Bilgilerimiz<br />\r\nGSM : 0532 176 46 50<br />\r\nMail :<a href=\"mailto:satis@nisanmasasi.com\" target=\"_blank\"> satis@nisanmasasi.com</a>&nbsp;<br />\r\n<br />\r\n', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1.250 TL', '1 adet Beyaz lake masa<br />\r\n2 adet Beyaz lake s&uuml;tun<br />\r\n2 adet Beyaz lake vazo ve &ccedil;i&ccedil;eği<br />\r\n2 adet G&uuml;m&uuml;ş kaplama vazo ve &ccedil;i&ccedil;eği&lt;<br />\r\n2 adet G&uuml;m&uuml;ş beş kollu şamdan ve &ccedil;i&ccedil;eği<br />\r\n2 adet Ayna y&uuml;kseltici<br />\r\n2 adet G&uuml;m&uuml;ş tas mumluk<br />\r\n4 adet G&uuml;m&uuml;ş tea ligt mumluk<br />\r\n1 adet G&uuml;m&uuml;ş Jardinyer (Pasta y&uuml;kselticisi)<br />\r\n1 adet Pleksi ayna isimlik<br />\r\n1 adet G&uuml;m&uuml;ş nişan tepsisi<br />\r\n', '2084298678.jpg', NULL),
(30, NULL, 'Gümüş', '<em>Nisanmasasi.com</em> adres ve iletişim bilgilerine <a href=\"http://nisanmasasi.com/index.php?page=iletisim\">buraya tıklayarak</a> ulaşabilirsiniz.<br />\r\n<br />\r\nPaketlerimiz hakkında daha detaylı bilgi almak i&ccedil;in aşağıda belirtmiş olduğumuz<br />\r\ntelefon ve mail adreslerinden 7/24 ulaşa bilirsiniz.<br />\r\n<br />\r\nİrtibat Bilgilerimiz<br />\r\nGSM : 0532 176 46 50<br />\r\nMail :<a href=\"mailto:satis@nisanmasasi.com\" target=\"_blank\"> satis@nisanmasasi.com</a>&nbsp;<br />\r\n<br />\r\n', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1.250 TL', '1 adet G&uuml;m&uuml;ş ayna masa<br />\r\n2 adet G&uuml;m&uuml;ş ayna s&uuml;tun<br />\r\n2 adet G&uuml;m&uuml;ş kaplama vazo ve &ccedil;i&ccedil;eği<br />\r\n2 adet G&uuml;m&uuml;ş kaplama vazo ve &ccedil;i&ccedil;eği<br />\r\n2 adet Beş kollu g&uuml;m&uuml;ş şamdan ve &ccedil;i&ccedil;eği<br />\r\n4 adet ayna y&uuml;kseltici<br />\r\n2 adet g&uuml;m&uuml;ş tas mumluk<br />\r\n4 adet g&uuml;m&uuml;ş tea ligt mumluk<br />\r\n1 adet&nbsp; g&uuml;m&uuml;ş jardinyer (Pasta y&uuml;kselticisi)<br />\r\n1 adet pleksi ayna isimlik<br />\r\n1 adet G&uuml;m&uuml;ş nişan tepsisi', '713970366.jpg', NULL),
(31, NULL, 'Gold', '<em>Nisanmasasi.com</em> adres ve iletişim bilgilerine <a href=\"http://nisanmasasi.com/index.php?page=iletisim\">buraya tıklayarak</a> ulaşabilirsiniz.<br />\r\n<br />\r\nPaketlerimiz hakkında daha detaylı bilgi almak i&ccedil;in aşağıda belirtmiş olduğumuz<br />\r\ntelefon ve mail adreslerinden 7/24 ulaşa bilirsiniz.<br />\r\n<br />\r\nİrtibat Bilgilerimiz<br />\r\nGSM : 0532 176 46 50<br />\r\nMail :<a href=\"mailto:satis@nisanmasasi.com\" target=\"_blank\"> satis@nisanmasasi.com</a>&nbsp;<br />\r\n<br />\r\n', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1.250 TL', '1adet Gold ayna masa<br />\r\n2 adet Gold ayna s&uuml;tun<br />\r\n2 adet Gold kaplama vazo ve &ccedil;i&ccedil;eği<br />\r\n2 adet Gold kaplama vazo ve &ccedil;i&ccedil;eği<br />\r\n2 adet Beş kollu gold şamdan ve &ccedil;i&ccedil;eği<br />\r\n4 adet Ayna y&uuml;kseltici<br />\r\n2 adet Gold tas mumluk<br />\r\n4 adet Gold tea ligt mumluk<br />\r\n1 adet &nbsp;Gold jardinyer (Pasta y&uuml;kselticisi)<br />\r\n1 adet pleksi ayna isimlik<br />\r\n1 Adet gold nişan tepsisi', '563420960.jpg', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `paketlerimizgaleri`
--

CREATE TABLE `paketlerimizgaleri` (
  `id` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `sra` int(11) DEFAULT NULL,
  `resim` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `paketlerimizgaleri`
--

INSERT INTO `paketlerimizgaleri` (`id`, `uid`, `sra`, `resim`) VALUES
(328, 32, 1, '1948148540.jpg'),
(329, 32, 2, '151808261.jpg'),
(330, 32, 3, '737433356.jpg'),
(331, 32, 4, '292364776.jpg'),
(332, 32, 5, '1280504871.jpg'),
(333, 32, 6, '423088749.jpg'),
(334, 33, 1, '1641496984.jpg'),
(335, 33, 2, '640148258.jpg'),
(336, 33, 3, '269673146.jpg'),
(337, 33, 4, '976321031.jpg'),
(338, 33, 5, '1562325997.jpg'),
(339, 34, 1, '471345590.jpg'),
(340, NULL, 1, '1875016305.jpg'),
(341, NULL, 1, '1301496209.jpg'),
(342, NULL, 1, '575688831.jpg'),
(343, NULL, 1, '670334207.jpg'),
(344, NULL, 1, '1558421597.jpg'),
(350, NULL, 1, '360280008.jpg'),
(351, NULL, 1, '643429983.jpg'),
(352, NULL, 1, '1967672355.jpg'),
(353, NULL, 1, '673986643.jpg'),
(354, NULL, 1, '1529066401.jpg'),
(355, NULL, 1, '1661343836.jpg'),
(356, NULL, 1, '341250212.jpg'),
(357, NULL, 1, '1977109907.jpg'),
(358, NULL, 1, '1243474299.jpg'),
(359, NULL, 1, '785262756.jpg'),
(360, NULL, 1, '989371410.jpg'),
(361, NULL, 1, '587018952.jpg'),
(437, 29, 6, '1624959315.jpg'),
(438, 29, 3, '1893748452.jpg'),
(439, 29, 5, '1886501064.jpg'),
(440, 29, 2, '747461879.jpg'),
(441, 29, 4, '450645831.jpg'),
(442, 29, 1, '1169881931.jpg'),
(443, 30, 1, '1975911920.jpg'),
(444, 30, 2, '831583635.jpg'),
(445, 30, 3, '995383961.jpg'),
(446, 30, 4, '272250826.jpg'),
(447, 30, 5, '607362618.jpg'),
(448, 30, 6, '1227761862.jpg'),
(449, 30, 7, '293903671.jpg'),
(450, 30, 8, '361764472.jpg'),
(451, 30, 9, '518534674.jpg'),
(452, 30, 10, '8794608.jpg'),
(453, 31, 1, '1865220469.jpg'),
(454, 31, 2, '1093572711.jpg'),
(455, 31, 3, '1681641936.jpg'),
(456, 31, 4, '208416152.jpg'),
(457, 31, 5, '1483071298.jpg'),
(458, 31, 6, '310363099.jpg'),
(459, 31, 7, '1429037305.jpg'),
(460, 31, 8, '681887913.jpg'),
(461, 31, 9, '51047218.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `referanslar`
--

CREATE TABLE `referanslar` (
  `id` int(11) NOT NULL,
  `drm` tinyint(1) DEFAULT '1',
  `sra` int(11) DEFAULT NULL,
  `sehir` int(11) DEFAULT NULL,
  `ilce` int(11) DEFAULT NULL,
  `sektor` int(11) DEFAULT NULL,
  `program` char(10) DEFAULT NULL,
  `resim` varchar(255) DEFAULT NULL,
  `baslik` varchar(255) DEFAULT NULL,
  `detay` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `referanslar`
--

INSERT INTO `referanslar` (`id`, `drm`, `sra`, `sehir`, `ilce`, `sektor`, `program`, `resim`, `baslik`, `detay`) VALUES
(62, 1, 11, NULL, NULL, NULL, NULL, '1432081090.jpg', NULL, NULL),
(63, 1, 13, NULL, NULL, NULL, NULL, '596373653.png', NULL, NULL),
(64, 1, 12, NULL, NULL, NULL, NULL, '294025466.png', NULL, NULL),
(65, 1, 1, NULL, NULL, NULL, NULL, '2094726749.jpg', NULL, NULL),
(66, 1, 2, NULL, NULL, NULL, NULL, '1844125771.jpg', NULL, NULL),
(67, 1, 3, NULL, NULL, NULL, NULL, '738463243.jpg', NULL, NULL),
(68, 1, 4, NULL, NULL, NULL, NULL, '1426910941.png', NULL, NULL),
(69, 1, 5, NULL, NULL, NULL, NULL, '1720394166.png', NULL, NULL),
(71, 1, 6, NULL, NULL, NULL, NULL, '1631687775.jpg', NULL, NULL),
(72, 1, 7, NULL, NULL, NULL, NULL, '1417624331.jpg', NULL, NULL),
(73, 1, 9, NULL, NULL, NULL, NULL, '319161441.jpg', NULL, NULL),
(74, 1, 8, NULL, NULL, NULL, NULL, '1512322785.jpg', NULL, NULL),
(75, 1, 10, NULL, NULL, NULL, NULL, '1417392350.jpg', NULL, NULL),
(76, 1, 15, NULL, NULL, NULL, NULL, '12529631.jpg', NULL, NULL),
(77, 1, 16, NULL, NULL, NULL, NULL, '1035730850.jpeg', NULL, NULL),
(78, 1, 14, NULL, NULL, NULL, NULL, '2098630495.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `siparis`
--

CREATE TABLE `siparis` (
  `id` int(11) NOT NULL,
  `dosya_list` text,
  `ceviri_text` text,
  `serviceTypeId` varchar(250) DEFAULT '',
  `fileLanguageId` varchar(250) DEFAULT '',
  `interpretLanguageId` varchar(250) DEFAULT '',
  `qualityTypeId` varchar(250) DEFAULT '',
  `categoryTypeId` varchar(250) DEFAULT '',
  `durationTypeId` varchar(250) DEFAULT '',
  `extraService_1` varchar(250) DEFAULT '',
  `extraService_2` varchar(250) DEFAULT '',
  `extraService_3` varchar(250) DEFAULT '',
  `description` text,
  `tarih` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `siparis`
--

INSERT INTO `siparis` (`id`, `dosya_list`, `ceviri_text`, `serviceTypeId`, `fileLanguageId`, `interpretLanguageId`, `qualityTypeId`, `categoryTypeId`, `durationTypeId`, `extraService_1`, `extraService_2`, `extraService_3`, `description`, `tarih`) VALUES
(1, '[\"0:/1.docx\"]', 'ssasaassa', 'Noter Onaylı', 'Türkçe', '[\"Tu00fcrku00e7e\"]', 'Genel', 'Profesyonel Tercüman', 'Standart hızda çeviri', '', '', '', '', '2017-07-30 15:02:31'),
(2, '[\"0:/1.docx\"]', 'ssasaassa', 'Noter Onaylı', 'Türkçe', '[\"Tu00fcrku00e7e\"]', 'Genel', 'Profesyonel Tercüman', 'Standart hızda çeviri', '1', '2', '3', '', '2017-07-30 15:05:05'),
(3, 'null', '', 'Noter Onaylı', 'Türkçe', '[\"Tu00fcrku00e7e\"]', 'Genel', 'Profesyonel Tercüman', 'Standart hızda çeviri', '', '', '', '', '2017-07-30 15:06:20'),
(4, 'null', '', 'Noter Onaylı', 'Türkçe', '[\"Tu00fcrku00e7e\"]', 'Genel', 'Profesyonel Tercüman', 'Standart hızda çeviri', '', '', '', '', '2017-07-30 15:10:12'),
(5, 'null', '', 'Noter Onaylı', 'Türkçe', '[\"Tu00fcrku00e7e\"]', 'Genel', 'Profesyonel Tercüman', 'Standart hızda çeviri', '', '', '', '', '2017-07-30 15:10:17');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `siparislerxx`
--

CREATE TABLE `siparislerxx` (
  `id` int(11) NOT NULL,
  `drm` tinyint(1) DEFAULT '1',
  `tip` tinyint(1) DEFAULT '1',
  `uyeid` int(11) DEFAULT NULL,
  `urunid` int(11) DEFAULT NULL,
  `urunAdi` varchar(255) DEFAULT NULL,
  `adet` int(11) DEFAULT NULL,
  `fiyat` int(11) DEFAULT '0',
  `adSoyad` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `sehir` int(11) DEFAULT NULL,
  `ilce` int(11) DEFAULT NULL,
  `adres` text,
  `tarih` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `siparislerxx`
--

INSERT INTO `siparislerxx` (`id`, `drm`, `tip`, `uyeid`, `urunid`, `urunAdi`, `adet`, `fiyat`, `adSoyad`, `email`, `tel`, `sehir`, `ilce`, `adres`, `tarih`) VALUES
(17, 1, 1, NULL, 30, 'Tek Kollu Şamdan (Çiçekli)', 10, 300, 'sabahat', 'ayse74gulsun@hotmail.com', '05333980514', 41, 511, 'Antrıum sitesi b kapısı 12.blok d:32 Saray Mah. Küçüksu Cad. Harput Sk. No. 2 PK:34768 ', '2015-05-04 20:43:36'),
(18, 1, 1, 6, 30, 'Tek Kollu Şamdan (Çiçekli)', 10, 300, 'SABAHAT GÜLSÜN', 'ayse74gulsun@hotmail.com', '2164293665', 41, 481, 'Saray Mah. Küçüksu Cad. Harput Sk. No. 2 PK:34768 ', '2015-05-04 20:47:58'),
(19, 1, 1, 6, 91, 'Sandalye Fiyonk Bağlama Kiralama', 80, 80, 'SABAHAT GÜLSÜN', 'ayse74gulsun@hotmail.com', '2164293665', 41, 481, 'Saray Mah. Küçüksu Cad. Harput Sk. No. 2 PK:34768 ', '2015-05-04 20:51:58'),
(20, 1, 1, NULL, 50, 'Beş Kollu Gümüş Şamdan (Çiçeksiz)', 2, 60, 'Figen kırtay', 'figenkirtay12@gmail.com', '05070116265', 41, 499, 'Suadiye Mah tekne sokak Vural apt No 8 daire 8  Kadıköy /suadiye', '2015-05-18 00:30:32'),
(21, 1, 1, NULL, 50, 'Beş Kollu Gümüş Şamdan (Çiçeksiz)', 2, 60, 'Figen kirtay', 'figenkirtay12@gmail.com', '05070116265', 41, 499, 'Suadiye Mah tekne sokak No 8 daire 8 suadiye', '2015-05-18 13:04:08'),
(22, 1, 1, NULL, 91, 'Sandalye Fiyonk Bağlama Kiralama', 100, 100, 'MERVE SÜRMELİ', 'mervesurmeli-18@gmail.com', '5414072005', 60, 744, 'mavi gök mavi deniz sitesi marmaris', '2015-05-19 16:10:05'),
(23, 1, 1, 8, 27, 'Beş Kollu Cam Şamdan (Çiçekli)', 2, 140, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:16:14'),
(24, 1, 1, 8, 82, 'Dore Masa Ortası Ayna', 1, 12, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:17:35'),
(25, 1, 1, 8, 60, 'Dore Vazo Şamdan (Canlı Çiçekli)', 1, 60, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:19:00'),
(26, 1, 1, 8, 59, 'Sekiz Kollu Pleksi Şamdan (Canlı Çiçekli)', 1, 80, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:19:37'),
(27, 1, 1, 8, 39, 'Tek Kollu Kafes Şamdan (Canlı Çiçekli)', 1, 40, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:19:52'),
(28, 1, 1, 8, 66, 'Üçlü Gümüş Vazo Şamdan (Çiçekli)', 1, 145, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:20:26'),
(29, 1, 1, 8, 72, 'Gümüş Telkari Supla', 3, 9, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:21:31'),
(30, 1, 1, 8, 75, 'Simli Supla (Dore)', 10, 20, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:21:47'),
(31, 1, 1, 8, 78, 'Krom Telkari Supla (Kare)', 10, 30, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:22:32'),
(32, 1, 1, 8, 73, 'Gümüş Kaplama Supla (Kare)', 5, 15, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:23:06'),
(33, 1, 1, 8, 25, 'Altı kollu Cam Şamdan (Çiçekli)', 1, 90, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:24:14'),
(34, 1, 1, 8, 82, 'Dore Masa Ortası Ayna', 2, 24, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:28:32'),
(35, 1, 1, 8, 104, 'Fiber Gelin Yolu (Yapay Çiçekli)', 1, 150, 'Arzu', 'arzu-karaal@hotmail.com', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 11:38:05'),
(36, 1, 1, NULL, 74, 'Gümüş Kaplama Supla (Yuvarlak)', 38, 114, 'figen çalışkan', 'sfigencaliskan@gmail.com', '5336468956', 41, 485, 'florya otlukbeli sk. no.39/5 bakırköy', '2015-06-10 12:09:46'),
(37, 1, 1, NULL, 109, 'Gelin Yolu Mumları ', 20, 140, 'figen çalışkan', 'sfigencaliskan@gmail.com', '5336468956', 41, 485, 'florya otlukbeli sk. no.39/5 bakırköy', '2015-06-10 12:15:37'),
(38, 1, 1, NULL, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 99, 594, 'gizem kuzu', 'gzmkuzu@hotmail.com', '5319167054', 74, 921, 'aziziye mah gül sok no 12 büyükyoncalı', '2015-06-15 17:16:40'),
(39, 1, 1, NULL, 86, 'Krom Masa Ortası Ayna (Çerçeve)', 16, 128, 'OYA ULUCAN', 'oyaulucan@gmail.com', '05392070759', 41, 505, 'BOĞAZ İÇİ ÜNİVERSİTESİ RUMELİ HİSAR ÜSTÜ KENNEDY LODGE', '2015-06-18 02:19:52'),
(40, 1, 1, NULL, 86, 'Krom Masa Ortası Ayna (Çerçeve)', 16, 128, 'OYA ULUCAN', 'oyaulucan@gmail.com', '05392070759', 41, 505, 'Rumeli Hisarüstü (Sarıyer), 34450 İstanbul, Türkiye BOĞAZİÇİ ÜNİVERSİTESİ KENNEDY LODGE BAHCESİ', '2015-06-18 02:22:23'),
(41, 1, 1, NULL, 86, 'Krom Masa Ortası Ayna (Çerçeve)', 16, 128, 'OYA ULUCAN', 'oyaulucan@gmail.com', '05392070759', 41, 505, 'Rumeli Hisarüstü (Sarıyer), 34450 İstanbul, Türkiye BOĞAZİÇİ ÜNİVERSİTESİ KENNEDY LODGE BAHCESİ', '2015-06-18 02:22:27'),
(42, 1, 1, 9, 86, 'Krom Masa Ortası Ayna (Çerçeve)', 16, 128, 'OYA ULUCAN', 'oyaulucan@gmail.com', '05392070759', 41, 505, 'Rumeli Hisarüstü (Sarıyer), 34450 İstanbul, Türkiye ', '2015-06-18 02:27:23'),
(43, 1, 1, 10, 31, 'Tek Kollu Şamdan (Çiçeksiz)', 15, 225, 'Gizem Yavuz', 'giztuncel@gmail.com', '02122969230', 41, 489, 'kjffjkfjkfkf', '2015-06-19 20:04:18'),
(44, 1, 1, NULL, 108, 'Gelin Yolu Takı (Canlı Çiçek)', 1, 750, 'yelda belen', 'ybelen@gmail.com', '05326832477', 41, 481, 'Heybeliada Ada Beach Club - Çam Limanı', '2015-07-10 09:01:49'),
(45, 1, 1, NULL, 115, 'Pleksi Nikah Kürsüsü (Çiçeksiz)', 1, 200, 'yelda belen', 'ybelen@gmail.com', '05326832477', 41, 481, 'Heybeliada Ada Beach Club', '2015-07-10 09:05:05'),
(46, 1, 1, NULL, 93, 'Dantel Kapak Örtüsü Kiralama', 25, 250, 'yelda belen', 'ybelen@gmail.com', '05326832477', 41, 481, 'Heybeliada Adabeach Club', '2015-07-10 09:07:01'),
(47, 1, 1, NULL, 76, 'Simli Supla (Krom)', 99, 198, 'yelda belen', 'ybelen@gmail.com', '05326832477', 41, 481, 'Heybeliada Ada Beach CLub', '2015-07-10 09:10:01'),
(48, 1, 1, NULL, 115, 'Pleksi Nikah Kürsüsü (Çiçeksiz)', 1, 200, 'ezgi gökmenoğlu', 'ezgigokmenoglu@gmail.com', '0531 932 31 30', 41, 509, 'CAHİDE ON5. Restaurant  Kadırgalar Cad. Maçka Demokrasi Parkı Maçka Nişantaşı / İstanbul ', '2015-07-13 11:05:40'),
(49, 1, 1, NULL, 72, 'Gümüş Telkari Supla', 60, 180, 'berna çakır', 'berna_cakirr@hotmail.com', '05323639866', 41, 501, 'Yeni mah. Atatürk Cad No 17/19 soğanlık', '2015-07-17 22:31:33'),
(50, 1, 1, NULL, 118, 'Bar Standı Kiralama', 3, 225, 'can karaburcak', 'cankaraburcak@isnet.net.tr', '05323557805', 41, 505, 'esentepe sokak 7/2', '2015-07-29 17:53:35'),
(51, 1, 1, NULL, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 24, 144, 'sena erdem', 'ulkusenaerdem@gmail.com', '05321389216', 41, 488, 'kanlıca mah. nuri bey sok. no.3', '2015-07-31 18:06:36'),
(52, 1, 1, 15, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 24, 144, 'sena erdem', 'ulkusenaerdem@gmail.com', '0532189216', 41, 488, 'kanlıca mah. nuri bey sok no.3', '2015-07-31 18:08:45'),
(53, 1, 1, NULL, 100, 'Dore Kristal Gelin Yolu (Çiçeksiz)', 10, 0, 'Merve Özge', 'asdfghjklmerve27@gmail.com', '05070961964', 33, 409, 'Öğretmenevleri mah 31/9', '2015-08-12 11:01:35'),
(54, 1, 1, NULL, 114, 'Pleksi Kürsü Kiralama çiçeksiz', 1, 300, 'Arzu Zenel', 'arzuzenel@hotmail.com', '05333811112', 41, 487, 'Le Meridien Hotel Etiler', '2015-08-12 16:45:15'),
(55, 1, 1, NULL, 120, '10 kişilik Oturma Grubu (2x Sedir , 4x puf , 1xSehpa)', 1, 170, 'ayhan. öz', 'pruva3434@hotmail.com', '533 3038530', 21, 234, 'Esref dincer mah. Yildiz sok ni 7 /4gemlik', '2015-09-12 20:00:39'),
(56, 1, 1, NULL, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 99, 594, 'inci ersoy', 'inci.ersoy@yahoo.com', '05305161371', 41, 505, 'maden mh.yunus emre cad. sarıyer konakları 3.etap sarıyer istanbul', '2015-09-14 01:04:55'),
(57, 1, 1, NULL, 118, 'Bar Standı Kiralama', 1, 75, 'Burcu Göknil', 'burcugoncuoglu@arkitera.com', '0216 355 07 22', 41, 499, 'Cemil Topuzlu cad. İş Bankası Blokları A 8 Feneryolu-Kadiköy 34726 İstanbul', '2015-09-28 17:14:33'),
(58, 1, 1, NULL, 25, 'Altı kollu Cam Şamdan (Çiçekli)', 1, 90, 'nil gungor', 'nilgungor3435@gmail.com', '05376999970', 41, 511, 'Çamlık Mah mercimek şok NO 2 d5 pasaalioglu ap ümraniye ist', '2015-10-11 10:41:33'),
(59, 1, 1, NULL, 83, 'Krom Masa Ortası Ayna', 1, 12, 'DERYA EKŞİ TÜFEKÇİ', 'd.eksi@dngcosmetics.com', '05368718113', 41, 504, 'yenişehir mah no:35 ekşioğlu yeşil vadi evleri no:21 kurtköy', '2015-10-20 14:14:07'),
(60, 1, 1, NULL, 78, 'Krom Telkari Supla (Kare)', 1, 3, 'DERYA EKŞİ TÜFEKÇİ', 'd.eksi@dngcosmetics.com', '05368718113', 41, 504, 'yenişehir mah no:35 ekşioğlu yeşil vadi evleri no:21kurtköy', '2015-10-20 14:15:38'),
(61, 1, 1, NULL, NULL, 'tek kollu kafes şamdan', 13, 0, 'ece karaoglu', 'ece.karaoglu@hotmail.com', '05334153341', 41, 505, 'zekeriyaköy', '2015-11-16 15:29:41'),
(62, 1, 1, NULL, 124, 'Sekiz Kollu Pleksi Şamdan (Çiçeksiz)', 1, 50, 'SEDA KALYON', 'seda.kalyon@gmail.com', '05335975484', 41, 511, 'Şerifali Mahallesi Başer Sokak No:30-32 Y.Dudullu Ümraniye', '2015-11-30 11:06:50'),
(63, 1, 1, NULL, 73, 'Gümüş Kaplama Supla (Kare)', 1, 3, 'Misra beste kulcu', 'kulcumustafa@hotmail.com', '05466751986', 41, 511, 'Hamidiye mah guven 89 sitesi 17 blok daire 2', '2015-12-01 01:37:17'),
(64, 1, 1, 22, 71, 'Dore Telkari Supla ', 1, 3, 'Misra beste kulcu', 'kulcumustafa@hotmail.com', '05466751986', 41, 511, 'Hamidiye mah baris yolu cad guven 89 sitesi 17 blok daire 2 cekmekoy', '2015-12-01 01:41:33'),
(65, 1, 1, 22, 88, 'Krom Masa Mumluğu', 1, 2, 'Misra beste kulcu', 'kulcumustafa@hotmail.com', '05466751986', 41, 511, 'Hamidiye mah baris yolu cad guven 89 sitesi 17 blok daire 2 cekmekoy', '2015-12-01 01:41:47'),
(66, 1, 1, 22, 77, 'Dore Telkari Supla (Kare) ', 1, 3, 'Misra beste kulcu', 'kulcumustafa@hotmail.com', '05466751986', 41, 511, 'Hamidiye mah baris yolu cad guven 89 sitesi 17 blok daire 2 cekmekoy', '2015-12-01 01:42:31'),
(67, 1, 1, 24, 90, 'Streç Kadife Giydirme Kiralama', 20, 40, 'Duygu Demirtaş ', 'duygudmr-85@hotmail.com', '5320580399', 41, 503, 'Altaycesme mah acar sokak Demirtaş apt no 23.6', '2015-12-17 00:19:55'),
(68, 1, 1, NULL, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 51, 306, 'NADİRE', 'nadire@vipasansor.com', '05326763656', 41, 501, 'karlıktepe mah. su deposu sk. no:15 yuvakur sitesi kartal (kartal jimnastik federasyonu karşısı)', '2015-12-24 11:44:58'),
(69, 1, 1, NULL, 127, 'Napolyon Sandalye Kiralama (Beyaz)', 20, 120, 'Nil Kutluk', 'nkutluk@gmail.com', '05326824846', 41, 505, '1. Cadde no:42 D:1 Uskumruköy', '2015-12-28 13:44:59'),
(70, 1, 1, NULL, 25, 'Altı kollu Cam Şamdan (Çiçekli)', 2, 180, 'şeyma ergen', 'seymaergen@gmail.com', '05322580041', 7, 91, 'ozgen sokak mercanoglu apt. 8/8 yenimahalle ANKARA', '2016-01-04 19:24:30'),
(71, 1, 1, NULL, 125, 'Napolyon Sandalye Kiralama (Gold)', 22, 132, 'burcu salman', 'burcuerkalsalman@hotmail.com', '05323684278', 41, 505, 'maden    mah ,nalbantcesme cad .şifasuyu konakları f blok d 2 sariyer istanbul', '2016-01-17 20:26:12'),
(72, 1, 1, NULL, 125, 'Napolyon Sandalye Kiralama (Gold)', 22, 132, 'burcu salman', 'burcuerkalsalman@hotmail.com', '05323684278', 41, 505, 'maden    mah ,nalbantcesme cad .şifasuyu konakları f blok d 2 sariyer istanbul', '2016-01-17 20:26:14'),
(73, 1, 1, NULL, 47, 'Beş Kollu Dore Şamdan (Canlı Çiçekli)', 3, 210, 'burcu salman', 'burcuerkalsalman@hotmail.com', '05323684278', 41, 505, 'maden mah.nalbantçeşme cad şifasuyu konakları f blok d 2 sariyer istanbul', '2016-01-17 20:29:26'),
(74, 1, 1, NULL, 71, 'Dore Telkari Supla ', 28, 84, 'burcu salman', 'burcuerkalsalman@hotmail.com', '05323684278', 41, 505, 'maden mah.nalbant çeşme cad şifasuyu konakları f blok d 2 sariyer istanbul', '2016-01-17 20:32:30'),
(75, 1, 1, NULL, 88, 'Krom Masa Mumluğu', 8, 16, 'Ayşegül Yaşar', 'ay_yasar@yahoo.com.tr', '05326251130', 41, 487, 'Akatlar', '2016-01-19 11:11:20'),
(76, 1, 1, 29, 82, 'Dore Masa Ortası Ayna', 1, 12, 'esra biçer', 'esrabicer2@gmail.com', '0212 541 60 70', 41, 481, 'kavaklı mahallesi kavaklı caddesi gül yapı kavaklı konakları M blok D:14 Beylikdüzü ', '2016-01-27 22:22:45'),
(77, 1, 1, 29, 56, 'Beş Kollu Dore Şamdan (Çiçeksiz)', 1, 30, 'esra biçer', 'esrabicer2@gmail.com', '0212 541 60 70', 41, 481, 'kavaklı mahallesi kavaklı caddesi gül yapı kavaklı konakları M blok D:14 Beylikdüzü ', '2016-01-27 22:24:51'),
(78, 1, 1, NULL, 126, 'Napolyon Sandalye Kiralama (Gümüş)', 25, 150, 'Selin Yırtıcı', 'selinyirtici@gmail.com', '05300376699', 41, 505, 'Maden Mah acarlar sitesi X84 B Sarıyer İstanbul', '2016-02-16 12:49:34'),
(79, 1, 1, NULL, 91, 'Sandalye Fiyonk Bağlama Kiralama', 40, 40, 'Ecem umitlier', 'ecemumitlier@gmail.com', '05304020304', 42, 532, 'Ykm arkasi sgk binasi alti papagan cafe', '2016-02-20 11:59:40'),
(80, 1, 1, NULL, 78, 'Krom Telkari Supla (Kare)', 4, 12, 'isil sahin', 'kaleli.isil@gmail.com', '5336226626', 41, 485, 'Şenlikköy mah. Yamaç sok no10 d 2 Bakırköy Florya İstanbul', '2016-02-20 12:42:57'),
(81, 1, 1, NULL, 35, 'Tek Kollu Gümüş Şamdan (Çiçeksiz)', 2, 40, 'isil sahin', 'kaleli.isil@gmail.com', '5336226626', 41, 485, 'Florya', '2016-02-20 12:44:55'),
(82, 1, 1, NULL, 83, 'Krom Masa Ortası Ayna', 2, 24, 'isil sahin', 'kaleli.isil@gmail.com', '5336226626', 41, 485, 'Florya', '2016-02-20 12:47:31'),
(83, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 6, 36, 'özge kuşoğlu', 'ozgekusoglu@gmail.com', '05454799550', 41, 489, 'kadımehmet mah. yeni sok. no:36/8  beyoğlu', '2016-03-03 17:51:53'),
(84, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 25, 150, 'dilek şen', 'dlk_sen@windowslive.com', '05337756840', 41, 494, 'yıldırım beyazıt cd.mevlana mahallesi.sönmez sitesi.c blok.kat 5', '2016-03-04 17:43:52'),
(85, 1, 1, NULL, 351, 'Pleksi Nikah Kürsüsü', 1, 200, 'mehtap berber', 'mhtpbrbr@gmail.com', '532326434', 41, 487, 'gayrettepe - beşiktaş', '2016-03-08 16:46:12'),
(86, 1, 1, NULL, 351, 'Pleksi Nikah Kürsüsü', 1, 200, 'mehtap berber', 'mhtpbrbr@gmail.com', '532326434', 41, 487, 'gayrettepe - beşiktaş', '2016-03-08 16:46:26'),
(87, 1, 1, NULL, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 30, 180, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:02:20'),
(88, 1, 1, NULL, 281, 'Beş Kollu Kristal Şamdan (Çiçeksiz)', 2, 60, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No8 k. 2 d. 2 yeşilköy', '2016-03-10 10:08:01'),
(89, 1, 1, NULL, 267, 'Tek Kollu Gold Kaplama Şamdan (Çiçeksiz)', 2, 40, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. N. 8 k. 2 d. 2 yeşilköy', '2016-03-10 10:13:28'),
(90, 1, 1, NULL, 317, 'Gold Masa Ortası Ayna', 2, 24, 'Nuray çınar', 'buraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. N. 8 k. 2 d. 2 yeşilköy', '2016-03-10 10:14:46'),
(91, 1, 1, NULL, 321, 'Gold Çerçeve Ayna', 1, 20, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. N. 8 k. 2 d. 2 yeşilköy', '2016-03-10 10:18:13'),
(92, 1, 1, NULL, 287, 'Üçlü Gold Vazo (Çiçeksiz)', 1, 30, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2 yeşilköy', '2016-03-10 10:22:18'),
(93, 1, 1, NULL, 241, 'Üçlü Cam Şamdan (Çiçeksiz)', 1, 40, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2 yeşilköy ', '2016-03-10 10:26:25'),
(94, 1, 1, NULL, 313, 'Gül Kurusu ve Somon Renkleri', 1, 40, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2 yeşilköy ', '2016-03-10 10:45:52'),
(95, 1, 1, 37, 275, 'Beş Kollu King Şamdan (Çiçeksiz)', 2, 60, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:56:08'),
(96, 1, 1, 37, 241, 'Üçlü Cam Şamdan (Çiçeksiz)', 1, 40, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:56:38'),
(97, 1, 1, 37, 287, 'Üçlü Gold Vazo (Çiçeksiz)', 1, 30, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:56:54'),
(98, 1, 1, 37, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 30, 180, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:59:26'),
(99, 1, 1, 37, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 30, 180, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:59:32'),
(100, 1, 1, 37, 313, 'Gül Kurusu ve Somon Renkleri', 1, 40, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 11:00:18'),
(101, 1, 1, 37, 321, 'Gold Çerçeve Ayna', 1, 20, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 11:00:39'),
(102, 1, 1, 37, 317, 'Gold Masa Ortası Ayna', 2, 24, 'Nuray çınar', 'nuraycinarr@gmail.com', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 11:00:57'),
(103, 1, 1, 38, 275, 'Beş Kollu King Şamdan (Çiçeksiz)', 2, 60, 'Gulsum Gönen ', 'gulsum.gonen@hotmail.com', '02128640927', 41, 490, 'Batıköy mahallesi Aktay caddesi a 3 27 daire 4 Büyükçekmece İstanbul ', '2016-03-12 20:32:46'),
(104, 1, 1, NULL, 260, 'Tek Kollu King Şamdan (Çiçekli)', 2, 120, 'bahar günce', 'bahargunce.21@gmail.com', '05347879306', 41, 503, 'altay çeşme mahallesi.varna sok no.16\r\n\r\nmaltepe /istanbul', '2016-03-14 17:25:41'),
(105, 1, 1, NULL, 245, 'Altı Kollu Cam Şamdan (Çiçeksiz)', 1, 50, 'TOLGA ŞEKERCİOĞLU', 'lalcicek@hotmail.com', '0 532 291 94 15', 42, 532, 'DR. MUSTAFA BEY CAD NO 37 D 2 ALSANCAK\r\nLAL DAVET ORGANİZASYON\r\n', '2016-03-15 11:05:43'),
(106, 1, 1, NULL, 246, 'Beş Kollu Cam Şamdan (Çiçekli)', 2, 120, 'Zeynep bozdağ', 'aszeypek@hormail.com', '05536039133', 41, 511, 'Tantavi mah suryapı exen istanbul sitesi D4 daire:13 ümraniye', '2016-03-23 17:26:09'),
(107, 1, 1, NULL, 349, 'Giriş Tak Dekoru (Yapay Çiçekli)', 1, 400, 'mehtap berber', 'mhtpbrbr@gmail.com', '05327326434', 41, 490, 'Bahçeşehir Gölet Mevkii-Başakşehir İstanbul', '2016-03-24 11:24:27'),
(108, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 1, 6, 'mehtap berber', 'mhtpbrbr@gmail.com', '5327326434', 32, 396, 'rixos otel', '2016-03-24 11:26:28'),
(109, 1, 1, NULL, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 15, 90, 'Zehra Alper', 'zehraalper34@hotmail.com', '05336800183', 41, 488, 'Samanyolu sok erguvan evleri sitesi Soğuksu Beykoz istanbul', '2016-04-04 23:07:08'),
(110, 1, 1, NULL, 273, 'Beş Kollu Gümüş Şamdan (Çiçeksiz)', 2, 60, 'Elif Avcı', 'Elifavci44@gmail.com', '05416321128', 41, 496, 'Silivrikapı mahallesi uzay sokak Deniz apartmanı no3 daire 4 Fatih istanbul', '2016-04-10 16:37:34'),
(111, 1, 1, NULL, 333, 'Serpme Giydirme', 20, 40, 'aycan nursen', 'aycan-e-@hotmail.com', '053669535', 41, 481, 'adaşlar.mah.nıhan sok.no25', '2016-04-18 12:14:31'),
(112, 1, 1, NULL, 244, 'Altı Kollu Cam Şamdan (Çiçekli)', 100, 9000, 'nilüfer pehlivan', 'nlp.pehlivan@hotmail.com', '05333732591', 41, 500, 'kağıthane', '2016-04-21 11:13:16'),
(113, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 400, 2400, 'Zerrin kamil', 'zero_nazo@msn.com', '532 7428907', 68, 854, 'Anakent sosyal tesisleri', '2016-04-25 00:41:45'),
(114, 1, 1, NULL, 254, 'Tek Kollu Gümüş Şamdan (Çiçekli)', 2, 100, 'şerife hande özçelik', 'shozcelik@gmail.com', '05339212474', 7, 76, 'Çayırlı caddesi bağlıca mahallesi bahçelievler sitesi No:2/1 ', '2016-04-25 13:03:34'),
(115, 1, 1, NULL, 275, 'Beş Kollu King Şamdan (Çiçeksiz)', 2, 60, 'BERRİN ADIGÜZEL', 'birroladiguzel.insaat@gmail.com', '0530 617 02 00', 41, 499, 'YENİSAHRA MAH. FATİH CAD.NO.75 ATAŞEHİR İST.', '2016-05-05 12:23:23'),
(116, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 3, 9, 'BERRİN ADIGÜZEL', 'biroladiguzel.insaat@gmail', '0530 617 02 00', 41, 499, 'YENİSAHRA MAH. FATİH CAD. NO.75 ATAŞEHİR İST.', '2016-05-05 12:26:16'),
(117, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 3, 9, 'BERRİN ADIGÜZEL', 'biroladiguzel.insaat@gmail.com', '0530 617 02 00', 41, 499, 'YENİSAHRA MAH. FATİH CAD. NO.75 ATAŞEHİR İST.', '2016-05-05 12:33:42'),
(118, 1, 1, NULL, 269, 'Üç Kollu Şamdan (Çiçeksiz)', 2, 50, 'ÖZLEM', 'culumozlem@gmail.com', 'CULUM', 41, 487, 'çırağan caddesi bahçeşehir üniversitesi no 4 coop direktörlüğü beşiktaş - istanbul ', '2016-05-09 14:27:23'),
(119, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 1, 3, 'dfsdfsdf', 'dfs', 'sdfs', 4, 49, 'sfsdf', '2016-05-14 15:06:28'),
(120, 1, 1, 46, 271, 'Beş Kollu Gold Şamdan (Çiçeksiz)', 4, 120, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 19:54:46'),
(121, 1, 1, 46, 270, 'Beş Kollu Gold Şamdan (Çiçekli)', 2, 120, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 19:57:26'),
(122, 1, 1, 46, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 15, 90, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 19:59:08'),
(123, 1, 1, 46, 329, 'Masa Örtüsü', 1, 10, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 20:01:16'),
(124, 1, 1, 46, 287, 'Üçlü Gold Vazo (Çiçeksiz)', 2, 60, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 20:06:52'),
(125, 1, 1, 46, 298, 'Yedi Kollu Gold Kaplama (Çiçeksiz)', 2, 90, 'Aykut Sonat Yüce', 'sonatyuce@gmail.com', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 20:08:27'),
(126, 1, 1, NULL, 338, 'Gümüş Kristal Gelin yolu (Çiçeksiz)', 4, 120, 'perihan ötügen', 'divanmusiki@gml.com', '05323136046', 41, 484, 'nurettin topçu kültür merkezi bahçelievler ist', '2016-05-19 00:15:38'),
(127, 1, 1, NULL, 362, 'Volkan Show (Işık Seli)', 6, 450, 'NİLAY YILDIZ', 'nilaygercekyildiz@hotmail.com', '05458230381', 41, 506, 'KAVAKLI MAH. İSTİKLAL CAD.N O:3 D:3', '2016-05-21 02:22:36'),
(128, 1, 1, NULL, 273, 'Beş Kollu Gümüş Şamdan (Çiçeksiz)', 2, 60, 'Berin Günderci', 'bgunderci@essegrup.com', '05444997072', 41, 500, 'Talatpaşa mah. aslangazi cad. ipekkuşak sok no:7 daire 14 Kağıthane-İstanbul', '2016-05-21 12:00:40'),
(129, 1, 1, NULL, 312, 'Simli Supla (Gümüş)', 225, 450, 'YELDA YILDIRIM ', 'yelda@teknomek.net', '5434109870', 41, 489, 'bahriye cad nuhka apt no:149 kat:1 d:3 Kasımpaşa/ist ', '2016-05-25 15:31:25'),
(130, 1, 1, NULL, 362, 'Volkan Show (Işık Seli)', 1, 75, 'yelda yıldırım ', 'yelda@teknomek.net', '5434109870', 41, 489, 'bahriye cad nuhka apt no 149 Kasımpaşa ', '2016-05-25 15:41:59'),
(131, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 2, 6, 'Elif ocak', 'elifocak.eo@gmail.com', '05532649020', 41, 490, 'Batıköy mah. Mustafa kemalbulvarı A/2 104 blok kat:3 daire :7 sinanoba', '2016-05-25 21:54:01'),
(132, 1, 1, NULL, 268, 'Üç Kollu Şamdan (Çiçekli)', 1, 60, 'Elif ocak', 'elifocak.eo@gmail.com', '05532649020', 41, 490, 'Mustafa kemal bulvarı batıköy mah ercan sokak A/2 104 blok kat:3 daire:7 sinanoba', '2016-05-25 21:57:50'),
(133, 1, 1, NULL, 360, 'Türk Gecesi Dekorasyonu', 1, 0, 'Arzu Ayık', 'arzu.kale@selayevent.com', '0533 143 56 87', 7, 91, 'Yenimahalle', '2016-05-25 23:06:39'),
(134, 1, 1, NULL, 307, 'Gümüş Kaplama Supla (Yuvarlak)', 225, 675, 'yelda yıldırım ', 'yelda@teknomek.net', '05434109870', 41, 489, 'Kasımpaşa ', '2016-05-27 14:15:34'),
(135, 1, 1, NULL, 362, 'Volkan Show (Işık Seli)', 1, 75, 'yelda yıldırım', 'yelda@teknomek.net', '05434109870', 41, 489, 'Kasımpaşa ', '2016-05-27 14:16:27'),
(136, 1, 1, NULL, 272, 'Beş Kollu Gümüş Şamdan (Çiçekli)', 6, 360, 'Filiz ergunduz', 'filizergunduz@gmail.com', '05365604161', 41, 499, 'Dilek sabanci cad erguvan 2 evleri c blok d12 kucukbakkalkoy atasehir', '2016-06-01 09:35:12'),
(137, 1, 1, NULL, 272, 'Beş Kollu Gümüş Şamdan (Çiçekli)', 6, 360, 'Filiz ergunduz', 'filizergunduz@gmail.com', '05365604161', 41, 499, 'Dilek sabanci cad erguvan 2 evleri c blok d12 kucukbakkalkoy atasehir', '2016-06-01 09:38:34'),
(138, 1, 1, 52, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 35, 210, 'merve onur', 'merveonur86@gmail.com', '02165270012', 41, 511, 'necip fazil mah. Dilektaşı Sokak. Evidea sit.\r\nkat 3 daire 6, Ümraniye- İstanbul\r\nMertogarden AVM karşısı ', '2016-06-06 07:59:06'),
(139, 1, 1, 52, 317, 'Gold Masa Ortası Ayna', 2, 24, 'merve onur', 'merveonur86@gmail.com', '02165270012', 41, 511, 'necip fazil mah. Dilektaşı Sokak. Evidea sit.\r\nkat 3 daire 6, Ümraniye- İstanbul\r\nMertogarden AVM karşısı ', '2016-06-06 08:00:13'),
(140, 1, 1, NULL, 328, 'Sandalye Fiyonk Bağlama', 100, 100, 'FATMA ŞAHİN', 'fatmagul_cem@hotmail.com', '5522052173', 21, 244, 'EĞİTİM MAH ARABAYOLU CAD MADENKENT SİTESİ', '2016-06-06 15:27:01'),
(141, 1, 1, NULL, 248, 'Altı ve Dört Kollu Cam Şamdan (Çiçekli)', 20, 3200, 'nilgun', 'biro100@bellsouth.net', '001-954-701-1342', 41, 488, 'Amerika\'da yasiyorum, isterseniz yollarim', '2016-06-13 22:47:25'),
(142, 1, 1, NULL, 259, 'Tek Kollu Kafes Şamdan (Çiçeksiz)', 1, 20, 'Merve kavaklı', '5423666766', '5423666766', 22, 266, 'Cepten ulaşabilirsiniz', '2016-06-19 01:57:21'),
(143, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 1, 3, 'demet kılıç', 'demetklc1@gmail.com', '05343999024', 41, 483, 'yeni mahalle 4.sokak no: 31 daire:4 bağcılar İstanbul', '2016-06-28 17:45:55'),
(144, 1, 1, NULL, 253, 'Tek Kollu Angel Şamdan (Çiçeksiz)', 2, 50, 'demet kılıç', 'demetklc1@gmail.com', '05343999024', 41, 483, 'yeni mahalle 4.sokak no: 31 daire:4 bağcılar İstanbul', '2016-06-28 17:47:30'),
(145, 1, 1, NULL, 317, 'Gold Masa Ortası Ayna', 2, 24, 'demet kılıç', 'demetklc1@gmail.com', '05343999024', 41, 483, 'yeni mahalle 4.sokak no: 31 daire:4 bağcılar İstanbul', '2016-06-28 17:54:03'),
(146, 1, 1, NULL, 275, 'Beş Kollu King Şamdan (Çiçeksiz)', 1, 30, 'demet kılıç', 'demetklc1@gmail.com', '05343999024', 41, 483, 'yeni mahalle 4.sokak no: 31 daire:4 bağcılar İstanbul', '2016-06-28 17:55:49'),
(147, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 4, 48, 'tuğba albayrak', 'albayrak_tuba61@hotmail.com', '05321619983', 76, 947, 'yenimahalle demokrasi sok sahil engin apt a blok kat 3 daire 15', '2016-07-01 00:56:25'),
(148, 1, 1, NULL, 325, 'Gümüş Masa Mumluğu', 1, 2, 'tuğba albayrak', 'albayrak_tuba61@hotmail.com', '05321619983', 76, 947, 'yenimahalle demokrasi sok sahil engin apt a blok kat 3 daire 15', '2016-07-01 00:58:28'),
(149, 1, 1, NULL, 339, 'Gold Kristal Gelin Yolu (Çiçekli)', 4, 240, 'Büşra Karcı', 'bsrkrc219@hotmail.com', '05076212472', 43, 548, 'Hanefi Mahçiçek Bulvarı Üngüt Mahallesi Yanık Petrol Karşısı Zümrüt Sitesi B blok kat/6 no/19 46050 Kahramanmaraş/ Merkez', '2016-07-01 23:22:22'),
(150, 1, 1, NULL, 328, 'Sandalye Fiyonk Bağlama', 80, 80, 'ayşin karasoy yeşilada', 'aysinkarasoy@yahoo.com', '05326977710', 41, 499, 'ataşehir develi restoran', '2016-07-04 17:07:37'),
(151, 1, 1, NULL, 269, 'Üç Kollu Şamdan (Çiçeksiz)', 20, 500, 'Aysegul Ozkol', 'aysegulozkol@hotmail.com', '5375791989', 41, 490, 'Çakmaklı mh 7. Cadde', '2016-07-09 10:17:11'),
(152, 1, 1, NULL, 333, 'Serpme Giydirme', 130, 260, 'şerafettin ekiz', 'serafettinekiz@msn.com', '5547259233', 64, 792, ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,', '2016-07-09 11:52:01'),
(153, 1, 1, 54, 341, 'Kafes Dekorlu Gelin Yolu', 2, 60, 'şahin filik', 'sahinfilik@hotmail.com', '02122723639', 41, 509, 'halaskargazi cad.no:135 d:10 osmnbey', '2016-07-12 22:57:30'),
(154, 1, 1, NULL, NULL, 'supla gelin yolu mumluk ayna yükseltici', 500, 0, 'Selen Özatay', 'benimpartidukkanim@gmail.com', '05334843624', 41, 487, 'Zeytinoğlu Caddesi murat sokak serdar apt no6 daire 14 akatlar ', '2016-07-19 18:26:05'),
(155, 1, 1, 55, 319, 'Gümüş Masa Ortası Ayna', 2, 24, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:02:04'),
(156, 1, 1, 55, 387, 'Beş Cam Kollu Gümüş Şamdan(Çiçeksiz)', 1, 30, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:12:15'),
(157, 1, 1, 55, 329, 'Masa Örtüsü', 1, 10, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:13:00'),
(158, 1, 1, 55, 308, 'Gümüş Telkari Supla (Kare)', 2, 6, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:16:03'),
(159, 1, 1, 55, 371, 'Cam  Mumluk ', 2, 10, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:16:31'),
(160, 1, 1, 55, 319, 'Gümüş Masa Ortası Ayna', 1, 12, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:17:35'),
(161, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 300, 1800, 'Özlem ulaş', 'ozlemulas33@hotmail.com', '05424900488', 40, 474, 'Alata mahallesi köy Pınar\'ı caddesi Göktürk sokak Sena 2 apartmanı 2.kat no :4', '2016-07-21 18:56:18'),
(162, 1, 1, NULL, 335, 'Lake Kaideli Gelin Yolu (Çiçekli)', 1, 75, 'Bcg', 'Fgg@hotmail.com', '5423012542', 74, 922, 'Fsgdrhgf', '2016-07-26 05:09:07'),
(163, 1, 1, NULL, 349, 'Giriş Tak Dekoru (Yapay Çiçekli)', 1, 400, 'sinem salcan', 'salcansinem@gmail.com', '05413107307', 41, 505, 'Maden mahallesi figen sokak mesan aş evleri no:5 sarıyer', '2016-08-05 11:10:06'),
(164, 1, 1, NULL, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'Engin Kaan Uysal', 'enginkaanuysal@gmail.com', '5316128204', 41, 507, 'Safa Mah. Kotku Cad. No 15/3 Sancaktepe- İstanbul', '2016-08-10 15:19:01'),
(165, 1, 1, 58, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'Engin Kaan Uysal', 'enginkaanuysal@gmail.com', '5316128204', 41, 507, 'Safa Mah. Kotku Cad. No 15/3 Sancaktepe İstanbul', '2016-08-11 09:12:52'),
(166, 1, 1, 55, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 60, 360, 'neslihan hasoğlu', 'nesli.has@hotmail.com', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-08-16 10:30:27'),
(167, 1, 1, NULL, 271, 'Beş Kollu Gold Şamdan (Çiçeksiz)', 4, 120, 'Halide Oruc', 'halideoruc@gmail.com', '05324787060', 41, 499, 'CAFE DE PARTY Değirmenyolu cad. Bostanci mah. Armagan sok. no:4/1', '2016-08-16 14:32:37'),
(168, 1, 1, NULL, 359, '10 Kişilik ; 2 xSedir , 2 Puf , 1 sehpa', 3, 510, 'Seda erdebil', 'serdebil78@hotmail.com', '05426069205', 41, 512, 'Tunuslu mahmut paşa cad 16/a burhaniye üsküdar', '2016-08-23 16:18:01'),
(169, 1, 1, 59, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 6, 36, 'Meltem Taşkın', 'meltem.taskin@avnet.com', '05378595303', 41, 486, 'Murat mah. Bayır sok. No:1 kat:2 Bayrampaşa/istanbul', '2016-08-24 13:51:10'),
(170, 1, 1, 59, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'Meltem Taşkın', 'meltem.taskin@avnet.com', '05378595303', 41, 486, 'Murat mah. Bayır sok. No:1 kat:2 Bayrampaşa/istanbul', '2016-08-24 13:52:41'),
(171, 1, 1, NULL, 372, 'Simli Masa Mumluğu', 60, 120, 'fevzi mercan', 'fevzimercan@outlook.com.tr', '5435453801', 48, 601, 'hacılar yolu 8.km no:67 ', '2016-08-29 18:31:01'),
(172, 1, 1, NULL, 306, 'Gümüş Kaplama Supla (Kare)', 50, 150, 'Seda Çadırcı', 'sedakarakayacadirci@hotmail.com', '0535 765 69 56', 41, 512, 'Yalnız Selvi Yolu cad. Mesa Çengelköy Sitesi D-1 D-6 Üsküdar', '2016-08-31 06:32:42'),
(173, 1, 1, 61, 306, 'Gümüş Kaplama Supla (Kare)', 50, 150, 'seda çadırcı', 'sedakarakayacadirci@hotmail.com', '05357656956', 41, 512, 'yalnız selvi yolu cad.Mesa Çengelköy Sitesi D-1 D-6 üsküdar', '2016-08-31 06:41:33'),
(174, 1, 1, NULL, 367, 'Sis Makinesı Kiralama', 1, 200, 'Selcan beyaz', 'selcann.sb@gmail.com', '05395580103', 25, 311, 'Aras kargo çınar şubesi', '2016-08-31 09:03:42'),
(175, 1, 1, NULL, 344, 'Gelin Yolu Mumları ', 1, 7, 'Selcan beyaz', 'selcann.sb@gmail.com', '05395580103', 25, 311, 'Pelitlibağ mah hürriyet CAD no 111', '2016-08-31 09:06:39'),
(176, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 10, 120, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 sitesi. 5. Blok. Daire:15 K:7 Atasehir-Istanbul', '2016-09-02 19:41:50'),
(177, 1, 1, NULL, 388, 'Gümüş Çubuk Numaratör', 10, 50, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 Sitesi. 5. Blok. D:15 K.7 Atasehir', '2016-09-02 19:44:39'),
(178, 1, 1, NULL, 371, 'Cam  Mumluk ', 10, 50, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 Sitesi. 5. Blok. D:15 K.7 Atasehir', '2016-09-02 19:50:28'),
(179, 1, 1, NULL, 305, 'Gümüş Telkari Supla (Yuvarlak)', 10, 30, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 Sitesi 5. Blok. Daire.15 K.7 Atasehir', '2016-09-02 20:01:16'),
(180, 1, 1, NULL, 305, 'Gümüş Telkari Supla (Yuvarlak)', 99, 297, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 sitesi. 5. Blok D.15 K.7 Atasehir', '2016-09-02 20:04:39'),
(181, 1, 1, NULL, 322, 'Gümüş Peçete Bilezeği', 99, 99, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 Sitesi. 5. Blok. D.15 K.7 Atasehir', '2016-09-02 20:58:48'),
(182, 1, 1, NULL, 331, 'Peçete ', 99, 99, 'Ozden Bekbas', 'ozdenbekbas@hotmail.com', '05351035262', 41, 499, 'Ataturk mah. Atasehir Bulvari. 56. Ada. Manolya 2 sitesi. 5. Blok. D.15 K.7 Atasehir', '2016-09-02 21:01:19'),
(183, 1, 1, NULL, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'Duygu Serin', 'ser_duygu@hotmail.com', '05316901316', 41, 485, 'Zuhuratbaba mah. İncirli cad. Asiller sok. Emiroğlu apt. No:19 D:11 Bakırköy/İstanbul', '2016-09-11 23:42:50'),
(184, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 2, 120, 'Duygu Serin', 'ser_duygu@hotmail.com', '05316901316', 41, 485, 'Zuhuratbaba Mah. İncirli cad. Asiller sok. Emiroğlu apt. No:19 D:11 Bakırköy/İstanbul', '2016-09-11 23:45:36'),
(185, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'Eda bayraktar', 'edabalkann@hotmail.com', '05337911590', 7, 73, '450. Cadde 497. Sokak 20/2 birlik mahallesi ', '2016-09-15 11:12:55'),
(186, 1, 1, NULL, 354, 'SHEYALTOPCUi)', 28, 168, 'SHEYALTOPCU', 'SHEYALTOPCU', 'SHEYALTOPCU', 31, 372, 'SHEYALTOPCU', '2016-09-15 17:04:42'),
(187, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'Neşe Kuşçul', 'nkuscul@yahoo.com', '05353614770', 41, 503, 'Tülin Cad. Cansev Sok. Zümrüt apt. No:59 k.5 maltepe / ist', '2016-09-18 12:06:57'),
(188, 1, 1, NULL, 387, 'Beş Cam Kollu Gümüş Şamdan(Çiçeksiz)', 40, 1200, 'zeynel terlemezoğlu', 'zeynel_terlemezoglu@hotmail.com', '5058954525', 24, 311, 'bahçelievler mah. 2 cad no6/6', '2016-09-21 17:13:30'),
(189, 1, 1, NULL, 311, 'Simli Supla (Gold) ', 99, 198, 'arzu ece karaciğer', 'kc.arzuece@gmail.com', '5427251495', 37, 445, 'arsuz-gökmeydan', '2016-09-26 16:10:12'),
(190, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'Gizem Sulun', 'sulungizem@hotmail.com', '0533 450 28 48 ', 41, 490, 'Ihlas marmara evleri 1. Kisim C blok D:10 beylikduzu', '2016-09-27 13:14:05'),
(191, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 24, 144, 'Gökçe Adlım', 'gokceadlim@gmail.com', '5076008293', 41, 484, 'Bahçelievler', '2016-09-28 12:28:11'),
(192, 1, 1, NULL, 266, 'Tek Kollu Gümüş Kaplama  (Çiçeksiz)', 2, 40, 'Gülay aygül', 'novruzovaf5603@gmail.com', '05383632180', 41, 510, 'İstasyon mah hacıoğlu sok no/47.A 1 blooms güzellk salonu', '2016-09-30 09:48:24'),
(193, 1, 1, NULL, 361, 'Ses ve Işık Sistemi Kiralama', 1, 2500, 'ferhat adıbelli', 'ferhat.adibelli@hotmail.com', '5384298901', 53, 640, 'Life Port Hotel\r\nTurgut Özal Bulv. Armutlu Sok No:21 Balçık Köyü', '2016-10-03 11:01:55'),
(194, 1, 1, NULL, 368, 'Altı Kollu Cam Şamdan Düz Fanuslu (Çiçekli)', 1, 90, 'Aylin Akant ', 'aylinakant@gmail.com', '05414313868', 41, 487, 'Yazgülü sok Levzım Mahhelesi Aydın Sitesi 5/5 Levent ', '2016-10-06 14:30:00'),
(195, 1, 1, NULL, 326, 'Gold Masa Mumluğu', 20, 40, 'ÖMER MICIK', 'omermicik@mynet.com', '533 685 24 18', 41, 509, 'PAŞA MAH.NEŞE SOK.NO:14 KAT:1 DAİRE:1 ŞİŞLİ FERİKÖY ', '2016-10-07 00:25:41'),
(196, 1, 1, 65, 284, 'Gold Vazo şamdan (Çiçekli)', 1, 40, 'Nisa Bozdag', 'nisa_bozdag@hotmail.com', '05462314309', 60, 746, 'Haci ilyas mah. Guvecdede cad no:105/1 milas Muğla 48200', '2016-10-07 13:40:13'),
(197, 1, 1, 65, 271, 'Beş Kollu Gold Şamdan (Çiçeksiz)', 2, 60, 'Nisa Bozdag', 'nisa_bozdag@hotmail.com', '05462314309', 60, 746, 'Haci ilyas mah. Guvecdede cad no:105/1 milas Muğla 48200', '2016-10-07 13:43:41'),
(198, 1, 1, 66, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 2, 120, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:06:10'),
(199, 1, 1, 66, 275, 'Beş Kollu King Şamdan (Çiçeksiz)', 2, 60, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:08:53'),
(200, 1, 1, 66, 284, 'Gold Vazo şamdan (Çiçekli)', 2, 80, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:14:00'),
(201, 1, 1, 66, 295, 'Tifanny Şamdan (Çiçekli)', 1, 100, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:18:05'),
(202, 1, 1, 66, 310, 'Gold Telkari Supla (Kare)', 2, 6, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:19:07'),
(203, 1, 1, 66, 318, 'Gold Masa Ortası Ayna', 1, 12, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:19:46'),
(204, 1, 1, 66, 317, 'Gold Masa Ortası Ayna', 1, 12, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:20:00'),
(205, 1, 1, 66, 326, 'Gold Masa Mumluğu', 2, 4, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:20:10'),
(206, 1, 1, 66, 324, 'Gold Masa Mumluğu', 4, 8, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:20:39'),
(207, 1, 1, 66, 323, 'Gold Peçete Bileziği', 20, 20, 'Seyla Azoz', 'seyla.azoz@gmail.com', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:21:15'),
(208, 1, 1, NULL, 371, 'Cam  Mumluk ', 12, 60, 'Dilek okyay', 'Dileck_34@hotmail.com', '05532892307', 41, 486, 'Yıldırım mah cami sokak no 40 daire 5', '2016-10-11 02:38:28'),
(209, 1, 1, NULL, 385, 'Beş Kollu Gümüş Kaplama Şamdan(Çiçeksiz)', 2, 60, 'Gökçe Bozkurt', 'gokcebozkurt89@gmail.com', '5497464648', 41, 512, 'Nakkaştepe bridge restaurant sungate', '2016-10-11 20:21:51'),
(210, 1, 1, NULL, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'Gökçe Bozkurt', 'gokcebozkurt89@gmail.com', '5497464648', 41, 512, 'bridge restaurant sungate ', '2016-10-11 20:23:04'),
(211, 1, 1, NULL, 327, 'Streç Kadife Giydirme', 100, 200, 'Cemre Kıralioğlu', 'info@vennamore.com', '05392774806', 41, 487, 'Etiler Mah.  Yanarsu sok. Yıldız blok1 d21 k6 etiler', '2016-10-13 09:15:31'),
(212, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 30, 90, 'Zeynep kesim akıncı ', 'zkesimal08@hotmail.com', '05075885239', 41, 490, 'Atatürk Mahallesi Zinde Sokak Güzelbahçe Sitesi D Blok Kat:3 no:11 Büyükçekmece ', '2016-10-17 18:53:12'),
(213, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'Ayşenur Karabulut', 'karabulut.aysenur@gmail.com', '05387940762', 41, 483, 'Merkez mah. İstanbul cad. Cebel apt. C blok Kat 2 Daire 5', '2016-10-17 23:08:33'),
(214, 1, 1, NULL, 273, 'Beş Kollu Gümüş Şamdan (Çiçeksiz)', 2, 60, 'deniz başak çelik', 'denizbasaktuzun.34@gmail.com', '0549 786 38 90', 41, 495, 'rami yeni mahalle ahmed davutoğlu sok. no:6 daire:8 Eyüp İstanbul', '2016-10-21 16:41:25'),
(215, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 11, 66, 'Elif icen', 'Elif_icenn@hotmail.com', '5386366849', 41, 481, 'Altaycesme mah. Maltepe/Istanbul', '2016-10-23 16:32:18'),
(216, 1, 1, 69, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:35:12'),
(217, 1, 1, 69, 387, 'Beş Cam Kollu Gümüş Şamdan(Çiçeksiz)', 2, 60, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:37:26'),
(218, 1, 1, 69, 305, 'Gümüş Telkari Supla (Yuvarlak)', 2, 6, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:58:15'),
(219, 1, 1, 69, 308, 'Gümüş Telkari Supla (Kare)', 1, 3, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:58:56'),
(220, 1, 1, 69, 319, 'Gümüş Masa Ortası Ayna', 1, 12, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:59:55'),
(221, 1, 1, 69, 325, 'Gümüş Masa Mumluğu', 3, 6, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 09:00:53'),
(222, 1, 1, NULL, 307, 'SHEYALTOPCU', 28, 84, 'SHEYALTOPCU', 'SHEYALTOPCU', 'SHEYALTOPCU', 33, 403, 'SHEYALTOPCU', '2016-11-05 16:47:06'),
(223, 1, 1, 69, 371, 'Cam  Mumluk ', 2, 10, 'Hilal asil', 'hilal.asil.93@gmail.com', '05385962761', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-06 09:08:41'),
(224, 1, 1, 70, 387, 'Beş Cam Kollu Gümüş Şamdan(Çiçeksiz)', 2, 60, 'merve çelik', 'mrv1378@hotmail.com', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:06:51'),
(225, 1, 1, 70, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'merve çelik', 'mrv1378@hotmail.com', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:08:08'),
(226, 1, 1, 70, 323, 'Gold Peçete Bileziği', 2, 2, 'merve çelik', 'mrv1378@hotmail.com', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:09:41'),
(227, 1, 1, 70, 322, 'Gümüş Peçete Bilezeği', 2, 2, 'merve çelik', 'mrv1378@hotmail.com', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:32:31'),
(228, 1, 1, 70, 325, 'Gümüş Masa Mumluğu', 6, 12, 'merve çelik', 'mrv1378@hotmail.com', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:49:07'),
(229, 1, 1, NULL, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'Esra Çetinkaya ', 'Esra.cetinkayaa@outlook.com', '05537428014', 41, 501, 'Cevizli mahallesi Turunç sokak No:6/3', '2016-11-09 15:04:41'),
(230, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 3, 36, 'Esra Çetinkaya', 'esra.cetinkayaa@outlook.com', '05537428014', 41, 501, 'Cevizli mahallesi turunç sokak No:6/3 ', '2016-11-09 15:08:27'),
(231, 1, 1, NULL, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'Pınar Öner', 'pnrnr9@yahoo.com.tr', '05426817383', 41, 489, 'Aynalıçeşme cad, no:15 d:9 Tepebaşı Beyoğlu İstanbul', '2016-11-14 18:45:01'),
(232, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 28, 168, 'Fhkl', 'Chılilj', '5454444444', 22, 255, 'Dgjlllş', '2016-11-17 05:26:38'),
(233, 1, 1, NULL, 324, 'Gold Masa Mumluğu', 4, 8, 'mehtap boztoprak', 'mehtapboztoprak@gmail.com', '05531487978', 41, 482, 'üniversite mah. zambak sok no7/5 pelican avm yanı ', '2016-11-22 13:31:06'),
(234, 1, 1, NULL, 317, 'Gold Masa Ortası Ayna', 2, 24, 'mehtap boztoprak', 'mehtapboztoprak@gmail.com', '05531487978', 41, 482, 'üniversite mah. zambak sok. no7/5 pelican avm yanı ', '2016-11-22 13:32:40'),
(235, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 2, 120, 'mehtap boztoprak', 'mehtapboztoprak@gmail.com', '05531487978', 41, 482, 'üniversite mah. zambak sok. no7/5 pelıcan avm yanı ', '2016-11-22 13:36:04'),
(236, 1, 1, NULL, 284, 'Gold Vazo şamdan (Çiçekli)', 2, 80, 'mehtap boztoprak', 'mehtapboztoprak@gmail.com', '05531487978', 41, 482, 'üniversite mah. zambak sok. no7/5 ', '2016-11-22 13:42:48'),
(237, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 25, 150, 'ESRA ASLAN', 'esraslann86@gmail.com', '05355931672', 41, 504, 'Fevzi Çakmak Mah. Timurlenk Sok. No:14 / 4 Üst Kaynarca', '2016-11-22 14:27:35'),
(238, 1, 1, NULL, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'ÇAĞLA KILIÇOĞULLARI', 'cagla_kilicogullari@hotmail.com', '05367742213', 41, 511, 'namık kemal mahallesi sütçü caddesi atalay sokak birlik apartmani No:4/5 ', '2016-11-23 16:27:58'),
(239, 1, 1, NULL, 255, 'Tek Kollu Gümüş Şamdan (Çiçeksiz)', 2, 40, 'ÇAĞLA KILIÇOĞULLARI', 'cagla_kilicogullari@hotmail.com', '05367742213', 41, 511, 'namık kemal mahallesi sütçü caddesi atalay sokak birlik apartmanı no:4/5', '2016-11-23 16:37:10'),
(240, 1, 1, NULL, 371, 'Cam  Mumluk ', 2, 10, 'ÇAĞLA KILIÇOĞULLARI', 'cagla_kilicogullari@hotmail.com', '05367742213', 41, 511, 'namık kemal mahallesi sütçü caddesi atalay sokak birlik apartmanı no:4/5 ', '2016-11-23 16:48:19'),
(241, 1, 1, NULL, 320, 'Gümüş Çerçeve Ayna', 40, 800, 'Ebru furat', 'Ebru.furat1988@hotmail.com', '5307892305', 41, 499, 'Ataşehir', '2016-11-23 20:27:37'),
(242, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'EZGİ DERECİ', 'ezgii.dereci@hotmail.com', '05377120693', 21, 250, 'Mimar sinan Mah. 6. Çimen sok. No:18/16 Özen Apt. Kat:2 Yıldırım Bursa', '2016-11-25 08:56:18'),
(243, 1, 1, NULL, 383, 'Beş Kollu Gold Kaplama Şamdan (Çiçeksiz)', 2, 60, 'Merve Turan', 'mrvtrn0@gmail.com', '05327389660', 41, 499, 'suadiye asuman sok. mualla apt.no:8 daire 19', '2016-11-29 09:12:09'),
(244, 1, 1, 73, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:52:31'),
(245, 1, 1, 73, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 10, 60, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:53:15'),
(246, 1, 1, 73, 317, 'Gold Masa Ortası Ayna', 2, 24, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:53:33'),
(247, 1, 1, 73, 318, 'Gold Masa Ortası Ayna', 1, 12, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:53:43'),
(248, 1, 1, 73, 330, 'Dantel Kapak Örtüsü', 1, 10, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:54:41'),
(249, 1, 1, 73, 310, 'Gold Telkari Supla (Kare)', 25, 75, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:55:47'),
(250, 1, 1, 73, 304, 'Gold Telkari Supla (Yuvarlak)', 2, 6, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:55:57'),
(251, 1, 1, 73, 324, 'Gold Masa Mumluğu', 2, 4, 'YILDIZ MANDUZ', 'yildizmanduz@hotmail.com', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:57:57'),
(252, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'esra ', 'esralayik@hotmail.com', '05535081959', 7, 84, 'şenlik mah. buket sok. 36/4 ', '2016-12-05 19:42:41'),
(253, 1, 1, 81, 310, 'Gold Telkari Supla (Kare)', 1, 3, 'Yasemin Tanış ', 'yasemin.tanis89@gmail.com', '5413210118', 7, 84, 'Atapark Mh. Kalbur cd 18/21 Yağız Efe apt kat 5 ', '2016-12-15 07:09:46'),
(254, 1, 1, NULL, 317, 'Gold Masa Ortası Ayna', 2, 24, 'gülşah taner', 'glshtaner@yahoo.com', '5327872555', 21, 245, 'karsan a.ş. hasanağa org san bölg sanayi cad no:2 nilüfer bursa', '2016-12-18 15:25:15'),
(255, 1, 1, NULL, 368, 'Altı Kollu Cam Şamdan Düz Fanuslu (Çiçekli)', 1, 90, 'ŞULE FİDAN', 'sule_fidan@hotmail.com', '5334936030', 41, 501, 'kordonboyu mah.23 nisan cad.hamam sok.no:39/2 kartal-İST', '2016-12-19 12:05:18'),
(256, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 8, 48, 'ŞULE FİDAN', 'sule_fidan@hotmail.com', '05334936030', 41, 501, 'kordonboyu mah.23 nisan cad.hamam sok.no:39/2 kartal-İST', '2016-12-19 12:06:54');
INSERT INTO `siparislerxx` (`id`, `drm`, `tip`, `uyeid`, `urunid`, `urunAdi`, `adet`, `fiyat`, `adSoyad`, `email`, `tel`, `sehir`, `ilce`, `adres`, `tarih`) VALUES
(257, 1, 1, NULL, 343, 'Tam Kristalli Gelin Yolu (Çiçeksiz)', 4, 120, 'pınar moroglu', 'moroglupinar@gmail.com', '5317401575', 53, 647, 'ŞAHİNOĞLU DÜĞÜN SALONU İZMİT ', '2016-12-20 11:22:39'),
(258, 1, 1, NULL, 343, 'Tam Kristalli Gelin Yolu (Çiçeksiz)', 6, 180, 'Doğukan ÖZÇELİK', 'dogukan_oz@hotmail.com', '05327725315', 53, 647, 'Körfez/KOCAELİ', '2016-12-20 11:49:21'),
(259, 1, 1, 84, 313, 'Yapay Çiçek (Gül Kurusu,Somon,Capuccino)', 2, 80, 'Zeynep Sevde Şener', 'zeynepsevde24@gmail.com', '05318531012', 41, 512, 'Kısıklı Mah. Akınbey Sok. Pelit Apt. No:5 D:2 Üsküdar/İstanbul', '2016-12-21 17:28:16'),
(260, 1, 1, 84, 317, 'Gold Masa Ortası Ayna', 2, 24, 'Zeynep Sevde Şener', 'zeynepsevde24@gmail.com', '05318531012', 41, 512, 'Kısıklı Mah. Akınbey Sok. Pelit Apt. No:5 D:2 Üsküdar/İstanbul', '2016-12-21 17:29:05'),
(261, 1, 1, 84, 321, 'Gold Çerçeve Ayna', 2, 40, 'Zeynep Sevde Şener', 'zeynepsevde24@gmail.com', '05318531012', 41, 512, 'Kısıklı Mah. Akınbey Sok. Pelit Apt. No:5 D:2 Üsküdar/İstanbul', '2016-12-21 17:31:06'),
(262, 1, 1, NULL, 247, 'Beş Kollu Cam Şamdan  (Çiçeksiz)', 1, 30, 'gizem taş', 'gizmtas@hotmail.com', '05335941221', 41, 509, 'fulya mahallesi yeşil çimen sokak no12 daire 186 polat tower', '2016-12-26 12:02:54'),
(263, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 10, 30, 'Dilek sarıcan', 'dlksrcn.fb@gmail.com', '5325761973', 21, 245, 'Barboros caddesı krıstalpark sıtesı 6.blok daıre 611', '2016-12-28 18:49:40'),
(264, 1, 1, 83, 307, 'Gümüş Kaplama Supla (Yuvarlak)', 61, 183, 'Seda Özbük', 'sedaozbuk@hotmail.com', '05326137341', 41, 485, 'Şenlikköy mah. Gül sok. No:3 B/8 Florya İstanbul', '2016-12-29 11:03:25'),
(265, 1, 1, 83, 388, 'Gümüş Çubuk Numaratör', 6, 30, 'Seda Özbük', 'sedaozbuk@hotmail.com', '05326137341', 41, 485, 'Şenlikköy mah. Gül sok. No:3 B/8 Florya İstanbul', '2016-12-29 11:04:27'),
(266, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 2, 120, 'Derya aydin', 'hakimtekin21@hotmail.com', '05426689824', 41, 502, 'Halkali merkez mahallesi filiz sokak ortadogu sitesi a blk daire 13 k', '2017-01-06 17:37:58'),
(267, 1, 1, NULL, 239, 'Tek kollu Cam Şamdan (Çiçekli)', 2, 100, 'Kevser yavuz', 'kvsr.yvz@gmail.com', '05301330493', 41, 502, '5.etap 1.kısım hisar sitesi d:9 daire :10  BAŞAKŞEHİR İSTANBUL kat:4', '2017-01-08 02:02:27'),
(268, 1, 1, NULL, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 30, 180, 'Dilan özdemir', 'dilan-ozdemir@hotmail.com', '05333466040', 7, 86, 'Ege mahallesi 804.sokak no 6/7 mamak ankara', '2017-01-13 09:35:40'),
(269, 1, 1, NULL, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'Aylin gülşen', 'aylingulsen@hotmail.com', '5384129631', 41, NULL, 'Ballidu parti evi ataşehir', '2017-01-13 19:29:48'),
(270, 1, 1, NULL, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 10, 60, 'Burcu öztuna', 'burcuoztuna@hotmail.com', '5556047366', 42, 532, 'Yeşilyurt', '2017-01-15 01:54:20'),
(271, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 1, 12, 'özge çelik', 'ozge_celik@windowslive.com', '05466672433', 33, 410, 'Atatürk mah vali süleyman kamçı caddesi\r\ngazi sitesi A blok no:4  daire:5', '2017-01-20 15:46:40'),
(272, 1, 1, NULL, 321, 'Gold Çerçeve Ayna', 1, 20, 'özge çelik', 'ozge_celik@windowslive.com', '5466672433', 33, 410, 'Atatürk mah vali süleyman kamçı caddesi\r\ngazi sitesi A blok no:4  daire:5', '2017-01-20 16:05:22'),
(273, 1, 1, NULL, 371, 'Cam  Mumluk ', 1, 5, 'Ozgecan ozdemir', 'Ozgecanozdemir@outlook.com ', '5412065974', 41, 494, 'Piri reis mh 2035.sk imran sitesi b2 blok d.6 n.7a', '2017-01-21 00:24:40'),
(274, 1, 1, 88, 371, 'Cam  Mumluk ', 1, 5, 'Ozgecan ozdemir', 'ozgecanozdemir@outlook.com', '5412065974', 41, 494, 'Piri reis mh 2035. Sk imran sitesi 7a b2 blok d.6', '2017-01-21 00:27:03'),
(275, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'aytugce mumcuoglu', 'aytugcemumcuoglu@gmail.com', '05313824671', 41, 499, '19 mayıs mahallesi atatürk caddesi ozan sokak köşk apartmanı no:1 daire:15', '2017-01-21 21:59:20'),
(276, 1, 1, NULL, 351, 'Pleksi Nikah Kürsüsü', 1, 200, 'Fatih özdemir', 'ozdemir-fatih@windowslive.com', '5333284585', 42, 525, 'Gazi mah 27 sk no 50 d 2 gaziemir İzmir', '2017-01-29 11:30:18'),
(277, 1, 1, NULL, 384, 'Beş Kollu Gümüş Kaplama Şamdan(Çiçekli)', 1, 60, 'buse özdemir', 'busse_95@hotmail.com', '0507173749', 58, 720, 'cumhuriyet mah 71. sok', '2017-01-30 13:16:33'),
(278, 1, 1, 91, 274, 'Beş Kollu King Şamdan (Çiçekli)', 1, 60, 'sema nur demirci', 'sema.dmrc.55@outlook.com', '5312352392', 41, 504, 'çamçeşme mahallesi topselvi sokak no:1 daire:2', '2017-01-30 14:56:50'),
(279, 1, 1, 87, 310, 'Gold Telkari Supla (Kare)', 4, 12, 'DİLEK KILCI', 'dkilci@akkimmat.com', '5514121458', 41, 490, 'Cumhuriyet mah. Bulut sok. No:9/2 B Blok D:3 ERGUVAN EVLERİ BÜYÜKÇEKMECE / İSTANBUL', '2017-01-31 17:08:44'),
(280, 1, 1, 87, 324, 'Gold Masa Mumluğu', 2, 4, 'DİLEK KILCI', 'dkilci@akkimmat.com', '5514121458', 41, 490, 'Cumhuriyet mah. Bulut sok. No:9/2 B Blok D:3 ERGUVAN EVLERİ BÜYÜKÇEKMECE / İSTANBUL', '2017-01-31 17:16:48'),
(281, 1, 1, NULL, 329, 'Masa Örtüsü', 12, 120, 'Özge Uzun ', 'Ozgeuzun3', '05558874001', 41, 503, 'Çınar Mah Başefendi sokak no:19 D:7 Maltepe iatanbul', '2017-02-05 19:24:34'),
(282, 1, 1, 92, 321, 'Gold Çerçeve Ayna', 2, 40, 'Hande Eren', 'hande.ozbey@hotmail.com', '05323874260', 7, 73, 'alacati mahallesi türkkonut cad Ada park konutlari B blok kat 3 no 10 cayyolu', '2017-02-08 22:47:09'),
(283, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 80, 240, 'Meryem Okut ', 'meryemgulec58@hotmail.com', '05412441211', 41, 501, 'Çarşı mahallesi değerli sokak bayraktar apartmanı no:6 daire:6 Kartal Yakacık istanbul ', '2017-02-09 12:57:41'),
(284, 1, 1, NULL, 374, 'Ayna Gelin Yolu ve Vazo (Çiçeksiz)', 2, 220, 'Hasan Basri koca', 'Hasan Basri koca', '05345126060', 1, 12, 'Kocavezir msj. 32003 dk no: 4 ', '2017-02-12 16:54:17'),
(285, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'Duygu AZAK', 'duyguazak@msn.com', '05382590289', 41, 493, 'Kazım Karabekir mah.Aşık Veysel Cad.No:19 D:10 ESENLER/İSTANBUL', '2017-02-14 19:51:38'),
(286, 1, 1, 96, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'DUYGU AZAK', 'duyguazak@msn.com', '05382590289', 41, 493, 'KAZIM KARABEKİR MAH.AŞIK VEYSEL CAD.NO:19 D:10 ESENLER/İSTANBUL', '2017-02-14 20:01:57'),
(287, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 2, 120, 'hatice akkoca', 'htcakkoca@gmail.com', '05422944699', 42, 532, ' : Halide Edip Adıvar Bulvarı 507 Sok. No:3 (35270) İller Bankası 3.Bölge Müdürlüğü Karşısı egepol hastanesi Üçyol / İZMİR ', '2017-02-18 12:44:51'),
(288, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 1, 12, 'hatice akkoca', 'htcakkoca@gmail.com', '05422944699', 42, 532, ' : Halide Edip Adıvar Bulvarı 507 Sok. No:3 (35270) İller Bankası 3.Bölge Müdürlüğü Karşısı Üçyol / İZMİR egepol hastanesi', '2017-02-18 12:47:29'),
(289, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 42, 2520, 'Şeyma kukara', 'Seyma.kukaraa@gmail.com', '05300317674', 31, 378, 'Aziziye', '2017-02-21 17:58:31'),
(290, 1, 1, 98, 308, 'Gümüş Telkari Supla (Kare)', 1, 3, 'Elif fidan', 'elifffidan@gmail.com', '5078294503', 41, 500, 'Gursel mahallesi yadigar sok. No:11 k:1 okmeydani', '2017-02-27 09:06:46'),
(291, 1, 1, 98, 304, 'Gold Telkari Supla (Yuvarlak)', 2, 6, 'Elif fidan', 'elifffidan@gmail.com', '5078294503', 41, 500, 'Gursel mahallesi yadigar sok. No:11 k:1 okmeydani', '2017-02-27 09:07:12'),
(292, 1, 1, NULL, 261, 'Tek Kollu King Şamdan (Çiçeksiz)', 2, 60, 'Beste aybattı', 'Mayfairbeste@gmail.com', '5535932189', 41, 500, 'Eskibüyükdere cd uçar sokak katırcı iş merkezi kat5 daire 8 4.levent Kağıthane istanbul', '2017-02-28 22:27:12'),
(293, 1, 1, 100, 387, 'Beş Cam Kollu Gümüş Şamdan(Çiçeksiz)', 1, 30, 'TUĞBA DOĞAN', 'dogann_t@hotmail.com', '5316173184', 41, 513, 'SEYİTNİZAM MAH G/1 SK(ŞEHİT ER RAMAZAN KİRMAN SK) NO:51 D:11', '2017-03-03 10:04:21'),
(294, 1, 1, 100, 371, 'Cam  Mumluk ', 2, 10, 'TUĞBA DOĞAN', 'dogann_t@hotmail.com', '5316173184', 41, 513, 'SEYİTNİZAM MAH G/1 SK(ŞEHİT ER RAMAZAN KİRMAN SK) NO:51 D:11', '2017-03-03 10:05:46'),
(295, 1, 1, 100, 337, 'Gümüş Kristal Gelin yolu (Çiçekli)', 1, 60, 'TUĞBA DOĞAN', 'dogann_t@hotmail.com', '5316173184', 41, 513, 'SEYİTNİZAM MAH G/1 SK(ŞEHİT ER RAMAZAN KİRMAN SK) NO:51 D:11', '2017-03-03 10:06:58'),
(296, 1, 1, 100, 353, 'Gümüş Napolyon Sandalye (Kapitone Minderli)', 6, 36, 'TUĞBA DOĞAN', 'dogann_t@hotmail.com', '5316173184', 41, 513, 'SEYİTNİZAM MAH G/1 SK(ŞEHİT ER RAMAZAN KİRMAN SK) NO:51 D:11', '2017-03-03 10:09:46'),
(297, 1, 1, NULL, 386, 'Beş Cam Kollu Gümüş Şamdan(Çiçekli)', 1, 60, 'Gülsün Ağaçbüken', 'gulsun.agacbuken@orfin.com.tr', '5327146249', 41, 511, 'Serif ali mahallesi', '2017-03-03 15:13:50'),
(298, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'Gülşah Hazıray', 'gulsah_haziray@hotmail.com', '05414323782', 41, 483, 'Kirazlı Mah. Hürriyet Cad. No:29 D:1', '2017-03-06 14:06:10'),
(299, 1, 1, NULL, 383, 'Beş Kollu Gold Kaplama Şamdan (Çiçeksiz)', 2, 60, 'HAZAL FİDAN', 'hfidan@sisecam.com', '5305522698', 41, 501, 'fatih sultan mehmet cd. serçe sokak \r\nmavi evler sitesi \r\nc blok d:7 \r\nuğurmumcu kartal', '2017-03-08 15:37:47'),
(300, 1, 1, NULL, 320, 'Gümüş Çerçeve Ayna', 1, 20, 'Cangül puy', 'puy34@outlook.com', '0532 378 05 19', 41, 511, 'Yukarı Dudullu Mahallesi Divan Caddesi Sakizagaci sokak no 21 ümraniye-istanbul', '2017-03-08 22:50:54'),
(301, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 1, 12, 'Cangül Puy', 'puy34@outlook.com', '+905323780519', 41, 511, 'Sakizagaci\r\n1', '2017-03-08 22:53:55'),
(302, 1, 1, NULL, NULL, 'beyaz napolyon sandalye', 50, 0, 'ELİF KISACIK', 'elifkisacik01@gmail.com', '5302471358', 41, 497, '50 yıl mah a cad 2017 sok no:27-3 sultangazi istanbul ', '2017-03-14 09:10:43'),
(303, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 6, 18, 'Gül seyrekoglu', 'Sensiz_asla19951@hotmail.com ', '05442275588', 52, 636, 'Albay İbrahim karaoglanoglu camili sokak no 1/1 daire 3', '2017-03-15 12:48:54'),
(304, 1, 1, NULL, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'Sıla Beyhan', 'silabeyhan@gmail.com', '5064661887', 51, 633, 'Ahi evren mahallesi Nalçacı sitesi b blok kat 4 No 7', '2017-03-20 20:55:35'),
(305, 1, 1, NULL, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'Sıla Beyhan', 'silabeyhan@gmail.com', '5064661787', 51, 633, 'Ahievran mahallesi Nalçacı sitesi b blok kat 4 No:7', '2017-03-20 21:08:58'),
(306, 1, 1, 104, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'Sıla Beyhan', 'silabeyhan@gmail.com', '5064661787', 41, 497, 'Avrupa konutları tem 1 3. Blok No:85', '2017-03-21 00:49:04'),
(307, 1, 1, NULL, 251, 'Tek kollu Kristal Şamdan (Çiçeksiz)', 2, 30, 'Firuze KILAVUZ', 'firuzekilavuz@hotmail.com', '05456227547', 41, 484, 'Çobançeşme Mah. Yildiz 3 Sok. NO:50 D:6\r\nYENİBOSNA BAHCELİEVLER İSTANBUL', '2017-03-23 21:38:15'),
(308, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 2, 24, 'Firuze KILAVUZ', 'firuzekilavuz@hotmail.com', '05456227547', 41, 484, 'Çobançeşme Mah. Yildiz 3 Sok. NO:50 D:6\r\nYENİBOSNA BAHCELİEVLER İSTANBUL', '2017-03-23 22:05:35'),
(309, 1, 1, NULL, 241, 'Üçlü Cam Şamdan (Çiçeksiz)', 2, 80, 'Buse güz', 'bsegz.92@hotmail.com', '05464867668', 41, 511, 'NAmık kemal mahallesi karayel sokak no:5 daire:10 ümraniye/istanbul', '2017-03-23 22:31:08'),
(310, 1, 1, NULL, 385, 'Beş Kollu Gümüş Kaplama Şamdan(Çiçeksiz)', 2, 60, 'Elif çelik', 'elifcce@gmail.com', '05327417971', 41, 499, 'Fenerbahce mah rustiye sok rengin apartmani no 27 daire 8', '2017-03-26 14:24:44'),
(311, 1, 1, NULL, 368, 'Altı Kollu Cam Şamdan Düz Fanuslu (Çiçekli)', 1, 90, 'Duygu Saygı', 'dygsyg@hotmail.com', '05372740828', 41, 495, 'Nişanca Mah. Otakçılar Cad. Alaca Tekke Sok. Pınar Apt. No:74/6 Eyüp ', '2017-03-31 09:50:39'),
(312, 1, 1, NULL, 371, 'Cam  Mumluk ', 2, 10, 'yasemin duran', 'casmine40@gmail.com', '05059290200', 64, 796, 'gölevi mah.', '2017-04-10 01:45:14'),
(313, 1, 1, NULL, 376, 'Yedi Kollu Gold Kaplama (Çiçeksiz)', 2, 90, 'Hilal Şimşek', 'hilallsimsek@gmail.com', '05075416376', 60, 738, 'Karaçalı Mahallesi Mavikent Sitesi C1 Blok Kat:1 Daire:1 Dalaman/Muğla', '2017-04-10 23:39:53'),
(314, 1, 1, NULL, 241, 'Üçlü Cam Şamdan (Çiçeksiz)', 1, 40, 'Hilal Şimşek', 'hilallsimsek@gmail.com', '05075416376', 60, 738, 'Karaçalı Mahallesi Mavikent Sitesi C1 Blok Kat:1 Daire:1 Dalaman/Muğla', '2017-04-10 23:52:20'),
(315, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'Serhat taşan', 'Serhattasann@gmail.com', '05388114261', 41, 481, 'Silivrikapı mahallesi 7 şehitler sokak no 12 daire 2 fatih- kocamustafapaşa', '2017-04-13 20:49:30'),
(316, 1, 1, NULL, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'betül yokuşoğlu', 'betul.yokusoglu@isbank.com.tr', '5536027649', 42, 520, 'menderes mah 157sok no:18 d:4', '2017-04-19 12:12:47'),
(317, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'betül yokuşoğlu', 'betul.yokusoglu@isbank.com.tr', '5536027649', 42, 543, 'torasan urla', '2017-04-19 12:14:18'),
(318, 1, 1, NULL, 317, 'Gold Masa Ortası Ayna', 2, 24, 'Nurcan Alkevli ', 'ozyurt.nurcan01@gmail.com', '05309749993', 7, 73, 'KEKLİKPINARI MAH. 882 CADDE 31/ 6 DİKMEN ANKARA\r\n', '2017-04-19 17:57:40'),
(319, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 80, 240, 'GAMZE BEL', 'gamzebel07@gmail.com', '05348972420', 41, 505, 'Büyükdere Cad. Üçyol Mevkii, Maslak Sheraton Hotel 26.kat, 34398', '2017-04-24 17:04:04'),
(320, 1, 1, NULL, 333, 'Serpme Giydirme', 200, 400, 'şeyma arı', 'sseymaari@gmail.com', '05389600719', 41, 505, 'ptt evleri mahallesi fındık sokk no.29 daire 1', '2017-04-29 01:16:40'),
(321, 1, 1, NULL, 278, 'Beş Kollu Gold Şamdan (Çiçekli)', 1, 60, 'Songül sarikaş', 'Songül Sarıkas gmailcom', '05433725250', 41, 500, 'Çağlayan mah Tezcan sokak No 1 daire 6 Kağıthane İstanbul', '2017-05-01 13:59:28'),
(322, 1, 1, NULL, 381, 'Beş Kollu Gold Kaplama Şamdan (Çiçekli)', 1, 60, 'Songül sarikaş', 'Sarikassongul@gmail.com', '05433725250', 41, 500, 'Çağlayan mah Tezcan sokak No 1 daire 6 Kağıthane İstanbul', '2017-05-01 14:04:55'),
(323, 1, 1, NULL, 308, 'Gümüş Telkari Supla (Kare)', 5, 15, 'Songül sarikas', 'Sarikassongul@gmail.com', '05433725250', 41, 500, 'Çağlayan mah Tezcan sokak No 1 daire 6', '2017-05-01 14:08:08'),
(324, 1, 1, NULL, 325, 'Gümüş Masa Mumluğu', 2, 4, 'Songül sarikaş', 'Sarikassongul@gmail.com', '05433725250', 41, 500, 'Çağlayan mah Tezcan sokak No 1 daire 6 Kağıthane İstanbul', '2017-05-01 14:34:02'),
(325, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 1, 3, 'Nesrin salih', 'Nes61mev16@gmail.com', '05367497442', 21, 250, 'Millet mahallesi 7.tuna sokak yüksekoba yaşam evleri  c blok  kat 6 daire 23 yıldırım  bursa ', '2017-05-03 15:53:37'),
(326, 1, 1, NULL, 390, 'Özel İsim Dekorlu Pist Kaplama', 1, 0, 'Gizem Baykuş', 'gizem_baykus@hotmail.com', '05353456826', 12, 155, 'Kırtay Beach ', '2017-05-04 17:30:57'),
(327, 1, 1, NULL, 358, 'Bar Taburesi', 25, 150, 'Ahmet Nejat Öncel', 'ahmetnoncel1@gmail.com', '05556176321', 41, 495, 'Koru Yolu\r\n124', '2017-05-09 21:22:19'),
(328, 1, 1, NULL, 358, 'Bar Taburesi', 25, 150, 'Ahmet Nejat Öncel', 'ahmetnoncel1@gmail.com', '05556176321', 41, 495, 'Kütük Evler Sitesi Koru Yolu no:124 Göktürk', '2017-05-09 21:23:47'),
(329, 1, 1, NULL, 304, 'Gold Telkari Supla (Yuvarlak)', 80, 240, 'GAMZE BEL', 'gamzeb@triconenergy.com', '05348972420', 41, 487, 'Büyükdere Cad. Üçyol Mevkii, Maslak Sheraton Hotel 26.kat, 34398', '2017-05-11 18:57:03'),
(330, 1, 1, NULL, 369, 'Gümüş Kaplama Vazo (Çiçekli)', 2, 120, 'betül yokuşoğlu', 'betul.yokusoglu@isbank.com.tr', '5536027649', 42, 529, 'iş bankası Kemalpaşa şubesi Atatürk bulv no:24', '2017-05-23 10:38:52'),
(331, 1, 1, 112, 318, 'Gold Masa Ortası Ayna', 3, 36, 'Duygu ozel oymak', 'duygub.ozel@gmail.com', '05389615417', 41, 499, 'Ataturk mahallesi yakut caddesi zümrüt sitesi 13.blok daire 3 atasehir/istanbul', '2017-05-24 12:51:46'),
(332, 1, 1, 112, 370, 'Gümüş Kaplama Vazo (Çiçeksiz)', 2, 60, 'Duygu ozel oymak', 'duygub.ozel@gmail.com', '05389615417', 41, 499, 'Ataturk mahallesi yakut caddesi zümrüt sitesi 13.blok daire 3 atasehir/istanbul', '2017-05-24 12:52:59'),
(333, 1, 1, NULL, 308, 'Gümüş Telkari Supla (Kare)', 1, 3, 'Nazlı Hayır', 'Cok_nazli@hotmail.com', '05345161672', 41, 501, 'Karlitepe Mahallesi Rüzgar Sokak No 21 Kat 4 Daire 6', '2017-05-26 01:18:48'),
(334, 1, 1, NULL, 319, 'Gümüş Masa Ortası Ayna', 3, 36, 'Betul basarslan', 'Betul.basarslan1@hotmail.com', '05342342335', 41, 504, 'Camcesme mahallesi aydinli caddesi guneydogu sokak', '2017-05-29 13:17:52'),
(335, 1, 1, NULL, 354, 'Beyaz Napolyon Sandalye (Kapitone Minderli)', 20, 120, 'Hansa', 'hansa.basak@bilgi.com', '5062177177', 41, 503, 'Mese sk', '2017-06-05 19:43:59'),
(336, 1, 1, NULL, 321, 'Gold Çerçeve Ayna', 4, 80, 'ayşem kulaksız', 'aysemkulaksiz@gmail.com', '05309550197', 41, 485, 'demet 3', '2017-06-07 03:29:38'),
(337, 1, 1, NULL, 310, 'Gold Telkari Supla (Kare)', 18, 54, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550196', 41, 485, 'demet 3/1', '2017-06-07 03:31:17'),
(338, 1, 1, NULL, 285, 'Gold Vazo Şamdan (Çiçeksiz)', 2, 30, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550197', 41, 481, 'demet 3', '2017-06-07 03:33:33'),
(339, 1, 1, NULL, 287, 'Üçlü Gold Vazo (Çiçeksiz)', 1, 30, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550197', 41, 485, 'demet 3', '2017-06-07 03:34:38'),
(340, 1, 1, 113, 310, 'Gold Telkari Supla (Kare)', 18, 54, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550197', 41, 485, 'demet 3/1 ', '2017-06-07 03:37:59'),
(341, 1, 1, 113, 285, 'Gold Vazo Şamdan (Çiçeksiz)', 4, 60, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550197', 41, 485, 'demet 3/1 ', '2017-06-07 03:39:03'),
(342, 1, 1, 113, 321, 'Gold Çerçeve Ayna', 2, 40, 'aysem kulaksiz', 'aysemkulaksiz@gmail.com', '5309550197', 41, 485, 'demet 3/1 ', '2017-06-07 03:39:54'),
(343, 1, 1, NULL, 321, 'Gold Çerçeve Ayna', 1, 20, 'Cansın Cakir', 'Cakircansin@Gmail.com', '05319148934', 41, 497, 'Poligon caddesi şehit Mustafa Yeşil caddesi no 4 daire 4 ', '2017-06-12 21:08:23'),
(344, 1, 1, 114, 246, 'Beş Kollu Cam Şamdan (Çiçekli)', 1, 60, 'Cansın Cakir', 'cakircansin@gmail.com', '05319148934', 41, 497, 'HURRIYET MAHALLESİ ŞEHİT MUSTAFA YEŞİL CADDESİ NO 4 DAİRE 4 ', '2017-06-12 21:09:04'),
(345, 1, 1, 114, 352, 'Gold Napolyon Sandalye (Kapitone Minderli)', 6, 36, 'Cansın Cakir', 'cakircansin@gmail.com', '05319148934', 41, 497, 'HURRIYET MAHALLESİ ŞEHİT MUSTAFA YEŞİL CADDESİ NO 4 DAİRE 4 ', '2017-06-12 21:09:50'),
(346, 1, 1, NULL, 368, 'Altı Kollu Cam Şamdan Düz Fanuslu (Çiçekli)', 2, 180, 'Gamze Alnıak', 'alniak.gamze@gmail.com', '05444603374', 41, 499, 'Nene Hatun sokak no:7/2\r\nDNA Mimarlık Ofisi - Moda Kadıköy/İSTANBUL', '2017-06-20 00:47:33');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `statik`
--

CREATE TABLE `statik` (
  `id` int(11) NOT NULL,
  `gizlilik` longtext,
  `iletisim` text,
  `ortaklar` longtext,
  `odeme` longtext
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `statik`
--

INSERT INTO `statik` (`id`, `gizlilik`, `iletisim`, `ortaklar`, `odeme`) VALUES
(1, '<span style=\"color: rgb(0, 0, 0); font-family: Montserrat, sans-serif; font-size: 13px;\">Lorem Ipsum, dizgi ve baskı end&uuml;strisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak &uuml;zere bir yazı galerisini alarak karıştırdığı 1500&#39;lerden beri end&uuml;stri standardı sahte metinler olarak kullanılmıştır.</span><br style=\"box-sizing: border-box; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif; font-size: 13px;\" />\r\n<br style=\"box-sizing: border-box; color: rgb(0, 0, 0); font-family: Montserrat, sans-serif; font-size: 13px;\" />\r\n<span style=\"color: rgb(0, 0, 0); font-family: Montserrat, sans-serif; font-size: 13px;\">Beşy&uuml;z yıl boyunca varlığını s&uuml;rd&uuml;rmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sı&ccedil;ramıştır. 1960&#39;larda Lorem Ipsum pasajları da i&ccedil;eren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum s&uuml;r&uuml;mleri i&ccedil;eren masa&uuml;st&uuml; yayıncılık yazılımları ile pop&uuml;ler olmuştur.</span>', 'Tel &nbsp; &nbsp; &nbsp; : 0212 256 44 11&nbsp;<br />\r\n<br />\r\nGSM &nbsp; &nbsp;: 0532 176 46 50<br />\r\n<br />\r\nAdres &nbsp; : Piyalepaşa Mahallesi , Piyalepaşa Caddesi No:26/A Beyoğlu<br />\r\n<br />\r\nMail &nbsp; &nbsp; &nbsp;: satis@kiraliksamdan.com', '<h1>\r\n	ORTAKLAR</h1>\r\n<br />\r\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br />\r\n<br />\r\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.<br />\r\n<br />\r\nTypi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.<br />\r\n<br />\r\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.<br />\r\n<br />\r\nTypi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.', '<h1>\r\n	&Ouml;DEME</h1>\r\n<br />\r\n<p style=\"margin: 0px; padding: 0px; border: 0px; font-family: Tahoma; font-size: 11px; font-stretch: inherit; line-height: 14.3000001907349px; vertical-align: baseline; outline: 0px; color: rgb(0, 0, 0);\">\r\n	&nbsp;</p>\r\n<p style=\"margin: 0px; padding: 0px; border: 0px; font-family: Tahoma; font-size: 11px; font-stretch: inherit; line-height: 14.3000001907349px; vertical-align: baseline; outline: 0px; color: rgb(0, 0, 0);\">\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: small; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; vertical-align: baseline; outline: 0px;\">Sitemizden yaptığınız alışverişleri aşağıdaki şekillerde &ouml;deyebilirsiniz.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: small; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; vertical-align: baseline; outline: 0px;\">- Kredi kartı ile tek &ouml;deme: T&uuml;m Visa ve Mastercard&rsquo;lar ile &ouml;deme yapılabilmektedir. Kredi kartı ile yaptığınız &ouml;demelerin g&uuml;venliği &ldquo;3D secure&rdquo; sistemi ile sağlanmaktadır.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: small; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; vertical-align: baseline; outline: 0px;\">- Kredi kartı ile taksitli &ouml;deme: Anlaşmalı olduğumuz bankaların kredi kartları taksitle &ouml;deme yapılabilir.</span><br />\r\n	<br />\r\n	<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: small; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; vertical-align: baseline; outline: 0px;\">- Havale/EFT ile &ouml;deme: Sitemizde yer alan banka hesaplarından birine, havale veya EFT yoluyla &ouml;deme ger&ccedil;ekleştirebilirsiniz. Havale/EFT yolu ile &ouml;demede, sipariş verildikten sonraki 48 saat i&ccedil;inde &ouml;deme yapılmalı ve hesabım sayfası altında yer alan, &ldquo;havale/EFT onayı bekleyen siparişlerim&rdquo; kısmında ki form doldurularak bize iletilmelidir. Havale/EFT bildirimi bize ulaştıktan sonra siparişiniz onaylanacak ve işleme alınacaktır.</span></p>\r\n');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `uyeler`
--

CREATE TABLE `uyeler` (
  `id` int(11) NOT NULL,
  `drm` tinyint(1) DEFAULT '1',
  `eposta` varchar(255) DEFAULT NULL,
  `sifre` varchar(255) DEFAULT NULL,
  `adSoyad` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `sehir` int(11) DEFAULT NULL,
  `ilce` int(11) DEFAULT NULL,
  `adres` text,
  `tarih` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Tablo döküm verisi `uyeler`
--

INSERT INTO `uyeler` (`id`, `drm`, `eposta`, `sifre`, `adSoyad`, `tel`, `cep`, `sehir`, `ilce`, `adres`, `tarih`) VALUES
(1, 1, 'flasor@gmail.com', '1', 'Ramazan Toprak', '025556666', '05532 54558', 41, 494, 'yeşilken mah', NULL),
(2, 1, 'dssdfs@sdfdsfsf.sdfsf', 'fsf', 'sdfsf', 'sdfsdfs', 'fsdfsf', NULL, 792, 'sdfsf', '2015-02-14 00:02:23'),
(3, 1, 'ali@gmail.com', '12345', 'Ali Aslan', '0216 339 40 39', '0546 277 81 61', 14, 173, 'Bahçli evler mahallersi no 55', '2015-02-14 00:08:40'),
(4, 1, 'a@gmail.com', 'a', 'özkanuzun', '05368693201', '05368693201', 1, 18, 'fasa', '2015-02-16 08:51:46'),
(5, 1, 'hasan@madamadam.com.tr', 'esra80', 'HASAN BALKANAY', '02582255225', '05336552578', 25, 312, 'ÇAMLARALTI MAHALLESİ KINIKLI CADDESI NO:33 PAMUKKALE DENİZLİ', '2015-04-30 00:40:43'),
(6, 1, 'ayse74gulsun@hotmail.com', '5184518', 'SABAHAT GÜLSÜN', '2164293665', '05333980514', 41, 481, 'Saray Mah. Küçüksu Cad. Harput Sk. No. 2 PK:34768 ', '2015-05-04 20:45:46'),
(7, 1, 'diranorganizasyon@hotmail.com', '7316', 'Buğra Aktimur', '03723161044', '05322573324', 82, 1004, 'Müftü Mah. Ağa Cami Sok. No:25', '2015-06-06 08:42:03'),
(8, 1, 'arzu-karaal@hotmail.com', 'sewar895', 'Arzu', '05372341905', '05372341905', 41, 509, 'Şakayık Sokak Atıf Bey Apt. No:62 Kat:2 Daire:6\r\nTeşvikiye / İSTANBUL', '2015-06-08 10:47:52'),
(9, 1, 'oyaulucan@gmail.com', '4546474849', 'OYA ULUCAN', '05392070759', '05392070759', 41, 505, 'Rumeli Hisarüstü (Sarıyer), 34450 İstanbul, Türkiye ', '2015-06-18 02:23:58'),
(10, 1, 'giztuncel@gmail.com', 'giz8720', 'Gizem Yavuz', '02122969230', '05078179327', 41, 489, 'Kulaksız Mahallesi haliç Konağı Apartmanı 35/5 veya 35/13\r\n(Kulaksız mezarlığı caddesi) Beyoğlu /İST', '2015-06-19 19:41:29'),
(11, 1, 'fnurozen@gmail.com', 'ibrahim', 'Fatma Nur Özen', '5363675170', '536 367 51 70', 41, 505, 'Zekeriyapark Evleri No:50 Zekeriyaköy', '2015-07-07 12:27:21'),
(12, 1, 'elifarig@gmail.com', 'elf12345', 'Elif Arığ', '53228699339', '53228699339', 41, 501, 'KArtal', '2015-07-09 13:12:32'),
(13, 1, 'zeynepaltindissav@outlook.com.tr', 'Akinim3509', 'zeynep sav', '05070222553', '05070222553', 11, 129, '1344 sok  efeler mah no10 d12 didim', '2015-07-10 17:51:42'),
(14, 1, 'vedatbuldan@hotmail.com', 'ceshhur18', 'Vedat Buldan', '5385977840', '5385977840', 41, 485, 'Ataköy 7.8.Kısım Gazi Sitesi L9-A D:5 Bakırköy İstanbul', '2015-07-14 20:37:41'),
(15, 1, 'ulkusenaerdem@gmail.com', 'Kayrahanerdem9.', 'sena erdem', '0532189216', '05321389216', 41, 488, 'kanlıca mah. nuri bey sok no.3', '2015-07-31 18:08:04'),
(16, 1, 'ndalkan26@gmail.com', 'nazden88', 'deniz alkan', '02126622707', '05363433346', 41, 485, 'Senlikkoy mahallesi Germeyan sokak no:4 d:2 \r\n\r\nBakirkoy Istanbul', '2015-08-14 10:33:25'),
(17, 1, 'zgyayman@gmail.com', 'zorocan', 'Gülnihal yayman', '02323242305', '05323614520', 58, 719, 'Nusret köklü cad no 4 Laleli', '2015-10-18 02:21:54'),
(18, 1, 'eliftugbatatar@hotmail.com', 'elifhakan12', 'elif tuğba soysal', '05075620694', '05075620694', 41, 484, 'yenibosna', '2015-10-18 14:38:38'),
(19, 1, 'sehnaz.ko@yandex.com', '18102010', 'şehnaz Koç', '05350712601', '05350712601', 41, 502, 'Halkalı', '2015-10-29 20:01:57'),
(20, 1, 'gozdeozden@gmail.com', '986532', 'Gözde Özden', '05077020072', '0532 323 64 63', 41, 509, 'Esentepe cad. Bıldırcın Sok. Tellioğlu apt. No 13 d 5', '2015-11-02 14:12:23'),
(21, 1, 'cansumergen@hotmail.com', '137850', 'Cansu Duzcu', '05389222818', '05389222818', 41, 485, 'Kartaltepe mah. Şehit er rıdvan mert sok. Fidan sitesi B-4 D:4', '2015-11-13 22:09:17'),
(22, 1, 'kulcumustafa@hotmail.com', 'mus57tafa', 'Misra beste kulcu', '05466751986', '05426751986', 41, 511, 'Hamidiye mah baris yolu cad guven 89 sitesi 17 blok daire 2 cekmekoy', '2015-12-01 01:40:15'),
(23, 1, 'gokhan-nalci@hotmail.com', 'gokhan48', 'gokhan nalcı', '05325451847', '05325451847', 41, 485, 'ahu sokak', '2015-12-16 16:18:16'),
(24, 1, 'duygudmr-85@hotmail.com', '05101985', 'Duygu Demirtaş ', '5320580399', '5320580399', 41, 503, 'Altaycesme mah acar sokak Demirtaş apt no 23.6', '2015-12-17 00:18:57'),
(25, 1, 'sselinaslan@gmail.com', '789852123', 'sselinaslan@gmail.com', '5070646765', '5070646765', 41, 489, 'çıksalın mahallesi mühibban sokak güneysu apartmanı no:22 D:4 Halıcıoğlu istanbul', '2015-12-17 09:51:45'),
(26, 1, 'byonduu@gmail.com', '25081993', 'Betul YONDU', '5324249098', '05321513642', 41, 485, 'şenlikköy/ florya /bakırköy', '2016-01-08 04:09:28'),
(27, 1, 'ismailyazgan@msn.com', '14871487', 'ismail yazgan', '02167448596', '5335214789', 41, 499, 'merdivenköy mah. ortabahar sok.', '2016-01-24 06:21:19'),
(28, 1, 'bradmela@hotmail.com', 'bjk1903', 'Begüm Özü', '5324741353', '05324741353', 41, 486, 'Orta mahalle ay sokak no14 daire 3 Bayrampaşa istanbul', '2016-01-25 00:00:08'),
(29, 1, 'esrabicer2@gmail.com', 'e1s2r3a4', 'esra biçer', '0212 541 60 70', '0537 780 48 80', 41, 481, 'kavaklı mahallesi kavaklı caddesi gül yapı kavaklı konakları M blok D:14 Beylikdüzü ', '2016-01-27 22:17:44'),
(30, 1, 'rukiyekir@hotmail.com', '67676767', 'RUKİYE KIR', '5336718369', '05334020023', 13, 170, 'huhhhuu', '2016-02-11 09:53:52'),
(31, 1, 'selinyirtici@gmail.com', '34190455', 'Selin Yırtıcı', '05300376699', '05300376699', 41, 505, 'maden mah acarlar sitesi x 84 b', '2016-02-16 12:50:50'),
(32, 1, 'duygulnaz@gmail.com', 'bahadu12', 'duygu gülnaz', '03122404450', '05324878126', 7, 73, 'yaşamkent mah. 3058 sk no:13 \r\nyaşamkent', '2016-02-22 15:39:40'),
(33, 1, 'ecmtyln@hotmail.com', '32363236', 'asiye ecem taylan', '0266 7187718', '05544773474', 12, 150, 'levent mah. cumhuriyet sok. sarıgül apt. D/2', '2016-02-23 10:01:40'),
(34, 1, 'dilek.ozer@hepsiburada.com', 'Do567890', 'dilek özer', '05416204899', '05416204899', 41, 511, 'demokrasi caddesi no: 80 d:5 sarıgazi /ümraniye', '2016-03-05 13:02:44'),
(35, 1, 'elifmurvet.gursel@arcelik.com', 'tuna241989', 'ELİF MÜRVET GÜRSEL', '02128722000-1444', '05543579592', 41, 494, 'Vedat Altun Sokak Aşık Veysel Mah. Erguvan Evleri Sitesi A9D Blok Kat:5 Dr:11 Esenkent  Esenyurt İstanbul', '2016-03-09 14:01:54'),
(36, 1, 'nuraycinarr@gmail.coö', 'ibonuray2002', 'Nuray çınar', '5333827308', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No8 kat2 d. 2', '2016-03-10 10:48:47'),
(37, 1, 'nuraycinarr@gmail.com', 'ibonuray2002', 'Nuray çınar', '5333827308', '5333827308', 41, 485, 'İskele cad. Osman gürer sk. Güneş apt. No. 8 k. 2 d. 2', '2016-03-10 10:54:19'),
(38, 1, 'gulsum.gonen@hotmail.com', '34yr9783', 'Gulsum Gönen ', '02128640927', '0536 731 8142', 41, 490, 'Batıköy mahallesi Aktay caddesi a 3 27 daire 4 Büyükçekmece İstanbul ', '2016-03-12 20:27:56'),
(39, 1, 'eraslanreyhannn@gmail.com', 'salihreyhan2012', 'Reyhan Eraslan', '02163085601', '0534506800', 41, 512, 'Çengelköy mah. Bağlar cad. No21/3 üsküdar istanbul', '2016-03-20 23:05:36'),
(40, 1, 'meliiaykut@hotmail.com', 'melike123', 'MELİKE AYKUT', '05337669093', '05337669093', 41, 496, 'cebecibaşı mah no:11', '2016-04-11 12:21:21'),
(41, 1, 'nurdan3436@hotmail.com', '5636600ali', 'nurdan esendemir', '05375215105', '05375215105', 41, 493, 'Turgutreis mah Karaosmanoğlu cad no:37 Kat:3 Esenler/Atışalanı/istanbul', '2016-04-20 09:35:47'),
(42, 1, 'eda.bayramm@hotmail.com', '50473441626...', 'Eda Bayram', '05345509450', '05345509450', 41, 485, 'Ürgüplü Cad. Konak Apt. No:31 Daire:10 Yeşilyurt/İstanbul', '2016-04-26 16:18:46'),
(43, 1, 'esradinc1@gmail.com', 'srdnc321', 'Esra Dinç', '05052802880', '05052802880', 7, 89, 'Törekent mah. 297. sokak no:34 Sincan/Ankara', '2016-04-28 17:42:33'),
(44, 1, 'culumozlem@gmail.com', '11971733', 'ÖZLEM', '05339656506', '05339656506', 41, 487, 'çırağan caddesi no 4 bahçeşehir üniversitesi coop direktörlüğü beşiktaş - istanbul', '2016-05-09 14:29:44'),
(45, 1, 'begumcaliskan89@hotmail.com', 'begum18', 'Begüm Kıraç ', '05302815434', '05302815434', 41, 511, 'Tantavi Mah Estergon Cad Suryapı Exen St E3Blok Daire:22', '2016-05-10 12:48:55'),
(46, 1, 'sonatyuce@gmail.com', 'aykutsonat', 'Aykut Sonat Yüce', '05325282304', '05325282304', 41, 501, 'Orhantepe Mah., Camli Sokak no:32 Dragos/Kartal', '2016-05-18 18:17:24'),
(47, 1, 'busrademir.93@hotmail.com.tr', 'o455113821', 'BÜŞRA DEMİR', '5536363809', '5536363809', 41, 510, 'AYDINTEPE MAH.', '2016-05-20 16:43:14'),
(48, 1, 'berin1950@hotmail.com', 'galatasaray1571', 'berin günderci', '05444997072', '05444997072', 41, 500, 'talatpaşa mh aslangazi cd ipekkuşak sk no 7 daire 4 kağıthane istanbul', '2016-05-21 12:07:30'),
(49, 1, 'eyl_aydin@hotmail.com', 'qwaszx!!', 'EYLÜL AYDIN', '05315595429', '05315595429', 41, 482, 'TAHTAKALE MAHALLESİ ISPARTAKULE UNİKONUT SİTESİ C4 KAT:8 DAİRE:18', '2016-05-21 12:12:59'),
(50, 1, 'e.nbt@hotmail.com', 'Arda.2016', 'eren nibat', '0541 625 06 05', '0541 625 06 05', 6, 63, 'Cami Cedit Mahallesi, Molla Sokak No 8/C ', '2016-05-25 11:08:50'),
(51, 1, 'sibeldmrl95@gmail.com', 'duruderın', 'Sibel ', 'Akdeniz ', '05389703432', 22, 255, 'Biga', '2016-06-06 00:42:11'),
(52, 1, 'merveonur86@gmail.com', 'Mrvhrn3', 'merve onur', '02165270012', '05387884964', 41, 511, 'necip fazil mah. Dilektaşı Sokak. Evidea sit.\r\nkat 3 daire 6, Ümraniye- İstanbul\r\nMertogarden AVM karşısı ', '2016-06-06 07:56:51'),
(53, 1, 'belkisozdemir@yahoo.com', 'belkis91741', 'Belkıs Özdemir', '5426525260', '5426525260', 67, 832, 'Üçoluk', '2016-06-28 14:03:54'),
(54, 1, 'sahinfilik@hotmail.com', 'dentturk34', 'şahin filik', '02122723639', '05469203434', 41, 509, 'halaskargazi cad.no:135 d:10 osmnbey', '2016-07-12 22:55:25'),
(55, 1, 'nesli.has@hotmail.com', '252585', 'neslihan hasoğlu', '05396459130', '05396459130', 41, 501, 'KARTAL SOĞANLIK', '2016-07-21 14:00:08'),
(56, 1, 'seldaunverdii@gmail.com', 'selda4040', 'selda', '5436496272', '5436496272', 51, 633, 'aşıkpaşa mah. 24. sok. şemsi hanım apt. b blok 4/8', '2016-07-26 11:49:46'),
(57, 1, 'eslemduygu@gmail.com', 'duygu8f', 'ESLEM DUYGU ELDEMİR', '05374285805', '05374285805', 41, 499, 'Barbaros mah. Fesleğen sok 4/A daire. 26 ataşehir ', '2016-08-08 14:56:40'),
(58, 1, 'enginkaanuysal@gmail.com', '4295989', 'Engin Kaan Uysal', '5316128204', '5316128204', 41, 507, 'Safa Mah. Kotku Cad. No 15/3 Sancaktepe İstanbul', '2016-08-11 09:12:18'),
(59, 1, 'meltem.taskin@avnet.com', '015015', 'Meltem Taşkın', '05378595303', '05378595303', 41, 486, 'Murat mah. Bayır sok. No:1 kat:2 Bayrampaşa/istanbul', '2016-08-24 13:46:29'),
(60, 1, 'mervehantal@gmail.com', '12345678', 'Merve Hantal', '5063400972', '5063400972', 41, 512, 'Üsküdar İcadiye', '2016-08-26 11:12:38'),
(61, 1, 'sedakarakayacadirci@hotmail.com', 'seda5787', 'seda çadırcı', '05357656956', '05357656956', 41, 512, 'yalnız selvi yoku cad.Mesa Çengelköy Sitesi D-1 D-6 üsküdar', '2016-08-31 06:38:56'),
(62, 1, 'edabalkann@hotmail.com', '20412041', 'Eda bayraktar', '03124968186', '05337911590', 7, 73, 'Bitlik mahallesi 450. Cadde 497. Sokak 20/2 ', '2016-09-15 19:23:14'),
(63, 1, 'ruveydabalci@gmail.com', '4775239*r', 'Emine Ruveyda BALCI', '03124430309', '05070722234', 7, 73, 'yıldızevler mah. 724. sok. eser apt. no:10/11 ', '2016-09-26 16:25:57'),
(64, 1, 'yellow_shy@hotmail.com', 'yelhan.7369987', 'yelda kaymaz', '05547369987', '05547369987', 41, 487, 'Türkali Mah. Tabakçı Hüseyin Sk. No:6 D:4 Beşiktaş/ İstanbul', '2016-09-28 19:08:56'),
(65, 1, 'nisa_bozdag@hotmail.com', '987654321', 'Nisa Bozdag', '05462314309', '05422942569', 60, 746, 'Haci ilyas mah. Guvecdede cad no:105/1 milas Muğla 48200', '2016-10-07 13:36:26'),
(66, 1, 'seyla.azoz@gmail.com', 'furelise2612', 'Seyla Azoz', '+90 (543) 371 57 35', '+90 (543) 371 57 35', 41, 487, 'Belediye Sitesi Akulus Sitesi A2 Daire 2 Ulus, Istanbul', '2016-10-09 14:03:54'),
(67, 1, 'gokcebozkurt89@gmail.com', '474984ggg', 'Gökçe Bozkurt', '5497464648', '5497464648', 41, 511, 'saray mah dr adnan buyukdeniz cad no 13 unilever ', '2016-10-11 20:30:03'),
(68, 1, 'merveroseveen@gmail.com', 'Social2016--', 'Merve Çağşırlı', '05312909508', '05312909508', 41, 505, 'Tarabya', '2016-10-12 03:41:41'),
(69, 1, 'hilal.asil.93@gmail.com', '3213763asl', 'Hilal asil', '05385962761', '05321375472', 41, 512, 'Abdi pasa mahallesi kisikli caddesi camlica apartmani no.6 daire7 uskudar istanbul', '2016-11-03 08:09:29'),
(70, 1, 'mrv1378@hotmail.com', 'mcelik95', 'merve çelik', '05354112470', '0507 079 29 37', 41, 497, 'Yıldıztabya mahallesi akgün sokak no2 d6 çelik apartmanı', '2016-11-06 15:04:22'),
(71, 1, 'mehtapboztoprak@gmail.com', 'mehtap1989', 'mehtap boztoprak', '05531487978', '05531487978', 41, 482, 'üniversite mah. zambak sok. no7/5 pelıcan avm yanı ', '2016-11-22 13:45:18'),
(72, 1, 'duygukaymak92@hotmail.com', 'cyperus+', 'Duygu kaymak', '05349414936', '05349414936', 53, 647, 'Atalay mah. Işılay sok no 33 Kocaeli/körfez 41740', '2016-11-27 10:12:20'),
(73, 1, 'yildizmanduz@hotmail.com', 'DAVET', 'YILDIZ MANDUZ', '05333350777', '05333350777', 41, 499, 'KÜÇÜKBAKKALKÖY MAH. BARBAROS HAYRETTİN SOKAK HAZAL APT. NO:4 D:3 ATAŞEHİR / İSTANBUL', '2016-12-02 11:51:56'),
(74, 1, 'pelin_doganay89@icloud.com', '2719385', 'PELİN DOĞANAY', '02124227188', '05336151614', 41, 482, 'CİHANGİR MAHALLESİ ORMANLI CADDESİ KIZILIRMAK SOKAK NO:21 DAİRE:3\r\n', '2016-12-02 14:17:15'),
(75, 1, 'victoria@hellotourism.com.tr', 'victoriacakmak28', 'Victoria Çakmak', '02122351224', '05325183157', 41, 489, 'Cumhuriyet Cad Beler Palas Apt 29/15 Taksim Istanbul', '2016-12-03 12:06:55'),
(76, 1, 'gkb.inci@outlook.com', 'inci123', 'İnci bayhan', '0538 402 90 20 ', '0538 402 90 20 ', 53, 642, 'Yeniköy merkez mahallesi kirazlıkent caddesi kirazlikent yani no:105/1 başiskele/kocaeli ', '2016-12-05 12:47:20'),
(77, 1, 'mervekarayaz@hotmail.com', 'corn53', 'Merve Ovalı ', '02663125489', '05532349950', 12, 164, 'Atatürk Cad no22', '2016-12-09 16:39:07'),
(78, 1, 'ipekyumusak@gmail.com', '**seloandipos**', 'İpek YUMUŞAK ', '5312786261', '5312786261', 37, 440, 'Gazi mah.', '2016-12-09 19:28:54'),
(79, 1, 'kutlugunorganizasyon@gmail.com', '6072403tg', 'tahir güner', '0332 235 2022', '05386072403', 54, 670, 'kalenderhane mh ankara cd no:34/H karatay konya', '2016-12-12 10:06:26'),
(80, 1, 'seyhanduymaz31@gmail.com', 'Seyhan1535', 'seyhan duymaz', '0326649268', '05536126748', 37, 445, 'savaş mah.42 sokak', '2016-12-12 14:04:37'),
(81, 1, 'yasemin.tanis89@gmail.com', 'yaren66', 'Yasemin Tanış ', '5413210118', '5413210118', 7, 84, 'Atapark Mh. Kalbur cd 18/21 Yağız Efe apt kat 5 ', '2016-12-15 07:08:17'),
(82, 1, 's.uluekmekci@msn.com', '101010', 'Sercan Uluekmekçi', '5326800589', '5326800589', 42, 519, 'Mansuroglu mah Sakarya Cad. No:77-17 Bayraklı İzmir', '2016-12-15 21:33:50'),
(83, 1, 'sedaozbuk@hotmail.com', 'www1986', 'Seda Özbük', '02124787450', '05326137341', 41, 485, 'Şenlikköy mah. Gül sok. No:3 B/8 Florya İstanbul', '2016-12-20 09:48:49'),
(84, 1, 'zeynepsevde24@gmail.com', '1453268', 'Zeynep Sevde Şener', '05318531012', '05318531012', 41, 512, 'Kısıklı Mah. Akınbey Sok. Pelit Apt. No:5 D:2 Üsküdar/İstanbul', '2016-12-21 17:26:27'),
(85, 1, 'semacokicer@hotmail.com', 'hzhasansezai', 'Sema cokicer', '5389101107', '5320601455', 41, 512, 'Nakkastepe', '2017-01-14 20:58:14'),
(86, 1, 'simgegulistan@gmail.com', 'sisisi', 'Simge Gülistan', '2423635', '5467934878', 21, 245, 'FSM Bulvarı Bulvar İş Merkezi Kat:3 No:17 Nilüfer Bursa', '2017-01-16 12:22:38'),
(87, 1, 'dkilci@akkimmat.com', '159651', 'DİLEK KILCI', '02125419911', '05514121458', 41, 490, 'Cumhuriyet mah. Bulut sok. No:9/2 B Blok D:3 ERGUVAN EVLERİ BÜYÜKÇEKMECE / İSTANBUL', '2017-01-20 14:40:23'),
(88, 1, 'ozgecanozdemir@outlook.com', '963963', 'Ozgecan ozdemir', '5412065974', '5412065974', 41, 494, 'Piri reis mh 2035. Sk imran sitesi 7a b2 blok d.6', '2017-01-21 00:26:05'),
(89, 1, 'pinarpasali@gmail.com', '200511121037', 'PINAR PAŞALI', '05302746054', '05302746054', 41, 486, '.', '2017-01-26 15:33:58'),
(90, 1, 'simge.erturk@gmail.com', '1984252627', 'simge karagülle', '05374068172', '05374068172', 41, 490, 'Barış mah.enver adakan bulvarı peyami safa sokak semerkand avm No 43 PİKAP ORGANİZASYON VE PARTİ EVİ Beylikdüzü / İstanbul', '2017-01-26 17:39:58'),
(91, 1, 'sa.dmm.65@outlook.com', '05312352392se', 'sema nur duman', '5312352393', '5312352393', 41, 504, 'çamçeşme mahallesi çiçek sokak no:16 daire:3', '2017-01-30 14:53:20'),
(92, 1, 'hande.ozbey@hotmail.com', '1124500hh', 'Hande Eren', '05323874260', '05323874260', 7, 73, 'alacati mahallesi türkkonut cad Ada park konutlari B blok kat 3 no 10 cayyolu', '2017-02-08 22:44:42'),
(93, 1, 'bediaelif_aksakal@hotmail.com', 'bediabeytullah2016', 'Elif Aksakal', '05334577012', '05334577012', 21, 245, 'Havva Aslanoba uygulama oteli', '2017-02-12 04:22:19'),
(94, 1, 'elifkisacik01@gmail.com', '255241992', 'ELİF KISACIK', '5302471358', '5302471358', 41, 497, '50 YIL MAH A CAD 2017 SOK NO 27 D3 SULTANGAZİ İSTANBUL', '2017-02-13 08:41:34'),
(95, 1, 'gizemayvalioglu@gmail.com', '749381', 'Nur Gizem Ayvalıoğlu', '05376842751', '05376842751', 41, 499, 'ataşehir', '2017-02-14 11:52:00'),
(96, 1, 'duyguazak@msn.com', '-34DuYgU', 'DUYGU AZAK', '05382590289', '05382590289', 41, 493, 'KAZIM KARABEKİR MAH.AŞIK VEYSEL CAD.NO:19 D:10 ESENLER/İSTANBUL', '2017-02-14 19:57:05'),
(97, 1, 'glnery_@hotmail.com', 'dreamlife', 'Gülin ersoy', '0123456789', '5543727778', 64, 794, 'Düz mah 30 ağustos sok no 11/a', '2017-02-18 02:22:57'),
(98, 1, 'elifffidan@gmail.com', 'mutluyum123', 'Elif fidan', '5078294503', '5078294503', 41, 500, 'Gursel mahallesi yadigar sok. No:11 k:1 okmeydani', '2017-02-27 09:01:28'),
(99, 1, 'cns.snr16@hotmail.com', '115300', 'Cansu Şener', '022400000000', '05458378487', 21, 250, 'Yıldırım/Bursa', '2017-02-27 11:40:16'),
(100, 1, 'dogann_t@hotmail.com', '123456', 'TUĞBA DOĞAN', '5316173184', '5316173184', 41, 513, 'SEYİTNİZAM MAH G/1 SK(ŞEHİT ER RAMAZAN KİRMAN SK) NO:51 D:11', '2017-03-03 10:03:26'),
(101, 1, 'hfidan@sisecam.com', 'hazall', 'hazal fidan', '08502063067', '5305522698', 41, 501, 'fatih sultan mehmet caddesi, serçe sokak, mavi evler sitesi \r\nC blok daire:7 uğurmumcu kartal İstanbul', '2017-03-09 13:57:10'),
(102, 1, 'iiremyesil@gmail.com', 'pamuk12345', 'irem yeşil', '02122490069', '05367160695', 41, 489, 'refik saydam cad. Haliç apt. No:23/5 Kat 2 şişhane/beyoğlu', '2017-03-11 12:38:05'),
(103, 1, 'banuiriceli@gmail.com', '135790', 'Banu iriceli', '5425043704', '5425043704', 8, 109, 'Demircikara mah avni tolunay cad', '2017-03-16 21:18:09'),
(104, 1, 'silabeyhan@gmail.com', '213939921', 'Sıla Beyhan', '5064661787', '5064661787', 41, 497, 'Avrupa konutları tem 1 3. Blok No:85', '2017-03-21 00:46:20'),
(105, 1, 'ezgiboylu@gmail.com', '13ez13**', 'Ezgi Boylu', '05533375475', '34755', 41, 511, 'İnönü Mah. Kayışdağı Cad.\r\n26 Ağustos Yerleşimi Ataşehir', '2017-03-28 00:33:00'),
(106, 1, 'dygsyg@hotmail.com', 'ds2912', 'Duygu Saygı', '05372740828', '05372740828', 41, 495, 'Nişanca Mah. Otakçılar Cad. Alaca Tekke Sok. Pınar Apt. No:74/6 Eyüp İstanbul', '2017-03-31 09:54:03'),
(107, 1, 'bozaliaslibetul@gmail.com', 'asl1796460240btl', 'Aslı Betül Bozali ', '5321355593', '05321355593', 41, 484, 'Zafer mahallesi Türkbeyi sokak 17/12 yenibosna-İstanbul', '2017-04-04 03:29:06'),
(108, 1, 'senemuysalcann@hotmail.com', 'senem0101.', 'SENEM UYSALCAN', '05342943676', '05342943676', 41, 490, 'SİNANOBA MAHALLESİ / İBRAHİMZADE CADDESİ / EMLAK BANKASI KONUTLARI / A-50 BLOK / DAİRE: 1', '2017-04-12 15:15:16'),
(109, 1, 'fiabaorganizasyon@hotmail.com', '23302330', 'sevinç yüksel', '2163707718', '05345979892', 41, 503, 'bağlarbaşı mah bağdat caddesi cengizsok', '2017-04-23 13:58:39'),
(110, 1, 'zezebsr@gmail.com', 'zeynep80', 'ZEYNEP BAŞAR', '05354258376', '05354258376', 41, 512, 'KALFA ÇEŞME SOK.VALİDEBAĞ SİTESİ 27.BLOK NO:! KOŞUYOLU ÜSKÜDAR', '2017-04-25 13:30:37'),
(111, 1, 'evrenkasim@gmail.com', 'evren_1864', 'evren kasım', '88888888888888888888888', ' 8888888888888888888888', 12, 167, 'yenı mahalle', '2017-05-19 00:42:07'),
(112, 1, 'duygub.ozel@gmail.com', 'dtd0404', 'Duygu ozel oymak', '05389615417', '05389615417', 41, 499, 'Ataturk mahallesi yakut caddesi zümrüt sitesi 13.blok daire 3 atasehir/istanbul', '2017-05-24 12:50:27'),
(113, 1, 'aysemkulaksiz@gmail.com', 'santacruz', 'aysem kulaksiz', '5309550197', '5309550197', 41, 485, 'demet 3/1 ', '2017-06-07 03:37:23'),
(114, 1, 'cakircansin@gmail.com', '*@05319148934*@', 'Cansın Cakir', '05319148934', '05319148934', 41, 497, 'HURRIYET MAHALLESİ ŞEHİT MUSTAFA YEŞİL CADDESİ NO 4 DAİRE 4 ', '2017-06-12 21:06:39'),
(115, 1, 'scanver@gmail.com', '23012004', 'Sevtap Canver', '05336695233', '05336695233', 41, 503, 'Altıntepe Bahar Sokak özpınar apt. no 20/7 kücükyalı istanbul', '2017-06-15 16:12:56'),
(116, 1, 'ali@atabak.com', '1', 'ahmet karaca', '05368693201', '05368693201', 55, NULL, 'asdsadsadasd', '2017-06-20 14:29:38'),
(117, 1, 'canan.gural@gmail.com', '123652<<*', 'canan uzun', '02127710252', '05350244197', 1, NULL, 'Yeşil bayır mahallesi\r\nYapı Caddesi No:28', '2017-06-28 13:47:10');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `adm`
--
ALTER TABLE `adm`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `akategori`
--
ALTER TABLE `akategori`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `anasayfaslayt`
--
ALTER TABLE `anasayfaslayt`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `ceviri`
--
ALTER TABLE `ceviri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `hizmetler`
--
ALTER TABLE `hizmetler`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `ilceler`
--
ALTER TABLE `ilceler`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `iller`
--
ALTER TABLE `iller`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `kurumsal`
--
ALTER TABLE `kurumsal`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `musteri`
--
ALTER TABLE `musteri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `organizasyon`
--
ALTER TABLE `organizasyon`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `ornekproje`
--
ALTER TABLE `ornekproje`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `ornekprojegaleri`
--
ALTER TABLE `ornekprojegaleri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `paketlerimiz`
--
ALTER TABLE `paketlerimiz`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `paketlerimizgaleri`
--
ALTER TABLE `paketlerimizgaleri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `referanslar`
--
ALTER TABLE `referanslar`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `siparis`
--
ALTER TABLE `siparis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Tablo için indeksler `siparislerxx`
--
ALTER TABLE `siparislerxx`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `statik`
--
ALTER TABLE `statik`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `uyeler`
--
ALTER TABLE `uyeler`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `adm`
--
ALTER TABLE `adm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Tablo için AUTO_INCREMENT değeri `akategori`
--
ALTER TABLE `akategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Tablo için AUTO_INCREMENT değeri `anasayfaslayt`
--
ALTER TABLE `anasayfaslayt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Tablo için AUTO_INCREMENT değeri `ceviri`
--
ALTER TABLE `ceviri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- Tablo için AUTO_INCREMENT değeri `hizmetler`
--
ALTER TABLE `hizmetler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- Tablo için AUTO_INCREMENT değeri `ilceler`
--
ALTER TABLE `ilceler`
  MODIFY `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1009;
--
-- Tablo için AUTO_INCREMENT değeri `iller`
--
ALTER TABLE `iller`
  MODIFY `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- Tablo için AUTO_INCREMENT değeri `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Tablo için AUTO_INCREMENT değeri `kurumsal`
--
ALTER TABLE `kurumsal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- Tablo için AUTO_INCREMENT değeri `musteri`
--
ALTER TABLE `musteri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- Tablo için AUTO_INCREMENT değeri `organizasyon`
--
ALTER TABLE `organizasyon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- Tablo için AUTO_INCREMENT değeri `ornekproje`
--
ALTER TABLE `ornekproje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- Tablo için AUTO_INCREMENT değeri `ornekprojegaleri`
--
ALTER TABLE `ornekprojegaleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=394;
--
-- Tablo için AUTO_INCREMENT değeri `paketlerimiz`
--
ALTER TABLE `paketlerimiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- Tablo için AUTO_INCREMENT değeri `paketlerimizgaleri`
--
ALTER TABLE `paketlerimizgaleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=464;
--
-- Tablo için AUTO_INCREMENT değeri `referanslar`
--
ALTER TABLE `referanslar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- Tablo için AUTO_INCREMENT değeri `siparis`
--
ALTER TABLE `siparis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Tablo için AUTO_INCREMENT değeri `siparislerxx`
--
ALTER TABLE `siparislerxx`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;
--
-- Tablo için AUTO_INCREMENT değeri `statik`
--
ALTER TABLE `statik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Tablo için AUTO_INCREMENT değeri `uyeler`
--
ALTER TABLE `uyeler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;