const text = "Kucingscript"
const container = document.querySelector(".text-container")

const speedEl = document.getElementById("speed")
let index = 1
let speed = 500 / speedEl.value

writeText()

function writeText() {
    container.textContent = text.slice(0, index)
    index++

    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)

}

speedEl.addEventListener("input", e => speed = 500 / e.target.value)