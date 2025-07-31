const desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);

// console.log(Math.PI)

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailabel: true,

  orderChai: function () {
    console.log("cha nathi banavvi ");
    
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai , "price",{
    // Writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
