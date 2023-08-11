import { myFunction } from  "./make-it-modular.js"

let dir = process.argv[2];
let filterStr = process.argv[3];


myFunction(dir, filterStr, function(err, list) {
    if (err) {return console.error('There was an error:', err) }
    list.forEach(function(item) {
        console.log(item)   
    })
})