// 1 :- What Will be Logged to closole?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //Shadowing
    // console.log(count); // 1
  }
  // count = 0
  // console.log(count); //0
})();

// 2 :- Write a Function that would allow to you do this

function createBase(num) {
  return function (innerNum) {
    // console.log(innerNum+num);
  };
}

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27

// 3 :- Time Optimazation?

function find() {
  let a = [];
  for (let i = 1; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find();
// console.time("6")
// closure(6)
// console.timeEnd("6");
// console.time("55")
// closure(55)
// console.timeEnd("55")

// 4 :- Block scope and setTimeOut?
function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      //   console.log(i); //What is Logged
    }, i * 1000);
  }
}
// a();

// --------------------------------------
// Using "Var" KeyWoed

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => {
      //   console.log(i); //What is Logged
    }, i * 1000);
  }
  inner(i);
}

// 5 :- how would you use a closure to create private counter

function counter() {
  var _counter = 0;

  function add(incremet) {
    _counter += incremet;
  }
  function retive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retive,
  };
}

const c = counter();
c.add(5);
c.add(10);

// console.log(c.retive())

// 6 :- What is Module Patterns

var module = (function () {
  function PrivateMethod() {
    // Do Something
    console.log("Private");
  }
  return {
    publicMethod: function () {
      console.log("Public");
    },
  };
})();

// module.publicMethod()
// module.PrivateMethod()


// 7 :- Make this run olny once

let view;
function likeVideo() {
    let called = 0
    return function () {
        if (called > 0) {
            console.log("Alredy Sub To RoadSide Colde");
        }
        else{
            view = "RoadSide Coder"
            console.log("Sub to",view);
            called++;
        }
    }
}
let isSub= likeVideo()

// isSub()
// isSub()
// isSub()
// isSub()
// isSub()
// isSub()

// 8 :- Once polifill

function Once(func,context) {
    let ran ;
    return function(){
        if(func){
            ran = func.apply(context || this,arguments)
            func = null
        }
        return ran;
    }
}

const hello = Once((a,b)=>console.log("Hello",a,b))

// hello(454,845)
// hello()
// hello()
// hello()
// hello()


// 9 :- Closure VS Scope
