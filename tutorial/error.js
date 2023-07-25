// const error = new Error('Something went wrong...');

const { CustomError } = require("./customError");

// console.log(error.stack);

// console.log(error.message);

// //throw new Error("I am throw error")

// //Custom Error
// const { CustomError } = require('./customError');
// throw new CustomError('This a custom error');


// try {
//     doSomething();
// } catch (e) {
//     console.log("Error Occured");
//     console.log(e);
// }

function doSomething() {
    const data = fetch("localhost://3000/api");
    console.log('I am from doSomething');
}


// //Uncaught Expection
// process.on('uncaughtExpection', (error) => {
//     console.log("There was an uncaught");
//     //process.exit(1);
// })

doSomething();

//Exceptions with promises

const promise = new Promise((resolve, reject) => {
    if (false) {
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("Error occcured");
    console.log(err);
})

//Exceptions with Async and await

const someFunction = async () => {
    try {
        await doSomething();
    } catch (err) {
        throw new CustomError(err.message);
    }
}
