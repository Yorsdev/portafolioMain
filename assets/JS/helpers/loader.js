const loaderDOM = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', () => {
		loaderDOM.classList.add('loader--hidden');
	});
}

export default loader;