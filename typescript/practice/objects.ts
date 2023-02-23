const user = {
    name: 'Yallo',
    surname: 'Chaddy',
    isActive: true,
    email: 'aa@gmail.com'
};

//* Creating the method;
const createUser = ({ name: string, isActive: boolean }) => { }
createUser({ name: 'Filip', isActive: false });
const createCourse = (): { name: string, price: number } => {
    return { name: 'Java', price: 19 }
}

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number //? Questionmark means optional and 
};

let currentUser: User = {
    _id: '1313139',
    name: 'Brandon',
    email: 'whatever@gmail.com',
    isActive: false,
    creditCardDetails: 1522
};
currentUser.email = 'nothing@nothing.com';
//?currentUser._id = 'Filip';
//! It doesnt let you since its a readonly

const createType = (user: User) => { }
createType({ _id: '', name: '', email: '', isActive: false });

type cardNumber = { numberOfCard: string };
type cardDate = { dateOfCard: string };
type cardDetails = cardNumber & cardDate & {
    readonly _cvv: number
}


export { }