var express = require('express');
var app = express();
var https = require('https');



app.get('/:id', function (req, res) {
 
    var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + req.params.id +
    '&key=AIzaSyD5r6DidTnUh1vfhNJ8uLA5J1ZB0RfSoGc%20&' +
    'part=snippet,contentDetails,statistics,status,topicDetails,player'

    console.log(req.params.id);

    download(url, function (data) {

        var jsonData = JSON.parse(data);

        res.send(jsonData.items[0].player.embedHtml + '<br><h1>' + jsonData.items[0].snippet.title + '</h1><br>' + jsonData.items[0].snippet.description);
        
    })

});
app.listen(3000);
''
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



