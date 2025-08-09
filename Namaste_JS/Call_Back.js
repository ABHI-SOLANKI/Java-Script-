// What is the call back function in js ------------------------------

// setTimeout(function () {
//   console.log("Timer");
// }, 5000);
// function x(y) {
//   console.log("X");
//   y()
// }
// x(function y() {
//   console.log("Y");
// });

// java script is synchronous and single-threaded lang -------------------------

// blocking the main thread ----------------------------------------------------

// Power of callback ----------------------------------------------------------

// Deep about Event listeners -------------------------------------------------

// Closures Demo with Event Listeners -----------------------------------------

// Scope Demo with Event Listeners --------------------------------------------

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}
attachEventListeners()