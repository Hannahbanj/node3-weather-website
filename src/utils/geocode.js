const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGFubmFocjAwIiwiYSI6ImNrc3BtcXBkNDA0c2Qyd3E0aGQ2dGt6dmYifQ.xmB8K0gFbvLVxEUp9uJgAQ&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitute: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
