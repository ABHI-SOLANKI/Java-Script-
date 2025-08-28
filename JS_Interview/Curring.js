// ---------- 1- sum(2)(6)(1) -------------------

// function sum(a,b,c) {
//     return a + b + c
// }
// console.log(sum(2,6,1));

// function sum(a) {
// return function (b) {
//   return function (c) {
//     return a + b + c;
//   };
// };
// }
// console.log(sum(2)(6)(1));

// 2 -------------------------------
// - evaluate("sum")(4)(2) => 6
// - evaluate("Mulitiply")(4)(2) => 8
// - evaluate("divide")(4)(2) => 2
// - evaluate("Subtract")(4)(2) => 0

// function evaluate(opration) {
//   return function (a) {
//     return function (b) {
//       if (opration === "sum") return a + b;
//       else if (opration === "mul") return a * b;
//       else if (opration === "div") return a / b;
//       else if (opration === "sub") return a - b;
//       else return "Invalid Opratopn";
//     };
//   };
// }

// const ab = evaluate("sum");
// console.log(ab(45487)(1));

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("mul")(4)(2));
// console.log(evaluate("div")(4)(2));
// console.log(evaluate("sub")(4)(2));

// ---------- 3- Infinite Curring -> sum(1)(2)(3)......(n) -------------------

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(5)(2)(3)(8)());

// ---------- 4 - Currirng vs Partial Application -------------------

// function sum(a) {
// return function (b, c) {
//   return a + b + c;
// };
// }
// const x = sum(10);
// console.log(x(5, 6));
// console.log(x(6, 6));

//or

// console.log(sum(20)(1, 4));

// ---------- 5- Manipulating DOM -------------------

// function updateElemnetText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElemnetText("heading");

// updateHeader("Solnaki Abhishek.")

// ---------- 6- Curry() impilimentation -------------------
// convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6)); // 18
