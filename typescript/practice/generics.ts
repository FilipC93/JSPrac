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

interface Database {
    connection: string,
    username: string,
    password: string
}

const oneMoreId = <T, U extends Database>(valueOne: T, valueTwo: U): object => {
    return { valueOne, valueTwo }
}

oneMoreId(3, { connection: 'sha256', username: 'Filip', password: 'Unknown' });

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];
    addTocart(product: T) {
        this.cart.push(product);
    }
}

export { }