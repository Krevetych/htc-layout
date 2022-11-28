const modalBtns = document.querySelector('._modal-open');
const modal = document.querySelector('._modal');
const singIn = document.getElementById('sing')
const body = document.body
const logname = document.getElementById('logname')
const login = document.getElementById('login')
if (localStorage.getItem('login')?.length > 0) {
	modalBtns.textContent = 'Выйти'
} else {
	modalBtns.textContent = 'Войти'
}
login.addEventListener('input', () => {
	localStorage.setItem('login', login.value);
})
logname.addEventListener('input', () => {
	localStorage.setItem('login', logname.value);
})
function openModal(elem) {
	elem.classList.add('_active');
	body.classList.add('_locked')
}

function closeModal(e) {
	e.classList.remove('_active');
	body.classList.remove('_locked')
	singIn.textContent = 'Выйти'
	modalBtns.classList.add('logout')
	modalBtns.classList.remove('modal__btn')
	localStorage.setItem('login', login.value);
	logname.value = localStorage.getItem('login');
}

modalBtns.addEventListener('click', () => {
	if (singIn.textContent == 'Войти') {
		openModal(modal)
	} else {
		localStorage.clear()
		logname.value = localStorage.getItem('login');
		singIn.textContent = 'Войти'
		modalBtns.classList.add('modal__btn')
		modalBtns.classList.remove('logout')
	}
})
document.querySelector('.modal-close').addEventListener('click', () => {
	if (login.value != '') {
		closeModal(modal)
	}
})

logname.value = localStorage.getItem('login');



