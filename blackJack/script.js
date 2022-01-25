let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = '';
let playerEl = document.getElementById('player-el');
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
    name: 'Filip',
    chips: 250
}

playerEl.textContent = player.name + ':  $' + player.chips;

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1;
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum;
    if (sum <= 20) {
        message = 'do you want to draw another card?';
    } else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackJack = true;
    } else {
        message = 'You are out of the game!';
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let addCard = getRandomCard();
        sum += addCard;
        cards.push(addCard);
        console.log(cards);
        renderGame()
    }
}

// let prevGames = document.getElementById('prev-games');
// let sumEl = document.querySelector('#sum-el');
// prevGames.textContent += ' WON'
 // prevGames.textContent += ' LOST';