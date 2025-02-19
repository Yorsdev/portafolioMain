const currentYearDOM = document.getElementById('currentyear');

function updateCurrentYear() {
	const currentYear = new Date().getFullYear();

	currentYearDOM.textContent = `@${currentYear}`;
}

export default updateCurrentYear;
