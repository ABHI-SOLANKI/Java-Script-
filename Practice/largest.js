function isLargest() {
  if (num1 >= num2) {
    return num1;
  } else if (num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let num1 = 550;
let num2 = 545;
let num3 = 494;

let Largest = isLargest(num1, num2, num3);
console.log(
  Largest + " Is greter Then between " + num1 + " And " + num2 + " OR " + num3
);

// Largest Between 2 Numbers --------------------------------------------------------------

function isGreater() {
  if (number1 >= number2) {
    return number1;
  } else {
    return number2;
  }
}

let number1 = 8784;
let number2 = 8785;

let Greater = isGreater(number1, number2);
console.log(Greater + " Is greter Then between " + number1 + " And " + number2);
