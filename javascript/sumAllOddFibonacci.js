function sumFibs(num) {
    let a = 1;
    let b = 1;
    let sum = a + b;

    while (b <= num) {
        const temp = a;
        a = b;
        b = temp + b;

        if (b <= num) {
            sum += (b % 2 !== 0) ? b : 0;
        }
    }
    return sum;
}
console.log(sumFibs(75024));