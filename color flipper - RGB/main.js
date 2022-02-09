const btn = document.querySelector(".button");
btn.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
