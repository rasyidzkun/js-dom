const timeElement = document.querySelector(".time")
const dateElement = document.querySelector(".date")

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) {
    const getHours = date.getHours() % 12 || 12
    const getMinutes = date.getMinutes()
    const isAM = date.getHours() < 12

    return `${getHours.toString().padStart(2, "0")}:${getMinutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`
}

/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDay()} ${date.getFullYear()}`
}

setInterval(() => {
    const now = new Date()

    timeElement.textContent = formatTime(now)
    dateElement.textContent = formatDate(now)
}, 200)