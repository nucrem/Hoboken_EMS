function initAll() {
	initBXSlider();
}

initAll();



function initBXSlider() {
	// initialzies the bxslider 

	var bxslider = $( '.bxslider' );

	if ( bxslider.length == 0 ) return;

	// if we make it down here, there must be one bxslider 

	var bxConfig = {
		auto: true
		, randomStart: true
		, pager: false
		, pause: 4000
		, captions: true
	};

	var vehicles = $('.vehicles-page');
	if ( vehicles.length > 0 ) {
		bxConfig.auto = false;
		bxConfig.adaptiveHeight = true;
	}

	bxslider.each( function( idx, el ) {
		el = $( el );

		el.bxSlider( bxConfig );
		
	});
}