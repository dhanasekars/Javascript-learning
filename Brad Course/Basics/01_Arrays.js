console.log("This is about arrays.")


// Array Literal

const beers  = ['Pale Ale', "American Ale", "Lager"]

// Array Constructor

const drinks = new Array('Whisky', 'Beer', "Gin", "Rum", beers)

console.log(drinks[4][0])

console.log(drinks.length)

console.log(drinks[4].length)

console.log(beers)

//Spread Opertator

const arr = [1, 2, [3, 4, 5], 6, 7, 8, 9, [10, 11, 12]]
var flatARR = [...arr]
console.log("This is flatted array " + flatARR)

//Flatten arrays
console.log(arr.flat())



let challenge1 = [1, 2, 3, 4, 5]
challenge1 =challenge1.concat([6])

console.log(challenge1.reverse().concat([0]))


const arr1 = [1, 2, 3, 4, 5]
const arr2 =[5, 6, 7,8, 9, 10]
const arr3 = arr1.slice(0,4).concat(arr2)
console.log(arr3)


