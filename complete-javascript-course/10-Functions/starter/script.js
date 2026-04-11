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


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Thomas');
greeterHey('Steven');
greet('Hello')('Thomas');

//Arrow function
const greetArr = greeting => name => console.log(`${greeting}${name}`);


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Thomas Maina');
lufthansa.book(893, 'Esther Njeri');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//Does Not Work
//book(23, 'Sarah Williams')

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Brandy Achieng');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 567, 'Isaac Maina');

//Apply method
const flightData = [565, 'Wilson Wanyoike'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind Method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Thomas Maina');
bookEW23('Martha Nduta');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value* 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get the Answer

    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' && answer < this.answers.length;
    this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results are 13,2,4,1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 3, 1, 2] }, 'string');
*/

//CLOSURES
