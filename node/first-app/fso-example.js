import fs from "fs";

// synchoronus call
// const files = fs.readdirSync('./hello')
// console.log(files)


// asynchoronus call
fs.readdir("./hello/", function (err, files) {
        if (err) console.log('Error', err);
        else console.log("Result", files);
    })