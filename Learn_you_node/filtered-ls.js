import { readdir } from "node:fs";


let folder = process.argv[2];
let fileExtention = '.' + process.argv[3];


function callback(err, files){
   if (err) return console.error(err)
   files.forEach(function(file){
    if (path.extname(file) === fileExtention) {
        console.log(file);
    }
   })
}


readdir(folder, callback)
