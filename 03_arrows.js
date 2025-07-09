const user = {
  username: "abhi",
  price: 45,

  welcomemsg: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomemsg()
// user.username = "nisha"
// user.welcomemsg()

// console.log(this);

// function chai() {
//     let username = "abhi"
//     console.log(this.username);

// }
// chai()

// const chai = function () {
//     let username = "abhi"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "abhi"
// console.log(this.username);
// }
// chai()

const addtwo = (num1, num2) =>  num1 + num2

console.log(addtwo(4,4));