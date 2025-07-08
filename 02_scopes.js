// var c = 500
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "abhi";

  function two() {
    const website = "youTube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "abhi";
  if (username === "abhi") {
    const website = " YouTube ";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// ++++++++++++++Intersting+++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

console.log(addtwo(5));
const addtwo = function (num) {
  return num + 2;
}