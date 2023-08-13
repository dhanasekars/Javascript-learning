let library = [
    {
    title: "Deep Work",
    author: "Cal Newport",
    status:{
        own: true,
        reading: false,
        read: false
        }
    },
    {
    title: "Atomic Habits",
    author: "James Clear",
    status:{
        own: true,
        reading: false,
        read: false
        }
    },
    {
    title: "Checklist Manifesto",
    author: "Atul Gawande",
    status:{
        own: true,
        reading: false,
        read: false
        }
    }

]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// console.log(library)


let { title: firstBook} = library[0]

console.log(firstBook)

let str = JSON.stringify(library)

console.log(str)