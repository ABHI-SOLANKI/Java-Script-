let count = 0;
let second = 10
let progress = document.querySelector(".progress-bar");
let persentText = document.querySelector("#percentText")

let intv = setInterval(() => {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    persentText.textContent = `${count}%`;
  }
  else{
    document.querySelector("h2").textContent="Downloaded...✅"
    clearInterval(intv)
  }
}, (second * 1000)/100);
