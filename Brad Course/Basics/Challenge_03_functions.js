function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9)
}


console.log(`The temprature is ${getCelsius(0)} \xB0C`)

// One line arrow function 

const getCel = f => (f - 32) * (5/9)  

console.log(`The temprature is ${getCel(0)} \xB0C`)



// challenge 2 : Get Min and Max from the given array


const minMax = a => ({min: Math.min(...a), max: Math.max(...a)})

console.log(minMax([1,2,4,5,6]));


// IIFE 

(function(l, w){
    console.log(`The area of a rectange ith a length of ${l} and a width ${w} is 4 ${l * w}`)
})(3, 5);

// IIFE arrow function 

((l, w)=> {
    console.log(`The area of a rectange ith a length of ${l} and a width ${w} is 4 ${l * w}`)
})(3, 5)