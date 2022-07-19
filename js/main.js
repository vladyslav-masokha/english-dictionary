'use strict';

// Header fixed
window.addEventListener('scroll', () => {
	const headerEl = document.querySelector('.header');

	if (window.pageYOffset >= 50) {
		headerEl.classList.add('fixed');
	} else {
		headerEl.classList.remove('fixed');
	}
});

// Navigation
const showMenu = () => {
	const bodyEl = document.body;
	const burgerEl = document.querySelector('.burger');
	const menuEl = document.querySelector('.header__nav');
	const menuItems = document.querySelectorAll('.header__nav_link');

	burgerEl.addEventListener('click', e => {
		e.preventDefault();
		menuEl.classList.toggle('visible');
		bodyEl.classList.toggle('stop-scroll');
		burgerEl.classList.toggle('open');
	});

	menuItems.forEach(e => {
		e.addEventListener('click', () => {
			menuEl.classList.remove('visible');
			bodyEl.classList.remove('stop-scroll');
			burgerEl.classList.remove('open');
		});
	});
};
showMenu();

// Light / Dark themes
function lightTheme() {
	document.body.classList.remove('dark');
	localStorage.theme = 'light';
}

function darkTheme() {
	document.body.classList.add('dark');
	localStorage.theme = 'dark';
}

const changeTheme = () => {
	if (document.body.classList.contains('dark')) {
		lightTheme();
	} else {
		darkTheme();
	}
};

if (localStorage.getItem('theme') === 'dark') {
	darkTheme();
} else if (localStorage.getItem('theme') === 'light') {
	lightTheme();
}

document
	.querySelector('.fa-circle-half-stroke')
	.addEventListener('click', changeTheme);

// Words
const render = (template, element) => {
	return Object.keys(element).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, element[key]);
	}, template);
};

const renderWords = () => {
	const wordListEl = document.querySelector('.words__list');
	const wordTemplate = document.getElementById('word-template').innerHTML;

	wordListEl.insertAdjacentHTML(
		'afterbegin',
		renderWords.words.map(e => render(wordTemplate, e)).join('')
	);
};
renderWords.words = [
	{ en: 'Interactive', ua: 'Інтерактивний' },
	{ en: 'Probably', ua: 'Мабуть' },
	{ en: 'Data', ua: 'Дані' },
	{ en: 'Investigate', ua: 'Дослідити' },
	{ en: 'Also', ua: 'Також' },
	{ en: 'Happen', ua: 'Трапляються' },
	{ en: 'Much', ua: 'Багато' },
	{ en: 'More', ua: 'Більше' },
];
renderWords();
