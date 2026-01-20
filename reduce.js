
export const votes = [
    'java',
    'python',
    'java',
    'python',
    'python',
    'ruby',
    'ruby',
    'ruby',
    'ruby',
    'rust',
    'rust',
    'golang',
    'golang',
    'c',
    'c'
]


const result = votes.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }

    return acc;
}, {})

// console.log(result);




const products = [
    {name: 'product1', price: 10},
    {name: 'product2', price: 20},
    {name: 'product2', price: 20},
    {name: 'product3', price: 30},
    {name: 'product3', price: 30},
    {name: 'product3', price: 30},
    {name: 'product4', price: 40},
    {name: 'product4', price: 40},
    {name: 'product4', price: 40},
    {name: 'product4', price: 40},
    {name: 'product5', price: 50},
    {name: 'product5', price: 50},
    {name: 'product6', price: 60},
    {name: 'product6', price: 60},
    {name: 'product6', price: 60},
    {name: 'product6', price: 60},
    {name: 'product6', price: 60},
    {name: 'product6', price: 60},
]


const invoice = products.reduce((acc, curr) => {
    if (acc[curr.name]) {
        acc[curr.name].quantity++;
        acc[curr.name].price += curr.price;
    } else {
        acc[curr.name] = {
            price: curr.price,
            quantity: 1,
        };    
    }
    return acc;
}, {});



console.log(invoice);








