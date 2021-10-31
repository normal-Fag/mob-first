const main_content = document.querySelector('.main-content');
const burger_btn = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burger_btn.addEventListener('click', () => {
	menu.classList.toggle('active');
	main_content.classList.toggle('blure');
})