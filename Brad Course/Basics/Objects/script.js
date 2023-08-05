
const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "124 main street",
        city: "Boston",
        state : "KA"
    },
    beers: ["IPA", "Lager"]
};


person.greet = function() {
    console.log(`Hello, my name is ${this.name}.`)
}

person.name = "Kanimozhi"

person.greet()


// Object Spread Operator

const obj1 = {a:1, b:2, c:3,}
const obj2 = {d:4, e:5, f:6,}

console.log({...obj1, obj2})

// Get the list of keys as array
console.log(Object.keys(person))

console.log.apply()

// Gets the key value pair
console.log(Object.entries(person))