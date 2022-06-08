//? Password formula
//! DO NOT RUN THIS CODE.
const correct = 'Yallo';

let tries = 0;

let keepGoing = true;
while (keepGoing) {
    tries += 1;
    console.log(`You have ${tries} tries left`);

    let guess = 'Hallo';
    if (guess === correct) {
        console.log(`That is correct!`);
        keepGoing = false;
    } else if (tries >= 3) {
        console.log('Too many tries you are getting blocked!');
    }
}