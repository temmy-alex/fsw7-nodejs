var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request  ' + req.url);
    console.log('HTTP Method ' + http.METHODS);
    console.log(http.STATUS_CODES);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/home.html').pipe(res);
    }else if(req.url === '/error'){
        res.writeHead(500, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/product.html').pipe(res);
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
})

server.listen(4000);
console.log('Running on port 4000');