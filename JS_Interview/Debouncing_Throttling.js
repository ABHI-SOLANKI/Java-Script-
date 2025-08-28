// 1 - Create a Button UI and Debounce as follows :-
// --> Show "Button Pressed <x> Times" every time button is pressed
// --> Incress "Triggered <y> Times" count after 800ms of debounce

// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// const btn = document.querySelector(".increment_btn");
// const btnPrees = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressCount = 0;
// var triggerCount = 0;

// const debounceCount = debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPrees.innerHTML = ++pressCount;
//   debounceCount();
// });

// ---------------------------------------------------------------------------------------------------------------

// 1 - Create a Button UI and add throttle as follows :-
// --> Show "Button Pressed <x> Times" every time button is pressed
// --> Incress "Triggered <y> Times" count after 800ms of debounce

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const btn = document.querySelector(".increment_btn");
const btnPrees = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressCount = 0;
var triggerCount = 0;

const throttleCount = throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPrees.innerHTML = ++pressCount;
  throttleCount();
});