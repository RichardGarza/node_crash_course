const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter {
    log(msg) {

        // Call Event
        this.emit('Message', { id: uuid.v4(), msg});

        // Log To File
        fs.appendFile(path.join(__dirname, 'logs.txt'), `\r ${msg}`, err => {
            err ? console.log(err) : console.log(`Logged Message: ${msg}`)
        })
    }
}



// module.exports = Logger;


const logger = new Logger();

logger.on('Message', data => console.log('Called Listener', data ));

logger.log('hello Worlds!');
logger.log('How are ya!');
logger.log('Great!');
