const useremail = []

if (useremail) {
    console.log("Get The Email")
}
else{
    console.log("Not Found Email");
    
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truly value 
// "0", 'false', " ", [] , {}, function(){}, 

// if (useremail.length === 0) {
//     console.log("Array Ia Empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("oBJ is empty");
    
}

// Nullish Coalescing operator (??): null underfined

let val1
val1 = 5?? 12

console.log(val1);


// Terniary Operator

// condition ? true : false

const icetea = 1005
icetea <= 11 ? console.log("less than "): console.log("more than 11");

