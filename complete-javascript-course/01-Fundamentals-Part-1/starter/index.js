//value is a piece of data
/*
console.log("Jonas");
let firstName = "Jonas";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "CEO";

console.log(myFirstJob, myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);


//WE USE 'LET' TO DECLARE VARIABLES THAT CAN BE CHANGED LATER

let age = 30;
age = 31;
console.log(age);

// const  USED FOR VARIABLE THAT CAN'T MUTATE/BE CHANGED.
const birthYear = 1996;

//It is advisable to use const by default to avoid bags in future.

//VAR-OLD WAYS OF DEFINING VARIABLES

var job = "developer";
console.log(job);

//Math operators
const now = 2026;
const ageThomas = now - 1996;
const ageHers = now - 2000;

console.log(ageThomas, ageHers);

console.log(ageThomas * 2, ageHers / 10, 2 ** 3);
//2**3 mean 2 to the power of 3= 2*2*2

const firstName = "Thomas";
const Lastname = "Maina";

console.log(firstName + Lastname);
console.log(firstName + " " + Lastname);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x =x+10 =25
x *= 4; // x= x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100

console.log(x);

//Comparison operators
console.log(ageThomas > ageHers); // >,<,>=,<=
console.log(ageThomas >= 29);

console.log(now - 1996 < now - 2026);

console.log(50 - 19 - 9);


let x, y;
x = y = 50 - 30 - 5; // x = y =15
console.log(x, y);


//CODING CHALLENGE 1

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

console.log(markMass / markHeight ** 2, johnMass / johnHeight ** 2);


const day = "wed";

if (day === "Monday") {
  console.log("Plan your structure");
} else if (day === "Tuesday") {
  console.log("Tuesday");
} else if (day === "Wednesday" || day === "Thurday") {
  console.log("Mama your son made it");
} else {
  console.log("Haha I did it");
}
*/

const age = 19;
// age >=18? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age > 18 ? "Wine 🍷" : "Water";
console.log(drink);
console.log(`I'd like to drink ${age > 18 ? "Wine 🍷" : "Water 💧"}`);
