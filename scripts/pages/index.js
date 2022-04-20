import '../../scss/main.scss';
import data from '../../data/photographers.json';

async function displayData() {
	const photographersSection = document.querySelector(".photographers");

	data.photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Affiche les photographes
	displayData();
}

init();
