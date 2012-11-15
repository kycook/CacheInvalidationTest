var http = require('http'),
    fs = require('fs');
var count = 1;
http.createServer(function (req, res) {
    if(req.url === '/request' && req.method === 'POST') {
        // Output JSON response for POST
        res.writeHead(200, {'Content-Type': 'application/json', 'Last-Modified': 'Thu, 15 Nov 2012 21:33:17 GMT'});
        res.end('{"count":"' + count + '"}');

        count++;
    } else {
        // Output index.html
        res.writeHead(200, {'Content-Type': 'text/html'});

        var fileStream = fs.createReadStream('index.html');
        fileStream.pipe(res);
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');