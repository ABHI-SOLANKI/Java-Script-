function isEven(num) {
  if (num % 2 ) {
    return "Odd";
  } else {
    return "Even";
  }
}

let number = 8
console.log(number + " is " + isEven(number));
