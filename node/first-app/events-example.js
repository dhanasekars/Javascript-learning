import { EventEmitter } from 'node:events'
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Resiter a listener
myEmitter.on("messageLogged", (arg) => {
    console.log("Listener called", arg)
})

// Raise an event
myEmitter.emit('messageLogged', { id: "23", url: "http://hello.io" })


