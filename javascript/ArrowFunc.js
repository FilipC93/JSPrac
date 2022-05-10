class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log(`Arrow ${this.name}`)
        }, 100)
    }

    printNameFunc() {
        setTimeout(function () {
            console.log(`Function ${this.name}`)
        }, 100)
    }
}

let someone = new Person('Bob');
someone.printNameArrow(); //? Arrow prints "this" normally
someone.printNameFunc(); //* Function prints undefined