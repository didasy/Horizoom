(function( $ ) {
  $.fn.horiZoom = function() {
	
	$(this).css('backgroundSize', $(this).width());
	
		var initWidth = $(this).width(),
			downX = 0,
			movX = 0,
			initVal = 0;
	
	$(this).mouseover( function() {
		$(this).css('cursor', 'pointer');
	});
	
	$(this).mousedown( function() {
		downX = movX; initVal = 1; }).mouseup( function() {
			downX = 0; initVal = 0; initWidth = $(this).width();
	});
	
	$(this).mousemove( function(e) { movX = e.clientX;
		if(initVal == 1) {
			$(this).width(initWidth + (movX - downX)); $(this).height(initWidth + (movX - downX)); $(this).css('backgroundSize', $(this).width());
		}
	});
	
		
	}; 
})( jQuery );
