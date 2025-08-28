// Polyfill For Map , Filter , Reduce

//-------polyfill for map ------------

// Array.map((num,i,arr) => { })
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const number = [1, 2, 3, 4];
// const multipy = number.myMap((num, i, arr) => {
//   return num * 3;
// });
// console.log(multipy);

//-------polyfill for Filter ------------

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };

// const number = [1, 2, 3, 4];
// const moreThenTwo = number.myFilter((num, i, arr) => {
//   return num > 2;
// });
// console.log(moreThenTwo);

//-------polyfill for Reduce ------------
// arr.Redece((acc,curr)=>{},intialValue)
Array.prototype.myRedece = function (cb, intialValue) {
  var accumulator = intialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const number = [1, 2, 3, 4];
const sum = number.myRedece((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
