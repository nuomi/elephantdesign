$( function() {
	$( "pre" ).snippet( "javascript",{
		style:		"vegas",
		showNum:	false
	});
	
	$( '.scrollable' ).jScrollPane({
		dragMaxHeight:100,
		wheelSpeed:20,
		animateScroll: true
	});
	
	var jScrollPaneApi = $( '.scrollable' ).data( 'jsp' );
	
	jScrollPaneApi.scrollToY( 400, false )
	jScrollPaneApi.scrollToY( 0, true );

	$( window ).resize( function() {
		jScrollPaneApi.reinitialise();
	});
});