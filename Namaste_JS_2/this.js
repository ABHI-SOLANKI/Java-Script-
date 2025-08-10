// "use strict";
// this is global space
console.log(this); //global - window, global

// this inside a function
function x() {
  // the value depend on strict / non strict mode
  console.log(this);
}
x();

// this inside non strict mode - (this substitution)

// If the value of this keyword is undefine or null
// this value be repaced with globelObject
// only in non srtict mode

// this keyword value depends on how the function  this called (window)
window.x();

// this inside a object's methos
const student = {
  name: "Abhi",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Dipak",
};

// this apply bind methos (sharing method)

student.printName.apply(student2); // value of this = student2

// this inside arrow funcrion

const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x();

// this inside nested arrow funcrtion

const obj2 = {
  a: 10,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();

// this inside DOM elements => refrence to HTMLelemnt

// this inside class, constuctor