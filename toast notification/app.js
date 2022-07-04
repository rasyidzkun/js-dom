const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", () => {
    const notif = document.createElement("div")
    notif.classList.add("toast")
    
    notif.textContent = "Hello"

    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 2000)
})