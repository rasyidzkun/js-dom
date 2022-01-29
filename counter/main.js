if(!localStorage.getItem("count")) { // 1. check apakah local storage dengan key "count" sudah memiliki nilai. 
	localStorage.setItem("count", 0) // 2. jika belum, set key "count" dengan nilai 0
}

const value = document.querySelector("#value")
const button = document.querySelectorAll(".btn") //menghasilkan NodeList {iterator}

value.textContent = localStorage.getItem("count") // 5. tampilkan nilai dari local storage saat halaman dibuka

button.forEach(btn => {
	btn.addEventListener("click" , (e) => {
		let count = localStorage.getItem("count") // 3. masukkan nilai dari local storage ke variabel count 

		const classes = (e.target.classList)

		if(classes.contains("decrease")) {
			count-- 
		}else if(classes.contains("increase")) {
			count++
		}else {
			count = 0
		}

		(count > 0 ? value.style.color = "lime"
			: count < 0 ? value.style.color = "tomato"
			: value.style.color = "black")

		value.textContent = count

		localStorage.setItem("count", count) // 4. Simpan nilai dari variabel count ke key "count"
	})
})