// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}


if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}


const filteredCart = shoppingCart.filter(item => item !== 'Honey');

// item === 'Tea' ? 'Green Tea' : item is the ternary operator. If item is equal to 'Tea', it returns 'Green Tea'. If item is not equal to 'Tea', it returns item
const updatedCart = filteredCart.map(item => item === 'Tea' ? 'Green Tea' : item);

console.log(updatedCart);

