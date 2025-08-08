let rows = 5

for (let i = 1; i <= rows; i++) {
  let space = "";
  let star = "";
  for (let j = 1; j <= rows - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= (2 * i - 1); k++) {
    star+='*'
    
  }
 console.log(star);        
}
