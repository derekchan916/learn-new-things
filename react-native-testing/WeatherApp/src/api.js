var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?&appid=ad5df40fa9943e5f08fef6c28905b648';

var kelvinToF = function(kelvin) {
	return Math.round(kelvin - 273.15) + ' ˚C'
}

module.exports = function(latitude, longitude) {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	console.log(url);
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return {
				city: data.name,
				temperature: kelvinToF(data.main.temp),
				description: data.weather[0].description
			}
		})
		.catch((error) => {
			console.warn(error);
		})
}
