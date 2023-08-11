import * as fs from "fs";

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1;
// console.log(typeof str.length)
console.log(lines);