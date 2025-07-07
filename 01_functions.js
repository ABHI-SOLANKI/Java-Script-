// const { use } = require("react");

// function sayMyName() {
//   console.log("a");
//   console.log("b");
//   console.log("h");
//   console.log("i");
//   console.log("s");
//   console.log("h");
//   console.log("e");
//   console.log("k");
// }

// // sayMyName()

// // function addtwonumbers(number1 , number2) {
// //     console.log(number1 + number2);
// // }

// function addtwonumbers(number1, number2) {
//   //     let result = number1 + number2
//   //     return result
//   return number1 + number2;
// }

// const result = addtwonumbers(5, 3);
// // console.log("result:-", result);

// function LoginUserMsg(username = "nisha") {
//   if (!username) {
//     // console.log("please enter a username");
//     return;
//   }
//   return `${username} just logged In`;
// }
// console.log(LoginUserMsg())

// function calculatecartprice(...num1) {
//   return num1;
// }
// console.log(calculatecartprice(200,400,500))

const user = {
  username: "abhi",
  prices: 545,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and Price Is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
    username : "nisha",
    price : "infinity"
})

const mynewarray = [ 2000,400,5000,8000]

function returnsecondvalue(getArray) {
    return getArray[1]
}
// console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([2000,4000,5000,8000]));