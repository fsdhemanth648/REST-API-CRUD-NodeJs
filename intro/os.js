//OS module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('TotalMemory: ' + totalMemory);

//Template String
console.log(`Free Memory: ${freeMemory}`);