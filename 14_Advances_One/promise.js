const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async task
  // DB Call Cryptography,network
  setTimeout(function () {
    console.log("Async Task Is Complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "abhi", email: "abhi@123" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "ABHISHEK", password: "123456" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolved or rejeted"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JAVASCRIPT", password: "123456" });
    } else {
      reject("ERROR:JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respones = await promiseFive;
    console.log(respones);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getallUsers() {
//   try {
//     const respones = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await respones.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getallUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respones) => {
    return respones.json();
  })
  .then((data)=>{
    console.log(data);
    
  })
  .catch((error) => console.log(error));
