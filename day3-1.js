console.log('started Day 3');

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Cotent-Type': 'text/html'});
    res.write('<h1>Rajshekhar Siva</h1>');
    res.end('<h1>Rajshekhar ---- Siva</h1>');
}).listen(9090);