'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// 第一个异步请求
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`, true);
//     request.send();
//
//     request.addEventListener('load', function ()  {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data,data.flag);
//
//         const html = `
//           <article class="country">
//             <img class="country__img" src="${data.flag}" alt=""/>
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//               <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//               <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//           </article>
//           `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }
//
// getCountryData('indian')

// 消耗 Promise(期约)
// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };
//
// // 这TM跟消耗期约有啥关系
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => response.json())
//         .then(data => renderCountry(data[0]));
// };
//
// getCountryData('china')

// Promise 优先级
// console.log('任务开始啦');
// // setTimeout
// setTimeout(() => {
//     console.log('我是setTimeout函数执行了');
// }, 0)
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 1000000; i++) {
//
//     }
//     console.log(res);
// });
//
// console.log('任务结束啦');

// 异步函数 async 和 await
// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
//
// const whereAmI = async function () {
//     try {
//         // Geolocation
//         const pos = await getPosition();
//         const {latitude: lat, longitude: lng} = pos.coords;
//
//         // Reverse geocoding
//         const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
//         if (!resGeo.ok) throw new Error('Problem getting location data');
//
//         const dataGeo = await resGeo.json();
//         console.log(dataGeo);
//
//         // Country data
//         const res = await fetch(
//             `https://restcountries.com/v2/name/${dataGeo.countryCode}`
//         );
//
//         // BUG in video:
//         // if (!resGeo.ok) throw new Error('Problem getting country');
//
//         // FIX:
//         if (!res.ok) throw new Error('Problem getting country');
//
//         const data = await res.json();
//         console.log(data);
//         renderCountry(data[0]);
//     } catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`💥 ${err.message}`);
//     }
// };
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');
//
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//
//         return response.json();
//     });
// };
//
// // 并行异步函数
// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//
//         const data = await Promise.all(
//             [getJSON(`https://restcountries.com/v2/name/${c1}`),
//                 getJSON(`https://restcountries.com/v2/name/${c2}`),
//                 getJSON(`https://restcountries.com/v2/name/${c3}`)])
//
//         console.log(data.map(d => d[0].capital));
//     } catch (err) {
//         console.error(err);
//     }
// }
// get3Countries('portugal', 'canada', 'tanzania');

// Promise.any [ES2021]
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));
