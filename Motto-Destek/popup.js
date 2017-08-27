var popDrm = 0;
function popAc(popBaslik,popIcerik,popTop,popLeft){
	if(!$("body").is("#popDiv")){$("body").append('<div align="left" id="popDiv"><a id="popKapat">kapat</a><h1></h1><div></div></div><div id="popBg"></div>');}
	$("#popDiv h1").text(popBaslik);
	$("#popDiv div").html(popIcerik);
	///////////////////////////////////////
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popDiv").height();
	var popupWidth = $("#popDiv").width();
	$("#popDiv").css({
		"position": "absolute",
		"top": (popTop==0)?$(window).scrollTop()+100:popTop,
		"left": (popLeft==0)?windowWidth /2-popupWidth/2:popLeft
	});
	$("#popBg").css({"height": windowHeight});
	//////////////////////////////////////////
	if(popDrm==0){
		$("#popBg").css({"opacity": "0.5"});
		$("#popBg").fadeIn("fast");
		$("#popDiv").fadeIn("fast");
		popDrm = 1;
	}
	$("#popKapat").click(function(){popKapat();});
	$("#popBg").click(function(){popKapat();});
	$(document).keypress(function(e){if(e.keyCode==27 && popDrm==1){popKapat();}});
}
function popKapat(){
	if(popDrm==1){
		$("#popBg").fadeOut("fast");
		$("#popDiv").fadeOut("fast");
		popDrm = 0;
	}
}

$(document).ready(function(){
	$("#yeniUrunHizmetEkle").click(function(){
		popAc('Yeni Ürün veya Hizmet Ekle',$('#urunHizmetForm').html(),$(this).offset().top+30,$(this).offset().left-328);
		$("#popDiv #formislem").val("urunlerHizmetlerEkle");
		$("#popDiv #baslik").val("");
		$("#popDiv #aciklama").val("");
		$("#popDiv #button").val("Ekle");
	});
	$("#yeniResimEkle").click(function(){
	popAc('Yeni Resim Ekle',$('#ekResimForm').html(),$(this).offset().top+30,$("#yeniUrunHizmetEkle").offset().left-328);
	});
	$('li[rel][id="bt"]').click(function(){
		popAc('Ürün ve Hizmet Düzenle',$('#urunHizmetForm').html(),$(this).offset().top+30,$("#yeniUrunHizmetEkle").offset().left-328);
		var liId = $(this).attr("rel");
		$("#popDiv #baslik").val("");
		$("#popDiv #aciklama").val("");
		$("#popDiv #button").val("Kaydet");
		$("#popDiv #formislem").val("urunlerHizmetlerDuzenle");
		$("#popDiv #uhID").val(liId);
		$("#popDiv #baslik").val($('span[id="bslk-'+liId+'"]').text());
		$("#popDiv #aciklama").val($('span[id="ack-'+liId+'"]').text());
	});
	$(".detayBtn").click(function(){
	popAc('Mesaj Detayý',$('#detay-'+$(this).attr("id")).html(),$(this).offset().top+30,$(this).offset().left-475);
	});

});