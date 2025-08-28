// 1- What Is the Output

// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(obj);

// 2- create a function multiplyByTwo(obj) that multiplies all numberic properties value of nums by 2.

// let nums = {
//   a: 100,
//   b: 200,
//   title: "my nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(nums);

// 3- What Is the Output of following code

// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123;
// a[c] = 456

// console.log(a[b]);
//456

// 4- what's JSON.strigify and JSON.Parse?

// const user = {
//     name:"abhi",
//     age:20,
// };
// const strObj = JSON.stringify(user)

// localStorage.setItem("test",strObj)

// console.log(JSON.parse(localStorage.getItem("test")));

// 5- What Is the Output

// console.log([..."Ladia"]);

// 6- What Is the Output

// const user = {name: "ladiya",age:21};
// const admin = {admin: true,...user};

// console.log(admin);

// 7- What Is the Output

// const setting = {
//   usename: "abhi",
//   level: 19,
//   health: 90,
// };
// const data = JSON.stringify(setting, ["level", "health"]);
// console.log(data);

// 8- What Is the Output

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perameter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perameter());

// 9- What Is destrucuring in object

let user = {
  name: "abhi",
  age: 20,
};

const { name } = user;
// console.log(name);

// 10- What Is the Output

function getItem(fruList, favFruList, ...args) {
  return [...fruList, ...args, favFruList];
}

// console.log(getItem(["banana","apple","pear","orange"]))

// 11- What Is the Output

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// 12- What Is the Output

console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

// 13- What Is the Output

let person = { name: "Lydia" };
const member = [person];
person = null;

console.log(member);

// 14 - What Is the Output

const value = { number: 10 };
const Mulitiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};


Mulitiply()
Mulitiply()
Mulitiply(value)
Mulitiply(value)