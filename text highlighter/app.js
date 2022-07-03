const input = document.querySelector(".input")
const texts = document.querySelectorAll(".text")

input.addEventListener("input", (e) => {
    const searched = e.target.value.trim()
    if (searched != "") {
        const regexp = new RegExp(searched, "gi")
        texts.forEach((text) => {
            const highlightText = text.textContent.replace(regexp, `<mark class="bg-primary text-light">${searched}</mark>`)
            text.innerHTML = highlightText
        })
    }
})