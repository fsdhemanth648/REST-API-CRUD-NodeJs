const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', function (args) {
    console.log('Listener called', args);
});

logger.log('It is a logger calling');

// //importing an object
// const logger = require('./logger');
// logger.log('It is a logger')

// // //importing an single function
// const log = require('./logger');
// log('It is a logger')

// // //First Program
// function sayHello(name) {
//     console.log('Hello,' + ' ' + name);
// }
// sayHello('Hemanth');