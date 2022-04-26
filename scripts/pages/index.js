import "../../scss/main.scss";

async function displayData() {
	const photographersSection = document.querySelector(".photographers");
	const data = await API.getPhotographers();

	data.forEach((photographer) => {
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
