import API from "../../scripts/api.js";
import photographerFactory from "../../scripts/factories/photographer.js";

async function displayData() {
	const $photographBanner = document.querySelector(".photograph-banner");
	const $mediasSection = document.querySelector(".medias");

	const photographerId = parseInt(new URL(document.location).searchParams.get("id"));
	const data = await API.getMedias(photographerId);
	const photographerModel = photographerFactory(data.photographer);
	const photographerBannerDOM = photographerModel.getUserBannerDOM();

	$photographBanner.parentElement.replaceChild(photographerBannerDOM, $photographBanner);

	data.medias.forEach((media) => {
		const mediaCardDOM = document.createElement("div");
		const thumbnail = document.createElement("div");
		const folder = data.photographer.name.split(" ")[0].replace("-", " ");

		if (media.image) {
			thumbnail.innerHTML = `
                <img src="assets/medias/${folder}/${media.image}" height="400" />
            `;
		} else {
			thumbnail.innerHTML = `
                <video src="assets/medias/${folder}/${media.video}" height="400" controls="true"></video>
            `;
		}

		mediaCardDOM.appendChild(thumbnail);
		mediaCardDOM.innerHTML += `
            <p>${media.title}, ${media.likes} likes</p>
        `;

		$mediasSection.appendChild(mediaCardDOM);
	});
}

async function init() {
	// Affiche le photographe et ses photos
	displayData();
}

init();
