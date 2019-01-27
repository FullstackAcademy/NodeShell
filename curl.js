const request = require('request');

function curl(url) {
    request(url, function (err, res, body) {
        console.log('error: ', err);
        console.log('statusCode: ', res && res.statusCode);
        console.log('body: ', body)
    })
}

module.exports = curl;