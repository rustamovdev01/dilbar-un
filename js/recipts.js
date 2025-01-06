document.querySelector('.selected').addEventListener('click', function () {
	document.querySelector('.options').style.display = 'block'
})

document.querySelectorAll('.option').forEach(function (option) {
	option.addEventListener('click', function () {
		document.querySelector('.selected').innerHTML = option.innerHTML
		document.querySelector('.options').style.display = 'none'
	})
})

let firstBtn = document.querySelector('.input-btn'),
	firstBtnFront = document.querySelector('.input-btn-front'),
	secondBtn = document.querySelector('.offer'),
	secondBtnFront = document.querySelector('.offer-front')

firstBtn.addEventListener('mouseenter', () => {
	firstBtnFront.style = `
		width: 100%;
	height: 48px;
	transition: 0.4s ease-in-out;
	background-color: #502f0f;
	border-radius: 30px;
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
	height: 48px;
	transition: 0.4s ease-in-out;
	background-color: #502f0f;
	border-radius: 30px;
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
