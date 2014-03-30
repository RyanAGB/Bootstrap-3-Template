//Javascripts
$(document).ready(function(){ 

    //Favicon
	$.favicon('img/favicon.ico');

    //Content insert
    //$('#view_section_1').insertAfter('#slider');

    //Error insert
    //$('#error').insertAfter('#slider');
	
    //Menu
	menu.contactDetails({
		phone: ['0471948576', '0471948576'], //optional, can have multiple values[array]
		mobile: '0452857464', //optional, can have multiple values[array]
		email: 'email@gmail.com', //optional, can have multiple values[array]
		address: '4 First Light Ct, Coomera waters 4209' //optional, single value
	});

	//Slider
	$('.camera_wrap').shuffleCamera();
    jQuery('.camera_wrap').camera({
        random: true,
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

$(window).load(function(){

    //Footer Map
    //Main Map
    
});