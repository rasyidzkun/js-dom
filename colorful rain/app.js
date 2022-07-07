const background = [
    "linear-gradient(transparent, salmon)",
    "linear-gradient(transparent, aqua)",
    "linear-gradient(transparent, yellow)",
    "linear-gradient(transparent, lime)",
    "linear-gradient(transparent, white)",
    "linear-gradient(transparent, rebeccapurple)"
]

const n = 100;
let i = 0;

while (i < n) {
    const rain = document.createElement("div")
    rain.classList.add("rain")

    const rainProperties = {
        width: Math.floor(Math.random() * 6) + 1 + "px",
        positionX: Math.floor(Math.random() * window.innerWidth) + "px",
        delay: Math.floor(Math.random() * -20) + "s",
        duration: Math.random() * 5 + "s",
        bg: background[Math.floor(Math.random() * background.length)],
        opacity: Math.random() * 0.5
    }

    rain.style.width = rainProperties.width
    rain.style.left = rainProperties.positionX
    rain.style.animationDelay = rainProperties.delay
    rain.style.animationDuration = rainProperties.duration
    rain.style.background = rainProperties.bg
    rain.style.opacity = rainProperties.opacity

    document.body.appendChild(rain)
    i++

}
