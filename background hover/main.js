const container = document.querySelector(".container");
container.addEventListener("mousemove", (e) => {
  const rgbColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

  document.body.style.backgroundColor = rgbColor;
  container.style.borderColor = rgbColor;
});

container.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "#fff";
  container.style.borderColor = "#000";
});
