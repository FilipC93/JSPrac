//? Leetcode Problem: Easy Section.

function romanToArabic(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    s.split('').forEach((num, i) => {
        if (roman[num] < roman[s[i + 1]]) {
            result -= roman[num];
        } else {
            result += roman[num];
        }
    });
    return result;
}