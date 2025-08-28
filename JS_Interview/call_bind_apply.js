// 1 - what is call

var obj = { name: "Abhi" };
function sayHello(age) {
  return "Hello " + this.name + " Is " + age;
}
// console.log(sayHello.call(obj,20));

// 2 - what is apply

var obj = { name: "Abhi" };
function sayHello(age, profession) {
  return "Hello " + this.name + " Is " + age + " And is an " + profession;
}
// console.log(sayHello.apply(obj,[20,"Front End Devloper"]));

// 3 - what is bind

var obj = { name: "Abhi" };
function sayHello(age, profession) {
  return "Hello " + this.name + " Is " + age + " And is an " + profession;
}
const bindFunc = sayHello.bind(obj);
// console.log(bindFunc(20,"frontEnd"))
// console.log(bindFunc(20,"frontEnd"))

// 4 - Output Based Qoestions

var person = { name: "Abhi" };
function SayHi(age) {
  return `${this.name} Is ${age}`;
}
// console.log(SayHi.call(person,20));
// console.log(SayHi.bind(person,20));

// 5 - Call With function inside object

const age = 10;
var person = {
  name: "abhi",
  age: 20,
  getage: function () {
    return this.age;
  },
};

var person2 = { age: 21 };
// console.log(person.getage.call(person2)); //21

// // 6 - Output Based Qoestions

var status = "😎";
setTimeout(() => {
  const status = "😂";

  const data = {
    status: "🌙",
    getStatus() {
      return this.status;
    },
  };
  // console.log(data.getStatus());
  // console.log(data.getStatus.call(this));
}, 0);

// 7 - Call printAnimals such that it prints all animals in ojject

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  // printAnimals.call(animals[i],i)
}

// 8 - Append an array to another array

const array = ["a", "b"];
const elemaent = [0, 1, 2];

array.push.apply(array, elemaent);
// console.log(array);

// 9 - using apply to enhahnace Built-in functions
// find min/max number in an array

const number = [10, 5, 1, 4, 8, 4, 11];
// console.log(Math.max(4,5,4,54,));

// LOOP Based algorithem---------------------------------

// (max = Infinity), (min =+ Infinity);
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   }
//   if (number[i] < min) {
//     min = number[i];
//   }
// }
// console.log(max,min);
// -------------------------------------------------------

// console.log(Math.max.apply(null,number));
// console.log(Math.min.apply(null,number));

// 10 - O/P Based Qestions

function f() {
  console.log(this);
}
let u = {
  g: f.bind(null),
};
// u.g()

// 11 - O/B - Bind Channing

function ff() {
  console.log(this.name);
}
ff = ff
  .bind({
    name: "John",
  })
  .bind({ name: "ahaan" });
// ff();

// 13 - patial application for login from

function checkPassword(ok, fail) {
  let password = prompt("password", "");
  if (password == "Abhi") {
    ok();
  } else {
    fail();
  }
}

let user = {
  name: "Abhishek Solanki ",

  login(result) {
    console.log(this.name + (result ? "Login Suuseccful" : "Login Faild"));
  },
};

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// 14 Explicit Binding With arrow function

const umar = 10;

var person = {
  name: "ABHISHEK",
  umar: 20,
  getumarArrow: () => console.log(this.umar),
  getumar: function () {
    console.log(this.umar);
  },
};
var person2 = { umar: 24 };
// person.getumarArrow.call(person2);
// person.getumar.call(person2);
