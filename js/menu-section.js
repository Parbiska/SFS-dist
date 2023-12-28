const menu = document.querySelectorAll('.header-menu__item_menu');

menu.forEach((section) => {
	section
		.querySelector('.header-menu__title_trigger')
		.addEventListener('click', () => {
			if (section.classList.contains('is-active')) {
				section.classList.remove('is-active');
			} else {
				section.classList.add('is-active');
			}
		});
});

const menuNav = document.querySelectorAll('.header-menu__nav-item_menu');

menuNav.forEach((section) => {
	section
		.querySelector('.header-menu__nav-trigger')
		.addEventListener('click', () => {
			if (section.classList.contains('is-active')) {
				section.classList.remove('is-active');
			} else {
				section.classList.add('is-active');
			}
		});
});
