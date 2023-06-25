import { argv } from 'node:process';
import { endPoint, Logger } from './logger.js';
import { EventEmitter } from 'node:events'

const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log("Listener called", arg);
})

logger.log();