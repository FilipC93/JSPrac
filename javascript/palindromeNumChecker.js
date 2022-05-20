const palindromeCheck = (num) => {
    if (num < 0 || num !== 0 && num % 10 == 0) {
        return false;
    }
    let reverse = 0;

    while (num > reverse) {
        reverse = reverse * 10 + num % 10;
        num = ~~(num / 10);
    }
    return num === reverse || num === ~~(reverse / 10);
}

console.log(palindromeCheck(345));