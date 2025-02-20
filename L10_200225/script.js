// const myPromiseFromNetflix = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Netflix");
//   }, 1000);
// });

// const myPromiseFromTwitter = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Twitter");
//   }, 2000);
// });

// const myPromiseFromGithub = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from Github");
//   }, 3000);
// });

// const myPromiseFromhotstar = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Fetched data from hotstar");
//   }, 4000);
// });

// const dataFromAll = Promise.allSettled([
//   myPromiseFromGithub,
//   myPromiseFromNetflix,
//   myPromiseFromTwitter,
//   myPromiseFromhotstar,
// ]);
// console.log(dataFromAll);

// const fromRace = Promise.race([
//   myPromiseFromGithub,
//   myPromiseFromNetflix,
//   myPromiseFromTwitter,
//   myPromiseFromhotstar,
// ]);
// console.log(fromRace);

// const fromAny = Promise.any([
//   myPromiseFromGithub,
//   myPromiseFromNetflix,
//   myPromiseFromTwitter,
//   myPromiseFromhotstar,
// ]);
// console.log(fromAny);

// Async awaits --> it is a feature to make function asynchronous. pehle apna kam krke aaega fir last mein chalega async function unlike normal function like in while loop as it runs completely and then continue incomplete function.
//ASYNC IS ALSO A PROMISE

// const PulkitPromised = new Promise(function(resolve,reject))
// console.log("Hello Class");

// function techMahindra(){
//     console.log("Pulkit");
// }

// techMahindra();

// console.log("Class End");

//Async function
// async function techDirectFunction() {
//   console.log("This is Tech Mahindra");
// }
// const techData = techDirectFunction();
// // console.log(techData);
// techData.then((res) => {
//   return res;
// });

///Important - API DATA FETCH VIA LINK API/LINK

// async function fetchApiData() {
//   try {
//     const data = await fetch("https://api.chucknorris.io/jokes/categories");
//     const mydata = await data.json();
//     return mydata;
//   } catch (err) {
//     console.log(err);
//   }
// }
// const finaldata = fetchApiData();

// finaldata.then((result) => {
//   console.log(result);
// });

//THE END