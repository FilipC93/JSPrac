//*Asynchronous
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log('Our shop is closed!'));
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`Your choice is ${stocks.Fruits[0]}`);

        await time(0000)
        console.log('Production starting');

        await time(2000)
        console.log('Cutting fruit');

        await time(1000)
        console.log(`Putting ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

        await time(1000)
        console.log('Machine started');

        await time(2000)
        console.log(`${stocks.holder[0]} was selected`);

        await time(3000)
        console.log(`Your topping of choice was ${stocks.toppings[1]}`);

        await time(2000)
        console.log('Your ice-cream is ready!');
    }
    catch (error) {
        console.log('Customer left', error);
    }
    finally {
        console.log('Day ended, shop is closed');
    }
}

kitchen();
// async function order() {
//     try {
//         await abc;
//     }
//     catch (error) {
//         console.log('abc doesnt exist', error);
//     }
//     finally {
//         console.log('Code will run anyway');
//     }
// }

//?Promise chaining after the async function.
// order().then(() => {
//     console.log('Whatever');
// }).catch(() => {
//* Code for error
// });


// let order = (time, work) => {

//     return new Promise((resolve, reject) => {

//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }
//         else {
//             reject(console.log('our Shop is closed'));
//         }
//     })
// }

//? Promise chaining.
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     .then(() => {
//         return order(0000, () => console.log('Production has started'));
//     })

//     .then(() => {
//         return order(2000, () => console.log('The fruit was chopped'));
//     })

//     .then(() => {
//         return order(1000, () => {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added!`);
//         })
//     })

//     .then(() => {
//         return order(1000, () => console.log('The machine has started!'));
//     })

//     .then(() => {
//         return order(2000, () => {
//             console.log(`Icecream was placed on ${stocks.holder[1]}`);
//         })
//     })

//     .then(() => {
//         return order(3000, () => {
//             console.log(`${stocks.toppings[0]} was added on top!`);
//         })
//     })

//     .then(() => {
//         return order(1000, () => console.log('Ice-cream was served!'));
//     })

//     .catch(() => { //? Error handling part
//         console.log('Customer left');
//     })

//     .finally(() => { //? This will run regardless of then or catch.
//         console.log('Day ended, shop is closed');
//     })
// let order = (Fruit_name, callProd) => {

//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//         callProd();
//     }, 2000);


// }

// TODO: Starting Callback hell.
// let production = () => {

//     setTimeout(() => { //?Grandparent
//         console.log('Production has started!');

//         setTimeout(() => { //?Parent
//             console.log(`The fruit has been chopped`);

//             setTimeout(() => { //?Child
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added!`);

//                 setTimeout(() => { //?Grandchild
//                     console.log('The machine has been started');

//                     setTimeout(() => { //?Grand-Grandchild
//                         console.log(`${stocks.holder[0]} was selected`);

//                         setTimeout(() => { //? More children.
//                             console.log(`You have chosen ${stocks.toppings[0]} for your topping.`);

//                             setTimeout(() => {
//                                 console.log('Ice-cream was served');
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// }

// order(0, production); //* 0 is practicly stocks.Fruits[0];