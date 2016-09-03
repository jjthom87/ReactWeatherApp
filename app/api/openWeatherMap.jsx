var axios = require('axios');
var apikey = '275d5dfdea53a2d3e3869f48d154e9ac';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedlocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedlocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}