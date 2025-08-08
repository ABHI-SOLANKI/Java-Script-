let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 6 - i; j >= 1; j--) {
    pattern += j;
  }
  pattern += "\n";
}
console.log(pattern);
