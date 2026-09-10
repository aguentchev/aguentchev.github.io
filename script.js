console.log("start")
const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const themeIcon = document.querySelector('#btn-theme')
const btnHamburger = document.querySelector('.fa-bars')
console.log(btnTheme)
console.log(body)

const themeButton = document.querySelector('.btn--icon')
console.log(themeButton)

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
	console.log(btnTheme)
	console.log(body)

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  	addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

/*const toggleTheme = () => {
	console.log("button press")
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')
}*/
const toggleTheme = () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    body.classList.add('light')

    themeButton.innerHTML = `
      <i aria-hidden="true" class="fas fa-moon"></i>
    `
  } else {
    body.classList.remove('light')
    body.classList.add('dark')

    themeButton.innerHTML = `
      <i aria-hidden="true" class="fas fa-sun"></i>
    `
  }
  //FontAwesome.dom.i2svg()
}

themeButton.addEventListener('click', toggleTheme)


const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
