var express = require('express');
var app = express();
var https = require('https');

var url = 'https://www.googleapis.com/youtube/v3/videos?id=oRdxUFDoQe0&key=AIzaSyD5r6DidTnUh1vfhNJ8uLA5J1ZB0RfSoGc%20&part=snippet,contentDetails,statistics,status,topicDetails,player'


app.get('/', function (req, res) {
    
    download(url, function (data) {
        console.log(data);
    })

});



app.listen(3000);


function download(url, callback) {
    https.get(url, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}