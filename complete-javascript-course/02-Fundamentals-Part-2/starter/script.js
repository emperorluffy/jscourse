"use strict";
/*
let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive :D");

//const interface = "Audio";
//const private = 534;


//Function hold one or two lines of code.

function logger() {
  console.log("My name is Thomas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const order2 = fruitProcessor(7, 9);
console.log(order2);


//FUNCTION DECRALATION

function calcAge1(birthYear) {
  return 2026 - birthYear;
}

const age1 = calcAge1(1996);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};
const age2 = calcAge2(1996);

console.log(age1, age2);


///ARROW FUNCTIONS
const calcAge3 = (birthYear) => 2026 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age4 = 2026 - birthYear;
  const retirement = 60 - age4;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1996, "Thomas"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 7));

const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age4 = calcAge(birthYear);
  const retirement = 60 - age4;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  return retirement;
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1996, "Thomas"));
console.log(yearUntilRetirement(1950, "Thomas"));


///CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(570, 110);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//INTRODUCTION TO ARRAYS

const friend1 = "Thomas";
const friend2 = "Billions";
const friend3 = "Legacy";
console.log(friend1);

const friends = ["Thomas", "Billions", "Legacy"];
console.log(friends);

const y = new Array(1996, 1997, 1998, 1999);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Lengendary";
console.log(friends);
//friends =['Bob', 'Alice'];

const firstName = "Thomas";
const Thomas = [firstName, "Gakumu", 2026 - 1996, "Enterpreneur", "Father"];
console.log(Thomas);

//Exercise
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};
const years = [1996, 1997, 1998, 1999];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);



//ADD ELEMENTS
const friends = ["Thomas", "Billions", "Legacy"];
const newLength = friends.push("Hov"); //Add last element
//console.log(friends);
console.log(newLength);

friends.unshift("Maina"); //Add first element
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First element
console.log(friends);

console.log(friends.indexOf("Thomas"));
console.log(friends.indexOf("Bob")); // -1 cause Bob is not available

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Thomas"));

if (friends.includes("Thomas")) {
  console.log("You have a friend called Thomas");
}


//CHALLENGE #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip(bills[2])];
const totals = [
  bills[0] + calcTip2(bills[0]),
  bills[1] + calcTip2(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(tip);
console.log(totals);


const Thomas = {
  firstName: "Thomas",
  lastName: "Maina",
  age: 2026 - 1996,
  job: "Enterpreneur",
  friends: ["Thomas", "Gakumu", "Maina"],
};
console.log(Thomas);

console.log(Thomas.lastName);
console.log(Thomas["lastName"]);

const nameKey = "Name";
console.log(Thomas["first" + nameKey]);
console.log(Thomas["last" + nameKey]);

const intrestedIn = prompt(
  "What do you want to know about Thomas?Choose between firstName,lastName,age,job, and friends",
);

if (Thomas[intrestedIn]) {
  console.log(Thomas[intrestedIn]);
} else {
  console.log(
    "Wrong request!Choose between firstName,lastName,age,job, and friends",
  );
}

Thomas.location = "Mwihoko";
Thomas["twitter"] = "@tacticalyunbten";

//console.log(Thomas);

//Challenge
//"Thomas has 3 friends, and his best friend is called Thomas"

console.log(
  `${Thomas.firstName} has ${Thomas.friends.length} friends, and his best friend is called ${Thomas.friends[0]}`,
);


const Thomas = {
  firstName: "Thomas",
  lastName: "Maina",
  birthYear: 1996,
  job: "Enterpreneur",
  friends: ["Thomas", "Gakumu", "Maina"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2026 - birthYear;
  // },

  // calcAge: function () {
  //   return 2026 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2026 - 1997;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job},and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// const calcAge = function(birthYear){
//   return 2026 - birthYear;
// }

console.log(Thomas.calcAge(1996));
// console.log(Thomas["calcAge"](1996));

console.log(Thomas.age);

//CHALLENGE
//"Thomas is a 30 year old teacher, and he has a driver's licence"

console.log(Thomas.getSummary());



//CHALLENGE

const Mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  //   calcAge: function () {
  //   this.age = 2026 - 1997;
  //   return this.age;
  // }

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.BMI);
console.log(John.BMI);

// "John's BMI (28.3) is higher than Mark's (23.9)!"

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.firstName}'s BMI (${Mark.BMI}) is higher than ${John.firstName}'s BMI (${John.BMI})`,
  );
} else if (John.BMI > Mark.BMI) {
  console.log(
    `${John.firstName}'s BMI (${John.BMI}) is higher than ${Mark.firstName}'s BMI (${Mark.BMI})`,
  );
}


//LOOPS

// console.log("Lifting weight repetition 1 🏋🏽‍♂️");
// console.log("Lifting weight repetition 2 🏋🏽‍♂️");
// console.log("Lifting weight repetition 3 🏋🏽‍♂️");
// console.log("Lifting weight repetition 4 🏋🏽‍♂️");
// console.log("Lifting weight repetition 5 🏋🏽‍♂️");
// console.log("Lifting weight repetition 6 🏋🏽‍♂️");
// console.log("Lifting weight repetition 7 🏋🏽‍♂️");
// console.log("Lifting weight repetition 8 🏋🏽‍♂️");
// console.log("Lifting weight repetition 9 🏋🏽‍♂️");
// console.log("Lifting weight repetition 10 🏋🏽‍♂️");

//FOR LOOPS KEEP RUNNING WHILE CONDITION IS TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
}




//While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}

//Looping Arrays
const Thomas = [
  "Thomas",
  "Maina",
  2026 - 1996,
  "Enterpreneur",
  ["Thomas", "Gakumu", "Maina"],
  true,
];
const types = [];

for (let i = 0; i < Thomas.length; i++) {
  //Reading from Thomas array
  console.log(Thomas[i], typeof Thomas[i]);

  //Filling types of array
  // types[i] = typeof Thomas[i];
  types.push(typeof Thomas[i]);
}
console.log(types);

const years = [1996, 1997, 1998, 1999, 2000];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2026 - years[i]);
}

console.log(ages);

//continue and break
console.log("---Only Strings---");
for (let i = 0; i < Thomas.length; i++) {
  if (typeof Thomas[i] !== "string") continue;
  console.log(Thomas[i], typeof Thomas[i]);
}

console.log("---Only Numbers---");
for (let i = 0; i < Thomas.length; i++) {
  if (typeof Thomas[i] === "number") break;
  console.log(Thomas[i], typeof Thomas[i]);
}

//Looping Backwards
const Thomas = [
  "Thomas",
  "Maina",
  2026 - 1996,
  "Enterpreneur",
  ["Thomas", "Gakumu", "Maina"],
];
//0,1,....4
//4,3,....0

for (let i = Thomas.length - 1; i >= 0; i--) {
  console.log(i, Thomas[i]);
}
//Loop inside a Loop
for (let exercise = 1; exercise < 5; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
  }
}
*/
//CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
