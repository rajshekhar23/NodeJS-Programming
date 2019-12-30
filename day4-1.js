var request = require('request');
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/json'});
    request('http://godaddy.com',function(err, response, body) {
        res.end("" + JSON.stringify(response,' ', 4));
    });
}).listen(8081,() => {
    console.log('Server started');
});




