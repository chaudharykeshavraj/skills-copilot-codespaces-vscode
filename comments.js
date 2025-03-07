// create web server to handle requests
// 1. load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];
// 2. create server
http.createServer(function (req, res) {
    // parse the request
    var url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
        case '/':
        case '/index':
            display_form(url_parts, req, res);
            break;
        case '/add_comment':
            add_comment(url_parts, req, res);
            break;
        case '/display_comments':
            display_comments(url_parts, req, res);
            break;
        default:
            display_404(url_parts, req, res);
            break;
    }
}).listen(8080);
console.log('Server running at http://