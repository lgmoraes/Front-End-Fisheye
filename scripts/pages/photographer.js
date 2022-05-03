import API from "../api";
import photographerFactory from "../factories/photographer";
import mediaFactory from "../factories/media";

async function displayData() {
	const $photographBanner = document.querySelector(".photograph-banner");
	const $mediasSection = document.querySelector(".medias");

	const photographerId = parseInt(new URL(document.location).searchParams.get("id"));
	const data = await API.getMedias(photographerId);
	const photographerModel = photographerFactory(data.photographer);
	const photographerBannerDOM = photographerModel.getUserBannerDOM();

	/* BANNER */

	$photographBanner.parentElement.replaceChild(photographerBannerDOM, $photographBanner);

	/* THUMBNAILS */

	data.medias.forEach((media) => {
		const mediaModel = mediaFactory(media, data.photographer);
		const mediaCardDOM = mediaModel.getThumbnailDOM();

		$mediasSection.appendChild(mediaCardDOM);
	});

	document.querySelectorAll("video").forEach((video) => {
		video.addEventListener("mouseenter", () => {
			video.play();
		});
		video.addEventListener("mouseleave", () => {
			video.pause();
		});
	});

	/* INSERT */

	const likes = data.medias.reduce((cumul, media) => cumul + media.likes, 0);

	const insertDOM = document.querySelector(".insert");
	insertDOM.className = "insert";
	insertDOM.innerHTML = `
		<p>${likes} ❤</p>
		<p>${data.photographer.price}€ / jour</p>
	`;
}

async function init() {
	// Affiche le photographe et ses photos
	displayData();
}

init();
