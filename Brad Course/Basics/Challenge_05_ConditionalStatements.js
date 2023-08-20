if (true) {
    console.log("This is true");
}


function myCalc(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        default: return `'${operator}' is an invalid Operator.\nPlease use any of the following operators "+", "-", "*" or "/".`

    }
   
}


console.log(myCalc(2, 3, '/'));