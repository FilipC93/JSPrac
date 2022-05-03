const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);
let url = 'http://mylogin.io/login';

class Logger extends EventEmitter {
    log(message) {
        //*Send HTTP request
        console.log(message);

        //*Raise an event:
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}
module.exports = Logger; //?Making the log to the module object.
//*on single methods we dont have to use the 2nd . we treat like objects.
//?Like this
//! module.exports = log;

//? we can use exports without the module.exports but we cant change the reference.

//! module wrapper function : (function(exports, require, module, __filename, __dirname) {})