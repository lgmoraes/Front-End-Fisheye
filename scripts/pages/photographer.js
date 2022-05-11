import API from "../api";
import photographerFactory from "../factories/photographer";
import mediaFactory from "../factories/media";
import contactForm from "../utils/contactForm";

async function displayData(data) {
	const $photographBanner = document.querySelector(".photograph-banner");
	const $mediasSection = document.querySelector(".medias");

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
	const photographerId = parseInt(new URL(document.location).searchParams.get("id"));
	const data = await API.getMedias(photographerId);

	/* Affiche le photographe et ses photos */
	displayData(data);

	/* MODAL */
	contactForm.init(data.photographer.name);
}

init();
