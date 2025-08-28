// 1 - What's the output -----------------------------------------

// console.log("start");
// // const promies1 = new Promise((resolve,reject)=>{
// //     console.log(1);
// //     resolve(2)
// // })
// // promies1.then((res)=>{
// //     console.log(res);
// // })

// // console.log("End");

// 2 - What's the output -----------------------------------------

// console.log("start");
// const promies1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });
// promies1.then((res) => {
//   console.log(res);
// });

// console.log("End");

// 3 - What's the output -----------------------------------------

// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success")
//   });
//   console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("End");

// 4 - What's the output -----------------------------------------

// function job() {
// return new Promise(function (resolve, reject) {
// reject();
// });
// }

// let promise = job();

// promise.then(function () {
//   console.log("Suc!1");
// })
//   .then(function () {
//     console.log("Suc!2");
//   })
//   .then(function () {
//     console.log("Suc!3");
//   })
//   .catch(function () {
//     console.error("Erro!1");
//   })
//   .then(function () {
//     console.log("Suc!4");
//   });

// 5 - Promise Chaining -----------------------------------------

const firstPromise = new Promise((resolve, reject) => {
  resolve("Frist");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });

  