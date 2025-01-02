document.querySelector('.selected').addEventListener('click', function () {
	document.querySelector('.options').style.display = 'block'
})

document.querySelectorAll('.option').forEach(function (option) {
	option.addEventListener('click', function () {
		document.querySelector('.selected').innerHTML = option.innerHTML
		document.querySelector('.options').style.display = 'none'
	})
})

let firstBtn = document.querySelector('.recipe-boxes-firstfood-right-button')
let secondBtn = document.querySelector('.recipe-boxes-secondfood-left-button')
let thirdBtn = document.querySelector('.partner-items-button')
let firstBtnFront = document.querySelector('.first-btn-front')
let secondBtnFront = document.querySelector('.second-btn-front')
let thirdBtnFront = document.querySelector('.third-btn-front')

firstBtn.addEventListener('mouseenter', () => {
	firstBtnFront.style = `
		width: 100%;
	height: 55px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

firstBtn.addEventListener('mouseleave', () => {
	firstBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50%;
	`
})

secondBtn.addEventListener('mouseenter', () => {
	secondBtnFront.style = `
		width: 100%;
	height: 55px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

secondBtn.addEventListener('mouseleave', () => {
	secondBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50%;
	`
})

thirdBtn.addEventListener('mouseenter', () => {
	thirdBtn.style = `
	color: white;
	`
	thirdBtnFront.style = `
		width: 100%;
	height: 61px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	color: white;
	`
})

thirdBtn.addEventListener('mouseleave', () => {
	thirdBtn.style = `
	color: black;
	`
	thirdBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50%;
	`
})
