// Built In Modules
var timers = require('timers');
var url = require('url');
// var getLink = url.parse(link, true)
var os = require('os');
var getUserInfo = os.userInfo();
var getDataCPU = os.cpus();
var fs = require('fs');

var link = 'http://test.id/data.html?tgl=2&bln=july';
var getUrl = new URL(link);

// timers.setTimeout(function waktu(){
//     console.log('Halo!');
// }, 1000);

// timers.setInterval(function waktu(){
//     console.log('Show Text!');
// }, 2000);

// var getQS = getLink.query;

// console.log('Host = ' + getLink.host);
// console.log('Path = ' + getLink.path);
// console.log('Find = ' + getLink.search);
// console.log(getUrl);
// console.log(getLink);
// console.log(getUserInfo);
// console.log(getDataCPU[2].model); // mantap
// console.log(getDataCPU[3].speed);
// console.log(getDataCPU[0].times.idle);
// console.log(getDataCPU[1].times.user)
// console.log(getUrl.host);
// console.log('Query String ' + getQS);

// fs.writeFile('testing.txt', 'Testing', function (err, data){
//     if (err) throw err;  
//     console.log("saved");
// });

// \r\n digunakan untuk menambah enter pada text
// fs.appendFile('testing.txt', 'Tambah Text Baru 1 \r\n \t', (err) => {
//    if(err) throw err;
//    console.log('berhasil menambah text baru');
// })

// Cara 1
// var tes = fs.readFile('testing.txt', (err, data) => {
//     // console.log(data.toString());
//     return data.toString();
// })

// Cara 2
// var utftest = fs.readFileSync('testing.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
// })

// console.log(utftest);

// Rename File
// fs.rename('testing.txt', 'new-file.txt', (err, data) => {
//     if(err) throw err;
// });

// Remove File
// fs.unlink('unlink.txt', (err) => {
//     if(err) throw err;
// })

// Membuat folder
// fs.mkdir('new-folder', (err) => {
//     if(err) throw err;
// })

// Menghapus folder
fs.rmdir('new-folder', (err) => {
    if(err) throw err;
})

// console.log(tes.toString());

// console.log(tes)