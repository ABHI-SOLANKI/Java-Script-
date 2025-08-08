let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = rows; j >= i; j--) {
    pattern += j;
  }
  pattern += "\n";
}
console.log(pattern);