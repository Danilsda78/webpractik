let mobMenu = document.querySelector('.mobile-menu')
let mobBtn = document.querySelector('.header__btn')
let header = document.querySelector('.header')
let lastPositionScroll = 0


function headBtnActive() {
	mobMenu.classList.toggle('active')
	mobBtn.classList.toggle('active')
	document.body.classList.toggle('hidden')
}

function bodyPositionScroll() {
	let i = window.scrollY
	if (window.scrollY == 0) {
		header.classList.remove('scroll')
		header.classList.remove('defolt')
	} else if (lastPositionScroll < i) {
		header.classList.remove('scroll')
		header.classList.add('defolt')
	} else if (lastPositionScroll > i && window.scrollY !== 0) {
		header.classList.remove('defolt')
		header.classList.add('scroll')
	}
	lastPositionScroll = i
}

// pick didn`t
let dataIdIntput = document.querySelectorAll('.pick__cards')
dataIdIntput.forEach(element => {
	// console.log('---------');
	let label = element.querySelectorAll('label')
	element = element.querySelectorAll('input[data-id]')

	element.forEach(element => {
		let input = element
		let dataId = element.attributes['data-id'].value
		input.setAttribute('checked', true)
		// console.log(input);

		label.forEach(element => {
			// console.log(element.attributes['for'].value);
			element = element.attributes['for'].value
			if (element = dataId) {
				input.setAttribute('checked', true)
			}


		})
	})
});
// finish




mobBtn.addEventListener('click', headBtnActive)
window.addEventListener('scroll', bodyPositionScroll)

