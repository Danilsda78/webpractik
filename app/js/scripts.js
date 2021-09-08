let mobMenu = document.querySelector('.mobile-menu')
let mobBtn = document.querySelector('.header__btn')
let header = document.querySelector('.header')
let lastPositionScroll = 0


function headBtnActive() {
	mobMenu.classList.toggle('active')
	mobBtn.classList.toggle('active')
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


mobBtn.addEventListener('click', headBtnActive)
window.addEventListener('scroll', bodyPositionScroll)
