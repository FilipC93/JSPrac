//? typeof === type guard

const detectType = (val: number | string) => {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

const provideId = (id: string | null) => {
    if (!id) {
        console.log('Please provide id');

    }
    id?.toLowerCase();
}

type Bird = { fly: () => void };
type Fish = { swim: () => void };
type Mammal = { run: () => void };

//? Classic case of type narrowing
const movement = (animal: Fish | Bird | Mammal) => {
    if ('swim' in animal) {
        return animal.swim();
    } else if ('fly' in animal) {
        return animal.fly();
    } else {
        return animal.run();
    }
}

const whatsThePet = (pet: Bird | Fish | Mammal) => {
    return (pet as Fish).swim !== undefined
}

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

const getTrueShape = (shape: Shape) => {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    } else if (shape.kind === 'square') {
        return shape.side * shape.side;
    } else {
        shape.length * shape.width;
    }
}

const getArea = (shape: Shape) => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}

export { }