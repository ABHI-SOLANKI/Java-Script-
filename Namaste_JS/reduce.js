const arr = [5, 1, 3, 2, 6];

// max using reduce ------------------------------------------------------------------------------

const result = arr.reduce(function(max,curr){
  if (curr > max) {
    max = curr
  }
  return max
},0)

console.log(result);



// max with out using reduce ------------------------------------------------------------------------

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if(arr[i]>max){
//         max =arr[i]
//       }
//   }
//   return max;
// }

// console.log(findMax(arr));

// Sum -------------------------------------------------------------------------------

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});

console.log(output);
