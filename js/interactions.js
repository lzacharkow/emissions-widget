$(document).ready(function(){

	// Cache elements in variables to improve performance
	var hills	= $('#hills');
	var trees	= $('#trees');
	var road	= $('#road');
	var sky		= $('#sky');
	var car 	= $('#car');
	var degree  = 0;
	var animate;	

	// Get total driving hours offset from userData
	var hours	= userData.drivingTime;

	// Driving animation
	function driving(timestamp) {
		degree = degree - .05;
		animate = requestAnimationFrame(driving);		
		hills.css( "background-position-x", "-=1" );
		trees.css( "background-position-x", "-=4" );
		road.css( "background-position-x", "-=7" );
		sky.css( "transform", "rotate(" + degree + "deg)" );
	}

	// When the user clicks the button (or the time saved), stop driving, hide the car, and move back time
	$('.button, .time-saved').click(function(){

		// Stop the driving animation
		window.cancelAnimationFrame(animate);

		// Swap out dialogue boxes to reveal energy savings
		$('.dialogue.a').hide();
		$('.dialogue.b').show();

		// Divide hours by 24 and multiply that by 360 to find out many rotations to give the sky
		degree = degree + ((hours/24)*360);

		// Lift up the car and fade it out
		car.css({
			bottom: "+=20",
			opacity: "0"
		});

		// Give the sky the transition class (this was removed up until this point to improve performance of the driving animation)
		sky.toggleClass("transition-class", true);

		// Queue sequence of events
		setTimeout(function(){
			// 1. Rotate the sky once the car is finished fading out (.3s as defined in CSS)
			sky.css( "transform", "rotate(" + degree + "deg)" );
			setTimeout(function(){
				// 2. Put the car back down and fade it in after the sky finishes rotating (4s (as defined in CSS)
				car.css( { bottom: "-=20", opacity: "1" } );
				setTimeout(function(){
					// 3. Remove transition class from sky and start the animation back up
					sky.toggleClass("transition-class", false);
					animate = requestAnimationFrame(driving);
				}, 300);
			}, 4000);
		}, 300);
	});

	// When the user clicks learn-more, toggle side-a/side-b
	$('.learn-more').click(function(){
		$('.side-b').fadeToggle();
	});

	// Start the animation!
	animate = requestAnimationFrame(driving);

});