const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0a2bddab2c8e1b312ae348705f616e30&query=37.8267,-122.4233";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body.daily.data[0]);
      callback(
        undefined,
        `It is currently  ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of a rain`
      );
    }
  });
};
module.exports = forecast;
