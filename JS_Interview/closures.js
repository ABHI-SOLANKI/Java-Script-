//-------Lexical Scope------------

var username = "Abhi  Solanki";
// global scope
function local() {
  // local scope
  // console.log(username);
}
local();

// ---------------------------------

// global scope
function sub() {
  var name = "Abhi Solanki";
  // inner scope 2
  function dissplayName() {
    // inner scope
    alert(name);
  }
  // dissplayName()
}
// sub()

//-------What Is Closure------------

function makeFuns() {
  var name = "Mozila";
  function dissplayName(num) {
    // console.log(name, num);
  }
  // return dissplayName;
}
// makeFuns()(5);

//------- Closure Scope Chain ------------

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20