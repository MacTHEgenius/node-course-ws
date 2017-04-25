const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google server.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                })
            }
        });
    });
};

geocodeAddress('00000').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
})