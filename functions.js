// --------1 - What is Function Delcaration? ----------------

// console.log(squre(2, 5));
// function squre(num1, num2) {
//   return num1 * num2;
// }

//--------- 2 - What is Function Expression? -----------

// const squree = function (n) {
//   return n * n;
// };
// console.log(squree(5));

// ---------3 - What are first class Function ?----------------

// function sq(number) {
//   return number * number;
// }
// function dissplaySq(fn) {
//   console.log("Squre Is :" + fn(5));
// }
// dissplaySq(sq)

// -------- 4 - What is IIFE?----------------

// (function s(nu) {
//   console.log(nu * nu);
// })(4);

// -------- 5 -  IIFE -O/P Based Question?  ----------------

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(4);
// })(1);

// -------- 6 -  Function Scope ----------------

// var num1 = 20;
// (num2 = 3), (name = "RoadSide Coder");

// function multipy() {
//   console.log(num1 * num2);
// }
// multipy();

// function getScore() {
//   var num1 = 2,
//     num2 = 3;

//   function add() {
//     console.log(name + " Scroe " + (num1 + num2));
//   }
//   return add();
// }

// getScore();

// -------- 7 -  Function Scope - O/P Based Question ----------------

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i*1000);
// }

// -------- 8 -  Function Hoisting ----------------

// fnName()
// function fnName() {
//   console.log("ABHI SOLANKI");
// }

// -------- 9 -  Function Hoisting O/P Based Ouestion ----------------

// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x= 20
// }
// fun()

// -------- 10 - Param VS Argument   ----------------

// function squre(num) { //Params
//   console.log(num*num);
// }
// squre(5) //Argrumnets
// //-------------- Rest VS Spered ----------------------
// function multipy(...nums) { //Rest
//   console.log(nums[0]*nums[1]);
// }
// var arr = [5,5]
// multipy(...arr) //Sperad

// -------- 11 - Param VS Argument O/P Based Qestions   ----------------

// const fn = (a,x,y,...number) =>{
//   console.log(x,y,number);
// };
// fn(5,4,8,9,4,5,56)

// -------- 12 - CallBack Functions ----------------

// document.addEventListener("click",function name(params) {

// Example CallBack Function :-
function fetchUser(callback) {
  setTimeout(() => {
    const user = {
      name: "Abhi",
      age: 20,
    };
    callback(user);
  }, 2000);
}
function showUser(user) {
  console.log(`Name :-${user.name}`);
  console.log(`Age :-${user.age}`);
}
fetchUser(showUser)

// })

// -------- 13 - Arrow Functions ----------------

// const add = (num1, num2) =>  {
//   console.log(num1 + num2);
// }
// add(5,6)

// -------- 14 - Arrow Functions VS Regular Function  ----------------

// 1 = Syntax

function squre(num) {
  return num * num;
}

const squreArrow = (num) => {
  return num * num;
};

// 2 = Implicit "Return" KeyWord
const s = (n) => n * n;

// 3 = Arguments

function fn() {
  console.log(arguments);
}
// fn(1,2,3)

const fnArrow = () => {
  console.log(arguments);
};
// fnArrow(3, 2, 1);

// 4 "this" KeyWord

let user = {
  username: "Abhi",
  rc1: () => {
    console.log(" Hello  " + this.username);
  },
  rc2() {
    console.log(" Heloo  " + this.username);
  },
};

// user.rc1()
// user.rc2()
