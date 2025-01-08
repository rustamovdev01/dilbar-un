document.querySelector('.selected').addEventListener('click', function () {
	document.querySelector('.options').style.display = 'block'
})

document.querySelectorAll('.option').forEach(function (option) {
	option.addEventListener('click', function () {
		document.querySelector('.selected').innerHTML = option.innerHTML
		document.querySelector('.options').style.display = 'none'
	})
})

let firstBtnText = document.querySelector('.first-btn-text'),
    firstBtn = document.querySelector('.first-btn'),
		firstBtnFront = document.querySelector('.first-btn-front'),
		secondBtnText = document.querySelector('.second-btn-text'),
		secondBtn = document.querySelector('.second-btn'),
		secondBtnFront = document.querySelector('.second-btn-front'),
		thirdBtnText = document.querySelector('.third-btn-text'),
		thirdBtn = document.querySelector('.third-btn'),
		thirdBtnFront = document.querySelector('.third-btn-front'),
		fourthBtnText = document.querySelector('.fourth-btn-text'),
		fourthBtn = document.querySelector('.fourth-btn'),
		fourthBtnFront = document.querySelector('.fourth-btn-front')

firstBtn.addEventListener('mouseenter', () => {
	firstBtnText.style = `
		transition: 0.4s ease-in-out;
		color: white;
	`
	firstBtnFront.style = `
		width: 100%;
	height: 66px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

firstBtn.addEventListener('mouseleave', () => {
	firstBtnText.style = `
		transition: 0.4s ease-in-out;
		color: #502f0f;
	`
	firstBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50px;
	`
})

secondBtn.addEventListener('mouseenter', () => {
	secondBtnText.style = `
		transition: 0.4s ease-in-out;
		color: white;
	`
	secondBtnFront.style = `
		width: 100%;
	height: 66px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

secondBtn.addEventListener('mouseleave', () => {
	secondBtnText.style = `
		transition: 0.4s ease-in-out;
		color: #502f0f;
	`
	secondBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50px;
	`
})

thirdBtn.addEventListener('mouseenter', () => {
	thirdBtnText.style = `
		transition: 0.4s ease-in-out;
		color: white;
	`
	thirdBtnFront.style = `
		width: 100%;
	height: 66px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

thirdBtn.addEventListener('mouseleave', () => {
	thirdBtnText.style = `
		transition: 0.4s ease-in-out;
		color: #502f0f;
	`
	thirdBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50px;
	`
})

fourthBtn.addEventListener('mouseenter', () => {
	fourthBtnText.style = `
		transition: 0.4s ease-in-out;
		color: white;
	`
	fourthBtnFront.style = `
		width: 100%;
	height: 66px;
	transition: 0.4s ease-in-out;
	background-color: rgba(144, 89, 37);
	border-radius: 50px;
	`
})

fourthBtn.addEventListener('mouseleave', () => {
	fourthBtnText.style = `
		transition: 0.4s ease-in-out;
		color: #502f0f;
	`
	fourthBtnFront.style = `
		width: 10px;
	height: 10px;
	transition: 0.4s ease-in-out;
	border-radius: 50px;
	`
})
