const chalk = require('chalk');
const colors = require('colors');
const slug = require('slug');
const moment = require('moment');

// console.log(chalk.red('Red Text'));
// console.log(chalk.yellow('Red Text'));
// console.log(chalk.green('Red Text'));
// console.log(chalk.blue('Red Text'));
// console.log(chalk.keyword('orange')('Orange Text'));
// console.log(chalk.keyword('gold')('Gold Text'));
// console.log(chalk.rgb(255,0,0)('RGB 1'))
// console.log(chalk.rgb(0,255,0)('RGB 2'))
// console.log(chalk.rgb(0,0,255)('RGB 3'))
// console.log(chalk.hex('#0000FF')('HEX 1'))
// console.log(chalk.hex('#FF0000')('HEX 2'))
// console.log(chalk.hex('#00FF00')('HEX 3'))
// console.log(chalk.bgRed('Red'))
// console.log(chalk.bgYellow('Yellow'))
// console.log(chalk.bgGreen('Green'))
// console.log(chalk.bgBlue('Blue'))

// console.log(colors.red('Hello'))
// console.log(colors.blue('Hello'))
// console.log(colors.yellow('Hello'))
// console.log(colors.bgRed('Text'))
// console.log(colors.bold('Text bold'))
// console.log(colors.rainbow('Text bold'))
// console.log(colors.trap('Text bold'))
// console.log('Text'.red);
// console.log('Text'.rainbow);

// var sentenceOne = slug('Waspada Pilek Berulang Bisa Berdampak pada Pendengaran')
// var sentenceTwo = slug('Waspada 123')
// var sentenceThree = slug('Waspada Pilek Berulang Bisa Berdampak pada Pendengaran','_')
// console.log(slug('unicode ♥ is ☢'))
// console.log(sentenceOne);
// console.log(sentenceTwo);
// console.log(sentenceThree);

// Mengubah tanggal format momentjs menjadi bahasa indonesia
moment.locale('id');

var now1 = moment();
var now2 = moment().format();
var now3 = moment().format("ddd, hA");
var now4 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

var rangeDate = moment([2007]).fromNow();
var rangeDate1 = moment([2007, 0, 29]).fromNow(true);
var rangeDate2 = moment([2007]).toNow();
var rangeDate3 = moment([2007, 0, 29]).fromNow(true);

var date1 = moment([2007, 2, 27]);
var date2 = moment([2007, 0, 29]);

// console.log(now1);
// console.log(now2);
// console.log(now3);
console.log(now4);
// console.log(rangeDate1);
// console.log(rangeDate2);
// console.log(rangeDate3);
console.log(date1.to("2021-03-12"))

// console.log(date1.to(date2))
