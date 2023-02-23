//?Strong typed function
const power = (x: any, y: number): number => {
    return Math.pow(x, y);
}

power('Hello', 23);
//*This as an example will throw error: Argument of type 'string' is not assignable to parameter of type 'number'

//?Strong typing an array
const arr: number[] = [];
arr.push(1);
arr.push(15);
arr.push(125);

//? TS tuple

type List = [number?, string?, boolean?]; //? The ? makes the values non required
const array: List = [];
array.push('Hello');

//?Generics

class Observable<T> {
    constructor(public value: T) { }
}

export { };