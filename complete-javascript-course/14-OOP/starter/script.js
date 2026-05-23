'use strict';
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
