navigator.geolocation.getCurrentPosition(this.pollWeather);

var pollWeather = function (location) {
  
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
