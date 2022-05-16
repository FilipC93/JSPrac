//* Find the longest word in a sentence.
//? Algo problem

function findLongWord(str) {
    let maxLength = 0;
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length
        }
    }
    return maxLength;
}

findLongWord(`This is a demo sentence`)