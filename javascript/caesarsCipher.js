function rot13(str) {
    var strArr = str.split('');
    var start = 'A'.charCodeAt(0);
    var middle = start + 13;
    var end = 'Z'.charCodeAt(0);
    strArr = strArr.map(function (currLetter) {
        var code = currLetter.charCodeAt(0);
        var shift = 13;

        if (code >= start) {
            if (code < middle) {
            }
            else if (code <= end) {
                shift = code - middle;
                code = start;
            }
            return String.fromCharCode(code + shift);
        }
        else {
            return currLetter;
        }
    });
    str = strArr.join('')
    return str;
}

rot13("SERR PBQR PNZC");