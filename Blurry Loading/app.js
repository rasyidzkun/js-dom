const loadingText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")
let time = 0;

let interval = setInterval(blurring, 30)

function blurring() {
    time++

    if(time > 99) {
        clearInterval(interval)
    }

    loadingText.innerHTML = `${time}%`
    loadingText.style.opacity = scale(time, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(time, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}