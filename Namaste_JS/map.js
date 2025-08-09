const arr = [5, 1, 3, 2, 6];

function Double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

// const output = arr.map(Double)
// const output = arr.map(triple)

const output = arr.map((x) => x.toString(2))

console.log(output);

// Double - [10,2,6,4,12]

// triple - [15,3,9,6,18]

// Binary - ["101", "1" , "11", "10", "110"]
