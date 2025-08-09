const arr = [5, 1, 3, 2, 6];

// Filter odd value ------------------------------------------------------------

// function isOdd(x){
//     return x % 2
// }
// const output = arr.filter(isOdd)
// console.log(output);



// Filter Even Value ------------------------------------------------------------

// function isEven(x){
//     return x % 2 === 0
// }
// const output = arr.filter(isEven)
// console.log(output);



// Greater Then Value -------------------------------------------------------------


function GreaterThen(x){
    return x > 4
}
const output = arr.filter(GreaterThen)
console.log(output);