// // 1 - O/p

// const user = {
//     firstName:"Abhi",
//     getName(){
//         const firstName = " Abhi solanki"
//         return this.firstName
//     }
// }
// console.log(user.getName());

// 2- What Is the result of accessing its ref ?

// function makeuser() {
//     return {
//         name: "abhi",
//         ref:this,
//     };
// }

// let user = makeuser()
// console.log(user.ref.name);

// 3- What Is the Output

// const user = {
//     name:"abhi Solanki",
//     logmesaeg(){
//         console.log(this.name);

//     }
// }
// setTimeout(() => {
//     user.logmesaeg();
// }, 1000);\

// 4 -  What Is the Output

// const user = {
//   name: "abhi",
//   greet() {
//     return `heloo ,${this.name}!`;
//   },
//   farewell: () => {
//     return `GoodBye , ${this.name}`;
//   },
// };

// console.log(user.greet());
// console.log(user.farewell());

// 5 - create an object calculater

// let calculater = {
//   read() {
//     this.a = +prompt("a = ", 0);
//     this.b = +prompt("b = ", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculater.read();
// console.log(calculater.sum());
// console.log(calculater.mul());

// 6 - What Is The Output

// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };

// object.method(callback, 2, 3);

// 7 - Implemnet calc

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).subtract(30).add(10);
console.log(result.total);
