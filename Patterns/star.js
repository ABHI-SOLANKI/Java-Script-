function patternTriangale(rows) {
  for (let i = 1; i <= rows; i++) {
    let rowString = " "
    for (let j = 1; j <= i; j++) {
        rowString += " * "
    }
    console.log(rowString);
    
  }
}
patternTriangale(10);
