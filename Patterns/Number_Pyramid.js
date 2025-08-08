let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += k;
  }
  pattern += "\n";
}
console.log(pattern);
