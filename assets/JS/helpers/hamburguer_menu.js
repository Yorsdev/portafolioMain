

function hamburguer(){
    const toggleBtn = document.querySelector('.navbar__toggle');
    const navLinks = document.querySelector('.nav__links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('nav__links--visible');
    });
}
export default hamburguer;