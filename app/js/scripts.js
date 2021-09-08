let mobMenu = document.querySelector('.mobile-menu')
let mobBtn = document.querySelector('.header__btn')


function headBtnActive() {
	mobMenu.classList.toggle('active')
	mobBtn.classList.toggle('active')
}

mobBtn.addEventListener('click', headBtnActive)