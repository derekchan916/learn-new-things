var pollWeather = function (location) {
  var lat = location.coords.latitude;
  var long = location.coords.longitude;
  this.area = [lat, long]
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var params = {
    lat: location.coords.latitude,
    lon: location.coords.longitude
  };
  url += toQueryString(params)
  url += "&APPID=645c5d39c7603f17e23fcaffcea1a3c1"

  var xmlhttp = new XMLHttpRequest();
  var that = this;

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
      that.locationData = JSON.parse(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

var toQueryString = function (obj) {
  var parts = [];
  for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
  }
  return parts.join("&");
};

navigator.geolocation.getCurrentPosition(this.pollWeather);

//Getting input from console.

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
