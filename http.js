// HTTP Method
// GET = Digunakan untuk menampilkan melalui url
// POST = Digunakan untuk insert data baru melalui form-data, raw json
// PUT dan PATCH = Digunakan untuk update data
// DELETE 

// 200 = Data berhasil tampil
// 201 = Data berhasil disimpan
// 405 = Method Not Allowed / Method antara yang diakses tidak sama 
// 500 = Internal Server Error
// 300 

var http = require('http');

var server = http.createServer((request, response) => {
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('<h1>Test</h1>');
})

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello World');
// });

server.listen(1234)
console.log('Running in port 1234');



