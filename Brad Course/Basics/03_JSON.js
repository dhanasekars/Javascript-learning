// Java Script Object Notation.
//Storing data in a human readable format

const post = {
    id: "1",
    title: "This is title",
    body: "This is the body of the blog post",
}

let str = JSON.stringify(post)
let obj1 = JSON.parse(str)

console.log(str)