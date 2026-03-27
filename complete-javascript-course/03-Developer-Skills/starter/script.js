// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const calcAge = (birthYear) => 2026 - birthYear;
console.log(calcAge(1996));


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C) Fix the bug
    value: Number(prompt('Degree celsius:')),
  };

  //B Find the bug
  console.log(measurement);
  // console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A IDENTIFY
console.log(measureKelvin());


//Challenge
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


*/
const data1 = [17, 21, 23];

const data2 = [12, 5, -5, 0, 4];

// console.log(`..${data[0]}°C...${data[1]}°C..`);
const printForecast = function (arr) {
  let str = '... ';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(str);
};

printForecast([12, 5, -5, 0, 4]);
