const admin: string[] = ['fc'];
let tupledArr: [string, number, boolean];
//*This would be on specific order only.
tupledArr = ['fc', 93, true]
//? Another example:
let rgbSample: [number, number, number];
rgbSample = [255, 43, 10];

type User = [number, string];
const newUser: User = [1939, 'exampler@example.com'];
newUser[1] = 'fc';

//? This is not working anymore.
//* newUser.push(true);
export { }