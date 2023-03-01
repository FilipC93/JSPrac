let score: number | string = 25;
score = '55';

type Admin = {
    username: string,
    id: number
};

type User = {
    name: string,
    id: number
};

let Filip: User | Admin = { name: 'Filip', id: 131919 };
Filip = { username: 'FC', id: 135345 };

const getData = (id: number | string) => {
    console.log(`Data: ${id}`);
    //* id.toLowerCase(); 
    //? This causes an error on type number
    //* We evaluate the datatype and then we can perform actions
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

getData(3);
getData('rsa35342');

const database: (number | string)[] = [1, 2, 3, 'Hello'];
//? You can assign constants easily like this
let pi: 3.14 = 3.14;
export { }