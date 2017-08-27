$('.language').each(function () {
  $(this).find('> .select').on('click', function () {
    $(this).next().slideToggle();
  });
  $(this).find('.option').on('click', function () {
    $('.language > .select').html($(this).html()).next().slideUp();
  });
});




window.onload = function () {
    'use strict';
    /* prevent placeholder from sliding on input content */
    var inp = document.getElementsByTagName('input'),
        il = inp.length;

    while(--il) {
        inp[il].addEventListener('blur', function () {
            var t = this;
            (t.value.length > 0) ? t.classList.add('have-content') : t.classList.remove('have-content');
        });
    }

    /* trigger click event on checkbox when click on text */
    var i = 0,
        remember = document.getElementsByClassName("remember-me")[0],
        rememberCB = remember.getElementsByTagName("input")[0],
        rememberTxt = remember.getElementsByClassName("remember-me-txt")[0];
    
    rememberTxt.addEventListener('click', function () {
        i === 0 ? i = 1 : i = 0;
        if (i)
            rememberCB.checked = true;
        else
            rememberCB.checked = false;
    });
};


window.onload = function() {
  $('.button_container').click(function() {
    $('.button_container').toggleClass('active');
    $('.menu').toggleClass('open');
  });
};





(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});





//material contact form animation
$('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})





$(function(){
  $(".accordion .menu-head").click(function(){
   if( $(".plus-minus i").hasClass("ion-plus") ) {
     $(".plus-minus i").removeClass("ion-plus");
      $(".plus-minus i").addClass("ion-minus");
   }else{
   
      $(".plus-minus i").addClass("ion-plus");
     
   }
    $(".accordion .data").slideToggle("slow");
  });
});


   	$('.select2-config').select2({ width: '100%' });
	$("#interpretLanguageId").select2({minimumResultsForSearch:1,width:null,closeOnSelect:!1,width:"100%"});
document.querySelector("html").classList.add('js');


/* 
var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
     
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  
*/
	$('.fileupp').fileuploader({
        theme: 'onebutton',
        upload: {
            url: 'php/ajax_upload_file.php',
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            synchron: true,
            beforeSend: function(item) {
				var input = $('#custom_file_name');
				// set the POST field
				if(input.length)
					item.upload.data.custom_name = input.val();
				// reset input value
				input.val("");
			},
            onSuccess: function(result, item) {
                var data = JSON.parse(result),
					nameWasChanged = false;
				// get the new file name
                if(data.isSuccess && data.files[0]) {
					nameWasChanged = item.name != data.files[0].name;
                    item.name = data.files[0].name;
                    item.words = data.files[0].words;
                }
				// make HTML changes
				if(nameWasChanged)
					item.html.find('.column-title div').animate({opacity: 0}, 400);
                item.html.find('.column-actions').append('<a class="fileuploader-action fileuploader-action-remove fileuploader-action-success" data-words="'+item.words+'" title="Remove"><i></i></a>');
              	fiyatHesapla("file",item.words);
                setTimeout(function() {
					item.html.find('.column-title div').attr('title', item.name).text(item.name).animate({opacity: 1}, 400);
                    item.html.find('.progress-bar2').fadeOut(400);
                }, 400);
               
            },
            onError: function(item) {
				var progressBar = item.html.find('.progress-bar2');
				// make HTML changes
				if(progressBar.length > 0) {
					progressBar.find('span').html(0 + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
					item.html.find('.progress-bar2').fadeOut(400);
				}
                item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
                    '<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
                ) : null;
            },
            onProgress: function(data, item) {
                var progressBar = item.html.find('.progress-bar2');
				// make HTML changes
                if(progressBar.length > 0) {
                    progressBar.show();
                    progressBar.find('span').html(data.percentage + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                }
            },
            onComplete: null,
        },
		onRemove: function(item) {
			// send POST request
			$.post('./php/ajax_remove_file.php', {
				file: item.name
			},function(sonuc,stat){
					if(stat=="success"){
							var fixFiyat = 0.25; /// Kelime başı 25 kuruş varsayılan verdim isterseniz js veritabanından çekerek bu kısmı güncelleyebilirsiniz
							var ims = parseInt($(".wordCount strong").html());
							var top_word = ims-item.words;
							$(".wordCount strong").html(ims-item.words);
					 		var top_fiyat = parseFloat($(".toplam span").html().trim());

							var deg =  (top_fiyat-(item.words*0.25));
							 deg =  deg.toFixed(2);
					 		$(".toplam span").html(deg+" TL");
					}
			});
		}
    });


fiyat_hesapla();
function fiyat_hesapla(){
	fiyatHesapla();
	$(".workList li").slideToggle();
}

function run_waitMe(el){
		text = 'Lütfen Bekleyin...';

		el.waitMe({
			effect: "bounce",
			text: text,
			bg: 'rgba(255,255,255,0.7)',
			color: '#000',
			maxSize: 30,
			source: 'img.svg',
			textPos: "vertical",
			fontSize: "18px",
			onClose: function() {}
		});
	}
var eski = 0; 
function fiyatHesapla(type,word_count){ /// Dosya ekleme silme ve diğer seçeneklerle oynama durumunda işlenecek fonksiyon
	///
	var fixFiyat = 0.25; /// Kelime başı 25 kuruş varsayılan verdim isterseniz js veritabanından çekerek bu kısmı güncelleyebilirsiniz
	var minFiyat = 35; /// Minimum Değer
	run_waitMe($("#orderWr"));
	if(typeof type === "undefined"){
		var word_count = 0;
		//$(".wordCount strong").html(word_count);
	}
	
	
	



	if(typeof type === "undefined"){
		$("#orderWr").waitMe("hide");
	}else{
		switch(type){
			case "box":
				//var ims = parseInt($(".wordCount strong").html());
		var words = 0;		
$(".fileuploader-items-list li").each(function(){
	words += parseInt($(".fileuploader-action-success",this).attr("data-words"));
});
	words += parseInt($("#wordCount label").html().trim());
	
				$(".wordCount strong").html(words);

				var top_fiyat = parseFloat($(".toplam span").html().trim());

				var deg =  top_fiyat-(eski*0.25);
				 deg =  (word_count*0.25)+deg;
				eski = word_count;
					if(deg<=35){
						deg = 35;
					}
				 deg =  deg.toFixed(2);

				$(".toplam span").html(deg+" TL");

			///$(".wordCount strong").html($("label[for='metinGiris']").html().trim());

			break;
			case "file":
				var words_count = 0;

				var ims = parseInt($(".wordCount strong").html());
				var top_word = ims+word_count;
				$(".wordCount strong").html(top_word);
				var top_fiyat = parseFloat($(".toplam span").html().trim());

				var deg =  (top_word*0.25)+top_fiyat;
				  deg =  deg.toFixed(2);

					if(deg<=35){
						deg = 35;
					}
					 $(".toplam span").html(deg+" TL");

		
			break;
		}
		$("#orderWr").waitMe("hide");

	}
}

$("#textUpload").on("click",function(){
		fiyatHesapla("box",parseInt($("label[for='metinGiris']").html().trim()));
});

$("#interpretLanguageId").on("select2:select", function(event) {
	var arrr = $("#interpretLanguageId").val().join(", ");
	
	$(".trLanguages strong").html(arrr);
});

$("input[name='qualityTypeId']").on("change",function(){
		$(".trProf strong").html($(this).val());
});
$("input[name='categoryTypeId']").on("change",function(){

$(".trClass").html($(this).val());

});

$("input[name='durationTypeId']").on("change",function(){
	$(".trSpeed").html($(this).val());
});


$("#extraService_1").on("change",function(){
  var ff = $(".toplam span").html().split(" ");
	var fiy = parseFloat(ff[0]);
		
		 if($(this).is(":checked")){
		 	 fiy +=parseFloat($(this).attr("data-price-value"));
		 	 fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }else{
 			fiy -=parseFloat($(this).attr("data-price-value"));
 			fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }
});
$("#extraService_2").on("change",function(){
	  var ff = $(".toplam span").html().split(" ");
	var fiy = parseFloat(ff[0]);
		
		 if($(this).is(":checked")){
		 	 fiy +=parseFloat($(this).attr("data-price-value"));
		 	 fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }else{
 			fiy -=parseFloat($(this).attr("data-price-value"));
 			fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }
});
$("#extraService_3").on("change",function(){
	  var ff = $(".toplam span").html().split(" ");
	var fiy = parseFloat(ff[0]);
		
		 if($(this).is(":checked")){
		 	 fiy +=parseFloat($(this).attr("data-price-value"));
		 	 fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }else{
 			fiy -=parseFloat($(this).attr("data-price-value"));
 			fiy = fiy.toFixed(2);
			 $(".toplam span").html(fiy+" TL");
		 }
});

function submit_form(){
	run_waitMe($("body"));
	/*
fileuploader-list-files
	*/

	var ims = parseInt($(".wordCount strong").html());
	console.log(ims);
	if(ims>0){
	 var formData = new FormData();
        formData.append("dosya_list",$("input[name='fileuploader-list-files']").val());
        formData.append("ceviri_text",$("#metinGiris").val());
    var other_data = $('#newOrderForm').serializeArray();
    $.each(other_data,function(key,input){
        formData.append(input.name,input.value);
    });
     $.ajax({
            url: 'form_kayit.php', /// POST edilecek adres
            type: 'POST',
            data: formData,
            cache: false,
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(sonuc, textStatus, jqXHR)
            {
            	alert("Çeviri talebiniz başarıyla alındı");
                $('body').waitMe('hide');
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
              $('body').waitMe('hide');
            }
        });
 }else{
 	alert("Lütfen çeviri talebi göndermeden önce çevirilecek bir dosya veya metin girin");
              $('body').waitMe('hide');
 	
 }
}