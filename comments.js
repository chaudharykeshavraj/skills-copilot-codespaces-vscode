// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
// 2. Create a server object
var server = http.createServer(function(req, res) {
    // 3.1. Set the response HTTP header with HTTP status code 200 and Content type as text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 3.2. Send the response body "Hello World"
    res.end('Hello World\n');
});
// 4. Start the server on port 8080
server.listen(8080, '