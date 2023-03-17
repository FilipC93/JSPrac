const list: Array<number> = [];
const teams: Array<string> = [];

const identity = (value: boolean | number): boolean | number => {
    return value;
}

function idTwo(val: any): any {
    return val;
}

function idThree<Type>(val: Type): Type {
    return val;
}

function idFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

idFour<Bottle>({ brand: 'Monster', type: 500 });

//* Arrow functions syntax

const getProduct = <T>(product: T[]): T => {
    const findIndex = 3;
    return product[findIndex]
}

export { }