const catto = document.querySelector(".catto");
const btn = document.querySelector(".catto-btn");

btn.addEventListener("click", getCatto);

async function getCatto() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  catto.innerHTML = `<img src="${data[0].url}" alt="cat" />`;
}
