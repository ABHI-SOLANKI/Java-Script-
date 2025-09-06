// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// -----------------------------------------------------
// let i = 10
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// -------------------------------------------------------------

// for(let i = 1; i <= 20;i++){
//     if (i % 2 == 0) {

//         console.log(i)
//     }
// }

// -------------------------------------------------------
// let i = 1;
// while (i <= 15) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// -----------------------------------------------------------

// for (let i = 1; i <= 10; i++) {
//     console.log(` 5 * ${i} =`, i *5);

// }

// ----------------------------------------------------

// let sum = 0
// for (let i = 1; i <= 100; i++) {
//  sum = sum +i

// }
// console.log(sum);

// ----------------------------------------------------------------

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// ---------------------------------------------------------

// let val = prompt("Give a Number");

// for (let i = 1; i <= val; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is Even`);
//     }
//     else
//     {
//         console.log(`${i} is odd `);

//     }
// }

// -----------------------------------------------------

// for (let i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }

// --------------------------------

// for (let i = 1; i <=20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
// }
// for (let i = 1; i < 21; i++) {
//     if (i % 2 == 1) {
//         console.log(i);

//     }
// }

//  -----------------------------------
// let sum = 0
// for (let i = 1; i < 11; i++) {
//     sum = sum + i

// }
// console.log(sum);

// -----------------------------------------

// for (let i = 10; i >= 0 ; i--) {
//     console.log(i);

// }

// for (let i = 1; i < 11; i++) {
//     console.log(i*5)
// }

// let num = 5;
// let fact = 1

// for (let i = 1; i <= num ; i++) {
//     fact = fact * i
// }
// console.log(fact);

// fact = 1
// for (let i = 1; i <= 5; i++) {

//     fact = fact  * i
//     console.log(fact);

// }

// ---------------------------------------------------------------------------------------------

function bmi(weght,hight){
    return weght/(hight*hight)
}

// console.log(bmi(50,1.75).toFixed(2))



function DiscountCal(discount) {
    return function (price) {
        return price - price * (discount / 100)
    }
}

let disCounter = DiscountCal(10)
// console.log(disCounter(1000));


let arr =  [1,2,3,4,5,6]

let ans = arr.reduce(function (acc,curr) {
    return acc + curr
},0)
// console.log(ans);




let obj = {
    name:"abhi",
    age:20,
    email:"abhi@gmail.com",
    address: {
        city:"Surat"
    }
}
let obj2 = {...obj}

obj2.address.city = "Porbadar"