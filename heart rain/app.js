function createHeart() {
    const heart = document.createElement("div")
    heart.classList.add("heart")

    heart.textContent = "🤍"

    heart.style.left = Math.random() * 100 + 1 + "vw"
    heart.style.animationDuration = Math.random() * 2 + 5 + "s"
    heart.style.fontSize = Math.random() * 1 + 1.5 + "rem"

    document.body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 6000)
}

setInterval(createHeart, 300)