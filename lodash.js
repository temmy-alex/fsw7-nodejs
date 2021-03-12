const lodash = require('lodash');

console.log(lodash.isString(123));
// Validasi string
var address = 'Jl Testing'
if(lodash.isString(address))
{
    console.log(address);
}

// console.log(lodash.capitalize('BINAR'));
// console.log(lodash.upperFirst('binar'));
// console.log(lodash.upperCase('binar'));
// console.log(lodash.lowerFirst('BINAR'));
// console.log(lodash.lowerCase('BINAR'));

// var age = '20';
// console.log(lodash.isNumber(age));

// console.log(lodash.add(100, 2));
// console.log(lodash.subtract(100, 2));
// console.log(lodash.multiply(100, 2));
// console.log(lodash.divide(60, 2));

// console.log(lodash.ceil(99.3));
// console.log(lodash.floor(99.3));

var numbers = [1,2,3,3,4,5,6,7,8,9,9];
var names = ['Andi', 1, 'Budi', 2];

console.log(lodash.isArray(numbers));
console.log(lodash.uniq(numbers));
console.log(lodash.max(numbers));
console.log(lodash.min(numbers));
console.log(lodash.sum(numbers));
console.log(lodash.reverse(names));