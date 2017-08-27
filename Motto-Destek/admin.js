function git(oraya){
	window.location = oraya;
}
var mesaj = new Array();
	mesaj[1] = 'Bu Resmi Gerçekten Silmek İstiyormusunuz.';
	mesaj[2] = 'Pdf Dosyasını Silmek İstiyormusunuz.';
	mesaj[3] = 'Fiyat Listesi Dosyasını Silmek İstiyormusunuz.';


function Sil(adres,msjNo){
	msjNo=(msjNo==null)?1:msjNo;
if (confirm(mesaj[msjNo])){
	window.location = adres;
	}
}