'use strict';
/*
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


// console.log(this);

const calcAge = function (birthYear) {
  console.log(2026 - birthYear);
  // console.log(this);
};

calcAge(1996);

const calcAgearrow = function (birthYear) {
  console.log(2026 - birthYear);
  console.log(this);
};

calcAgearrow(1996);

const thomas = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);
  },
};
thomas.calcAge();

const matilda = {
  year: 2018,
};
matilda.calcAge = thomas.calcAge;

matilda.calcAge();



//Primitives are numbers,str,boleen

let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Thomas',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('me:', me);

*/
//Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marrige:', jessica);
console.log('After marrige:', marriedJessica);

//marriedJessica={};

//Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// console.log('Before marrige', jessica2);
// console.log('After marrige', jessicaCopy);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marrige', jessica2);
console.log('After marrige', jessicaCopy);
