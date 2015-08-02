$(document).ready(function(){

  var days;
  var hours;

  // Find the difference between the user's data last month vs last month last year
  var kwhSavedThisMonth = Math.round(userData.thisMonthLastYear - userData.thisMonth);
  // Put this number into the markup
  $('#kWh-saved').append(kwhSavedThisMonth + ' kWh');

  // Find the difference between this year vs last year
  var kwhSavedThisYear = Math.round(userData.totalLastYear - userData.totalThisYear);

  /*
  	Next, let's create a function that turns the CO2 emissions from kWh you've saved into time that you've removed a car from the road. To create this number, we...
  	a. Find the average miles driven per vehicle per month in the USA = 1,123 miles
  	b. Find the average CO2 emissions per mile driven =  368.75 grams
  	c. a * b gives us the total CO2 emissions per vehicle per month = 414,106.25 grams 
  	d. Find the number of hours in an average month = 730 hours
  	e. c / d gives us average CO2 emissions of a vehicle per hour = 567.268 grams
  	f. Find the average CO2 emissions of 1 kWh = 757.499 grams
  	g. f / e tells us that the emissions of 1 kWh = 1.335 hours of a vehicle on the road
  */

  function kwhToTime (kwh) {
    if (!kwh) {
      return error;
    }
    return kwh * 1.335
  }

  // Time to start calculating!

  // Did the consumer save energy this month? Check that kwhSaved is a positive number
  if (kwhSavedThisMonth > 0) { // It's positive!

    // First, let's convert that into time and store it in userData to rotate the sky later
    userData.drivingTime = kwhToTime(kwhSavedThisMonth);

    // Divide the driving hours saved into days
    days = Math.floor(kwhToTime(kwhSavedThisMonth)/24);

    // Find the remaining hours
    hours = Math.round(kwhToTime(kwhSavedThisMonth) % 24);

    // Inject day value into markup
    if (days > 1) {
      $('#days').append(days + ' days');
    } else if (days > 0) {
      $('#days').append(days + ' day');
    } else {
      $('#days').hide();
    }
    // show 'and' ?
    if (days > 0 && hours > 0) {
      $('#days').append(' and ');
    }
    // Inject hours value into markup
    if (hours > 1) {
      $('#hours').append(hours + ' hours');
    } else if (hours > 0) {
      $('#hours').append(hours + ' hour');
    } else {
      $('#hours').hide();
    }

    // Print days and hours removed from road
    console.log('You saved ' + days + ' days ' + hours + ' hours.')

  } else if (kwhSavedThisMonth == 0) { 
    // No difference. Edgecase to be handled another time!
    alert('You used the same kWh as last year. Hmmm...');
    $('#hours').append('0 hours :(');

  } else {
    // It's negative. Another case that I would handle another time.
    alert('You used ' + Math.abs(kwhSavedThisMonth) + 'kWh more than last year. If I were to improve this widget I\'d add a little handling for over-users like you ;)');
    $('#hours').append('0 hours :(');
  }

});