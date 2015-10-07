var https = require('https');

module.exports = {
    download : function (url, callback) {
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
}
