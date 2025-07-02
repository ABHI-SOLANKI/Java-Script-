const myarr = [0,1,2,3,4,5]
const myHeros = ["ironMan","Thor","Captain"]

const myarr2 = new Array(1,2,3,4)

// console.log(myarr[1]);

// Array Methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()


// myarr.unshift(2)
// myarr.shift()

// console.log(myarr.includes(4));
// console.log(myarr.indexOf(4));

// const newarray = myarr.join()
// console.log(myarr);
// console.log(newarray);

// Slice,splice

console.log("A ", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3)
console.log("C ",myarr);
console.log(myn2);