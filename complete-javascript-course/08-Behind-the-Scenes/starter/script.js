'use strict';
// HOISTING

//VARIABLES
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Thomas';
//var in long term will bring bugs

let job = 'enterpreneur';
const year = '1996';

//FUNCTIONS
console.log(addDecl(2, 3));
// console.log(addEpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addEpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
//won't work as the function is in temperal dead zone(TDZ)

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

//The code above will work but it is has a bug of giving wrong ans

//N:B => I declare varibales before using them.
