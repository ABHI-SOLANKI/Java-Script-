let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === rows) {
        pattern += "*"
    }
    else{
        pattern +=" "
    }
  }
  pattern +="\n"
}
console.log(pattern);

