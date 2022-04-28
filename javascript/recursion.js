function recursionSum(num) {
    if (num <= 100) {
        return num;
    } else {
        return (num + recursionSum(num - 1));
    }
}

console.log(recursionSum(105)); //? This will add the num again and again but it will subtract 1 ex: 105+104+103+102+101+100


function stringRecursion(input) {
    if(input.length <= 1) {
        return input;
    }else {
        return input.split('').reverse().join('')
    }
}

console.log(stringRecursion('Recursion'));