// const formDOM = document.querySelector('#form');
// const modalDOM = document.querySelector('#modal');
// const buttonCloseDOM = document.querySelector('#btn_close-modal');

// function openModal() {
// 	modalDOM.open = true;
// }
// function closeModal() {
// 	modalDOM.open = false;
// }

// function sendEmail() {
// 	formDOM.addEventListener('submit', (e) => {
// 		e.preventDefault();
// 		const params = {
// 			name: document.getElementById('name').value,
// 			email: document.getElementById('email').value,
// 			subject: document.getElementById('subject').value,
// 			message: document.getElementById('message').value,
// 		};

// 		if (params.name && params.email && params.subject && params.message) {
// 			emailjs.send('service_fsmn541', 'template_qquh9eb', params).then(
// 				(response) => {
// 					console.log('SUCCESS!', response.status, response.text);
// 					openModal();
// 				},
// 				(error) => {
// 					console.log('FAILED...', error);
// 				},
// 			);
// 		}
// 	});
// }

// buttonCloseDOM.addEventListener('click', closeModal);

// export default sendEmail;


const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const buttonCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;

	// Cerrar automáticamente después de 3 segundos
	setTimeout(() => {
		closeModal();
	}, 3000);
}

function closeModal() {
	modalDOM.open = false;
}

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		const params = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs.send('service_fsmn541', 'template_qquh9eb', params).then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					openModal();
					formDOM.reset(); // Limpiar formulario después del envío
				},
				(error) => {
					console.log('FAILED...', error);
				}
			);
		}
	});
}

buttonCloseDOM.addEventListener('click', closeModal);

export default sendEmail;