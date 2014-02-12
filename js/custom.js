//Javascripts
$(document).ready(function(){ 
	$.favicon('favicon.ico');
	
	menu.contactDetails({
		phone: ['0471948576', '0471948576'], //optional, can have multiple values[array]
		mobile: '0452857464', //optional, can have multiple values[array]
		email: 'email@gmail.com', //optional, can have multiple values[array]
		address: '4 First Light Ct, Coomera waters 4209' //optional, single value
	});

	//Slider
	$('.camera_wrap').shuffleCamera();
    jQuery('.camera_wrap').camera({
        playPause: false,
        pagination: false,
        loader: 'none',
        navigation: false,
        portrait: true,
        height: '26.07692307692308%'
    });

    //Validation
    $('#custom_form').formValidation({ 
		validateText: ["name"],
		validateEmail: ["email"],
		validateSpam: true
	}); 
     
}); // end declaration


//$('#view_section_1').insertAfter('#slider');
//$('#headerdiv').insertBefore.('#content');

 (function($){
    $.fn.shuffleCamera = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffleCamera(items)) : this;
        });
    }
    
    $.shuffleCamera = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
})(jQuery);