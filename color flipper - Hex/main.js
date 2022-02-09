const hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.querySelector("button")
const color = document.querySelector("span")

function random() {
	return Math.floor(Math.random() * hexValue.length)
}

btn.addEventListener("click", () => {
	let hexColor = "#"
	for(let i = 0; i < 6; i++){
		hexColor += hexValue[random()]
	}
	color.textContent = hexColor
	color.style.color = hexColor
	document.body.style.backgroundColor = hexColor
})