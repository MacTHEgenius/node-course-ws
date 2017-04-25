const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/40e8b4ba9c13a2df00f6cbea17750624/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: fToC(body.currently.temperature),
                apparentTemperature: fToC(body.currently.apparentTemperature)
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

var fToC = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5 / 9);
};

module.exports = {
    getWeather,
    fToC
}