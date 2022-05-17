import { getPhotographFolder } from "../utils/functions";

const mediaList = [];
let mediaList_index = 0;
let photographFolder;

function init(medias, photographer_name) {
	const $lightbox__arrowLeft = document.querySelector(".lightbox__arrowLeft");
	const $lightbox__arrowRight = document.querySelector(".lightbox__arrowRight");
	const $lightbox__close = document.querySelector(".lightbox__close");

	photographFolder = getPhotographFolder(photographer_name);

	medias.forEach((m) => {
		mediaList.push(m);
	});

	$lightbox__arrowLeft.addEventListener("click", previous);
	$lightbox__arrowRight.addEventListener("click", next);
	$lightbox__close.addEventListener("click", close);
}

function open(index) {
	const $body = document.querySelector("body");
	const $overlay = document.querySelector(".overlay");
	const $lightbox = document.querySelector(".lightbox");

	$lightbox.setAttribute("aria-hidden", "false");
	$overlay.setAttribute("aria-hidden", "false");
	$body.classList.add("no-scroll");

	displayMedia(index);

	$lightbox.focus();
}

function close() {
	const $body = document.querySelector("body");
	const $lightbox = document.querySelector(".lightbox");
	const $lightbox__img = document.querySelector(".lightbox__img");
	const $overlay = document.querySelector(".overlay");

	$lightbox.setAttribute("aria-hidden", "true");
	$overlay.setAttribute("aria-hidden", "true");
	$body.classList.remove("no-scroll");

	/* Prevent image flash when re-open */
	$lightbox__img.removeAttribute("src");
}

function displayMedia(index) {
	const $lightbox__img = document.querySelector(".lightbox__img");
	const $lightbox__video = document.querySelector(".lightbox__video");
	const $lightbox__title = document.querySelector(".lightbox__title");

	mediaList_index = index;

	$lightbox__title.innerHTML = mediaList[index].title;

	if (mediaList[index].image) {
		$lightbox__video.setAttribute("aria-hidden", "true");

		$lightbox__img.setAttribute("aria-hidden", "false");
		$lightbox__img.src = `assets/medias/${photographFolder}/${mediaList[index].image}`;
	} else {
		$lightbox__img.removeAttribute("src"); // Prevent image flash when re-open
		$lightbox__img.setAttribute("aria-hidden", "true");

		$lightbox__video.setAttribute("aria-hidden", "false");
		$lightbox__video.src = `assets/medias/${photographFolder}/${mediaList[index].video}`;
	}
}

function next() {
	mediaList_index++;

	if (mediaList_index > mediaList.length - 1) mediaList_index = 0;

	displayMedia(mediaList_index);
}

function previous() {
	mediaList_index--;

	if (mediaList_index < 0) mediaList_index = mediaList.length - 1;

	displayMedia(mediaList_index);
}

export default { mediaList, init, open, close, next, previous };
