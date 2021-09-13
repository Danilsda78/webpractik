let mobMenu = document.querySelector('.mobile-menu')
let mobBtn = document.querySelector('.header__btn')
let header = document.querySelector('.header')
let app = document.querySelector('.app')
let lastPositionScroll = 0
let cards = document.querySelectorAll('.pick__cards')
let popap = document.querySelector('#popap')
let popapOn = document.querySelector('.header__item.drop')
let popapOff = document.querySelector('#popap .popap__btn')
let scroll = true


function headBtnActive() {
	mobMenu.classList.toggle('active')
	mobBtn.classList.toggle('active')
	document.body.classList.toggle('hidden')
	scroll = false
}

function bodyPositionScroll() {
	if (!scroll) return
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

cards.forEach(card => {
	let inputs = card.querySelectorAll('input')
	let labels = card.querySelectorAll('label')
	let inputName = card.querySelector('input').attributes.name.value

	inputs.forEach((intput, i) => {
		i += 1
		intput.setAttribute('id', inputName + i)
		labels[i - 1].setAttribute('for', inputName + i)
	});
});

mobBtn.addEventListener('click', headBtnActive)
window.addEventListener('scroll', bodyPositionScroll)
popapOn.addEventListener('click', el => {
	scroll = true
	popap.classList.toggle('active')
	app.classList.toggle('hidden')
})
popapOff.addEventListener('click', el => {
	scroll = false
	popap.classList.toggle('active')
	app.classList.toggle('hidden')
})


