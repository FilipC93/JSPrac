//? Tech Assessment for CollegeLink

//* We have the function ArrayAddition(arr) take the array of numbers stored in (arr)
//* and return true if any combination of numbers in the array (excluding the largest number)
//* can be added up to equal the largest number in the array, otherwise return the string false.

function ArrayAddition(arr) {
    //* Initialize sum.
    let sum = 0;
    //* Get the biggest number of the array regardless of position.
    let biggestNum = Math.max(...arr);
    //*Add the array up.
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum == (biggestNum * 2)) {
        return true;
    } return false;
}

console.log(ArrayAddition([10, 25, 5, 40]));


//? Another solution
function arrAdd(arr) {
    let sum = 0;
    //* Sort the array from the smallest to biggest number.
    arr.sort((a, b) => a - b);
    //* Get the last element of the array.
    let biggestNum = arr[arr.length - 1];
    //* remove the last element of the array.
    arr.pop()
    //* Add all remaining numbers of the array.
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    if (sum == biggestNum) {
        return true;
    } else {
        return false;
    }
}

console.log(arrAdd([15, 4, 70, 21, 30]));