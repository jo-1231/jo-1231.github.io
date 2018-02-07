var paneauVisible = false;

function afficherMenu() {

    if (paneauVisible) {
        $(".side_panel").animate({ left: '0px' });
        paneauVisible = false;
    } else {
        $(".side_panel").animate({ left: '-290px' });
        paneauVisible = true;
    }
}



function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}