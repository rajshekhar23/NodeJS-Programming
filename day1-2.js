var http = require('http');

http.createServer(function(req, res) {
            // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });         

    if (req.url == '/') { //check the URL of the current request
        // set response content    
        res.write('<html><body><h2>This is home Page.</h2></body></html>');
        res.end();

    }
    else if (req.url == "/student") {
        
        res.write('<html><body><h2>This is student Page.</h2></body></html>');
        res.end();

    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>This is admin Page.</h2></body></html>');
        res.end();

    }
    else {
        res.end('<h2>Invalid Request! 404 page<h2>');
    }
}).listen(8081);