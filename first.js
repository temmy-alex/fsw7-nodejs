// var nama = 'Andi';
var nama = function(x){
    return nama = x + ' Test'
};
var address = 'Jl Test';
var email = 'test@gmail.com';

// Cara 1
// module.exports = {address, email};

// Cara 2
// module.exports.email = email;
// module.exports.address = address;

// Cara 3
// module.exports = {
//     alamat: address,
//     surel: email
// }

// Cara 4
module.exports = [
    address,
    email
]

// module.exports = nama;
// console.log(nama);