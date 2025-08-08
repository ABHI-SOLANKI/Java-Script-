let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (j = 1; j <= rows - i; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
