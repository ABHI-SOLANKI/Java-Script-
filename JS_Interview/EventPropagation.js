// 1 - What is Event Propagation ---------------------------------------------------------->

// document.addEventListener('click',()=>{
//     alert("HELLO")
// })

// 2 - Event Bublling --------------------------------------------------------------------->

// const div = document.querySelector('div')
// const form = document.querySelector('form')
// const button = document.querySelector('button')

// document.addEventListener('click' ,()=>{
//     alert("div")
// })
// document.addEventListener('click' ,()=>{
//     alert("form")
// })
// document.addEventListener('click' ,()=>{
//     alert("button")
// })

// 3 - event.target VS this.target VS event.currentTarget ------------------------------->

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", Func);
// button.addEventListener("click", Func);
// form.addEventListener("click", Func);

// function Func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       " target = " +
//       event.target.tagName,
//     " this = " + this.tagName
//   );
// }

// 4 -  what is event Capturing / Trackling ----------------------------------------------->

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// document.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );
// document.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );
// document.addEventListener(
//   "click",
//   () => {
//     alert("button");
//   },
//   {
//     capture: true,
//   }
// );


// 5 - How to stop Bublling or capturing ---------------------------------------------------->


const div = document.querySelector('div')
const form = document.querySelector('form')
const button = document.querySelector('button')

document.addEventListener('click' ,(e)=>{
    e.stopPropagation()
    alert("div")
})
document.addEventListener('click' ,(e)=>{
    e.stopPropagation()
    alert("form")
})
document.addEventListener('click' ,(e)=>{
    e.stopPropagation()
    alert("button")
})