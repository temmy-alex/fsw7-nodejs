const http = require('http');
const fs = require('fs');

// var server = http.createServer((req, res) => {
//     console.log('Request ' + req.url);
//     res.writeHead(200, {'Content-Type':'application/json'});
//     var users = {
//         nama: 'Testing',
//         age: 20,
//         status: true
//     };
//     res.end(JSON.stringify(users));
// });

var readJson = fs.readFileSync('users.json', 'utf-8');

var server = http.createServer((req, res) => {
    console.log('Request ' + req.url);
    // res.writeHead(500, {'Content-Type':'text/plain'});
    res.end(readJson);
})

server.listen(3000);
console.log('Server running in port 3000');