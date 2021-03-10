var http = require('http');
var fs = require('fs');

// var readHtml = fs.readFileSync('page.html', 'utf-8');

// var server = http.createServer(function(req, res) {
//     // console.log('Request ' + req.url);
//     console.log(req);
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end(readHtml);
// });

var server = http.createServer((req, res) => {
    console.log('Request ' + req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    var readHtml = fs.createReadStream(__dirname+'/page.html', 'utf8');
    readHtml.pipe(res);   
})

// Current directory
// console.log(__dirname);

server.listen(3000);
console.log('Running in port 3000');