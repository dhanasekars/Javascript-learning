import * as fs from "fs";
import * as path from "path";

let file = process.argv[2];

// fs.readFile(file, 'utf-8', function (err, contents) 
// {
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })

// Any way, more simpler and clear way

function parsingFunction( err, contents) {
    if (err) {console.log(err);return}
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  }

fs.readFile(file, parsingFunction) 