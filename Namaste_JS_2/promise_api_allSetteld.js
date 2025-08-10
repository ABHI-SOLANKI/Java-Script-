const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P1 Sucess");
  }, 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P2 Sucess");
    // reject("p2 fail");
  }, 1000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("P3 Sucess");
    reject("p3 fail")
  }, 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
