var lon = 0;
var lat = 0;
var tempC = 0;
var tempF = 0;
$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(success)

	function success(pos) {
	  	lon = pos.coords.longitude;
	  	lat = pos.coords.latitude;
		$.ajax({
			type: 'GET',
			url: 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat +	 '&lon=' + lon,
			success: function(data){
				console.log(data);
				tempC = Math.round(data.main.temp);
				tempF = Math.round((tempC * 9/5) + 32)
				$('#icon').attr('src', data.weather[0].icon);
				$('#icon').attr('alt', data.weather[0].main);
				$('#location').html(data.name);
				$('#weatherText').html(data.weather[0].main);
				$('#temperature').html(tempC + " ᵒC");
				$('.converter').css('display','inline');
			}
		});
	}
});

$('#tempTogC').click(function() {
	$('#temperature').html(tempC + " ᵒC");
});

$('#tempTogF').click(function() {
	$('#temperature').html(tempF + " ᵒF");
});