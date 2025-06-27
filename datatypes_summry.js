// Primitive

// 7 types :- String , Number , Boolean , Null , Undefine , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

// const bigNumber = 454459898698n



// refrence (Non Primitive) 

// Array, Objects, Functions

const heros = ["shktiman" , "naagrag" , "doga"]; 
let myObj = {
    name: "Abhi",
    age: 20,
}

const myFunction = function(){
    console.log("hello World");
    
}

console.log(typeof myObj);