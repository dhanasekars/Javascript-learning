// Arror function is better syntaxed version of function expressions


function add(a, b) {
    return a + b
}

// Function expression

const addTwoNumbers = function (a, b) {
    return a + b
}

console.log(addTwoNumbers(7,5))

// Arrow functions

const subtractTwoNumbers = (a,b) => {
    return a - b
}
console.log(subtractTwoNumbers(7,5))
//  Implicit return

const subTwoNumbers = (a,b) => a - b;

// Can leave off () if only one param

const doubt = a => a * 2 

// Returning an Object as Object do have their own {} so use ()

const createObj = () => ({
    name: "dhanasekar"
})

console.log(createObj());


// Immediately Invoked Function Expressions IIFE
// Refer this - what happends if you remove ; from the above console.log. 
// *************** RESPECT ; ******************

(function () {
    const user = "DS"
    console.log(user)
})();

// Check what happens if you remove ; from line above too (line 46)
// *************** RESPECT ; ******************


( function(name) {
    console.log(name)
}) ("Kani")