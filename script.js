// Меню бургер
const burgerMenuOpen = () => {
	let elem = document.querySelector('.menu-window'),
	menu = document.querySelector('.header__nav_list')
	elem.style.display = 'block'
	document.body.style.overflow = 'hidden'
}
const burgerMenuClose = () => {
	let elem = document.querySelector('#burgerWindow')
	elem.style.display = 'none'
	document.body.style.overflow = 'scroll'
}

// Добавление-удаление соавтора в интернет-приемной
const addedToCoauthor = () => {
	$('.remove-to-coauthor__btn').css({'display':'block'})

	let coauthor = document.querySelector('.coauthor').cloneNode(true)
	coauthor.style.display = 'block'

	let cloneNode = document.querySelector('.coauthors')
	cloneNode.appendChild(coauthor)


	let couter = 0

	for (let i = 0; i < coauthor.length; i++){ 
	  	counter += parseInt(coauthor[i].innerHTML);
	}

}

const removeToLastCoauthor = () => {
	$('.coauthor').last().remove()

	if (!$('.coauthor').length) {
		$('.remove-to-coauthor__btn').css({'display':'none'})
		
	}
}


$('.sidebar__menu-burger').on('click', () => {
	$('#sidebarWindowBlock').addClass('sidebar__menu-window').css({'display':'block'})
	$('.sidebar__menu-window-list__closed').css({'display':'flex'})
})


$('.sidebar__menu-window-list__closed').on('click', () => {
	$('#sidebarWindowBlock').removeClass('sidebar__menu-window').css({'display':'none'})
	$('.sidebar__menu-window-list__closed').css({'display':'none'})
})



	