function makeSizer(size) {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("Size-12").onclick = size12;
document.getElementById("Size-14").onclick = size14;
document.getElementById("Size-16").onclick = size16;
