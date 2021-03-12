const os = require('os');
const chalk = require('chalk');
const underscore = require('underscore');
const colors = require('colors');
var dataCPU = os.cpus();
var dataCPU1 = os.cpus()[0];
var dataCPU2 = os.cpus()[1];
let dataCPU3 = os.cpus()[2];
var dataCPU4 = os.cpus()[3];

console.log(dataCPU);

var tertinggi = underscore.max(dataCPU, (cpu) => cpu.times.user);
var terendah = underscore.min(dataCPU, (cpu) => cpu.times.user);

console.log(colors.bgRed(JSON.stringify(tertinggi)))
console.log(colors.bgBlue(JSON.stringify(terendah)))
// const cpuData = JSON.stringify(dataCPU2, null, 1);

// let cpuDatalib = (cpuInfo)=>{
//     fs.writeFileSync("./cpuDatas.json", cpuInfo)
// }

// cpuInfo(dataCPU2);

//  console.log(dataCPU1);
// console.log(chalk.bgRed(dataCPU2.model));
// console.log(chalk.bgMagentaBright.bold(dataCPU3.model));
// console.log(chalk.bgGreen(dataCPU4.model));
// console.log(chalk.bgGray.white(dataCPU4.speed));
// console.log(chalk.bgYellow.black(dataCPU4.times.user));

var maxIdleCPU = underscore.max(dataCPU, (idleCPU)=> idleCPU.times.idle);
maxIdleCPU = JSON.stringify(maxIdleCPU);
console.log(maxIdleCPU);

const topCPU = underscore.max(dataCPU, (cpudata)=> cpudata.times.user);
console.log(chalk.bgWhite(JSON.stringify(topCPU)));

const maxCPU = underscore.max(dataCPU, (datasCPU)=> datasCPU.times.user);
const minCPU = underscore.min(dataCPU, (datasCPU)=> datasCPU.times.user);
mixCPU = JSON.stringify(maxCPU,minCPU);
// minimCPU = JSON.stringify(minCPU);
console.log(chalk.bgRed.blue(mixCPU));
console.log(chalk.bgYellow.blue(mixCPU));
