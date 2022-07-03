const text = "Cats naturally feel affection for those who feed, look after and play with them, although they don’t always make that obvious."

let index = 0

function writeText() {
    document.body.textContent = text.slice(0, index)
    index++

    if(index > text.length) {
        index = 0
    }
}

setInterval(writeText, 100)