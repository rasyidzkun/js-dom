const open = document.getElementById("open")
const close = document.getElementById("close")
const wrapper = document.querySelector(".wrapper")

open.addEventListener("click", () => {
    wrapper.classList.add("active")
})

close.addEventListener("click", () => {
    wrapper.classList.remove("active")
})