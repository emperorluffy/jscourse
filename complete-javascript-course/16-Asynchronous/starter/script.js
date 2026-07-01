'use strict';
const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data) {
  // 1. Safely extract the first language name
  const lang = Object.values(data.languages)[0];

  // 2. Safely extract the currency name
  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common || data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${lang}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

/*
const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const countriesContainer = document.querySelector('.countries');

const getCountryAndNeighbour = function (country) {
  //Ajax call country 1
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //Ajax call country 2
    const request2 = new XMLHttpRequest();

    request.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
    );
    request.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('kenya');
*/

// const request = new XMLHttpRequest();

// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`,
// );
// request.send();

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/kenya',
// );

// console.log(request);
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found(${response.status})`);

    return response.json();
  });
};

// const getCountryData = country => {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found(${response.status})`);

//       return response.json();
//     })

//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${neighbour}`,
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found(${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥🔥`);
//       renderError(`Something went wrong 💥💥💥${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = country => {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found',
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      // country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/name/${neighbour}`,
      );
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}💥💥🔥`);
      renderError(`Something went wrong 💥💥💥${err.message}.Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// btn.addEventListener('click', function () {
//   getCountryData('kenya');
// });
// getCountryData('Australia');

/*
console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resovled promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});

console.log('Test end');


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN 🏆 🤩 😋');
    } else {
      reject(new Error('You lost your money  💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.log(x));
*/
