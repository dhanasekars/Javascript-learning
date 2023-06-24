// This is my first Javascript code!
console.log("Hello World");
let firstName = "Dhanasekar"

// Cannot be a reserved keyword
// Should be meaninful
// Cannot start with a number
// Cannot contain a space or hypen

console.log(firstName);


const interestRate  = 0.3;
// interestRate = interestRate * 0.6;
console.log(interestRate);
firstName = 12312
isApproved = true;


let person = {
    name: "Dhanasekar",
    age: 0
};

console.log(person['age']);

let selectedColors = ["red", "blue", "yellow",]
selectedColors[3] = 29;
// template strings from ES6
let log_text = `Length of array is ${selectedColors.length}`
console.log(log_text);

// Performing a task
function greet(name) {
    console.log(`Hello ${name} from a function`);
}

// Calculating a value

function square(number) {
    return number * number
}

greet();
greet("Dhanasekar");

console.log(square(9));