function mutation(arr) {
    const [str1, str2] = arr.map(s => s.toLowerCase());
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        if (str1.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}
console.log(mutation("Yallo", "Hallo"));