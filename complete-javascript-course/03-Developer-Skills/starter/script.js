// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const calcAge = (birthYear) => 2026 - birthYear;
console.log(calcAge(1996));
*/

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
