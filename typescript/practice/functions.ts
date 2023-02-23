function addTwo(num: number): number {
    return num + 2;
}

function toUpper(val: string) {
    return val.toUpperCase();
}

const signUpUser = (name: string, email: string, sub: boolean) => {
    return `Your name is ${name} with an email of ${email} ${sub}`
}

const loginUser = (name: string, email: string, subscriber: boolean = false) => { }

const consoleLogger = (log: string): void => {
    console.log(log)
}

const consoleError = (err: string): never => {
    throw new Error(err);
}

addTwo(5);
toUpper('hello');
signUpUser('Filip', 'disasterpiece@gmail.com', true);
loginUser('Chaddy', 'chaddyDaddy@gmail.com');
export { };