const container = document.getElementById(`container`)

window.addEventListener('keydown', (e) => {
    container.innerHTML = `
    <div class="box">
        ${e.key == " " ? "Space" : e.key}
        <small>event.key</small>
    </div>

    <div class="box">
        ${e.keyCode} 
        <small>event.keyCode</small>
    </div>

    <div class="box">
        ${e.code}
        <small>event.code</small>
    </div>
    `
})