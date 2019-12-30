var caculator = require('./cal.js');

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Guys... !!!!' + caculator.add(10,20));
}).listen(8081);
