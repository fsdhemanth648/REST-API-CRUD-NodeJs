const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'http://mylogger.io/lo';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}


//to make it public, we export it
//as an object
// module.exports.log = log;

//as a single function
// module.exports = log

module.exports = Logger