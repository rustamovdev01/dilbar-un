document.querySelector('.selected').addEventListener('click', function () {
	document.querySelector('.options').style.display = 'block'
})

document.querySelectorAll('.option').forEach(function (option) {
	option.addEventListener('click', function () {
		document.querySelector('.selected').innerHTML = option.innerHTML
		document.querySelector('.options').style.display = 'none'
	})
})