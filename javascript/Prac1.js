var names = ["Philippe", "Phil", "Filip"]

function variations(first, second) {
    if (first == 1) {
        return names[0];
    } else if (first >= 2) {
        return names[1]
    } else (first >= 3)
    return second;
}

console.log(variations(4, 0))

function algo(x, y) {
    return x + y;
}

console.log(`The answer is ${algo(3, 5)}`);