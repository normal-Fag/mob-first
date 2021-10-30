const main_content = document.querySelector('.main-content');
const burger_btn = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burger_btn.addEventListener('click', () => {
	// burger_btn.classList.toggle('active');
	menu.classList.toggle('active');
	main_content.classList.toggle('blure');
})