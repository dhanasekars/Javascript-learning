import * as fs from "fs";
// Synchoronus example

// var myNumber = 1
// function addOne () {myNumber++}
// addOne()
// console.log(myNumber)


// https://www.programiz.com/javascript/callback 


var myNumber = undefined

function addOne(callback) { 
fs.readFile("numbers.txt", function (err, data){
    myNumber = parseInt(data);
    myNumber++
    callback()
})             
}

function logMyNumber() {
    console.log(myNumber)
}

addOne(logMyNumber)