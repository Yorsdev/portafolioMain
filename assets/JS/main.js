
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import updateCurrentYear from './helpers/date_updater.js';
import getLightEffect from './helpers/animation_mouse.js';
import sendEmail from './helpers/send_form.js';
import changeLanguage from './helpers/language.js';
import initCustomCursor from './helpers/cursor_animated.js';
import hamburguer from './helpers/hamburguer_menu.js';
// import activeMenu from './components/selected_menu.js';

initCustomCursor();
loader();
resetToHome();
updateCurrentYear();
getLightEffect();
sendEmail();
changeLanguage();
document.addEventListener('DOMContentLoaded', () => {
  hamburguer();
});
// activeMenu();
