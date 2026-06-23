'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();

// Using an active, stable API endpoint that avoids the 301 redirect
request.open('GET', 'https://restcountries.de/v3.1/name/kenya');
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  // Since this is a modern v3.1 structure, name is an object
  console.log(data.name.common);
});
