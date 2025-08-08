let rows = 4;
let num = 1;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += num+""
    num++
  }
  pattern += "\n"
}
console.log(pattern);
