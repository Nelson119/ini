'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, html2canvas, $ */
app.partial.home = function(){
	$('.home .color >a').on('click', function(){
		var s = $('.home').attr('class');
		$.each(s.split(' '), function(){
			if(this.indexOf('pick') >= 0){
				$('.home').removeClass(this);
			}
		});
		$('.home').addClass('pick'+$(this).attr('data-color'));
		$('.home .preview').html('');
	});
	$('.home .overlay').on('click', function(){
		var s = $('.home').attr('class');
		$.each(s.split(' '), function(){
			if(this.indexOf('pick') >= 0){
				$('.home').removeClass(this);
			}
		});
		$('.home .preview').html('');
		$('.confirm', f).removeClass('hide');
	});
	var f = $('.home .form');
	$('.confirm', f).on('click', function(){
		$(this).addClass('hide');
		html2canvas(f, {
			onrendered: function(canvas) {
				$('.preview', f).html('');
				// canvas is the final rendered <canvas> element
				$('.preview', f).append(canvas);
				var base64 = canvas.toDataURL("image/png", 1);
				var img = new Image();
				img.src = base64;
				$('.preview', f).append(img);
				$('.confirm', f).removeClass('hide');
			}
		});
	});
	// html2canvas(element, {
	// 	onrendered: function(canvas) {
	// 		// canvas is the final rendered <canvas> element
	// 	}
	// });
};	
