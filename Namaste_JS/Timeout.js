console.log("Start");

setTimeout(function cb() {
  console.log("CallBack");
}, 5000);

console.log("End");

let StartDate = new Date().getTime();
let EndDate = StartDate;
while (EndDate < StartDate + 10000) {
  EndDate = new Date().getTime();
}

console.log("While Expires");