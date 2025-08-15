// function isPrime(n) {
//   if (n <= 1) {
//     isPrime = false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// let num = 12;
// if (isPrime(num))
//   console.log(num + " " + "Is A Prime Number");
// } else {
//   console.log(num + " " + " Is A Not a Prime Number");
// }

function isPrime(n) {
  if (n <= 1) {
    isPrime = false;
  }
  for(let i = 2 ; i < n ; i++){
    if (isPrime % n === 0) {
        return false
    }
    else{
        return false
    }
  }
}

const Number = 13
if(isPrime(Number)){
    console.log(Number + " " + " Is Prime"); 
}
else{
    console.log(Number + " " + "Is Not a Prime" ); 
}

