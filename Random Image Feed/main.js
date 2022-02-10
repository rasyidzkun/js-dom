const container = document.getElementById("container");
const url = "https://source.unsplash.com/random/";
const rows = 5;
const cols = 3;

for (let i = 0; i < rows * cols; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `${url}${getRandomSize()}`);
  container.appendChild(img);
}

function getRandomSize() {
  return `${imgSize()} x ${imgSize()}`;
}

function imgSize() {
  return Math.floor(Math.random() * 10) + 300;
}
