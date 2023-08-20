let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)


const companies = [
    {name: "Company one", category: "Finance", start: 1981},
    {name: "Company Two", category: "Tech", start: 2001},
    {name: "Company Three", category: "Retail", start: 1881},
    {name: "Company Four", category: "Retail", start: 1968},
    {name: "Company Five", category: "Tech", start: 2011},
    {name: "Company Six", category: "Tech", start: 2001},
    {name: "Company Seven", category: "Finance", start: 2020},
    {name: "Company Eight", category: "Finance", start: 2021},
]

const techCompanies = companies.filter(company => company.category === "Tech")
const millanialCompanies = companies.filter(company => company.start > 1999)

console.log(techCompanies)
millanialCompanies.forEach(company => {
    console.log(company.name)
});

const companyNames = companies.map( company => {return {name:company.name, category:company.category}})
console.log(companyNames)


const companyYears = companies.map(company => {return {name:company.name, age:(2023 - company.start + ' years old')}})
console.log(companyYears)

const sum = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
console.log(sum)

const cartList = [
    {id: 1, name: "Product one", price: 1},
    {id: 2, name: "Product two", price: 2},
    {id: 3, name: "Product three", price: 21},
    {id: 4, name: "Product four", price: 1},
    {id: 5, name: "Product five", price: 17},
]


const totalCartValue = cartList.map(cart => cart.price).reduce((accumulator, currentValue)=> accumulator + currentValue,0)

const total = cartList.reduce((accumulator, currentValue)=> accumulator + currentValue.price,0)

console.log(totalCartValue)
console.log(total)