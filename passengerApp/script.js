var countEl = document.getElementById('count-el');
let count = 0;
let saveEl = document.getElementById('save-el');

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    let saveEntries = count + ' / ';
    saveEl.textContent += saveEntries;
    alert('Today ' + count + ' passengers arrived to the station!');
    reset()
}

//this can be done in a different way aswell,
//we scrape the functions and do an event listener like this.

// countBtn.addEventListener('click', () => {
//     //and you put there the body of the functions.
// })