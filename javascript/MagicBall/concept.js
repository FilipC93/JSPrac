//* Start of Magic 8 Ball
const predictBtn = document.getElementById('predict'); //*Fetch the button
let tell = document.getElementById('future'); //*What the MagicBall will Predict
let introduction = document.getElementById('startQuery');
let startQuote = document.getElementById('quote');
let userName = document.getElementById('userInput'); //*Text Input
let userBtn = document.getElementById('userButton'); //*Submit Button
const userQuestion = 'What will the future be?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//* render whatever we want on the first element of the page
startQuote.innerHTML = userName.value;
introduction.innerHTML = userQuestion;

//? Will need this later
// function success() {
//     if (userName.value === '') {
//         userBtn.disabled = true;
//     } else {
//         userBtn.disabled = false;
//     }
// }

// success()

//?we listen for clicks here
predictBtn.addEventListener('click', () => {
    //? Switch statement that we will use
    //! decides the randomness of the outcome
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so'
            break;
        case 2:
            eightBall = 'Reply hazy try again'
            break;
        case 3:
            eightBall = 'Cannot predict now'
            break;
        case 4:
            eightBall = 'Do not count on it'
            break;
        case 5:
            eightBall = 'My sources say no'
            break;
        case 6:
            eightBall = 'Outlook not so good'
            break;
        case 7:
            eightBall = 'Signs point to yes'
            break;
        default:
            eightBall = 'Incorrect statement'
            break;
    }

    tell.innerHTML = `The eight ball answered: <br> ${eightBall}`;
});

