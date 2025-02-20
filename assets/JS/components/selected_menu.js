const navbarListDOM = document.querySelector('.nav__links');
const navbarLinksDOM = document.querySelectorAll('.number__nav');
const sectionsDOM = document.querySelectorAll('section');

function activeMenu() {
	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY + 100;

		sectionsDOM.forEach((section, index) => {
			if (
				scrollPosition >= section.offsetTop &&
				scrollPosition < section.offsetTop + section.offsetHeight
			) {
				const activeLinkDOM = navbarListDOM.querySelector(
					'.navbar__link.active',
				);

				if (activeLinkDOM) {
					activeLinkDOM.classList.remove('active');
				}

				navbarLinksDOM[index].classList.add('active');
			}
		});
	});
}

export default activeMenu;