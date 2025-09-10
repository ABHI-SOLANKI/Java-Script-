let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.color = "red";
});

document.querySelector("p").addEventListener("dblclick", function () {
  this.style.color = "green";
});

document.querySelector("input").addEventListener("input", function (evt) {
  if (evt.data !== null && evt.data !== " ") {
    console.log(evt.data);
  }
});

let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", function (data) {
  device.textContent = `${data.target.value} Device Select `;
});

let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h1.textContent = "Space";
  } else {
    h1.textContent = dets.key;
  }
});

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
  fileinp.click();
});

fileinp.addEventListener("change", function (na) {
  const file = na.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
});

let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function () {
  abcd.style.backgroundColor = "yellow";
});
document.querySelector("#abcd");
abcd.addEventListener("mouseout", function () {
  abcd.style.backgroundColor = "red";
});


window.addEventListener("mousemove",function (dts) {
  abcd.style.top = dts.clientY + "px";
  abcd.style.left= dts.clientX + "px";
})
