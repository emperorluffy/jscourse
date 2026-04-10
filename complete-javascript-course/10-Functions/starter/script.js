'use strict';
/*
const flight = 'LH234';
const thomas = {
  name: 'Thomas Maina',
  passport: 343948482,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH4653';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 343948482) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, thomas);

// console.log(flight);
// console.log(thomas);
// console.log(flight, thomas);

//Is the same as doing

// const flightNum = flight;
// const passenger = thomas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random) * 1000000;
};
newPassport(thomas);
checkIn(flight, thomas);
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str} `);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('✋🏽');
};

//JS uses callbacks all the time
document.body.addEventListener('click', high5);

['Thomas', 'Martin', 'Adam'].forEach[high5];
