export const replaceCamelWSpace = (colorName) => {
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
}
//* This is basicly saying, if you find a capital letter in the middle of a word and even if
//* you find it multiple times, replace it with whatever letter you found proceeded by a space.