// var , let and const

// ----------------------Scope---------------------------

// {
//   var a = 5
//   console.log(a);
// }

//  -------------------Shadowing-----------------------

// function text() {
//   const a = "Hello";

//   if (true) {
//     const a = "Hii";
//     console.log(a);
//   }
//   console.log(a);
// }
// text();


//  -------------------Delcarion----------------------

// var a 
// var a 

// let b 

// const c = 18



// -----------------RE-Initialisation-------------------

// var a = 5
// a= 6

// let  b = 5
// b= 6

// const  c = 5
// c = 6


// -------------------Hoisting---------------------------

function abc() {
  console.log(a,b,c);

  const c = 30
  let b = 20
  var a = 10

}
abc()