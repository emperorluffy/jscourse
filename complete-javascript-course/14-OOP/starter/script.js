'use strict';
/*
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2040 - this.birthYear);
  //   };
};

const thomas = new person('Thomas', 1996);
console.log(thomas);

//1.New {} is created
//2.Function is called, this={}
//3.{}linked to prototype
//4.function automatically return{}

const victoria = new person('Victoria', 2005);

const carlos = new person('Noah', 1995);

console.log(victoria, carlos);

//Prototypes
person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

thomas.calcAge();

//.prototypeOflinkedObjects

person.prototype.species = 'Homo Sapiens';

console.log(thomas.species, victoria.species);

console.log(thomas.hasOwnProperty('firstName'));
console.log(thomas.hasOwnProperty('Homo Sapiens'));

console.log(thomas.__proto__);

//Object.prototype(top of prototype chain)
console.log(thomas.__proto__.__proto__);
console.log(thomas.__proto__.__proto__.__proto__);

console.dir(person.prototype.constructor);

const arr = [3, 6, 9, 12, 15, 18]; //new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/hr`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
*/
// //class expression
// class personCl = class{}

//class declaration
class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //methods will be added to .prototype property
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  //Set property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullname;
  }
}

const jessica = new personCl('Jessica Davis', 1996);
const walter = new personCl('walter white', 1965);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === personCl.prototype);

// personCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. classes are Not hoisted

//2.Class are first-class citizes

//3.Classes are executed in strict mode

// const account = {
//   owner: 'thomas',
//   movements: [200, 300, 540, 1200, 2000],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 40;

// console.log(account.movements);

const personProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === personProto);

const sarah = Object.create(personProto);

console.log(sarah);
sarah.init('Sarah', 1972);
sarah.calcAge();
