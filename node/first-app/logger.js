import { EventEmitter } from 'node:events'

let url = "http://dhanasekars.com/log";

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', { message: "This event is raised" })
    }
    
}

export { Logger, url as endPoint };


// console.log(module);