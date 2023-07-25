const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function (args) {
    console.log('Listener called', args);
});

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });  //emitter can take arguments also

//Note: Before raising an event only we thave to register the event, so that it works.