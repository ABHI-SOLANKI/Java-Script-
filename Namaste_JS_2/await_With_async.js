const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Relove in 3!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Relove in 5!!");
  }, 10000);
});

// await is a keyword that can only be used inside a async function

async function handlePromise() {
  console.log("Heloo World");

// JS Engine was waiting for promise to be resolved

  const val = await p;
  console.log("NAMASTE JS");
  console.log(val);

  const val2 = await p2;
  console.log("NAMASTE JS 2");
  console.log(val2);
}

handlePromise();

