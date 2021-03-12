const { filter } = require('lodash');
const underscore = require('underscore');

var numbers1 = [1,2,3,4,5,6];
var numbers2 = [5,6,7,8];
var numbers3 = [9,10,11,12];
var arrNum = [numbers1, numbers2, numbers3]
var objNumber = {num1: 1, num2: 2, num3: 3}

var resultNumber = underscore.map(numbers1, function(num){
    return num * 3;
})

var genap = function(number){
    return number % 2 == 0
}

var findGenap = underscore.find(numbers1, genap);
var filterGenap = underscore.filter(numbers1, genap);

var resultArray = underscore.map(arrNum, underscore.first)

var resultObj = underscore.map(objNumber, function(value, key){
    return value * 3
})

var members = [
    {nama: 'Andi', usia:20},
    {nama: 'Budi', usia:30},
    {nama: 'Aris', usia:25},
]

var oldMembers = underscore.max(members, (age) => age.usia);
var youngMembers = underscore.min(members, (age) => age.usia);

// var nilaiMax = underscore.max(numbers1)
// var nilaiMin = underscore.min(numbers1)

// console.log(nilaiMax);
// console.log(nilaiMin);

// console.log(oldMembers);
// console.log(youngMembers);

console.log(findGenap);
console.log(filterGenap);