//? In order to build stable applications we should refrain from defining variables in the global scope. Instead we need modularity.
//* In node [global] replaces [window].

const path = require('path'); //? Built-in module.
const pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os'); //? Operating System
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

//* Synchronous method
const fs = require('fs'); //? File System
const files = fs.readdirSync('./');
console.log(files);

//* Async method
fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})

console.log(`Your total memory is ${totalMemory}`);
console.log(`Your free memory is ${freeMemory}`);

//? To load a module we use the [require] function, this is one of the functions in node (not in browsers). 
//*Takes one argument and thats the name or path of the target module we wanna load.

const EventEmitter = require('events'); //*Whatever variable stats with a capital is a class/constructor
const Logger = require('./logger'); //* We dont need to use the .js extension because node assumes is a JavaScript file.
const logger = new Logger();

logger.on('messageLogged', (arg) => { //?Practily saying when you raise this 'messageLogged' event execute this code
    console.log('Listener Called', arg); //! This code
});
logger.log('message');

// const emitter = new EventEmitter(); //? We don't need this anymore.

// emitter.emit('messageLogged', {id: 1, url: 'http://'}); //?When raising an event, we can add additional arguments that we refer to as 'event arguments' (check object).
//* Emit means = Making a noise, producing something or Signalling that an event has happened.

//TODO: Exercise on course:


const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello');
        response.end();
    }

    if (request.url === '/api/courses') {
        response.write(JSON.stringify([1, 2, 3]));  //? Here we have to return an array of objects using JSON.
        response.end();
    }
}); //* We create new server with this, and this acts as an EventEmitter.

// server.on('connection', (socket) => {
//     console.log('New connection');
// })

server.listen(3000) //*We give it a port of 3000.

console.log('Listening on port 3000...');