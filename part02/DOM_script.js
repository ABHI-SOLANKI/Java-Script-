// let h1 = document.querySelector("h1");
// h1.innerText = "Bohat  Badhiya hun bhai!!!";

let a = document.querySelector("a");
a.setAttribute("href", " https://www.google.com/");
console.log(a.getAttribute("href"))
a.removeAttribute("href")

let img = document.querySelector("img");
img.setAttribute(
  "src",
    "https://images.unsplash.com/photo-1756908604030-04861dc79820?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

let h2 = document.createElement("h2")       // Create Element
h2.textContent = " HELLO BHAIYA !!!"        // textContaet
document.body.append(h2)                    // append/prepend
document.querySelector("body").prepend(h2)  // 2 ji rite print thay
// h2.remove()                              // remove pan thay
// h2.style.color ="red"                       //  js se css dene kaaa
// h2.style.backgroundColor ="black"           // bg color change

let h1 = document.querySelector("h1")       // right way to change styleing in js
h1.classList.add("abcd")
h1.classList.remove("abcd")                 // remove class/style

let ul = document.querySelector("ul")
let li = document.querySelector("li")
ul.removeChild(li)
