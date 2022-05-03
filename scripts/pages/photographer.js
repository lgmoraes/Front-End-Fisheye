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

	/* DISPLAY BANNER */

	$photographBanner.parentElement.replaceChild(photographerBannerDOM, $photographBanner);

	/* DISPLAY THUMBNAILS */

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
}

async function init() {
	// Affiche le photographe et ses photos
	displayData();
}

init();
