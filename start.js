var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    var contentType = 'text/html';
    fs.readFile(filePath, function(error, content) {
           response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');