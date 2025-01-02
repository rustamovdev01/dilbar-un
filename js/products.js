document.querySelector('.selected').addEventListener('click', function () {
	document.querySelector('.options').style.display = 'block'
})

document.querySelectorAll('.option').forEach(function (option) {
	option.addEventListener('click', function () {
		document.querySelector('.selected').innerHTML = option.innerHTML
		document.querySelector('.options').style.display = 'none'
	})
})

let traditionBtn = document.querySelector('.tradition-btn')
let traditionBtnFront = document.querySelector('.tradition-btn-front')

traditionBtn.addEventListener('mouseenter', () => {
	traditionBtn.style = `
		transition: 0.4s ease-in-out;
		color: white;
	`
	traditionBtnFront.style = `
		width: 100%;
	height: 61px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

traditionBtn.addEventListener('mouseleave', () => {
	traditionBtn.style = `
		transition: 0.4s ease-in-out;
		color: black;
	`
	traditionBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50%;
	`
})
