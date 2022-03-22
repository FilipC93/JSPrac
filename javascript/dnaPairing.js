function pairElement(str) {
    //Return each strand as an array of two elements, the original and the paired one.
    let paired = [];
    //Function to check with strand to pair.
    let search = (char) => {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push.length(["G", "C"]);
                break;
        }
    };
    //Loops through the input and pair.
    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }
    return paired;
}
//test here
pairElement("GCG");